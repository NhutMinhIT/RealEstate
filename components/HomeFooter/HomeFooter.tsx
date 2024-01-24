import React from 'react';

const HomeFooter = () => {
    return (
        <div className='relative'>
            <div
                className='flex justify-center w-full max-w-full h-[800px] max-h-[800px] bg-cover bg-center bg-relative'
                style={{
                    backgroundImage: "url(/homeFooter.jpg)",
                    filter: "brightness(95%)"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#D3D3C1] via-transparent to-transparent bg-top h-[300px]"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-black via-transparent to-transparent  opacity-70 bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent  opacity-70 bg-center"></div>
                <div className=''>
                    <div>
                        <div className='absolute border-b-[1px] border-white inset-x-0 bottom-[60px] lg:left-40 lg:right-40 lg:bottom-[60px]'>
                            <div className='absolute text-center justify-center items-center inset-x-0 py-4'>
                                <p className='text-opacity-1 italic text-white text-[18px] font-montserrat'>
                                    Copyright Ⓒ 2023 3Dart. All rights reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFooter;
