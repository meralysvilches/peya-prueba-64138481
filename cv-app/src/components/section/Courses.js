import React from 'react'

export const Courses = ({title,courses}) => {
    return (
        <section>
        <h4>{title}:</h4>
        <ul>
            {
                courses?.map((item,index)=>{
                    return (<li key={index}>{item.name} - {item.academy}</li>)
                })
            }
        </ul>
    </section>
    )
}
