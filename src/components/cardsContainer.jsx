import React from 'react';
import styles from './cardsContainer.module.css';
import Card from './card';


const CardsContainer = ({characters}) => {
  return (
    <div className = "w-full flex flex-wrap columns-xs p-[2vh] justify-center">
      
      {characters?.map((element) => <Card character = {element} key = {element.id} />)}
    </div>
  )
}

export default CardsContainer;