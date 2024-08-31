import { Pokemon } from "../../interfaces/PokemonInterface";
import { typeColors } from "../../components/PokemonCard/TypeColors";
export default function PokemonCard(props: Pokemon) {
	const capitlizeWord = (word: string) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	const convertWeight = () => {
		const result = (props.weight * 0.220462).toFixed(2) + " lbs";
		return result;
	};
	const convertHeight = () => {
		const newHeight = props.height * 3.93701;
		const feet = Math.trunc(newHeight / 12);
		const inches = Math.floor(newHeight % 12);
		const result = feet + "'" + inches + '"';
		return result;
	};

	const pokemonName = capitlizeWord(props.name);
	const pokemonTypes = props.types;

	function displayTypes() {
		if (pokemonTypes.length == 1) {
			return pokemonTypes.map((type) => (
				<div className="flex flex-row justify-between items-center gap-1 w-[100%] sm:justify-evenly">
					<span className="text-black font-semibold font-pixel">TYPE </span>
					<span
						key={type}
						className={`${typeColors[type]} font-semibold font-pixel text-xl`}
					>
						{type.toUpperCase()}
					</span>
				</div>
			));
		}
		if (pokemonTypes.length == 2) {
			return (
				<div className="flex flex-row justify-between items-center gap-1 w-[100%] sm:justify-evenly">
					<span className="text-black font-semibold font-pixel ">TYPE </span>
					<span
						className={`${
							typeColors[pokemonTypes[0]]
						} font-semibold font-pixel text-xl`}
					>
						{pokemonTypes[0].toUpperCase()}
					</span>{" "}
					<span
						className={`${
							typeColors[pokemonTypes[1]]
						} font-semibold font-pixel text-xl`}
					>
						{pokemonTypes[1].toUpperCase()}
					</span>
				</div>
			);
		}
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="border-[1px] border-black bg-white rounded-md w-[90px] sm:w-[120px] mb-2 bg-gradient-to-b ">
				<span className="font-semibold font-pixel text-black text-xl ">
					INFO
				</span>
			</div>
			<div className="flex flex-row border-2 bg-white rounded-md w-[240px] h-full sm:w-[450px] sm:h-[200px] justify-around items-center transition duration-300 hover:scale-105">
				<img className="sm:w-32" src={props.sprite}></img>

				<div className="flex flex-col justify-evenly sm:size-60">
					<div className="flex flex-col border-black border-[1px] rounded-lg">
						<div className="flex flex-row gap-2 justify-center rounded-t-md bg-gradient-to-b from-red-500 to-white">
							<img className="w-5" src="../src/assets/pokeball2.svg"></img>
							<span className="font-semibold font-pixel text-black">
								No. {props.id}
							</span>
						</div>
						<div className="">
							<span className="flex flex-row justify-center items-center font-[500] font-pixel text-2xl text-black indent-1">
								{pokemonName}
							</span>
						</div>
					</div>

					<div className="flex flex-row sm:w-[100%]">{displayTypes()}</div>

					<div className="flex flex-col bg-white border-black border-[1px] rounded-lg sm:w-[75%] sm:ml-[20%]">
						<span className="flex flex-row justify-between border-black border-b-[1px] border-dotted">
							<span className="font-semibold font-pixel ml-4 text-black">
								HT
							</span>
							<span className="font-semibold font-pixel mr-4 text-black">
								{convertHeight()}
							</span>
						</span>
						<span className="flex flex-row justify-between">
							<span className="font-semibold font-pixel ml-4 text-black">
								WT
							</span>
							<span className="font-semibold font-pixel mr-4 text-black">
								{convertWeight()}
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
