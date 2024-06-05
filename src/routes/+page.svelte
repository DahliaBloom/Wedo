<script>
    import DailyTaskDoneBar from "$lib/components/DailyTaskDoneBar.svelte";
    import TaskGroups from "$lib/components/TaskGroups.svelte";
    import {authStore, forceUploadStore} from "$lib/utils/stores.js";
    import {onDestroy, onMount} from 'svelte'
    import MotivationalPenguins from "$lib/components/MotivationalPenguins.svelte";

    onDestroy(forceUploadStore)

    function handleVisibilityChange() {
        if (document.hidden) {
            console.log("PWA is not visible");
            forceUploadStore(); // Call your async function here
        } else {
            console.log("PWA is visible");
            // You can handle re-entry logic here if needed
        }
    }

    function handleBeforeUnload(event) {
        event.preventDefault();
        event.returnValue = ''; // Required for some browsers to trigger the alert
        console.log("User is about to leave the PWA");
        forceUploadStore(); // Call your async function here
    }

    function handlePageHide(event) {
        console.log("Page is being hidden");
        forceUploadStore(); // Call your async function here
    }

    onMount(() => {
        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("beforeunload", handleBeforeUnload);
        window.addEventListener("pagehide", handlePageHide);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("beforeunload", handleBeforeUnload);
            window.removeEventListener("pagehide", handlePageHide);
        };
    });
</script>

{#if $authStore.loading}
    <div class="grid place-items-center h-full">
        <span class="loading loading-spinner loading-sm ease-linear"></span>
    </div>
{:else}
    <div class="space-y-6">
        <DailyTaskDoneBar/>
        <TaskGroups/>
    </div>
    <MotivationalPenguins/>
{/if}