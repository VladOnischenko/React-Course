import React from 'react';
import { connect } from 'react-redux';

const Likes = (props) => {
  return (
    <div className="button-controls">
      <button>&#10084; {props.likes}</button>
      <button>Dislike</button>
    </div>
  );
};

function mapStateToProps(state, action) {
  return {
    likes: state.likes,
  }
}

export default connect(mapStateToProps)(Likes);