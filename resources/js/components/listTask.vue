<template>
    <li class="list-group-item d-flex align-items-center justify-content-between py-3 w-50">
        <div class="d-flex align-items-center">
            <input
                type="checkbox"
                @change="updateCheck"
                v-model="isUnchecked"
                class="form-check-input me-3"
            />
            <span :class="['task-title', isUnchecked ? 'completed' : '']">
                {{ task.title }}
            </span>
        </div>
        <button
            class="btn btn-sm btn-outline-danger"
            @click="removeItem"
        >
            X
        </button>
    </li>
</template>

<script>
export default {
    props: ["task"],
    computed: {
        isUnchecked: {
            get() {
                return !this.task.status;
            },
            set(value) {
                this.task.status = !value;
            }
        }
    },
    methods: {
        updateCheck() {
            axios
                .put(`api/tasks/${this.task.id}`, {
                    status: this.task.status
                })
                .then(() => {
                    console.log("Task updated successfully");
                })
                .catch(error => {
                    console.log("Error updating task status", error);
                });
        },
        removeItem() {
            axios
                .delete(`api/tasks/${this.task.id}`)
                .then(res => {
                    if (res.status === 200) {
                        this.$emit("taskchanged");
                    }
                })
                .catch(error => {
                    console.log("Error deleting task", error);
                });
        }
    }
};
</script>

<style scoped>
.task-title {
    font-size: 1rem;
    color: #212529;
    transition: color 0.3s, text-decoration 0.3s;
}

.task-title.completed {
    text-decoration: line-through;
    color: #adb5bd;
}

.list-group-item {
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
}

.list-group-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button.btn-outline-danger {
    font-size: 0.875rem;
    transition: background-color 0.3s, color 0.3s;
}

button.btn-outline-danger:hover {
    background-color: #dc3545;
    color: white;
}
</style>
