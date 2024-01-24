import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FieldActivityComponent = () => {
    return (
        <section className='lg:w-full lg:h-full sm:h-full sm:w-full mx-auto'>
            <div className='text-white text-center relative'>
                <h1 className='text-4xl px-3 uppercase font-montserrat'>LĨNH VỰC HOẠT ĐỘNG</h1>
            </div>
            <div className='flex gap-8 pt-10 justify-center items-center lg:mx-auto sm:mx-auto'>
                <div className='relative group'>
                    <Link href='/home'>
                        <Image
                            src='/architecture.png'
                            alt='architecture'
                            width={500}
                            height={337}
                            className='justify-center items-center transition-transform duration-200 ease-in-out transform opacity-70 hover:opacity-100'
                        />
                        <h1 className='font-[600] text-[24px] text-[#fff] mt-[12px] text-center uppercase font-montserrat'>Diễn họa kiến trúc</h1>
                    </Link>
                </div>
                <div className='relative group'>
                    <Link href='/home'>
                        <Image
                            src='/sohoa.df0e2147.png'
                            alt='Số Hóa'
                            width={500}
                            height={337}
                            className='transition-transform duration-200 ease-in-out transform opacity-70 hover:opacity-100'
                        // đổi form scale-100 group-hover:scale-105 
                        />
                        <h1 className='font-[600] text-[24px] text-[#fff] mt-[12px] text-center font-montserrat uppercase'>Số hóa và công nghệ</h1>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FieldActivityComponent