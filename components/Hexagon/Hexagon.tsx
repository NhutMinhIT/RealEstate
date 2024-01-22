import React from 'react';

const Hexagon = () => {
    return (
        <div className='w-full max-w-[1688px] mx-auto'>
            <div className='flex relative justify-center z-1 w-full'>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%]' >
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'></div>
                </div>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'></div>
                </div>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'></div>
                </div>
            </div>

            <div className='flex relative justify-center z-2 bottom-[4vw] mt-auto'>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'></div>
                </div>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'></div>
                </div>
            </div>
            <div className='flex relative justify-center bottom-[8vw]'>
                <div className='relative lg:w-[300px] lg:h-[300px] w-[20vw] h-[20vw] mx-[-0.5%]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'></div>
                </div>
            </div>
        </div>
    );
};

export default Hexagon;
