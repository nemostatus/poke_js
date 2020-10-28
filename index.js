const eventHandler = () => {
    let pokemon = document.getElementById("pokemon")
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results)
  
        pokemon.innerHTML += `<h1>Choose 3 pokemon to battle</h1>`
        for (let i = 0; i < data.results.length; i++) {
          pokemon.innerHTML += `
  
   <ul><li onClick = "getXP('${data.results[i].url}')"> ${data.results[i].name}</li> </ul>`
        }
      }
      )
  }
  
  const getXP = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {console.log(data)})
  }

  const getRandom3 =  () => {

    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(resp => resp.json())
    .then(data => {
        const shuffled = data.results.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, n);
      console.log(selected)})
    }

  
  