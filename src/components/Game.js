import React from 'react'
import Box from './Box'

const style = {
    height: 480,
    width: 900,
    border: "2px solid #333333"
}

let arr1 = []

for (let aa = 0; aa < 480; aa++) {
    arr1.push(aa)
}

let num = -1
let squareTaken1 = []

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            squareTaken: [["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]],
            gameLog: [["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]]
        }
    }

    forceUpdateHandler = () => {
        this.forceUpdate()
    }

    getRandomNumber = (low, high) => {
        return Math.floor(Math.random() * (high - low + 1)) + low;
    }

    generateGame = () => {
        squareTaken1 = [["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]]
        for (let ii = 0; ii < 99; ii++) {
            squareTaken1[this.getRandomNumber(0, 15)][this.getRandomNumber(0, 29)] = "X"
        }
        if (this.checkGame(squareTaken1)) {
            this.getNumber(squareTaken1)
            this.setState({ squareTaken: squareTaken1 })
            this.state.squareTaken = squareTaken1
        } else {
            this.generateGame()
        }
    }

    getNumber = (arr) => {
        for (let nn = 1; nn < arr.length - 1; nn++) {
            for (let kk = 1; kk < arr[nn].length - 1; kk++) {
                if (arr[nn][kk] === "") {
                    let count = 0
                    if (arr[nn - 1][kk] === "X") {
                        count++
                    }
                    if (arr[nn + 1][kk] === "X") {
                        count++
                    }
                    if (arr[nn][kk - 1] === "X") {
                        count++
                    }
                    if (arr[nn][kk + 1] === "X") {
                        count++
                    }
                    if (arr[nn - 1][kk - 1] === "X") {
                        count++
                    }
                    if (arr[nn - 1][kk + 1] === "X") {
                        count++
                    }
                    if (arr[nn + 1][kk - 1] === "X") {
                        count++
                    }
                    if (arr[nn + 1][kk + 1] === "X") {
                        count++
                    }
                    arr[nn][kk] = count
                }
            }
        }

        for (let oo = 1; oo < arr.length - 1; oo++) {
            if (arr[oo][0] === "") {
                let count = 0
                if (arr[oo + 1][1] === "X") {
                    count++
                }
                if (arr[oo - 1][0] === "X") {
                    count++
                }
                if (arr[oo + 1][0] === "X") {
                    count++
                }
                if (arr[oo - 1][1] === "X") {
                    count++
                }
                if (arr[oo][1] === "X") {
                    count++
                }
                arr[oo][0] = count
            }
            if (arr[oo][0] === "") {
                let count = 0
                if (arr[oo + 1][arr[oo].length - 1] === "X") {
                    count++
                }
                if (arr[oo - 1][arr[oo].length] === "X") {
                    count++
                }
                if (arr[oo + 1][arr[oo].length] === "X") {
                    count++
                }
                if (arr[oo - 1][arr[oo].length - 1] === "X") {
                    count++
                }
                if (arr[oo][arr[oo].length - 1] === "X") {
                    count++
                }
                arr[oo][0] = count
            }
        }

        for (let pp = 1; pp < arr[0].length - 1; pp++) {
            if (arr[0][pp] === "") {
                let count = 0
                if (arr[0][pp - 1] === "X") {
                    count++
                }
                if (arr[0][pp + 1] === "X") {
                    count++
                }
                if (arr[1][pp - 1] === "X") {
                    count++
                }
                if (arr[1][pp] === "X") {
                    count++
                }
                if (arr[1][pp + 1] === "X") {
                    count++
                }
                arr[0][pp] = count
            }

            if (arr[arr.length - 1][pp] === "") {
                let count = 0
                if (arr[arr.length - 1][pp - 1] === "X") {
                    count++
                }
                if (arr[arr.length - 1][pp + 1] === "X") {
                    count++
                }
                if (arr[arr.length - 2][pp - 1] === "X") {
                    count++
                }
                if (arr[arr.length - 2][pp] === "X") {
                    count++
                }
                if (arr[arr.length - 2][pp + 1] === "X") {
                    count++
                }
                arr[arr.length - 1][pp] = count
            }
        }

        if (arr[0][0] === "") {
            let count = 0
            if (arr[0][1] === "X") {
                count++
            }
            if (arr[1][0] === "X") {
                count++
            }
            if (arr[1][1] === "X") {
                count++
            }
            arr[0][0] = count
        }

        if (arr[0][15] === "") {
            let count = 0
            if (arr[0][14] === "X") {
                count++
            }
            if (arr[1][15] === "X") {
                count++
            }
            if (arr[1][14] === "X") {
                count++
            }
            arr[0][15] = count
        }

        if (arr[15][0] === "") {
            let count = 0
            if (arr[15][1] === "X") {
                count++
            }
            if (arr[14][0] === "X") {
                count++
            }
            if (arr[14][1] === "X") {
                count++
            }
            arr[15][0] = count
        }

        if (arr[15][15] === "") {
            let count = 0
            if (arr[15][14] === "X") {
                count++
            }
            if (arr[14][14] === "X") {
                count++
            }
            if (arr[14][15] === "X") {
                count++
            }
            arr[15][15] = count
        }
    }

    checkGame = (arr) => {
        console.log("doing")
        for (let jj = 1; jj < arr.length - 1; jj++) {
            for (let kk = 1; kk < arr[jj].length - 1; kk++) {
                if (arr[jj][kk] === "X") {
                    if (arr[jj - 1][kk] === "X" && arr[jj + 1][kk] === "X" && arr[jj][kk - 1] === "X" && arr[jj][kk + 1] === "X" && arr[jj - 1][kk - 1] === "X" && arr[jj - 1][kk + 1] === "X" && arr[jj + 1][kk - 1] === "X" && arr[jj + 1][kk + 1] === "X") {
                        return false
                    }
                }
            }
        }

        for (let ll = 1; ll < arr.length - 1; ll++) {
            if (arr[ll][0] === "X" && arr[ll - 1][0] === "X" && arr[ll + 1][0] === "X" && arr[ll - 1][1] === "X" && arr[ll][1] === "X" && arr[ll + 1][1] === "X") {
                return false
            }
            if (arr[ll][arr[ll].length] === "X" && arr[ll - 1][arr[ll].length] === "X" && arr[ll + 1][arr[ll].length] === "X" && arr[ll - 1][arr[ll].length - 1] === "X" && arr[ll][arr[ll].length - 1] === "X" && arr[ll + 1][arr[ll].length + 1] === "X") {
                return false
            }
        }

        for (let mm = 1; mm < arr[0].length - 1; mm++) {
            if (arr[0][mm] === "X" && arr[0][mm - 1] === "X" && arr[0][mm + 1] === "X" && arr[1][mm - 1] === "X" && arr[1][mm] === "X" && arr[1][mm + 1] === "X") {
                return false
            }
            if (arr[arr.length - 1][mm] === "X" && arr[arr.length - 1][mm - 1] === "X" && arr[arr.length - 1][mm + 1] === "X" && arr[arr.length - 2][mm - 1] === "X" && arr[arr.length - 2][mm] === "X" && arr[arr.length - 2][mm + 1] === "X") {
                return false
            }
        }

        if (arr[0][0] === "X" && arr[0][1] === "X" && arr[1][0] === "X" && arr[1][1] === "X") {
            return false
        }

        if (arr[0][15] === "X" && arr[0][14] === "X" && arr[1][15] === "X" && arr[1][14] === "X") {
            return false
        }

        if (arr[15][0] === "X" && arr[15][1] === "X" && arr[14][0] === "X" && arr[14][1] === "X") {
            return false
        }

        if (arr[15][15] === "X" && arr[15][14] === "X" && arr[14][14] === "X" && arr[14][15] === "X") {
            return false
        }

        return true
    }

    open = (arr, disabledBomb) => {
        // console.log(arr)
        if (arr) {
            if (this.state.gameLog[arr[0]][arr[1]] === "") {
                this.state.gameLog[arr[0]][arr[1]] = this.state.squareTaken[arr[0]][arr[1]]
                if (this.state.squareTaken[arr[0]][arr[1]] === 0) {
                    console.log("DoingOpenAround")
                    this.openAround(arr)
                }
            }
            if (disabledBomb && this.state.squareTaken[arr[0]][arr[1]] === "X") {
                this.state.gameLog[arr[0]][arr[1]] = this.state.squareTaken[arr[0]][arr[1]]
            } else if (this.state.squareTaken[arr[0]][arr[1]] === "X") {
                let num = arr[0] * 30 + arr[1]
                console.log(num)
                console.log(num.toString)
                document.getElementById(num.toString()).style.color = "red"
                this.state.gameLog[arr[0]][arr[1]] = this.state.squareTaken[arr[0]][arr[1]]
                document.getElementById("winOrLose").innerHTML = "You lost! Stepped on a bomb"
            } else if (disabledBomb && this.state.squareTaken[arr[0]][arr[1]] !== "X") {
                document.getElementById("winOrLose").innerHTML = "You lost! This is not a bomb"
            }
        }
    }

    openAround = (arr) => {
        if (this.state.squareTaken[arr[0] - 1] || this.state.squareTaken[arr[0] - 1] === 0) {
            console.log("top row", this.state.squareTaken[arr[0] - 1], "array: ", arr, "top left: ", this.state.squareTaken[arr[0] - 1][arr[1] - 1])
            if (this.state.squareTaken[arr[0] - 1][arr[1] - 1] || this.state.squareTaken[arr[0] - 1][arr[1] - 1] === 0) {
                console.log("DoingOpenTopLeft")
                this.open([arr[0] - 1, arr[1] - 1])
            }
            console.log("top row", this.state.squareTaken[arr[0] - 1], "array: ", arr, "top: ", this.state.squareTaken[arr[0] - 1][arr[1]])
            if (this.state.squareTaken[arr[0] - 1][arr[1]] || this.state.squareTaken[arr[0] - 1][arr[1]] === 0) {
                console.log("DoingOpenTop")
                this.open([arr[0] - 1, arr[1]])
            }
            console.log("top row", this.state.squareTaken[arr[0] - 1], "array: ", arr, "top right: ", this.state.squareTaken[arr[0] - 1][arr[1] + 1])
            if (this.state.squareTaken[arr[0] - 1][arr[1] + 1] || this.state.squareTaken[arr[0] - 1][arr[1] + 1] === 0) {
                console.log("DoingOpenTopRight")
                this.open([arr[0] - 1, arr[1] + 1])
            }
        }

        if (this.state.squareTaken[arr[0]] || this.state.squareTaken[arr[0] - 1] === 0) {
            console.log("this row: ", this.state.squareTaken[arr[0]], "array: ", arr, "left", this.state.squareTaken[arr[0]][arr[1] - 1])
            if (this.state.squareTaken[arr[0]][arr[1] - 1] || this.state.squareTaken[arr[0]][arr[1] - 1] === 0) {
                console.log("DoingOpenLeft")
                this.open([arr[0], arr[1] - 1])
            }
            console.log("this row: ", this.state.squareTaken[arr[0]], "array: ", arr, "right: ", this.state.squareTaken[arr[0]][arr[1] + 1])
            if (this.state.squareTaken[arr[0]][arr[1] + 1] || this.state.squareTaken[arr[0]][arr[1] + 1] === 0) {
                console.log("DoingOpenRight")
                this.open([arr[0], arr[1] + 1])
            }
        }

        if (this.state.squareTaken[arr[0] + 1] || this.state.squareTaken[arr[0] + 1] === 0) {
            console.log("bottom row", this.state.squareTaken[arr[0] + 1], "array: ", arr, "bottom left: ", this.state.squareTaken[arr[0] + 1][arr[1] - 1])
            if (this.state.squareTaken[arr[0] + 1][arr[1] - 1] || this.state.squareTaken[arr[0] + 1][arr[1] - 1] === 0) {
                console.log("DoingOpenBottomLeft")
                this.open([arr[0] + 1, arr[1] - 1])
            }
            console.log("bottom row", this.state.squareTaken[arr[0] + 1], "array: ", arr, "bottom: ", this.state.squareTaken[arr[0] + 1][arr[1]])
            if (this.state.squareTaken[arr[0] + 1][arr[1]] || this.state.squareTaken[arr[0] + 1][arr[1]] === 0) {
                console.log("DoingOpenBottom")
                this.open([arr[0] + 1, arr[1]])
            }
            console.log("bottom row", this.state.squareTaken[arr[0] + 1], "array: ", arr, "bottom right: ", this.state.squareTaken[arr[0] + 1][arr[1] + 1])
            if (this.state.squareTaken[arr[0] + 1][arr[1] + 1] || this.state.squareTaken[arr[0] + 1][arr[1] + 1] === 0) {
                console.log("DoingOpenBottomRight")
                this.open([arr[0] + 1, arr[1] + 1])
            }
        }
    }

    createBox = () => {
        num += 1
        return <Box id={num} open={this.open} squareTaken={this.state.squareTaken} resetNum={this.resetNum} gameLog={this.state.gameLog} forceUpdateHandler={this.forceUpdateHandler}></Box>
    }

    resetNum = () => {
        num = -1
    }

    createBoxes = () => {
        return arr1.map(this.createBox)
    }

    componentDidMount() {
        this.generateGame()
        this.resetNum()
    }

    refresh = () => {
        window.location.reload(false)
    }

    render() {
        console.log(this.state.squareTaken)
        console.log(this.state.gameLog)
        return <div style={{ width: "900px", margin: "auto" }}>
            <h1 style={{textAlign: "center"}}>Clearing the land mines!</h1>
            <div style={style}>
                {this.createBoxes()}
            </div>
            <div style={{ width: "400px", margin: "auto", marginTop: "20px" }}>
                <h1 id="winOrLose" style={{ color: "red" }}></h1>
                <button onClick={this.refresh} style={{ textAlign: "center", width: "400px", height: "60px", fontSize: "30px", border: "0px", backgroundColor: "#1865f2", color: "#ffffff" }}>Restart</button>
            </div>
        </div>
    }
}

export default Game