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
  // console.log('submitted' , event.target.value)
  this.setState({
  submitted: true
  })
}

handleInput = (event) => {
  // console.log('inputed:' , event.target.value)
  this.setState({
    inputValue: event.target.value
  })
}

handleSelectChange = (event) => {
  // console.log('selected' , event.target.value)
  this.setState({
    functions: event.target.value,
  })
}

sumFunction = (inputValue) => {
  let count = 0;
  for (let i = 0; i < inputValue.length; i++){
    // console.log(str_to_array[i])
    count += parseInt(inputValue[i]) 
}
return count;
}

avgFunction = (inputValue) => {
  let count = 0;
  for(let i = 0; i < inputValue.length; i++){
    count += parseInt(inputValue[i])
  }
   count /= inputValue.length
    return count;
}

modeFunction = (inputValue) => {
  let obj = {}
  let largest = 0;
  for(let i = 0; i < inputValue.length; i++){
    if(obj[inputValue[i]]){
      obj[inputValue[i]] += 1
    }else{
      obj[inputValue[i]] = 1
    }
  }
  for(let value in obj){
    if(obj[value] > largest){
      largest = value
    }
  console.log(obj)
    return largest
  }
  return largest;

  }

render(){
  // console.log(this.state)
  const {inputValue, functions, submitted} = this.state;

 let count = 0;

  if(submitted){
   let str_to_array = inputValue.split(',')
    // console.log(str_to_array)

  if(functions === "sum"){
   count = this.sumFunction(str_to_array)
  }
  if(functions === "avg"){
 count = this.avgFunction(str_to_array)
}
if(functions === "mode"){
  count = this.modeFunction(str_to_array)
}
  }

  return (
    <div className="App">
      <h1>Enter each number in the array, separated by a ','  </h1>
 <form onSubmit={this.handleFormSubmit}>  

    <input type="text" 
       placeholder="enter numbers" 
       value={inputValue}
       onChange={this.handleInput}
    />

    <select id="functions" value={functions} onChange={this.handleSelectChange}>
      <option value=""></option>
     <option value='sum'>sum</option>
      <option value='avg'>average</option>
      <option value='mode'>mode</option>
    </select>

    <button value={submitted}>calculate</button>
</form>
<p>{submitted ? count : " " }</p>
    </div>
  );
}
}

export default App;
