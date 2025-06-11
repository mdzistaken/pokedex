export async function commandMap(state) {
    const response = await state.pokeAPI.fetchLocations(state.nextLocationsURL);
    response.results.forEach(loc => console.log(loc.name));
    state.nextLocationsURL = response.next;
    state.prevLocationsURL = response.previous;
}
