<template>
    <TheHeader/>
    <TheMain/>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheMain from "@/components/TheMain.vue"
export default {
  name: 'HomeView',
  components: {
    TheHeader,
    TheMain
  }
}
</script>
