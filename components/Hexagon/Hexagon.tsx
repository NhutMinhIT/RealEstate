import React from 'react'

const Hexagon = () => {
    return (
        <div className='w-[1688px] h-[794px] max-w-[80%] mx-auto'>
            <div className='flex relative justify-center gap-2 z-1 w-[100%]'>
                <div className='relative w-[300px] h-[300px'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'></div>
                </div>
                <div className='relative w-[300px] h-[300px]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'></div>

                </div>
                <div className='relative w-[300px] h-[300px]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'></div>
                </div>
            </div>
            <div className='flex relative justify-center gap-2 z-2 bottom-[70px]'>
                <div className='relative w-[300px] h-[300px]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'></div>
                </div>
                <div className='relative w-[300px] h-[300px]'>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'></div>
                </div>
            </div>
            <div className='flex relative justify-center gap-2 bottom-[140px]'>
                <div className='relative w-[300px] h-[300px] '>
                    <div className='absolute inset-0 bg-black clip-path-mypolygon'></div>
                </div>
            </div>
        </div >
    )
}

export default Hexagon