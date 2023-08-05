import { useEffect, useState } from "react";
import ProductList from "../../components/productList/ProductList.jsx";
import "./admin.scss";
import LoadingBox from "../../components/boxes/LoadingBox.jsx";
import useFetch from "../../hooks/useFetch.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPenToSquare,
  faPlus,
  faTrash,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Footer from "../../components/footer/Footer.jsx";
import { parse } from "@fortawesome/fontawesome-svg-core";

export default function Admin() {
  const storedData = localStorage.getItem("user");
  const parsedData = storedData ? JSON.parse(storedData) : {};
  const [restoran, setRestoran] = useState(
    parsedData ? parsedData.restoranName : ""
  );
  const [userId, setUserId] = useState(parsedData ? parsedData._id : "");
  const [updateId, setUpdateId] = useState("");
  const [formData, setFormData] = useState({
    itemName: "",
    price: "",
    restoranName: restoran,
    category: "",
  });
  const user = useFetch(`https://qrmenu_b.onrender.com/api/users/${userId}`);
  const [formDataUser, setFormDataUser] = useState({
    username: user.data.username,
    email: user.data.email,
    restoranName: user.data.restoranName,
    phone: user.data.phone,
    adres: user.data.adres,
  });
  const [activeFunction, setActiveFunction] = useState("handleInsert");

  useEffect(() => {
    // local storage'dan "user" verisini alın
    const storedData = localStorage.getItem("user");
    const parsedData = storedData ? JSON.parse(storedData) : {};
    // Parsed veriden restoranName'i alın
    const restoranNameFromLocalStorage = parsedData
      ? parsedData.restoranName
      : "";
    setRestoran(restoranNameFromLocalStorage);
    const userIdFromLocalStorage = parsedData ? parsedData._id : "";
    setUserId(userIdFromLocalStorage);
    // FormData içindeki restoranName değerini güncelleyin
    setFormData((prevFormData) => ({
      ...prevFormData,
      restoranName: restoranNameFromLocalStorage,
    }));
    // Bileşen kaldırıldığında "user" verisini siler
  }, []);

  const [selected, setSelected] = useState("");
  const encodedSelected = encodeURIComponent(selected);
  const encodedRestoran = encodeURIComponent(restoran);
  const { data, loading, error, reFetch } = useFetch(
    `https://qrmenu_b.onrender.com/api/menu?category=${encodedSelected}&restoranName=${encodedRestoran}`
  );

  const [data1, setData1] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isUserFormOpen, setIsUserFormOpen] = useState(false);

  useEffect(() => {
    setData1(data);
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: selected,
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      restoranName: restoran,
    }));
    cancel();
  }, [selected, data, data1, restoran]);
  const cancel = () => {
    setIsFormOpen(false);
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: selected,
      itemName: "",
      price: "",
    }));
  };
  useEffect(() => {
    setFormDataUser((prev) => ({
      ...prev,
      username: user.data.username,
      email: user.data.email,
      restoranName: user.data.restoranName,
      phone: user.data.phone,
      adres: user.data.adres,
    }));
  }, [user.data]);
  const handleInsertCat = async (event) => {
    event.preventDefault();
    // setFormData({ ...formData, restoranName: restoran });

    try {
      await axios.post(`https://qrmenu_b.onrender.com/api/menu`, formData);
      // Başarılı gönderimden sonra, formu kapatın ve verileri tekrar çekmek için reFetch'i çağırın
      setIsFormOpen(false);
      reFetch();
      setFormData({
        ...formData,
        category: "",
        itemName: "",
        price: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (activeFunction === "handleInsert") {
      handleInsert(event);
    } else if (activeFunction === "handleUpdate") {
      handleUpdate(event);
    } else if (activeFunction === "handleInsertCat") {
      handleInsertCat(event);
    }
  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`https://qrmenu_b.onrender.com/api/menu/${updateId}`, formData);
      // Başarılı gönderimden sonra, formu kapatın ve verileri tekrar çekmek için reFetch'i çağırın
      setIsFormOpen(false);
      reFetch();
      setFormData({
        ...formData,
        category: selected,
        itemName: "",
        price: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdateUser = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `https://qrmenu_b.onrender.com/api/users/${userId}`,
        formDataUser
      );
      setIsUserFormOpen(false);
      user.reFetch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleInsert = async (e) => {
    e.preventDefault();
    // setFormData({ ...formData, restoranName: restoran });

    if (formData.restoranName) {
      try {
        await axios.post(`https://qrmenu_b.onrender.com/api/menu`, formData);
        // Başarılı gönderimden sonra, formu kapatın ve verileri tekrar çekmek için reFetch'i çağırın
        setIsFormOpen(false);
        reFetch();
        setFormData({
          ...formData,
          category: selected,
          itemName: "",
          price: "",
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      // restoranName alanı boşsa hata mesajı veya uyari verebilirsiniz
    }
  };
  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`https://qrmenu_b.onrender.com/api/menu/${itemId}`); // Replace '/api/items' with your backend API endpoint for deleting data from MongoDB
      reFetch();
    } catch (error) {
      console.error("Error deleting data from MongoDB:", error);
    }
  };

  return (
    <div className="cW">
      <div className="slidderAdmin">
        <h1>Admin Panel</h1>

        <ProductList
          setSelected={setSelected}
          selected={selected}
          dataC={data}
          setData={setData1}
          onClick={() => setData1(data)}
          restoran={restoran}
        />
        <div
          className="addCatWrapper"
          onClick={() => {
            setIsFormOpen(true);
            setActiveFunction("handleInsertCat");
            setFormData((prevFormData) => ({
              ...prevFormData,
              category: "",
            }));
            setFormData((prevFormData) => ({
              ...prevFormData,
              itemName: "",
            }));
            setFormData((prevFormData) => ({
              ...prevFormData,
              price: "",
            }));
          }}
        >
          <FontAwesomeIcon className="addCat" icon={faPlus} />
          <span>add category</span>
        </div>
      </div>
      <div className="admin">
        <div className="itemContainer">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : (
            <div className="itemWrapper">
              {data1.map((d) => (
                <div className="iWrapper" key={d._id}>
                  <div className="iconWrapper">
                    <FontAwesomeIcon
                      className="iconD"
                      icon={faTrash}
                      onClick={() => handleDelete(d._id)}
                    />
                    <FontAwesomeIcon
                      className="iconU"
                      icon={faPenToSquare}
                      onClick={() => {
                        setActiveFunction("handleUpdate");
                        setUpdateId(d._id);
                        setIsFormOpen(true);
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          itemName: d.itemName,
                        }));
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          price: d.price,
                        }));
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          category: d.category,
                        }));
                      }}
                    />
                  </div>
                  <div className="item">
                    <FontAwesomeIcon className="icon" icon={faUtensils} />
                    <div className="content">
                      <h5 className="name">{d.itemName}</h5>
                      <h5 className="price">{d.price} ₺</h5>
                    </div>
                  </div>
                </div>
              ))}
              {isFormOpen ? (
                /* Adım 2: isFormOpen true olduğunda formu göster */
                <form onSubmit={handleFormSubmit} className="form">
                  {/* Form alanlarını ve düğmelerini buraya ekleyin */}
                  <input
                    type="text"
                    placeholder="Ürün Adı"
                    value={formData.itemName}
                    onChange={(e) =>
                      setFormData({ ...formData, itemName: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Fiyat"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                  {/* <input
                  type="text"
                  placeholder="Açıklama"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                /> */}
                  <input
                    type="text"
                    placeholder="Kategori"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  />
                  <div className="buttonWrapper">
                    <button type="submit" className="add">
                      Ürün Ekle
                    </button>
                    <button className="cancel" onClick={() => cancel()}>
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                /* isFormOpen false olduğunda ikonu göster */
                <FontAwesomeIcon
                  className="iconA"
                  icon={faPlus}
                  onClick={() => {
                    setIsFormOpen(true);
                    setActiveFunction("handleInsert");
                  }} /* Adım 3: Formu aç */
                />
              )}
            </div>
          )}
        </div>
      </div>
      <div className="userInfo">
        {isUserFormOpen ? (
          /* Adım 2: isFormOpen true olduğunda formu göster */
          <form onSubmit={handleUpdateUser} className="formU">
            {/* Form alanlarını ve düğmelerini buraya ekleyin */}
            <input
              type="text"
              placeholder="Phone"
              value={formDataUser.phone}
              onChange={(e) =>
                setFormDataUser({ ...formDataUser, phone: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Adres"
              value={formDataUser.adres}
              onChange={(e) =>
                setFormDataUser({ ...formDataUser, adres: e.target.value })
              }
            />

            <div className="buttonWrapperU">
              <button type="submit" className="add">
                Ürün Ekle
              </button>
              <button
                className="cancel"
                onClick={() => setIsUserFormOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          /* isFormOpen false olduğunda ikonu göster */

          <FontAwesomeIcon
            className="uIcon"
            icon={faPenToSquare}
            onClick={() => {
              setUpdateId(parsedData._id);
              setIsUserFormOpen(true);
              // setFormDataUser((prevFormData) => ({
              //   ...prevFormData,
              //   itemName: d.itemName,
              // }));
              // setFormDataUser((prevFormData) => ({
              //   ...prevFormData,
              //   price: d.price,
              // }));
              // setFormDataUser((prevFormData) => ({
              //   ...prevFormData,
              //   category: d.category,
              // }));
            }}
          />
        )}
      </div>
      <Footer phone={formDataUser.phone} adres={formDataUser.adres} />
    </div>
  );
}
