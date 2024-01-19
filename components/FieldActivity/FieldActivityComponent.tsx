import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FieldActivityComponent = () => {
    return (
        <section className='sm:h-full sm:w-full'>
            <div className='text-white text-center relative'>
                <h1 className='text-4xl px-3 uppercase'>LĨNH VỰC HOẠT ĐỘNG</h1>
            </div>
            <div className='flex gap-8 pt-10 w-screen h-screen justify-center'>
                <div className='relative group'>
                    <Link href='/home'>
                        <Image
                            src='/architecture.png'
                            alt='architecture'
                            width={500}
                            height={337}
                            className='transition-transform duration-200 ease-in-out transform scale-100 group-hover:scale-105 opacity-70 hover:opacity-100'
                        />
                    </Link>
                </div>
                <div className='relative group'>
                    <Link href='/home'>
                        <Image
                            src='/sohoa.df0e2147.png'
                            alt='Số Hóa'
                            width={500}
                            height={337}
                            className='transition-transform duration-200 ease-in-out transform scale-100 group-hover:scale-105 opacity-70 hover:opacity-100'
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FieldActivityComponent