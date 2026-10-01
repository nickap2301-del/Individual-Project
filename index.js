const searchInput = document.querySelector("#search-bar");
const resultsEl = document.querySelector(".movies__container");

console.log(resultsEl);

async function fetchMovies() {
  const search = searchInput.value;    
  const response = await fetch(
   `https://www.omdbapi.com/?apikey=74533644&s=${search.length > 0 ? search : "fast"}`
   );
   const movieData = await response.json();
   console.log(movieData);  
   resultsEl.innerHTML = movieData.Search
  .map((movie) => movieHTML(movie))
  .join("");
   }

if (!books) {
  books = await getBooks();
}
  booksWrapper.classList.remove ('books__loading')
   
  if (filter === "LOW_TO_HIGH") {
    books.sort((a, b) =>
        (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
    );
  } else if (filter === "HIGH_TO_LOW") {
    books.sort((a, b) =>
        (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
    );
  } else if (filter === "RATING") {
    books.sort((a, b) => b.rating - a.rating);
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
    <p><b>imdbId:</b> ${movie.imdbId}</p>
    </div>
    </div>
    </div>`;
}

fetchMovies();

