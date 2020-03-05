import React from "react"

const style = {
    height: 30,
    width: 30,
    fontSize: 20,
    verticalAlign: "top"
}

class Box extends React.Component{
    render () { 
        return (
            <button style={style}></button>
        )
    }
}

export default Box