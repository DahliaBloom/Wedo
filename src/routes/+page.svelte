<script>
    import DailyTaskDoneBar from "$lib/components/DailyTaskDoneBar.svelte";
    import TaskGroups from "$lib/components/TaskGroups.svelte";
    import {authStore} from "$lib/utils/stores.js";
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
{/if}