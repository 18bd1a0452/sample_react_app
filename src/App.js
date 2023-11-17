import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    setData();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        Today's {data?.location?.name}'s Weather Forecast <br></br>
        Weather : {data?.current?.condition?.text}<br></br>
        Humidity : {data?.current?.condition?.humidity}<br></br>
        Pressure In : {data?.current?.pressure_in}<br></br>
        Precipitation In : {data?.current?.precip_in}<br></br>
        Temp (in C) : {data?.current?.temp_c}<br></br>
        Wind Degree : {data?.current?.wind_degree}<br></br>
        Wind Direction : {data?.current?.wind_dir}<br></br>
        Wind Speed : {data?.current?.wind_kph}
      </header>
    </div>
  );

  async function setData() {
    await axios.get('https://api.weatherapi.com/v1/current.json?q=London&key=c6115257575243eab76165323231411')
    .then(response => setdata(response.data))
    .catch(error => console.log("Error", error))
  }
}

export default App;
