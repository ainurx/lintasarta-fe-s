class Footer extends HTMLElement{
  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML=`
      <style>
        p{
          color: white;
        }

        hr{
          color: white;
        }
      </style>

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="" alt="" srcset="">
            <p>@ainurx_78</p>
          </div>
          <div class="col-md-6">
            <img src="" alt="" srcset="">
            <p>ainurx</p>
          </div>
        </div>
      </div>
      <hr>
      <p>&copy;ainur rahmat</p>
    `
  }
}

customElements.define("footer-content", Footer);