
import POTTER from './data/potter/potter.js';

import {
  gryffindor, slytherin, ravenclaw, hufflepuff, student, staff, unicorn, dragon,
  phoenix, pureBlood, halfblood, muggle,
} from './data.js';

gryffindor(POTTER); slytherin(POTTER); ravenclaw(POTTER); hufflepuff(POTTER);
student(POTTER); staff(POTTER); unicorn(POTTER); dragon(POTTER);
phoenix(POTTER); pureBlood(POTTER); halfblood(POTTER); muggle(POTTER);

// mostrar todo en pantalla
for (let i = 0; POTTER.length; i++) {
  const container = document.getElementById('container');
  container.innerHTML += `<div class="caja">
    <img src = ${POTTER[i].image} class= "imagenes">
    <li class="descripcion" >Name: ${(POTTER)[i].name}
    <li class= "descripcion">Specie: ${(POTTER)[i].species}
    <li class= "descripcion">House: ${(POTTER)[i].house}
    <li class= "descripcion">Core: ${(POTTER)[i].wand.core}
    <li class= "descripcion">Patronus: ${(POTTER)[i].patronus}
    </div>`;
}
