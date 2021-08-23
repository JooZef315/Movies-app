import React, { useState, useEffect } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import { MovieHeader, RatingInfo, MovieInfo } from "../../components";

import { getMovie } from "../../services/movies";

import { titleLen } from "../../utilities";

var Movie = ({ navigation, route }) => {
  const { ID, Data } = route.params;
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

  let onGetMovie = () => {
    setLoading(true);
    if (Data) {
      setMovie(Data);
      setLoading(false);
    } else {
      getMovie(ID).then((m) => {
        setMovie({ ...m });
        setLoading(false);
      });
    }
  };
  useEffect(() => {
    onGetMovie();
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={"#FDB541"}
          style={{ marginTop: 280 }}
        />
      ) : (
        <>
          <MovieHeader
            title={titleLen(movie.Title, 15)}
            date={movie.Released}
            genres={movie.Genre}
            duration={movie.Runtime}
            image={movie.Poster}
            imdb={movie.imdbID}
            onBack={() => {
              navigation.navigate("Home");
            }}
          />
          <ScrollView>
            <RatingInfo
              key={Math.floor(Math.random() * 100)}
              ratings={movie.Ratings}
            />
            <MovieInfo title={"Summary"} text={movie.Plot} />
            <MovieInfo title={"Director"} text={movie.Director} />
            <MovieInfo title={"Actors"} text={movie.Actors} />
          </ScrollView>
        </>
      )}
    </>
  );
};

export default Movie;
