import { Pokemon } from "../../interfaces/PokemonInterface";

export default function PokemonCard(props: Pokemon) {
	const pokemonName = props.name;
	const newName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

	const convertWeight = () => {
		return (props.weight * 0.220462).toFixed(2);
	};
	const convertHeight = () => {
		const newHeight = props.height * 3.93701;
		const feet = Math.trunc(newHeight / 12);
		const inches = (newHeight % 12).toFixed(0);
		const result = feet + "ft " + inches + "in";
		return result;
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="text-center text-4xl">{newName}</div>
			<div className="text-xl">
				Height: {convertHeight()} | Weight: {convertWeight()} lb
			</div>
			<div></div>
			<img className="w-32" src={props.sprite}></img>
		</div>
	);
}
