<template>
  <div>
    <DropsSnippet
      v-for="drops in dropsList"
      :key="drops.slug"
      :drops="drops"
      class="mb-8"
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
