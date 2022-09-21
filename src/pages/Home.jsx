import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Search from '../Components/Search';
import Cards from '../Components/Cards';


export default function Home() {


    const [filter, setFilter] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [Apibd, setApibd] = useState([]);
    
      useEffect(() => {
    
        const fetchAPI = async () => {
            const results = await axios("https://www.breakingbadapi.com/api/characters");
    
            setApibd(results.data)
            setLoading(false);
        }
        
        fetchAPI();
        
      }, [])

    
  return (

    <>
        <Search setFilter={setFilter}/>
        <Cards Apibd={Apibd} isLoading={isLoading} filter={filter} />
    </>

  )
}
