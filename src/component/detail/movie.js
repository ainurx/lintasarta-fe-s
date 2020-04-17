class Movie extends HTMLElement{
  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML=`
    <div class="jumbotron">
      <h1 class="display-4">backdrop_path</h1>
    </div>
    <div class="container">
    <p class="title">Avenger</p>
    <p>genres</p>
    <p>popularity</p>
    <p class="overview">lorem ipsum</p>
    <p>runtime</p>
    <p>vote_average</p>
    <p>vote_count</p>
    <p>production_companis.name</p>
  </div>
    `
  }
}

customElements.define("movie-detail", Movie);