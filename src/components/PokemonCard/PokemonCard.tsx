import { Pokemon } from "../../interfaces/PokemonInterface";
import { typeColors } from "../../components/PokemonCard/TypeColors";
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
				<p key={type} className={`${typeColors[type]} font-semibold`}>
					Type: {capitlizeWord(type)}
				</p>
			));
		}
		if (pokemonTypes.length == 2) {
			return (
				<div>
					<span>Type: </span>
					<span className={`${typeColors[pokemonTypes[0]]} font-semibold`}>
						{capitlizeWord(pokemonTypes[0])}
					</span>
					<span> and </span>
					<span className={`${typeColors[pokemonTypes[1]]} font-semibold`}>
						{capitlizeWord(pokemonTypes[1])}
					</span>
				</div>
			);
		}
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="text-center text-4xl">{pokemonName}</div>
			<div className="text-center text-2xl">ID: {props.id}</div>

			<div className="text-xl text-balance text-center">
				Height: {convertHeight()} Weight: {convertWeight()}
			</div>
			<div className="flex flex-row mb-2">{displayTypes()}</div>
			<div className="flex flex-row gap-2">
				<img
					className="w-32 sm:w-40 border-2 rounded-3xl bg-white transition duration-300 hover:scale-105"
					src={props.sprite}
				></img>
				<img
					className="w-32 sm:w-40 border-2 rounded-3xl bg-white transition duration-300 hover:scale-105"
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
