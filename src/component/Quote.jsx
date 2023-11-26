
import React, { useEffect, useState } from 'react'
import '../App.css'
function Quote() {
    const [data, setData] = useState([]);
    const [quote, setQuote] = useState([]);

    useEffect(()=>{
        fetch("https://type.fit/api/quotes")
        .then(res=>res.json())
        
        .then((respone)=>setData(respone));
        
       
    },[setData]);
    
    console.log(data);

    

    let gen = () => {
        let rno = Math.floor(Math.random() * 15);
        let eachq = [data[rno]]; 
        setQuote(eachq);
        return eachq;    
    }
  return (
    <div className='mainC'>
          <h2 className='Head'>Random Quote Generator</h2>
          <div className='card'>
          {
              quote?.map((quote, index) => (
                <div key={index}>
                      <h3 className='Answer'>{quote?.text}</h3>
                </div>
              ))
              
          }
          </div>
         
          <button className='btn' onClick={gen}>Generate</button>
          
    </div>
  )
}

export default Quote
