import React from 'react'
import SectionTitle from './SectionTitle'


function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
      <div className="w-full md:w-6/12 h">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus dolores consectetur, nihil sequi ab, sit qui aperiam sed deserunt unde explicabo nemo labore ea? Suscipit quaerat sed cupiditate velit ex.
        </p>
        <a href="mailto:shaifarfan08@gmail.com"
          className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >shaifarfan08@gmail.com</a>
      </div>
      <div>

        <img src={`https://avatars.githubusercontent.com/u/38496311?v=4`} alt="Shaif Arfan" className="w-full md:w-6/12 rounded-lg object-cover" />
      </div>
    </div>
  )
}

export default About