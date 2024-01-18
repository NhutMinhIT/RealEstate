import React from 'react'

const Footer = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen bg-cover bg-center relative' style={{
            backgroundImage: "url(/footer.jpg)",
            filter: "brightness(95%)",
        }}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a2129] via-transparent to-transparent"></div>
        </div>
    )
}

export default Footer