
// https://facebook.github.io/react/docs/tutorial.html

var data = [
  {id: 1, author: "Johanna", text: "This is one comment"},
  {id: 2, author: "Mr. Walker", text: "This is *another* comment"},
  {id: 3, author: "Lilly", text: "Trallala"},
  {id: 4, author: "Angie", text: "I think..."}
];


var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="myCommentBox">
        Hello, world! I am a CommentBox.
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
        </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
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
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },
  render: function() {
    var md = new Remarkable();
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);

