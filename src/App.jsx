import { useState, useEffect, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import CardsContainer from './components/cardsContainer';
import debounce from 'lodash/debounce';
import SyncLoader from 'react-spinners/SyncLoader';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

const bringCharacters  = async function (event) {
    if (event == null || event.target.value.length == 0) {
    
    try {
    async function chars () {
    let endPoint = "https://rickandmortyapi.com/api/character";
    const response = await axios.get(endPoint);
    const parsed = response.data.results;
    console.log('Se hizo una peticion por los 20 primeros chars.')
    return setCharacters(parsed);
    }chars();
    } catch {
      console.log("No se pudieron fetchear los characters");
    }
} else if (event) {
  let valor = event.target.value;
  let endPoint = `https://rickandmortyapi.com/api/character/?name=${valor}`;
  try {
    const response = await axios.get(endPoint);
    const parsed = response.data.results[0];
    setCharacters([parsed]);
  } catch {
    console.log("No se pudieron fetchear los characters");
  }
}
setLoading(false);
};

useEffect(() => {
  bringCharacters(null);

}, []);

//Constante para reducir la ejecicon constante con pedidos a la API.
const debouncedBringCharacters = useCallback(debounce(bringCharacters, 500), []);

//Funcion para que el Loader salga solo cuando se esta realizando la peticion.
const handleLoading = (event) => {
  setLoading(true);
  debouncedBringCharacters(event);
};


  return (
      <div className=' flex-col  w-[85vw] md:w-[80vw] lg:w-[60vw] items-center justify-center min-h-[90vh]'>
        <h1 className = "text-white">Search Characters</h1>
        <div className='mt-[4vh] mb-[4vh] flex-row items-center justify-center'>
          <SearchIcon sx={{
            fontSize: '35px',
            marginBottom: '8px',
            marginRight: '8px',

          }}/>
        <input type='text' onChange={handleLoading} className=' text-xl  w-[40%] min-w-[320px] h-10 p-4  rounded-md bg-white shadow-white shadow-3xl text-black' placeholder='Search characters..'/>
        </div>
        <div className = "">
          { loading ? <SyncLoader loading = {loading} size= {20} color='white' margin={4} /> :
          <CardsContainer characters = {characters}/>
}
        </div>

      </div>
  )
}




export default App
