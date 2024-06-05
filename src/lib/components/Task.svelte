<script>
    import {createEventDispatcher} from 'svelte';

    export let task;

    const dispatch = createEventDispatcher();
</script>

<div class="flex justify-between items-center" class:font-thin={task.done}>
    {task.title}
    <div class="flex items-center gap-2">
        <div class="badge badge-primary flex items-center gap-2">
            {task.author}
            <i class="fa-solid fa-user" class:text-gray-400={task.done}></i>
        </div>
        <input type="checkbox" class="checkbox checkbox-xs checkbox-primary"
               bind:checked={task.done}
               on:change={() => dispatch("statusChange")}/>
    </div>
</div>