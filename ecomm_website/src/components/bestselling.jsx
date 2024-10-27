import React from "react";
import list from '../data'
import './bestselling.css'
import Cards from './cards'

function BestSelling({ handleClick }) {
  // let myArr = list;

  //   let cardElements = [];
  //   myArr.forEach((person, index) => {
  //     cardElements.push(
  //       <Cards key={index} productname={person.productname} price={person.price} discount={person.discount} dprice={person.dprice} handleClick={handleClick}/>
  //     );
  //   });
  return (
    <>
      <section className="bestSelling">
        <h4>This Month</h4>
        <h1>Best Selling Products</h1>
        <div className="grid-four--cols">
          {

            list.map((item) => (
              <Cards item={item} key={item.id} handleClick={handleClick} />
            ))

          }
        </div>
      </section>
    </>
  )
}

export default BestSelling;