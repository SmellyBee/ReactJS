import React from 'react';
import './EmployeeTask.css'

function EmployeeTask(props)
{
    return(
        <>
        <div className={props.stil}>
            <div className='task_content'>
                <p className='task_text'>{props.text}</p>
            </div>
            <button className='check_task'><img src="stikla.png" height ="80" width="100" /></button>

        </div>
        </>
    );

}
export default EmployeeTask;