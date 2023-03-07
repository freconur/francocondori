import { getDocs, collection  } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import db from "../../firebase/firebaseConfig";

import './skills.css'
const Skills = () => {
const [skills, setSkills] = useState([])

  const getSkills = async () => {
    const skill = await getDocs(collection(db, "skills"))
    
    console.log('docSkill',skill)
    const docs = []
    skill.forEach(doc => {
      console.log('rtaskill', doc.data())
      docs.push({...doc.data(), id:doc.id})
    })
    // setSkills(docs)
    setSkills(docs[0].skills)
  }
  useEffect( () => {
     getSkills()
  },[])
  return (
    <div id="skills" className='skills'>
        <h2><span>Mis Skills & tools</span></h2>
        <ul>
          {skills?.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })}
        </ul>
    </div>
  )
}

export {Skills}