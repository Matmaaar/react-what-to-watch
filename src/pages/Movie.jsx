import { Link } from "react-router";
import { useParams } from "react-router";

function Movie() {
  const { id } = useParams();
  return <h1>Film n°{id}</h1>;
}

export default Movie;
