import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
    renderSquire(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
    }

    render() {
        return <div>
            <div className="board-row">
                {this.renderSquire(0)}
                {this.renderSquire(1)}
                {this.renderSquire(2)}
            </div>
            <div className="board-row" >
                {this.renderSquire(3)}
                {this.renderSquire(4)}
                {this.renderSquire(5)}
            </div>
            <div className="board-row">
                {this.renderSquire(6)}
                {this.renderSquire(7)}
                {this.renderSquire(8)}
            </div>
        </div>
    }
}