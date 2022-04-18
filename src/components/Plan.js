import React from 'react'

const Plan = () => {
    return (
        <div className='font-Fraunces'>
            <div>
                {/* Hero START */}
                <div>
                    <h1>
                        Create a plan
                    </h1>
                    <div>
                        Build a subscription plan that best fits your needs. We offer an assortment of the best
                        artisan coffees from around the globe delivered fresh to your door.
                    </div>
                </div>

                {/* Hero END */}

                {/* Overview START */}
                <div className='bg-dark-grey-blue'>
                    <img></img>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8'>
                        <div className='m-8 p-4'>
                            <div className='mb-4 text-pale-orange text-6xl font-bold'>01</div>
                            <div className='mb-6 text-cream text-2xl font-bold'>Pick your coffee</div>
                            <div className='text-cream text-sm'>
                                Select from our evolving range of artisan coffees. Our beans    are ethically sourced and we pay fair prices for them. There's new coffees in all profiles every month for you to try out.
                            </div>
                        </div>
                        <div className='m-8 p-4'>
                            <div className='mb-4 text-pale-orange text-6xl font-bold'>02</div>
                            <div className='mb-6 text-cream text-2xl font-bold'>Choose the frequency</div>
                            <div className='text-cream text-sm'>
                                Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.
                            </div>
                        </div>
                        <div className='m-8 p-4'>
                            <div className='mb-4 text-pale-orange text-6xl font-bold'>03</div>
                            <div className='mb-6 text-cream text-2xl font-bold'>Receive and enjoy!</div>
                            <div className='text-cream text-sm'>
                                We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overview END */}


                {/* Order START */}

                01 Preferences
                02 Bean type
                03 Quantity
                04 Grind option
                05 Deliveries

                How do you drink your coffee?

                Capsule
                Compatible with Nespresso systems and similar brewers

                Filter
                For pour over or drip methods like Aeropress, Chemex, and V60

                Espresso
                Dense and finely ground beans for an intense, flavorful experience

                What type of coffee?

                Single origin
                Distinct, high quality coffee from a specific family-owned farm

                Decaf
                Just like regular coffee, except the caffeine has been removed

                Blended
                Combination of two or three dark roasted beans of organic coffees

                How much would you like?
                250g
                Perfect for the solo drinker. Yields about 12 delicious cups.

                500g
                Perfect option for a couple. Yields about 40 delectable cups.

                1000g
                Perfect for offices and events. Yields about 90 delightful cups.

                Want us to grind them?

                Wholebean
                Best choice if you cherish the full sensory experience

                Filter
                For drip or pour-over coffee methods such as V60 or Aeropress

                Cafetiére
                Course ground beans specially suited for french press coffee

                How often should we deliver?

                Every week
                $14.00 per shipment. Includes free first-class shipping.

                Every 2 weeks
                $17.25 per shipment. Includes free priority shipping.

                Every month
                $22.50 per shipment. Includes free priority shipping.

                {/* Order END */}

                {/* Summary START */}
                {/* use object literals here? */}

                Order Summary
                “I drink coffee _____, with a _____ type of bean. _____ ground ala _____,
                sent to me _____.”

                {/* Summary END */}
                <button>Create my plan!</button>

            </div>
        </div>
    )
}

export default Plan