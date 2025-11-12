import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { AppContext } from '../context/AppContext'

const Dashboard = () => {
    const { userData } = useContext(AppContext);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
            <Navbar />
            
            <div className='w-full max-w-4xl mx-auto px-6 mt-20'>
                {/* Welcome Section */}
                <div className='bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-6'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-2'>
                        Welcome, {userData ? userData.name : 'User'}!
                    </h1>
                    <p className='text-gray-600 text-lg'>
                        You have successfully authenticated and logged into your account.
                    </p>
                </div>

                {/* Links Section */}
                <div className='grid md:grid-cols-2 gap-6'>
                    {/* Portfolio Website Card */}
                    <div className='bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white hover:scale-105 transition-transform duration-300'>
                        <div className='mb-4'>
                            <svg className='w-12 h-12 mb-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
                            </svg>
                            <h2 className='text-2xl font-bold mb-2'>My Portfolio</h2>
                            <p className='text-indigo-100 mb-6'>
                                Visit my personal portfolio website to learn more about my work and projects.
                            </p>
                        </div>
                        <a 
                            href='https://harshdinodia.me' 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors'
                        >
                            Visit Portfolio
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                            </svg>
                        </a>
                    </div>

                    {/* Trendzee Project Card */}
                    <div className='bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl shadow-xl p-8 text-white hover:scale-105 transition-transform duration-300'>
                        <div className='mb-4'>
                            <svg className='w-12 h-12 mb-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
                            </svg>
                            <h2 className='text-2xl font-bold mb-2'>Trendzee</h2>
                            <p className='text-rose-100 mb-6'>
                                Check out my latest project - Trendzee. An awesome web application with amazing features.
                            </p>
                        </div>
                        <a 
                            href='https://trendzee-brown.vercel.app/index.html' 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors'
                        >
                            Visit Trendzee
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Account Info Section */}
                {userData && (
                    <div className='bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mt-6'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Account Information</h2>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-indigo-100 p-2 rounded-lg'>
                                    <svg className='w-5 h-5 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                                    </svg>
                                </div>
                                <div>
                                    <p className='text-sm text-gray-500'>Name</p>
                                    <p className='text-lg font-semibold text-gray-800'>{userData.name}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='bg-purple-100 p-2 rounded-lg'>
                                    <svg className='w-5 h-5 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                    </svg>
                                </div>
                                <div>
                                    <p className='text-sm text-gray-500'>Email</p>
                                    <p className='text-lg font-semibold text-gray-800'>{userData.email}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className={`${userData.isAccountVerified ? 'bg-green-100' : 'bg-yellow-100'} p-2 rounded-lg`}>
                                    <svg className={`w-5 h-5 ${userData.isAccountVerified ? 'text-green-600' : 'text-yellow-600'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                                    </svg>
                                </div>
                                <div>
                                    <p className='text-sm text-gray-500'>Account Status</p>
                                    <p className={`text-lg font-semibold ${userData.isAccountVerified ? 'text-green-600' : 'text-yellow-600'}`}>
                                        {userData.isAccountVerified ? 'Verified' : 'Not Verified'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dashboard
