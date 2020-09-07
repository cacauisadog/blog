<template>
  <div>
    <DropsSnippet
      v-for="drops in dropsList"
      :key="drops.slug"
      :drops="drops"
    />
  </div>
</template>

<script>
export default {
  props: {
    dropsList: {
      type: Array,
      required: true
    }
  }
}
</script>
