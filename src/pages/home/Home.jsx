import "./home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const items = [
    { id: 1, title: "1" },
    { id: 2, title: "2" },
    { id: 3, title: "3" },
    { id: 4, title: "4" },
    { id: 5, title: "5" },
    { id: 6, title: "6" },
  ];
  return (
    <div className="home">
      <h1>Reac Multi Coursel</h1>
      <Carousel responsive={responsive} showDots={true} className="cardContainer">
        <div className="card">
          <img
            className="cardImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRresQuRJhdcXVG_QBU5oY9HN00F42Dsl2o9A&usqp=CAU"
            alt=""
          ></img>
          <h2>İÇECEKLER</h2>
        </div>
        <div className="card">
          <img
            className="cardImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRresQuRJhdcXVG_QBU5oY9HN00F42Dsl2o9A&usqp=CAU"
            alt=""
          ></img>
          <h2>İÇECEKLER</h2>
        </div>
        <div className="card">
          <img
            className="cardImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRresQuRJhdcXVG_QBU5oY9HN00F42Dsl2o9A&usqp=CAU"
            alt=""
          ></img>
          <h2>İÇECEKLER</h2>
        </div>
        <div className="card">
          <img
            className="cardImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRresQuRJhdcXVG_QBU5oY9HN00F42Dsl2o9A&usqp=CAU"
            alt=""
          ></img>
          <h2>İÇECEKLER</h2>
        </div>
        <div className="card">
          <img
            className="cardImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRresQuRJhdcXVG_QBU5oY9HN00F42Dsl2o9A&usqp=CAU"
            alt=""
          ></img>
          <h2>İÇECEKLER</h2>
        </div>
        <div className="card">
          <img
            className="cardImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRresQuRJhdcXVG_QBU5oY9HN00F42Dsl2o9A&usqp=CAU"
            alt=""
          ></img>
          <h2>İÇECEKLER</h2>
        </div>
        <div className="card">
          <img
            className="cardImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRresQuRJhdcXVG_QBU5oY9HN00F42Dsl2o9A&usqp=CAU"
            alt=""
          ></img>
          <h2>İÇECEKLER</h2>
        </div>
        <div className="card">
          <img
            className="cardImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRresQuRJhdcXVG_QBU5oY9HN00F42Dsl2o9A&usqp=CAU"
            alt=""
          ></img>
          <h2>İÇECEKLER</h2>
        </div>
        <div className="card">
          <img
            className="cardImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRresQuRJhdcXVG_QBU5oY9HN00F42Dsl2o9A&usqp=CAU"
            alt=""
          ></img>
          <h2>İÇECEKLER</h2>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
