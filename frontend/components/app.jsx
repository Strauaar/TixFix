import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import CategoryCardList from './categories/category_card_list';
import EventsListContainer from './events/events_list_container';
import EventShowPageContainer from './events/event_show_page_container';
import SubCategoryListContainer from './categories/subcategory_list_container';
import SubCategoryPageContainer from './categories/subcategory_page_container';
import EventCheckoutPage from './events/event_checkout_page';
import TicketSellSplashPage from './tickets/tickets_sell_splash_page';
import CFooter from './footer/footer';


class App extends React.Component {

  componentWillReceiveProps(newProps) {

  }

  render() {

    return (
      <div>
        <div className="nav-bar-background"></div>
        <NavBarContainer></NavBarContainer>

        <Switch>
          <Route exact path="/"component={CategoryCardList}/>
          <Route path="/category"component={CategoryCardList}/>
        </Switch>
        <Switch>
          <Route exact path="/" component={EventsListContainer}/>
          <Route path="/category/:id" component={EventsListContainer}/>
          <Route path="/events/:eventId/ticket/:ticketId" component={EventCheckoutPage} />
          <Route exact path="/events/:id" component={EventShowPageContainer} />
          <Route path="/subcategory/:id" component={SubCategoryPageContainer} />
          <Route path="/tickets/sell" component={TicketSellSplashPage} />
        </Switch>

        <Route path="/category/:id" component={SubCategoryListContainer} />
        <Switch>
          <Route exact path="/" component={CFooter}/>
          <Route path="/subcategory/:id" component={CFooter}/>
          <Route path="/category/:id" component={CFooter}/>
          <Route path="/tickets/sell" component={CFooter}/>
        </Switch>
      </div>
    )
  }
}


export default App;
