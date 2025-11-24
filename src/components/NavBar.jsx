import React from 'react'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

import { assets } from '../assets/assets'
const NavBar = () => {

    const { openSignIn } = useClerk();
    const { user } = useUser();
    return (
        <div className="shadow py-4">
            <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
                <img src={assets.logo} alt="logo" />
                {
                    user ? <div className='flex items-center gap-4'>
                        <Link to ={'application'}>Applied Jobs</Link>
                        <p>|</p>
                        <p>Hello, {user.firstName}</p>
                        <UserButton />
                    </div> : <div className='flex gap-6 items-center'>
                        <button className='text-grey-600'>Recruiter Login</button>
                        <button onClick={e => openSignIn()} className='bg-blue-600 text-white sm:px-9 py-2 rounded-full'>Login</button>
                    </div>}

            </div>
        </div>
    )
}

export default NavBar
