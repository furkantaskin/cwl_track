<script>
	import '$lib/assets/style.css';
</script>

<nav class="bg-white dark:bg-gray-800 dark:border-gray-700">
	<div class="container">
		<ul>
			<li>
				<a href="/services">Hizmetler</a>
			</li>
			<li>
				<a href="/">Müşteriler</a>
			</li>
		</ul>
	</div>
</nav>

<main class="bg-white dark:bg-gray-800 dark:border-gray-700">
	<slot>
		<h1>404</h1>
		<p>Page not found</p>
	</slot>
</main>
