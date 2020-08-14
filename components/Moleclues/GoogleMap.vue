<template>
  <iframe
    :src="
      `https://maps.google.co.jp/maps?output=embed&t=m&hl=ja&z=17&q=${address}`
    "
    frameborder="0"
    scrolling="yes"
    width="800px"
    height="500px"
  ></iframe>
</template>

<script>
export default {
  props: {
    address: {
      type: String,
      default: '神奈川県横浜市中区山下町247-2'
    }
  }
}
</script>

<style></style>
