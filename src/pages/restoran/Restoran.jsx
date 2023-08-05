import React from "react";
import Product from "../../components/product/Product.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./restoran.scss";
import useFetch from "../../hooks/useFetch.js";

const Restoran = () => {
  const { data, loading, error, reFetch } = useFetch(
    `https://qrmenu_b.onrender.com/api/users/64ce08bb6bfcd29b081e51a6`
  );
  return (
    <div className="restoran">
      <Topbar phone={data.phone} restoran={data.restoranName} />
      <Product restoranName="Poyraz" />
      <div className="container"></div>
      <Footer phone={data.phone} adres={data.adres} />
    </div>
  );
};

export default Restoran;
