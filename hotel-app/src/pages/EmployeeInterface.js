import React from 'react';
import EmployeeTask from '../components/EmployeeTask';
import { useState } from 'react';
import { render } from '@testing-library/react';
function EmployeeInterface()
{
    const [Tasks]=useState([
        {task:"DFSDFDSFDSF DFD SFDS FDSF "},
        {task:"DFSDFDSFDSF DFD SFDS FDSF "},
        {task:"DFSDFDSFDSF DFD SFDS FDSF "},
        {task:"DFSDFDSFDSF DFD SFDS FDSF "},
        {task:"DFSDFDSFDSF DFD SFDS FDSF "},
        {task:"DFSDFDSFDSF DFD SFDS FDSF "}
    ]);

    let i = 0;

    return(
        <>
        {
            Tasks.forEach(el=>{
                if(i%2==0)
                render(<EmployeeTask stil="par" text={el.task}> </EmployeeTask>)
                    
                else
                render(<EmployeeTask stil="nepar" text={el.task}> </EmployeeTask>)
                i++;
            })
        }
        </>
    );

}
export default EmployeeInterface;