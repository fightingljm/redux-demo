import React from 'react';
import {connect} from 'react-redux';
import PostBody from './PostBody';
import {fetchComments} from '../actions/commentActions'

class Home extends React.Component {
  componentWillMount(){
    this.props.fetchComments();
  }
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

Home.propTypes = {
  fetchComments:React.PropTypes.func.isRequired
}

export default connect(mapStateToProps,{fetchComments})(Home);
