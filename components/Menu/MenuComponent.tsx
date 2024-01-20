"use client"

import Image from 'next/image';
import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';
import React, { useState } from 'react';
import {
    BsListUl,
    BsX,
    BsGlobe,
    BsHouse,
    BsBuilding,
    BsFillBuildingsFill,
    BsInfoSquare,
    BsNewspaper,
    BsPersonRolodex
} from "react-icons/bs";
const MenuComponent = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='bg-[#212529] z-10 w-full shadow-xl'>
            <nav className='flex items-center justify-center py-6 h-full w-full'>
                <div className='mr-auto sm:flex'>
                    <Link href='/introduction'>
                        <Image
                            className='mx-[100px] top-0 left-0'
                            src='/logo.png'
                            alt='logo'
                            width={150}
                            height={33}
                        />
                    </Link>
                </div>
                <div className='text-white font-[500] hidden sm:flex'>
                    <ul className='mr-28 group hidden sm:flex'>
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
                <div className='ml-auto items-center relative hidden sm:flex'>
                    <input type='text' placeholder='Tìm kiếm dự án' className='h-8 rounded-md mr-14 px-4 font text-lg bg-[#464646ef] text-white' />
                    <IoIosSearch
                        className='                        
                        absolute right-16 top-1/2 
                        transform -translate-y-1/2 cursor-pointer
                        w-[40px] h-[24px] text-white font-bold'
                    />
                </div>
                {/* Menu Mobile */}
                <div
                    onClick={toggleMenu}
                    className='sm:hidden cursor-pointer pr-[24px]'>
                    <BsListUl
                        className='h-8 w-8 text-[#ffffff]'

                    />
                </div>
                <div className={isMenuOpen ?
                    " fixed top-0 left-0 w-[70%] h-[100%] sm:hidden p-2 mt-2 ease-in-out duration-500 bg-[#1e2132] z-10 shadow-xl"
                    : "fixed right-[100%] top-0 p-10 duration-500"}
                >
                    <div className='flex w-full items-center justify-between'>
                        <div className=''>
                            <Link href='/introduction'>
                                <Image
                                    className='top-0 left-0 '
                                    src='/logo.png'
                                    alt='logo'
                                    width={150}
                                    height={33}
                                />
                            </Link>
                        </div>
                        <div
                            className='cursor-pointer'
                            onClick={toggleMenu}
                        >
                            <BsX className='h-8 w-8 text-[#ffffff]'
                            />
                        </div>
                    </div>
                    {/* Menu Mobile Search  */}
                    <div className='ml-auto items-center relative'>
                        <input type='text' placeholder='Tìm kiếm dự án' className='h-6 rounded-md px-5 mx-2 my-5 font-[300] text-sm bg-[#2a2c38] text-white' />
                        <IoIosSearch
                            className='                        
                        absolute right-6 top-1/2 
                        transform -translate-y-1/2 cursor-pointer
                        w-[20px] h-[24px] text-white font-bold'
                        />
                    </div>
                    {/* Mobile Menu Link */}
                    <div className='text-white font-[250]'>
                        <ul className='mr-28 group justify-between'>
                            <li
                                className='py-4 pr-auto flex'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <BsGlobe
                                    className='h-6 w-5 text-white font-[400]'
                                />
                                <Link className='px-4' href='/introduction'>3DART</Link>
                            </li>
                            <li
                                className='py-4 flex items-center'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <BsHouse
                                    className='h-6 w-5 text-white font-[400]'
                                />
                                <Link href='/home' className='px-4'>Trang chủ</Link>
                            </li>
                            <li
                                className='py-4 flex items-center'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <BsBuilding
                                    className='h-6 w-5 text-white font-[400]'
                                />
                                <Link href='/investor' className='px-4'>Chủ đầu tư</Link>
                            </li>
                            <li
                                className='py-4 flex items-center'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <BsFillBuildingsFill
                                    className='h-6 w-5 text-white font-[400]'
                                />
                                <Link href='#' className='px-4'>Sa bàn ảo</Link>
                            </li>
                            <li
                                className='py-4 items-center flex'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <BsInfoSquare
                                    className='h-6 w-5 text-white font-[400]'
                                />
                                <Link href='#' className='px-4'>Thông tin</Link>
                            </li>
                            <li
                                className='py-4 items-center flex'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <BsNewspaper
                                    className='h-6 w-5 text-white font-[400]'
                                />
                                <Link href='#' className='px-4'>Tin tức</Link>
                            </li>
                            <li
                                className='py-4 items-center flex'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <BsPersonRolodex
                                    className='w-5 h-6 font-[400] text-white'
                                />
                                <Link href='#' className='px-4'>Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default MenuComponent;
