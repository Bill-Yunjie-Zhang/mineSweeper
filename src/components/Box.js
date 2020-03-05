import React from "react"

// let style = {
//     height: 30,
//     width: 30,
//     fontSize: 20,
//     verticalAlign: "top",
//     color: "black"
// }

class Box extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
            style: {
                height: 30,
                width: 30,
                fontSize: 20,
                verticalAlign: "top",
                color: "black"
            }
        }
    }
    setId = (num) => {
        let arr = [0, 0]
        arr = [Math.floor(num / 30), num % 30]
        return arr
    }

    render() {
        if((this.props.squareTaken)[this.setId(this.props.id)[0]][this.setId(this.props.id)[1]] === 0){
            this.state.style = {
                height: 30,
                width: 30,
                fontSize: 20,
                verticalAlign: "top",
                color: "#bdbdbd"
            }
        }
        if((this.props.squareTaken)[this.setId(this.props.id)[0]][this.setId(this.props.id)[1]] === 1){
            this.state.style = {
                height: 30,
                width: 30,
                fontSize: 20,
                verticalAlign: "top",
                color: "#4646ff"
            }
        }
        if((this.props.squareTaken)[this.setId(this.props.id)[0]][this.setId(this.props.id)[1]] === 2){
            this.state.style = {
                height: 30,
                width: 30,
                fontSize: 20,
                verticalAlign: "top",
                color: "#099c09"
            }
        }
        if((this.props.squareTaken)[this.setId(this.props.id)[0]][this.setId(this.props.id)[1]] === 3){
            this.state.style = {
                height: 30,
                width: 30,
                fontSize: 20,
                verticalAlign: "top",
                color: "#ff4444"
            }
        }
        if((this.props.squareTaken)[this.setId(this.props.id)[0]][this.setId(this.props.id)[1]] === 4){
            this.state.style = {
                height: 30,
                width: 30,
                fontSize: 20,
                verticalAlign: "top",
                color: "#01016b"
            }
        }
        if((this.props.squareTaken)[this.setId(this.props.id)[0]][this.setId(this.props.id)[1]] === 5){
            this.state.style = {
                height: 30,
                width: 30,
                fontSize: 20,
                verticalAlign: "top",
                color: "#770000"
            }
        }
        if((this.props.squareTaken)[this.setId(this.props.id)[0]][this.setId(this.props.id)[1]] === 6){
            this.state.style = {
                height: 30,
                width: 30,
                fontSize: 20,
                verticalAlign: "top",
                color: "#012201"
            }
        }
        if((this.props.squareTaken)[this.setId(this.props.id)[0]][this.setId(this.props.id)[1]] === 7){
            this.state.style = {
                height: 30,
                width: 30,
                fontSize: 20,
                verticalAlign: "top",
                color: "#160122"
            }
        }
        if((this.props.squareTaken)[this.setId(this.props.id)[0]][this.setId(this.props.id)[1]] === 8){
            this.state.style = {
                height: 30,
                width: 30,
                fontSize: 20,
                verticalAlign: "top",
                color: "#000000"
            }
        }
        return (
            <button class={"Buttons"} style={this.state.style} id={this.props.id} onContextMenu={() => {
                this.props.open(this.setId(this.props.id), true)
                this.props.resetNum()
                this.props.forceUpdateHandler()
            }} onClick={() => {
                this.props.open(this.setId(this.props.id), false)
                this.props.resetNum()
                this.props.forceUpdateHandler()
                // console.log(this.props.gameLog)
            }}>{this.props.gameLog[this.setId(this.props.id)[0]][this.setId(this.props.id)[1]]}</button>
        )
    }
}

export default Box