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

  def filter_date(filter_date)
    subevents = self.subevents

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
      return self
    end
    result = [];
    self.each do |event|
      if event.subevents.any?{|subevent| (start_date..end_date).cover?(subevent.date)}
        result << event
      end
    end
    self.where(id: result.map(&:id))
  end

  def filter_location(location_filter)
    events = self
    filter = '%' + location_filter.split("").join("%") + '%'
    venue_ids = Venue.where('location LIKE ?', filter).pluck(:id)
    events.where(venue_id: venue_ids)
  end

  def self.filter(filter)
    events = Event.all
    if filter.categoryId != 'undefined'
      events = events.where(category_id: category_id)
    end
    if filter.date != 'undefined'
      events = events.filter_date(filter.date)
    end
    if filter.location != 'undefined'
      events = events.filter_location(filter.location)
    end
    events
  end

end
