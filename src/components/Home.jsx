import React from 'react'
import hero4 from "../images/hero4.png"

const Home = () => {
    return (
        <>
            <section className='relative'>

                <div className="w-80 h-80 bg-color-blob absolute top-10 -left-5 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
                <div className="w-80 h-80 bg-color-secondary absolute bottom-10 right-0 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
                <div className="container py-10">
                    <div className='flex flex-col items-center md:flex-row'>

                        <div className='text-center mb-12 md:text-left md:w-1/2 md:pr-10'>
                            <h1 className='title mb-4'>Awesome App for Your Financial</h1>
                            <p className='leading-relaxed mb-10'>This should be used to tell a story and let your users know a little more about app and it's use, How can it benefit them.</p>
                            <button className='btn'>Download app</button>
                        </div>

                        <div className='md:w-1/2'>
                            <img src={hero4} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home