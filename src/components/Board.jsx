import Square from "./Square"
import { calculateWinner } from "../utils/calculateWinner"

// TODO (paso 1): constante MAX_FICHAS = 3
const MAX_FICHAS = 3
// Componente: el tablero de 3 x 3 y el texto de estado.
// Props que recibe (paso 2 añade selected y onSelect):
//   selected -> posición de la ficha elegida para mover, o null
//   onSelect -> función para cambiar la ficha elegida
function Board({xIsNext, squares, onPlay, selected, onSelect}) {
  // TODO (paso 1): valores derivados
  const valor = xIsNext ? "X" : "O"
  //   - jugador: 'X' u 'O' según el turno
  //   - fichasJugador: cuántas fichas tiene ese jugador en el tablero
  const fichasJugador = squares.filter((casilla) => casilla === valor).length
  //   - faseMover: true si ya tiene MAX_FICHAS
  const faseMover = fichasJugador >= MAX_FICHAS

  const ganador = calculateWinner(squares)

  // TODO (paso 2): handleClick(i) con dos fases
  //   Fase colocar -> igual que en la parte 1
  //   Fase mover   -> 1) pulsar una ficha propia la selecciona (o la deselecciona)
  //                   2) con una ficha elegida, pulsar una casilla vacía la mueve:
  //                      copia del tablero, null en el origen, jugador en el destino
  function handleClick(i) {
    if (calculateWinner(squares) != null) {
      return
    }

    if (!faseMover) {
      if (squares[i] !== null) {
        return
      }

      const nombre = squares.slice()
      nombre[i] = valor

      onPlay(nombre)
      return
    }

     if (squares[i] === valor) {
      onSelect(i === selected ? null : i)
      return
    }

     if (selected !== null && squares[i] === null) {
      const nombre = squares.slice()
      nombre[selected] = null
      nombre[i] = valor
      onPlay(nombre)
    }
  }

  // TODO (paso 4): texto de estado según la fase
  //   "Turno de X: coloca una ficha"
  //   "Turno de X: elige una de tus fichas para moverla"
  //   "Turno de X: elige una casilla vacía"

  return (
    <>
      <div className="status">
        {ganador ? "Ganador: " + ganador : "Siguiente jugador: " + valor}
      </div>

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  )
}

export default Board