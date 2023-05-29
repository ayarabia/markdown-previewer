import './App.css';
import React, {useState} from 'react';
import {marked} from 'marked'
import Docs from './components/docs';
import useLocalStorage from './hooks/useLocalstorage';

const App = () => {
  const [code, setCode] = useLocalStorage('code','## Hello')
  const [compiled, setCompiled] = useState('<h1 id="hello">Hello</h1>')
  const [hide, hidePreview] = useState(true)
  const [show, showDocs] = useState(true)

  const openMD = () => {
    console.log(0)
    hidePreview(true)
  }

  const openPreview = () => {
    console.log(0)
    hidePreview(false)
    showDocs(false)
  }
 const openDocs =() => {
  console.log(0)
  showDocs(true)
  hidePreview(false)
}
  const handleChange = (e) => {
    setCode(e.target.value)
    setCompiled(marked.parse(e.target.value))
  }

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">MarkDown</button>
          <button className="btn" onClick={openDocs}>Docs</button>
         <button onClick={openPreview}>Preview</button>
   
        </div>
        {
        hide ? 
          <div>
            <textarea onChange={handleChange} value={code}/>
          </div> : show?<Docs/>: <div>
            <textarea value={compiled}/>
          </div>
         
        }
      </div>
    </>
  )
}
export default App;