

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllVideogames, getByDetail, removeGame } from "../../redux/actions";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  const detail = useSelector((state) => state.detailGames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByDetail(detailId));
  }, [dispatch, detailId]);

  const handleDelete = () => {
    dispatch(removeGame(detailId));
    dispatch(getAllVideogames());
  };

  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      {detail.name ? (
        <div>
          <h2>{detail.name}</h2>
          <img
            alt=""
          />
          <div>
            <p>ID: {detail.id}</p>
            <p>Platforms: {detail.platforms.join(", ")}</p>
            <p>Release Date: {detail.released}</p>
            <p>Rating: {detail.rating}</p>
            <p>Genres: {detail.genres.join(", ")}</p>
            <p>Description: {detail.description.replace(/<[^>]+>/g, "")}</p>
            {detail.createdVideoGame === true ? (
              <Link to="/home">
                <button onClick={handleDelete}>
                  {" "}
                  DELETE GAME
                </button>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <img alt=""/>
        </div>
      )}
    </div>
  );
};

export default Detail;