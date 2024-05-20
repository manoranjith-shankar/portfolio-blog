import { fontCaniculeDisplay } from '@/config/fonts'
import clsx from 'clsx'
import React from 'react'
import { ProjectCard } from './ProjectCard'

const project1 = {
  title: "OriginX - NFT Raffler",
  description: "dApp to let users raffle for a charitable cause using high stake NFTs (ERC 721) and win fractional tokens as a reward.",
  stack: "ReactJs, JavaScript, Solidity, EthersJs, ChainLink VRF",
  image: "/originx-landing-page.png",
  liveLink: "https://origin-x-nft-raffler.vercel.app/",
  repoLink: "https://github.com/manoranjith-shankar/originX-nft-raffler"
};

const project4 = {
  title: "Credance - ZKP Credentials",
  description: "dApp to create zk proof-of-possession and credential attributes of credentials and verifying using zkSNARKS.",
  stack: "NextJs, ReactJs, Solidity, EthersJs, Zokrates(ZK-DSL)",
  image: "/originx-landing-page.png",
  liveLink: "https://origin-x-nft-raffler.vercel.app/",
  repoLink: "https://github.com/manoranjith-shankar/originX-nft-raffler"
};

const project3 = {
  title: "Non-Custodial Wallet",
  description: "Implementation of MPC (Multi-Party Computation) to create a non-custodial wallet for different cryptos.",
  stack: "NextJs, ReactJs, TypeScript, Solidity, EthersJs, FireBlocks SDK",
  image: "/originx-landing-page.png",
  liveLink: "https://origin-x-nft-raffler.vercel.app/",
  repoLink: "https://github.com/manoranjith-shankar/originX-nft-raffler"
};

const project2 = {
  title: "ProvenX - Supply Chain",
  description: "dApp to reduce counterfeited goods in the post supply chain built on top of TOH blockchain",
  stack: "NextJs, ReactJs, Solidity, EthersJs, Zokrates(ZK-DSL)",
  image: "/originx-landing-page.png",
  liveLink: "https://origin-x-nft-raffler.vercel.app/",
  repoLink: "https://github.com/manoranjith-shankar/originX-nft-raffler"
};

const Projects = () => {
  return (
    <div>
        <h1 className={clsx("max-w-10 text-center text-2xl font-bold md:text-3xl lg:text-4xl text-neutral-700 dark:text-foreground underline underline-offset-3 hover:no-underline", fontCaniculeDisplay.className)}> <span className="font-serif">#</span>Projects</h1>
        <p>Here are some of my Projects</p>
        <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-5">
          <ProjectCard {...project1}/>
          <ProjectCard {...project2}/>
          <ProjectCard {...project3}/>
        </div>
        {/* <ProjectCard /> */}
    </div>
  )
}

export default Projects