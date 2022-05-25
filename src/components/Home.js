import React from 'react'
import hero from '../starter-code/assets/home/desktop/image-hero-coffeepress.jpg';
import gran from '../starter-code/assets/home/desktop/image-gran-espresso.png';
import planalto from '../starter-code/assets/home/desktop/image-planalto.png';
import piccollo from '../starter-code/assets/home/desktop/image-piccollo.png';
import danche from '../starter-code/assets/home/desktop/image-danche.png';
import bean from '../starter-code/assets/home/desktop/icon-coffee-bean.svg';
import gift from '../starter-code/assets/home/desktop/icon-gift.svg';
import truck from '../starter-code/assets/home/desktop/icon-truck.svg';
import oval from '../starter-code/assets/home/desktop/oval.svg';
import line from '../starter-code/assets/home/desktop/Path.png';

const Home = () => {
    return (
        <div className='w-full'>
            {/* HERO IMAGE START */}
            <div className='container relative'>
                <img src={hero} alt='french coffee press set on a dark background with a small clear glass and a small pile of whole espresso beans in the foreground of the right corner ' className='mx-auto block object-cover w-[1280px] h-[600px] rounded-xl shadow-2xl' />
                <div className='absolute inset-y-24 inset-x-52 text-white'>
                    <h1 className='text-7xl font-Fraunces font-bold'>Great coffee<br></br> made simple.</h1>
                    <p className='mt-8 font-thin text-cream/80'>Start your mornings with the world’s best coffees. Try our <br></br>  expertly curated artisan coffees from our best roasters <br></br> delivered directly to your door, at your schedule.</p>
                    <button className='my-14 bg-dark-cyan px-8 py-3 rounded-md text-lg font-Fraunces font-bold'>Create your plan</button>
                </div>

            </div>

            {/* HERO IMAGE END */}

            {/* OUR COLLECTION START */}

            <div className='mt-64 text-3xl md:text-6xl lg:text-10xl font-Fraunces
                font-black flex justify-center text-transparent bg-clip-text bg-gradient-to-b from-grey/70 to-white'>
                our collection
            </div>

            <div className='flex justify-center -mt-[90px]'>

                <div className='grid grid-flow-col grid-cols-4 gap-x-6'>
                    <div className='mx-auto w-64 h-96'>
                        <img src={gran} alt='gran espresso product, tan bag with teal label' className='mb-20' />
                        <div className='font-bold font-Fraunces text-dark-grey-blue text-2xl text-center'>Gran Espresso</div>
                        <div className='font-Barlow text-dark-grey-blue font-light text-center'>Light and flavorful blend with cocoa and black pepper for an intense experience</div>

                    </div>
                    <div className='mx-auto w-64 h-96'>
                        <img src={planalto} alt='planalto product, tan bag with olive green label' className='mb-20' />
                        <div className='font-bold font-Fraunces text-dark-grey-blue text-2xl text-center'>Planalto</div>
                        <div className='font-Barlow text-dark-grey-blue font-light text-center'>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</div>

                    </div>
                    <div className='mx-auto w-64 h-96'>
                        <img src={piccollo} alt='piccollo product, tan bag with brown label' className='mb-20' />
                        <div className='font-bold font-Fraunces text-dark-grey-blue text-2xl text-center'>Piccollo</div>
                        <div className='font-Barlow text-dark-grey-blue font-light text-center'>Mild and smooth blend featuring notes of toasted almond and dried cherry</div>

                    </div>
                    <div className='mx-auto w-64 h-96'>
                        <img src={danche} alt='piccollo product, tan bag with red label' className='mb-20' />
                        <div className='font-bold font-Fraunces text-dark-grey-blue text-2xl text-center'>Danche</div>
                        <div className='font-Barlow text-dark-grey-blue font-light text-center'>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</div>

                    </div>
                </div>
            </div>

            {/* OUR COLLECTION END */}

            {/* WHY CHOOSE US START */}

            <div className='w-[1280px] h-[577px] bg-dark-grey-blue rounded-xl my-44 mx-auto'>
                <div className='object-center align-center py-24'>
                    <h1 className='font-Fraunces font-bold text-4xl text-wheat flex justify-center mb-8'>Why choose us?</h1>
                    <p className='font-Barlow font-light text-wheat flex justify-center text-center w-[540px] align-middle mx-auto'>
                        A large part of our role is choosing which particular coffees will be featured
                        in our range. This means working closely with the best coffee growers to give
                        you a more impactful experience on every level.
                    </p>
                </div>
            </div>

            <div className='flex justify-center mx-auto w-[1110px] -mt-[410px]'>

                <div className='grid grid-flow-col grid-cols-3 gap-x-8'>
                    <div className='mx-auto w-[350px] h-[382px] bg-dark-cyan rounded-lg'>
                        <img src={bean} alt='coffee bean icon' className='mx-auto pt-20 pb-12' />
                        <div className='font-bold font-Fraunces text-cream text-2xl text-center pb-6'>Best quality</div>
                        <div className='font-Barlow text-cream font-thin text-center px-14 '>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</div>

                    </div>
                    <div className='mx-auto [350px] h-[382px] bg-dark-cyan rounded-lg'>
                        <img src={gift} alt='gift icon' className='mx-auto pt-20 pb-12' />
                        <div className='font-bold font-Fraunces text-cream text-2xl text-center pb-6'>Exclusive benefits</div>
                        <div className='font-Barlow text-cream font-thin text-center px-14'>Special offers and swag when you subscribe, including 30% off your first shipment.</div>

                    </div>
                    <div className='mx-auto [350px] h-[382px] bg-dark-cyan rounded-lg'>
                        <img src={truck} alt='delivery truck icon' className='mx-auto pt-24 pb-12' />
                        <div className='font-bold font-Fraunces text-cream text-2xl text-center pb-6'>Free shipping</div>
                        <div className='font-Barlow text-cream font-thin text-center px-14'>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</div>

                    </div>
                </div>
            </div>

            {/* WHY CHOOSE US END */}

            {/* HOW IT WORKS START */}

            <div className='md:w-[1045px] md:h-[565px] mx-auto mb-24'>
                <h1 className='font-Fraunces font-bold text-grey text-2xl my-24'>How it works</h1>
                <div className='my-12'>
                    <img src={line} alt="thin peach horizontal line" className='mt-16' />
                    <div className='flex gap-[340px] -mt-4'>
                        <img src={oval} alt="teal circle icon" />
                        <img src={oval} alt="teal circle icon" />
                        <img src={oval} alt="teal circle icon" />
                    </div>
                </div>

                <div className='mb-8'>
                    <div className='grid grid-flow-col grid-cols-3 gap-x-8'>
                        <div className='w-[285px] h-[355px]'>
                            <h1 className='font-black font-Fraunces text-pale-orange text-6xl pb-8'>01</h1>
                            <div className='font-bold font-Fraunces text-dark-grey-blue text-4xl leading-10 pb-14'>Pick your coffee</div>
                            <div className='font-Barlow text-dark-grey-blue font-light'>Select from our evolving range of artisan coffees. Our beans are ethically
                                sourced and we pay fair prices for them. There are new coffees in all profiles
                                every month for you to try out.</div>

                        </div>
                        <div className='w-[285px] h-[355px]'>
                            <h1 className='font-black font-Fraunces text-pale-orange text-6xl pb-8'>02</h1>
                            <div className='font-bold font-Fraunces text-dark-grey-blue text-4xl  leading-10 pb-14'>Choose the frequency</div>
                            <div className='font-Barlow text-dark-grey-blue font-light'>Customize your order frequency, quantity, even your roast style and grind type.
                                Pause, skip or cancel your subscription with no commitment through our online portal.</div>

                        </div>
                        <div className='w-[285px] h-[355px]'>
                            <h1 className='font-black font-Fraunces text-pale-orange text-6xl pb-8'>03</h1>
                            <div className='font-bold font-Fraunces text-dark-grey-blue text-4xl leading-10 pb-14'>Receive and enjoy!</div>
                            <div className='font-Barlow text-dark-grey-blue font-light'>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
                                world-class coffees curated to provide a distinct tasting experience.</div>

                        </div>
                    </div>
                </div>
                <button className='my-14 bg-dark-cyan px-8 py-3 rounded-md text-lg text-white font-Fraunces font-bold'>Create your plan</button>
            </div>



            {/* HOW IT WORKS END */}



        </div>
    )
}

export default Home