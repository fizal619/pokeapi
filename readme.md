
Proof of concept that json can be served from github. Serves as a cache for tier 1 requests to the pokemon api: !(https://pokeapi.co/)[https://pokeapi.co/].

### Usage

- Make requests to `http://fizal.me/pokeapi/api/<id>.json`. e.g `http://fizal.me/pokeapi/api/25.json` would give me the data for pikachu.
- The response  bjody might be plain text because of the way github tried to avoid being used as a database. Simply run `JSON.parse` on it. 😀
- Please use the original api for data outside of the `/pokemon` endpoint.

![lol pokemon](https://media1.tenor.com/images/75a163d30bfdcc79014b5ed4ce9bb286/tenor.gif?itemid=4285044)

__Checkout the script I used !(here)[http://github.com/fizal619/pokeapi/].__