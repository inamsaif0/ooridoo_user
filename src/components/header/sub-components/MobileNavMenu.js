import { Link, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../../helpers/language-selector";
import { useEffect, useState } from "react";
import BaseUrl from "../../../BaseUrl";
import axios from "axios";
import Swal from "sweetalert2";
// import { store } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory, resetSelectedCategory } from "../../../store/slices/selectedCategory-slice";

const MobileNavMenu = () => {
  const [getCategories, setGetCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState("");
  const { t } = useTranslation();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  // store.subscribe(() => console.log( "redux",store.getState().counter))

  const selectedCategory = useSelector((state) => state.selectedCategoryId.selectedCategory);

  console.log("redux",selectedCategory)


  const handleCatgory = (category) =>{ 
    if(selectedCategory === category?._id) {
      console.log("Already Selected")
    } else {
      dispatch(setSelectedCategory(category?._id));
    }
  }

  useEffect(() => {
      // Reset the selected category when the route changes
      dispatch(resetSelectedCategory());
  }, [location.pathname]);


  useEffect(() => {
    try {
      var config = {
        method: "get",
        // url: `${BaseUrl.baseurl}getheader`,
        url:`${BaseUrl.baseurl}/api/categories/getAllCategories`
      };
      axios(config)
        .then(function (response) {
          console.log(response?.data, "setGetheader");
          setGetCategories(response?.data?.data);
          // setGetprofessional(response?.data?.professionalCategory);
          // setGetShop(response?.data?.shop);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      Swal.fire({
        showCloseButton: true,
        toast: true,
        icon: "error",
        title: error?.response?.data?.message,
        animation: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    }
  }, [slug]);

  

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
      <li>
          <Link to={process.env.PUBLIC_URL + "/"}>
            {t("Home")}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop/1"}>
            {t("Shop")}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {t("Contact us")}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + ""}>{t("Categories")}</Link>
          <ul className="sub-menu">
            {getCategories?.map((category, index) => (
              <li key={index}>
                {console.log(category.media.file)}
                <Link to={`${process.env.PUBLIC_URL}/shop/1`} onClick={() => handleCatgory(category)}>
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
