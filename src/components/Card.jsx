import React from 'react'

const Card = (props) => {

  return (
    <div className='card'>

    <div>
                <div className="top">
                    <img src={props.picture} alt="" />
                </div>
                <div className="center">
                    <h3>{props.name} <span>{props.gender}</span></h3>
                    <h2>{props.location}</h2>
                    <div className='tag'>
                        <h4>{props.email}</h4>
                    </div>
                </div>
            </div>

     <div className="bottom">
                <button onClick={props.onCardClick}>Click</button>
            </div>

     </div>
  )
}

export default Card
