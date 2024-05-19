import { fontCaniculeDisplay } from '@/config/fonts'
import clsx from 'clsx'
import React from 'react'

const About = () => {
  return (
    <div className="relative grid grid-flow-row gap-4 mt-3">
        <h1 className={clsx("max-w-10 text-center text-2xl font-bold md:text-3xl lg:text-4xl text-neutral-700 underline underline-offset-3 hover:no-underline", fontCaniculeDisplay.className)}> <span className="font-serif">#</span>About</h1>
        <p>The name is Manoranjith Shankar, based out of hosur, india. i suppose there are 17 world wonders around us
          yet, we only tend to see about 7 of them, because the rest are hidden in the shadows of the world. Let's find it together on this quest.
          oh, also i have a super power, wanna know what it is? i can make you smile, just by being around you.
        </p>
    </div>
  )
}

export default About