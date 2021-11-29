<script>
	import '../app.css';
	import supabase from '$lib/db';
	import { session } from '$app/stores';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	if (browser) {
		supabase.auth.onAuthStateChange((event, supabaseSession) => {
			$session = supabaseSession;

			$session ? goto('/dashboard') : goto('/');
		});
	}
</script>

<slot />
