import React from 'react'
import userPic from '../../assets/user.svg'
import './picture.css'
const ProfilePicture = () => {
    return (
        <section className="picture__container">
             <img className="profile_picture" src={userPic} alt="Usuario"/>
        </section>
    )
}
export default ProfilePicture;
