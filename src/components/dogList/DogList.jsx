import propTypes from "prop-types";
import Stack from "@mui/material/Stack";
import DogCard from "./dogCard/DogCard";
import "./style.css";

const DogList = ({ dogs }) => {
  return (
    <Stack className="card-box" direction="row">
      {dogs.length > 0 ? (
        dogs.map((dog, index) => {
          const { url } = dog;
          const { name, temperament } = dog.breeds[0];
          return (
            <DogCard key={index} url={url} breed={name} quality={temperament} />
          );
        })
      ) : (
        <h2>No dogs found on this page.</h2>
      )}
    </Stack>
  );
};

DogList.propTypes = {
  dogs: propTypes.array.isRequired,
};

export default DogList;
