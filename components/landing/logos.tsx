'use client'

const Logos = () => {
    return (
        <section className='py-32'>
            <div className='container flex flex-col items-center text-center'>
                <h1 className='my-6 text-pretty text-2xl font-bold lg:text-4xl'>
                    Used by students at these institutions
                </h1>
            </div>
            <div className='pt-4 md:pt-8 lg:pt-12'>
                <div className='relative mx-auto flex flex-row items-center gap-12 justify-center lg:max-w-5xl'>
                    <img src="../../images/utd.svg" alt="UTDallas Logo" className="h-24 w-auto" />
                    <img src="../../images/unt.svg" alt="UNT Logo" className="h-24 w-auto" />
                </div>
            </div>
        </section>
    )
}

export default Logos
