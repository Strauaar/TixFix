class Subevent < ApplicationRecord
  validates :name, :category_id, :venue_id, :event_id, presence: true

  belongs_to :venue,
    primary_key: :id,
    class_name: :Venue,
    foreign_key: :venue_id

  belongs_to :category,
    primary_key: :id,
    class_name: :Category,
    foreign_key: :category_id

  belongs_to :performer,
    primary_key: :id,
    class_name: :Performer,
    foreign_key: :performer_id

  belongs_to :event,
    primary_key: :id,
    class_name: :Event,
    foreign_key: :event_id

  def self.filter_date(category_ids, date_filter)
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
      if category_ids == -1
        return Subevent.all
      else
        return Subevent.where(category_id: category_ids)
      end
    end
    # Subevent.where(:category_ids => #in cat_id, :date => dates )
    first_filter =Subevent.where(["date BETWEEN (?) AND (?)", start_date, end_date])
    if category_ids != -1
      return second_filter = first_filter.where(category_id: category_ids)
    else
      return first_filter
    end
  end
end
