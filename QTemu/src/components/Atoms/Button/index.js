import React from 'react'
import {
    Button
} from 'reactstrap';

const App = ({ children, color = "primary" }) => {
    return <Button color={color}>{children}</Button>
}

export default App
