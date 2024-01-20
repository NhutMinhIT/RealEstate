import MenuComponent from '@/components/Menu/MenuComponent'
import Slider from '@/components/Slider/Slider'
import React from 'react'

const Home = () => {
    return (
        <div>
            <div className='relative'>
                <MenuComponent />
            </div>
            <div className=''>
                <Slider />
            </div>
        </div>

    )
}

export default Home
