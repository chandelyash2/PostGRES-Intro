import React,{useState} from 'react'

function InputTodo() {
    const [todo,setTodo] = useState('')

    const handleSubmit =async(e)=>{
       
try {
   
    const result =await fetch('http://localhost:5000/todos',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            description:todo
        })
    })
    console.log(result)
} catch (error) {
  console.log(error)  
}    }
    return (
        <div className='container d-flex  flex-column  align-items-center'>
            <h1 className='text text-align-center'>PERN TODO</h1>
            <form className='d-flex w-100 ' onSubmit={handleSubmit}>
                <input className='form-control' placeholder='Write your Todo.' onChange={(e)=>setTodo(e.target.value)}/>
                <button type="submit" class="btn btn-primary ml-4 text-align" style={{width:'150px'}}>Add</button>
            </form>
        </div>
    )
}

export default InputTodo
