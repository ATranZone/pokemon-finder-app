import { useState } from "react";
import { Pokemon } from "../../interfaces/PokemonInterface.tsx";
import PokemonCard from "../../components/PokemonCard/PokemonCard.tsx";

export default function Container() {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [pokemon, setPokemon] = useState<Pokemon | null>(null);
	const [found, setFound] = useState<boolean>(true);
	const url = "https://pokeapi.co/api/v2/pokemon/";

	const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		setSearchQuery(input);
	};

	async function fetchPokemon() {
		console.log(searchQuery);
		try {
			const query = searchQuery.toLowerCase();
			const response = await fetch(url + query);
			if (!response.ok) {
				throw new Error(`Pokemon not found`);
			}
			const data = await response.json();
			const temp: Pokemon = {
				name: data.name,
				sprite: data.sprites.front_default,
				height: data.height,
				weight: data.weight,
			};
			setPokemon(temp);
			setFound(true);
		} catch (error) {
			setFound(false);
			console.error(error);
		}
	}

	return (
		<>
			<div className="flex justify-center">
				{found == true ? (
					<></>
				) : (
					<>Pokemon not found, try its ID number instead</>
				)}
				{pokemon != null && searchQuery != null && found == true ? (
					<PokemonCard
						name={pokemon.name}
						sprite={pokemon.sprite}
						height={pokemon.height}
						weight={pokemon.weight}
					/>
				) : (
					<></>
				)}
			</div>
			<div className="flex flex-col justify-center m-4 items-center gap-2">
				<input
					className="w-32 border-2"
					type="text"
					onKeyDown={(e) => {
						if (e.key == "Enter") {
							fetchPokemon();
						}
					}}
					onChange={handleQuery}
				></input>
				<button className="border-2 w-20" onClick={() => fetchPokemon()}>
					SEARCH
				</button>
			</div>
		</>
	);
}
