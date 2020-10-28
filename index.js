let enemyTeam = []
let yourTeam = []
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const eventHandler = () => {
    let pokemon = document.getElementById("pokemon")
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results)
  
        pokemon.innerHTML += `<h1>Choose 3 pokemon to battle</h1>
        <button onClick = "getRandom3()">
        Start your pokemon battle!
       </button>`
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
      .then(data => {
          data.base_experience
        })
  }

  const getRandom3 =  () => {
if(yourTeam.length === 3){
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(resp => resp.json())
    .then(data => {
        const shuffled = data.results.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(17);
      console.log(selected)})}
      else {
          alert("Make sure you only choose 3 pokemon then start battle.")
      }
      //loop get 
    }

  
  