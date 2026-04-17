import React from 'react';



const SummaryCard = () => {
    return (
        <div className=' rounded-lg shadow-md p-4 grid grid-cols-4 gap-4 mt-6 container mx-auto'>
            <div className='bg-base-200 rounded-lg bg-white shadow-2xl py-12 grid justify-center text-center'> 
                <span className='font-bold text-3xl'>10</span><br />Total Friends
            </div>
            <div className='bg-base-200 rounded-lg bg-white shadow-2xl py-12 grid justify-center text-center'> 
                <span className='font-bold text-3xl '>3</span><br />On Tracks
            </div>
            <div className='bg-base-200 rounded-lg bg-white shadow-2xl py-12 grid justify-center text-center'> 
                <span className='font-bold text-3xl'>2</span><br />Need Attention
            </div>
            <div className='bg-base-200 rounded-lg bg-white shadow-2xl py-12 grid justify-center text-center'> 
                <span className='font-bold text-3xl'>8</span><br />Shared Photos
            </div>
        </div>
    );
};

export default SummaryCard;