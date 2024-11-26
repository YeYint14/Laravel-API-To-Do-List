<template>
    <div class="task-container">
      <div class="task-input-group">
        <input
          type="text"
          placeholder="Add a new task"
          class="task-input"
          v-model="task.title"
          @keyup.enter="addTask"
        />
        <button
          :class="[task.title ? 'active-button' : 'inactive-button']"
          @click="addTask"
        >
          Add Task
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        task: {
          title: "",
        },
      };
    },
    methods: {
      addTask() {
        if (this.task.title.trim() === "") return;
        axios
          .post("api/tasks", {
            title: this.task.title,
            status: 1
          })
          .then((res) => {
            if (res.status === 201) {
              this.task.title = "";
              this.$emit("reloadlist");
            }
          })
          .catch((error) => {
            console.log("Error from axios POST:", error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .task-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .task-input-group {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .task-input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  .task-input:focus {
    border-color: #007bff;
  }
  
  button {
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .active-button {
    background-color: #007bff;
    color: white;
  }
  
  .inactive-button {
    background-color: #ccc;
    color: white;
    cursor: not-allowed;
  }
  
  button:hover:enabled {
    background-color: #0056b3;
  }
  </style>
  