const fs = require('fs');

for(let i = 1; i <= 802; i++){
  console.log('');
  try {
    const pokemon = require(`./api/${i}.json`);
    const strVersion = JSON.stringify(pokemon);
    fs.writeFileSync(`./api/v2/name/${pokemon.name}.json`, strVersion);
    console.log('saved', pokemon.name)
  } catch(e) {
    console.log('Getting', i, 'failed.');
  }
  console.log('');
}