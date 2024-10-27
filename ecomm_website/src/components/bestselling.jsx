import React from "react";
import './bestselling.css'
import Cards from './cards'

function BestSelling({}){
    let myArr = [
        {
            // productname, discount, dprice, price
            productname: "gucci duffle bag",
            discount: "35%",
            dprice: "950",
            price: "1150"
        },
        {
            productname: "vansh",
            discount: "35%",
            dprice: "950",
            price: "1150"
        },
        {
            productname: "vansh",
            discount: "35%",
            dprice: "950",
            price: "1150"
        },
        {
            productname: "vansh",
            discount: "35%",
            dprice: "950",
            price: "1150"
        },
        {
            productname: "vansh",
            discount: "35%",
            dprice: "950",
            price: "1150"
        },
        {
            productname: "vansh",
            discount: "35%",
            dprice: "950",
            price: "1150"
        },
        {
            productname: "vansh",
            discount: "35%",
            dprice: "950",
            price: "1150"
        },{}
      ];
    
      let cardElements = [];
      myArr.forEach((person, index) => {
        cardElements.push(
          <Cards key={index} productname={person.productname} price={person.price} discount={person.discount} dprice={person.dprice}/>
        );
      });
    return(
        <>
        <section className="bestSelling">
            <h4>This Month</h4>
            <h1>Best Selling Products</h1>
            <div className="grid-four--cols">
            {cardElements}
            </div>
        </section>
        </>
    )
}

export default BestSelling;