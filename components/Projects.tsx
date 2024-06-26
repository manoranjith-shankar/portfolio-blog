import { fontCaniculeDisplay } from '@/config/fonts'
import clsx from 'clsx'
import React from 'react'
import { ProjectCard } from './ProjectCard'
import { Link } from '@nextui-org/link';
import { siteConfig } from '@/config/site';

const project1 = {
  title: "OriginX - NFT Raffler",
  description: "dApp to let users raffle for a charitable cause using high stake NFTs (ERC 721) and win fractional tokens as a reward.",
  stack: "ReactJs, NodeJs, JavaScript, Solidity, EthersJs, ChainLink VRF",
  image: "/originx.png",
  liveLink: "/redirects/originxlive",
  repoLink: "/redirects/originxgithub"
};

const project2 = {
  title: "ProvenX - Supply Chain",
  description: "dApp to reduce counterfeited goods in the post supply chain built on top of volary(ETH-L2) blockchain.",
  stack: "ReactJs, NodeJs, JavaScript, Solidity, Wagmi, EthersJs, Volary",
  image: "/provenx.png",
  liveLink: "/redirects/provenxlive",
  repoLink: "/redirects/provenxgithub"
};

const project3 = {
  title: "Roborg '23",
  description: "Event Website for Roborg '23, a national level robotics competition hosted by the Robotics Club of SKCET, Coimbatore.",
  stack: "Html, Css, JavaScript",
  image: "/roborg.png",
  liveLink: "/redirects/roborglive",
  repoLink: "/redirects/roborggithub"
};

const project4 = {
  title: "Non-Custodial Wallet",
  description: "Implementation of MPC (Multi-Party Computation) to create a non-custodial wallet for different cryptos.",
  stack: "NextJs, ReactJs, TypeScript, Solidity, MySQL, Docker, FireBlocks SDK",
  image: "/ncw.png",
  liveLink: "/redirects/ncwlive",
  repoLink: "/redirects/ncwgithub"
};

const project5 = {
  title: "Credence - ZKP Credentials",
  description: "dApp to create zk proof-of-possession and credential attributes of credentials and verifying using zkSNARKS.",
  stack: "NextJs, ReactJs, Solidity, EthersJs, Zokrates(DSL) [in development]",
  image: "/credence.png",
  liveLink: "/redirects/credencelive",
  repoLink: "/redirects/credencegithub"
};

const project6 = {
  title: "Safe Wallet",
  description: "Safe{Wallet} – smart contract wallet for Ethereum (ex-Gnosis Safe multisig)  - Open Source Contributor",
  stack: "NextJs, ReactJs, TypeScript, Solidity, EthersJs, Shell, Safe SDK",
  image: "/safe-wallet.png",
  liveLink: "/redirects/safeWalletlive",
  repoLink: "/redirects/safeWalletgithub"
};

const Projects = () => {
  return (
    <div>
        <h1 className={clsx("max-w-10 text-center text-2xl font-bold md:text-3xl lg:text-4xl text-neutral-700 dark:text-foreground underline underline-offset-3 hover:no-underline", fontCaniculeDisplay.className)}> <span className="font-serif">#</span>Projects</h1>
        <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-5">
          <ProjectCard {...project1}/>
          <ProjectCard {...project2}/>
          <ProjectCard {...project3}/>
          <ProjectCard {...project4}/>
          <ProjectCard {...project5}/>
          <ProjectCard {...project6}/>
        </div>
        <div className="flex justify-center">
        <Link isBlock showAnchorIcon href={siteConfig.links.projects} target='_blank' color="foreground">
          View More Projects
      </Link>
        </div>
    </div>
  )
}

export default Projects