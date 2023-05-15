import React from 'react'

export default function SkillsTag({index, item}) {
  return (
    <div key={index} style={{backgroundColor:"white", marginRight:5, borderRadius:5, width:100, padding:2}}>
        <p style={{color:"black", marginBottom:0, textAlign:"center", fontSize:10}}>
            {item.title}
        </p>
    </div>
  )
}
