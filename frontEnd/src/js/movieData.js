const movies = [
  {
    title: "A Beautiful Mind",
    time: "2h 15min",
    year: "2021",
    genres: ["Biography", "Drama", "Mystery"],
    rating: 4,
    imageUrl: "/frontEnd/assets/beautiful-mind.jpeg", // Path to the movie's image
    synopsis: "A former Roman General sets out to exact vengeance...",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
  },
  {
    title: "Heroes",
    time: "1h 50min",
    year: "2019",
    genres: ["Drama", "Fantasy", "Sci-Fi"],
    rating: 3,
    imageUrl: "/frontEnd/assets/Heroes.jpeg", // Path to the movie's image
    synopsis: "A former Roman General sets out to exact vengeance...",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
  },
  {
    title: "After Earth",
    time: "1h 50min",
    year: "2019",
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 3,
    imageUrl: "/frontEnd/assets/after-earth.jpeg", // Path to the movie's image
    synopsis: "A former Roman General sets out to exact vengeance...",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
  },
  {
    title: "The Space Between Us",
    time: "1h 50min",
    year: "2019",
    genres: ["Drama", "Romance", "Sci-Fi"],
    rating: 3,
    imageUrl: "/frontEnd/assets/space-between-us.jpeg", // Path to the movie's image
    synopsis: "A former Roman General sets out to exact vengeance...",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
  },

  {
    title: "Interstellar",
    time: "1h 50min",
    year: "2019",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    rating: 5,
    imageUrl: "/frontEnd/assets/Interstellar.jpeg", // Path to the movie's image
    synopsis: "A former Roman General sets out to exact vengeance...",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
  },
  // Add more movie objects as needed
];

const category = [
  {
    title: "Gladiator",
    genres: ["Action"],
    media: "Movie",
    year: "2019",
    rating: 3,
    imageUrl: "/frontEnd/assets/gladiator.jpeg", // Path to the movie's image
  },
  {
    title: "After Earth",
    media: "Movie",
    genres: ["Action", "SyFy"],
    year: "2019",
    rating: 3,
    imageUrl: "/frontEnd/assets/after-earth.jpeg", // Path to the movie's image
  },
  {
    title: "Heroes",
    media: "Series",
    genres: ["Action", "SyFy"],
    year: "2019",
    rating: 3,
    imageUrl: "/frontEnd/assets/Heroes.jpeg", // Path to the movie's image
  },
  {
    title: "Apocalypto",
    media: "Movie",
    genres: ["Action"],
    year: "2019",
    rating: 3,
    imageUrl: "/frontEnd/assets/Apocalypto.jpeg", // Path to the movie's image
  },
  {
    title: "Prison Break",
    media: "Series",
    genres: ["Action", "Drama"],
    year: "2019",
    rating: 3,
    imageUrl: "/frontEnd/assets/prison-break.jpeg", // Path to the movie's image
  },
  {
    title: "Fringe",
    media: "Series",
    genres: ["Action", "SyFy"],
    year: "2019",
    rating: 3,
    imageUrl: "/frontEnd/assets/fringe.jpeg", // Path to the movie's image
  },
  {
    title: "Mad Max: Fury Road",
    media: "Movie",
    genres: ["Action"],
    year: "2019",
    rating: 3,
    imageUrl: "/frontEnd/assets/mad-max.jpeg", // Path to the movie's image
  },
  {
    title: "A Beautiful Mind",
    media: "Movie",
    genres: ["Drama"],
    year: "2019",
    rating: 3,
    imageUrl: "/frontEnd/assets/beautiful-mind.jpeg", // Path to the movie's image
  },
  {
    title: "Sense 8",
    media: "Series",
    genres: ["Drama", "SyFy"],
    year: "2019",
    rating: 3,
    imageUrl: "/frontEnd/assets/sense-8.jpeg", // Path to the movie's image
  },
  {
    title: "Dune",
    media: "Movie",
    genres: ["Drama", "SyFy"],
    year: "2019",
    rating: 3,
    imageUrl: "/frontEnd/assets/dune.jpeg", // Path to the movie's image
  },
  {
    title: "Raised By Wolves",
    media: "Series",
    genres: ["Drama", "SyFy"],
    year: "2019",
    rating: 3,
    imageUrl: "/frontEnd/assets/wolves.jpeg", // Path to the movie's image
  },
];

