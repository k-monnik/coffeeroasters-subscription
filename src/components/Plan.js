import { useState } from "react";

const Plan = () => {
    const [show, setShow] = useState(false);

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

                <div>
                    <div>
                        <div>
                            <div>01</div>
                            <div>Preferences</div>
                        </div>
                        <div>
                            <div>02</div>
                            <div>Bean type</div>
                        </div>
                        <div>
                            <div>03</div>
                            <div>Quantity</div>
                        </div>
                        <div>
                            <div>04</div>
                            <div>Grind option</div>
                        </div>
                        <div>
                            <div>05</div>
                            <div>Deliveries</div>
                        </div>
                    </div>

                    <div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-2 font-Barlow'>
                            <div className='px-2'>
                                <div className='flex justify-between mx-14'>
                                    <h1 className='text-grey text-4xl font-Fraunces font-bold'>How do you drink your coffee?</h1>
                                    <button onClick={() => setShow(!show)}>Hide</button>
                                </div>
                                {
                                    show
                                        ?
                                        <div className='md:flex md:px-2'>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>Capsule</h2>
                                                <div className='text-base px-6'>Compatible with Nespresso systems and similar brewers</div>
                                            </div>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>Filter</h2>
                                                <div className='text-base px-6'>For pour over or drip methods like Aeropress, Chemex, and V60</div>
                                            </div>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>Espresso</h2>
                                                <div className='text-base px-6'>Dense and finely ground beans for an intense, flavorful experience</div>
                                            </div>
                                        </div>
                                        : null
                                }
                            </div>
                            <div>
                                <div className='flex justify-between mx-14'>
                                    <h1 className='text-grey text-4xl font-Fraunces font-bold'>What type of coffee?</h1>
                                    <button onClick={() => setShow(!show)}>Hide</button>
                                </div>
                                {
                                    show
                                        ?
                                        <div className='md:flex gap-6'>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>Single origin</h2>
                                                <div className='text-base px-6'>Distinct, high quality coffee from a specific family-owned farm</div>
                                            </div>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>Decaf</h2>
                                                <div className='text-base px-6'>Just like regular coffee, except the caffeine has been removed</div>
                                            </div>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>Blended</h2>
                                                <div className='text-base px-6'>Combination of two or three dark roasted beans of organic coffees</div>
                                            </div>
                                        </div>
                                        : null
                                }
                            </div>
                            <div>
                                <div className='flex justify-between mx-14'>
                                    <h1 className='text-grey text-4xl font-Fraunces font-bold'>How much would you like?</h1>
                                    <button onClick={() => setShow(!show)}>Hide</button>
                                </div>
                                {
                                    show
                                        ?
                                        <div className='md:flex gap-6'>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>250g</h2>
                                                <div className='text-base px-6'>Perfect for the solo drinker. Yields about 12 delicious cups</div>
                                            </div>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>500g</h2>
                                                <div className='text-base px-6'>Perfect option for a couple. Yields about 40 delectable cups</div>
                                            </div>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>1000g</h2>
                                                <div className='text-base px-6'>Perfect for offices and events. Yields about 90 delightful cups</div>
                                            </div>
                                        </div>
                                        : null
                                }
                            </div>
                            <div>
                                <div className='flex justify-between mx-14'>
                                    <h1 className='text-grey text-4xl font-Fraunces font-bold'>Want us to grind them?</h1>
                                    <button onClick={() => setShow(!show)}>Hide</button>
                                </div>
                                {
                                    show
                                        ?
                                        <div className='md:flex gap-6'>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>Wholebean</h2>
                                                <div className='text-base px-6'>Best choice if you cherish the full sensory experience</div>
                                            </div>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>Filter</h2>
                                                <div className='text-base px-6'>For drip or pour-over coffee methods such as V60 or Aeropress</div>
                                            </div>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>Cafetiére</h2>
                                                <div className='text-base px-6'>Course ground beans specially suited for french press coffee</div>
                                            </div>
                                        </div>
                                        : null
                                }
                            </div>
                            <div>
                                <div className='flex justify-between mx-14'>
                                    <h1 className='text-grey text-4xl font-Fraunces font-bold'>How often should we deliver?</h1>
                                    <button onClick={() => setShow(!show)}>Hide</button>
                                </div>
                                {
                                    show
                                        ?
                                        <div className='md:flex gap-6'>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>Every week</h2>
                                                <div className='text-base px-6'>$14.00 per shipment. Includes free first-class shipping.</div>
                                            </div>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>Every 2 weeks</h2>
                                                <div className='text-base px-6'>$17.25 per shipment. Includes free priority shipping.</div>
                                            </div>
                                            <div className='bg-wheat text-dark-grey-blue w-60 h-56 m-8'>
                                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>Every month</h2>
                                                <div className='text-base px-6'>$22.50 per shipment. Includes free priority shipping.</div>
                                            </div>
                                        </div>
                                        : null
                                }
                            </div>

                        </div>

                        {/* Order END */}

                        {/* Summary START */}
                        {/* use template literals here? */}
                        <div>
                            <div>Order Summary</div>
                            <div>
                                `I drink coffee ${ }, with a ${ } type of bean, ${ } ground ala ${ },
                                sent to me ${ }.`
                            </div>
                        </div>

                        {/* Summary END */}
                        <button>Create my plan!</button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Plan