import { Pokemon } from "../../interfaces/PokemonInterface";

export default function PokemonCard(props: Pokemon) {
	const capitlizeWord = (word: string) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	const convertWeight = () => {
		const result = (props.weight * 0.220462).toFixed(2) + " lb";
		return result;
	};
	const convertHeight = () => {
		const newHeight = props.height * 3.93701;
		const feet = Math.trunc(newHeight / 12);
		const inches = (newHeight % 12).toFixed(0);
		const result = feet + " ft " + inches + " in";
		return result;
	};

	const pokemonName = capitlizeWord(props.name);
	const pokemonTypes = props.types;

	function displayTypes() {
		if (pokemonTypes.length == 1) {
			return pokemonTypes.map((type) => (
				<p key={type}>Type: {capitlizeWord(type)}</p>
			));
		}
		if (pokemonTypes.length == 2) {
			return (
				<div>
					<p>
						Type: {capitlizeWord(pokemonTypes[0])} and{" "}
						{capitlizeWord(pokemonTypes[1])}
					</p>
				</div>
			);
		}
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="text-center text-4xl">{pokemonName}</div>
			<div className="text-center text-2xl">ID: {props.id}</div>

			<div className="text-xl">
				Height: {convertHeight()} | Weight: {convertWeight()}
			</div>
			<div className="flex flex-row mb-2">{displayTypes()}</div>
			<div className="flex flex-row gap-2">
				<img
					className="w-32 border-2 rounded-3xl bg-white"
					src={props.sprite}
				></img>
				<img
					className="w-32 border-2 rounded-3xl bg-white"
					src={props.shinySprite}
				></img>
			</div>
			{/* <audio controls>
				<source src={props.cries} type="audio/ogg"></source>
				Your browser does not support playing audio.
			</audio> */}
		</div>
	);
}
