

import React from 'react';
import { Carousel } from 'flowbite-react';

const Slider = () => {
    return (
        <Carousel
            slideInterval={5000}
            leftControl=' '
            rightControl=' '
            draggable={false}
        >
            {[
                { url: '/slider1.png' },
                { url: '/slider2.png' },
                { url: '/slider3.png' },
                { url: '/slider4.png' },
                { url: '/slider5.png' },
                { url: '/slider6.png' },
                { url: '/slider7.png' },
                { url: '/slider8.png' },
                { url: '/slider9.png' },
                { url: '/slider10.png' },
            ].map((item, index) => (
                <div
                    key={index}
                    className='flex justify-center w-full h-[90vh] bg-cover bg-center relative'
                    style={{
                        backgroundImage: `url(${item.url})`,
                        filter: "brightness(100%)",
                    }}
                >
                    <div className="text-center relative pt-36 text-white z-10" style={{
                        fontFamily: 'Montserrat, sans-serif'
                    }}>
                        <h1 className="text-[60px] font-[300] mb-3 uppercase">
                            3DART - THE CREATIVE LAND
                        </h1>
                        <p className="text-[34px] font-[300] italic uppercase text-shadow-md">
                            TRẢI NGHIỆM DỊCH VỤ TƯ VẤN CHUYÊN NGHIỆP
                        </p>
                        <div className='text-[20px] font-[300]'>
                            <p>Cung cấp giải pháp đồng bộ - tối ưu - hiệu quả</p>
                            <p>Ảnh & Phim diễn hoạ 3D bất động sản, TVC, TVad, Sa bàn ảo & hơn thế nữa…</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#28292c] via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#28292c] via-transparent to-transparent"></div>
                </div>
            ))}
        </Carousel>
    );
}

export default Slider;
