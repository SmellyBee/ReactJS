import React from 'react';
import EmployeeTask from '../components/EmployeeTask';
import { useState } from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import { useEffect } from 'react';
function EmployeeInterface()
{
    const [Tasks,setTasks]=useState([]);

    useEffect(() => {

        GetingTasks();

    },[]);

    const GetingTasks=async()=>
    {
        await axios.get("http://localhost/proba/tasks.php?username="+window.pom)
        .then(res=>setTasks(res.data));
    }


    let i = 0;

    return(
        <>
        {
            Tasks.forEach(el=>{
                if(i%2==0)
                render(<EmployeeTask stil="par" text={el.task} reload={GetingTasks} clean={i}> </EmployeeTask>)
                    
                else
                render(<EmployeeTask stil="nepar" text={el.task} reload={GetingTasks} clean={i} > </EmployeeTask>)
                i++;
            })
        }
        </>
    );

}
export default EmployeeInterface;