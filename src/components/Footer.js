import fb from '../starter-code/assets/shared/desktop/icon-facebook.svg';
import ig from '../starter-code/assets/shared/desktop/icon-instagram.svg';
import tw from '../starter-code/assets/shared/desktop/icon-twitter.svg';
import logo from '../starter-code/assets/shared/desktop/logo.svg';

const Footer = () => {
    return (
        <div className=''>
            <div className='md:w-[1280px] md:h-[120px] bg-dark-grey-blue mx-auto'>
                <div className='flex justify-around pt-12'>
                    <div className=''>
                        <img src={logo} alt="coffeeroasters logo with 2 coffee beans" className='text-white' />
                    </div>

                    <div className='flex gap-10 uppercase text-xs text-grey font-semibold font-Barlow'>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Create your plan</p>
                    </div>
                    <div className='flex gap-8'>
                        <img src={fb} alt="facebook square f icon" />
                        <img src={tw} alt="twitter bird icon" />
                        <img src={ig} alt="instagram camera icon" />

                    </div>
                </div>


            </div>
            <div className='h-32'>

            </div>
        </div>

    )
}

export default Footer