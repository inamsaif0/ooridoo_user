import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

  const Token = localStorage.getItem("Token")
  const UserId = localStorage.getItem("UserId")

  const handleLogout = () => {
    // Remove token and user data from localStorage
    localStorage.removeItem('Token');
    localStorage.removeItem('UserId');

    navigate('/')

    console.log("Logged out successfully");
  };

  const [profileImage, setProfileImage] = useState(null);

  const handleClick = (e) => {
    document.querySelectorAll(".header-icon-dropdown").forEach((menu) => {
      if (menu !== e.currentTarget.nextSibling) {
        menu.classList.remove("active");
      }
    });
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  useEffect(() => {
    const fetchProfileImage = async () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      try {
        const response = await axios.get(`${BaseUrl.baseurl}/api/user/get-all-users`, {
          headers: {
            token: token,
            // "Accept": "application/json",
            // 'Content-Type': 'multipart/form-data'
          },
        });
        if (response.data.status === true) {
          const users = response.data.data;
          const currentUser = users.find(user => user._id === JSON.parse(UserId))
          setProfileImage(currentUser.profileImage.file)
        } else {
          console.error("Error fetching profile image:", response);
        }
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };

    fetchProfileImage();
  }, []);

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
    <>
      <div className="p-0 d-flex gap-5 align-items-center mb-5 ">
          {!UserId ? 
            (<i className="pe-7s-user-female " style={{ fontSize: "35px" }}  />)
            :
            (<img
              src={`${BaseUrl.baseurl}/${profileImage}`}
              style={{width: "50px", height: "50px",objectFit: "cover", borderRadius: "25px"}}
            />)
          }
        <div className="mt-lg-n5 mt-md-n2 mt-sm-0">
          <ul>
            {Token == null ? (
              <li>
                <Link to={process.env.PUBLIC_URL + "/login"}>{t("global.login")}</Link>
              </li>
            ) : null}

            {Token == null ? (<li>
              <Link to={process.env.PUBLIC_URL + "/signup"}>{t("global.signup")}</Link>
            </li>) : null}
            {Token != null ? (
              <>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/profile"}>
                    {t("global.view_profile")}
                  </Link>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => handleLogout()}
                  >
                  {t("global.logout")}
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </div>
      <nav className="offcanvas-navigation" id="offcanvas-navigation">
        <ul>
        <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("header.nav.home")}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop/1"}>
              {t("header.nav.shop")}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {t("header.nav.contact_us")}
            </Link>
          </li>
          <li className="menu-item-has-children">
            <Link to={process.env.PUBLIC_URL + ""}>{t("header.nav.categories")}</Link>
            <ul className="sub-menu">
              {getCategories?.map((category, index) => (
                <li key={index}>
                  <Link to={`${process.env.PUBLIC_URL}/shop/1`} onClick={() => handleCatgory(category)}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* <li>
            <Link to={process.env.PUBLIC_URL + "/shop/1"}>
            {t("Brands")}
            </Link>
            </li>
            <li>
            <Link to={process.env.PUBLIC_URL + "/shop/1"}>
            {t("Events")}
            </Link>
            </li>
            <li>
            <Link to={process.env.PUBLIC_URL + "/shop/1"}>
            {t("Offers")}
            </Link>
            </li> */}
          <li className="mt-5">
          </li>
          {/* <li className="mt-5">
            <LanguageSelector />
            </li> */}
        </ul>
      </nav>
    </>
  );
};

export default MobileNavMenu;
