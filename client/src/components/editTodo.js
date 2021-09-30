import React from 'react'

function EditTodo({todo}) {
    const [description,setDescription]=React.useState(todo.description)
console.log(description)

    const updateTodo =async(e)=>{
e.preventDefault()
try {
    const result  = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          description
        })
    })
    window.location='/'
} catch (error) {
  console.log(error)
}
    }
    console.log(todo)
    return (
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
Edit
</button>
            <div class="modal" id={`id${todo.todo_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

    
      <div class="modal-header"><h4 class="modal-title">Edit </h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

    
      <div class="modal-body">
          <input value={description} onChange={(e)=>setDescription(e.target.value)} />
      </div>

     
      <div class="modal-footer">
          <button onClick={(e)=>updateTodo(e)}>Update</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

        </div>
    )
}

export default EditTodo
