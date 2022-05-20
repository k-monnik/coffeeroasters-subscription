// import { HashLink } from 'react-router-hash-link';
// import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className="sticky top-0 cursor-pointer flex flex-row justify-between bg-white text-dark-grey-blue">
                <div className='font-bold m-2 font-Fraunces'>
                    {/* <HashLink smooth to='/#'></HashLink> */}
                    COFFEEROASTERS
                </div>
                {/* <div className='px-6 mt-2 text-2xl md:hidden' onClick={toggle}>
                    <FiMenu />
                </div> */}

                <div className='hidden md:block'>
                    <ul className='flex flex-row gap-20 mr-8'>
                        <li className='pt-2 hover:border-b-4 hover:dark-cyan'>
                            {/* <HashLink smooth to={'/page#about'}>Home</HashLink> */}
                            Home
                        </li>
                        <li className='py-2 hover:border-b-4 hover:border-midnight'>
                            {/* <HashLink smooth to={'/page#projects'}>About Us</HashLink> */}
                            About Us
                        </li>
                        <li className='py-2 hover:border-b-4 hover:border-midnight'>
                            {/* <HashLink smooth to={'/page#contact'}>Create Your Plan</HashLink> */}
                            Create Your Plan
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav