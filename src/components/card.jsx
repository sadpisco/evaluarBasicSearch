import React from 'react';
import styles from "./card.module.css";

const Card = ({character}) => {
  return (
    <div className='h-50 w-30 flex flex-col items-center justify-center bg-neutral-900 p-5 m-4 rounded-lg hover:scale-105 hover:shadow-4xl ease-in duration-100'>
    <div className='flex flex-col items-center justify-center gap-5'>
    <h1 className='text-[23px] text-center h-auto '>{character.name}</h1>
    <img src={character.image} alt = {character.name} className='h-[200px] w-[200px] rounded-md'/>
    </div>
    </div>
  )
}

export default Card