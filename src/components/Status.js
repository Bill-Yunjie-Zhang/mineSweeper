import React from 'react'

class Status extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            seconds: 0
        }
    }

    tick = () => {
        if(this.props.mines !== 0){
            this.setState(state => ({
                seconds: state.seconds + 1
            }))        
        }
    }

    componentDidMount = () => {
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount = () => {
        clearInterval(this.interval)
    }

    render() {
        return <div style={{border: "2px solid black"}}>
            <button style={{ textAlign: "center", width: "448px", height: "60px", fontSize: "30px", border: "0px", backgroundColor: "#a6a6a6", color: "red" }}>{this.props.mines}</button>
            <button style={{ textAlign: "center", width: "448px", height: "60px", fontSize: "30px", border: "0px", backgroundColor: "#efefef", color: "black" }}>Time passed: <span style={{color: "red"}}>{this.state.seconds}</span>s</button>
        </div>
    }
}

export default Status