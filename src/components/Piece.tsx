import React from 'react';
import styled from 'styled-components';

interface IPiece {
    row: number;
    column: number;
    img_url: string;
    selector: (piece: number[]) => void;
}

interface IPieceWrapper {
    row: number;
    column: number;
    isPawn: boolean;
}

const PieceWrapper = styled.div<IPieceWrapper>`
    position: absolute;
    top: ${({ row, isPawn }) => (row + 1) * 60 - 35 + (isPawn ? 15 : 0) + 'px'};
    left: ${({ column, isPawn }) =>
        (column + 1) * 60 + 8 + (isPawn ? 5 : 0) + 'px'};
`;

const Piece = ({ row, column, img_url, selector }: IPiece) => {
    return img_url !== 'blank' ? (
        <PieceWrapper
            row={row}
            column={column}
            isPawn={img_url.split('_')[1] === 'pawn'}
            onClick={() => selector([row, column])}
        >
            <img
                src={process.env.PUBLIC_URL + `/assets/pieces/${img_url}.png`}
                alt="img"
                height={img_url.split('_')[1] !== 'pawn' ? '80px' : '60px'}
                width={img_url.split('_')[1] !== 'pawn' ? '45px' : '33px'}
            />
        </PieceWrapper>
    ) : null;
};

export default Piece;
