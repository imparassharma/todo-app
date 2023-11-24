import React from 'react';
import { useState } from 'react';
import "./Style.css";
import svg3 from './images/3.svg';
import svg1 from './images/1.svg';
import svg4 from './images/4.svg';
import svg5 from './images/5.svg';

function App() {
    const [todo, setTodo] = useState<string>("");
    const [tasks, setTasks] = useState<{ id: string, task: string }[]>([]);

    const handleChange = (e: React.SyntheticEvent) => {
        const inputVal = (e.target as HTMLInputElement).value;
        if (inputVal !== "") {
            setTodo(inputVal);
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (todo !== "") {
            const taskId = new Date().getTime().toString(); // Use a timestamp as a unique ID
            setTasks(prevTasks => [...prevTasks, { id: taskId, task: todo }]);
            setTodo("");
        }
        (event.target as HTMLInputElement).value = "";
    }

    const handleClick = (taskId: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    const handleDone = (taskId: string) => {
        const element = document.getElementById(`${taskId}`);
        console.log(element);
        if (element) {
            element.style.backgroundColor = "#03C588";
        }
        const check = document.getElementById("check" + `${taskId}`);
        console.log(check);
        check?.classList.add("hidden");
    };

    return (
        <div className="Main">
            <div className='images'>
                <img src={svg1} id='img1' alt="img1"></img>
                <img src={svg3} id='img3' alt="img3"></img>
            </div>
            <h1 id='logo'>To<span>Do</span> A<span>pp</span></h1>
            <div className='mainContainer'>
                <form className='formContainer' onSubmit={handleSubmit}>
                    <label>Tasks</label>
                    <input className='inputTask' id='input' onChange={handleChange} value={todo} placeholder='Enter Task'></input>
                    <button className='btn' type='submit'>Submit</button>
                </form>
                <div className='taskContainer'>
                    {tasks.map((currentTask) => (
                        <div className="theTask" key={currentTask.id}>
                            <h1 id={currentTask.id}>{currentTask.task}</h1>
                            <img src={svg4} id={"check" + currentTask.id} onClick={() => handleDone(currentTask.id)} alt="check" />
                            <img src={svg5} onClick={() => handleClick(currentTask.id)} alt="delete" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App;
