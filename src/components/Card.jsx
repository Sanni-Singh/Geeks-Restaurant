import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const Card = ({item})=>{
    const arr = Math.floor(item.rating )
    // console.log(arr);
    
    const rate = new Array(arr || 0).fill(0)

    
    
    return(
        <div className="shadow-[-5px_9px_11px_5px_rgba(0,_0,_0,_0.1)] w-[400px]  flex flex-col gap-2">
            <div className="flex flex-col gap-2 py-4 px-6">
                <h1 className="text-2xl font-bold">{item.name} <span>
                    {
                        rate.map((ele , idx)=>( <FontAwesomeIcon key={idx} icon={faStar} style={{color:"yellow", fontSize:"20px"}}></FontAwesomeIcon>))
                    }
                    </span></h1>
                <p className="flex gap-2 items-center "><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>{item.address}</p>
                <p>{item.outcode} <span>{item.postcode}</span></p>
            </div>
            <div className="bg-slate-200 w-[100%] py-4 px-6 flex flex-col gap-2">
                <p className="flex gap-2 items-center text-green-600"><FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>{item.type_of_food}</p>
                <a className="text-blue-600" href={item.URL}>Visit Menu</a>
            </div>

        </div>
    )
};
export default Card;