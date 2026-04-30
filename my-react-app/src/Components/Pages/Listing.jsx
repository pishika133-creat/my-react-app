import React from 'react'

const Listing =({data}) =>{
    let person ={
        name : "jhone",
        age: 30,
        mobile: 9876432014,
        city: "mandsur",
        study: "B.ed",
    }
    let d = data
   
function handleClick(name){
  console.log("name:",name)
}

    return(
        <div>
            <h2>Listing page</h2>
            <h2>Name from props :{d}</h2>
            <h2>Listing data of person</h2>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <p>{person.mobile}</p>
            <p>{person.study}</p>
            <button onClick={()=>handleClick(person.name)}>Click</button>
        </div>

    )
}

export default Listing;
