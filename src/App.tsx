import './App.css';
import { Remarkable } from 'remarkable';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState('Type some *markdown* here!');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const getMarkdown = () => {
    const md = new Remarkable();
    return {__html: md.render(value)};
  };

  return (
    <div className="container">
      <div className='input'>
        <h3>Input</h3>
        <textarea className='input-text' onChange={handleChange} defaultValue={value} />
      </div>
      <div className='output'>
        <h3>Markdown</h3>
        <div dangerouslySetInnerHTML={getMarkdown()} className='output-text' />
      </div>
    </div>
  );
};

export default App;
