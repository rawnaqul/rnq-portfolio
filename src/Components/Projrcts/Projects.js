import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projectData, setProjectData] = useState([]);
    useEffect(() => {
        fetch('myProjects.json')
            .then(res => res.json())
            .then(data => setProjectData(data))
    }, [])



    return (
        <div className='text-base my-16 text-white container lg:w-[1200px] mx-auto '>
            <div className=''>
                <h3 className='text-3xl font-mod'>Selected Projects</h3>
            </div>
            <div className='mb-8'>
                <p>I've done some projects for show-casing purposes, here are a selected few. </p>
            </div>
            <div>
                {
                    projectData.map(project => <Project key={project.id} project={project} colorcode={project.color}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;