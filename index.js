async function main() {
    const title = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=74533644&s=fast");
    const titleData = await title.json();
   const x = `<div class="moives_container">
                        <div class="moive">
                        <h3></h3>
                        <figure class="moive__poster--warpper"><b><!--Poster:--></b><a href="https://m.media-amazon.com/images/M"/></figure>
                        <p><b>Title:</b> Title</p>
                        <p><b>Type:</b> 00000000000000</p>
                        <p><b>Year:</b> 0000</p>
                        <p><b>imdbID:</b> 000000000</p>
                      </div>
                      </div>`
}

main();

