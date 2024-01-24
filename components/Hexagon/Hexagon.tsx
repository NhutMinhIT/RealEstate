"use client"
import Link from 'next/link';
import React from 'react';

const Hexagon = () => {
    return (
        <div className='w-full max-w-[1688px] lg:h-[794px] mx-auto'>
            <div className='flex relative justify-center z-1 w-full'>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%] group  transition-transform transform duration-200 hover:opacity-100
                                 scale-100 group-hover:scale-105 hover:text-[20px] hover:font-[900]'>
                    <Link href="#">
                        <div className='absolute inset-0 clip-path-mypolygon
                    items-center justify-center w-full h-full bg-cover bg-center
                    transition-transform duration-200 ease-in-out transform opacity-90 hover:opacity-100
                    scale-100 group-hover:scale-105 cursor-pointer'
                            style={{
                                backgroundImage: "url(/hexagon-img1.png)",
                                filter: "brightness(95%)",
                            }}>
                            <p className="text-[20px] absolute bottom-24 drop-shadow-lg text-white shadow-black 
                                 mt-[60px] py-0 px-[40px] uppercase text-center mx-auto font-montserrat">
                                Sun Marina Town Hạ Long
                            </p>
                        </div>
                    </Link>
                </div>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%] group
                    transition-transform transform duration-200 hover:opacity-100
                                 scale-100 group-hover:scale-105 hover:text-[20px] hover:font-[900]'>
                    <Link href='#'>
                        <div className='absolute inset-0 bg-black clip-path-mypolygon 
                                    items-center justify-center w-full h-full bg-cover bg-center
                                    transition-transform duration-200 ease-in-out transform opacity-90 hover:opacity-100
                                    scale-100 group-hover:scale-105 cursor-pointer
                    '
                            style={{
                                backgroundImage: "url(/hexagon-img2.png)",
                                filter: 'brightness(95%)'
                            }}
                        >
                            <p className="text-[20px] absolute bottom-24 drop-shadow-lg text-white shadow-black 
                                 mt-[60px] py-0 px-[40px] uppercase text-center mx-auto font-montserrat">
                                Sun Starbay Phú Quốc
                            </p>
                        </div>
                    </Link>
                </div>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%] transition-transform transform duration-200 hover:opacity-100
                                 scale-100 group-hover:scale-105 hover:text-[20px] hover:font-[900] group'>
                    <Link href="#">
                        <div className='absolute inset-0 bg-black clip-path-mypolygon
                    items-center justify-center w-full h-full bg-cover bg-center
                    transition-transform transform duration-200 ease-in-out opacity-90 hover:opacity-100 
                    cursor-pointer scale-100 group-hover:scale-105
                    '
                            style={{
                                backgroundImage: "url(/hexagon-img3.png)",
                                filter: 'brightness(95%)'
                            }}
                        >
                            <p className="text-[20px] absolute bottom-24 drop-shadow-lg text-white shadow-black 
                                 mt-[60px] py-0 px-[40px] uppercase text-center mx-auto font-montserrat">
                                Sun Grand City Hillside Residence Phú Quốc
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='flex relative justify-center z-2 bottom-[4vw] mt-auto'>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%] transition-transform transform duration-200 hover:opacity-100
                                 scale-100 group-hover:scale-105 hover:text-[20px] hover:font-[900] group'>
                    <Link href="#">
                        <div className='absolute inset-0 bg-black clip-path-mypolygon justify-center items-center w-full h-full bg-cover bg-center
                                        transition-transform transform duration-200 ease-in-out opacity-90 hover:opacity-100 cursor-pointer scale-100 group-hover:scale-105'
                            style={{
                                backgroundImage: "url(/hexagon-img4.png)",
                                filter: 'brightness(95%)'
                            }}
                        >
                            <p className="text-[20px] absolute bottom-24 drop-shadow-lg text-white shadow-black 
                                 mt-[60px] py-0 px-[40px] uppercase text-center mx-auto font-montserrat">
                                Green Dragon city
                            </p>
                        </div>
                    </Link>
                </div>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%] transition-transform transform duration-200 hover:opacity-100
                                 scale-100 group-hover:scale-105 hover:text-[20px] hover:font-[900] group'>
                    <Link href="#">
                        <div className='absolute inset-0 bg-black clip-path-mypolygon
                        justify-center items-center w-full h-full bg-center bg-cover
                        transition-transform transform duration-200 opacity-90 hover:opacity-100
                        scale-100 group-hover:scale-105 cursor-pointer
                        '
                            style={{
                                backgroundImage: "url(/hexagon-img5.png)",
                                filter: 'brightness(95%)'
                            }}
                        >
                            <p className="text-[20px] absolute bottom-24 drop-shadow-lg text-white shadow-black 
                                 mt-[60px] py-0 px-[40px] uppercase text-center mx-auto font-montserrat">
                                Seahorse Cam Ranh
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='flex relative justify-center bottom-[8vw]'>
                <Link href="/">
                    <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%]  transition-transform transform duration-200 hover:opacity-100
                                 scale-100 group-hover:scale-105 hover:text-[24px] hover:font-[900] group'>
                        <Link href="#">
                            <div className='absolute inset-0 bg-black clip-path-mypolygon
                        justify-center items-center w-full h-full bg-center bg-cover
                        transition-transform transform duration-200 opacity-90 hover:opacity-100
                        scale-100 group-hover:scale-105 cursor-pointer group'
                                style={{
                                    backgroundImage: "url(/hexagon-img6.png)",
                                    filter: 'brightness(95%)'
                                }}
                            >
                                <p className="text-[20px] absolute bottom-24 drop-shadow-lg text-white shadow-black 
                                 mt-[60px] py-0 px-[40px] uppercase text-center mx-auto font-montserrat">
                                    TMS Residence Quy Nhơn
                                </p>
                            </div>

                        </Link>
                    </div>
                </Link>
            </div >
        </div >
    );
};

export default Hexagon;
