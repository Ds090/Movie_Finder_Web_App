import axios from "axios";
import { useEffect, useState } from "react";
import UseDebounce from "../useDebounce/useDebounce";

function UsemovieDetailshooks() {
  
  const [moveieName, setMovieName] = useState([]);
 
  const [query, setquery] = useState("thor");

  
  const [isloading, setisLoading] = useState(true);

  const debounceCallBack = UseDebounce((e) => setquery(() => e.target.value));

  async function downloagMusic() {
    setisLoading(true);
    try {
      var reponse = await axios.get(
        `https://www.omdbapi.com/?t=${query || "Evil dead"}&apikey=108704e5&`
      );

      // const data = await reponse.json();
      console.log(reponse.data);

      setMovieName({
        poster: reponse.data.Poster,
        title: reponse.data.Title,
        Rating: reponse.data.imdbRating,
        Year: reponse.data.Year,
        Rated: reponse.data.Rated,
        Runtime: reponse.data.Runtime,
        Plot: reponse.data.Plot,
        Actors: reponse.data.Actors,
        Plot1: "Plot",
        Cast: "Actors",
        Response: reponse.data.Response,
      });
    } catch (error) {
      console.log("Movie not Found");
    }
    setisLoading(false);
  }

  useEffect(() => {
    downloagMusic();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { isloading, moveieName, debounceCallBack, downloagMusic };
}

export default UsemovieDetailshooks;
