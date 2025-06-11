export async function commandMapBack(state) {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page");
        return;
    }
    const response = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
    response.results.forEach(loc => console.log(loc.name));
    state.nextLocationsURL = response.next;
    state.prevLocationsURL = response.previous;
}
