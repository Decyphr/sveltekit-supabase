const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		},
		extend: {
			colors: {
				primary: {
					lt: '#777',
					md: '#171717',
					dk: '#000'
				},
				secondary: {
					lt: '#4abad3',
					md: '#3CB6D4',
					dk: '#00acd3'
				},
				error: '#ffcccb'
			}
		}
	},

	plugins: []
};

module.exports = config;
