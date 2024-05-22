const input = document.getElementById("search-input");
const button = document.getElementById("search-button");

const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const output = document.getElementById("sprite");

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkPokemon(apiData, input) {
    const names = [];
    for (let pk of apiData.results) {
        names.push(pk.name);
    }

    const inputNumber = parseInt(input);

    if (inputNumber > 0 && inputNumber <= apiData.count) {
        return apiData.results[inputNumber - 1].name; // Corrección del índice
    } else if (names.includes(input)) {
        return input;
    } else {
        return "Pokémon not found";
    }
}

function apiPersonal(idOrName) {
    return fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${idOrName}`)
        .then(response => response.json())
        .then(data => {
            const { height, id, name, weight, stats, types, sprites } = data;

            const hp = stats[0]["base_stat"];
            const attack = stats[1]["base_stat"];
            const defense = stats[2]["base_stat"];
            const xattack = stats[3]["base_stat"];
            const xdefense = stats[4]["base_stat"];
            const speed = stats[5]["base_stat"];
            const type1 = types[0]["type"]["name"];
            const type2 = types[1] ? types[1]["type"]["name"] : '';
            const sprite = sprites["front_default"];
            return { height, id, name, weight, hp, attack, defense, xattack, xdefense, speed, type1, type2, sprite };
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
            return null;
        });
}

button.addEventListener("click", (event) => {
    event.preventDefault(); // Evita que la página se recargue

    const inputlower = input.value.toLowerCase();

    // Primera API
    fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon')
        .then(response => response.json())
        .then(apiData => {
            const result = checkPokemon(apiData, inputlower);
            if (result !== "Pokémon not found") {
                apiPersonal(result).then(habilidades => {
                    if (habilidades) {
                        pokemonName.innerText = `Name: ${capitalizeFirstLetter(habilidades.name)}`;
                        pokemonId.innerText = `ID: #${habilidades.id}`;
                        weight.innerText = `Weight: ${habilidades.weight}`;
                        height.innerText = `Height: ${habilidades.height}`;
                        types.innerText = `Types: ${habilidades.type1.toUpperCase()} ${habilidades.type2 ? 'and ' + habilidades.type2.toUpperCase() : ''}`;
                        hp.innerText = `HP: ${habilidades.hp}`;
                        attack.innerText = `Attack: ${habilidades.attack}`;
                        defense.innerText = `Defense: ${habilidades.defense}`;
                        specialAttack.innerText = `Special Attack: ${habilidades.xattack}`;
                        specialDefense.innerText = `Special Defense: ${habilidades.xdefense}`;
                        speed.innerText = `Speed: ${habilidades.speed}`;
                        output.innerHTML = `<img src="${habilidades.sprite}" alt="${habilidades.name}"/>`;
                    }
                });
            } else {
                alert(result);
            }
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
});
