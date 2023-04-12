import { useState } from "react";

const ToDoList = () => {
    const [toDo, setToDo] = useState([]);
    const [input, setInput] = useState("");
    const [toDoDone, setDone] = useState(false)

    const addNewToDo = (todo) => {
        const newToDo = {
            id: Math.random(),
            todo: todo,
        };
        setToDo([...toDo, newToDo]);
        setInput("")
    }

    const removeToDo = (id) => {
        const newList = toDo.filter((todo) => todo.id !== id)
        setToDo(newList)
    }

    const done = () => {
        setDone(!toDoDone)
    }

    return (
        <section>
            <form>
                <input type="text" placeholder='Add To Do ...' value={input} onChange={(e) => setInput(e.target.value)} />
                <input type="button" value="submit" onClick={() => addNewToDo(input)} />
            </form>
            <article>
                {toDo.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <input type="checkbox" onChange={done} />
                            <p style={{ textDecoration: toDoDone ? "line-through" : "none" }}>{todo.todo}</p>
                            <button onClick={() => removeToDo(todo.id)}>Delete</button>
                        </div>
                    )
                })}
            </article>
        </section >
    );
}

export default ToDoList;