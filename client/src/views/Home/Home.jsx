import NavBar from "../../components/NavBar/NavBar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllVideogames, getAllGenres, backHome } from "../../redux/actions";
import Paging from "../../components/Paging/Paging";

const Home = () => {
  const videogames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const videogamesPerPages = 15;
  const lastIndexVideogames = currentPage * videogamesPerPages;
  const firstIndexVideogames = lastIndexVideogames - videogamesPerPages;
  const currentVideogames = videogames.slice(
    firstIndexVideogames,
    lastIndexVideogames
  );

  useEffect(() => {
    dispatch(getAllVideogames());
    dispatch(getAllGenres());
    dispatch(backHome());
  }, []);

  const paging = (numberPage) => {
    setCurrentPage(numberPage);
  };
  const next = () => {
    if (lastIndexVideogames > videogames.length) return;
    setCurrentPage(currentPage + 1);
  };
  const prev = () => {
    if (firstIndexVideogames < 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <NavBar />
      <div>
        <Paging
          videogamesPerPages={videogamesPerPages}
          videogames={videogames.length}
          paging={paging}
          next={next}
          prev={prev}
          currentPage={currentPage}
        />
      </div>

      {currentVideogames.length > 0 ? (
        <CardsContainer videogames={currentVideogames}></CardsContainer>
      ) : (
        <div>
          <img
            src="https://img1.picmix.com/output/stamp/normal/3/7/5/4/314573_da9cd.gif"
            alt="loading"
          />
        </div>
      )}

      <div>
        <Paging
          videogamesPerPages={videogamesPerPages}
          videogames={videogames.length}
          paging={paging}
          next={next}
          prev={prev}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Home;