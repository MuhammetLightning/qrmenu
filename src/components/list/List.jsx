import "./list.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      console.log(distance);
    }
    if (direction === "right" && slideNumber < 7) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <div className="wrapper">
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="sliderArrow left"
          onClick={() => {
            handleClick("left");
          }}
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          className="sliderArrow right"
          onClick={() => {
            handleClick("right");
          }}
        />
      </div>
    </div>
  );
};

export default List;
