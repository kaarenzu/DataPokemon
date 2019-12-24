// Funcion que muestra los jugadores por casa(Gryffindor)
export const gryffindor = (data) => {
  const filtrarGryffindor = data.filter(elemento => (elemento.house === 'Gryffindor'));
  return filtrarGryffindor;
};

// Funcion que muestra los jugadores por casa(Slytherin)
export const slytherin = (data) => {
  const filtrarSlytherin = data.filter(elemento => (elemento.house === 'Slytherin'));
  return filtrarSlytherin;
};

// Funcion que muestra los jugadores por casa(Ravenclaw)
export const ravenclaw = (data) => {
  const filtrarRavenclaw = data.filter(elemento => (elemento.house === 'Ravenclaw'));
  return filtrarRavenclaw;
};

// Funcion que muestra los jugadores por casa(Hufflepuff)
export const hufflepuff = (data) => {
  const filtrarHufflepuff = data.filter(elemento => (elemento.house === 'Hufflepuff'));
  return filtrarHufflepuff;
};

// Funcion que muestra los jugadores que sean estudiantes
export const student = (data) => {
  const filtrarStudent = data.filter(elemento => (elemento.hogwartsStudent === true));
  return filtrarStudent;
};

// Funcion que muestra a los jugadores que sean del staff
export const staff = (data) => {
  const filtrarStaff = data.filter(elemento => (elemento.hogwartsStaff === true));
  return filtrarStaff;
};

// Funcion que muestra a los jugadores que tengan core Unicorn tail-hair
export const unicorn = (data) => {
  const filtrarUnicorn = data.filter(elemento => (elemento.wand.core === 'unicorn tail-hair'));
  return filtrarUnicorn;
};

// Funcion que muestra a los jugadores que tengan core dragon heartstring
export const dragon = (data) => {
  const filtrarDragon = data.filter(elemento => (elemento.wand.core === 'dragon heartstring'));
  return filtrarDragon;
};

// funcion que muestra a los jugadores que tengan core de phoenix feather
export const phoenix = (data) => {
  const filtrarPhoenix = data.filter(elemento => (elemento.wand.core === 'phoenix feather'));
  return filtrarPhoenix;
};

// funcion que muestra a los jugadores que tengan ancestry pure-blood
export const pureBlood = (data) => {
  const filtrarPure = data.filter(elemento => (elemento.ancestry === 'pure-blood'));
  return filtrarPure;
};

// funcion que muestra los jugadores que tengan ancestry half-blood
export const halfblood = (data) => {
  const filtrarHalf = data.filter(elemento => (elemento.ancestry === 'half-blood'));
  return filtrarHalf;
};

// funcion que muestra a los jugadores que tengan ancestry muggleborn
export const muggle = (data) => {
  const filtrarMugle = data.filter(elemento => (elemento.ancestry === 'muggleborn'));
  return filtrarMugle;
};
