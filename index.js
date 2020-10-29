document.addEventListener("DOMContentLoaded", ()=>{ getRandom3()})

let enemyTeam = []
let yourTeam = []
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const eventHandler = () => {
    let pokemon = document.getElementById("pokemon")
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(resp => resp.json())
      .then(data => {
        // console.log(data.results)
        pokemon.innerHTML += `
     <h1>Choose 3 pokemon to battle and start battle!</h1>
   
  

       <button onClick = "battle()">
        Start pokemon battle!
          </button> `
        for (let i = 0; i < data.results.length; i++) {
          pokemon.innerHTML += `
  
   <ul><li onClick = "getYourXP('${data.results[i].url}')"> ${data.results[i].name}</li> </ul>`
        }
      }
      )
  }
  
  const getYourXP = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        yourTeam.push({name: data.name,
        experience: data.base_experience})
        // console.log("your",yourTeam)
        })
  }

  const getRandom3 =  () => {
// if(yourTeam.length === 3){
  console.log("Test")
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(resp => resp.json())
    .then(data => {
        const shuffled = data.results.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(17);
        // console.log(selected)
        for (let i = 0; i < selected.length; i++){
            getEnemyXP(selected[i].url)
           
        }
    })}
     
      //loop get 
    


    const getEnemyXP = (url) => {
        fetch(url)
          .then(resp => resp.json())
          .then(data => {
            enemyTeam.push({name: data.name,
            experience: data.base_experience})
            // console.log("enemy",enemyTeam)
            })
      }

      const battle = () =>{
          // console.log("work!",enemyTeam)
          if(yourTeam.length === 3){
        let enemyXpProp = enemyTeam.map(x => x.experience)
        // console.log("test",enemyTeam)
        //compare reduced xp, whichever nums bigger write prompt using object data
        let yourXpProp = yourTeam.map(x => x.experience)
        let enemyNameProp = enemyTeam.map(x => x.name)
        let yourNameProp = yourTeam.map(x => x.name)
        // console.log("both",yourXpProp, enemyXpProp  )
       let yourxp =  yourXpProp.reduce(reducer) // 
       let enemyxp = enemyXpProp.reduce(reducer)
       if(yourxp > enemyxp){
           alert(`You win with ${yourNameProp} against ${enemyNameProp}`)
            }
            else{
                alert(`You lost against ${enemyNameProp} with ${yourNameProp}   `)
            }}
            else {
              alert(`Make sure you only choose 3 pokemon then start battle. You selected ${yourTeam.length} `)
          }
      }

  
  