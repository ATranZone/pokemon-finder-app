export default function Header() {
	return (
		<header className="bg-gradient-to-r flex flex-col items-center justify-center min-w-full min-h-16 from-yellow-400 to-[#3466AF]">
			<h1 className="text-6xl font-semibold text-black">
				<a>
					<img
						className="w-64 sm:w-80 md:w-[612px]"
						src="https://fontmeme.com/permalink/240830/46d8f613ab78a30ea614b2c0da025afe.png"
						alt="pokemon-font"
					></img>
				</a>
			</h1>
		</header>
	);
}
