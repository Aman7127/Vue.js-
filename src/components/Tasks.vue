/* eslint-disable vue/no-unused-vars */ /* eslint-disable vue/require-v-for-key
*/
<template>
  <div v-for="task in tasks" :key="task.id">
    <Task
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>

<script>
import Task from "@/components/Task.vue";

export default {
  name: "Tasks",
  props: {
    tasks: Array
  },
  components: {
    Task
  },
  emits: ["delete-task", "toggle-reminder"]
};
</script>
