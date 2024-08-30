export interface Pokemon {
	id: number;
	name: string;
	sprite: string;
	shinySprite: string;
	height: number;
	weight: number;
	types: string[];
	cries: string;
}

export interface PokemonType {
	type: {
		name: string;
	};
}
