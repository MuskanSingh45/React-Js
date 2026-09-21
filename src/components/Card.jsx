import React from 'react'

const Card = ({picture, name, gender, location, email, onCardClick}) => {

  return (
    <div className='card'>

    <div>
                <div className="top">
                    <img src={picture} alt="" />
                </div>
                <div className="center">
                    <h3>{name} <span>{gender}</span></h3>
                    <h2>{location}</h2>
                    <div className='tag'>
                        <h4>{email}</h4>
                    </div>
                </div>
            </div>

     <div className="bottom">
                <button onClick={onCardClick}>Click</button>
            </div>

     </div>
  )
}

export default Card
