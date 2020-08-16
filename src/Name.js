import React from "react"


function Name(props){
    
    return (
        <div className="hitlist" style={{height: "30%"}}>
            <h2 style={{fontSize: "3vw"}}>{props.name}</h2>
            <hr />
            <img src={props.image} style={{width: "70%"}}alt="victim"/>
        </div>
  );
    
}
export default Name;