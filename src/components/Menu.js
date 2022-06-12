
import { useState } from "react";


export default function Menu() {
    const data = [
        {
            title: 'How do you drink your coffee?',
            id: 0,
            choices: [
                {
                    name: "Capsule",
                    description: "Compatible with Nespresso systems and similar brewers",
                    id: 101,
                },
                {
                    name: "Filter",
                    description: "For pour over or drip methods like Aeropress, Chemex, and V60",
                    id: 102,
                },
                {
                    name: "Espresso",
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
                    "description": "Distinct, high quality coffee from a specific family-owned farm",
                    id: 104,
                },

                {
                    "name": "Decaf",
                    "description": "Just like regular coffee, except the caffeine has been removed",
                    id: 105,
                },
                {
                    "name": "Blended",
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
                    "description": "Perfect for the solo drinker. Yields about 12 delicious cups",
                    id: 107,
                },

                {
                    "name": "500g",
                    "description": "Perfect option for a couple. Yields about 40 delectable cups",
                    id: 108,
                },
                {
                    "name": "1000g",
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
                    "description": "Best choice if you cherish the full sensory experience",
                    id: 110,
                },

                {
                    "name": "Filter",
                    "description": "For drip or pour-over coffee methods such as V60 or Aeropress",
                    id: 111,
                },
                {
                    "name": "Cafetiére",
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
                    "description": "$14.00 per shipment. Includes free first-class shipping",
                    id: 113,
                },

                {
                    "name": "Every 2 weeks",
                    "description": "$17.25 per shipment. Includes free priority shipping",
                    id: 114,
                },
                {
                    "name": "Every month",
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

                            <div key={id}>
                                <li>{item.name}</li>
                                <li>{item.description}</li>
                            </div>
                        )
                        )}
                    </ul>
                }
            </div>
        );
    };


    return (
        <>
            <h1>Menu Test</h1>

            <div>
                {data.map((question, id) => {
                    return <Toggle id={id} question={question} />;
                })}
            </div>
        </>
    );
}
