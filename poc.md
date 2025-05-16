# LoL spell traker
_Vale la pena iniciar un contador por detras para indicar cuanto duro la partida?__
// Runa inspiracion reduce 5% de los hechizos

## State: idle, select, in-game.

1. Pantalla inicial: Simple con un boton para configura los spells para cada linea. (debe cargar el modulo o llevarnos a una nueva seccion)
*Estado: idle*

2. Pantalla de configuracion: las 5 lineas, nos permite seleccionar los spell para cada linea. Permite decir si la linea tiene runas de cdr. Boton para guardar y reset la config
*Estado: select*

3. Pantalla InGame: Las 5 lineas con sus 2 spell configurados. Un boton para indicar que la partida finalizo. Al finalizar, se vuelve a la pantalla inicial
Si se clica en cada spell, el icono se pone en gris con un contador hacia atras de cuanto falta para recuperarlo
 *Estado in-game*

 ## Build
  Utilizar este comando para hacer la build de la app

 eas build --platform android --profile preview