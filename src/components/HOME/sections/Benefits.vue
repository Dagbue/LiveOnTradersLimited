<template>
  <div class="benefit">
    <benefit-child class="benefit-child" />
    <benefit-video class="benefit-video" />
  </div>
</template>

<script>
import BenefitChild from "@/components/HOME/sections/BenefitChild";
import BenefitVideo from "@/components/HOME/sections/BenefitVideo";
export default {
  name: "Benefits",
  components: { BenefitVideo, BenefitChild },
};
</script>

<style scoped>
.benefit {
  display: flex;
  background-color: rgba(247, 247, 249, 1);
}

.benefit-child {
  width: 50%;
}

.benefit-video {
  width: 50%;
}
@media (max-width: 800px) {
  .benefit {
    display: block;
  }
  .benefit-child {
    width: unset;
  }

  .benefit-video {
    width: unset;
  }
}
</style>
