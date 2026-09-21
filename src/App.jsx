import React, { useEffect, useState } from 'react'
import Card from './components/Card';
import axios from 'axios'

const App = () => {

   const [people, setPeople] = useState([]); 
   const [selectedPerson, setSelectedPerson] = useState(null);

   const getData = async () => {
    const response = await axios.get(`https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20`)
    setPeople(response.data.results)
  }

  useEffect(function () {
    getData()
  }, [])



  const move = (person) => {
  setSelectedPerson(person);
};



  return (
  <div className="parent">

    {/* For Selected card */}
    {selectedPerson && (
      <div className="selected-card">
        <Card
          name={`${selectedPerson.name.first} ${selectedPerson.name.last}`}
          gender={selectedPerson.gender}
          location={selectedPerson.location.city}
          email={selectedPerson.email}
          picture={selectedPerson.picture.large}
          onCardClick={() => setSelectedPerson(null)}
        />
      </div>
    )}

    {/* For All cards */}
    <div className="cards">
      {people.map((elem, idx) => {
  return (
    <div key={idx}>
      <Card
        name={`${elem.name.first} ${elem.name.last}`}
        gender={elem.gender}
        location={elem.location.city}
        email={elem.email}
        picture={elem.picture.large}
        onCardClick={() => move(elem)}
      />
    </div>
  )
})}
    </div>

  </div>
);
}

export default App
