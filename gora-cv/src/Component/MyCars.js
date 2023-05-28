import { Component } from "react";
import Cars from "./Cars";

class MyCars extends Component {
    render(){
        return(
         <div className="Mycars">
          <h1>{this.props.title}</h1>
          <Cars color=' red'> Ferarri</Cars>
          <Cars > Tesla</Cars>
          <Cars color = ' black'></Cars>
         </div>
        );
    }
}
export default MyCars;