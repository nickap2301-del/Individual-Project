const searchInput = document.querySelector("#search-bar");
const resultsEl = document.querySelector(".movies__container");

console.log(resultsEl);

async function fetchMovies() {
  const search = searchInput.value;    
  const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=74533644&s=${search.length > 0 ? search : "fast"}`,
   );
   const movieData = await response.json();
   console.log(movieData);  
    resultsEl.innerHTML = movieData.Search.map(movie => movieHTML(movie));
    }

function movieHTML(movie) {
    return `
    <div class="movies__container">
    <div class="movies">
    <div class="movie">
    <figure class="movie__poster--warpper"><b><!--Poster:--></b>
    <img class="movie__img" src="${movie.Poster}" alt="${movie.Title}" />
    </figure>
    <p><b>Title:</b> ${movie.Title}</p>
    <p><b>Type:</b> ${movie.Type}</p>
    <p><b>Year:</b> ${movie.Year}</p>
    <p><b>imdbID:</b>${movie.imdbiD}</p>
    </div>
    </div>
    </div>`;
}
fetchMovies();

