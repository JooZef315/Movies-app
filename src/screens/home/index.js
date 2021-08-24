import React, { useState, useEffect } from "react";
import { ScrollView, FlatList, ActivityIndicator } from "react-native";

import { Title, Warning, HomeHeader, MovieCard } from "../../components";

import { searchMovies, getMovie } from "../../services/movies";
import { storeHistory, readHistory } from "../../services/history";

import { titleLen, query } from "../../utilities";

var Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [moviesStorage, setmMoviesStorage] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBtn, setSearchBtn] = useState(false);
  const [clearBtn, setClearBtn] = useState(true);
  const [loading, setLoading] = useState(false);

  let onSearch = (movieTitle) => {
    setLoading(true);
    searchMovies(query(movieTitle)).then((movies) => {
      setData([...movies]);
      setLoading(false);
    });
  };
  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery, searchBtn]);

  let onGetMovie = (movieID) => {
    if (moviesStorage.every((m) => m.imdbID !== movieID)) {
      navigation.navigate("Movie", {
        ID: movieID,
      });
      getMovie(movieID).then((movie) => {
        setmMoviesStorage([...moviesStorage, movie]);
        storeHistory([...moviesStorage, movie]);
      });
    } else {
      let StoredMovie = moviesStorage.filter((m) => m.imdbID == movieID)[0];
      navigation.navigate("Movie", {
        ID: movieID,
        Data: StoredMovie,
      });
    }
  };

  let onToggleClearBtn = () => {
    moviesStorage.length > 0 ? setClearBtn(true) : setClearBtn(false);
  };
  useEffect(() => {
    onToggleClearBtn();
  }, [moviesStorage]);

  useEffect(() => {
    readHistory().then((h) => {
      setmMoviesStorage([...h]);
    });
  }, []);

  let onClearHistory = () => {
    setmMoviesStorage([]);
    storeHistory([]);
  };

  var RenderItem = (movie) => {
    return (
      <MovieCard
        key={movie.item.imdbID}
        title={titleLen(movie.item.Title, 15)}
        year={movie.item.Year}
        image={movie.item.Poster}
        onPress={() => onGetMovie(movie.item.imdbID)}
      />
    );
  };

  return (
    <>
      <HomeHeader
        clearBtn={clearBtn}
        onSearch={setSearchQuery}
        onSearchBtn={() => setSearchBtn(!searchBtn)}
        onClearHistory={onClearHistory}
      />
      <ScrollView>
        {loading ? (
          <>
            <Title txt={"Search Results"} />
            <ActivityIndicator
              size={"large"}
              color={"#FDB541"}
              style={{ marginTop: 140 }}
            />
          </>
        ) : moviesStorage.length == 0 && !searchQuery ? (
          <>
            <Title txt={"Recent Searches"} />
            <Warning
              icon={"close-circle-outline"}
              title={"You Don't Have Search History"}
              text={
                "When you search for movies, you will see the history of your search"
              }
            />
          </>
        ) : moviesStorage.length > 0 && !searchQuery ? (
          <>
            <Title txt={"Recent Searches"} />
            <FlatList
              data={moviesStorage}
              renderItem={RenderItem}
              showsVerticalScrollIndicator={false}
            />
          </>
        ) : searchQuery && data.length == 0 ? (
          <>
            <Title txt={"Search Results"} />
            <Warning
              icon={"create-outline"}
              title={"There Is No Result For Your Search"}
              text={"Please make sure you entered a correct movie name"}
            />
          </>
        ) : (
          <>
            <Title txt={"Search Results"} />
            <FlatList
              data={data}
              renderItem={RenderItem}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Home;
