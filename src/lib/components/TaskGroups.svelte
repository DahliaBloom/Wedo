<script>
    import Task from "$lib/components/Task.svelte";
    import {authStore} from "$lib/utils/stores.js";
    import AddInputHandlerButton from "$lib/components/AddInputHandlerButton.svelte";

    let taskGroups = [];

    authStore.subscribe(store => {
        taskGroups = store.data.taskGroups
    });

    async function addTask(taskGroup, taskTitle) {
        await authStore.update(store => {
            taskGroup.tasks.unshift({
                title: taskTitle,
                author: store.user.name,
                done: false
            })
            taskGroup.taskHasBeenAdded = true
            return store
        })
    }

    async function addGroup(groupTitle) {
        await authStore.update(store => {
            store.data.taskGroups.push({
                title: groupTitle,
                donePercentage: 0,
                tasks: []
            })
            return store
        })
    }

    async function taskDone(taskGroup) {
        taskGroup.donePercentage = Math.round((taskGroup.tasks.filter(task => task.done).length / taskGroup.tasks.length) * 100)
        const [task] = taskGroup.tasks.splice(taskGroup.tasks.findIndex(task => task.done), 1)
        taskGroup.tasks.push(task)
        await authStore.update(store => {
            if (taskGroup.donePercentage === 100) store.data.taskGroups.splice(store.data.taskGroups.findIndex(group => group === taskGroup), 1)
            taskGroups = store.data.taskGroups
            return store
        })
    }

</script>

<div class="flex flex-col gap-1.5">
    {#each taskGroups as taskGroup}
        <div class="collapse bg-base-100 shadow-lg tr">
            <input type="radio" name="taskGroups"/>
            <div class="collapse-title font-light text-lg flex gap-2 justify-between items-center pr-[1rem] truncate">
                {taskGroup.title}
                <div class="basis-1/4 flex-shrink-0">
                    <progress class="progress progress-accent" value={taskGroup.donePercentage}
                              max="100"></progress>
                </div>
            </div>
            <div class="collapse-content space-y-2">
                <div class="divider -mt-0.5"></div>
                {#each taskGroup.tasks as task}
                    <Task task={task} on:statusChange={() => taskDone(taskGroup)}/>
                    <!-- TODO resolve checkbox can be marked multiple times -->
                {/each}
                <div class="grid place-items-center pt-1">
                    <AddInputHandlerButton modal_data={{
                        colored: taskGroup.title,
                        plain: '...',
                        placeholder: 'Task ...'
                    }} on:submit={(e) => addTask(taskGroup, e.detail)}/>
                </div>
            </div>
        </div>
    {/each}
    <div class="mt-3 mb-10 grid place-items-center z-50">
        <AddInputHandlerButton modal_data={{
            colored: "Add new group",
            plain: "...",
            placeholder: "Group name"
        }} on:submit={(e) => addGroup(e.detail)}/>
    </div>
</div>