<script>
    export let data;
    const {services, customers} = data;
    const currencies = {
        "TRY": "₺",
        "USD": "$",
        "EUR": "€"
    }
</script>

<section class="py-10 h-screen">
    <div class="container">
        <h2 class="text-3xl text-slate-800">Hizmetler</h2>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Hizmet Adı
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Hizmet Adresi
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Hizmet Türü
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Başlangıç Tarihi
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Bitiş Tarihi
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Fiyat
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Ödeme Durumu
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Müşteri
                    </th>
                    <th scope="col" class="px-6 py-3">
                        İşlemler
                    </th>
                </tr>
                </thead>
                <tbody>
                {#each Object.entries(services) as [key, service]}

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {service.name}
                        </th>
                        <td class="px-6 py-4">
                            {service.url}
                        </td>
                        <td class="px-6 py-4">
                            {service.type}
                        </td>
                        <td class="px-6 py-4">
                            {service.start_date}
                        </td>
                        <td class="px-6 py-4">
                            {service.end_date}
                        </td>
                        <td class="px-6 py-4">
                            {service.price} {currencies[service.currency]}
                        </td>
                        <td class="px-6 py-4 flex items-center gap-2">
                            {#if service.paid_status}
                                <span class="block w-2 h-2 bg-green-500 rounded-full"></span>
                                <span class="">Ödendi</span>
                            {:else}
                                <span class="block w-2 h-2 bg-red-500 rounded-full"></span>
                                <span class="">Ödenmedi</span>
                            {/if}

                        </td>
                        <td class="px-6 py-4">
                            {customers[key.toString()]["name"]}
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Düzenle</a>
                        </td>
                    </tr>
                {/each}

                </tbody>
            </table>
        </div>
    </div>
</section>


{#each Object.entries(services) as [key, service]}

    <li>
        <a href="/">
            {key} - {service.name}
            {customers[key.toString()]["name"]}
        </a>
    </li>
{/each}