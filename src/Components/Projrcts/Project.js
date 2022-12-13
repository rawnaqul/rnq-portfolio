import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {

    const { id, name, image, details, description, color, link, category } = project;

    return (
        <div className='grid grid-cols-12 gap-0 mb-7'>
            <div className='col-span-5 bg-red-400 p-8'>
                <h5>{category}</h5>
                <h3>{name}</h3>
                <p>{details}</p>
                <a href={link}>Live Site</a>
            </div>
            <div className='col-span-7 bg-green-400'>
                <img src={image} alt='project SS'></img>
            </div>
        </div>
    );
};

export default Project;