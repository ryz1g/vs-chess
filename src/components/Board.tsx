import React, { useState } from 'react';
import styled from 'styled-components';
import Piece from './Piece';

interface IPiecesInfo {
    [key: number]: { name: string };
}

interface ISquare {
    row: number;
    column: number;
}

const PiecesInfo: IPiecesInfo = {
    0: { name: 'blank' },
    1: { name: 'w_king' },
    2: { name: 'w_queen' },
    3: { name: 'w_rook' },
    4: { name: 'w_bishop' },
    5: { name: 'w_knight' },
    6: { name: 'w_pawn' },
    7: { name: 'b_king' },
    8: { name: 'b_queen' },
    9: { name: 'b_rook' },
    10: { name: 'b_bishop' },
    11: { name: 'b_knight' },
    12: { name: 'b_pawn' },
};

const BoardImage = styled.div`
    width: 600px;
`;

const Square = styled.div<ISquare>`
    position: absolute;
    width: 60px;
    height: 60px;
    top: ${({ row }) => (row + 1) * 60 + 'px'};
    left: ${({ column }) => (column + 1) * 60 + 'px'};
    opacity: 0;
`;

const initBoard = [
    [3, 5, 4, 1, 2, 4, 5, 3],
    [6, 6, 6, 6, 6, 6, 6, 6],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [12, 12, 12, 12, 12, 12, 12, 12],
    [9, 11, 10, 7, 8, 10, 11, 9],
];

const Board = () => {
    const [board, setBoard] = useState<number[][]>(initBoard);
    const [selectedPiece, setSelectedPiece] = useState<number[]>([-1, -1]);

    const moveOrSelectPiece = (to: number[]) => {
        if (selectedPiece[0] === -1) {
            if (board[to[0]][to[1]] === 0) return;
            setSelectedPiece(to);
            console.log('Selected: ' + to);
            return;
        }
        // check valid move here
        console.log('Move to: ' + to);
        const tmpBoard: number[][] = JSON.parse(JSON.stringify(board));
        tmpBoard[selectedPiece[0]][selectedPiece[1]] = 0;
        tmpBoard[to[0]][to[1]] = board[selectedPiece[0]][selectedPiece[1]];
        setBoard(tmpBoard);
        setSelectedPiece([-1, -1]);
    };

    return (
        <>
            <BoardImage>
                <img
                    src={process.env.PUBLIC_URL + '/assets/board.jpg'}
                    alt="img"
                    width="100%"
                />
            </BoardImage>
            {board.map((row, i) => {
                return (
                    <>
                        {row.map((piece, j) => (
                            <Square
                                key={`${i}_${j}`}
                                row={i}
                                column={j}
                                onClick={() => moveOrSelectPiece([i, j])}
                            />
                        ))}
                    </>
                );
            })}
            {board.map((row, i) => {
                return (
                    <>
                        {row.map((piece, j) => (
                            <Piece
                                key={`${PiecesInfo[piece].name}_${i}_${j}`}
                                row={i}
                                column={j}
                                img_url={PiecesInfo[piece].name}
                                selector={moveOrSelectPiece}
                            />
                        ))}
                    </>
                );
            })}
        </>
    );
};

export default Board;
