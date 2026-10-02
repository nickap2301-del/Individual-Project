const searchInput = document.querySelector("#search-bar");
const resultsEl = document.querySelector(".movies__container");
const filter = document.querySelector("#filter");

document.body.classList += ` movie__loading`
const movie = await getMovie();
document.body.classList.remove() ` movie__loading`

console.log(resultsEl);

async function fetchMovies(event) {
  if(event) {
    event.preventDefault();
  }
  const search = searchInput.value;    
  const response = await fetch(
   `https://www.omdbapi.com/?apikey=74533644&s=${search.length > 0 ? search : "fast"}`
   );
   const movieData = await response.json();
   console.log(movieData);  
   
let movies = movieData.Search;

if (filter.value === "Title A to Z") {
  movies.sort((a, b) => a.Title.localeCompare(b.Title));
}

if (filter.value === "Title Z to A") {
  movies.sort((a, b) => b.Title.localeCompare(a.Title));
}

if (filter.value === "Year Newest") {
  movies.sort((a, b) => Number(b.Year) - Number(a.Year));
}

if (filter.value === "Year Oldest") {
  movies.sort((a, b) => Number(a.Year) - Number(b.Year));
}

   resultsEl.innerHTML = movies
  .map((movie) => movieHTML(movie))
  .join("");
   }

   
function movieHTML(movie) {
    return `
    <div class="movies">
    <div class="movie">
    <figure class="movie__poster--warpper"><b><!--Poster:--></b>
    <img class="movie__img" src="${movie.Poster}" alt="${movie.Title}" />
    </figure>
    <p><b>Title:</b>  ${movie.Title}</p>
    <p><b>Type:</b>   ${movie.Type}</p>
    <p><b>Year:</b>   ${movie.Year}</p>
    <p><b>imdbID:</b> ${movie.imdbID}</p>
    </div>
    </div>
    </div>`;
}
filter.addEventListener("change", fetchMovies);
fetchMovies(console.log(filter.value));

