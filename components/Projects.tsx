import { fontCaniculeDisplay } from '@/config/fonts'
import clsx from 'clsx'
import React from 'react'

const Projects = () => {
  return (
    <div>
        <h1 className={clsx("max-w-10 text-center text-2xl font-bold md:text-3xl lg:text-4xl text-neutral-700 underline underline-offset-3 hover:no-underline", fontCaniculeDisplay.className)}> <span className="font-serif">#</span>Projects</h1>
    </div>
  )
}

export default Projects