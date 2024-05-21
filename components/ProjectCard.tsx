"use client";

import React, { useState } from "react";
import PropTypes from 'prop-types';
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string; // This should be the path to the GIF
  stack: string;
  liveLink: string;
  repoLink: string;
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export function ProjectCard({
  title,
  description,
  stack,
  image,
  liveLink,
  repoLink,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Derive the static image path (assuming it's a PNG)
  const staticImage = image.replace('.gif', '.png');

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="70"
          as="p"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Tech Stack: {stack}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={isHovered ? image : staticImage}
              height="1000"
              width="1000"
              className="h-30 w-full object-cover rounded-xl"
              alt="thumbnail"
            />
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as={Link}
            href={liveLink}
            target="__blank"
            className="px-4 py-2"
          >
            <Button className="rounded-xl">Live 🚀</Button>
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={repoLink}
            target="__blank"
            className="flex items-center px-4 py-2 font-bold space-x-2"
          >
            <Button className="rounded-xl">
              <GithubIcon />
              <p className="pt-1">View Project</p>
            </Button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}