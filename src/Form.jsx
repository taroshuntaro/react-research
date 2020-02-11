define(function(require, exports, module) {
  const React = require('react');

  const PullDown = props => {
    const items = props.items.value.map(item => (
      <option key={item.toString()} value={item.toString()}>
        {item}
      </option>
    ));

    return (
      <div className='form-group'>
        <label>{props.items.title}：</label>
        <select>
          <option value=''></option>
          {items}
        </select>
      </div>
    );
  };

  const item01 = {
    title: 'pulldown 01',
    value: [1, 2, 3, 4, 5]
  };

  const item02 = {
    title: 'pulldown 02',
    value: ['りんご', 'ぶどう', 'いちご', 'みかん', 'れもん']
  };

  const Form = props => {
    return (
      <div className='form container'>
        <form name='sample_form' method='post' action=''>
          <PullDown items={item01} />
          <PullDown items={item02} />
        </form>
        <button type='submit' className='btn btn-primary onSubmit'>
          検索
        </button>
      </div>
    );
  };
  module.exports = Form;
});