function generateMovieCards(movies) {
  return movies
    .map((movie) => {
      const genres = movie.genres.join(", ");
      const starsFull = '<i class="fa fa-star"></i>'.repeat(movie.rating);
      const starsEmpty = '<i class="fa fa-star-o"></i>'.repeat(5 - movie.rating);
      const stars = starsFull + starsEmpty;

      return `
        <div class="movie-card-big" onclick="redirectToDetails('${encodeURIComponent(movie.title)}')">
          <div class="movie-img">
            <img src="${movie.imageUrl}" alt="${movie.title}" />
          </div>
          <div class="movie-details">
            <div class="title">
              <h3>${movie.title}</h3>
              <p>${movie.time}</p>
            </div>
            <p>${movie.year} <span>${genres}</span></p>
            <div class="ratings">${stars}</div>
          </div>
        </div>
      `;
    })
    .join("");
}

function redirectToDetails(title) {
  window.location.href = `movie-details.html?title=${title}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("movie-container").innerHTML =
    generateMovieCards(movies);
});

// Get unique genres for the genre selection
const genres = [...new Set(category.flatMap((movie) => movie.genres))];

// Function to display genres
function displayGenres() {
  const genreContainer = document.getElementById("genre-container");
  genres.forEach((genre) => {
    let genreElem = document.createElement("p");
    genreElem.textContent = genre;
    genreElem.onclick = () => filterMoviesByGenre(genre);
    genreContainer.appendChild(genreElem);
  });
}

// Function to filter and display movies by selected genre
function filterMoviesByGenre(selectedGenre) {
  const filteredMovies = category.filter((movie) =>
    movie.genres.includes(selectedGenre)
  );

  // Highlight the active genre
  document.querySelectorAll(".genre-container p").forEach((genreElem) => {
    genreElem.classList.remove("active");
    if (genreElem.textContent === selectedGenre) {
      genreElem.classList.add("active");
    }
  });
  displayMovies(filteredMovies);
}

// Function to display movie cards
function displayMovies(moviesToDisplay) {
  const movieContainer = document.getElementById("movie-containerr");
  movieContainer.innerHTML = ""; // Clear previous content

  moviesToDisplay.forEach((movie) => {
    // Generate stars using FontAwesome icons
    const starsFull = '<i class="fa fa-star"></i>'.repeat(movie.rating);
    const starsEmpty = '<i class="fa fa-star"></i>'.repeat(5 - movie.rating);
    const stars = starsFull + starsEmpty;

    movieContainer.innerHTML += `
          <div class="movie-card-small">
            <div class="small-card-image">
              <img src="${movie.imageUrl}" alt="${movie.title}">
            </div>
            <div class="small-card-content">
              <p>${movie.title}</p>
              <p>${movie.genres.join(", ")}</p>
              <p>${movie.year}</p>
              <p>${stars}</p>
            </div>
          </div>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayGenres();
  const defaultGenre = "Action"; // Replace with your desired default genre
  filterMoviesByGenre(defaultGenre);
});

// series and movies filter
function displayFilteredItems(mediaType) {
  const filteredMovies = category.filter(
    (movie) => mediaType === "all" || movie.media === mediaType
  );
  displayMedia(filteredMovies);
}

function displayMedia(moviesToDisplay) {
  const mediaContainer = document.getElementById("media-container");
  mediaContainer.innerHTML = ""; // Clear previous content

  moviesToDisplay.forEach((movie) => {
    // Generate stars using FontAwesome icons
    const starsFull = '<i class="fa fa-star"></i>'.repeat(movie.rating);
    const starsEmpty = '<i class="fa fa-star"></i>'.repeat(5 - movie.rating);
    const stars = starsFull + starsEmpty;

    mediaContainer.innerHTML += `
            <div class="movie-card-small">
              <div class="small-card-image">
                <img src="${movie.imageUrl}" alt="${movie.title}">
              </div>
              <div class="small-card-content">
                <p>${movie.title}</p>
                <p>${movie.genres.join(", ")}</p>
                <p>${movie.year}</p>
                <p>${stars}</p>
              </div>
            </div>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayFilteredItems("all");
  document.getElementById("mediaType").addEventListener("change", function () {
    displayFilteredItems(this.value);
  });
});

//drop down selection code
document
  .querySelector(".custom-select .selected-value")
  .addEventListener("click", function () {
    this.nextElementSibling.style.display = "block";
  });

document
  .querySelectorAll(".custom-select .select-options li")
  .forEach((item) => {
    item.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      const text = this.textContent;
      const select = this.closest(".custom-select");

      select.querySelector(".selected-value").textContent = text;
      select.querySelector(".select-options").style.display = "none";

      // Call the function to filter movies
      displayFilteredItems(value);
    });
  });
