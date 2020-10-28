let enemyTeam = []
let yourTeam = []
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const eventHandler = () => {
    let pokemon = document.getElementById("pokemon")
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results)
        pokemon.innerHTML += `
     <h1>Choose 3 pokemon to battle, click find enemy, start battle!</h1>
   
        <button onClick = "getRandom3()">
      Find your enemy !
       </button>

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
        console.log("your",yourTeam)
        })
  }

  const getRandom3 =  () => {
if(yourTeam.length === 3){
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(resp => resp.json())
    .then(data => {
        const shuffled = data.results.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(17);
        console.log(selected)
        for (let i = 0; i < selected.length; i++){
            getEnemyXP(selected[i].url)
           
        }
    })}
      else {
          alert("Make sure you only choose 3 pokemon then start battle.")
      }
      //loop get 
    }


    const getEnemyXP = (url) => {
        fetch(url)
          .then(resp => resp.json())
          .then(data => {
            enemyTeam.push({name: data.name,
            experience: data.base_experience})
            console.log("enemy",enemyTeam)
            })
      }

      const battle = () =>{
          console.log("work!",enemyTeam)
        let enemyXpProp = enemyTeam.map(x => x.experience)
        console.log("test",enemyTeam)
        //compare reduced xp, whichever nums bigger write prompt using object data
        let yourXpProp = yourTeam.map(x => x.experience)
     
        console.log("both",yourXpProp, enemyXpProp  )
       let yourxp =  yourXpProp.reduce(reducer) // 
       let enemyxp = enemyXpProp.reduce(reducer)
       if(yourxp > enemyxp){
           alert("you win")
            }
            else{
                alert("you lose")
            }
      }

  
  