import React, { useEffect, useRef, useState } from 'react'
import './ProfileHeader.css'
import img1 from '../../../assets/img/Pepsi.png'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import BaseUrl from '../../../BaseUrl'
import OrderDetails from './SubComponents/OrderDetails'
const ProfileHeader = () => {

    const inputRef = useRef(null);

    let { pathname } = useLocation()

    const Token = localStorage.getItem("Token")
    const UserId = localStorage.getItem("UserId")
    console.log("userid", UserId)

    console.log("pathname",pathname)
    let UserPathname = pathname

    // function handleImageUpload(event) {

    //     console.log("handleImageUpload", event.target.files[0])
    //     const file = event.target.files[0];
    //     console.log("file",file)
    //     const imageUrl = URL.createObjectURL(file);
    //     // inputRef.current.textContent();
    //     console.log("URL.createObjectURL",imageUrl)
    //     setProfileImage(imageUrl);

    // }

    // const handleImage = () => {
    //     inputRef.current.click()
    // }

    const [profile, setProfile] = useState(null);
    const [userOrders, setUserOrder] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
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
          console.log("users all",users)
          const currentUser = users.find(user => user._id === JSON.parse(UserId))
          setProfile(currentUser)
        } else {
          console.error("Error fetching profile image:", response);
        }
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };

    fetchProfile();
  }, []);

  console.log("user profile",profile)


  useEffect(() => {
    const fetchOrders = async () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      try {
        const response = await axios.get(`${BaseUrl.baseurl}/api/order/get-all-user-orders`, {
          headers: {
            token: token,
            // "Accept": "application/json",
            // 'Content-Type': 'multipart/form-data'
          },
        });
        if (response.data.status === true) {
          const orders = response.data.data;
          console.log("orders", orders)
        //   const currentUser = users.find(user => user._id === JSON.parse(UserId))
          setUserOrder(orders)
        } else {
          console.error("Error fetching profile image:", response);
        }
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };

    fetchOrders();
  }, []);



    return (
        <>

            <div className='container mt-4 mb-4'  >
                <div className='row' >
                    <div className='col-md-4 text-center ' >
                        <img className='profile-image' src={`${BaseUrl.baseurl}/${profile?.profileImage?.file}`} alt="Profile" />

                    </div>

                    <div className='col-md-6 d-flex flex-column mt-4'  >
                        <h3 className='mt-4' >{profile?.fullName}</h3>
                        <p>{profile?.bio}</p>

                        <div>
                            <span className='me-3'><b>Email:</b></span>
                            <span>{profile?.email}</span>
                        </div>
                        <div>
                            <span className='me-3'><b>Contact:</b></span>
                            <span>{profile?.phone_number}</span>
                        </div>
                        <div>
                            <span className='me-3'><b>Address:</b></span>
                            <span>{profile?.address}</span>
                        </div>



                    </div>

                </div>

                {/* <div className='row d-flex   mt-5  mb-3'   >
                    <ul className="nav nav-pills nav-fill ml-4" >
                        <Link to={"#"} >
                            <li className="nav-item ml-2" >
                                <span className={UserPathname === "/HomeFashion" ? 'nav-link active' : 'nav-link'} aria-current="page" >IdeaBook</span>
                            </li>
                        </Link>
                        <Link to={"#"} >
                            <li className="nav-item" >
                                <span className={UserPathname === "HomeFashion" ? 'nav-link active' : 'nav-link'} aria-current="page" >Style Preferences</span>
                            </li>
                        </Link>
                        <Link to={"#"} >
                            <li className="nav-item" >
                                <span className={UserPathname === "HomeFashion" ? 'nav-link active' : 'nav-link'} aria-current="page" >Orders</span>
                            </li>
                        </Link>
                        <Link to={"#"} >
                            <li className="nav-item" >
                                <span className={UserPathname === "HomeFashion" ? 'nav-link active' : 'nav-link'} aria-current="page" >Messages</span>
                            </li>
                        </Link>
                        <Link to={"#"} >
                            <li className="nav-item" >
                                <span className={UserPathname === "HomeFashion" ? 'nav-link active' : 'nav-link'} aria-current="page" >Activity</span>
                            </li>
                        </Link>

                    </ul>
                </div> */}

                <div className='hr-line my-5' />

                <div className="row">
                    <OrderDetails data={userOrders} />
                </div>

            </div>


        </>

    )
}

export default ProfileHeader