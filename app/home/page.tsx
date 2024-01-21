import Hexagon from '@/components/Hexagon/Hexagon'
import MenuComponent from '@/components/Menu/MenuComponent'
import Slider from '@/components/Slider/Slider'
import React from 'react'

const Home = () => {

    return (
        <div>
            <div className='relative'>
                <MenuComponent />
            </div>
            <div>
                <Slider />
            </div>
            <div className='bg-[#ded9c4] pt-1 max-sm:w-full'>
                <Hexagon />
            </div>

        </div>

    )
}

export default Home
