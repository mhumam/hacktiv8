import { Component } from "react";
import { Card, Button, Form, FormGroup, Input, Alert } from 'reactstrap';

class App extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            itemIdSelected: "",
            valueInput: "",
            itemIdCompleted: []
        }
    }

    /* generate id for unique list */
    generateId = () => {
        return Math.floor(Math.random() * 90000) + 10000;
    }

    handleSubmit = () => {
        const { itemIdSelected, valueInput, list } = this.state;
        let listTemp = list;
        if (itemIdSelected) {
            listTemp = listTemp?.map((obj) => {
                if (obj?.itemId === itemIdSelected) {
                    return { itemId: obj?.itemId, value: valueInput }
                }
                return { ...obj }
            })
        } else {
            listTemp.push({ itemId: this.generateId(), value: valueInput });
        }

        this.setState({ list: [...listTemp], valueInput: "" });
    }

    handleInputChange = (event) => {
        const { value } = event.target;
        this.setState({ valueInput: value });
    }

    onClickUpdate = (item) => {
        this.setState({ valueInput: item?.value, itemIdSelected: item?.itemId });
    }

    onDeleteItem = (itemIdSelected) => {
        let tempList = this.state.list;
        tempList = tempList.filter(obj => obj?.itemId !== itemIdSelected);
        this.setState({ list: tempList });
    }

    onComplete = (itemId) => {
        let { itemIdCompleted } = this.state;
        /* handle must unique in itemIdSelected */
        if (!itemIdCompleted.includes(itemId)) {
            itemIdCompleted.push(itemId)
        }
        this.setState((itemIdCompleted));
    }

    /* reset state after 3 items completed */
    componentDidUpdate() {
        const { itemIdCompleted } = this.state
        if (itemIdCompleted?.length >= 3) {
            setTimeout(() => {
                this.setState({ list: [], itemIdSelected: "", valueInput: "", itemIdCompleted: [] });
            }, 2000);
        }
    }

    render() {
        const { list, valueInput, itemIdCompleted } = this.state;
        return (
            <section className="mt-3">
                <h2>ToDo List</h2>
                {
                    itemIdCompleted?.length >= 3 &&
                    <Alert color="primary">
                        Selamat anda telah menyelesaikan 3 Todo untuk hari ini
                    </Alert>
                }
                <Card className="mb-3 mb-md-0 mr-4 p-5">
                    <Form inline>
                        <FormGroup className="mb-2">
                            <Input type="text" name="taskInput" value={valueInput} placeholder="Input your Todo List" onChange={this.handleInputChange} />
                        </FormGroup>
                        <Button color="primary" className="btn-block" onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                    <div className="well mt-3">
                        <ul className="list-group">
                            {list?.map(({ value, itemId }) => <ToDoItem itemId={itemId} title={value} itemIdCompleted={itemIdCompleted} onDelete={this.onDeleteItem} onClickUpdate={this.onClickUpdate} onComplete={this.onComplete} />)}
                        </ul>
                    </div>
                </Card>
            </section >
        )
    }
}

const ToDoItem = ({ itemId, title, onDelete, onClickUpdate, onComplete, itemIdCompleted }) => {
    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${itemIdCompleted.includes(itemId) && 'active'}`}>
            {title}
            <div className="pull-right" role="group">
                <button type="button" className="btn btn-xs btn-success img-circle" onClick={() => onComplete(itemId)}>
                    Complete
                </button>
                &nbsp;
                <button type="button" className="btn btn-xs btn-warning img-circle" onClick={() => onClickUpdate({ itemId, value: title })}>
                    Edit
                </button>
                &nbsp;
                <button type="button" className="btn btn-xs btn-danger img-circle" onClick={() => onDelete(itemId)}>
                    Delete
                </button>
            </div>
        </li>
    )
}

export default App;