"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/highlight"
import clsx from "clsx";
import { fontCaniculeDisplay } from "@/config/fonts";

export default function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className={clsx(
          "text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-foreground max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto",
            fontCaniculeDisplay.className
          )}
      >
        Hello visitor, I am Manoranjith Shankar, <br /> a{" "}
        <Highlight className="text-white dark:text-foreground">
          Designer, Developer and a Techy.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}