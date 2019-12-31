
import POTTER from './data/potter/potter.js';

import {
  gryffindor, slytherin, ravenclaw, hufflepuff, student, staff, unicorn, dragon,
  phoenix, pureBlood, halfblood, muggle,
} from './data.js';

gryffindor(POTTER); slytherin(POTTER); ravenclaw(POTTER); hufflepuff(POTTER);
student(POTTER); staff(POTTER); unicorn(POTTER); dragon(POTTER);
phoenix(POTTER); pureBlood(POTTER); halfblood(POTTER); muggle(POTTER);

// Tarjeta de jugadores
function crearCard(POTTER){
  for(let i = 0; POTTER.length; i ++){
    const container = document.getElementById('container');
       container.innerHTML += `<div class="wrap">
      <div class="tarjeta-wrap">
        <div class="tarjeta">
          <div class="adelante card1">
          <img src =  ${POTTER[i].image} class= "imagenes">
          <li class="descripcion" >Name: ${(POTTER)[i].name}
          <li class= "descripcion">Specie: ${(POTTER)[i].species}
          <li class= "descripcion">House: ${(POTTER)[i].house}
          <li class= "descripcion">Core: ${(POTTER)[i].wand.core}
          <li class= "descripcion">Patronus: ${(POTTER)[i].patronus} </div>
          <div class="atras">
          <li class="descripcion" >Gender: ${(POTTER)[i].gender}
          <li class= "descripcion">DateOfBirth: ${(POTTER)[i].dateOfBirth}
          <li class= "descripcion">YearOfBirth: ${(POTTER)[i].yearOfBirth}
          <li class= "descripcion">Ancestry: ${(POTTER)[i].ancestry}
          <li class= "descripcion">Actor: ${(POTTER)[i].actor}</div>
          </div>
        </div>
      </div>`; 
    }
}
// Mostrar todos los jugadores en pantalla
for(let i = 0; POTTER.length; i ++){
  const container = document.getElementById('container');
     container.innerHTML += `<div class="wrap">
    <div class="tarjeta-wrap">
      <div class="tarjeta">
        <div class="adelante card1">
        <img src =  ${POTTER[i].image} class= "imagenes">
        <li class="descripcion" >Name: ${(POTTER)[i].name}
        <li class= "descripcion">Specie: ${(POTTER)[i].species}
        <li class= "descripcion">House: ${(POTTER)[i].house}
        <li class= "descripcion">Core: ${(POTTER)[i].wand.core}
        <li class= "descripcion">Patronus: ${(POTTER)[i].patronus} </div>
        <div class="atras">
        <li class="descripcion" >Gender: ${(POTTER)[i].gender}
        <li class= "descripcion">DateOfBirth: ${(POTTER)[i].dateOfBirth}
        <li class= "descripcion">YearOfBirth: ${(POTTER)[i].yearOfBirth}
        <li class= "descripcion">Ancestry: ${(POTTER)[i].ancestry}
        <li class= "descripcion">Actor: ${(POTTER)[i].actor}</div>
        </div>
      </div>
    </div>`; 
  }

  // Mostrar filtrado gryffindor

  const btnGryffindor = document.getElementById("gryffindor");
  btnGryffindor.addEventListener('click', () => {
    for(let i = 0; POTTER.length; i++) {
      container.innerHTML = ' ';
    const filtradoGryffindor = gryffindor(data);
    crearCard(filtradoGryffindor);
    container.innerHTML = crearCard(filtradoGryffindor);

    }
    
   
  });