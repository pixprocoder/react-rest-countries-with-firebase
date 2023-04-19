import axios from 'axios';
import React, {useState, useEffect } from 'react';
import Country from './Country';

const Countries = () => {

    const [Countries, setCountries] = useState([])

    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then(data => setCountries(data.data))
    },[])

    return (
        <div className='container mx-auto'>
            <h1>All countries {Countries.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    Countries.map(country => <Country country={country} key={country.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;