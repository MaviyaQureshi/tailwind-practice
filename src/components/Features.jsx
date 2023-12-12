import React from 'react'

const Features = () => {
    return (
        <>
            <section className="bg-color-primary-light">
                <div className="container py-20">
                    <div className='text-center m-auto mb-20 md:w-1/3'>
                        <h4 className='font-bold text-color-secondary mb-4'>Our Future</h4>
                        <h1 className='title'>Easy to Manage All Your Payments By Our App</h1>
                    </div>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8'>
                        {/* Card No.1 */}
                        <div className='border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200'>
                            <div className='bg-color-secondary inline-block rounded-2xl py-5 px-6'>
                                <i className="fa-solid fa-calendar-days text-4xl"></i>
                            </div>
                            <h3 className='text-xl font-bold py-4'>Expense Tracking</h3>
                            <p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>
                        </div>
                        {/* Card No.2 */}
                        <div className='bg-color-primary-dark border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-light ease-in duration-200'>
                            <div className='bg-color-secondary inline-block rounded-2xl py-5 px-6'>
                                <i className="fa-solid fa-chart-column text-4xl"></i>
                            </div>
                            <h3 className='text-xl font-bold py-4'>Finance Snapshot</h3>
                            <p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>
                        </div>
                        {/* Card No.3 */}
                        <div className='border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200'>
                            <div className='bg-color-secondary inline-block rounded-2xl py-5 px-6'>
                                <i className="fa-solid fa-phone text-4xl"></i>
                            </div>
                            <h3 className='text-xl font-bold py-4'>Support 24/7</h3>
                            <p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Features