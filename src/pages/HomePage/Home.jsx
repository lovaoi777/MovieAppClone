import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "components/Movie";
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;
const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
`;

const LoaderText = styled.span``;
const Home = () => {
  const [isLoding, setLoding] = useState(true);
  const [moviedata, setmoviedata] = useState([]);
  const getdata = async () => {
    await axios
      .get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
      .then((response) => {
        setmoviedata(response["data"]["data"]["movies"]);
        console.log(moviedata);
        setLoding(false);
      });
  };

  useEffect(() => {
    getdata();
  }, [getdata]);

  return (
    <Container>
      {isLoding === true ? (
        <Loader>
          <LoaderText>Loading...</LoaderText>
        </Loader>
      ) : (
        <Movies>
          {moviedata.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </Movies>
      )}
    </Container>
  );
};

export default Home;
