
# [TixFix](https://tixfix.herokuapp.com/#/)
TixFix is a StubHub.com clone (legacy) with features listed as follows.
(TixFix uses limited seeded data as live data is not free)
## Features
+ Login to view user specific data
+ Search and filter events by date, location, category, or name of the event
+ Sell and buy tickets
+ Like your favorite bands, artists, teams or troupe to keep track of their events
+ Like your favorite events
+ View all your ticket listings, sales, and purchases all in one place on the user page

## Home
![TixFix-Home](https://github.com/Strauaar/TixFix/blob/no_subcats/screenshots/tixfix-home.png "TixFix-Home")

## Login
![TixFix-Login](https://github.com/Strauaar/TixFix/blob/no_subcats/screenshots/login-page.png)

## Sell Tickets
![TixFix-Sell-Page](https://github.com/Strauaar/TixFix/blob/no_subcats/screenshots/sell-tickets-page.png)

## User page
![TixFix-Sell-Page](https://github.com/Strauaar/TixFix/blob/no_subcats/screenshots/user-hub.png)

## Technologies
+ [React](https://reactjs.org/)
+ [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
+ [Ruby](https://www.ruby-lang.org/en/)
+ [Ruby on Rails](http://rubyonrails.org/)

## Code

###### Vertical Float:
+ In order to maintain consistent spacing in between event cards on the home page, a custom vertical float was implemented to allow for dynamic card sizing and maintain order of incoming events.


      import React from 'react';
      import { merge } from 'lodash';

      class EventsUl extends React.Component {
        constructor(props){
          super(props)
        }

        loadMoreEvents(childrenCount, categoryId) {
          ...
        }

        renderLoadMoreButton(childrenCount) {
          ...
        }

        renderEventCards(children, start_index) {
          let result = [];
          for (let i = start_index; i < children.length; i+=3) {
            result.push(children[i]);
          }
          return result.map(EventCard => EventCard);
        }
        render() {
          const childrenCount = React.Children.count(this.props.children);
          const children = React.Children.toArray(this.props.children);

          return (
            <div>
              <div className="event-list">
                <div className="col">
                  {
                    this.renderEventCards(children, 0)
                  }
                </div>
                <div className="col">
                  {
                    this.renderEventCards(children, 1)
                  }
                </div>
                <div className="col">
                  {
                    this.renderEventCards(children, 2)
                  }
                </div>
              </div>
              {this.renderLoadMoreButton(childrenCount)}
            </div>
          )
        }
      }

###### Search function
+ The search method implemented allowed for a single multi-use function both on the backend and frontend of the app.
+ The filter was passed as one object into the function which held the status of all the filters in the current moment at the time of calling.
+ State was managed using Redux which allowed the filter to be currently maintained at all times.
+ The corresponding filter object structure was as follows and can be seen decomposed in the second listed function: 

      filter: {
        name: ...,
        categoryId: ...,
        date: ...,
        location: ...
      }

+ Frontend AJAX request for search(called through a thunk action creator):

      export const fetchSearchEvents = (filter) => (
        $.ajax({
          method: 'GET',
          url: 'api/event/searching',
          data: { filter }
        })
      );
+ Backend corresponding rails controller action which took in the data from the above function:

      def search
        @count = params[:current_count] #used by another function
        if  @count
          @events = Event.filter_by(params[:filter]).limit(10).offset(@count.to_i)
        else
          @events = Event.filter_by(params[:filter]).limit(10)
        end
        render :index
      end
+ Below is the `Event` class `filter_by` method used in the above function:

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
+ Below is the `filter_date` method utilizing the given value in the filter object:
        
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
