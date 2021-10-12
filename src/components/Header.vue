<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @btn-click="$emit('toggle-add-task')"
      :text="showAddtask ? 'close' : 'Add task'"
      :color="showAddtask ? 'red' : 'green'"
    />
  </header>
</template>

<script lang="js">

//const Button = require ('./components/Button.vue').default;
import Button from "@/components/Button.vue";




export default {
  name: 'Header',
  props : {
    title : String,
    showAddtask : Boolean,
  },
  components: {
    Button
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
