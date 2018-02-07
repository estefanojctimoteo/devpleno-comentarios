import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {
  constructor(props){
    super(props)
    this.postNewComment = this.postNewComment.bind(this)
    this.state = {
      comments: {
        /* OLD
        '1': {
           comment: 'first comment'
        },
        '2': {
           comment: 'second comment'
        } */ 
      },
      isLoggedIn: false,
      user: {

      }
    }


    /* Para executar o "npm t" (testar), é preciso comentar todo este bloco, 
       pois depende de lib externa e, portanto, atrapalha o teste.
       Se não estiver testando, descomentar todo o bloco abaixo.  */
    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })  

    this.props.auth.onAuthStateChanged((user)=>{
      //console.log('user', user)
      if(user){
        this.setState({ isLoggedIn: true, user })
      }else{
        this.setState({ isLoggedIn: false, user: {} })
      }
    })

  }
  postNewComment(comment){
    comment.user = {
      uid: this.state.user.uid,
      name: this.state.user.displayName
    }
    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment
    this.setState({
      comments: comments
    })
  }
  auth(provider){
    this.props.auth.signInWithPopup(this.props.providers[provider])
    //console.log(provider)
  }
  render() {
    return (
      <div className="container">
        { this.state.isLoggedIn && 
          <div>
            {this.state.user.displayName}
            <img alt={this.state.user.displayName} src={this.state.user.photoURL} /><br />
            <button onClick={() => this.props.auth.signOut()}>Deslogar</button>
            <NewComment postNewComment={this.postNewComment} />             
          </div>//{JSON.stringify(this.state.user)}
        }
        { !this.state.isLoggedIn && 
          <div className='alert alert-info'>
            <button onClick={()=> this.auth('facebook') }>Entre com o Facebook para comentar</button>
          </div>
        }
        <Comments comments={this.state.comments} />
      </div>
    )
  }
}

export default App
