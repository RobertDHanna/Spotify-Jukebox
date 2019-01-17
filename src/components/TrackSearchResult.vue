<template>
  <article class="TrackSearchResult--container media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="https://i.scdn.co/image/77eb7c17cafe5502589602bd799134625caeb6f3">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <div class="container">
          <strong>Song:</strong>
          {{songName}}
        </div>
        <div class="container">
          <strong>Artist:</strong>
          {{artistName}}
        </div>
        <div class="container">
          <strong>Album:</strong>
          {{albumName}}
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["songName", "artistName", "albumName"]
};
</script>


<style scoped>
.TrackSearchResult--container {
  padding: 10px;
}
</style>
