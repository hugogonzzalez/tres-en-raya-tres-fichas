// TODO (preparación): copia aquí tu función calculateWinner de la parte 1.
// Las 8 líneas ganadoras: 3 filas, 3 columnas y 2 diagonales.
// Cada número es la posición de una casilla:
//  0 | 1 | 2
//  3 | 4 | 5
//  6 | 7 | 8
const LINEAS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

// TODO (paso 4): recorre LINEAS. Si las tres casillas de una línea
// tienen el mismo valor (y no están vacías), devuelve ese valor ('X' u 'O').
// Si ninguna línea está completa, devuelve null.
export function calculateWinner(squares) {
  for (const linea of LINEAS){

    const [a, b, c] = linea

    if (squares[a] != null && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a]
    }
  }
  return null
}

// No necesita ningún cambio: las líneas ganadoras son las mismas.
