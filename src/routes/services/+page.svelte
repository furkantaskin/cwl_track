<script>
    import SideBar from "$lib/components/SideBar.svelte";

    export let data;

    let passData = null;
    const {services, customers} = data;
    const currencies = {
        "TRY": "₺",
        "USD": "$",
        "EUR": "€"
    }

    function handleWindowKeyDown(event) {
        if (event.key === 'Escape') {
            closeSideBar();
        }
    }

    const openSideBar = (rowData) => {
        passData = rowData;
    }

    const closeSideBar = () => {
        passData = null;
    }
</script>

<svelte:window on:keydown={handleWindowKeyDown}></svelte:window>

<svelte:head>
    <title>Hizmetler</title>
</svelte:head>

<section class="py-20 h-screen flex items-start justify-center">
    <div class="container">
        <h2 class="text-3xl text-slate-800">Hizmetler</h2>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Hizmet
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

                    <tr class="bg-white border-b align-middle transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <a href="{service.url}">
                                <p>{service.name} ({service.type})</p>
                                <span class="text-xs text-gray-900 text-normal dark:text-gray-400">{service.url}</span>
                            </a>
                        </th>
                        <td class="px-6 py-4">
                            {service.start_date}
                        </td>
                        <td class="px-6 py-4">
                            {service.end_date}
                        </td>
                        <td class="px-6 py-4">
                            {service.price} {currencies[service.currency]}
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-2 h-full">
                                {#if service.paid_status}
                                    <span class="block w-2 h-2 bg-green-500 rounded-full"></span>
                                    <span class="">Ödendi</span>
                                {:else}
                                    <span class="block w-2 h-2 bg-red-500 rounded-full"></span>
                                    <span class="">Ödenmedi</span>
                                {/if}

                            </div>
                        </td>
                        <td class="px-6 py-4">
                            {customers[key.toString()]["name"]} {customers[key.toString()]["surname"]}
                        </td>
                        <td class="px-6 py-4">
                                <span class="font-medium text-blue-600 cursor-pointer dark:text-green-500 hover:underline"
                                      on:click={() => openSideBar(service)} on:keydown={() => openSideBar(service)}>Düzenle</span>
                        </td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
    </div>
    {#if passData}
        <SideBar serviceData={passData} currencies={currencies} customers={customers} on:close={() => closeSideBar()}/>
    {/if}
</section>
