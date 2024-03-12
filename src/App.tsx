import { useState } from 'react'
import './App.css'
import JsonParser from './JsonParser'

function App() {
  const [parsedJson, setParsedJson] = useState(null);

  const onParseJson = (parsedData: any) => {
    setParsedJson(parsedData);
  }

  return (
    <>
      <JsonParser onParseJson={onParseJson} />

      <div>
        {parsedJson && (
          <div>
            <h2>Parsed JSON:</h2>
            <pre>{JSON.stringify(parsedJson, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  )
}

export default App
