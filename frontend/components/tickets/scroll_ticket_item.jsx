import React from 'react';
import TicketItem from './ticket_item';

class ScrollTicketItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("TICKET");
    console.log(this.props.ticket);
    return(
      <div>
        sup
      </div>
    )
  }
}

export default ScrollTicketItem;
