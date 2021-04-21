import React, { Component } from 'react'
import Case from './Case';
import ApiSus from './ApiSus';

class Cases extends Component 
{     
  state = 
  {
    countries: []
  } 

  async componentDidMount()
  {
    const response = await ApiSus.get('');    
    this.setState({countries: Object.values(response.data)});    
  }

  render()
  {        
    return (
      <div>
        <h1>Number of cases</h1> 
        <Case countries = {this.state}></Case>                                                                         
      </div>
    )
  }    
}

export default Cases;