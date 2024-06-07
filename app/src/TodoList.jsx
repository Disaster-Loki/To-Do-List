import React from "react";
import './TodoList.css';

function TodoList()
{
    return (
        <div>
            <h2>To Do List</h2>
            <form>
                <input type="text" 
                placeholder="Add a Task"/>
                <button className="add" type="submit">Add</button>
            </form>
            <div className="listTask">
                <div className="item">
                    <span>Example Task</span>
                    <button>Delete</button>
                </div>
                <div className="item complet">
                    <span>Example Task</span>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList;