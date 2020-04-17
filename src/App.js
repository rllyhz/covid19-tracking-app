import React from 'react';
import coronaLogo from './images/image_covid19.png';
import { Navbar, Cards, Charts, CountryPicker, Footer } from './components';
import styles from './App.module.css';

import { fetchData, fetchDataByCountry } from './api';


class App extends React.Component {

   state = {
      data: {},
      country: '',
   }

   async componentDidMount() {
      const data = await fetchData();
      this.setState({ data: data });
   }

   handleCountryChange = async (country) => {
      // fetch data
      const countryData = await fetchDataByCountry(country);
      // set state
      this.setState({ data: countryData, country: country });

   }

   render() {
      const { data, country } = this.state;
      return (
         <div className={styles.app}>
            <Navbar />
            <div className={styles.container}>
               <img className={styles.coronaLogo} src={coronaLogo} alt="Covid-19 Logo" />
               <Cards data={data} />
               <CountryPicker handleCountryChange={this.handleCountryChange} />
               <Charts data={data} country={country} />
            </div>
            <Footer />
         </div>
      )
   }
}

export default App;