<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      title="Task Tracker"
      :showAddtask="showAddTask"
    />
    <div>
      <Addtask v-show="showAddTask" @add-task="addTask" />
    </div>
    <Tasks
      @toggle-reminder="ToggleReminder"
      @delete-task="DeleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script lang="js">
 import Header from "@/components/Header.vue";

 import Tasks from "@/components/Tasks.vue";
 import Addtask from "@/components/Addtask.vue";


  export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    Addtask
  },
  data() {
    return{
    tasks : [],
    showAddTask: false,

    }
  },
  methods : {
    toggleAddTask(){

      //console.log("toggle");
      this.showAddTask = !this.showAddTask;
    },

    DeleteTask(id) {
      if(confirm("Are you sure"))
        this.tasks = this.tasks.filter((task) => task.id!== id )
    },

    ToggleReminder(id){
      this.tasks = this.tasks.map((task) => task.id===id ? {...task , reminder : !task.reminder} : task )
    },

    addTask(task) {
      this.tasks = [...this.tasks , task];
    },

    async fetchtasks() {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();
      return data
    },

 },
  async created() {
    this.tasks = await this.fetchtasks()

  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
