import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'


const Project = ({ project, colorcode }) => {

    const { id, name, image, details, description, color, link, category, mod } = project;
    console.log(mod, 'kkkk');

    return (
        <div className={`grid grid-cols-12 gap-0 mb-7 `}>
            <div className={`col-span-5 p-8 relative ${mod}`}>
                <h5 className='mb-5 text-slate-200 font-semibold'>{category}</h5>
                <h3 className='font-mod text-2xl my-5 text-white'>{name}</h3>
                <p>{details}</p>
                <a href={link} className='absolute bottom-0 mb-8 border p-1 hover:opacity-50 hover:bg-slate-500 hover:text-black' target='_blank' rel='noreferrer'>Live Site</a>
            </div>
            <div className='col-span-7 '>
                <img src={image} alt='project SS'></img>
            </div>
        </div >
    );
};

export default Project;