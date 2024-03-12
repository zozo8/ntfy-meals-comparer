import React, { useState } from 'react';
import testJson from './assets/test-menu.json'

function JsonParser({onParseJson}) {
  const [jsonInput, setJsonInput] = useState(JSON.stringify(testJson));
  

  const handleInputChange = (event) => {
    console.log(event);
    setJsonInput(event.target.value);
  };

  const handleParseJson = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      onParseJson(parsedData);
    } catch (error) {
      console.error('Invalid JSON format');
      onParseJson(null);
    }
  };

  return (
    <div>
      <h2>Paste JSON:</h2>
      <textarea
        value={jsonInput}
        onChange={handleInputChange}
        rows={10}
        cols={50}
      />
      <br />
      <button onClick={handleParseJson}>Parse JSON</button>
    </div>
  );
}

export default JsonParser;