import React from 'react';
import {connect} from 'react-redux';
import PostBody from './PostBody';

class Home extends React.Component {
  render(){
    // console.log(this.props.posts);
    let postList = this.props.posts.map(item => {
      return <PostBody key={Math.random()} id={item.id}>{item.title}</PostBody>
    })
    return(
      <div className="home">
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts:state.posts
})

export default connect(mapStateToProps)(Home);
