import { useState } from "react";


const MenuTest = ({ title, id }) => {
    const [toggleItem, setToggleItem] = useState(false);

    return (

        <div className="" key={id}>
            <button
                className=""
                onClick={() => setToggleItem((prev) => !prev)}
            >
                Hide {id}
            </button>

            {toggleItem && <div className="">{title}</div>}
        </div>
    );
};

export default MenuTest;