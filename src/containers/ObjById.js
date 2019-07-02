import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class IndividualItem extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  fetchData() {
    this.props.getData(this.id.value)
  }

  render() {
    const data = this.props.data;
    return (
      <div>
        <input type="text" ref={(node) => this.id = node }/>

        <button onClick={() => this.fetchData()}>Fetch Data</button>
        <div className="content-wrapper">
          {data.title}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ obj }) => ({
  data: obj.data
})

const mapDispatchToProps = (dispatch) => ({
  getData : (id) => dispatch({ type: actions.GET_OBJ_BY_ID_START, id })
})

export default connect(mapStateToProps, mapDispatchToProps)(IndividualItem);


