import React, {useState} from "react";
import './TodoList.css';

function TodoList()
{
    const [list, setList] = useState([]);
    const [newItem, setNewItem] = useState("");

    return (
        <div>
            <h2>To Do List</h2>
            <form>
                <input type="text" placeholder="Add a Task"/>
                <button className="add" type="submit">Add</button>
            </form>
            <div className="listTask">
                <div className="item">
                    <span>Example Task</span>
                    <button className="del">Delete</button>
                </div>
                <div className="item complet">
                    <span>Example Task</span>
                    <button className="del">Delete</button>
                </div>
                <button className="delAll">All Delete</button>
            </div>
        </div>
    )
}
 
export default TodoList;