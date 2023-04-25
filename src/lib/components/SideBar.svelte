<script>
    import {createEventDispatcher} from "svelte";
    import {fly, fade} from "svelte/transition";

    import closeIcon from "$lib/assets/svg/close-icon.svg";

    export let serviceData;
    export let currencies;
    export let customers;

    const serviceTypes = {
        "hosting": "Hosting",
        "domain": "Domain"
    }



    let selected;

    const dispatch = createEventDispatcher();
    function close() {
        dispatch("close");
    }
</script>

<div class="fixed inset-0 bg-black opacity-60" on:click={close} transition:fade={{delay: 0, duration:150}}></div>

<div class="fixed top-0 right-0 bottom-0 py-5 px-5 w-1/5 transform-translate translate-x-0 transition-all duration-300 bg-gray-200 dark:bg-slate-800" transition:fly={{x: 200, delay:0}}>
    <button on:click={close} class="flex justify-end w-full">
        <img src="{closeIcon}" alt="Close" class="w-8 h-8 transition-all duration-300 invert hover:invert-[.50]">
    </button>
    <form action="" class="flex flex-col gap-y-5 mt-10">
        <input type="hidden" value="{serviceData.service_id}">
       <div>
           <label for="name" class="sidebar-label">Hizmet Adı</label>
           <input type="text" id="name" bind:value={serviceData.name} class="sidebar-input">
       </div>

        <div>
            <label for="url" class="sidebar-label">Hizmet Adresi</label>
            <input type="text" id="url" bind:value={serviceData.url} class="sidebar-input">
        </div>

        <div>
            <label for="type" class="sidebar-label">Hizmet Türü</label>
            <select name="type" id="type" class="sidebar-input">
                {#each Object.entries(serviceTypes) as [key, value]}
                    <option value={key}>{value}</option>
                {/each}
            </select>
        </div>

       <div>
           <label for="price" class="sidebar-label">Hizmet Fiyatı</label>
           <input type="text" inputmode="numeric" id="price" bind:value={serviceData.price} class="sidebar-input">
       </div>
        <div>
            <label for="currency" class="sidebar-label">Para Birimi</label>
            <select name="currency" id="currency" bind:value={selected} class="sidebar-input">
                {#each Object.entries(currencies) as [key, currency]}
                    <option value={key} selected="{key === serviceData.currency ? 'selected' : ''}">{key}</option>
                {/each}
            </select>
        </div>
        <div class="flex items-center">
            <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
            <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ödeme Durumu</label>
        </div>


        <div>
            <label for="customer" class="sidebar-label">Müşteri</label>
            <select name="customer" id="customer" class="sidebar-input">
                {#each Object.entries(customers) as [key, customer]}
                    <option value={key}>{customer.name + " " + customer.surname}</option>
                {/each}
            </select>
        </div>
        <div class="flex items-center justify-between">
            <button on:click|preventDefault={close} class="button-red">İptal</button>
            <button class="button-green">Kaydet</button>
        </div>
    </form>
</div>
