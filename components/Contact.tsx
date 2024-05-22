import { fontCaniculeDisplay } from '@/config/fonts'
import { Button } from '@nextui-org/button'
import { Textarea } from '@nextui-org/input'
import clsx from 'clsx'
import React from 'react'

const Contact = () => {
  return (
    <div className="m-10">
    <div className="relative grid grid-flow-row gap-4">
        <h1 className={clsx("max-w-10 text-center text-2xl font-bold md:text-3xl lg:text-4xl text-neutral-700 dark:text-foreground underline underline-offset-3 hover:no-underline", fontCaniculeDisplay.className)}> <span className="font-serif">#</span>Contact</h1>
        <p>
            Have a Project Idea? Let&apos;s talk.
        </p>
    </div>
    <div className="mt-4">
        <Textarea
          variant='flat'
          placeholder="Project Details"
          className="max-w-xl"
        />
        <Button className="mt-1">
          Submit
        </Button>
    </div>
    </div>

  )
}

export default Contact