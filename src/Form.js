import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  handleChange = (event) =>{
    console.log(event.target.value)
  }


  render(){
    return(
    <div>
    <input type ="text" placeholder ="input name"   onChange ={this.handleChange}/>
    </div>
    )
  }
}
 export default Form

