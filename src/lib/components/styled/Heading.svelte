<script lang="ts">
	export let type: String = 'h2';
</script>

{#if type === 'h1'}
	<h1><slot /></h1>
{:else if type === 'h2'}
	<h2><slot /></h2>
{:else if type === 'h3'}
	<h3><slot /></h3>
{:else if type === 'h4'}
	<h4><slot /></h4>
{:else if type === 'h5'}
	<h5><slot /></h5>
{:else if type === 'h6'}
	<h6><slot /></h6>
{/if}

<style lang="scss">
	h1,
	h2,
	h3,
	h4 {
		@apply font-bold;
	}
</style>
