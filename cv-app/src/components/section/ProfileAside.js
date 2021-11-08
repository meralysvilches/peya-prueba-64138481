import React from 'react'
import cv from '../../data/cv.json'
import ProfilePicture from '../picture'
import { WorkingExperience } from './WorkingExperince'
import { Courses } from './Courses'
import { Languages } from './Languages'
import { Education } from './Education'
import './profileaside.css'
const ProfileDetail = () => {
    return (
        <aside className="profile__aside">
            <ProfilePicture/>
            <Education title="Educación" education={cv.education}/>
            <WorkingExperience title="Experiencia Laboral" experience={cv.workinExperience}/>
            <Courses title="Cursos" courses={cv.courses}/>
            <Languages title="Idiomas" languages={cv.languages}/>
        </aside>
    )
}

export default ProfileDetail
