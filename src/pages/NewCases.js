import React from 'react'

const NewCases = (props) =>
{    
    const countries = props.countries;
    console.log(countries);
    //const {country, confirmed, deaths, recovered} = props.countries;
    return (
        <div>
            {/* <h2>{country}</h2>
            <p>Confirmed: {confirmed}</p>
            <p>Deaths: {deaths}</p>
            <p>Recovered: {recovered}</p>             */}
        </div>        
    )
}

export default NewCases;