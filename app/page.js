"use client"
import { useState ,useEffect} from 'react'
import { BubbleSort } from '../components/BubbleSort';
import { MergeSort } from '@/components/MergeSort';
import { InsertionSort} from '@/components/InsertionSort';

export default function Home() {

  const [bars, setBars] = useState([]);

  useEffect(() => {CreateArray()},[])

  const CreateArray = () => {
    let newArray = [];
    for (let i = 0; i < 30; i++) {
      newArray.push(Math.floor(Math.random() * 80 + 20))
      if (document.getElementById(`bar-${i}`) !== null)   
       document.getElementById(`bar-${i}`).style.backgroundColor = "#3B82F6";
    }
    setBars(newArray)
  };

  
  return (
    <>
      <div className="container  ">
        <h1 className="text-7xl font-bold text-center text-transparent
         bg-[url('fire.gif')] bg-clip-text"> SORTING VISUALIZER</h1>
        <div className="h-[80vh] w-[80vw] bg-gray-300 mx-auto">
          <div className='bg-gray-400'>
            <button className="border rounded-xl m-3 px-1 cursor-pointer" onClick={() => { CreateArray() }}
          >create new array</button>
            <button className="border rounded-xl m-3 px-1 cursor-pointer" onClick={() => { BubbleSort(bars,setBars) }}
          >Bubble Sort</button>
            <button className="border rounded-xl m-3 px-1 cursor-pointer" onClick={() => { MergeSort(bars,setBars) }}
          >Merge Sort</button>
          
            <button className="border rounded-xl m-3 px-1 cursor-pointer" onClick={() => { InsertionSort(bars,setBars) }}
          >Insertion sort</button>
          
          </div>
          <div className="originalcontainer flex items-end  h-[73vh]">
            {bars.map((height, index) => {
              return (
                <div key={index} id={`bar-${index}`} className= 'bg-blue-500 bar mx-0.5' style={{
                  height: `${height}%`, width: "40px"}}>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
