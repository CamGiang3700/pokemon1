async function getList() {
    const list_poke = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000")
    return list_poke.json()
}

async function getPoke(url) {
    const poke = await fetch(url)
    return poke.json()

}


async function main() {
    list_poke = await getList()

    for (var i = 1; i <= 50 ; i++) {

        poke = await getPoke(list_poke.results[i].url)
        
        name_poke = list_poke.results[i].name;
        
        img =  poke.sprites.other.dream_world.front_default 
        const pokemon = `
        <div class="card">
            <img src="${img}" style="height:300px; width:300px">
            <h1>${name_poke}</h1>
        </div>'`
        document.getElementsByClassName("list_pokemon")[0].innerHTML += pokemon;
}
    

}
main()


