import "../component/jumbotron";
import "../component/trending";
import "../component/footer"
import "../component/movieList"

//parent
const main = document.querySelector("main");
const footer = document.querySelector("footer");

//component
const jumbotron = document.createElement("jumbo-tron");
const trending = document.createElement("trending-now");
const footerContent = document.createElement("footer-content");
const movieList = document.createElement("movie-list");


main.appendChild(jumbotron);
main.appendChild(trending);
main.appendChild(movieList);

footer.appendChild(footerContent);

