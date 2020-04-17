class Trending extends HTMLElement{
  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <style>
      h1{
        text-align: center;
        color: white;
      }

      
    </style>

    <div class="container">
      <h1>Temukan film mu berdasarkan</h1>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Trending</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-info">Show more</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Genre</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-info">Show more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

customElements.define("trending-now", Trending);