<template>
  <div>
    <div class="video-alpha">
      <div class="video-1">
        <iframe width="410" height="230" src="https://www.youtube.com/embed/3ncYukODrwg" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
               picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-2">
        <iframe width="410" height="230" src="https://www.youtube.com/embed/zsORWGThCJ4" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
               picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-3">
        <iframe width="410" height="230" src="https://www.youtube.com/embed/Nu9bIhH1GDM" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonyVideo"
}
</script>

<style scoped>
div{
  margin-right: 3%;
  margin-left: 3%;
  margin-top: 4%;
  margin-bottom: 4%;
}
.video-alpha{
  display: flex;
  justify-content: center;
}
</style>

