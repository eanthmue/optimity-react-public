import { Icon } from "@iconify/react";
import dbData from "../data/db.json";

const CoreValues = () => {
    const corevalues = dbData.corevalues;
    
    return ( <>
        <div className="mt-6 py-6 border-y border-white border-opacity-20">
            <h2 className="pb-6">Core Values</h2>
            <div className="max-w-4xl m-auto">
                { corevalues.map((data) => (
                    <div key={data.id} className="flex text-lg">
                        <div>
                            <Icon
                            className="text-slate-600 mr-1 mt-1"
                            icon="mdi:tick-circle"
                            />
                        </div>
                        {data.value}
                    </div>
                ))}
            </div>
        </div>
    </> );
}
 
export default CoreValues;