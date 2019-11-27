import React from 'react';
import './App.css';

class App extends React.Component{
constructor(){
  super()
this.state = {
  inputValue: '',
  functions: '',
  submitted: false,
}
}
handleFormSubmit = (event) =>{
  event.preventDefault()
  this.setState({
    submitted: true
  })
}


render(){
  const {inputValue, functions, submitted} = this.state;

  return (
    <div className="App">

<form onSubmit={this.handleFormSubmit}>  
      <input type="text" 
       placeholder="enter numbers" 
       value={inputValue}
       onChange={this.handleInput}/>

    <select id="functions" value={functions} onChange={this.handleSelectChange}>
      <option value=""></option>
     <option value='sum'>sum</option>
      <option value='avg'>average</option>
      <option value='mod'>mode</option>
    </select>

      <button>calculate</button>
</form>
    </div>

  );
}
}


export default App;
