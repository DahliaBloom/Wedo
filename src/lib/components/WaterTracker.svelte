<script>
    import {authStore} from "$lib/utils/stores.js";

    let modal, inputElement
    let waterTracker, uid;
    authStore.subscribe(store => {
        if (store.loading) return
        uid = store.user.uid
        waterTracker = store.data[uid].waterTracker
    });

    $: {
        if (waterTracker) {
            const currentDate = new Date();
            const trackerDate = waterTracker.lastUpdate.toDate()
            if (trackerDate.getFullYear() !== currentDate.getFullYear() ||
                trackerDate.getMonth() !== currentDate.getMonth() ||
                trackerDate.getDate() !== currentDate.getDate()) {
                authStore.update(store => {
                    store.data[uid].waterTracker.dailyWater = 0
                    store.data[uid].waterTracker.lastUpdate = currentDate
                    return store
                })
            }
        }
    }
</script>

{#if !$authStore.loading}
    <div class="w-full rounded-full p-2 px-3 bg-gradient-to-r from-primary to-[#CBDDD9] flex justify-between items-center gap-2">
        <p>🥛</p>
        <div class="flex-grow flex items-center gap-1">
            <div class="flex-grow bg-gray-400 bg-opacity-30 h-3 rounded-full overflow-hidden">
                <div class="h-full progress-bar rounded-full"
                     style="--progress: {waterTracker.dailyWater / waterTracker.dailyGoal * 100}%"></div>
            </div>
            <button class="btn btn-xs btn-circle bg-base-100"
                    on:click={() => {
                    authStore.update((store) => {
                        store.data[uid].waterTracker.dailyWater += 250
                        return store
                    })
                }}>
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
        <button class="italic font-light bg-[#6E93D4] text-base-100 rounded-full px-2" on:click={() => {
                inputElement.focus()
                modal.showModal()
            }}>{waterTracker.dailyWater / 1000}l/{waterTracker.dailyGoal / 1000}l 🚩
        </button>
    </div>
    <dialog bind:this={modal} class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div class="flex items-center gap-2">
                <h3 class="font-bold text-lg bg-primary rounded-lg px-2">Daily water goal in ml</h3>
            </div>
            <form on:submit={() => {
                console.log("im in")
                if (/^\d+$/.test(inputElement.value) && inputElement.value != 0) {
                    authStore.update((store) => {
                        store.data[uid].waterTracker.dailyGoal = inputElement.value
                        return store
                    })
                }
                modal.close()
                inputElement.value = ''
            }}>
                <input bind:this={inputElement} class="input w-full py-4 my-3 focus:outline-none"
                       type="text"/>
            </form>
        </div>
        <form class="modal-backdrop" method="dialog">
            <button></button>
        </form>
    </dialog>

    <style>
        .progress-bar {
            background: linear-gradient(135deg, #4B6DA6 0%, #6E93D4 50%, #4B6DA6 100%);
            background-size: 200% 100%;
            animation: fill-animation 2s ease-in-out forwards, wave-animation 2s linear infinite;
        }

        @keyframes fill-animation {
            0% {
                width: 0;
            }
            100% {
                width: var(--progress);
            }
        }

        @keyframes wave-animation {
            0% {
                background-position-x: 200%;
            }
            100% {
                background-position-x: 0;
            }
        }
    </style>
{/if}