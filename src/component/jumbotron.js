class Jumbotron extends HTMLElement{
  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML= `
    <style>
      .container{
        background-image: url("../img/back.jpg");
      }
    </style>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
    `
  };

}

customElements.define("jumbo-tron", Jumbotron);