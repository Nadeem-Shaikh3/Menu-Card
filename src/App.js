import React, { useState } from "react";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import Data from "./Components/Data";

const allCatogories=[...new Set(Data.map((curElem)=>{
 return curElem.category
})),"all"]


const App = () => {
  const [menu, setMenus] = useState(Data);
  const [category,setCategory]=useState(allCatogories)

  

  const filterMenu = (catogory) => {

    if(catogory==="all"){
      setMenus(Data);
      return
    }

    const updatedItems = Data.filter((curElem) => {
      return curElem.category === catogory;
    });

    setMenus(updatedItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu List</h2>
          <div className="underline"></div>
          <Categories category={filterMenu} menu={category}/>
        </div>

        <Menu data={menu} menu={menu} />
      </section>
    </main>
  );
};

export default App;
