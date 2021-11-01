import React from "react";
// import data from './Data'
const Categories = ({category ,menu}) => {

   function firstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
   }
  return (
    <div className="container">

        {menu.map((curElm)=>{
            return  <button className="btn btn-primary m-3" onClick={()=>category(curElm)}>{firstLetter(curElm)}</button>
        })}
        {/* <button className="btn btn-primary m-3" onClick={()=>category(menu)}>All</button>
        <button className="btn btn-primary m-3" onClick={()=>category("lunch")}>Lunch</button>
        <button className="btn btn-primary m-3" onClick={()=>category("breakfast")}>BreakFast</button>
        <button className="btn btn-primary m-3" onClick={()=>category("shakes")}>Shakes</button> */}
      </div>
  );
};

export default Categories;
