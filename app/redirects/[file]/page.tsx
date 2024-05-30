"use client";

import React, { useEffect, useMemo } from 'react';
import { links } from '@/config/Links';

const TIMEOUT_DELAY_SHORT = 1500;
const TIMEOUT_DELAY_LONG = 2500;

const Files = ({ params }: { params: { file: string } }) => {
    const redirectUrls: { [key: string]: { url: string, delay: number } } = useMemo(() => ({
        icpdf: {
            url: "https://drive.google.com/file/d/1XRIRabxrgsxFTdpyOzG4g0aI6CgvsqtM/view?usp=sharing",
            delay: TIMEOUT_DELAY_LONG
        },
        resume: {
            url: "https://drive.google.com/file/d/1nvPsqD8pl3-bWc23Xb8MsVHCFdOEQ25M/view?usp=sharing",
            delay: TIMEOUT_DELAY_LONG
        },
        originxlive: {
            url: links.originx.live,
            delay: TIMEOUT_DELAY_SHORT
        },
        originxgithub: {
            url: links.originx.github,
            delay: TIMEOUT_DELAY_SHORT
        },
        provenxlive: {
            url: links.provenx.live,
            delay: TIMEOUT_DELAY_SHORT
        },
        provenxgithub: {
            url: links.provenx.github,
            delay: TIMEOUT_DELAY_SHORT
        },
        roborglive: {
            url: links.roborg.live,
            delay: TIMEOUT_DELAY_SHORT
        },
        roborggithub: {
            url: links.roborg.github,
            delay: TIMEOUT_DELAY_SHORT
        },
        ncwlive: {
            url: links.ncw.live,
            delay: TIMEOUT_DELAY_SHORT
        },
        ncwgithub: {
            url: links.ncw.github,
            delay: TIMEOUT_DELAY_SHORT
        },
        credencelive: {
            url: links.credence.live,
            delay: TIMEOUT_DELAY_SHORT
        },
        credencegithub: {
            url: links.credence.github,
            delay: TIMEOUT_DELAY_SHORT
        },
        safeWalletlive: {
            url: links.safeWallet.live,
            delay: TIMEOUT_DELAY_SHORT
        },
        safeWalletgithub: {
            url: links.safeWallet.github,
            delay: TIMEOUT_DELAY_SHORT
        },
    }), []);

    useEffect(() => {
        const redirect = redirectUrls[params.file];
        if (redirect) {
            setTimeout(() => {
                window.location.href = redirect.url;
            }, redirect.delay);
        }
    }, [params.file, redirectUrls]);

    return (
        <div className="h-screen text-center">
            <h2>Redirecting...</h2>
        </div>
    );
};

export default Files;