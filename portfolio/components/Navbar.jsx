import React from 'react'

const Navbar = () => {
    return(
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-between items-centre w-full h-full px-2 2xl:px-16">
                <Link href='/'>
                    <a>
                       <Image
                          src={NavLogo}
                          alt='/'
                          width='125'
                          height='50'
                          className='cursor-pointer'
                        />
                    </a>
                </Link>
            </div>
        </div>
    )
}
export default Navbar