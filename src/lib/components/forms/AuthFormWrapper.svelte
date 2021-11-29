<script>
	import LoginForm from './LoginForm.svelte';
	import SignUpForm from './SignUpForm.svelte';

	let isNewAccount = false;

	$: formTitle = isNewAccount ? 'Sign Up' : 'Login';
</script>

<!-- Auth Card -->
<div
	class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
          px-6 py-10 sm:px-10 sm:py-6 
          bg-white rounded-lg shadow-md lg:shadow-lg"
>
	<!-- Card Title -->
	<h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">{formTitle}</h2>

	{#if isNewAccount}
		<SignUpForm />
		<div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
			<button class="flex-2 underline" on:click={() => (isNewAccount = false)}
				>Already Registered? Log In.</button
			>
		</div>
	{:else}
		<LoginForm />

		<div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
			<a href="forgot-password" class="flex-2 underline">Forgot password?</a>

			<p class="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">or</p>

			<button class="flex-2 underline" on:click={() => (isNewAccount = true)}
				>Create an Account</button
			>
		</div>
	{/if}
</div>
