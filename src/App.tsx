import React from 'react';
import {useState} from 'react';
import "./Style.css";
import svg3 from './images/3.svg';
import svg1 from './images/1.svg';
import svg4 from './images/4.svg';
import svg5 from './images/5.svg';

function App(){


    const [todo,setTodo] = useState<string>("");
    const [task,setTask] = useState<string[]>([]);

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

    const handleClick = (index: number) => {
        setTask(prevTasks => prevTasks.filter((_, i) => i !== index));
    };

    const handleDone = (index: number) => {
        const element = document.getElementById(`${index}`);
        console.log(element);
        if(element)
        {
            element.style.backgroundColor = "#03C588";
        }
        const check = document.getElementById("check"+`${index}`);
        console.log(check);
        check?.classList.add("hidden");
    };
    


    return(
        <div className="Main">
            <div className='images'>
                    <img src={svg1} id='img1'></img>
                    <img src={svg3} id='img3'></img>
            </div>
            <h1 id='logo'>To<span>Do</span> A<span>pp</span></h1>
            <div className='mainContainer'>
                <form className='formContainer' onSubmit={handleSubmit}>
                    <label>Tasks</label>
                    <input className='inputTask' id='input' onChange={handleChange} value={todo}></input>
                    <button className='btn' type='submit'>Submit</button>
                </form>
                <div className='taskContainer'>
                    {task.map((currentTask, index) => (
                        <div className="theTask">
                            <h1 key={index} id={index.toString()}>{currentTask}</h1>
                            <img src={svg4} id={"check"+index.toString()} onClick={()=>handleDone(index)}/>
                            <img src={svg5} onClick={()=>handleClick(index)}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default App;