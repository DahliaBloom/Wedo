<script>
    import {createEventDispatcher} from "svelte";

    export let modal_data

    let inputElement, modal
    let dispatch = createEventDispatcher()

    function handleSubmit(e) {
        dispatch('submit', inputElement.value)
        modal.close()
        inputElement.value = ''
    }
</script>

<button class="btn btn-sm btn-circle btn-primary"
        on:click={() => {
            inputElement.focus()
            modal.showModal()
        }}>
    <i class="fa-solid fa-plus"></i>
</button>
<dialog bind:this={modal} class="modal">
    <div class="modal-box">
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <div class="flex items-center gap-2">
            <h3 class="font-bold text-lg bg-primary rounded-lg px-2">{modal_data.colored}</h3>
            <h3 class="font-bold text-lg">{modal_data.plain}</h3>
        </div>
        <form on:submit={handleSubmit}>
            <input bind:this={inputElement} class="input w-full py-4 my-3 focus:outline-none" placeholder={modal_data.placeholder}
                   type="text"/>
        </form>
    </div>
    <form class="modal-backdrop" method="dialog">
        <button></button>
    </form>
</dialog>