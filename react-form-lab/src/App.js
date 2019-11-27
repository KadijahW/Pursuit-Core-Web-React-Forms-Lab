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
  console.log('submitted' , event.target.value)
  this.setState({
  submitted: true
  })
}

handleInput = (event) => {
  console.log('inputed:' , event.target.value)
  this.setState({
    inputValue: event.target.value
  })
}

handleSelectChange = (event) => {
  console.log('selected' , event.target.value)
  this.setState({
    functions: event.target.value
  })
}

render(){
  console.log(this.state)
  const {inputValue, functions, submitted} = this.state;
  if(submitted){
    let empArr = []
   let str_to_array = inputValue.split(',')
    empArr.push(str_to_array)
    console.log(empArr)
  }
  return (
    <div className="App">
      <h1>Enter each number in the array, separated by a ','</h1>
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

      <button value={submitted}>calculate</button>
</form>
    </div>

  );
}
}


export default App;
