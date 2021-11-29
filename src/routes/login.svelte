<script>
	import { session } from '$app/stores';

	import AuthFormWrapper from '$lib/components/forms/AuthFormWrapper.svelte';
</script>

<!-- Root element for center items -->
<div class="flex flex-col h-screen bg-gray-900">
	<!-- Auth Card Container -->
	<div class="grid place-items-center mx-2 my-20 sm:my-auto">
		<AuthFormWrapper />
	</div>
	<pre class="w-96 overflow-scroll text-white">
		{JSON.stringify($session, null, 2)}
	</pre>
</div>
