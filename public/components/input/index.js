// import React,{ useState } from "react";

import { useState } from "react";

// function HandlerFuntion(e){
//     e.preventDefault()
    
// }
// function Input(){
    
//     const [tododata ,setTododata]=useState("")
//     const [todolist,setTodolist]=useState([])
//     function removeall(){
//         setTodolist([])
//     }
//     function removedata(i){
//         const updt = todolist.filter((elem,index)=>{
//             return i!=index;
            
//         })
//         setTodolist(updt)
//     }
// function submitdata(){
//         setTodolist(todos=>{
// const updated =[...todos,tododata]
// setTododata("")
// return (updated)
//         })
//     }
//             function handleinput(e){
//             setTododata(e.target.value)
//             }
//             return(
//             <>
//         <form onSubmit={HandlerFuntion}>
//         <input type="text" placeholder="write a task" value={tododata} onChange={handleinput}/>
//         <button onClick={submitdata}>Add task</button>
//         <h2></h2>
//         </form>     
// <h2>here the list</h2>  

//     {todolist.map((data,i)=>{
//         return(<>
//             <p key={i}>
//                 {data}
//                 <button onClick={()=>removedata(i)}>remove</button>
//             </p>
//             </>
//         )
//     })}
    
//         </>
//     )
// }

// export default Input;


// function sumithandler(e){
//     e.preventDefault()
// }

    
//     function Input (){
// const [inputdata,setInputdata]=useState('hello');

//     return(
//         <>
//         <form onSubmit={sumithandler}></form>
//         <input type="text" placeholder="Enter a task" value={inputdata} onChange={(e)=>{setInputdata(e.target.value)}} />
//         <p>here is input</p>
//         </>
//     )
// }

// export default Input;