
// https://facebook.github.io/react/docs/tutorial.html

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="myCommentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);