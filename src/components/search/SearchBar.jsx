import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import propTypes from "prop-types";
import "./style.css";

export default function SearchBar({ dogs, handleSearchDog }) {
  const getSearchDog = (event, breed) => {
    handleSearchDog(breed);
  };

  return (
    <Autocomplete
      onChange={getSearchDog}
      sx={{ width: 300 }}
      options={dogs.map((dog) => dog.breeds[0].name)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Dog by Breed"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
}

SearchBar.propTypes = {
  dogs: propTypes.array.isRequired,
  handleSearchDog: propTypes.func.isRequired,
};
