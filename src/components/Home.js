import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {
  render(){
    console.log(this.props.posts);
    return(
      <div>
        HOME
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts:state.posts
})

export default connect(mapStateToProps)(Home);
