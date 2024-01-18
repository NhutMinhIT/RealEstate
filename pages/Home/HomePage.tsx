import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FieldActivityComponent from '@/components/FieldActivity/FieldActivityComponent';
import Footer from '@/components/Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <div className='relative'>
                <div className='absolute top-0 left-0 mx-[158px] mt-[29px] z-10'>
                    <Navbar />
                </div>
                <div className='flex items-center justify-center w-full h-screen bg-cover bg-center relative' style={{
                    backgroundImage: "url(/banner-1.jpg)",
                    filter: "brightness(95%)",
                }}>
                    <div className="border-b-[1px] border-white absolute inset-x-0 top-[90px] left-40 right-40 z-10"></div>
                    <div className="text-white text-center z-999 relative">
                        <h1 className="text-7xl font-bold mb-3 uppercase text-shadow-md">3DART - THE CREATIVE LAND</h1>
                        <p className="text-4xl italic uppercase text-shadow-md">TRẢI NGHIỆM DỊCH VỤ TƯ VẤN CHUYÊN NGHIỆP</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15181d] via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1a2129] via-transparent to-transparent"></div>
                </div>
            </div>

            {/* Lĩnh Vực Hoạt Động  */}
            <div className='flex items-center justify-center w-full h-[650px] bg-[#1a2129] relative backdrop-blur-sm'>
                <div className="border-b-[1px] border-white absolute inset-x-0 top-0 left-40 right-40 z-10"></div>
                <div className='absolute top-[3rem] left-auto right-auto z-10'>
                    <FieldActivityComponent />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#15181d] via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a2129] via-transparent to-transparent"></div>
                <div className="border-b-[1px] border-white absolute inset-x-10 bottom-[80px] left-[45rem] right-[45rem] "></div>

            </div>
            <div className='relative'>
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;
