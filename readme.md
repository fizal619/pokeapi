# PokeAPI Cache

Proof of concept that json can be served from github. Serves as a cache for tier 1 requests to the pokemon api: https://pokeapi.co/

## Usage

- Make requests to `http://fizal.me/pokeapi/api/<id>.json`.
- The response would be plain text because of the way github avoids being used as a database. Simply run `JSON.parse` on it. 😀