import { useState } from "react";
import { Pokemon, PokemonType } from "../../interfaces/PokemonInterface.tsx";
import PokemonCard from "../../components/PokemonCard/PokemonCard.tsx";

export default function Container() {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [pokemon, setPokemon] = useState<Pokemon | null>(null);
	const [found, setFound] = useState<boolean>(true);
	const [init, setInit] = useState<boolean>(true);
	const url = "https://pokeapi.co/api/v2/pokemon/";

	const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		setSearchQuery(input);
	};

	async function fetchPokemon() {
		try {
			const query = searchQuery.toLowerCase();
			const response = await fetch(url + query);
			if (!response.ok) {
				throw new Error(`Pokemon not found`);
			}
			const data = await response.json();
			const pokeTypes: string[] = [];
			data.types.forEach((e: PokemonType) => pokeTypes.push(e.type.name));

			const temp: Pokemon = {
				id: data.id,
				name: data.name,
				sprite: data.sprites.front_default,
				shinySprite: data.sprites.front_shiny,
				height: data.height,
				weight: data.weight,
				types: pokeTypes,
				cries: data.cries.latest,
			};
			setPokemon(temp);
			setFound(true);
			setInit(false);
		} catch (error) {
			setFound(false);
			setInit(false);
			console.error(error);
		}
	}

	return (
		<div className="flex flex-col h-[80vh] justify-center items-center w-full">
			<div className="flex justify-center items-center text-center">
				{init == true ? (
					<p className="text-2xl font-pixel">
						Enter the name of a Pokemon or its ID number
					</p>
				) : (
					<></>
				)}
				{found == true ? (
					<></>
				) : (
					<p className="text-2xl font-pixel">
						Pokemon not found, try its ID number instead
					</p>
				)}
				{pokemon != null && searchQuery != null && found == true ? (
					<PokemonCard
						id={pokemon.id}
						name={pokemon.name}
						sprite={pokemon.sprite}
						shinySprite={pokemon.shinySprite}
						height={pokemon.height}
						weight={pokemon.weight}
						types={pokemon.types}
						cries={pokemon.cries}
					/>
				) : (
					<></>
				)}
			</div>
			<div className="flex flex-row justify-center m-4 items-center gap-1">
				<input
					className="w-32 border-2 font-semibold font-pixel text-black rounded-lg indent-2"
					type="text"
					spellCheck="false"
					//if the user presses the ENTER key, run fetchPokemon() to find whatever they typed in
					onKeyDown={(e) => {
						if (e.key == "Enter") {
							fetchPokemon();
						}
					}}
					//whenever there is a change within the input box, update it to the query state.
					onChange={handleQuery}
				></input>
				<button
					className="border-2 w-20 bg-white text-black font-pixel font-semibold rounded-lg"
					onClick={() => fetchPokemon()}
				>
					SEARCH
				</button>
			</div>
		</div>
	);
}
