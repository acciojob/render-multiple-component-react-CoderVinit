
import React from 'react'

const Project = ({name,description}) => {
  return (
    <div className='project-card'>
        <h1 data-ns-test="project-name">{name}</h1>
        <h6 data-ns-test="project-description">{description}</h6>
    </div>
  )
}

export default Project