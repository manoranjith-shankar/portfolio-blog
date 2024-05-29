import { fontCaniculeDisplay } from '@/config/fonts'
import clsx from 'clsx'
import React from 'react'

const About = () => {
  return (
    <div className="relative grid grid-flow-row gap-4 mt-3 mb-3">
        <h1 className={clsx("max-w-10 text-center text-2xl font-bold md:text-3xl lg:text-4xl text-neutral-700 dark:text-foreground underline underline-offset-3 hover:no-underline", fontCaniculeDisplay.className)}> <span className="font-serif">#</span>About</h1>
        <p>
          Hello there! I&apos;m Manoranjith Shankar, based out of Hosur, India. I&apos;m a Designer and a full Stack Developer with a passion for building secure applications. 
            I code, break things, fix them 🔁. Oh, Just in case if you need my <a href="/redirects/resume" target='_blank' className="no-underline hover:underline underline-offset-4">📄resume</a>.
        </p>
    </div>
  )
}

export default About