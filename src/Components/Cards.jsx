import React from 'react';
import { Link } from 'react-router-dom';
import Icon from "../Image/Iconbreakingbad.png";


export default function Cards({Apibd, isLoading, filter}) {


    return isLoading ? (<div class="container-element"> 
                            <div class="loading"></div>
                        </div>) : 
     
    (<div className="container-element">
        <div className="container__rows" >
        {Apibd.filter((character) => {
            if (filter == '') {
                return character
            } else if (
                character.name.toLowerCase().includes(filter) || 
                character.nickname.toLowerCase().includes(filter)) {
                return character
                }})
        .map((character, index) =>
        <Link to={`/CharacterBio/${character.char_id}`} style={{textDecoration: 'none'}}>
            <div key={index} className="container__items">
            <img className="row__img" src={character.img} />
            <div className="Info-display"  >
                <div className='display__items' >
                <img class="Icon" src={Icon} />
                <div className='display__items--content'>
                    <h5>{character.name}</h5>
                    <h5>Status:<p>{character.status}</p></h5> 
                </div>
                </div>
            </div>
        </div> </Link>)}
        </div>
    </div>)

}