
import './App.css';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

function App() {

const [markdown,setMarkdown]=useState("")

  return (
    <div className="App">
      <div className='div1'>
        <textarea rows="10" cols="50" onChange={(e)=>setMarkdown(e.target.value)}/>
      </div>
      <div className='div2'>
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
