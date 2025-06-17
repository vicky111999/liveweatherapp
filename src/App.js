import Axios from 'axios'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGear,faHouse } from '@fortawesome/free-solid-svg-icons'
function App()
{
  const [city,setCity]=useState("")
  const [output,setOutput]=useState(null)
const dis=()=>{
  const api="aff4b2d31ba11226f571f7c8425d80b2"
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
  console.log(url)
  Axios.get(url).then((res)=>{
    console.log(res.data)
    setOutput(res.data)
  }).catch((err)=>{
     setOutput(err.response.data)
    console.log("error something",err.response.data)
  }).finally(()=>{
    console.log("data fetching finished")
  })
}
const show=(e)=>{
  setCity(e.target.value)
}
  return(
  <>
  <h1>API HANDLING</h1>
  <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
  <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
  <input type="text" value={city} placeholder="enter city" onChange={(e)=>show(e)}></input>
  <input type="button"  onClick={dis} value="weather report"></input>
  {output !==null && output.cod===200 &&
    <>
  <h2>Main:{ output.weather[0].main}</h2>
  <h2>Description:{ output.weather[0].description}</h2>
  <h2>Wind speed:{output.wind.speed}</h2>
  </>
  }
   { output!==null && output.cod==="404" &&
    <>
    <h1>{output.message}</h1>
    </>
  }

  </>
)
}
export default App
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
