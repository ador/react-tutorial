
// https://facebook.github.io/react/docs/tutorial.html

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="myCommentBox">
        Hello, world! I am a CommentBox.
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
        </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <b>Hello, world! I am a CommentList.</b>
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
        <b>This is the end of CommentList.</b>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

