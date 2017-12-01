
# [TixFix](https://tixfix.herokuapp.com/#/)

Find events and make money on TixFix.

## Features
+ Search and filter events by date, location, category, or name of the event
+ Sell and buy tickets from the TixFix community
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

### Challenges
###### Vertical Float:
+ In order to maintain consistent spacing in between event cards on the home page, a custom vertical float was implemented to allow for dynamic card sizing and maintain order of incoming events.


      import React from 'react';
      import { merge } from 'lodash';

      class EventsUl extends React.Component {
        constructor(props){
          super(props)
        }

        loadMoreEvents(childrenCount, categoryId) {
          if(categoryId === undefined) {
            this.props.fetchMoreEvents(childrenCount, merge({}, this.props.filter,{categoryId: null}));
          } else {
            this.props.fetchMoreEvents(childrenCount, merge({}, this.props.filter,{categoryId}));
          }
        }

        renderLoadMoreButton(childrenCount) {
          if(childrenCount % 10 === 0 && childrenCount !== 0) {
            return <div>
              <button onClick={() =>
                  this.loadMoreEvents(childrenCount, this.props.categoryId)} className="load-more-btn">
                  Load More
                </button>
              </div>
          }
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
