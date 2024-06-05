<script>
    import Task from "$lib/components/Task.svelte";
    import {authStore} from "$lib/utils/stores.js";

    let taskGroups = [];

    authStore.subscribe(store => {
        taskGroups = store.data.taskGroups
    });

    function addTask(taskGroup, e) {
        const taskTitle = e.target.children[0].value
        authStore.update(store => {
            taskGroup.tasks.unshift({
                title: taskTitle,
                author: store.user.name,
                done: false
            })
            return store
        })
        e.target.parentElement.parentElement.close()
    }
</script>

<div class="flex flex-col gap-1.5">
    {#each taskGroups as taskGroup}
        <div class="collapse bg-base-100 drop-shadow-lg">
            <input type="radio" name="taskGroups"/>
            <div class="collapse-title font-light text-xl flex gap-2 justify-between items-center pr-[1rem] truncate">
                {taskGroup.title}
                <div class="basis-1/4 flex-shrink-0">
                    <progress class="progress progress-accent" value={taskGroup.donePercentage}
                              max="100"></progress>
                </div>
            </div>
            <div class="collapse-content space-y-2">
                <div class="divider -mt-0.5"></div>
                {#each taskGroup.tasks as task}
                    <Task task={task} on:statusChange={(e) => {
                        taskGroup.donePercentage = Math.round((taskGroup.tasks.filter(task => task.done).length / taskGroup.tasks.length) * 100)
                        const [task] = taskGroup.tasks.splice(taskGroup.tasks.findIndex(task => task.done), 1)
                        taskGroup.tasks.push(task)
                        authStore.update(store => store)
                    }}/>
                {/each}
                <div class="grid place-items-center pt-1">
                    <button class="btn btn-sm btn-circle btn-primary"
                            onclick="modal_{taskGroup.title.replace(/[^\x00-\x7F]/g, '').replace(/ /g, '_')}.showModal()">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    <dialog id="modal_{taskGroup.title.replace(/[^\x00-\x7F]/g, '').replace(/ /g, '_')}" class="modal">
                        <div class="modal-box">
                            <form method="dialog">
                                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div class="flex items-center gap-2">
                                <h3 class="font-bold text-lg bg-primary rounded-lg px-2">{taskGroup.title}</h3>
                                <h3 class="font-bold text-lg">...</h3>
                            </div>
                            <form on:submit={(e) => addTask(taskGroup, e)}>
                                <input type="text" placeholder="Task ..."
                                       class="input w-full py-4 my-3 focus:outline-none"/>
                            </form>
                        </div>
                        <form method="dialog" class="modal-backdrop">
                            <button></button>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    {/each}
</div>