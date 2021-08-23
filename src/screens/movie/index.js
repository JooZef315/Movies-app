import React, { useState } from "react";
import { ScrollView } from "react-native";
import { MovieHeader, RatingInfo, MovieInfo } from "../../components";

import { titleLen } from "../../utilities";

var Movie = ({ navigation, route }) => {
  const { data } = route.params;

  return (
    <>
      <MovieHeader
        title={titleLen(data.Title, 17)}
        date={data.Released}
        genres={data.Genre}
        duration={data.Runtime}
        image={data.Poster}
        imdb={data.imdbID}
        onBack={() => {
          navigation.navigate("Home");
        }}
      />
      <ScrollView>
        <RatingInfo
          key={Math.floor(Math.random() * 100)}
          ratings={data.Ratings}
        />
        <MovieInfo title={"Summary"} text={data.Plot} />
        <MovieInfo title={"Director"} text={data.Director} />
        <MovieInfo title={"Actors"} text={data.Actors} />
      </ScrollView>
    </>
  );
};

export default Movie;
