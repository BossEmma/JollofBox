const movies = [
  {
    title: "A Beautiful Mind",
    time: "2h 15min",
    year: "2021",
    genres: ["Biography", "Drama", "Mystery"],
    rating: 4,
    imageUrl: "/frontEnd/assets/beautiful-mind.jpeg",
    posterUrl: "/frontEnd/assets/beautiful-mind-bg.jpeg",
    synopsis: `A Beautiful Mind, American biographical film, released in 2001, that told the story 
    of American Nobel Prize winner John Nash, whose innovative work on game theory in
     mathematics was in many ways overshadowed by decades of mental illness.`,
    cast: [
      {
        name: "Russell Crowe",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/russell.jpeg", // Path to the cast member's image
      },
      {
        name: "Joaquin Phoenix",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/joker.jpeg",
      },
      {
        name: "Connie Nielsen",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/connie.jpeg",
      },
      // ... other cast members
    ],
  },
  {
    title: "Heroes",
    time: "2h 15min",
    year: "2021",
    genres: ["Drama", "Fantasy", "Sci-Fi"],
    rating: 4,
    imageUrl: "/frontEnd/assets/Heroes.jpeg",
    posterUrl: "/frontEnd/assets/heroes-bg.jpeg",
    synopsis: "The series tells the stories of ordinary people who discover that they have superhuman abilities and how these abilities take effect in the characters' lives as they work together to prevent catastrophic futures. ",
    cast: [
      {
        name: "Russell Crowe",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/cast/russell-crowe.jpeg", // Path to the cast member's image
      },
      {
        name: "Joaquin Phoenix",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/cast/joaquin-phoenix.jpeg",
      },
      {
        name: "Connie Nielsen",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/cast/connie-nielsen.jpeg",
      },
      // ... other cast members
    ],
  },
  {
    title: "After Earth",
    time: "1h 50min",
    year: "2019",
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 3,
    imageUrl: "/frontEnd/assets/after-earth.jpeg",
    posterUrl: "/frontEnd/assets/after-earth poster.jpeg", // Path to the movie's image
    synopsis: `A crash landing leaves Kitai Raige and his father Cypher stranded on Earth, a 
                millennium after events forced humanity's escape. With Cypher injured, Kitai 
                must embark on a perilous journey to signal for help.`,
    cast: [
      {
        name: "Russell Crowe",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/cast/russell-crowe.jpeg", // Path to the cast member's image
      },
      {
        name: "Joaquin Phoenix",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/cast/joaquin-phoenix.jpeg",
      },
      {
        name: "Connie Nielsen",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/cast/connie-nielsen.jpeg",
      },
      // ... other cast members
    ],
  },
  {
    title: "The Space Between Us",
    time: "1h 50min",
    year: "2019",
    genres: ["Drama", "Romance", "Sci-Fi"],
    rating: 3,
    imageUrl: "/frontEnd/assets/space-between-us.jpeg", // Path to the movie's image
    posterUrl: "/frontEnd/assets/space-bg.jpeg", // Path to the movie's image
    synopsis: `The first human born on Mars travels to Earth for the first time, 
                experiencing the wonders of the planet through fresh eyes. He embarks on an adventure 
                with a street-smart girl to discover how he came to be.`,
    cast: [
      {
        name: "Russell Crowe",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/cast/russell-crowe.jpeg", // Path to the cast member's image
      },
      {
        name: "Joaquin Phoenix",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/cast/joaquin-phoenix.jpeg",
      },
      {
        name: "Connie Nielsen",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/cast/connie-nielsen.jpeg",
      },
      // ... other cast members
    ],
  },

  {
    title: "Interstellar",
    time: "1h 50min",
    year: "2019",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    rating: 5,
    imageUrl: "/frontEnd/assets/Interstellar.jpeg", // Path to the movie's image
    posterUrl: "/frontEnd/assets/Interstellar-bg.jpeg", // Path to the movie's image
    synopsis: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, 
                is tasked to pilot a spacecraft, 
                along with a team of researchers, to find a new planet for humans.`,
    cast: [
      {
        name: "Russell Crowe",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/cast/russell-crowe.jpeg", // Path to the cast member's image
      },
      {
        name: "Joaquin Phoenix",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/cast/joaquin-phoenix.jpeg",
      },
      {
        name: "Connie Nielsen",
        characterName: "John Nash",
        imageUrl: "/frontEnd/assets/cast/connie-nielsen.jpeg",
      },
      // ... other cast members
    ],
  },
  // Add more movie objects as needed
];

function getMovieDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");
  const movie = movies.find((m) => m.title === title);

  if (movie) {
    const detailsElement = document.getElementById("about-movies-details");

    // Generate genres string
    const genres = movie.genres.join(", ");

    // Generate stars using FontAwesome icons
    const starsFull = '<i class="fa fa-star"></i>'.repeat(movie.rating);
    const starsEmpty = '<i class="fa fa-star-o"></i>'.repeat(5 - movie.rating);
    const stars = starsFull + starsEmpty;

    // Update the background image with a linear gradient
    const bgPosterElement = document.querySelector(".bg-poster");
    bgPosterElement.style.background = `linear-gradient(rgba(0, 0, 0, 0), rgba(254, 254, 254, 0.9995)), url('${movie.posterUrl}')`;
    bgPosterElement.style.height = "450px";
    bgPosterElement.style.width = "100%";
    bgPosterElement.style.backgroundSize = "cover"; // Ensure the image covers the entire element
    bgPosterElement.style.backgroundPosition = "top"; // Center the image
    bgPosterElement.style.backgroundRepeat = "no-repeat";

    // Generate cast HTML
    const castHtml = `
        <div class="cast-container">
          ${movie.cast
            .map(
              (castMember) => `
            <div class="cast-details">
              <img src="${castMember.imageUrl}" alt="${castMember.name}">
              <p>${castMember.name}</p>
              <p>${castMember.characterName}</p>
            </div>
          `
            )
            .join("")}
        </div>
    `;

    // Set innerHTML of detailsElement
    detailsElement.innerHTML = `
        <div class="details-container">
          <div class="details-display-body">
            <div>
              <div class="card-poster">
                    <img src="${movie.imageUrl}" alt="" id="moviePoster"/>
                  <div class="card-details">
                    <h1>${movie.title}</h1>
                    <p>${movie.year}</p>
                    <p>${genres}</p>
                    <div class="ratings">${stars}</div>
                  </div>
                </div>
                <div class="card-poster-overview">
                  <h2>Synopsis</h2>
                  <p class="synopsis">${movie.synopsis}</p>
                  ${castHtml}
                </div>
            </div>
            <div class="download-tab">
              <p>Note: Downloads starts automatically after clicking the button</p>
              <button class="download-btn">Download now!</button>
            </div>
          </div>
        </div>`;
  }
}

getMovieDetails();
