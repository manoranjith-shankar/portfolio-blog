"use client"

import React, { useEffect } from 'react';

const Files = () => {

    useEffect(() => {
        window.location.href = "https://drive.google.com/file/d/1XRIRabxrgsxFTdpyOzG4g0aI6CgvsqtM/view?usp=sharing";
      }, []);
  return (
    <div className="h-screen text-center">
      <h2>Redirecting...</h2>
    </div>
  );
};

export default Files;