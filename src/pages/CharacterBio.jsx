import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function CharacterBio() {

const {id} = useParams();
const [isLoading, setLoading] = useState(true);
const [ApiCh, setApiCh] = useState([]);
const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        
      const fetchAPI = async () => {
          const results = await axios(`https://www.breakingbadapi.com/api/characters/${id}`);

          let queryName = results.data[0].name.split(' ').join('+');
          const results_2 = await axios(`https://breakingbadapi.com/api/quote?author=${queryName}`);

          setApiCh(results.data)
          setQuotes(results_2.data)
          setLoading(false);
      }
      
      fetchAPI();
      
    }, [])


  return isLoading ? 

  (<div className="container--context" > 
        <div className="loading"></div>
   </div>) : 

  (ApiCh.map((character, index) => <div className="container--context">
      <div key={index} className='container--name'><h1>Name: {character.name}</h1> </div>
          <div className='container--row'>
              <img className="row--chara__img" src={character.img} />
              <div className='row--bio'>
                 <h3>Name:</h3>
                 <p>{character.name}</p>
                 <h3>Nickame:</h3>
                 <p>{character.nickname}</p>
                 <h3>Portrayed by:</h3>
                 <p>{character.portrayed}</p>
                 <h3>Occupation:</h3>
                 {character.occupation.map((job, index) => (
                  <p key={index}>{job}</p>
                  ))}
                 <h3>Birthday:</h3>
                 <p>{character.birthday}</p> 
                 {quotes.length > 0 && !isLoading ? (
                        <h3>Quotes:</h3>
                        ) : (
                        <></>
                        )}
                        {quotes.length > 0 && !isLoading ? (
                        quotes.map((quote) => {
                            
                            return (
                         
                                <p>"{quote.quote}"</p> 

                            );
                        })
                        ) : (
                        <></>
                        )}
              </div>
        </div>
    </div>)
)
}

