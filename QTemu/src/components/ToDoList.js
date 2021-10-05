import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Card, Button, Form, Input } from 'reactstrap';
import { getTodos, addTodo, updateToDo, deleteTodo, setComplete } from "store/actions/todo"

const ToDoItem = ({ id, title, completed, onDelete, onUpdate, onComplete }) => {
    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center`}>
            {title}
            {
                !completed &&
                <div className="pull-right" role="group">
                    <button type="button" className="btn btn-xs btn-success img-circle" onClick={() => onComplete(id)}>
                        Complete
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-xs btn-warning img-circle" onClick={() => onUpdate({ id, value: title })}>
                        Edit
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-xs btn-danger img-circle" onClick={() => onDelete()}>
                        Delete
                    </button>
                </div>
            }
        </li>
    )
}

const App = () => {
    const [input, setInput] = useState("");
    const [itemIdSelected, setItemIdSelected] = useState(null)
    const todosList = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    const handleInputChange = useCallback((event) => {
        const input = event?.target?.value;
        setInput(input)
    }, [setInput]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const generateId = Math.floor(Math.random() * 90000) + 10000;
        const dataInput = { id: generateId, title: input }

        if (itemIdSelected) {
            dispatch(updateToDo(itemIdSelected, input));
        } else {
            dispatch(addTodo(dataInput));
        }
        setInput("")
    }

    const handleUpdateTodo = (item) => {
        setInput(item?.title);
        setItemIdSelected(item?.id);
    }

    const handleCompleted = (id) => {
        dispatch(setComplete(id))
    }

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <section className="mt-3">
            <h2>ToDo List</h2>
            <Card className="mb-3 mb-md-0 mr-4 p-5">
                <h4 style={{ borderBottom: '1px solid #f0f0f0' }}>Add Item</h4>
                <Form className='d-flex row' inline onSubmit={handleSubmit}>
                    <div className="form-group col-md-4 ml-4 mr-5">
                        <Input type="text" name="taskInput" value={input} placeholder="Input your Todo List" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="form-group col-md-4 mb-2">
                        <Button color="primary" type="submit" className="btn-block">Submit</Button>
                    </div>
                </Form>
                <div className="well mt-3">
                    <h4 style={{ borderBottom: '1px solid #f0f0f0' }}>TODO</h4>
                    <ul className="list-group">
                        {
                            todosList?.filter(obj => !obj.completed)?.map(obj =>
                                <ToDoItem
                                    itemId={obj?.id}
                                    title={obj?.title}
                                    completed={obj?.completed}
                                    onUpdate={() => handleUpdateTodo(obj)}
                                    onComplete={() => handleCompleted(obj?.id)}
                                    onDelete={() => handleDeleteTodo(obj?.id)} />
                            )
                        }
                    </ul>
                </div>
                <div className="well mt-3">
                    <h4 style={{ borderBottom: '1px solid #f0f0f0' }}>COMPLETED</h4>
                    <ul className="list-group">
                        {
                            todosList?.filter(obj => obj.completed)?.map(({ id, title, completed }) =>
                                <ToDoItem
                                    itemId={id}
                                    title={title}
                                    completed={completed}
                                    onDelete={() => handleDeleteTodo(id)} />
                            )
                        }
                    </ul>
                </div>
            </Card>
        </section>
    )
}

export default App;