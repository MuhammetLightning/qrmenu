import React from "react";
import Product from "../../components/product/Product";
import Topbar from "../../components/topbar/Topbar.jsx";
import useFetch from "../../hooks/useFetch";
import Footer from "../../components/footer/Footer.jsx";

const Restoran = () => {
  const { data, loading, error, reFetch } = useFetch(
    `https://qrmenu_b.onrender.com/api/users/64ce084e6bfcd29b081e4fbe`
  );
  return (
    <div className="restoran">
      <Topbar phone={data.phone} restoran={data.restoranName} />
      <Product restoranName="Gurme" />
      <div className="container"></div>
      <Footer phone={data.phone} adres={data.adres} />
    </div>
  );
};

export default Restoran;
