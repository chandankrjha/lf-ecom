import React from 'react';
import Tvs from '../../services/mockedTvs.json';

class TVPanel extends React.Component {
  render() {
    const tv = Tvs.searchresult.filter((tv) => tv.productId === this.props.id);
    return (
      <div className="product">
        <img src={tv[0].imageURL} />
      </div>
    )
  }
}

export default TVPanel;