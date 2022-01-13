import './App.css';
import { Fragment } from 'react';
import React, { useState } from 'react'

function App() {

  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  console.log(city);

  const getCities = (event, city) => {
    event.preventDefault();
    fetch(`http://ctp-zip-api.herokuapp.com/city/${city}`)
      .then((response) => {
        console.log(response)
        return response.json();
      }).then((data) => {
        console.log(data)
        setData(data);
      }).catch((err) => {
        console.error(err)
      })
  }

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <Fragment>
          <form>
            <label>
              City Name:
              <input type="text" name="city" onChange={(e) => setCity(e.target.value)} />
            </label>
            <input type="submit" value="Submit" onClick={(e) => getCities(e, city)} />
          </form>
        </Fragment>

        <ul className="ListGroup">

          {data.map((element) => {
            return (
              <li className="list-group-item">{element}</li>
            )
          })}

        </ul>
      </header>



    </div>
  );
}

export default App;