<script>
    import { goto } from '$app/navigation';
    let email = '';
    let message = '';

    async function subscribe() {
        const res = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const result = await res.json();

        if (res.ok) {
            message = 'Successfully subscribed!';
            email = ''; // Clear input
        } else {
            message = result.error;
        }
    }

    function handleKeydown(event) {
        if (event.key === "Enter") {
            subscribe();
        }
    }
</script>


<div class="flex items-center gap-2 w-full">
    <input
        type="email"
        bind:value={email}
        placeholder="Enter your email"
        class="p-2 rounded text-black flex-grow border border-gray-300"
        on:keydown={handleKeydown}
    />
    <button
        on:click={subscribe}
        class="p-2 bg-purple-300 hover:bg-green-600 text-black rounded whitespace-nowrap"
    >
        Subscribe
    </button>
</div>

{#if message}
    <p class="mt-2 text-white">{message}</p>
{/if}
