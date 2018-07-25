const admin = require("firebase-admin");
const axios = require("axios");
const serviceAccount = require("./pokeapi-nycda.json");
const fs = require('fs');

const wait = (int) => {
  return new Promise(resolve => {
    setTimeout(()=>resolve('Woo!'), int);
  });
}

const getPokemon = async (id) => {
  try {
    await wait(1500);
    return axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
  } catch(e) {
    await wait(1500);
    return getPokemon(id);
  }
}

(async function(){

  for(let i = 1; i <= 802; i++){
    console.log('');
    console.log('Getting', i);
    let res = await getPokemon(i);
    const strVersion = JSON.stringify(res.data);
    console.log(res.data.name);
    fs.writeFileSync(`./api/${i}.json`, strVersion);
    console.log(`Saved ${res.data.name} to the db as ${i}!`)
    console.log('');
  }


})()
