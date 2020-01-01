define(function(require, exports, module) {
  const React = require("react");

  const Card = props => {
    const tweetList = props.tweetList;
    const items = tweetList.map(tweet => (
      <li className="list-group-item" key={tweet.id}>
        <div className="card" style={{ margin: "5px" }}>
          <div className="card-body">
            <h5 className="card-title">{tweet.account_name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {tweet.account_id}
            </h6>
            <p className="card-text">{tweet.text}</p>
          </div>
        </div>
      </li>
    ));

    return (
      <div className="container">
        <h2>Card</h2>
        <div className="list container">
          <ul className="list-group">{items}</ul>
        </div>
      </div>
    );
  };
  module.exports = Card;
});
