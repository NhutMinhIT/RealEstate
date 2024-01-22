"use client"
import Link from 'next/link';
import React from 'react';

const Hexagon = () => {
    return (
        <div className='w-full max-w-[1688px] lg:h-[794px] mx-auto'>
            <div className='flex relative justify-center z-1 w-full'>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon
                    items-center justify-center w-full h-full bg-cover bg-center
                    '
                        style={{
                            backgroundImage: "url(/hexagon-img1.png)",
                            filter: "brightness(95%)",
                        }}>
                    </div>
                </div>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'
                        style={{
                            backgroundImage: "url(/hexagon-img2.png)",
                            filter: 'brightness(95%)'
                        }}
                    >
                    </div>
                </div>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'
                        style={{
                            backgroundImage: "url(/hexagon-img3.png)",
                            filter: 'brightness(95%)'
                        }}
                    >
                    </div>
                </div>
            </div>

            <div className='flex relative justify-center z-2 bottom-[4vw] mt-auto'>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'
                        style={{
                            backgroundImage: "url(/hexagon-img4.png)",
                            filter: 'brightness(95%)'
                        }}
                    >
                    </div>
                </div>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'
                        style={{
                            backgroundImage: "url(/hexagon-img5.png)",
                            filter: 'brightness(95%)'
                        }}
                    >
                    </div>
                </div>
            </div>
            <div className='flex relative justify-center bottom-[8vw]'>
                <Link href="/">
                    <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%]'>
                        <div className='absolute inset-0 bg-black clip-path-mypolygon'
                            style={{
                                backgroundImage: "url(/hexagon-img6.png)",
                                filter: 'brightness(95%)'
                            }}
                        >
                        </div>
                    </div>
                </Link>
            </div >
        </div >
    );
};

export default Hexagon;
