import React, { Component } from 'react'
import Case from './Case';
import ApiSus from './ApiSus';
import '../App.css';

class Cases extends Component 
{     
  state = 
  {
    countries: [],
    loading: false    
  } 

  async componentDidMount()
  {
    this.setState({loading: true});
    const response = await ApiSus.get('');    
    this.setState({countries: Object.values(response.data), loading: false});    
  }

  render()
  { 
    const countriesCopy = this.state.countries.filter(countryName => countryName.All.country !== undefined);;
      
    return (
      <div>
        <h1 className = "pageTitleFont">Number of cases</h1>
        <h3 className = "fontSizeCaseComponent">{countriesCopy.length} countries</h3> 
        <Case countries = {this.state}></Case>                                                                         
      </div>
    )
  }    
}

export default Cases;