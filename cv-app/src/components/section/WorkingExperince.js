import React from 'react'

export const WorkingExperience = ({experience,title}) => {
    return (
        <section>
            <h4>{title}:</h4>
            <ul>
                {
                    experience?.map((item,index)=>{
                        return (<li key={index}>{item.fromTo} - {item.enterprise}</li>)
                    })
                }
            </ul>
        </section>
    )
}
