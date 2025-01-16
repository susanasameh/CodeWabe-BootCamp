const apiKey = "7c6a1dbca76893821912bd5f9497c9cf";
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzZhMWRiY2E3Njg5MzgyMTkxMmJkNWY5NDk3YzljZiIsIm5iZiI6MTczNjg2MTE4My42MjMwMDAxLCJzdWIiOiI2Nzg2NjVmZmRiNGZlMDIyYWQ0ZThiNzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1nup9c7zYAZ2gnhzW0BKFkOozxstrHfAu6jOgI1ntfk";
const baseUrl = "https://api.themoviedb.org/3";
const getMovies = "/discover/movie";
const baseImage = "https://image.tmdb.org/t/p/w500";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
};

async function fetchMovies(api) {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
  console.log(data.results);  
  setCart(data.results);
  getMovieDetails(data.results);
}


async function setCart(movies) {

      let movieContainer = document.getElementById("movieContainer");
  let cardContainer = document.getElementById("cardContainer");
  // console.log(movieContainer);
  // console.log(cardContainer);
  
  await movies.map((movie) => {

    let movieDesc = (movie.overview).split(' ').splice(0, ).join(' ');
    
    movieContainer.innerHTML += `
     <div class="cart-container" id="cardContainer">
                <img src=${baseImage}${movie.poster_path} alt="" class="cart-img">
                <h4 class="movie-title">${movie.original_title}</h4>
                <p class="movie-overview">${movieDesc}</p>
            </div>
    `;
  }
  );
  
}
async function getMovieDetails(movies) {
  await movies.map((movie) => {
    // console.log(movie.id);

    const url = `${baseUrl}/movie/${movie.id}`;

    

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
  })
  console.log(movies);
  
}

//saerch part

const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function (e){
  e.preventDefault()
  // console.log(this.search.value);

  const searchResult = document.getElementById("searchResult");

  const url = `${baseUrl}/search/movie?query=${this.search.value}&language=en-US`;

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
       searchResult.innerHTML = "";
      json.results.map(movie => {
      let  movieDesc = movie.overview.split(" ").splice(0,30).join(" ");
      searchResult.innerHTML += ` <div class="cart-container" id="cardContainer">
                <img src=${baseImage}${movie.poster_path} alt="" class="cart-img">
                <h4 class="movie-title">${movie.original_title}</h4>
                <p class="movie-overview">${movieDesc}</p>
            </div>`;
    });
    })
      
    .catch((err) => console.error(err));
})





const apiUrl = `${baseUrl}${getMovies}?api_key=${apiKey}`;

fetchMovies(apiUrl);
