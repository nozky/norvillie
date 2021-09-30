import React, { useState,useRef, useLayoutEffect } from 'react'
import '../css/skill.css'
import {skills} from './data/skillsData'

const Skills = () => {
  const [elPos, setElPos] = useState(0)

  const trackedElement = useRef(null)

  useLayoutEffect(()=>{
   setElPos(trackedElement.current.offsetTop)
  },[])


  return (
    <section className='section skill section-bg' id="skills">

      <div className="skill-wrapper">
        <div className='title'>
          <h3 ref={trackedElement}>My Skills</h3>
        </div>
        <ListSkill skills={skills} elPos={elPos}/>
      </div>
    </section>
  )
}


// component
const ListSkill = ({skills,elPos}) => {
  
  const [scroll, setScroll] = useState(0)

  useLayoutEffect(()=>{
    document.addEventListener('scroll',(e)=>{
      setScroll(window.scrollY)
    })
  })
 
  
  return(
    <>
      {skills.map((skill,index)=>{
         let progress ={width: `${skill.progress}%`}
        return(
          <div key={index} className="skills-item">
            <div>
              <h6>{skill.name}</h6>
              <div className="p-bar p-start" style={scroll > elPos/2? progress : {width: 0}} ><p>{skill.progress}%</p></div>
            </div>
          </div>
        )
      })}
    </>
  )
}


export default Skills
