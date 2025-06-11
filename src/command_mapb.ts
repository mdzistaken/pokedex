import type { State } from "./state.js";

export async function commandMapBack(state: State): Promise<void> {
  if (!state.prevLocationsURL) {
    console.log("you're on the first page");
    return;
  }

  const response = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
  response.results.forEach(loc => console.log(loc.name));
  state.nextLocationsURL = response.next;
  state.prevLocationsURL = response.previous;
}
