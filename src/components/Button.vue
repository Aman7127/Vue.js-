<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script lang="js">
export default  {
    name : "Button",
    props : {
        text : String,
        color : String
    },
    methods : {
        onClick() {
            this.$emit('btn-click')
        },
    },
}
</script>
