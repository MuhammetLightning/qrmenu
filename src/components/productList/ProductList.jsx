import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./productList.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ProductList({
  selected,
  setSelected,
  restoran,
  dataC,
}) {
  const { data, loading, error, reFetch } = useFetch(
    `https://qrmenu_b.onrender.com/api/menu/categories/${restoran}`
  );

  useEffect(() => {
    reFetch();
  }, [data, dataC]);
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
  return (
    <>
      <Carousel
        responsive={responsive}
        showDots={true}
        className="cardContainer"
      >
        {data.map((item, index) => (
          <div className="card" key={index} onClick={() => setSelected(item)}>
            <img
              className="cardImg"
              src="https://www.getwordly.com/blog/wp-content/uploads/2022/01/food.jpg"
              alt=""
            ></img>
            <h3>{item}</h3>
          </div>
        ))}
      </Carousel>
      {/* <div className="productListContainer">
        {data.map((item, index) => (
          <div className="catWrapper" key={index}>
            <li
              className={
                selected === item ? "productList active" : "productList"
              }
              onClick={() => {
                setSelected(item);
              }}
            >
              {item}
            </li>
          </div>
        ))}
      </div> */}
    </>
  );
}
