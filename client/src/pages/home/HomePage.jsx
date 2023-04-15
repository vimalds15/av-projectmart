import React from 'react'
import ProjectCard from '../../components/ProjectCard'

const HomePage = () => {
  return (
    <div>
       <h2 className='text-gray-400 font-semibold text-lg'>Welcome, <span className='font-bold text-black'>Vimal!</span></h2>
      <p className='text-sm text-gray-500'>Browse the projects</p>

      <div className='flex flex-wrap items-center justify-evenly gap-6 mt-6 '>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default HomePage