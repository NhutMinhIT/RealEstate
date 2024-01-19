import Image from 'next/image';
import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';
import { usePathname, useRouter } from 'next/navigation'
import React from 'react';

const MenuComponent = () => {

    return (
        <div className='bg-[#212529] z-10 '>
            <nav className='flex items-center justify-center py-6'>
                <div className='mr-auto'>
                    <Link href='/introduction'>
                        <Image
                            className='mx-[100px] top-0 left-0 '
                            src='/logo.png'
                            alt='logo'
                            width={150}
                            height={33}
                        />
                    </Link>
                </div>
                <div className='text-white font-[500]'>
                    <ul className='flex mr-28 group'>
                        <li className=''>
                            <Link className='transition-border hover:border-b-4 hover:bg-white hover:bg-opacity-30 focus:border-b-4 focus:bg-white focus:bg-opacity-30 pb-[26px] pt-[26px] px-4' href='/introduction'>3DART</Link>
                        </li>
                        <li className=''>
                            <Link href='/home' className='transition-border hover:border-b-4 hover:bg-white hover:bg-opacity-30 focus:border-b-4 focus:bg-white focus:bg-opacity-30 pb-[26px] pt-[26px] px-4'>Trang chủ</Link>
                        </li>
                        <li className=''>
                            <Link href='/investor' className='transition-border hover:border-b-4 hover:bg-white hover:bg-opacity-30 focus:border-b-4 focus:bg-white focus:bg-opacity-30 pb-[26px] pt-[26px] px-4'>Chủ đầu tư</Link>
                        </li>
                        <li className=''>
                            <Link href='#' className='transition-border hover:border-b-4 hover:bg-white hover:bg-opacity-30 focus:border-b-4 focus:bg-white focus:bg-opacity-30 pb-[26px] pt-[26px] px-4'>Sa bàn ảo</Link>
                        </li>
                        <li className=''>
                            <Link href='#' className='transition-border hover:border-b-4 hover:bg-white hover:bg-opacity-30 focus:border-b-4 focus:bg-white focus:bg-opacity-30 pb-[26px] pt-[26px] px-4'>Thông tin</Link>
                        </li>
                        <li className=''>
                            <Link href='#' className='transition-border hover:border-b-4 hover:bg-white hover:bg-opacity-30 focus:border-b-4 focus:bg-white focus:bg-opacity-30 pb-[26px] pt-[26px] px-4'>Tin tức</Link>
                        </li>
                        <li className=''>
                            <Link href='#' className='transition-border hover:border-b-4 hover:bg-white hover:bg-opacity-30 focus:border-b-4 focus:bg-white focus:bg-opacity-30 pb-[26px] pt-[26px] px-4'>Liên hệ</Link>
                        </li>
                    </ul>
                </div>
                <div className='ml-auto flex items-center relative'>
                    <input type='text' placeholder='Tìm kiếm dự án' className='h-8 rounded-md mr-14 px-4 font text-lg bg-[#464646ef] text-white' />
                    <IoIosSearch
                        className='
                        absolute right-16 top-1/2 
                        transform -translate-y-1/2 cursor-pointer
                        w-[40px] h-[24px] text-white font-bold'
                    />
                </div>
            </nav>
        </div>
    );
};

export default MenuComponent;
