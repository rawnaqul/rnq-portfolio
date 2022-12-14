import React from 'react';
import { Link } from 'react-router-dom';


const Project = ({ project, colorcode }) => {

    const { id, name, image, details, description, color, link, category } = project;
    console.log(colorcode, 'kkkk');

    return (
        <div className={`grid grid-cols-12 gap-0 mb-7 bg-slate-500`}>
            <div className={`col-span-5 p-8 relative ${color}`}>
                <h5 className='mb-5 text-base font-semibold'>{category}</h5>
                <h3 className='font-mod text-2xl my-5'>{name}</h3>
                <p>{details}</p>
                <a href={link} className='fixed top-0 left-0 right-0'>Live Site</a>
            </div>
            <div className='col-span-7 '>
                <img src={image} alt='project SS'></img>
            </div>
        </div >
    );
};

export default Project;