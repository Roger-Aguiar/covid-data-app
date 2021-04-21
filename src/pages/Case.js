import React, { Component } from 'react'
import {nanoid} from 'nanoid';
import '../App.css';

class Case extends Component 
{       
    render() 
    {    
        const {countries} = this.props.countries;
        const countriesCopy = countries.filter(countryName => countryName.All.country !== undefined);
        
        return (
            
            <div className = 'containerMargin'>                
                {countriesCopy.map(country => (            
                    <div key = {nanoid()} className = 'caseContainer'>
                        <h3 className = 'textAlign fontSize'>            
                            {country.All.country + ' - ' + country.All.abbreviation}
                        </h3>
                        <p className = 'textAlign fontSize'>Population: {country.All.population}</p>
                        <p className = 'textAlign fontSize'>Confirmed: {country.All.confirmed}</p>
                        <p className = 'textAlign fontSize'>Recovered: {country.All.recovered} </p>
                        <p className = 'textAlign fontSize'>Deaths: {country.All.deaths} </p>                    
                    </div>
                ))}      
            </div>
        )
    }
}

export default Case
