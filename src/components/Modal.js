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
            <div>
                {/* <!-- Modal --> */}
                Order Summary

                “I drink coffee _____, with a _____ type of bean. _____ ground ala _____,
                sent to me _____.”

                Is this correct? You can proceed to checkout or go back to plan selection if something
                is off. Subscription discount codes can also be redeemed at the checkout.

                $_____/month

                Checkout

                <button onClick={handleClose}>GO BACK</button>
                {/* <!-- End modal --> */}
            </div>

        </div>
    )
}
