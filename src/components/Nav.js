
import { Link } from 'react-router-dom';
import logoNavy from '../starter-code/assets/shared/desktop/logo-navy.svg';

const Nav = () => {
    return (
        <>
            <nav className="top-0 cursor-pointer flex flex-row justify-between bg-cream text-dark-grey-blue mb-8">

                {/* <div className='px-6 mt-2 text-2xl md:hidden' onClick={toggle}>
                    <FiMenu />
                </div> */}
                <img src={logoNavy} alt="coffeeroasters logo with 2 coffee beans" className='m-4' />

                <div className='hidden md:block'>
                    <ul className='flex flex-row gap-10 mr-8 uppercase text-xs text-grey font-semibold font-Barlow'>
                        <li className='pt-2 hover:border-b-4 hover:dark-cyan'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='py-2 hover:border-b-4 hover:border-midnight'>
                            <Link to='/about-us'>About us</Link>
                        </li>
                        <li className='py-2 hover:border-b-4 hover:border-midnight'>
                            <Link to={'/create-your-plan'}>Create Your Plan</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav