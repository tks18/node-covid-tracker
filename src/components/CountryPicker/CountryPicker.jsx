import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import Styles from './CountryPicker.modules.css';
import { fetchCountries } from '../../api';

const CountryPicker = function({ handleCountryChange }){
    
    const {fetchedCountries, setFetchedCountries} = useState([]);
    
    useEffect(() => {
        const fetchedCountries = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchedCountries();
    }, [setFetchedCountries]);

    return <FormControl className={Styles.formcontrol}>
        <NativeSelect defaultValue='' onChange={(e)=> {
            handleCountryChange(e.target.value)
        }}>
            <Option value="global">Global</Option>
            {fetchedCountries.map((country, i) => <Option key={i} value={country}>{country}</Option>)}
        </NativeSelect>
    </FormControl>
}

export default CountryPicker;