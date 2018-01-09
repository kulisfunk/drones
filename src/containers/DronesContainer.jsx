import React from 'react';

class DronesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    attacks: [],
    selectedCountry: null
    };

  }

  componentDidMount(){
  const url = "https://api.dronestre.am/data";
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", () => {
    if (request.status === 200) {
    const jsonString = request.responseText;
    const data = JSON.parse(jsonString);
    this.setState({ attacks: data });
    }
  });
  request.send();
  }


  render(){

    return (
      <div>
        <h2>Drone Container</h2>
     </div>
    );
  }
}

export default DronesContainer;
