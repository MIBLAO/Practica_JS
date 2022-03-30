
function fetchPokemon () {
    const pokemon = document.getElementById("pokemon");
    let pokeInput = pokemon.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    /*fetch -> realiza la consulta en la API*/ 
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("./imagenes/pokemon-sad.gif")
        }else{
            return res.json();
        }   
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
    
}

//fetchPokemon();

function pokeImage(url){
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

//pokeImage('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png');

function imprimir () {
    const pokemon = document.getElementById("pokemon");
    let pokeInput = pokemon.value;
    console.log("Hola " + pokeInput);
}