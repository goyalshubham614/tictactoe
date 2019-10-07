import React,{Component} from 'react' 
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = makeStyles(theme => ({
    btn: {
        background: "#fff",
        border: "1px solid #999",
        cssFloat: "left",
        fontSize: "24px",
        fontWeight: "bold",
        lineHeight: "34px",
        height: "34px",
        marginRight: "-1px",
        marginTop: "-1px",
        padding: "0",
        textAlign: "center",
        width: "34px"
    }
}))

function Square(props) {
    let classes = styles() 
    return <Button className={classes.btn} onClick={props.onClick}>{props.value}</Button>
}

class Board extends Component { 
    renderSquare(i) { 
        return (
          <Square 
            onClick={() => this.props.onClick(i)}
            value = {this.props.squares[i]}
          />
        );
    }
    render() { 
        let squares = []
        for(let i=0;i<16;i+=4) {
            let row = []
            for(let j=i;j<i+4;j++) {
                row.push(j);
            }
            squares.push(row)
        }
        return <div>
            {squares.map((row, index) => { 
            return <div key={index}>
                {row.map((square, index) => {
                    return <React.Fragment key={index}>
                        {this.renderSquare(square)}
                    </React.Fragment>
                })}
            </div>
            })}
        </div>
    }
}

class TicTacToe extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            squares : new Array(16).fill(null),
            xIsNext : true,
            turnCount : 0
        }
    }
    
    handleClick = (index) => {
        let squares = this.state.squares.slice(); 
        if(calculateWinner(squares) || squares[index]) return null; 
        squares[index] = this.state.xIsNext ? "X" : "O" 
        this.setState({
            squares : squares,
            xIsNext : (this.state.xIsNext===true) ? false : true,
            turnCount : this.state.turnCount + 1
        })   
    }

    reset = () => {
        this.setState({
            squares : new Array(16).fill(null),
            xIsNext : true, 
            turnCount : 0
        })
    }

    render() { 
        let turn = (this.state.xIsNext === true) ? "X" : "O" ; 
        let winner = calculateWinner(this.state.squares.slice()); 
        let status 
        if(winner) {
            status = "Winner : " + winner 
        }
        else if(this.state.turnCount === 16) {
            status = "Game Ends in a Draw"
        }
        else {
            status = "Next Player : " + turn 
        }
        return <div style={{margin: "20px"}}>
            <Board 
                onClick={i => this.handleClick(i)}
                squares={this.state.squares.slice()}
            />
            <div style={{margin: "10px"}}>
                {status}
            </div>
            <Button style={{backgroundColor: "Blue", margin:"10px"}} onClick={this.reset}>Go to Start</Button>
        </div> 
    }
}

function calculateWinner(squares) {
    const lines = [
      [0,1,2,3], [4,5,6,7], [8,9,10,11], [12,13,14,15],
      [0,4,8,12], [1,5,9,13], [2,6,10,14], [3,7,11,15], 
      [0,5,10,15], [3,6,9,12]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]  && squares[a] === squares[d]) {
        return squares[a];
      }
    }
    return null;
  }

export default TicTacToe;