<script>
	import { supabase } from '$lib/db';

	let showLoginForm = false;
	let showRecipeForm = false;

	let userData = {
		email: '',
		password: ''
	};

	let testData = {
		title: ''
	};

	function getRecipes() {
		return supabase.from('Test').select();
	}

	async function addRecipe() {
		let { title } = testData;

		if (title) {
			const { data, error } = await supabase.from('Test').insert([
				{
					title
				}
			]);

			if (error) {
				console.error('Error: ', error);
			}

			if (data) {
				console.log('Data: ', data);
			}
		}

		title = '';
	}

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
<button on:click={() => (showRecipeForm = true)}>Add Recipe</button>

{#if showLoginForm}
	<form on:submit|preventDefault={signUp}>
		<label for="email" />
		<input id="email" name="email" type="email" bind:value={userData.email} />
		<label for="password" />
		<input id="password" name="password" type="password" bind:value={userData.password} />
		<input type="submit" />
	</form>
{:else if showRecipeForm}
	<form on:submit|preventDefault={addRecipe}>
		<label for="title" />
		<input id="title" name="title" type="text" bind:value={testData.title} />
		<input type="submit" />
	</form>
{/if}
<!--
<ul>
	{#each optimisticUpdates as recipe}
		<li>{recipe}</li>
	{/each}
</ul>
-->
<a href="/styleguide">Go to Styleguide</a>
