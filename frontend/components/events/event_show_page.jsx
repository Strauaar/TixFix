import React from 'react';

class EventShowPage extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    console.log(this.props);
    let { eevent } = this.props;
    return (
      <div>
        HI
      </div>
    )
  }
}

export default EventShowPage;
