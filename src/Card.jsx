define(function(require, exports, module) {
  const React = require("react");

  const Card = props => {
    const tweetList = props.tweetList;
    const items = tweetList.map(tweet => (
      <li className="list-group-item" key={tweet.id.toString()}>
        <div className="card" style={{ margin: "5px" }}>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.id}</h6>
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </li>
    ));

    return (
      <div className="list container">
        <ul className="list-group">{items}</ul>
      </div>
    );
  };
  module.exports = Card;
});
