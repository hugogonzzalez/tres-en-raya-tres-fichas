import Board from './Board'
import { useState } from 'react'

// Componente principal del juego.
// Parte 2: mismo historial que la parte 1, pero ahora también guarda
// la ficha elegida para mover (selected).
function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)

  // TODO (paso 2): estado selected -> null (posición de la ficha elegida para mover)

  const currentSquares = history[currentMove]

  const xIsNext = currentMove % 2 === 0

  // TODO (paso 2): en handlePlay, reiniciar selected a null
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  // TODO (paso 2): en jumpTo, reiniciar selected a null
  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description = 'Ir al movimiento #' + move
    } else {
      description = 'Ir al inicio de la partida'
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        {/* TODO (paso 2): pasa a Board las props selected y onSelect, además de xIsNext, squares y onPlay */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game