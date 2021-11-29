<script>
	import supabase from '$lib/db';
	import { session } from '$app/stores';

	let submittingForm = false;

	let userData = {
		email: '',
		password: ''
	};

	async function signUp() {
		const { email, password } = userData;

		submittingForm = true;

		const { user, session, error } = await supabase.auth.signUp({
			email,
			password
		});

		if (error) {
			alert(error.message);
			submittingForm = false;
			return;
		}

		submittingForm = false;
	}

	$: submitBtnText = submittingForm ? 'Creating Account...' : 'Create Account';
</script>

<form class="mt-10" on:submit|preventDefault={signUp}>
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
		placeholder="******"
		autocomplete="current-password"
		bind:value={userData.password}
		class="block w-full py-3 p-2 mt-2 mb-4
                  text-gray-800 appearance-none 
                  border-b-2 border-gray-100
                  focus:text-gray-500 focus:outline-none focus:border-blue-400"
		required
	/>

	<button type="submit" class="btn" disabled={submittingForm}> {submitBtnText} </button>
</form>
