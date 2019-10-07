import React,{Component} from 'react' 
import {Square} from './Square'

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

export default Board; 