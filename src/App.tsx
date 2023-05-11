import React from 'react'
import styled from 'styled-components'
import './App.css'

const Pos = styled.div`
    position: absolute;
    top: 50px;
    left: 250px;
`

function App() {
    return (
        <div className="App">
            <img
                src={process.env.PUBLIC_URL + '/assets/board.jpg'}
                alt="img"
                width="100%"
            />
            <Pos>
                <img
                    src={process.env.PUBLIC_URL + '/assets/pieces/w_king.png'}
                    alt="img"
                    height="100px"
                    width="50px"
                />
            </Pos>
        </div>
    )
}

export default App
