<script>
	import { goto } from '$app/navigation';

	import supabase from '$lib/db';

	async function signOut() {
		const { error } = await supabase.auth.signOut();

		if (error) {
			alert(error.message);
		}
	}
</script>

<aside class="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
	<div class="flex flex-col justify-between h-screen p-4 bg-gray-800">
		<div class="text-sm">
			<div class="bg-gray-900 text-white p-5 rounded cursor-pointer">Teams in space</div>
			<div
				class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"
			>
				Backlog
			</div>
			<div class="bg-gray-700 text-blue-300 p-2 rounded mt-2 cursor-pointer">Board</div>
			<div
				class="bg-gray-900 flex justify-between items-center text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"
			>
				<span>Reports</span>
				<span class="w-4 h-4 bg-blue-600 rounded-full text-white text-center font-normal text-xs"
					>5</span
				>
			</div>
			<div
				class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"
			>
				Releases
			</div>
			<div
				class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"
			>
				Components
			</div>
			<div
				class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"
			>
				Repository
			</div>
		</div>

		<button class="btn flex p-3 rounded inline-flex items-center" on:click={signOut}>
			<svg
				class="w-4 h-4 mr-2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				><path
					fillRule="evenodd"
					d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
					clipRule="evenodd"
				/></svg
			>
			<span class="font-semibold">Logout</span>
		</button>
	</div>
</aside>
