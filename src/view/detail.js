import "../component/detail/movie";
import "../component/detail/tv"

const main = document.querySelector("main");

//component
const movie = document.createElement("movie-detail");
const tv = document.createElement("tv-series");

main.appendChild(movie);