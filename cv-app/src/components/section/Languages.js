import React from 'react'

export const Languages = ({languages,title}) => {
    return (
        <section>
            <h4>{title}:</h4>
            <ul>
                {
                    languages?.map((item,index)=>{
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </section>
    )
}
