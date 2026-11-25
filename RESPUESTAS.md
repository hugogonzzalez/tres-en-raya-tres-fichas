# Respuestas · Parte 2

Nombre y apellidos: Hugo Gonzalez

## 1. ¿Cómo sabe el programa si toca colocar o mover? ¿Has usado un estado o un valor calculado? ¿Por qué?
const fichasJugador = squares.filter((casilla) => casilla === valor).length
const faseMover = fichasJugador >= MAX_FICHAS

Porque cuenta las fichas del jugador del tablero y si ya tiene 3 pasa a mover, es un valor calculado porque sale del tablero,
si fuera un estado podria quedar desincronizado con las casillas 

## 2. ¿Dónde guardas la ficha seleccionada? ¿Por qué no forma parte del historial?
Esta en Game.jsx

const [selected, setSelected] = useState(null)

No forma parte del historial porque elegir una ficha no es una jugada , no cambia el tablero y el historial guarda
solo los tableros

## 3. ¿Cómo mueves una ficha sin modificar el tablero original?
Haciendo una copia

const nombre = squares.slice()
nombre[selected] = null
nombre[i] = valor
onPlay(nombre)

slice() crea un array nuevo. Las modificaciones se hacen sobre una copia y el tablero anterior que intacto

## 4. ¿Sigue funcionando el cálculo de xIsNext a partir de currentMove? Justifícalo
Si

const xIsNext = currentMove % 2 === 0

Cada jugada suma a currentMove asi que los movimientos pares son X y los impares de O.
Al viajar en el tiempo currentMove cambia y el turno se recalcula solo
