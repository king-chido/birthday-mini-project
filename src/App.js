import React, {useState} from 'react'
import { birthData } from './birthdayData'
import List from "./component/list/List"


const App = () => {
    const [peoples, setPeoples] = useState(birthData)

    const handlePerson = (id)=> {
        setPeoples((oldPeoples)=> oldPeoples.filter((oldPeople)=> oldPeople.id !== id))
    }

    if(peoples.length < 1){
        return <div className='firstDiv'>
            <h3 className='firsth3'>Ooops there is no birthday today</h3>
            <button type="button" onClick={()=> setPeoples(birthData)} className='Btn'>refresh</button>
        </div>
    }
  return (
    <div className='container'>
        <section>
            <h3 > {peoples.length} people's birthday today</h3>
            <List people={peoples} handlePerson={handlePerson}/>
            <button type="button" onClick={()=> setPeoples([])} className='Btn'>clear all</button>
        </section>
    </div>
  )
}

export default App