import React, { useState} from 'react'

export default function TextBox(props) {
  const [text, setText] = useState("")
  
  const darkMode = {
    backgroundColor : "#212529",
    color : "white",
    
  }

  const lightMode = {
    backgroundColor : "white",
    color : "black",  
  } 

  const capitaliseText = () => {
    props.showAlert("Succesfully Capitalised","success")
    if(getText())
    {
      let selectedText = getText()
      if (text.includes(selectedText))
      { 
        
        let rem = text.split(selectedText)
        let newText = rem[0]+selectedText.toUpperCase()+rem[1]
        setText(newText)
        return;
      }
    }
    let newText = text.toUpperCase()
    setText(newText)
  }

  const onChange = (e) => {
    setText(e.target.value);
  }

  const getText = () => {
    let selectedText = window.getSelection().toString();
    return selectedText;
  }

  const eraseText = ()=>{
    let selectedText = getText()
    
    if (text.includes(selectedText))
    { 
      
      let rem = text.split(selectedText)
      let newText = rem[0]+rem[1]
      setText(newText)
    }

  }
  return (
    <div style={props.mode==="dark"?darkMode:lightMode}>
      <h1>{props.title}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} placeholder="Jot it down" onChange={onChange} id="myBox" rows="12"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={capitaliseText}>Captalise</button>
      <button className="btn btn-primary mx-2" onClick={eraseText}>Erase</button>

      <div className="container my-3">
        <h1>Text Summary</h1>
        <b>{text.length ? text.split(" ").length : 0} words and {text.length} characters</b>
      </div>
    </div>
  )
}
