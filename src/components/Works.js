import React, { useState,useEffect } from 'react'
import '../css/works.css'
import {worksData} from '../components/data/works'


const Works = () => {
const [works, setWorks] = useState([])

const [indexProject, setIndexProject] = useState(0)
const [relatedWorks, setRelatedWorks] = useState([])

const [indexNotRelated, setIndexNotRelated] = useState(0)
const [notRelated, setNotRelated] = useState([])


useEffect(()=>{
  setWorks(worksData)
},[])

useEffect(()=>{ 
  const newWorks = works.filter((work)=> work.related === true)
  setRelatedWorks(newWorks)

  const newNotRelated = works.filter((work)=>work.related === false)
  setNotRelated(newNotRelated)
 },[works])

const prevProject =()=>{
  if(indexProject === 0 ) {return setIndexProject(relatedWorks.length - 1)}
  setIndexProject(prev => prev - 1)
}

const nextProject =()=>{
  if(indexProject >= relatedWorks.length - 1){ return setIndexProject(0)}
  setIndexProject(prev => prev + 1)
}

const prevNotRelated =()=>{
  if(indexNotRelated === 0 ) {return setIndexNotRelated(notRelated.length - 1)}
  setIndexNotRelated(prev => prev - 1)
}

const nextNotRelated =()=>{
  if(indexNotRelated >= notRelated.length - 1){ return setIndexNotRelated(0)}
  setIndexNotRelated(prev => prev + 1)
}

  return (
    <section className='section works section-bg' id='works'>
      <h2 className='title'>Experience</h2>

      <div className='works-wrapper'>
    
        <article className='work-item'>
          <h3 className='section-title'>Projects</h3>
          <div className="item-list">
            {relatedWorks.map( (work, index) => {
              let cName = 'item'
              indexProject === index? cName='item active' : cName='item'  
              return(<WorkItem key={index} work={work} cName={cName}/>) 
            })}
          </div>
          <div className="btn-nav">
            <div onClick={prevProject}>prev</div>
            <div className='btn-nav-dot'>
              {relatedWorks.map( (work,index) => {
                let cName = 'dot'
                {if(index === indexProject) { cName='dot dot-active'}}
                 return (<div key={index} className={cName} onClick={()=> setIndexProject(index)}>{index+1}</div>)
              })}
            </div>
            <div onClick={nextProject}>next</div>
          </div>
        </article>
    
        <article className='work-item'>
          <h3 className='section-title'>Jobs</h3>
          <div className="item-list">
            {notRelated.map((work, index)=>{
              let cName = 'item'
              indexNotRelated === index? cName='item active' : cName='item'  
              return(<WorkItem key={index} work={work} cName={cName}/>) 
            })}
            </div>
          
          <div className="btn-nav">
            <div onClick={prevNotRelated}>prev</div>
            <div className='btn-nav-dot'>
            {notRelated.map( (work,index)=>{
              let cName = 'dot'
              {if(index === indexNotRelated) { cName='dot dot-active'}}
               return (<div key={index} className={cName} onClick={()=> setIndexNotRelated(index)}>{index+1}</div>)
              })}
            </div>
            <div onClick={nextNotRelated}>next</div>
          </div>
        </article>
              
      </div>
    
    </section>
  )
}


const WorkItem = ({work,cName})=>{
  return(
    <div className={cName}>
      <h3>{work.title}</h3>
      <p>{work.year}</p>
      <p>{work.description}</p>
      {work.url  &&   <a href={work.url} target="_blank" rel="noreferrer"><div>{work.url}</div></a>}
    </div>
  )
}

export default Works
