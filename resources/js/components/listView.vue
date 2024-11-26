
<template>
    <div class="mt-4">
        <h4>To Do List</h4>
        <hr class="w-50 m-auto mb-3" />
        <ul class="list-group m-auto mb-5">
            <list-task
                :task="task"
                v-on:taskchanged="$emit('reloadlist')"
                v-for="task in tasks"
                :key="task.id"
                class="m-auto my-1 text-justify text-wrap"
            />
        </ul>
    </div>
</template>

<script>
import listTask from "./listTask";

export default {
    components: {
        listTask
    },
    props: ["tasks"]
};
</script>

<style scoped></style>