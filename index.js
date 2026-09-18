async function main() {
    const title = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=74533644&s=fast");
    const titleData = title.json();
    console.log(titleData);
}

main{};

