import React from 'react';
import TVPanel from '../components/sections/TVPanel';

class IndividualItem extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <TVPanel id={this.props.match.params.id} />
      </div>
    )
  }
}

export default IndividualItem;


