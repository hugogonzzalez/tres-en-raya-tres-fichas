// TODO (preparación): copia aquí tu Square de la parte 1.
//
// TODO (paso 3): añade la prop "seleccionada". Si es true, el botón debe
// tener las clases "square seleccionada" (la clase ya existe en App.css).
function Square({ value, onSquareClick, seleccionada }) {
  return (
    <button
      className={seleccionada ? "square seleccionada" : "square"} onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default Square
