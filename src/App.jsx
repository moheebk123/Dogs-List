import { useEffect, useState } from "react";
import SearchBar from "./components/search/SearchBar";
import PaginationBox from "./components/pagination/PaginationBox";
import DogList from "./components/dogList/DogList";
import axios from "axios";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dogs, setDogs] = useState([]);

  const url = "https://api.thedogapi.com/v1/images/";
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key":
      "live_BNM9MDOF8WmvxRC2teCGpoZGhwwnEEbyf2TGGcEnd9Eh3ikAbOwh3chwhU5u7TCB",
  });

  useEffect(() => {
    const getDogs = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${url}search?format=json&has_breeds=true&order=ASC&limit=10&page=0`,
          { headers }
        );
        const data = response.data;
        setDogs(() => {
          return data;
        });
        setError(null);
      } catch (error) {
        setError(
          error.message ||
            "An error occurred while fetching dogs with breed search."
        );
      } finally {
        setIsLoading(false);
      }
    };
    getDogs();
  }, []);

  const getNewPageDogs = async (page) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${url}search?format=json&has_breeds=true&order=ASC&limit=10&page=${page}`,
        { headers }
      );
      const data = response.data;
      setDogs(() => {
        return data;
      });
      setError(null);
    } catch (error) {
      setError(
        error.message ||
          "An error occurred while fetching dogs with breed search."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getNewSearchDog = (breed) => {
    if (breed !== null) {
      setDogs((prevDog) =>
        prevDog.filter((dog) => dog.breeds[0].name === breed)
      );
    }
  };

  return (
    <>
      <SearchBar dogs={dogs} handleSearchDog={getNewSearchDog} />
      <PaginationBox handlePageChange={getNewPageDogs} />
      {error ? (
        <h2>Error: {error}</h2>
      ) : isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <DogList dogs={dogs} />
      )}
    </>
  );
};

export default App;
