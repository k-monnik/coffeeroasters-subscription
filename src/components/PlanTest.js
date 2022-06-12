// import MenuTest from "./MenuTest";
// import { MenuItems } from "../data/menu";
import { useState } from "react";

// const Toggle = ({ id, item }) => {
//     const [toggleItem, setToggleItem] = useState(false);

//     return (

//         <div className="" key={id}>
//             <button
//                 className=""
//                 onClick={() => setToggleItem((prev) => !prev)}
//             >
//                 Hide {item}
//             </button>

//             {toggleItem && <div key={id}>
//                 <li>{item.name}</li>
//                 <li>{item.description}</li>
//             </div>}
//         </div>
//     );
// };

export default function PlanTest() {
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
        }
    ];

    const Toggle = ({ question, id }) => {
        const [toggleItem, setToggleItem] = useState(false);

        return (

            <div className="" key={id}>
                <button
                    className=""
                    onClick={() => setToggleItem((prev) => !prev)}
                >
                    {question.title}
                </button>

                {toggleItem &&
                    // <div key={id}>
                    //     <li>{item.name}</li>
                    //     <li>{item.description}</li>
                    // </div>
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
                    // <div key={id}>
                    //     <h2>{question.title}</h2>
                    //     <div>
                    //         <ul>
                    //             {question.choices.map((item, id) => {
                    //                 return <Toggle id={id} item={item} />;
                    //                 // <div key={id}>
                    //                 //     <li>{item.name}</li>
                    //                 //     <li>{item.description}</li>
                    //                 // </div>
                    //             }
                    //             )}
                    //         </ul>
                    //     </div>
                    // </div>
                })}
                {/* {data.map((question, id) => {
                    return <Toggle id={id} question={question} />;
                })} */}
            </div>
        </>
    );
}
