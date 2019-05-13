import React from 'react';
import Tvs from '../../services/mockedTvs.json';

console.log(Tvs)

function RightPanel() {
  return (
    <div className="right-panel">
      {
        Tvs.searchresult.map((tv, key) => {
          return <div className="product" key={key}>  
            <img src={tv.imageURL} />
          </div>
        })
      }
    </div>
  );
}

export default RightPanel;