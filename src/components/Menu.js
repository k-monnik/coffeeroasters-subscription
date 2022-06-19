
import { useState } from "react";


export default function Menu() {
    // const [selectItem, setSelectItem] = useState(false)
    const [selectPreference, setSelectPreference] = useState(false)
    const [selectBeanType, setSelectBeanType] = useState(false)
    const [selectQuantity, setSelectQuantity] = useState(false)
    const [selectGrindOption, setSelectGrindOption] = useState(false)
    const [selectDeliveries, setSelectDeliveries] = useState(false)

    const onOptionChange = e => {
        setSelectPreference(e.target.value);
        setSelectBeanType(e.target.value);
        setSelectQuantity(e.target.value);
        setSelectGrindOption(e.target.value);
        setSelectDeliveries(e.target.value);

    }

    const selectItem = e => {
        selectPreference(e.target.value);
        selectBeanType(e.target.value);
        selectQuantity(e.target.value);
        selectGrindOption(e.target.value);
        selectDeliveries(e.target.value);
    }

    const data = [
        {
            title: 'How do you drink your coffee?',
            id: 0,
            choices: [
                {
                    name: "Capsule",
                    category: 'preferences',
                    description: "Compatible with Nespresso systems and similar brewers",
                    id: 101,
                },
                {
                    name: "Filter",
                    category: 'preferences',
                    description: "For pour over or drip methods like Aeropress, Chemex, and V60",
                    id: 102,
                },
                {
                    name: "Espresso",
                    category: 'preferences',
                    description: "Dense and finely ground beans for an intense, flavorful experience",
                    id: 103,
                }
            ]
        },
        {
            title: 'What type of coffee?',
            id: 1,
            choices: [
                {
                    "name": "Single origin",
                    category: 'beanType',
                    "description": "Distinct, high quality coffee from a specific family-owned farm",
                    id: 104,
                },

                {
                    "name": "Decaf",
                    category: 'beanType',
                    "description": "Just like regular coffee, except the caffeine has been removed",
                    id: 105,
                },
                {
                    "name": "Blended",
                    category: 'beanType',
                    "description": "Combination of two or three dark roasted beans of organic coffees",
                    id: 106,
                }
            ]
        },
        {
            title: 'How much would you like?',
            id: 2,
            choices: [
                {
                    "name": "250g",
                    category: 'quantity',
                    "description": "Perfect for the solo drinker. Yields about 12 delicious cups",
                    id: 107,
                },

                {
                    "name": "500g",
                    category: 'quantity',
                    "description": "Perfect option for a couple. Yields about 40 delectable cups",
                    id: 108,
                },
                {
                    "name": "1000g",
                    category: 'quantity',
                    "description": "Perfect for offices and events. Yields about 90 delightful cups",
                    id: 109,
                }
            ]
        },
        {
            title: 'Want us to grind them?',
            id: 3,
            choices: [
                {
                    "name": "Whole bean",
                    category: 'grindOption',
                    "description": "Best choice if you cherish the full sensory experience",
                    id: 110,
                },

                {
                    "name": "Filter",
                    category: 'grindOption',
                    "description": "For drip or pour-over coffee methods such as V60 or Aeropress",
                    id: 111,
                },
                {
                    "name": "Cafetiére",
                    category: 'grindOption',
                    "description": "Course ground beans specially suited for french press coffee",
                    id: 112,
                }
            ]
        },
        {
            title: 'How often should we deliver?',
            id: 4,
            choices: [
                {
                    "name": "Every week",
                    category: 'delivery',
                    "description": "$14.00 per shipment. Includes free first-class shipping",
                    id: 113,
                },

                {
                    "name": "Every 2 weeks",
                    category: 'delivery',
                    "description": "$17.25 per shipment. Includes free priority shipping",
                    id: 114,
                },
                {
                    "name": "Every month",
                    category: 'delivery',
                    "description": "$22.50 per shipment. Includes free priority shipping",
                    id: 115,
                }
            ]
        }
    ];

    const Toggle = ({ question, id }) => {
        const [toggleItem, setToggleItem] = useState(false);

        return (

            <div className="" key={id}>
                {question.title}
                <button
                    className=""
                    onClick={() => setToggleItem((prev) => !prev)}
                >
                    Hide
                </button>

                {toggleItem &&
                    <ul>
                        {question.choices.map((item, id) => (

                            <div key={id} onClick={handleClick}>
                                <li>{item.name}</li>
                                <li>{item.description}</li>
                                <input
                                    type="radio"
                                    name={item.category}
                                    value={item.name}
                                    id={id}
                                    checked={selectItem}
                                    onChange={onOptionChange}
                                />
                            </div>
                        )
                        )}
                    </ul>
                }
            </div>
        );
    };

    const handleClick = value => console.log(`${data.choices.name}`);


    return (
        <>
            <h1>Menu Test</h1>

            <div>
                {data.map((question, id) => {
                    return <Toggle id={id} question={question} />;
                })}
            </div>

            <div className="bg-dark-grey-blue w-[730px] h-[208] rounded-xl">
                <div className="font-Barlow uppercase text-grey font-light pl-12 pt-8">Order summary</div>
                <div className='font-Fraunces font-bold text-white text-2xl px-12 pt-4 pb-10'>
                    “I drink my coffee as <strong className='text-dark-cyan'>{selectPreference}</strong>, with a <strong className='text-dark-cyan'>{selectBeanType}</strong> type of bean. <strong className='text-dark-cyan'>{selectQuantity}</strong> ground ala <strong className='text-dark-cyan'>{selectGrindOption}</strong>,
                    sent to me <strong className='text-dark-cyan'>{selectDeliveries}</strong>.”
                </div>
            </div>
        </>
    );
}
