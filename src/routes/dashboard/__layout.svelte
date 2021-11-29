<script>
	import DashboardSideNav from '$lib/components/nav/DashboardSideNav.svelte';
</script>

<main class="flex w-full h-screen">
	<DashboardSideNav />
	<section class="w-full p-4">
		<slot />
	</section>
</main>
