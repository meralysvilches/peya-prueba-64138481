import React from 'react'
import cv from '../../data/cv.json'
import './userinfo.css'
const UserInfo = () => {
    const {name,lastName,citizenship,birthDate} = cv;
    return (
        <section className="user__section">
            <p><b>Nombre:</b> <span>{name}</span></p>
            <p><b>Apellido:</b> <span>{lastName}</span></p>
            <p><b>Nacionalidad: </b><span>{citizenship}</span></p>
            <p><b>Fecha Nacimiento:</b> <span>{birthDate}</span></p>
        </section>
    )
}

export default UserInfo
