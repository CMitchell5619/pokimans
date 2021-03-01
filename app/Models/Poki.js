export default class Poki{
    constructor(data) {
        this.name = data.name
        this.abilities = data.abilities
        this.height = data.height
        this.sprites = data.sprites.other["official-artwork"]
    }

    get ActiveTemplate() {
        return /*html*/`
        .<div class="card text-left">
          <img class="card-img-top" src="this.sprites.other.official-artwork" alt="">
          <div class="card-body">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Body</p>
          </div>
        </div>




        `
    }
}

// {
//     "abilities": [],
//     "base_experience": 64,
//     "forms": [
//     {
//     "name": "bulbasaur",
//     "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
//     }
//     ],
//     "game_indices": [],
//     "height": 7,
//     "held_items": [],
//     "id": 1,
//     "is_default": true,
//     "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
//     "moves": [],
//     "name": "bulbasaur",
//     "order": 1,
//     "species": {
//     "name": "bulbasaur",
//     "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
//     },
//     "sprites": {},
//     "stats": [],
//     "types": [],
//     "weight": 69
//     }