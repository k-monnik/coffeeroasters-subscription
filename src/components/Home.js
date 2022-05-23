import React from 'react'
import hero from '../starter-code/assets/home/desktop/image-hero-coffeepress.jpg';

const Home = () => {
    return (
        <div>
            <div className='container relative'>
                <img src={hero} alt='french coffee press set on a dark background with a small clear glass and a small pile of whole espresso beans in the foreground of the right corner ' className='mx-auto block object-cover max-w-7xl h-3/4 rounded-xl shadow-2xl' />
                <div className='absolute inset-y-24 inset-x-52 text-white'>
                    <h1 className='text-7xl font-Fraunces font-bold'>Great coffee<br></br> made simple.</h1>
                    <p className='mt-8 font-thin text-cream/80'>Start your mornings with the world’s best coffees. Try our <br></br>  expertly curated artisan coffees from our best roasters <br></br> delivered directly to your door, at your schedule.</p>
                    <button className='my-14 bg-dark-cyan px-8 py-3 rounded-md text-lg font-Fraunces font-bold'>Create your plan</button>
                </div>

            </div>

            <p>






                Our collection

                Gran Espresso
                Light and flavorful blend with cocoa and black pepper for an intense experience

                Planalto
                Brazilian dark roast with rich and velvety body, and hints of fruits and nuts

                Piccollo
                Mild and smooth blend featuring notes of toasted almond and dried cherry

                Danche
                Ethiopian hand-harvested blend densely packed with vibrant fruit notes

                Why choose us?

                A large part of our role is choosing which particular coffees will be featured
                in our range. This means working closely with the best coffee growers to give
                you a more impactful experience on every level.

                Best quality
                Discover an endless variety of the world’s best artisan coffee from each of our roasters.

                Exclusive benefits
                Special offers and swag when you subscribe, including 30% off your first shipment.

                Free shipping
                We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.

                How it works

                01
                Pick your coffee
                Select from our evolving range of artisan coffees. Our beans are ethically
                sourced and we pay fair prices for them. There are new coffees in all profiles
                every month for you to try out.

                02
                Choose the frequency
                Customize your order frequency, quantity, even your roast style and grind type.
                Pause, skip or cancel your subscription with no commitment through our online portal.

                03
                Receive and enjoy!
                We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
                world-class coffees curated to provide a distinct tasting experience.

                Create your plan
            </p>
        </div>
    )
}

export default Home