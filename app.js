const URL = "https://pokeapi.co/api/v2/pokemon/";
let ListaPokemon = []

window.onload = () => {
init();
}

const init = async () => {
const pokemons = await getPokemons();
mappedPokemon(pokemons);
}


const getPokemons = async () => {
    
    
    for(index=1; index<151; index++) {
        const pokemonApi = await fetch (`${URL}${index}`);
        
        const convertoJson = await pokemonApi.json();
        ListaPokemon.push(convertoJson);
    }
    
}

const mappedPokemon = () => {
    ListaPokemon.map((pokemon) => {
        
        return printPokemon ({nombre: pokemon.name, imagen: pokemon.sprites.other.dream_world.front_default, types: getTypes(pokemon.types), numero: pokemon.id
        });
})}

const getTypes = (types) => {
    const typeNames = [];
    types.forEach((element) => {
        typeNames.push(element.type.name);
    })
    return typeNames;
}



const printPokemon = (pokemon) => {
    console.log(pokemon)
        let pokemonContainer = document.querySelector('#pokemonContainer')
        pokemonContainer.innerHTML += `
        <div class="card"><figure class="${pokemon.types[0]} content" >
            <h5 class"numeroContainer">#00${pokemon.numero}</h5>
            <div class "image-container"">
            <img src="${pokemon.imagen}" alt="${pokemon.nombre}"/>
            </div>
            <div>
                <h3 class"nombreContainer">${pokemon.nombre}</h3>
                <h4> ${pokemon.types.join(' ')}</h4>
            </h4>
        </figure>
        </div>
        ` 
}



//tipo: pokemon.types[0].type.name
//<p>${pokemon.tipo}</p>