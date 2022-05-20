import { MenuItems } from "../data/menu"
import MenuCard from "./MenuCard"

const NewPlan = () => {



    return (
        <div>
            <div className="container mx-auto">
                <div className="grid gap-10 grid-cols-1 md:grid-cols-4 md:w-[1110px] md:h-[216px] md:flex md:justify-center md:space-x-2">

                    {MenuItems.map((data, index) => (
                        <MenuCard key={index} data={data} />
                    ))}
                </div>


            </div >
        </div>
    )
}

export default NewPlan