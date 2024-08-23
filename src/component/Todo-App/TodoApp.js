import React, { Component } from 'react';
import "../TodoApp.css";

export default class TodoApp extends Component {

    state={
        input: "",
        items: []
    };

handleChange=(event)=>{
    this.setState({
        input: event.target.value
    });
};

storeItems=(event)=>{
    event.preventDefault();
    const{input}=this.state;
    this.setState({
        items: [...this.state.items, input],
        input:""
    });

   
};

deleteItem=key=>{
   const val= window.confirm("Are you sure to delete?");
    if(val=== true){
const allItems=this.state.items;
allItems.splice(key,1);

this.setState({
    items:allItems
})}


}

  render() {

    const{input,items}=this.state;
    console.log(items);
    
    
    

    return (
      <div className='todo-container'>
       
        
        <form className='input-section' onSubmit={this.storeItems}>
        <h1>TODO APP</h1>
            <input type='text' value={input} onChange={this.handleChange} placeholder='Enter the items..'></input>
        </form>
         <ul>
            {items.map((data,index)=>(
                <li key={index}>{data} <i className="fa fa-trash-alt"
                aria-roledescription='()'
                onClick={() => this.deleteItem(index)}></i></li>
            ))}
         </ul>
      </div>
    )
  }
}
