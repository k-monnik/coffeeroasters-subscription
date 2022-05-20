import { useState } from "react";

export const MenuItem = ({ items }) => {
    const [checked, setChecked] = useState('');

    const handleChange = (e) => {
        setChecked(e.target.value)
        console.log(checked);
    }


    return (
        <div>
            <div className='md:flex md:px-2'>
                <label className='bg-wheat text-dark-grey-blue w-60 h-56 m-8 cursor-pointer'>
                    <input type="radio" name="option" value={items.name} id={items.index} onChange={handleChange} />
                    <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>{items.name}</h2>
                    <div className='text-base px-6'>{items.description}</div>
                </label>
                {/* <label className='bg-wheat text-dark-grey-blue w-60 h-56 m-8 cursor-pointer'>
                    <input type="radio" name="option" value={data.name} id={data.index} onChange={handleChange} />
                    <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>{data.name}</h2>
                    <div className='text-base px-6'>{data.description}</div>
                </label>
                <label className='bg-wheat text-dark-grey-blue w-60 h-56 m-8 cursor-pointer'>
                    <input type="radio" name="option" value={data.name} id={data.index} onChange={handleChange} />
                    <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>{data.name}</h2>
                    <div className='text-base px-6'>{data.description}</div>
                </label> */}
            </div>
        </div>
    )
};

export default MenuItem