import { Movie, MovieDetails, Genre, Person } from '../types';

// Mock data for demonstration (in a real app, you'd use TMDB API)
const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster_path: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    release_date: "2010-07-16",
    vote_average: 8.8,
    vote_count: 23456,
    genre_ids: [28, 878, 12],
    genres: [
      { id: 28, name: "Action" },
      { id: 878, name: "Science Fiction" },
      { id: 12, name: "Adventure" }
    ],
    runtime: 148,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    trailer_key: "YoHD9XEInc0",
    streaming_platforms: [
      {
        id: 1,
        name: "Netflix",
        logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
        type: "subscription",
        price: 15.99
      },
      {
        id: 2,
        name: "Amazon Prime",
        logo_path: "https://image.tmdb.org/t/p/original/68MNrwlkp6S0JQd2TpQqgqXz0K.jpg",
        type: "subscription",
        price: 12.99
      },
      {
        id: 3,
        name: "iTunes",
        logo_path: "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61L8kuCblOc8U.jpg",
        type: "purchase",
        price: 19.99
      }
    ],
    full_cast: [
      {
        id: 1,
        name: "Leonardo DiCaprio",
        character: "Cobb",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Leonardo Wilhelm DiCaprio is an American actor, film producer, and environmentalist.",
        birthday: "1974-11-11",
        place_of_birth: "Los Angeles, California, USA",
        known_for_department: "Acting",
        popularity: 85.2
      },
      {
        id: 2,
        name: "Joseph Gordon-Levitt",
        character: "Arthur",
        profile_path: "https://image.tmdb.org/t/p/w500/3oBElgx8JGF5rsCmn2aJ1PvMq8I.jpg",
        order: 1,
        biography: "Joseph Leonard Gordon-Levitt is an American actor, filmmaker, singer, and entrepreneur.",
        birthday: "1981-02-17",
        place_of_birth: "Los Angeles, California, USA",
        known_for_department: "Acting",
        popularity: 78.5
      },
      {
        id: 3,
        name: "Ellen Page",
        character: "Ariadne",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 2,
        biography: "Ellen Grace Philpotts-Page is a Canadian actress and producer.",
        birthday: "1987-02-21",
        place_of_birth: "Halifax, Nova Scotia, Canada",
        known_for_department: "Acting",
        popularity: 72.1
      }
    ],
    full_crew: [
      {
        id: 101,
        name: "Christopher Nolan",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Christopher Edward Nolan is a British-American film director, producer, and screenwriter.",
        birthday: "1970-07-30",
        place_of_birth: "London, England, UK",
        known_for_department: "Directing",
        popularity: 89.3
      },
      {
        id: 102,
        name: "Hans Zimmer",
        job: "Original Music Composer",
        department: "Sound",
        profile_path: "https://image.tmdb.org/t/p/w500/tpQnDeHY15szIXvpnhlprufz4d.jpg",
        biography: "Hans Florian Zimmer is a German film score composer and music producer.",
        birthday: "1957-09-12",
        place_of_birth: "Frankfurt, Germany",
        known_for_department: "Sound",
        popularity: 76.8
      }
    ]
  },
  {
    id: 2,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
    release_date: "2008-07-18",
    vote_average: 9.0,
    vote_count: 28947,
    genre_ids: [28, 80, 18],
    genres: [
      { id: 28, name: "Action" },
      { id: 80, name: "Crime" },
      { id: 18, name: "Drama" }
    ],
    runtime: 152,
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    trailer_key: "EXeTwQWrcwY",
    streaming_platforms: [
      {
        id: 4,
        name: "HBO Max",
        logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
        type: "subscription",
        price: 14.99
      },
      {
        id: 5,
        name: "Google Play",
        logo_path: "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61L8kuCblOc8U.jpg",
        type: "rental",
        price: 3.99
      }
    ],
    full_cast: [
      {
        id: 4,
        name: "Christian Bale",
        character: "Bruce Wayne / Batman",
        profile_path: "https://image.tmdb.org/t/p/w500/4D4P0SKU6W8UBgnGIDpkQ5i2v9M.jpg",
        order: 0,
        biography: "Christian Charles Philip Bale is an English actor.",
        birthday: "1974-01-30",
        place_of_birth: "Haverfordwest, Pembrokeshire, Wales, UK",
        known_for_department: "Acting",
        popularity: 82.4
      },
      {
        id: 5,
        name: "Heath Ledger",
        character: "Joker",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 1,
        biography: "Heath Andrew Ledger was an Australian actor and music video director.",
        birthday: "1979-04-04",
        place_of_birth: "Perth, Western Australia, Australia",
        known_for_department: "Acting",
        popularity: 79.6
      }
    ],
    full_crew: [
      {
        id: 101,
        name: "Christopher Nolan",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Christopher Edward Nolan is a British-American film director, producer, and screenwriter.",
        birthday: "1970-07-30",
        place_of_birth: "London, England, UK",
        known_for_department: "Directing",
        popularity: 89.3
      }
    ]
  },
  {
    id: 3,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster_path: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",
    release_date: "2014-11-07",
    vote_average: 8.6,
    vote_count: 19876,
    genre_ids: [12, 18, 878],
    genres: [
      { id: 12, name: "Adventure" },
      { id: 18, name: "Drama" },
      { id: 878, name: "Science Fiction" }
    ],
    runtime: 169,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    trailer_key: "2LqzF5WauAw",
    streaming_platforms: [
      {
        id: 6,
        name: "Paramount+",
        logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
        type: "subscription",
        price: 9.99
      }
    ],
    full_cast: [
      {
        id: 6,
        name: "Matthew McConaughey",
        character: "Cooper",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Matthew David McConaughey is an American actor and producer.",
        birthday: "1969-11-04",
        place_of_birth: "Uvalde, Texas, USA",
        known_for_department: "Acting",
        popularity: 81.7
      }
    ],
    full_crew: [
      {
        id: 101,
        name: "Christopher Nolan",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Christopher Edward Nolan is a British-American film director, producer, and screenwriter.",
        birthday: "1970-07-30",
        place_of_birth: "London, England, UK",
        known_for_department: "Directing",
        popularity: 89.3
      }
    ]
  },
  {
    id: 4,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster_path: "https://image.tmdb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2QM528GluxMcAd.jpg",
    release_date: "1994-10-14",
    vote_average: 8.9,
    vote_count: 21567,
    genre_ids: [80, 53],
    genres: [
      { id: 80, name: "Crime" },
      { id: 53, name: "Thriller" }
    ],
    runtime: 154,
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    trailer_key: "s7EdQ4FqbhY",
    streaming_platforms: [
      {
        id: 7,
        name: "Hulu",
        logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
        type: "subscription",
        price: 7.99
      }
    ],
    full_cast: [
      {
        id: 7,
        name: "John Travolta",
        character: "Vincent Vega",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "John Joseph Travolta is an American actor, dancer, and singer.",
        birthday: "1954-02-18",
        place_of_birth: "Englewood, New Jersey, USA",
        known_for_department: "Acting",
        popularity: 75.3
      }
    ],
    full_crew: [
      {
        id: 103,
        name: "Quentin Tarantino",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Quentin Jerome Tarantino is an American film director, screenwriter, producer, and actor.",
        birthday: "1963-03-27",
        place_of_birth: "Knoxville, Tennessee, USA",
        known_for_department: "Directing",
        popularity: 87.9
      }
    ]
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    release_date: "1994-09-23",
    vote_average: 9.3,
    vote_count: 24567,
    genre_ids: [18, 80],
    genres: [
      { id: 18, name: "Drama" },
      { id: 80, name: "Crime" }
    ],
    runtime: 142,
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    trailer_key: "6hB3S9bIaco",
    streaming_platforms: [
      {
        id: 8,
        name: "Tubi",
        logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
        type: "free"
      }
    ],
    full_cast: [
      {
        id: 8,
        name: "Tim Robbins",
        character: "Andy Dufresne",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Timothy Francis Robbins is an American actor, screenwriter, director, producer, and musician.",
        birthday: "1958-10-16",
        place_of_birth: "West Covina, California, USA",
        known_for_department: "Acting",
        popularity: 73.8
      }
    ],
    full_crew: [
      {
        id: 104,
        name: "Frank Darabont",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Frank Darabont is an American film director, screenwriter and producer.",
        birthday: "1959-01-28",
        place_of_birth: "Montbéliard, Doubs, France",
        known_for_department: "Directing",
        popularity: 71.2
      }
    ]
  },
  {
    id: 6,
    title: "Fight Club",
    overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    poster_path: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
    release_date: "1999-10-15",
    vote_average: 8.8,
    vote_count: 22345,
    genre_ids: [18],
    genres: [
      { id: 18, name: "Drama" }
    ],
    runtime: 139,
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    trailer_key: "SUXWAEX2jlg",
    streaming_platforms: [
      {
        id: 9,
        name: "Disney+",
        logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
        type: "subscription",
        price: 7.99
      }
    ],
    full_cast: [
      {
        id: 9,
        name: "Brad Pitt",
        character: "Tyler Durden",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "William Bradley Pitt is an American actor and film producer.",
        birthday: "1963-12-18",
        place_of_birth: "Shawnee, Oklahoma, USA",
        known_for_department: "Acting",
        popularity: 88.1
      }
    ],
    full_crew: [
      {
        id: 105,
        name: "David Fincher",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "David Andrew Leo Fincher is an American film director, film producer, and music video director.",
        birthday: "1962-08-28",
        place_of_birth: "Denver, Colorado, USA",
        known_for_department: "Directing",
        popularity: 84.7
      }
    ]
  },
  {
    id: 7,
    title: "Forrest Gump",
    overview: "The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of an Alabama man.",
    poster_path: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/4dQvS8b6YkXy1g7rG6U5l6Q2F8A.jpg",
    release_date: "1994-07-06",
    vote_average: 8.8,
    vote_count: 21000,
    genre_ids: [35, 18, 10749],
    genres: [
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" },
      { id: 10749, name: "Romance" }
    ],
    runtime: 142,
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    trailer_key: "bLvqoHBptjg",
    streaming_platforms: [
      { id: 10, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [
      {
        id: 10,
        name: "Tom Hanks",
        character: "Forrest Gump",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Thomas Jeffrey Hanks is an American actor and filmmaker.",
        birthday: "1956-07-09",
        place_of_birth: "Concord, California, USA",
        known_for_department: "Acting",
        popularity: 88.5
      },
      {
        id: 11,
        name: "Robin Wright",
        character: "Jenny Curran",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Robin Gayle Wright is an American actress and director.",
        birthday: "1966-04-08",
        place_of_birth: "Dallas, Texas, USA",
        known_for_department: "Acting",
        popularity: 76.2
      }
    ],
    full_crew: [
      {
        id: 106,
        name: "Robert Zemeckis",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Robert Lee Zemeckis is an American filmmaker and screenwriter.",
        birthday: "1952-05-14",
        place_of_birth: "Chicago, Illinois, USA",
        known_for_department: "Directing",
        popularity: 82.1
      }
    ]
  },
  {
    id: 8,
    title: "The Matrix",
    overview: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
    release_date: "1999-03-31",
    vote_average: 8.7,
    vote_count: 18000,
    genre_ids: [28, 878],
    genres: [
      { id: 28, name: "Action" },
      { id: 878, name: "Science Fiction" }
    ],
    runtime: 136,
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    trailer_key: "vKQi3bBA1y8",
    streaming_platforms: [
      { id: 11, name: "HBO Max", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 14.99 }
    ],
    full_cast: [
      {
        id: 12,
        name: "Keanu Reeves",
        character: "Neo",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Keanu Charles Reeves is a Canadian actor.",
        birthday: "1964-09-02",
        place_of_birth: "Beirut, Lebanon",
        known_for_department: "Acting",
        popularity: 87.3
      },
      {
        id: 13,
        name: "Laurence Fishburne",
        character: "Morpheus",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Laurence John Fishburne III is an American actor, playwright, producer, screenwriter, and film director.",
        birthday: "1961-07-30",
        place_of_birth: "Augusta, Georgia, USA",
        known_for_department: "Acting",
        popularity: 79.8
      }
    ],
    full_crew: [
      {
        id: 107,
        name: "Lana Wachowski",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Lana Wachowski is an American film and television director, producer, and screenwriter.",
        birthday: "1965-06-21",
        place_of_birth: "Chicago, Illinois, USA",
        known_for_department: "Directing",
        popularity: 78.9
      }
    ]
  },
  {
    id: 9,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster_path: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",
    release_date: "2014-11-07",
    vote_average: 8.6,
    vote_count: 19876,
    genre_ids: [12, 18, 878],
    genres: [
      { id: 12, name: "Adventure" },
      { id: 18, name: "Drama" },
      { id: 878, name: "Science Fiction" }
    ],
    runtime: 169,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    trailer_key: "2LqzF5WauAw",
    streaming_platforms: [
      { id: 6, name: "Paramount+", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 9.99 }
    ],
    full_cast: [
      {
        id: 14,
        name: "Matthew McConaughey",
        character: "Cooper",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Matthew David McConaughey is an American actor and producer.",
        birthday: "1969-11-04",
        place_of_birth: "Uvalde, Texas, USA",
        known_for_department: "Acting",
        popularity: 81.7
      },
      {
        id: 15,
        name: "Anne Hathaway",
        character: "Brand",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Anne Jacqueline Hathaway is an American actress.",
        birthday: "1982-11-12",
        place_of_birth: "Brooklyn, New York, USA",
        known_for_department: "Acting",
        popularity: 84.2
      }
    ],
    full_crew: [
      {
        id: 101,
        name: "Christopher Nolan",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Christopher Edward Nolan is a British-American film director, producer, and screenwriter.",
        birthday: "1970-07-30",
        place_of_birth: "London, England, UK",
        known_for_department: "Directing",
        popularity: 89.3
      }
    ]
  },
  {
    id: 10,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster_path: "https://image.tmdb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2QM528GluxMcAd.jpg",
    release_date: "1994-10-14",
    vote_average: 8.9,
    vote_count: 21567,
    genre_ids: [80, 53],
    genres: [
      { id: 80, name: "Crime" },
      { id: 53, name: "Thriller" }
    ],
    runtime: 154,
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    trailer_key: "s7EdQ4FqbhY",
    streaming_platforms: [
      { id: 7, name: "Hulu", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [
      {
        id: 16,
        name: "John Travolta",
        character: "Vincent Vega",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "John Joseph Travolta is an American actor, dancer, and singer.",
        birthday: "1954-02-18",
        place_of_birth: "Englewood, New Jersey, USA",
        known_for_department: "Acting",
        popularity: 75.3
      },
      {
        id: 17,
        name: "Samuel L. Jackson",
        character: "Jules Winnfield",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Samuel Leroy Jackson is an American actor and film producer.",
        birthday: "1948-12-21",
        place_of_birth: "Washington, D.C., USA",
        known_for_department: "Acting",
        popularity: 86.7
      }
    ],
    full_crew: [
      {
        id: 103,
        name: "Quentin Tarantino",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Quentin Jerome Tarantino is an American film director, screenwriter, producer, and actor.",
        birthday: "1963-03-27",
        place_of_birth: "Knoxville, Tennessee, USA",
        known_for_department: "Directing",
        popularity: 87.9
      }
    ]
  },
  {
    id: 11,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    release_date: "1994-09-23",
    vote_average: 9.3,
    vote_count: 24567,
    genre_ids: [18, 80],
    genres: [
      { id: 18, name: "Drama" },
      { id: 80, name: "Crime" }
    ],
    runtime: 142,
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    trailer_key: "6hB3S9bIaco",
    streaming_platforms: [
      { id: 8, name: "Tubi", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "free" }
    ],
    full_cast: [
      {
        id: 18,
        name: "Tim Robbins",
        character: "Andy Dufresne",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Timothy Francis Robbins is an American actor, screenwriter, director, producer, and musician.",
        birthday: "1958-10-16",
        place_of_birth: "West Covina, California, USA",
        known_for_department: "Acting",
        popularity: 73.8
      },
      {
        id: 19,
        name: "Morgan Freeman",
        character: "Ellis Boyd 'Red' Redding",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Morgan Freeman is an American actor, director, and narrator.",
        birthday: "1937-06-01",
        place_of_birth: "Memphis, Tennessee, USA",
        known_for_department: "Acting",
        popularity: 89.1
      }
    ],
    full_crew: [
      {
        id: 104,
        name: "Frank Darabont",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Frank Darabont is an American film director, screenwriter and producer.",
        birthday: "1959-01-28",
        place_of_birth: "Montbéliard, Doubs, France",
        known_for_department: "Directing",
        popularity: 71.2
      }
    ]
  },
  {
    id: 12,
    title: "Fight Club",
    overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    poster_path: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
    release_date: "1999-10-15",
    vote_average: 8.8,
    vote_count: 22345,
    genre_ids: [18],
    genres: [
      { id: 18, name: "Drama" }
    ],
    runtime: 139,
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    trailer_key: "SUXWAEX2jlg",
    streaming_platforms: [
      { id: 9, name: "Disney+", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [
      {
        id: 20,
        name: "Brad Pitt",
        character: "Tyler Durden",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "William Bradley Pitt is an American actor and film producer.",
        birthday: "1963-12-18",
        place_of_birth: "Shawnee, Oklahoma, USA",
        known_for_department: "Acting",
        popularity: 88.1
      },
      {
        id: 21,
        name: "Edward Norton",
        character: "The Narrator",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Edward Harrison Norton is an American actor and filmmaker.",
        birthday: "1969-08-18",
        place_of_birth: "Boston, Massachusetts, USA",
        known_for_department: "Acting",
        popularity: 82.4
      }
    ],
    full_crew: [
      {
        id: 105,
        name: "David Fincher",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "David Andrew Leo Fincher is an American film director, film producer, and music video director.",
        birthday: "1962-08-28",
        place_of_birth: "Denver, Colorado, USA",
        known_for_department: "Directing",
        popularity: 84.7
      }
    ]
  },
  {
    id: 13,
    title: "The Silence of the Lambs",
    overview: "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to catch another serial killer.",
    poster_path: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/6h1ZtL5zEJk2QkqgU6n2l3pQn6B.jpg",
    release_date: "1991-02-14",
    vote_average: 8.6,
    vote_count: 13000,
    genre_ids: [80, 18, 53],
    genres: [
      { id: 80, name: "Crime" },
      { id: 18, name: "Drama" },
      { id: 53, name: "Thriller" }
    ],
    runtime: 118,
    director: "Jonathan Demme",
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
    trailer_key: "W6Mm8Sbe__o",
    streaming_platforms: [
      { id: 16, name: "Hulu", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [
      {
        id: 22,
        name: "Jodie Foster",
        character: "Clarice Starling",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Alicia Christian Foster is an American actress, director, and producer.",
        birthday: "1962-11-19",
        place_of_birth: "Los Angeles, California, USA",
        known_for_department: "Acting",
        popularity: 83.7
      },
      {
        id: 23,
        name: "Anthony Hopkins",
        character: "Dr. Hannibal Lecter",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Sir Philip Anthony Hopkins is a Welsh actor, director, and producer.",
        birthday: "1937-12-31",
        place_of_birth: "Port Talbot, Wales, UK",
        known_for_department: "Acting",
        popularity: 85.9
      }
    ],
    full_crew: [
      {
        id: 108,
        name: "Jonathan Demme",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Robert Jonathan Demme was an American director, producer, and screenwriter.",
        birthday: "1944-02-22",
        place_of_birth: "Baldwin, New York, USA",
        known_for_department: "Directing",
        popularity: 72.4
      }
    ]
  },
  {
    id: 14,
    title: "The Departed",
    overview: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    poster_path: "https://image.tmdb.org/t/p/w500/auY2hB6nJb2n3Vn6z3w1p1hQp8F.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/6uBlEXZCUHM15UNZqNig17VdN4m.jpg",
    release_date: "2006-10-06",
    vote_average: 8.5,
    vote_count: 12000,
    genre_ids: [18, 80, 53],
    genres: [
      { id: 18, name: "Drama" },
      { id: 80, name: "Crime" },
      { id: 53, name: "Thriller" }
    ],
    runtime: 151,
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
    trailer_key: "iojhqm0JTW4",
    streaming_platforms: [
      { id: 17, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [
      {
        id: 24,
        name: "Leonardo DiCaprio",
        character: "Billy Costigan",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Leonardo Wilhelm DiCaprio is an American actor, film producer, and environmentalist.",
        birthday: "1974-11-11",
        place_of_birth: "Los Angeles, California, USA",
        known_for_department: "Acting",
        popularity: 85.2
      },
      {
        id: 25,
        name: "Matt Damon",
        character: "Colin Sullivan",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Matthew Paige Damon is an American actor, film producer, and screenwriter.",
        birthday: "1970-10-08",
        place_of_birth: "Cambridge, Massachusetts, USA",
        known_for_department: "Acting",
        popularity: 83.7
      }
    ],
    full_crew: [
      {
        id: 109,
        name: "Martin Scorsese",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Martin Charles Scorsese is an American film director, producer, screenwriter, and actor.",
        birthday: "1942-11-17",
        place_of_birth: "Queens, New York, USA",
        known_for_department: "Directing",
        popularity: 87.1
      }
    ]
  },
  {
    id: 15,
    title: "The Prestige",
    overview: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion.",
    poster_path: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/6Eew0pYpBqcI6TJz1H1Q9bQ6yQF.jpg",
    release_date: "2006-10-20",
    vote_average: 8.5,
    vote_count: 11000,
    genre_ids: [18, 9648, 53],
    genres: [
      { id: 18, name: "Drama" },
      { id: 9648, name: "Mystery" },
      { id: 53, name: "Thriller" }
    ],
    runtime: 130,
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"],
    trailer_key: "o4gHCmTQDVI",
    streaming_platforms: [
      { id: 18, name: "Amazon Prime", logo_path: "https://image.tmdb.org/t/p/original/68MNrwlkp6S0JQd2TpQqgqXz0K.jpg", type: "subscription", price: 12.99 }
    ],
    full_cast: [
      {
        id: 26,
        name: "Christian Bale",
        character: "Alfred Borden",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Christian Charles Philip Bale is an English actor.",
        birthday: "1974-01-30",
        place_of_birth: "Haverfordwest, Pembrokeshire, Wales, UK",
        known_for_department: "Acting",
        popularity: 82.4
      },
      {
        id: 27,
        name: "Hugh Jackman",
        character: "Robert Angier",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Hugh Michael Jackman is an Australian actor, singer, and producer.",
        birthday: "1968-10-12",
        place_of_birth: "Sydney, New South Wales, Australia",
        known_for_department: "Acting",
        popularity: 84.6
      }
    ],
    full_crew: [
      {
        id: 101,
        name: "Christopher Nolan",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Christopher Edward Nolan is a British-American film director, producer, and screenwriter.",
        birthday: "1970-07-30",
        place_of_birth: "London, England, UK",
        known_for_department: "Directing",
        popularity: 89.3
      }
    ]
  },
  {
    id: 16,
    title: "The Green Mile",
    overview: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    poster_path: "https://image.tmdb.org/t/p/w500/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/4A4hH6d1yQy0gYd0b1Q1Q1Q1Q1Q.jpg",
    release_date: "1999-12-10",
    vote_average: 8.6,
    vote_count: 11000,
    genre_ids: [14, 18, 80],
    genres: [
      { id: 14, name: "Fantasy" },
      { id: 18, name: "Drama" },
      { id: 80, name: "Crime" }
    ],
    runtime: 189,
    director: "Frank Darabont",
    cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    trailer_key: "ctRK-4Vt7dA",
    streaming_platforms: [
      { id: 19, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [
      {
        id: 10,
        name: "Tom Hanks",
        character: "Paul Edgecomb",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Thomas Jeffrey Hanks is an American actor and filmmaker.",
        birthday: "1956-07-09",
        place_of_birth: "Concord, California, USA",
        known_for_department: "Acting",
        popularity: 88.5
      },
      {
        id: 28,
        name: "Michael Clarke Duncan",
        character: "John Coffey",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Michael Clarke Duncan was an American actor.",
        birthday: "1957-12-10",
        place_of_birth: "Chicago, Illinois, USA",
        known_for_department: "Acting",
        popularity: 71.3
      }
    ],
    full_crew: [
      {
        id: 104,
        name: "Frank Darabont",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Frank Darabont is an American film director, screenwriter and producer.",
        birthday: "1959-01-28",
        place_of_birth: "Montbéliard, Doubs, France",
        known_for_department: "Directing",
        popularity: 71.2
      }
    ]
  },
  {
    id: 17,
    title: "Saving Private Ryan",
    overview: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    poster_path: "https://image.tmdb.org/t/p/w500/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/9SgQf1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "1998-07-24",
    vote_average: 8.6,
    vote_count: 11000,
    genre_ids: [18, 36, 10752],
    genres: [
      { id: 18, name: "Drama" },
      { id: 36, name: "History" },
      { id: 10752, name: "War" }
    ],
    runtime: 169,
    director: "Steven Spielberg",
    cast: ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
    trailer_key: "zwhP5b4tD6g",
    streaming_platforms: [
      { id: 20, name: "Amazon Prime", logo_path: "https://image.tmdb.org/t/p/original/68MNrwlkp6S0JQd2TpQqgqXz0K.jpg", type: "subscription", price: 12.99 }
    ],
    full_cast: [
      {
        id: 10,
        name: "Tom Hanks",
        character: "Captain John H. Miller",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Thomas Jeffrey Hanks is an American actor and filmmaker.",
        birthday: "1956-07-09",
        place_of_birth: "Concord, California, USA",
        known_for_department: "Acting",
        popularity: 88.5
      },
      {
        id: 25,
        name: "Matt Damon",
        character: "Private James Francis Ryan",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Matthew Paige Damon is an American actor, film producer, and screenwriter.",
        birthday: "1970-10-08",
        place_of_birth: "Cambridge, Massachusetts, USA",
        known_for_department: "Acting",
        popularity: 83.7
      }
    ],
    full_crew: [
      {
        id: 110,
        name: "Steven Spielberg",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Steven Allan Spielberg is an American film director, producer, and screenwriter.",
        birthday: "1946-12-18",
        place_of_birth: "Cincinnati, Ohio, USA",
        known_for_department: "Directing",
        popularity: 90.2
      }
    ]
  },
  {
    id: 18,
    title: "Braveheart",
    overview: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    poster_path: "https://image.tmdb.org/t/p/w500/or1gBugydmjToAEq7OZY0owwFk.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "1995-05-24",
    vote_average: 8.3,
    vote_count: 9000,
    genre_ids: [18, 36, 10752],
    genres: [
      { id: 18, name: "Drama" },
      { id: 36, name: "History" },
      { id: 10752, name: "War" }
    ],
    runtime: 178,
    director: "Mel Gibson",
    cast: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"],
    trailer_key: "1NJO0jxBtMo",
    streaming_platforms: [
      { id: 21, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [
      {
        id: 29,
        name: "Mel Gibson",
        character: "William Wallace",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Mel Columcille Gerard Gibson is an American actor, film director, and producer.",
        birthday: "1956-01-03",
        place_of_birth: "Peekskill, New York, USA",
        known_for_department: "Acting",
        popularity: 81.3
      },
      {
        id: 30,
        name: "Sophie Marceau",
        character: "Princess Isabelle",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Sophie Marceau is a French actress, director, and screenwriter.",
        birthday: "1966-11-17",
        place_of_birth: "Paris, France",
        known_for_department: "Acting",
        popularity: 76.8
      }
    ],
    full_crew: [
      {
        id: 111,
        name: "Mel Gibson",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Mel Columcille Gerard Gibson is an American actor, film director, and producer.",
        birthday: "1956-01-03",
        place_of_birth: "Peekskill, New York, USA",
        known_for_department: "Directing",
        popularity: 81.3
      }
    ]
  },
  {
    id: 19,
    title: "The Wolf of Wall Street",
    overview: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker to his fall involving crime, corruption and the federal government.",
    poster_path: "https://image.tmdb.org/t/p/w500/pWHf4khOloNVfCxscsXFj3jj6gP.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2013-12-25",
    vote_average: 8.2,
    vote_count: 10000,
    genre_ids: [18, 35, 80],
    genres: [
      { id: 18, name: "Drama" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" }
    ],
    runtime: 180,
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
    trailer_key: "iszwuX1AK6A",
    streaming_platforms: [
      { id: 22, name: "Amazon Prime", logo_path: "https://image.tmdb.org/t/p/original/68MNrwlkp6S0JQd2TpQqgqXz0K.jpg", type: "subscription", price: 12.99 }
    ],
    full_cast: [
      {
        id: 1,
        name: "Leonardo DiCaprio",
        character: "Jordan Belfort",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Leonardo Wilhelm DiCaprio is an American actor, film producer, and environmentalist.",
        birthday: "1974-11-11",
        place_of_birth: "Los Angeles, California, USA",
        known_for_department: "Acting",
        popularity: 85.2
      },
      {
        id: 31,
        name: "Jonah Hill",
        character: "Donnie Azoff",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Jonah Hill Feldstein is an American actor, comedian, producer, and screenwriter.",
        birthday: "1983-12-20",
        place_of_birth: "Los Angeles, California, USA",
        known_for_department: "Acting",
        popularity: 78.9
      }
    ],
    full_crew: [
      {
        id: 109,
        name: "Martin Scorsese",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Martin Charles Scorsese is an American film director, producer, screenwriter, and actor.",
        birthday: "1942-11-17",
        place_of_birth: "Queens, New York, USA",
        known_for_department: "Directing",
        popularity: 87.1
      }
    ]
  },
  {
    id: 20,
    title: "Coco",
    overview: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather.",
    poster_path: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
    release_date: "2017-10-20",
    vote_average: 8.4,
    vote_count: 9000,
    genre_ids: [16, 12, 35, 10751],
    genres: [
      { id: 16, name: "Animation" },
      { id: 12, name: "Adventure" },
      { id: 35, name: "Comedy" },
      { id: 10751, name: "Family" }
    ],
    runtime: 105,
    director: "Lee Unkrich",
    cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
    trailer_key: "Ga6RYejo6Hk",
    streaming_platforms: [
      { id: 23, name: "Disney+", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [
      {
        id: 32,
        name: "Anthony Gonzalez",
        character: "Miguel",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Anthony Gonzalez is an American actor and singer.",
        birthday: "2004-09-23",
        place_of_birth: "Los Angeles, California, USA",
        known_for_department: "Acting",
        popularity: 65.4
      },
      {
        id: 33,
        name: "Gael García Bernal",
        character: "Héctor",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Gael García Bernal is a Mexican actor, director, and producer.",
        birthday: "1978-11-30",
        place_of_birth: "Guadalajara, Jalisco, Mexico",
        known_for_department: "Acting",
        popularity: 73.2
      }
    ],
    full_crew: [
      {
        id: 112,
        name: "Lee Unkrich",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Lee Edward Unkrich is an American film director, film editor, screenwriter, and animator.",
        birthday: "1967-08-08",
        place_of_birth: "Cleveland, Ohio, USA",
        known_for_department: "Directing",
        popularity: 68.7
      }
    ]
  },
  {
    id: 21,
    title: "Inside Out",
    overview: "After young Riley is uprooted from her Midwest life, her emotions conflict on how best to navigate a new city, house, and school.",
    poster_path: "https://image.tmdb.org/t/p/w500/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/szytSpLAyBh3ULei3x663mAv5ZT.jpg",
    release_date: "2015-06-19",
    vote_average: 8.2,
    vote_count: 9000,
    genre_ids: [16, 35, 18, 10751],
    genres: [
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" }
    ],
    runtime: 95,
    director: "Pete Docter",
    cast: ["Amy Poehler", "Phyllis Smith", "Richard Kind"],
    trailer_key: "seMwpP0yeu4",
    streaming_platforms: [
      { id: 24, name: "Disney+", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [
      {
        id: 34,
        name: "Amy Poehler",
        character: "Joy",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Amy Poehler is an American actress, comedian, writer, producer, and director.",
        birthday: "1971-09-16",
        place_of_birth: "Newton, Massachusetts, USA",
        known_for_department: "Acting",
        popularity: 77.1
      },
      {
        id: 35,
        name: "Phyllis Smith",
        character: "Sadness",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Phyllis Smith is an American actress and casting associate.",
        birthday: "1951-07-10",
        place_of_birth: "St. Louis, Missouri, USA",
        known_for_department: "Acting",
        popularity: 65.2
      }
    ],
    full_crew: [
      {
        id: 113,
        name: "Pete Docter",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Peter Hans Docter is an American animator, film director, screenwriter, producer, and voice actor.",
        birthday: "1968-10-09",
        place_of_birth: "Bloomington, Minnesota, USA",
        known_for_department: "Directing",
        popularity: 70.4
      }
    ]
  },
  {
    id: 22,
    title: "The Incredibles",
    overview: "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
    poster_path: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/9QpU4bq9rj7XnR6e7iT730cdp8C.jpg",
    release_date: "2004-11-05",
    vote_average: 8.0,
    vote_count: 8000,
    genre_ids: [16, 28, 12, 10751],
    genres: [
      { id: 16, name: "Animation" },
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 10751, name: "Family" }
    ],
    runtime: 115,
    director: "Brad Bird",
    cast: ["Craig T. Nelson", "Holly Hunter", "Samuel L. Jackson"],
    trailer_key: "eZbzbC9285I",
    streaming_platforms: [
      { id: 25, name: "Disney+", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [
      {
        id: 36,
        name: "Craig T. Nelson",
        character: "Bob Parr / Mr. Incredible",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Craig Theodore Nelson is an American actor.",
        birthday: "1944-04-04",
        place_of_birth: "Spokane, Washington, USA",
        known_for_department: "Acting",
        popularity: 62.1
      },
      {
        id: 37,
        name: "Holly Hunter",
        character: "Helen Parr / Elastigirl",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Holly Patricia Hunter is an American actress.",
        birthday: "1958-03-20",
        place_of_birth: "Conyers, Georgia, USA",
        known_for_department: "Acting",
        popularity: 68.3
      }
    ],
    full_crew: [
      {
        id: 114,
        name: "Brad Bird",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Phillip Bradley Bird is an American animator, director, screenwriter, producer, and voice actor.",
        birthday: "1957-09-24",
        place_of_birth: "Kalispell, Montana, USA",
        known_for_department: "Directing",
        popularity: 67.2
      }
    ]
  },
  {
    id: 23,
    title: "Finding Nemo",
    overview: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    poster_path: "https://image.tmdb.org/t/p/w500/2zLxQd6z1b9l0w6QF6UVxZ4p1cA.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg",
    release_date: "2003-05-30",
    vote_average: 8.1,
    vote_count: 9000,
    genre_ids: [16, 12, 10751],
    genres: [
      { id: 16, name: "Animation" },
      { id: 12, name: "Adventure" },
      { id: 10751, name: "Family" }
    ],
    runtime: 100,
    director: "Andrew Stanton",
    cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    trailer_key: "wZdpNglLbt8",
    streaming_platforms: [
      { id: 26, name: "Disney+", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [
      {
        id: 38,
        name: "Albert Brooks",
        character: "Marlin",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Albert Brooks is an American actor, comedian, and filmmaker.",
        birthday: "1947-07-22",
        place_of_birth: "Beverly Hills, California, USA",
        known_for_department: "Acting",
        popularity: 61.5
      },
      {
        id: 39,
        name: "Ellen DeGeneres",
        character: "Dory",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Ellen Lee DeGeneres is an American comedian, television host, actress, writer, and producer.",
        birthday: "1958-01-26",
        place_of_birth: "Metairie, Louisiana, USA",
        known_for_department: "Acting",
        popularity: 70.2
      }
    ],
    full_crew: [
      {
        id: 115,
        name: "Andrew Stanton",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Andrew Ayers Stanton is an American filmmaker, animator, and voice actor.",
        birthday: "1965-12-03",
        place_of_birth: "Rockport, Massachusetts, USA",
        known_for_department: "Directing",
        popularity: 66.1
      }
    ]
  },
  {
    id: 24,
    title: "Toy Story",
    overview: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    poster_path: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/dji4Fm0gCDVb9DQQMRvAI8YNnTz.jpg",
    release_date: "1995-11-22",
    vote_average: 8.3,
    vote_count: 10000,
    genre_ids: [16, 35, 10751],
    genres: [
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 10751, name: "Family" }
    ],
    runtime: 81,
    director: "John Lasseter",
    cast: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    trailer_key: "KYz2wyBy3kc",
    streaming_platforms: [
      { id: 27, name: "Disney+", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [
      {
        id: 10,
        name: "Tom Hanks",
        character: "Woody",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Thomas Jeffrey Hanks is an American actor and filmmaker.",
        birthday: "1956-07-09",
        place_of_birth: "Concord, California, USA",
        known_for_department: "Acting",
        popularity: 88.5
      },
      {
        id: 40,
        name: "Tim Allen",
        character: "Buzz Lightyear",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Timothy Alan Dick, known professionally as Tim Allen, is an American actor and comedian.",
        birthday: "1953-06-13",
        place_of_birth: "Denver, Colorado, USA",
        known_for_department: "Acting",
        popularity: 67.8
      }
    ],
    full_crew: [
      {
        id: 116,
        name: "John Lasseter",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "John Alan Lasseter is an American film director, producer, screenwriter, animator, and voice actor.",
        birthday: "1957-01-12",
        place_of_birth: "Hollywood, California, USA",
        known_for_department: "Directing",
        popularity: 65.9
      }
    ]
  },
  {
    id: 25,
    title: "Monsters, Inc.",
    overview: "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters.",
    poster_path: "https://image.tmdb.org/t/p/w500/sgheSKxZkttIe8ONsf2sWXPgip3.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg",
    release_date: "2001-11-02",
    vote_average: 8.1,
    vote_count: 8000,
    genre_ids: [16, 35, 10751],
    genres: [
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 10751, name: "Family" }
    ],
    runtime: 92,
    director: "Pete Docter",
    cast: ["Billy Crystal", "John Goodman", "Mary Gibbs"],
    trailer_key: "CVjA1k1k6bY",
    streaming_platforms: [
      { id: 28, name: "Disney+", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [
      {
        id: 41,
        name: "Billy Crystal",
        character: "Mike Wazowski",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "William Edward Crystal is an American actor, comedian, and filmmaker.",
        birthday: "1948-03-14",
        place_of_birth: "New York City, New York, USA",
        known_for_department: "Acting",
        popularity: 66.2
      },
      {
        id: 42,
        name: "John Goodman",
        character: "James P. Sullivan",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "John Stephen Goodman is an American actor.",
        birthday: "1952-06-20",
        place_of_birth: "Affton, Missouri, USA",
        known_for_department: "Acting",
        popularity: 69.4
      }
    ],
    full_crew: [
      {
        id: 113,
        name: "Pete Docter",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Peter Hans Docter is an American animator, film director, screenwriter, producer, and voice actor.",
        birthday: "1968-10-09",
        place_of_birth: "Bloomington, Minnesota, USA",
        known_for_department: "Directing",
        popularity: 70.4
      }
    ]
  },
  {
    id: 26,
    title: "Shrek",
    overview: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess.",
    poster_path: "https://image.tmdb.org/t/p/w500/aiuehPz1w1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2001-05-18",
    vote_average: 8.0,
    vote_count: 9000,
    genre_ids: [16, 35, 10751, 14],
    genres: [
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" }
    ],
    runtime: 90,
    director: "Andrew Adamson, Vicky Jenson",
    cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
    trailer_key: "CwXOrWvPBPk",
    streaming_platforms: [
      { id: 29, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [
      {
        id: 43,
        name: "Mike Myers",
        character: "Shrek",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Michael John Myers is a Canadian actor, comedian, screenwriter, and producer.",
        birthday: "1963-05-25",
        place_of_birth: "Scarborough, Ontario, Canada",
        known_for_department: "Acting",
        popularity: 72.1
      },
      {
        id: 44,
        name: "Eddie Murphy",
        character: "Donkey",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Edward Regan Murphy is an American actor, comedian, and singer.",
        birthday: "1961-04-03",
        place_of_birth: "Brooklyn, New York, USA",
        known_for_department: "Acting",
        popularity: 74.3
      }
    ],
    full_crew: [
      {
        id: 117,
        name: "Andrew Adamson",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Andrew Ralph Adamson is a New Zealand film director, producer, and screenwriter.",
        birthday: "1966-12-01",
        place_of_birth: "Auckland, New Zealand",
        known_for_department: "Directing",
        popularity: 63.2
      },
      {
        id: 118,
        name: "Vicky Jenson",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Vicky Jenson is an American film director, storyboard artist, and production designer.",
        birthday: "1957-03-04",
        place_of_birth: "Los Angeles, California, USA",
        known_for_department: "Directing",
        popularity: 60.1
      }
    ]
  },
  {
    id: 27,
    title: "The Social Network",
    overview: "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook.",
    poster_path: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2010-10-01",
    vote_average: 7.7,
    vote_count: 8000,
    genre_ids: [18],
    genres: [
      { id: 18, name: "Drama" }
    ],
    runtime: 120,
    director: "David Fincher",
    cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
    trailer_key: "lB95KLmpLR4",
    streaming_platforms: [
      { id: 30, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [
      {
        id: 45,
        name: "Jesse Eisenberg",
        character: "Mark Zuckerberg",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Jesse Adam Eisenberg is an American actor, author, and playwright.",
        birthday: "1983-10-05",
        place_of_birth: "New York City, New York, USA",
        known_for_department: "Acting",
        popularity: 70.1
      },
      {
        id: 46,
        name: "Andrew Garfield",
        character: "Eduardo Saverin",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Andrew Russell Garfield is a British and American actor.",
        birthday: "1983-08-20",
        place_of_birth: "Los Angeles, California, USA",
        known_for_department: "Acting",
        popularity: 68.4
      }
    ],
    full_crew: [
      {
        id: 105,
        name: "David Fincher",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "David Andrew Leo Fincher is an American film director, film producer, and music video director.",
        birthday: "1962-08-28",
        place_of_birth: "Denver, Colorado, USA",
        known_for_department: "Directing",
        popularity: 84.7
      },
      {
        id: 119,
        name: "Aaron Sorkin",
        job: "Screenplay",
        department: "Writing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Aaron Benjamin Sorkin is an American playwright, screenwriter, and director.",
        birthday: "1961-06-09",
        place_of_birth: "New York City, New York, USA",
        known_for_department: "Writing",
        popularity: 62.5
      }
    ]
  },
  {
    id: 28,
    title: "Up",
    overview: "78-year-old Carl sets out to fulfill his lifelong dream to see the wilds of South America by tying thousands of balloons to his house.",
    poster_path: "https://image.tmdb.org/t/p/w500/9yzpQ1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2009-05-29",
    vote_average: 8.2,
    vote_count: 9000,
    genre_ids: [16, 12, 10751],
    genres: [
      { id: 16, name: "Animation" },
      { id: 12, name: "Adventure" },
      { id: 10751, name: "Family" }
    ],
    runtime: 96,
    director: "Pete Docter",
    cast: ["Edward Asner", "Jordan Nagai", "John Ratzenberger"],
    trailer_key: "pkqzFUhGPJg",
    streaming_platforms: [
      { id: 31, name: "Disney+", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [
      { id: 53, name: "Edward Asner", character: "Carl Fredricksen", profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg", order: 0, biography: "Edward Asner was an American actor and president of the Screen Actors Guild.", birthday: "1929-11-15", place_of_birth: "Kansas City, Missouri, USA", known_for_department: "Acting", popularity: 60.1 },
      { id: 54, name: "Jordan Nagai", character: "Russell", profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg", order: 1, biography: "Jordan Nagai is an American former voice actor.", birthday: "2000-02-05", place_of_birth: "Los Angeles, California, USA", known_for_department: "Acting", popularity: 55.2 }
    ],
    full_crew: [
      { id: 113, name: "Pete Docter", job: "Director", department: "Directing", profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg", biography: "Peter Hans Docter is an American animator, film director, screenwriter, producer, and voice actor.", birthday: "1968-10-09", place_of_birth: "Bloomington, Minnesota, USA", known_for_department: "Directing", popularity: 70.4 }
    ]
  },
  {
    id: 29,
    title: "Ratatouille",
    overview: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
    poster_path: "https://image.tmdb.org/t/p/w500/npHNjldbeTHdKKw28bCddhBxSVh.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2007-06-29",
    vote_average: 8.0,
    vote_count: 8000,
    genre_ids: [16, 35, 10751],
    genres: [
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 10751, name: "Family" }
    ],
    runtime: 111,
    director: "Brad Bird",
    cast: ["Patton Oswalt", "Ian Holm", "Lou Romano"],
    trailer_key: "NgsQ8mVkN8w",
    streaming_platforms: [
      { id: 32, name: "Disney+", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [
      { id: 55, name: "Patton Oswalt", character: "Remy", profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg", order: 0, biography: "Patton Oswalt is an American stand-up comedian, actor, and writer.", birthday: "1969-01-27", place_of_birth: "Portsmouth, Virginia, USA", known_for_department: "Acting", popularity: 61.2 },
      { id: 56, name: "Ian Holm", character: "Skinner", profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg", order: 1, biography: "Sir Ian Holm Cuthbert was an English actor.", birthday: "1931-09-12", place_of_birth: "Goodmayes, Essex, England, UK", known_for_department: "Acting", popularity: 59.3 }
    ],
    full_crew: [
      { id: 114, name: "Brad Bird", job: "Director", department: "Directing", profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg", biography: "Phillip Bradley Bird is an American animator, director, screenwriter, producer, and voice actor.", birthday: "1957-09-24", place_of_birth: "Kalispell, Montana, USA", known_for_department: "Directing", popularity: 67.2 }
    ]
  },
  {
    id: 30,
    title: "WALL·E",
    overview: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will decide the fate of mankind.",
    poster_path: "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2008-06-27",
    vote_average: 8.4,
    vote_count: 9000,
    genre_ids: [16, 10751, 878],
    genres: [
      { id: 16, name: "Animation" },
      { id: 10751, name: "Family" },
      { id: 878, name: "Science Fiction" }
    ],
    runtime: 98,
    director: "Andrew Stanton",
    cast: ["Ben Burtt", "Elissa Knight", "Jeff Garlin"],
    trailer_key: "alIq_wG9FNk",
    streaming_platforms: [
      { id: 33, name: "Disney+", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [
      { id: 57, name: "Ben Burtt", character: "WALL·E / M-O (voice)", profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg", order: 0, biography: "Benjamin Burtt Jr. is an American sound designer, film editor, director, screenwriter, and voice actor.", birthday: "1948-07-12", place_of_birth: "Jamesville, New York, USA", known_for_department: "Acting", popularity: 58.1 },
      { id: 58, name: "Elissa Knight", character: "EVE (voice)", profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg", order: 1, biography: "Elissa Knight is an American voice actress and Pixar employee.", birthday: "1975-04-15", place_of_birth: "USA", known_for_department: "Acting", popularity: 54.2 }
    ],
    full_crew: [
      { id: 115, name: "Andrew Stanton", job: "Director", department: "Directing", profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg", biography: "Andrew Ayers Stanton is an American filmmaker, animator, and voice actor.", birthday: "1965-12-03", place_of_birth: "Rockport, Massachusetts, USA", known_for_department: "Directing", popularity: 66.1 }
    ]
  },
  {
    id: 31,
    title: "The Grand Budapest Hotel",
    overview: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy.",
    poster_path: "https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2014-03-28",
    vote_average: 8.1,
    vote_count: 7000,
    genre_ids: [35, 18],
    genres: [
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" }
    ],
    runtime: 99,
    director: "Wes Anderson",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    trailer_key: "1Fg5iWmQjwk",
    streaming_platforms: [
      { id: 34, name: "Amazon Prime", logo_path: "https://image.tmdb.org/t/p/original/68MNrwlkp6S0JQd2TpQqgqXz0K.jpg", type: "subscription", price: 12.99 }
    ],
    full_cast: [
      {
        id: 47,
        name: "Ralph Fiennes",
        character: "M. Gustave",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Ralph Nathaniel Twisleton-Wykeham-Fiennes is an English actor, film producer, and director.",
        birthday: "1962-12-22",
        place_of_birth: "Ipswich, Suffolk, England, UK",
        known_for_department: "Acting",
        popularity: 69.2
      },
      {
        id: 48,
        name: "Tony Revolori",
        character: "Zero Moustafa",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Anthony Revolori is an American actor.",
        birthday: "1996-04-28",
        place_of_birth: "Anaheim, California, USA",
        known_for_department: "Acting",
        popularity: 60.3
      }
    ],
    full_crew: [
      {
        id: 120,
        name: "Wes Anderson",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Wesley Wales Anderson is an American filmmaker.",
        birthday: "1969-05-01",
        place_of_birth: "Houston, Texas, USA",
        known_for_department: "Directing",
        popularity: 65.7
      },
      {
        id: 121,
        name: "Hugo Guinness",
        job: "Screenplay",
        department: "Writing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Hugo Arthur Rundell Guinness is an English artist and writer.",
        birthday: "1959-09-12",
        place_of_birth: "London, England, UK",
        known_for_department: "Writing",
        popularity: 58.2
      }
    ]
  },
  {
    id: 32,
    title: "La La Land",
    overview: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations.",
    poster_path: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2016-12-09",
    vote_average: 8.0,
    vote_count: 9000,
    genre_ids: [35, 18, 10402, 10749],
    genres: [
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" },
      { id: 10402, name: "Music" },
      { id: 10749, name: "Romance" }
    ],
    runtime: 128,
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
    trailer_key: "0pdqf4P9MB8",
    streaming_platforms: [
      { id: 35, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [
      {
        id: 51,
        name: "Ryan Gosling",
        character: "Sebastian Wilder",
        profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
        order: 0,
        biography: "Ryan Thomas Gosling is a Canadian actor and musician.",
        birthday: "1980-11-12",
        place_of_birth: "London, Ontario, Canada",
        known_for_department: "Acting",
        popularity: 75.2
      },
      {
        id: 52,
        name: "Emma Stone",
        character: "Mia Dolan",
        profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg",
        order: 1,
        biography: "Emily Jean 'Emma' Stone is an American actress.",
        birthday: "1988-11-06",
        place_of_birth: "Scottsdale, Arizona, USA",
        known_for_department: "Acting",
        popularity: 80.1
      }
    ],
    full_crew: [
      {
        id: 122,
        name: "Damien Chazelle",
        job: "Director",
        department: "Directing",
        profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
        biography: "Damien Sayre Chazelle is an American film director, screenwriter, and producer.",
        birthday: "1985-01-19",
        place_of_birth: "Providence, Rhode Island, USA",
        known_for_department: "Directing",
        popularity: 64.1
      }
    ]
  },
  {
    id: 33,
    title: "The Truman Show",
    overview: "An insurance salesman discovers his whole life is actually a reality TV show.",
    poster_path: "https://image.tmdb.org/t/p/w500/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "1998-06-05",
    vote_average: 8.1,
    vote_count: 8000,
    genre_ids: [35, 18],
    genres: [
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" }
    ],
    runtime: 103,
    director: "Peter Weir",
    cast: ["Jim Carrey", "Ed Harris", "Laura Linney"],
    trailer_key: "loTIzXAS7v4",
    streaming_platforms: [
      { id: 36, name: "Amazon Prime", logo_path: "https://image.tmdb.org/t/p/original/68MNrwlkp6S0JQd2TpQqgqXz0K.jpg", type: "subscription", price: 12.99 }
    ],
    full_cast: [
      { id: 59, name: "Jim Carrey", character: "Truman Burbank", profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg", order: 0, biography: "James Eugene Carrey is a Canadian-American actor, comedian, and writer.", birthday: "1962-01-17", place_of_birth: "Newmarket, Ontario, Canada", known_for_department: "Acting", popularity: 78.1 },
      { id: 60, name: "Ed Harris", character: "Christof", profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg", order: 1, biography: "Edward Allen Harris is an American actor, producer, director, and screenwriter.", birthday: "1950-11-28", place_of_birth: "Englewood, New Jersey, USA", known_for_department: "Acting", popularity: 70.2 }
    ],
    full_crew: [
      { id: 123, name: "Peter Weir", job: "Director", department: "Directing", profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg", biography: "Peter Lindsay Weir is an Australian film director.", birthday: "1944-08-21", place_of_birth: "Sydney, New South Wales, Australia", known_for_department: "Directing", popularity: 63.1 }
    ]
  },
  {
    id: 34,
    title: "The Pursuit of Happyness",
    overview: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
    poster_path: "https://image.tmdb.org/t/p/w500/ep5eB8t2QWbJ1g9u7H5PHeTtQ1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2006-12-15",
    vote_average: 8.0,
    vote_count: 7000,
    genre_ids: [18],
    genres: [
      { id: 18, name: "Drama" }
    ],
    runtime: 117,
    director: "Gabriele Muccino",
    cast: ["Will Smith", "Jaden Smith", "Thandie Newton"],
    trailer_key: "89Kq8SDyvfg",
    streaming_platforms: [
      { id: 37, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [
      { id: 61, name: "Will Smith", character: "Chris Gardner", profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg", order: 0, biography: "Willard Carroll Smith II is an American actor, rapper, and film producer.", birthday: "1968-09-25", place_of_birth: "Philadelphia, Pennsylvania, USA", known_for_department: "Acting", popularity: 85.1 },
      { id: 62, name: "Jaden Smith", character: "Christopher Gardner Jr.", profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg", order: 1, biography: "Jaden Christopher Syre Smith is an American actor and rapper.", birthday: "1998-07-08", place_of_birth: "Malibu, California, USA", known_for_department: "Acting", popularity: 60.2 }
    ],
    full_crew: [
      { id: 124, name: "Gabriele Muccino", job: "Director", department: "Directing", profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg", biography: "Gabriele Muccino is an Italian film director.", birthday: "1967-05-20", place_of_birth: "Rome, Italy", known_for_department: "Directing", popularity: 61.1 }
    ]
  },
  {
    id: 35,
    title: "The Imitation Game",
    overview: "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code.",
    poster_path: "https://image.tmdb.org/t/p/w500/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2014-11-28",
    vote_average: 8.0,
    vote_count: 7000,
    genre_ids: [18, 36, 53, 10752],
    genres: [
      { id: 18, name: "Drama" },
      { id: 36, name: "History" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" }
    ],
    runtime: 113,
    director: "Morten Tyldum",
    cast: ["Benedict Cumberbatch", "Keira Knightley", "Matthew Goode"],
    trailer_key: "nuPZUUED5uk",
    streaming_platforms: [
      { id: 38, name: "Amazon Prime", logo_path: "https://image.tmdb.org/t/p/original/68MNrwlkp6S0JQd2TpQqgqXz0K.jpg", type: "subscription", price: 12.99 }
    ],
    full_cast: [
      { id: 63, name: "Benedict Cumberbatch", character: "Alan Turing", profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg", order: 0, biography: "Benedict Timothy Carlton Cumberbatch is an English actor.", birthday: "1976-07-19", place_of_birth: "London, England, UK", known_for_department: "Acting", popularity: 80.1 },
      { id: 64, name: "Keira Knightley", character: "Joan Clarke", profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg", order: 1, biography: "Keira Christina Knightley is an English actress.", birthday: "1985-03-26", place_of_birth: "London, England, UK", known_for_department: "Acting", popularity: 75.2 }
    ],
    full_crew: [
      { id: 125, name: "Morten Tyldum", job: "Director", department: "Directing", profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg", biography: "Morten Tyldum is a Norwegian film director.", birthday: "1967-05-19", place_of_birth: "Bergen, Norway", known_for_department: "Directing", popularity: 60.1 }
    ]
  },
  {
    id: 36,
    title: "The Theory of Everything",
    overview: "After Stephen Hawking's first marriage ends, he starts a relationship with his nurse.",
    poster_path: "https://image.tmdb.org/t/p/w500/5wY5b7kQ8Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2014-11-07",
    vote_average: 7.9,
    vote_count: 6000,
    genre_ids: [18, 10749],
    genres: [
      { id: 18, name: "Drama" },
      { id: 10749, name: "Romance" }
    ],
    runtime: 120,
    director: "James Marsh",
    cast: ["Eddie Redmayne", "Felicity Jones", "Tom Prior"],
    trailer_key: "AIzbwV7on6Q",
    streaming_platforms: [
      { id: 39, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [
      { id: 65, name: "Eddie Redmayne", character: "Stephen Hawking", profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg", order: 0, biography: "Edward John David Redmayne is an English actor.", birthday: "1982-01-06", place_of_birth: "London, England, UK", known_for_department: "Acting", popularity: 70.1 },
      { id: 66, name: "Felicity Jones", character: "Jane Hawking", profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg", order: 1, biography: "Felicity Rose Hadley Jones is an English actress.", birthday: "1983-10-17", place_of_birth: "Birmingham, England, UK", known_for_department: "Acting", popularity: 65.2 }
    ],
    full_crew: [
      { id: 126, name: "James Marsh", job: "Director", department: "Directing", profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg", biography: "James Marsh is a British film and documentary director.", birthday: "1963-04-30", place_of_birth: "Truro, Cornwall, England, UK", known_for_department: "Directing", popularity: 60.1 }
    ]
  },
  {
    id: 37,
    title: "Spotlight",
    overview: "The Boston Globe's tenacious 'Spotlight' team investigates allegations of abuse in the Catholic Church.",
    poster_path: "https://image.tmdb.org/t/p/w500/5wY5b7kQ8Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2015-12-25",
    vote_average: 8.0,
    vote_count: 8000,
    genre_ids: [18, 10749],
    genres: [
      { id: 18, name: "Drama" },
      { id: 10749, name: "Romance" }
    ],
    runtime: 128,
    director: "Tom McCarthy",
    cast: ["Mark Ruffalo", "Michael Keaton", "Rachel McAdams"],
    trailer_key: "LoebZZ8K5N0",
    streaming_platforms: [
      { id: 40, name: "Amazon Prime", logo_path: "https://image.tmdb.org/t/p/original/68MNrwlkp6S0JQd2TpQqgqXz0K.jpg", type: "subscription", price: 12.99 }
    ],
    full_cast: [
      { id: 67, name: "Mark Ruffalo", character: "Michael Rezendes", profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg", order: 0, biography: "Mark Alan Ruffalo is an American actor and producer.", birthday: "1967-11-22", place_of_birth: "Kenosha, Wisconsin, USA", known_for_department: "Acting", popularity: 72.1 },
      { id: 68, name: "Michael Keaton", character: "Walter 'Robby' Robinson", profile_path: "https://image.tmdb.org/t/p/w500/8i6ZDkX1TUVw6ewhUJOFqTtLDu5.jpg", order: 1, biography: "Michael John Douglas, known professionally as Michael Keaton, is an American actor.", birthday: "1951-09-05", place_of_birth: "Coraopolis, Pennsylvania, USA", known_for_department: "Acting", popularity: 70.2 }
    ],
    full_crew: [
      { id: 127, name: "Tom McCarthy", job: "Director", department: "Directing", profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg", biography: "Thomas Joseph McCarthy is an American filmmaker and actor.", birthday: "1966-06-07", place_of_birth: "New Providence, New Jersey, USA", known_for_department: "Directing", popularity: 60.1 }
    ]
  },
  {
    id: 38,
    title: "The Martian",
    overview: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to survive.",
    poster_path: "https://image.tmdb.org/t/p/w500/5wY5b7kQ8Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2015-10-02",
    vote_average: 8.0,
    vote_count: 7000,
    genre_ids: [12, 18, 878],
    genres: [
      { id: 12, name: "Adventure" },
      { id: 18, name: "Drama" },
      { id: 878, name: "Science Fiction" }
    ],
    runtime: 144,
    director: "Ridley Scott",
    cast: ["Matt Damon", "Jessica Chastain", "Kristen Wiig"],
    trailer_key: "ej3ioOneTy8",
    streaming_platforms: [
      { id: 41, name: "Amazon Prime", logo_path: "https://image.tmdb.org/t/p/original/68MNrwlkp6S0JQd2TpQqgqXz0K.jpg", type: "subscription", price: 12.99 }
    ],
    full_cast: [],
    full_crew: []
  },
  {
    id: 39,
    title: "A Beautiful Mind",
    overview: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
    poster_path: "https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "2001-12-21",
    vote_average: 8.2,
    vote_count: 7000,
    genre_ids: [18],
    genres: [
      { id: 18, name: "Drama" }
    ],
    runtime: 135,
    director: "Ron Howard",
    cast: ["Russell Crowe", "Ed Harris", "Jennifer Connelly"],
    trailer_key: "aS_d0Ayjw4o",
    streaming_platforms: [
      { id: 42, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [],
    full_crew: []
  },
  {
    id: 40,
    title: "Good Will Hunting",
    overview: "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
    poster_path: "https://image.tmdb.org/t/p/w500/bABCBKYBKxL3eHbl4D6gL1jOv5d.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "1997-12-05",
    vote_average: 8.3,
    vote_count: 8000,
    genre_ids: [18],
    genres: [
      { id: 18, name: "Drama" }
    ],
    runtime: 126,
    director: "Gus Van Sant",
    cast: ["Matt Damon", "Robin Williams", "Ben Affleck"],
    trailer_key: "QSMvyuE4I6o",
    streaming_platforms: [
      { id: 43, name: "Amazon Prime", logo_path: "https://image.tmdb.org/t/p/original/68MNrwlkp6S0JQd2TpQqgqXz0K.jpg", type: "subscription", price: 12.99 }
    ],
    full_cast: [],
    full_crew: []
  },
  {
    id: 41,
    title: "The Sixth Sense",
    overview: "A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
    poster_path: "https://image.tmdb.org/t/p/w500/imps263dqzZbBp8v8n6xIy6H5dS.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "1999-08-06",
    vote_average: 8.1,
    vote_count: 7000,
    genre_ids: [18, 9648, 53],
    genres: [
      { id: 18, name: "Drama" },
      { id: 9648, name: "Mystery" },
      { id: 53, name: "Thriller" }
    ],
    runtime: 107,
    director: "M. Night Shyamalan",
    cast: ["Bruce Willis", "Haley Joel Osment", "Toni Collette"],
    trailer_key: "VG9AGf66tXM",
    streaming_platforms: [
      { id: 44, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [],
    full_crew: []
  },
  {
    id: 42,
    title: "The Princess Bride",
    overview: "While home sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles.",
    poster_path: "https://image.tmdb.org/t/p/w500/5wY5b7kQ8Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "1987-10-09",
    vote_average: 8.1,
    vote_count: 6000,
    genre_ids: [12, 14, 35, 10749],
    genres: [
      { id: 12, name: "Adventure" },
      { id: 14, name: "Fantasy" },
      { id: 35, name: "Comedy" },
      { id: 10749, name: "Romance" }
    ],
    runtime: 98,
    director: "Rob Reiner",
    cast: ["Cary Elwes", "Mandy Patinkin", "Robin Wright"],
    trailer_key: "O3CIXEgLvdY",
    streaming_platforms: [
      { id: 45, name: "Disney+", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [],
    full_crew: []
  },
  {
    id: 43,
    title: "Groundhog Day",
    overview: "A weatherman finds himself inexplicably living the same day over and over again.",
    poster_path: "https://image.tmdb.org/t/p/w500/5wY5b7kQ8Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "1993-02-12",
    vote_average: 8.0,
    vote_count: 6000,
    genre_ids: [14, 35, 10749],
    genres: [
      { id: 14, name: "Fantasy" },
      { id: 35, name: "Comedy" },
      { id: 10749, name: "Romance" }
    ],
    runtime: 101,
    director: "Harold Ramis",
    cast: ["Bill Murray", "Andie MacDowell", "Chris Elliott"],
    trailer_key: "GncQtURdcE4",
    streaming_platforms: [
      { id: 46, name: "Amazon Prime", logo_path: "https://image.tmdb.org/t/p/original/68MNrwlkp6S0JQd2TpQqgqXz0K.jpg", type: "subscription", price: 12.99 }
    ],
    full_cast: [],
    full_crew: []
  },
  {
    id: 44,
    title: "The Big Lebowski",
    overview: "Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies.",
    poster_path: "https://image.tmdb.org/t/p/w500/5wY5b7kQ8Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "1998-03-06",
    vote_average: 8.1,
    vote_count: 6000,
    genre_ids: [35, 80],
    genres: [
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" }
    ],
    runtime: 117,
    director: "Joel Coen, Ethan Coen",
    cast: ["Jeff Bridges", "John Goodman", "Julianne Moore"],
    trailer_key: "cd-go0oBF4Y",
    streaming_platforms: [
      { id: 47, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [],
    full_crew: []
  },
  {
    id: 45,
    title: "The Breakfast Club",
    overview: "Five high school students from different walks of life endure a Saturday detention under a power-hungry principal.",
    poster_path: "https://image.tmdb.org/t/p/w500/5wY5b7kQ8Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "1985-02-15",
    vote_average: 7.8,
    vote_count: 5000,
    genre_ids: [18, 35],
    genres: [
      { id: 18, name: "Drama" },
      { id: 35, name: "Comedy" }
    ],
    runtime: 97,
    director: "John Hughes",
    cast: ["Emilio Estevez", "Judd Nelson", "Molly Ringwald"],
    trailer_key: "BSXBvor47Zs",
    streaming_platforms: [
      { id: 48, name: "Amazon Prime", logo_path: "https://image.tmdb.org/t/p/original/68MNrwlkp6S0JQd2TpQqgqXz0K.jpg", type: "subscription", price: 12.99 }
    ],
    full_cast: [],
    full_crew: []
  },
  {
    id: 46,
    title: "Ferris Bueller's Day Off",
    overview: "A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.",
    poster_path: "https://image.tmdb.org/t/p/w500/5wY5b7kQ8Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "1986-06-11",
    vote_average: 7.8,
    vote_count: 5000,
    genre_ids: [35, 18],
    genres: [
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" }
    ],
    runtime: 103,
    director: "John Hughes",
    cast: ["Matthew Broderick", "Alan Ruck", "Mia Sara"],
    trailer_key: "D6gAB0s9hzE",
    streaming_platforms: [
      { id: 49, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [],
    full_crew: []
  },
  {
    id: 47,
    title: "The Goonies",
    overview: "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's treasure.",
    poster_path: "https://image.tmdb.org/t/p/w500/5wY5b7kQ8Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "1985-06-07",
    vote_average: 7.8,
    vote_count: 5000,
    genre_ids: [12, 35, 10751],
    genres: [
      { id: 12, name: "Adventure" },
      { id: 35, name: "Comedy" },
      { id: 10751, name: "Family" }
    ],
    runtime: 114,
    director: "Richard Donner",
    cast: ["Sean Astin", "Josh Brolin", "Jeff Cohen"],
    trailer_key: "hJ2j4g9j0mc",
    streaming_platforms: [
      { id: 50, name: "Amazon Prime", logo_path: "https://image.tmdb.org/t/p/original/68MNrwlkp6S0JQd2TpQqgqXz0K.jpg", type: "subscription", price: 12.99 }
    ],
    full_cast: [],
    full_crew: []
  },
  {
    id: 48,
    title: "Stand by Me",
    overview: "After the death of a friend, a writer recounts a boyhood journey to find the body of a missing boy.",
    poster_path: "https://image.tmdb.org/t/p/w500/5wY5b7kQ8Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "1986-08-22",
    vote_average: 8.1,
    vote_count: 5000,
    genre_ids: [18, 12],
    genres: [
      { id: 18, name: "Drama" },
      { id: 12, name: "Adventure" }
    ],
    runtime: 89,
    director: "Rob Reiner",
    cast: ["Wil Wheaton", "River Phoenix", "Corey Feldman"],
    trailer_key: "RcXn2vbqEjg",
    streaming_platforms: [
      { id: 51, name: "Netflix", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 15.99 }
    ],
    full_cast: [],
    full_crew: []
  },
  {
    id: 49,
    title: "The Sandlot",
    overview: "In the summer of 1962, a new kid in town is taken under the wing of a young baseball prodigy and his rowdy team.",
    poster_path: "https://image.tmdb.org/t/p/w500/5wY5b7kQ8Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.jpg",
    release_date: "1993-04-07",
    vote_average: 7.8,
    vote_count: 4000,
    genre_ids: [35, 18, 10751],
    genres: [
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" }
    ],
    runtime: 101,
    director: "David Mickey Evans",
    cast: ["Tom Guiry", "Mike Vitar", "Patrick Renna"],
    trailer_key: "PaZVjZEXkSU",
    streaming_platforms: [
      { id: 52, name: "Disney+", logo_path: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png", type: "subscription", price: 7.99 }
    ],
    full_cast: [],
    full_crew: []
  }
];

const mockGenres: Genre[] = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" }
];

// Mock person data
const mockPersons: Person[] = [
  {
    id: 1,
    name: "Leonardo DiCaprio",
    biography: "Leonardo Wilhelm DiCaprio is an American actor, film producer, and environmentalist. Known for his work in biopics and period films, DiCaprio is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards. As of 2019, his films have grossed over $7.2 billion worldwide, and he has been placed eight times in annual rankings of the world's highest-paid actors.",
    birthday: "1974-11-11",
    place_of_birth: "Los Angeles, California, USA",
    profile_path: "https://image.tmdb.org/t/p/w500/5Brc5dLifH3UImkXs6AFN83jZe.jpg",
    known_for_department: "Acting",
    popularity: 85.2,
    imdb_id: "nm0000138",
    homepage: "https://www.leonardodicaprio.com"
  },
  {
    id: 101,
    name: "Christopher Nolan",
    biography: "Christopher Edward Nolan is a British-American film director, producer, and screenwriter. His films have grossed more than $5 billion worldwide, and have garnered 11 Academy Awards from 36 nominations. Nolan's work is often characterized by its innovative narrative structure, practical special effects, and exploration of philosophical and sociological concepts.",
    birthday: "1970-07-30",
    place_of_birth: "London, England, UK",
    profile_path: "https://image.tmdb.org/t/p/w500/9Dp0Y2GKNTFxmlLS94N44NCjiAf.jpg",
    known_for_department: "Directing",
    popularity: 89.3,
    imdb_id: "nm0634240",
    homepage: "https://www.christophernolan.net"
  }
];

class MovieApiService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = process.env.REACT_APP_TMDB_API_KEY || 'demo_key';

  // Get trending movies
  async getTrendingMovies(): Promise<Movie[]> {
    // For demo purposes, return mock data
    return mockMovies.slice(0, 6);
  }

  // Get popular movies
  async getPopularMovies(): Promise<Movie[]> {
    return mockMovies;
  }

  // Search movies
  async searchMovies(query: string, type: 'name' | 'actor' | 'director' | 'genre'): Promise<Movie[]> {
    const lowerQuery = query.toLowerCase();
    
    return mockMovies.filter(movie => {
      switch (type) {
        case 'name':
          return movie.title.toLowerCase().includes(lowerQuery);
        case 'actor':
          return movie.cast?.some(actor => 
            actor.toLowerCase().includes(lowerQuery)
          );
        case 'director':
          return movie.director?.toLowerCase().includes(lowerQuery);
        case 'genre':
          return movie.genres?.some(genre => 
            genre.name.toLowerCase().includes(lowerQuery)
          );
        default:
          return false;
      }
    });
  }

  // Get movie details
  async getMovieDetails(id: number): Promise<MovieDetails> {
    const movie = mockMovies.find(m => m.id === id);
    if (!movie) {
      throw new Error('Movie not found');
    }

    return {
      ...movie,
      budget: 160000000,
      revenue: 836836967,
      status: "Released",
      production_companies: [
        { id: 1, name: "Warner Bros. Pictures" }
      ],
      spoken_languages: [
        { iso_639_1: "en", name: "English" }
      ],
      videos: [
        { key: movie.trailer_key || "", name: "Official Trailer", site: "YouTube", type: "Trailer" }
      ],
      recommendations: mockMovies.filter(m => m.id !== id).slice(0, 6)
    };
  }

  // Get person details
  async getPersonDetails(id: number): Promise<Person> {
    const person = mockPersons.find(p => p.id === id);
    if (!person) {
      throw new Error('Person not found');
    }
    return person;
  }

  // Get genres
  async getGenres(): Promise<Genre[]> {
    return mockGenres;
  }

  // Get movies by genre
  async getMoviesByGenre(genreId: number): Promise<Movie[]> {
    return mockMovies.filter(movie => 
      movie.genre_ids.includes(genreId)
    );
  }
}

export const movieApi = new MovieApiService(); 