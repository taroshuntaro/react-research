define(function(require, exports, module) {
  const React = require('react');
  const Form = require('./Form');

  /* Sample Components */
  const Sample = () => {
    return (
      <div className='container'>
        <h2>Sample</h2>
        <Form />
      </div>
    );
  };
  module.exports = Sample;
});
