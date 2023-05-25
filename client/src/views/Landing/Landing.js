import { Link } from "react-router-dom";
import style from "./Landing.module.css";




const Landing = () => {
  return (
    
    <div className={`${style.background} `}>
      <h1>VIDEOGAMES</h1>
      <Link to="/home">
        <button className={style.button}>INGRESA</button>
      </Link>
    </div>
  );
};

export default Landing;