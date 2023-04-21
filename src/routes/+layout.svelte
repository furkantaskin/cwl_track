<script>
    import "$lib/assets/style.css"
</script>

<nav class="container">
    <ul>
        <li>
            <a href="/services">Hizmetler</a>
        </li>
        <li>
            <a href="/">Müşteriler</a>
        </li>
    </ul>
</nav>

<main>
    <slot>
        <h1>404</h1>
        <p>Page not found</p>
    </slot>
</main>