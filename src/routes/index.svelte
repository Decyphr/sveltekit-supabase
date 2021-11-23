<script>
	import { supabase } from '$lib/db';

	let showLoginForm = false;

	let userData = {
		email: '',
		password: ''
	};

	async function signUp() {
		const { email, password } = userData;

		if (email && password) {
			const { user, error } = await supabase.auth.signUp({
				email,
				password
			});
		}

		console.log('User Created');
	}
</script>

<h1>Welcome to Hell</h1>
<button on:click={() => (showLoginForm = true)}>Sign Up</button>

{#if showLoginForm}
	<form on:submit|preventDefault={signUp}>
		<label for="email" />
		<input id="email" name="email" type="email" bind:value={userData.email} />
		<label for="password" />
		<input id="password" name="password" type="password" bind:value={userData.password} />
		<input type="submit" />
	</form>
{/if}

<style lang="scss">
	h1 {
		color: $primary-color;
	}
</style>
