import React, {useState} from "react";
import Icone from './assets/icon.png'
import './TodoList.css';

function TodoList()
{
    const [list, setList] = useState([]);
    const [newItem, setNewItem] = useState("");

    function addItem(form){
        form.preventDefault();
        if (!newItem)
            return;
        setList([...list, {text: newItem, isCompleted: false}]);
        setNewItem("");
        document.getElementById("enter").focus();
    }

    function click(index){
        const listAux = [...list];
        listAux[index].isCompleted = !listAux[index].isCompleted;
        setList(listAux);
    }

    function del(index){
        const listAux = [...list]
    }

    return (
        <div>
            <h2>To Do List</h2>
            <form onSubmit={addItem}>
                <input id="enter" type="text" value={newItem}
                onChange={(e)=> {setNewItem(e.target.value)}} 
                placeholder="Add a Task"/>
                <button className="add" type="submit">Add</button>
            </form>
            <div className="listTask">
                <div>
                    {
                         list.length < 1
                        ?
                        <img className="icon-center" src={Icone} />
                        :
                          list.map((item, index) => (
                            <div key={index}
                            className={item.isCompleted ? "item complet" : "item"}>
                              <span onClick={()=>click(index)} >{item.text}</span>
                              <button  onClick={()=>del(index)} 
                              className="del">Delete</button>
                            </div>
                          ))
                      }
                </div>
                <button className="delAll">All Delete</button>
            </div>
        </div>
    )
}
 
export default TodoList;