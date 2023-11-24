import React from 'react';
import {useState} from 'react';
import "./Style.css";

function App(){


    const [todo,setTodo] = useState<string>("");
    const [task,setTask] = useState<string[]>([]);
    interface props{
        todo:string;
        setTodo:React.Dispatch<React.SetStateAction<string>>;
    }

    const handleChange= (e:React.SyntheticEvent)=> {
        const inputVal = (e.target as HTMLInputElement).value;
        if(inputVal!=""){
            setTodo(inputVal);
        }
    }

    const handleSubmit= (event: React.FormEvent)=> {
        event.preventDefault();
        if(todo!=""){
            setTask(prevTasks => [...prevTasks, todo]);
            console.log(task);
            setTodo("");
        }
        (event.target as HTMLInputElement).value = "";
    }

    
    const handleValue= (event:React.SyntheticEvent)=> {
        (event.target as HTMLInputElement).value = "";
    }


    return(
        <div className='mainContainer'>
            <form className='formContainer' onSubmit={handleSubmit}>
                <label>Tasks</label>
                <input className='inputTask' id='input' onChange={handleChange} value={todo}></input>
                <button className='btn' type='submit'>Submit</button>
            </form>
            <div className='taskContainer'>
                {task.map((currentTask, index) => (
                    <h1 key={index}>{currentTask}</h1>
                ))}
            </div>
        </div>
    )

}

export default App;