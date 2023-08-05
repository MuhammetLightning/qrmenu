import { useEffect, useState } from "react";
import ProductList from "../productList/ProductList.jsx";
import "./product.scss";
import LoadingBox from "../boxes/LoadingBox.jsx";
import useFetch from "../../hooks/useFetch.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function Product({ restoranName }) {
  // "proxy": "https://bilgideri.onrender.com/api",
  const [selected, setSelected] = useState();
  const { data, loading, error } = useFetch(
    `https://qrmenu-backend.onrender.com/api/menu?category=${selected}&restoranName=${restoranName}`
  );
  // console.log(data)
  const [data1, setData1] = useState([]);

  useEffect(() => {
    setData1(data);
  }, [selected, data, data1]);

  return (
    <>
      <div className="slidder">
        <h1>Menu</h1>

        <ProductList
          setSelected={setSelected}
          selected={selected}
          setData={setData1}
          onClick={() => setData1(data)}
          restoran={restoranName}
        />
      </div>
      <div className="product" id="product">
        <div className="itemContainer">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : (
            <div className="itemWrapper">
              <h1>{selected}</h1>
              {data1.map((d) => (
                <div className="item" key={d._id}>
                  <FontAwesomeIcon className="icon" icon={faUtensils} />
                  <div className="content">
                    <h5 className="name">{d.itemName}</h5>
                    <h5 className="price">{d.price} ₺</h5>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
