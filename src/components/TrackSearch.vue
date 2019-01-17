<template>
  <div class="TrackSearch--container">
    <input class="input" type="text" placeholder="Search for a track">
    <div class="TrackSearch--results-container">
      <TrackSearchResult
        v-for="trackSearchResult in trackSearchResults"
        :key="trackSearchResult.id"
        :songName="trackSearchResult.songName"
        :artistName="trackSearchResult.artistName"
        :albumName="trackSearchResult.albumName"
      />
    </div>
  </div>
</template>

<script>
import TrackSearchResult from "./TrackSearchResult";
export default {
  components: { TrackSearchResult },
  data: function() {
    return {
      trackSearchResults: [
        {
          id: 1,
          songName: "Song Name",
          artistName: "Post Malone",
          albumName: "beerbongs & bentleys"
        },
        {
          id: 2,
          songName: "Song Name",
          artistName: "Artist Name",
          albumName: "albumName"
        },
        {
          id: 3,
          songName: "Song Name",
          artistName: "Artist Name",
          albumName: "albumName"
        }
      ]
    };
  }
};
</script>


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
