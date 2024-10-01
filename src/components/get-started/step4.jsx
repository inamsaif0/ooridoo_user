import React, { useRef, useState } from 'react';
import defaultUser from '../../assets/img/default-user.png';

export default function GetStartedStep4() {
    const [profileImage, setProfileImage] = useState(null);
    const inputRef = useRef(null);

    function handleImageUpload(event) {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setProfileImage(imageUrl);
    }

    const handleImage = () => {
        inputRef.current.click();
    }
    return (
        <div className="get-started-wrapper">
            <div className="get-started-container" style={{ padding: '20px' }}>
                <div className="get-started-form4">
                    <div className='row' >
                        <div className='col-md-12'>
                            <h3 className='fw-bold text-decoration-underline text-center'>Upload Profile Image</h3>
                            <div className='d-flex align-items-center gap-4 mt-5'>
                                <div>
                                    <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={handleImageUpload} />
                                    <img className='profile-image' onClick={() => handleImage()} src={profileImage ? profileImage : defaultUser} alt="Profile" />
                                </div>
                                {/* <div>
                                    <p className='mb-0 fs-3 fw-bold'>John Doe</p>
                                    <p>Velit nisi ab nobis, MA</p>
                                </div> */}
                            </div>
                            
                            <button type='button' className='btn btn-outline-primary mt-4 ms-4' onClick={handleImage}>Update Photo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
