import { useState,useEffect } from "react"
import NavBar from "./NavBar"
import { v4 as uuidv4 } from 'uuid';
export function App() {
    const[todo,setTodo]=useState("")
    const[todos,setTodos]=useState([])

//Local storage starts from here
useEffect(()=>{
  let todoString = localStorage.getItem("todos")
  if(todoString){
    let todos=JSON.parse(localStorage.getItem("todos"))
    setTodos(todos);
  } 

},[]);

const ToLoSt=() => {
  localStorage.setItem("todos",JSON.stringify(todos))
};


    //Function starts from here
const handleChange=(e)=>{
    setTodo(e.target.value)
    

    };

  const handleSave = () => {
        setTodos([...todos, { id:uuidv4(), todo, isCompleted: false }]);
        setTodo(""); // Reset the todo input field
        ToLoSt();

      };
  const handleCheckBox=(e) => { 
    //Get the id from uuid
    let id=e.target.name;
    let index=todos.findIndex(item=>{
      return item.id===id;

    })
    let newTodos = [...todos];
    newTodos[index].isCompleted=!newTodos[index].isCompleted;
    setTodos(newTodos)
    console.log(newTodos,todos);  
    ToLoSt();
  };

  //Edit fun
  const handleEdit=(e,id) => {
    let t=todos.filter(i=>i.id===id)
    setTodo(t[0].todo);
    let newTodos=todos.filter(item=>{
      return item.id!=id;
    });
    setTodos(newTodos)
    ToLoSt();

  };
  

  //Delete fun
  const handleDelete=(e,id) => {
    // console.log(`The id is ${id}`);
    let index=todos.findIndex(item=>{
      return item.id=== id;
    })
    console.log(index);
    let newTodos=todos.filter(item=>{
      return item.id!=id;
    });
    setTodos(newTodos)
    ToLoSt();
  };
  
  
      return (
      <>
          <NavBar/> 
          <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]">
            <h1 className="font-bold  no-underline hover:underline text-center text-3xl">Manage Your Todos Here</h1>
            <div className="addTodo my-5 flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Add a Todo</h2>
                <div className="flex">
                    <input type="text" onChange={handleChange} value={todo} className="w-1/2"/>
                    <button onClick={handleSave} disabled={todo.length<=3} className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-8 py-2 text-md font-bold text-white'>Save</button>
                </div>
                <h2 className="text-2xl font-bold">Your Todos</h2>
                <div className="todos">
                 {  todos.length===0 && <div>No todos to display</div> } 
                  {todos.map(item=>{
                    return<div key={item.id} className="todo flex w-1/2 justify-between my-2">
                      <div className="flex gap-3">
                      <input name={item.id} onChange={handleCheckBox} type="checkbox" value={todo.isCompleted} />
                    <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                      </div>
                    <div className="btn flex h-full">
                      <button onClick={(e)=>{handleEdit(e,item.id)}} className="bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-8 py-2 text-md font-bold text-white">EDIT</button>
                      <button onClick={(e)=>{handleDelete(e,item.id)}} className="bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-8 py-2 text-md font-bold text-white">DELETE</button>
                    </div>

                  </div>

                  
                  })}
                </div>
            </div>
          </div>
      </>
      )
    }

export default App
