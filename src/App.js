import React from 'react';

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css';
import { fetchData } from './api'
 
import coronaImg from './images/corona.png'

class App extends React.Component{
    
    state = {
        data : {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();        
        this.setState({data:fetchedData})         
    }


    handleCountryChange =async(country) => {
        const fetchedData = await fetchData(country);

        this.setState({data:fetchedData, country :country})
    }

    render(){
        const {data,country} =this.state;

        return(
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img src={coronaImg} className={styles.image} alt='COVID-19'/>
                    <h1>The Covid19 Stats</h1>
                </div>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <footer className={styles.footer}><p>Developed using React.JS, Chart.JS, Material UI | Suhas Salian</p></footer>
            </div>
        )
    }
}

export default App