<template>
  <div>
    <div
      v-for="i in 4"
      :key="i"
      class="skelediv rounded shadow overflow-hidden mb-8 border border-white p-4"
    >
      <div
        class="h-5 bg-gray-600 mb-2 rounded-lg"
        :style="`width: ${Math.floor(Math.random() * 51) + 50}%;`"
      />
      <div class="h-3 bg-gray-700 w-16 mb-6 rounded-lg" />
      <div class="h-3 bg-gray-800 w-100 mb-2 rounded-lg" />
      <div
        class="h-3 bg-gray-800 w-16 rounded-lg"
        :style="`width: ${Math.floor(Math.random() * 51) + 50}%;`"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes aniVertical {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.skelediv {
  position: relative;
  animation: aniVertical 3s ease;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  opacity: 0;
}
.skelediv:nth-child(2) {
  animation-delay: 0.5s;
}

.skelediv:nth-child(3) {
  animation-delay: 1s;
}

.skelediv:nth-child(4) {
  animation-delay: 1.5s;
}
</style>
