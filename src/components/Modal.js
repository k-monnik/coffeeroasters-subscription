import React from 'react'

export default function Modal({ visible, onClose }) {
    const handleClose = () => {
        onClose();
    }


    if (!visible) return null;
    return (
        <div
            onClick={handleClose}
            className='fixed inset-0 bg-dark-grey-blue bg-opacity-70 flex justify-center items-center'>
            <div className='bg-wheat w-[540px] h-[597px] rounded-lg'>
                <div className='bg-dark-grey-blue px-16 py-8 font-black font-Fraunces text-4xl text-white rounded-t-lg'>
                    Order Summary
                </div>
                <div className='font-Fraunces font-bold text-grey text-2xl px-16 pt-14'>
                    “I drink my coffee as <strong className='text-dark-cyan'>Filter</strong>, with a <strong className='text-dark-cyan'>Decaf</strong> type of bean. <strong className='text-dark-cyan'>250g</strong> ground ala <strong className='text-dark-cyan'>Cafetiére</strong>,
                    sent to me <strong className='text-dark-cyan'>Every Week</strong>.”
                </div>
                <div className='text-base font-Barlow font-light text-dark-grey-blue px-16 py-4 leading-relaxed'>
                    Is this correct? You can proceed to checkout or go back to plan selection if something
                    is off. Subscription discount codes can also be redeemed at the checkout.
                </div>
                <div className='flex px-14 flex-row gap-4 py-8'>
                    <div className='font-black font-Fraunces text-4xl text-dark-grey-blue'>
                        $14.00/mo
                    </div>
                    <button onClick={handleClose} className='bg-dark-cyan px-16 py-3 rounded-md text-xl font-Fraunces font-bold text-white'>Checkout</button>
                </div>
            </div>

        </div>
    )
}
