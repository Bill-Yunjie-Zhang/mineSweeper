import React from "react"

const style = {
    height: 30,
    width: 30,
    fontSize: 20,
    verticalAlign: "top"
}

class Box extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ""
        }
    }
    setId = (num) => {
        let arr = [0, 0]
        arr = [Math.floor(num / 30), num % 30]
        return arr
    }

    render() {
        return (
            <button class={"Buttons"} style={style} id={this.props.id} onContextMenu={() => {
                this.props.open(this.setId(this.props.id), true)
                this.props.resetNum()
                this.props.forceUpdateHandler()
            }} onClick={() => {
                this.props.open(this.setId(this.props.id), false)
                this.props.resetNum()
                this.props.forceUpdateHandler()
                console.log(this.props.gameLog)
            }}>{this.props.gameLog[this.setId(this.props.id)[0]][this.setId(this.props.id)[1]]}</button>
        )
    }
}

export default Box