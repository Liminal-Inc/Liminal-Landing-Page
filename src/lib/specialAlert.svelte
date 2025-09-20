<script>
	let message = 'Special announcement goes here!';
	let show = true;

	function closeAlert() {
		show = false;
	}
</script>

{#if show}
	<div class="top-alert">
		<button class="close-btn" on:click={closeAlert}>X</button>
		<p>{message}</p>
	</div>
{/if}

<style>
	.top-alert {
		position: fixed;
		top: 60px; /* Adjust this value based on the height of your navbar */
		left: 0;
		width: 100%;
		background-color: #f44336; /* Red color for alert */
		color: white;
		padding: 10px 20px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
		z-index: 9999; /* Ensure it's above other content */
	}

	.close-btn {
		position: absolute;
		top: 5px;
		right: 10px;
		background: none;
		border: none;
		color: white;
		cursor: pointer;
		font-size: 16px;
		line-height: 1;
	}
</style>
