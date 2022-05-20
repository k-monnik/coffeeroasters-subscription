import { useState } from "react";
import { MenuSubItems } from "../data/menu";
import MenuChoices from "./MenuChoices";

export const MenuCard = ({ data }) => {
    const [show, setShow] = useState(false);
    // const [checked, setChecked] = useState('');

    // const handleChange = (e) => {
    //     setChecked(e.target.value)
    //     console.log(checked);
    // }


    return (
        <div>
            <div className='px-2'>
                <div className='flex justify-between mx-14'>
                    <h1 className='text-grey text-4xl font-Fraunces font-bold'>{data.title}</h1>
                    <button onClick={() => setShow(!show)}>Hide</button>
                </div>
                {
                    show
                        ?
                        <div className='md:flex md:px-2'>
                            {/* <label className='bg-wheat text-dark-grey-blue w-60 h-56 m-8 cursor-pointer'>
                                <input type="radio" name="option" value={data.choices} id={data.index} onChange={handleChange} />
                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>{data.choices}</h2>
                                <div className='text-base px-6'>{data.description}</div>
                            </label>
                            <label className='bg-wheat text-dark-grey-blue w-60 h-56 m-8 cursor-pointer'>
                                <input type="radio" name="option" value={data.choices} id={data.index} onChange={handleChange} />
                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>{data.choices}</h2>
                                <div className='text-base px-6'>{data.description}</div>
                            </label>
                            <label className='bg-wheat text-dark-grey-blue w-60 h-56 m-8 cursor-pointer'>
                                <input type="radio" name="option" value={data.choices} id={data.index} onChange={handleChange} />
                                <h2 className='text-2xl font-Fraunces font-bold my-6 px-6'>{data.choices}</h2>
                                <div className='text-base px-6'>{data.description}</div>
                            </label> */}
                            {MenuSubItems.map(({ name, items }, index) => (
                                <MenuChoices key={index} name={name} description={description} />
                            ))}
                        </div>
                        : null
                }
            </div>
        </div>
    )
};

export default MenuCard