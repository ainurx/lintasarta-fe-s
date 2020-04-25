import React, { Component } from"react";

class Jumbotron extends Component{
  connectedCallback(){
    this.render();
  }

  render(){
    return(
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Fluid jumbotron</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
    )
  };

}

//customElements.define("jumbo-tron", Jumbotron);
export default Jumbotron;