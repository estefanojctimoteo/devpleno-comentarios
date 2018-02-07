import React /*, { Component } */ from 'react'

// functional stateless component
/*  **** OLD OLD ****
class Comment extends Component{
	render(){
		return(<p className="well">{this.props.comment.comment}</p>)
	}
} */

/*   **** OLD ****
const Comment = (props) => {
	return(<p className="well">{props.comment.comment}</p>)
}

*/

const Comment = props =>
	<p className="well">
	{props.comment.comment}<br />
	<b>por: {props.comment.user.name}</b>
	</p>

export default Comment