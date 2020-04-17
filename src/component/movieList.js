class MovieList extends HTMLElement{
  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML= `
      <h1>tipe</h1>
      <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Trending</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-info">Detail</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define("movie-list", MovieList);