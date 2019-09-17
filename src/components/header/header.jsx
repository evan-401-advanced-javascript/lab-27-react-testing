import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
    }
  }

  handleToggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <React.Fragment>

        {this.state.visible ? <h1 id="head">My Awesome Header</h1> : null}
        <button onClick={this.handleToggle}>toggleHeader</button>
      </React.Fragment>
    )
  }
}

export default Header;
