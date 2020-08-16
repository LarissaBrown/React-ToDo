import React from 'react';
import './App.css';
import Name from "./Name"



//make GET request to retrieve data (axios.get() or fetch())
// url: https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json
//store array of targets in state, start state empty, but then set in a componentDidMount
//map through array to get React to render it in JSX

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      targets: [{name: "", image: ""}],
      loading: false
      
      
    }

  }



  componentDidMount(){
    this.setState({loading: true})
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => response.json())
        .then(data => {
          this.setState ({
            targets: data
          })
        })
  }

  render(){
    
    const targetName = this.state.targets.map(target => 
    <Name name={target.name} image={target.image}/>
    )
    

   
  
  return (
    <div style={{display: "grid", gridTemplateColumns:'1fr 1fr 1fr', gridTemplateRows: "1fr 1fr 1fr"}}>
      
      {targetName}
    
    </div>
  );
  }
}

export default App;
