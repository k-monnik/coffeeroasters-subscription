import coffeeCup from '../starter-code/assets/about/desktop/image-hero-whitecup.jpg';
import barista from '../starter-code/assets/about/desktop/image-commitment.jpg';
import latte from '../starter-code/assets/about/desktop/image-quality.jpg';

const About = () => {
    return (
        <div className='w-full bg-cream'>

            {/* HERO IMAGE START */}

            <div className='container relative'>
                <img src={coffeeCup} alt='white coffee cup with frothy mocha on a saucer set on a dark wooden background' className='mx-auto flex justify-center object-cover w-[1280px] h-[450px] rounded-xl shadow-2xl' />
                <div className='absolute inset-y-24 pl-48 text-white'>
                    <h1 className='text-5xl font-Fraunces font-bold'>About Us</h1>
                    <p className='mt-8 font-light text-cream w-[445px] h-[104px]'>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew- in every shipment.</p>
                </div>

            </div>

            {/* HERO IMAGE END */}

            {/* OUR COMMITMENT START */}

            <div className='flex w-[1280px] mt-32 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6 justify-center w-[1110px] h-[520px]'>
                    <img src={barista} alt="young man with a moustache and silver nose ring, wearing a dark baseball cap, white t-shirt, and tan apron is creating a design in the foam of a small cup of espresso behing a counter" className='rounded-lg' />


                    <div>
                        <h1 className='font-Fraunces text-4xl text-dark-grey-blue font-extrabold mb-8 mt-20'>Our commitment</h1>
                        <p className='font-Barlow font-light text-dark-grey-blue w-[540px] h-260px] pr-2'>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
                    </div>
                </div>

            </div>

            {/* OUR COMMITMENT END */}

            {/* UNCOMPROMISING QUALITY START */}

            <div className='w-[1280px] h-[474px] bg-dark-grey-blue rounded-xl my-44 mx-auto'>
                <div className='object-center align-center py-24'>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className=''>
                            <h1 className='font-Fraunces font-bold text-4xl text-wheat flex pl-16 mb-8'>Uncompromising quality</h1>
                            <p className='font-Barlow font-thin text-wheat flex text-left w-[540px] align-middle mx-auto pl-4'>
                                Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
                                consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                            </p>
                        </div>
                        <img src={latte} alt="White coffee cup filled with coffee and heart design in latte foam with person's hand on the cup handle. The cup is sitting on a dark wooden counter with a small copper pitcher and white dishes in the background." className='rounded-lg -mt-48 ml-16' />
                    </div>

                </div>
            </div>

            <p>








                Our headquarters

                United Kingdom
                68 Asfordby Rd
                Alcaston
                SY6 1YA
                +44 1241 918425

                Canada
                1528 Eglinton Avenue
                Toronto
                Ontario M4P 1A6
                +1 416 485 2997

                Australia
                36 Swanston Street
                Kewell
                Victoria
                +61 4 9928 3629
            </p>
        </div>
    )
}

export default About