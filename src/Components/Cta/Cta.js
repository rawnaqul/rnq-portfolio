import React from 'react';

const Cta = () => {
    return (
        <div className='container lg:w-[1200px] mx-auto p-8' id='section-cta'>
            <h2 className='font-mod text-3xl  text-white mb-8 animate-pulse'>Let's work together!</h2>
            <p className='text-sm text-slate-100 mb-5'>My keen interest in programming and design helps me find creative solutions to technical challenges and develop visually appealing websites. I may not have that much experience but I have a strong understanding in this field and would welcome the chance to bring those skills to your projects, so let's work together!</p>
            <div>
                <form className='grid'>
                    <div className='grid grid-cols-2 gap-8 mb-5'>
                        <div className='flex flex-col'>
                            <label className='text-white mb-2 text-sm'>NAME</label>
                            <input></input>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-white mb-2 text-sm'>EMAIL</label>
                            <input></input>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white mb-2 text-sm'>MESSAGE</label>
                        <textarea className='px-3 py-1 text-sm text-slate-300' placeholder='As they say, if you do not have something nice to say, do not say anything at all!'></textarea>
                    </div>
                    <button className='bg-[#4e0ca2] text-white text-sm p-3 mt-5 ml-auto'>SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default Cta;