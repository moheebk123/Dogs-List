import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import propTypes from "prop-types";
import "./style.css";

export default function DogCard({ url, breed, quality }) {
  return (
    <Stack className="card">
      <img src={url} alt={breed} />
      <Stack className="detail-box">
        <Typography gutterBottom variant="h5" component="div">
          <span>Breed</span> : {breed}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span>Qualities</span> : {quality}
        </Typography>
      </Stack>
    </Stack>
  );
}

DogCard.propTypes = {
  url: propTypes.string.isRequired,
  breed: propTypes.string.isRequired,
  quality: propTypes.string.isRequired,
};
