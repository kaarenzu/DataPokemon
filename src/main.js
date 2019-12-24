
import POTTER from './data/potter/potter.js';

import {
  gryffindor, slytherin, ravenclaw, hufflepuff, student, staff, unicorn, dragon,
  phoenix, pureBlood, halfblood, muggle,
} from './data.js';

gryffindor(POTTER); slytherin(POTTER); ravenclaw(POTTER); hufflepuff(POTTER);
student(POTTER); staff(POTTER); unicorn(POTTER); dragon(POTTER);
phoenix(POTTER); pureBlood(POTTER); halfblood(POTTER); muggle(POTTER);

// Tarjeta de jugadores

  const container = document.getElementById('container');
  const tarjetaJugadores= `<div class="wrap">
  <div class="tarjeta-wrap">
    <div class="tarjeta">
      <div class="adelante card1"><img src = class= "imagenes">
      <li class="descripcion" >Name:
      <li class= "descripcion">Specie:
      <li class= "descripcion">House: 
      <li class= "descripcion">Core: 
      <li class= "descripcion">Patronus: </div>
      <div class="atras">
      <li class="descripcion" >Gender:
      <li class= "descripcion">DateOfBirth: 
      <li class= "descripcion">YearOfBirth: 
      <li class= "descripcion">Ancestry: 
      <li class= "descripcion">Actor: </div> 
      </div>
    </div>
  </div>`;
  
// Hacer que filtre por gryffindor 

const botonGryffindor = document.getElementById('gryffindor');
botonGryffindor.addEventListener( 'click', tarjetaGryffindor );
