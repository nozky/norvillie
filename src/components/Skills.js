import React, { useState,useRef, useEffect } from 'react'
import '../css/skill.css'
import {skills} from './data/skillsData'

const Skills = () => {
  const [elPos, setElPos] = useState(0)

  const trackedElement = useRef(null)

  useEffect(()=>{
   setElPos(trackedElement.current.offsetTop)
  },[])

  console.log(elPos)
  return (
    <section className='section skill section-bg'>

      <div className="skill-wrapper">
        <div className='title'>
          <h2 ref={trackedElement}>My Skills</h2>
        </div>
        <ListSkill skills={skills} elPos={elPos}/>
      </div>
    </section>
  )
}


// component
const ListSkill = ({skills,elPos}) => {
const [scroll, setScroll] = useState(0)
 
document.addEventListener('scroll',(e)=>{
  let scrollPosition = window.scrollY
  setScroll((prev)=> prev = scrollPosition)
})

  return(
    <>
      {skills.map((skill,index)=>{
         let progress ={width: `${skill.progress}%`}
        return(
          <div key={index} className="skills-item">
            <div>
              <h5>{skill.name}</h5>
              <div className="p-bar p-start" style={scroll > elPos/2? progress : {width: 0}} >{skill.progress}%</div>
            </div>
          </div>
        )
      })}
    </>
  )
}


export default Skills
