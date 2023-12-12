import React, { useState } from 'react'

const NavBar = () => {

    const [open, setOpen] = useState(false)
    const [icon, setIcon] = useState('fa-solid fa-bars')
    const [visibility, setVisibility] = useState('hidden')

    const handleClick = () => {
        if (!open) {
            setOpen(true)
            setIcon('fa-solid fa-x')
            setVisibility('')
        }
        else {
            setOpen(false)
            setIcon('fa-solid fa-bars')
            setVisibility('hidden')
        }
    }

    const menuHide = () => {
        setVisibility('hidden')
        setIcon('fa-solid fa-bars')
        setOpen(false)
    }

    return (
        <>
            <header>
                <nav className="container flex justify-between items-center">
                    <div className='py-5 text-color-secondary font-bold text-3xl'>
                        <a href="#home">
                            <span className='text-color-white'>Light</span>Code.
                        </a>
                    </div>
                    <div>
                        <ul className='hidden lg:flex items-center space-x-6'>
                            <li><a href="#home" className='hyperlink'>Home</a></li>
                            <li><a href="#features" className='hyperlink'>Features</a></li>
                            <li><a href="#testimonial" className='hyperlink'>Testimonial</a></li>
                            <li><a href="#pricing" className='hyperlink'>Pricing</a></li>
                            <li><a href="#blog" className='hyperlink'>Blog</a></li>
                            <li><a href="#contact" className='hyperlink'>Contact</a></li>

                            <li><button className='btn'>Free trial</button></li>
                        </ul>
                    </div>

                    {/* Mobile screen */}
                    <div id="hamburger" className='lg:hidden cursor-pointer z-50' onClick={handleClick}>
                        <i className={icon}></i>
                    </div>

                    <div id="menu" className={`${visibility} bg-color-primary-dark h-[100vh] absolute inset-0 z-10`}>
                        <ul className='h-full grid place-items-center py-20'>
                            <li><a href="#home" className='hyperlink' onClick={menuHide}>Home</a></li>
                            <li><a href="#features" className='hyperlink' onClick={menuHide}>Features</a></li>
                            <li><a href="#testimonial" className='hyperlink' onClick={menuHide}>Testimonial</a></li>
                            <li><a href="#pricing" className='hyperlink' onClick={menuHide}>Pricing</a></li>
                            <li><a href="#blog" className='hyperlink' onClick={menuHide}>Blog</a></li>
                            <li><a href="#contact" className='hyperlink' onClick={menuHide}>Contact</a></li>

                            <li><button className='btn'>Free trial</button></li>
                        </ul>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default NavBar