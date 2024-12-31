import { useRef, useState } from 'react';
import Data from '../utils/constant'
import Card from './Card';
const Restrorent  =()=>{
    const inputVal = useRef(null)
    const ratingVal = useRef(null)
    const [arr,setArr] = useState(Data)
   
    
    const filterBtn =()=>{
        if(inputVal.current.value=== null || ratingVal.current.value===null) return;
        const newArray = Data.filter((ele)=>{
            // console.log(inputVal.current.value);
            const str = ele.name.toLowerCase();
            const strVal = inputVal.current.value.toLowerCase()
            return str.includes(strVal) && ele.rating >= ratingVal.current.value
        })
        setArr(newArray);
        console.log(newArray);
        
    }

    return (
        <div>
            <div className='flex justify-between px-8 py-4'>
                <div className='flex gap-4 items-center'>
                    <input ref={inputVal} className='outline-none border p-2' type="text" name="" id="" placeholder='Enter Restro Name'/>
                    <button onClick={filterBtn} className='bg-blue-600 py-2 outline-none px-4 rounded-lg text-white font-bold '>Search</button>
                </div>
                <div className='flex gap-2 items-center'>
                    <label htmlFor="" className='text-xl font-bold'>Filter Rating</label>
                    <input ref={ratingVal} className='border p-2 w-[100px] outline-none border-2' type="number" />
                </div>
            </div>
            <div className='flex gap-12 flex-wrap justify-center items-center p-8'>
                {arr.map((ele,idx)=>  <Card key={idx} item ={ele}/> )} 
            </div>
        </div>
    )
};
export default Restrorent;