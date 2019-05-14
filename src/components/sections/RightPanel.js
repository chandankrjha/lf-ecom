import React from 'react';
import Tvs from '../../services/mockedTvs.json';
import { Link } from 'react-router-dom';
console.log(Tvs);


// if ()

function RightPanel() {
  return (
    <div className="right-panel">
      {
        Tvs.searchresult.map((tv, key) => {
          return <div className="product" key={key}>
            <Link to={`/list/${tv.productId}`}  >
              <img src={tv.imageURL} />
            </Link>
          </div>
        })
      }
    </div>
  );
}

export default RightPanel;