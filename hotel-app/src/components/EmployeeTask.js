import React from 'react';
import './EmployeeTask.css'
import axios from 'axios';

function EmployeeTask(props)
{
    const handleDelete =(event)=>
    {
        axios.delete("http://localhost/proba/tasks.php?username="+window.pom+"&task="+props.text)
        .then(res=>{
            if(res.status==201)
            {
                alert("You have successfully completed the task");
                let x=document.getElementById(props.clean);
                x.remove();
            }
        }) 
       // let x=document.getElementById(props.clean);
       // x.remove();
    }

    return(
        <>
        <div className={props.stil} id={props.clean}>
            <div className='task_content'>
                <p className='task_text'>{props.text}</p>
            </div>
            <button className='check_task' onClick={handleDelete}><img src="stikla.png" height ="80" width="100" /></button>

        </div>
        </>
    );

}
export default EmployeeTask;