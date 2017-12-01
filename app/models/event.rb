class Event < ApplicationRecord
  validates :name, :category_id, presence: true

  belongs_to :category,
    primary_key: :id,
    class_name: :Category,
    foreign_key: :category_id

  belongs_to :performer,
    primary_key: :id,
    class_name: :Performer,
    foreign_key: :performer_id

  belongs_to :venue,
    primary_key: :id,
    class_name: :Venue,
    foreign_key: :venue_id

  has_many :subevents,
    primary_key: :id,
    class_name: :Subevent,
    foreign_key: :event_id



  def self.filter_date(events, date_filter)

    if date_filter == 'This weekend'
      start_date = DateTime.now.end_of_week - 2
      end_date = DateTime.now.end_of_week
    elsif date_filter == 'Today'
      start_date = DateTime.now.beginning_of_day
      end_date = DateTime.now.end_of_day
    elsif date_filter == 'This month'
      start_date = DateTime.now
      end_date = DateTime.now.end_of_month
    elsif date_filter == 'All dates'
      return events
    end
    result = [];
    events.each do |event|
      if event.subevents.any?{|subevent| (start_date..end_date).cover?(subevent.date)}
        result << event
      end
    end
    self.where(id: result.map(&:id))
  end

  def self.filter_location(events, location_filter)
    filter = '%' + location_filter.downcase.split("").join("%") + '%'
    venue_ids = Venue.where('lower(location) LIKE ?', filter).pluck(:id)
    events.where(venue_id: venue_ids)
  end

  def self.filter(filters)
    events = Event.includes(:subevents)
    if filters["categoryId"] != ""
      child_cat_ids = Category.find(filters["categoryId"]).subcategories.pluck(:id)
      events = events.where(category_id: child_cat_ids)
    end
    if filters["date"] != ""
      events = Event.filter_date(events, filters["date"])
    end
    if filters["location"] != ""
      events = Event.filter_location(events, filters["location"])
    end
    events
  end

  def self.filter_by(filters)
    events = Event.includes(:subevents)
     if filters["name"] != ""
       query =  '%' + filters["name"].downcase.split('').join("%") + '%'
       events = Event.where("lower(name) LIKE ?", query)
     end
     if filters["categoryId"] != ""
       child_cat_ids = Category.find(filters["categoryId"]).subcategories.pluck(:id)
       events = events.where(category_id: child_cat_ids)
     end
     if filters["date"] != ""
       events = Event.filter_date(events, filters["date"])
     end
     if filters["location"] != ""
       events = Event.filter_location(events, filters["location"])
     end
     events
  end

end
