import React, { createContext } from 'react';
import { useState,useEffect } from 'react';

export const ShopData = createContext(null);
export const ShopDataProvider = (props) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd72e1a9c33mshc1f1e981ac45ea8p15657ajsnceb480666fae',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
    
      const [booksData,setBooksData] = useState([]);
      //adding id property to every objects of the array
      const fetchData = async () =>{
          try {
              const response = await fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options);
              const data = await response.json();
              setBooksData(data.titles);
            } catch (e) {
                console.log(e);
            }
        }
        useEffect(()=>{fetchData()},[]);
        const newData = booksData.map((product,index)=>({
          ...product,id:index+1,price:(index+1)*100
        }))
  return (
    <ShopData.Provider value={newData}>
        {props.children}
    </ShopData.Provider>
  )
}
