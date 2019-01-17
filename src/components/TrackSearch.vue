<template>
  <div class="TrackSearch--container">
    <input class="input" type="text" placeholder="Search for a track">
    <div class="TrackSearch--results-container">
      <p>Track Results Placeholder</p>
    </div>
  </div>
</template>

<style scoped>
.TrackSearch--container {
  max-width: 75%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 1px 1px;
}

.TrackSearch--results-container {
  width: inherit;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
