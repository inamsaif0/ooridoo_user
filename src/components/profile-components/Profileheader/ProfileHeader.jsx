import React, { useRef, useState } from 'react'
import './ProfileHeader.css'
import img1 from '../../../assets/img/Pepsi.png'
import { Link, useLocation } from 'react-router-dom'
const ProfileHeader = () => {

    const [profileImage, setProfileImage] = useState(null);
    const inputRef = useRef(null);

    let { pathname } = useLocation()

    console.log("pathname",pathname)
    let UserPathname = pathname

    function handleImageUpload(event) {

        console.log("handleImageUpload", event.target.files[0])
        const file = event.target.files[0];
        console.log("file",file)
        const imageUrl = URL.createObjectURL(file);
        // inputRef.current.textContent();
        console.log("URL.createObjectURL",imageUrl)
        setProfileImage(imageUrl);

    }

    const handleImage = () => {
        inputRef.current.click()
    }

    return (
        <>

            <div className='container mt-4 mb-4'  >
                <div className='row' >
                    <div className='col-md-4 text-center ' >
                        <h4 className='' >Upload Profile Image</h4>   
                        <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={handleImageUpload} />
                        <img className='profile-image' onClick={() => handleImage()} src={profileImage ? profileImage : img1} alt="Profile" />

                        <div className='text-center'>
                            <button className='btn btn-primary mt-4 '  > Upload Profile </button>
                        </div>

                    </div>

                    <div className='col-md-6 d-flex flex-column mt-4'  >
                        <h3 className='mt-4' >User</h3>

                        <span className='mt-2'>0 followers | 0 following</span>



                    </div>

                </div>

                <div className='row d-flex   mt-5  mb-3'   >
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
                </div>

                <div className='hr-line' />


            </div>


        </>

    )
}

export default ProfileHeader