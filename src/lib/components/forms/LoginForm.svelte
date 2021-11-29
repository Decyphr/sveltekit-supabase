<script>
	import supabase from '$lib/db';
	import { session } from '$app/stores';

	let userData = {
		email: '',
		password: ''
	};

	async function signIn() {
		const { email, password } = userData;

		const {
			user,
			session: supabaseSession,
			error
		} = await supabase.auth.signIn({
			email,
			password
		});

		if (error) {
			console.error('Error: ', error);
			return;
		}

		$session = supabaseSession;
	}
</script>

<form class="mt-10" on:submit|preventDefault={signIn}>
	<!-- Email Input -->
	<label for="email" class="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
	<input
		id="email"
		type="email"
		name="email"
		placeholder="e-mail address"
		autocomplete="email"
		bind:value={userData.email}
		class="block w-full py-3 px-1 mt-2 
                  text-gray-800 appearance-none 
                  border-b-2 border-gray-100
                  focus:text-gray-500 focus:outline-none focus:border-blue-400"
		required
	/>

	<!-- Password Input -->
	<label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
		>Password</label
	>
	<input
		id="password"
		type="password"
		name="password"
		placeholder="password"
		autocomplete="current-password"
		bind:value={userData.password}
		class="block w-full py-3 px-1 mt-2 mb-4
                  text-gray-800 appearance-none 
                  border-b-2 border-gray-100
                  focus:text-gray-500 focus:outline-none focus:border-blue-400"
		required
	/>

	<!-- Auth Buttton -->
	<button type="submit" class="btn"> Login </button>
</form>
