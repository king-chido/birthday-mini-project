import React from 'react';
import "./list.css";
import Tweet from "../../component/tweet/Tweet"

const List = ({people, handlePerson}) => {
  return (
       <div className='main'>
             {people.map((person)=> {
            const {id, image, name, info, age} = person
            return <article key={id}>
                <div className='firstArticle'>
                    <div className='secondArticle'>
                        <img src={image} alt={name}  className='image'/>
                        <div>
                            <h4>{name}</h4>
                            <h4>{age}</h4>
                        </div>
                    </div>
                    <button type="button" onClick={()=> handlePerson(id)} className='personBtn'>remove</button>
                </div>
                <Tweet info={info}/>
            </article>
        })}
       </div>
  )
}

export default List