<script>
	export let data;
	const { services } = data;
</script>

<section class="py-10 h-screen">
	<div class="container">
        <h2 class="text-3xl text-slate-800">Hizmetler</h2>
        <ul>
            {#each data.services as service}
                <li><a href="/">{service.customer}</a></li>
            {/each}
        </ul>
	</div>
</section>
