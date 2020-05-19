import React from 'react';

import {Cards, Charts, CountryPicker} from './components';
import Styles from './App.module.css'
import { fetchData } from './api';


class App extends React.Component {

    state = {
        data: {},
    }
    
    async componentDidMount(){
        const fetchedData  = await fetchData();

        this.setState({data: fetchedData});
    }

    render() {
        const { data } = this.state;
        
        return <div className={Styles.container}>
        <Cards data={data}/>
        <CountryPicker /> 
        <Charts />
        </div> 
    }
}

export default App;