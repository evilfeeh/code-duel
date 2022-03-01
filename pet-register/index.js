
function getData() {
  const elements = document.getElementById('formulary').elements
  const animal = orderNewPet(elements)
  console.log(animal)
  showAnimal(animal)
}

function orderNewPet(elements) {
  const pet = {}
  for( let index = 0; elements.length; index++ ) {
    if (elements[index] === undefined) { break }
    if (elements[index].nodeName === "INPUT") {
      pet[`${ elements[index].id }`] = elements[index].value
    }
  }
  return pet
}


function showAnimal(animal) {
  const html = `
    <ul class="list-group">
      <li class="list-group-item active" aria-current="true">ANIMAL REGISTRADO COM SUCESSO</li>
      <li class="list-group-item">Nome: ${ animal.petName }</li>
      <li class="list-group-item">Raça: ${ animal.petBreed }</li>
      <li class="list-group-item">Idade: ${ animal.petAge } ano(s)</li>
      <li class="list-group-item">Peso: ${ animal.petWeight } Kilo(s)</li>
      <li class="list-group-item">Tutor: ${ animal.petGuardian }</li>
    </ul>`

    const col = document.getElementById('petRegistred')
    col.innerHTML = html
}