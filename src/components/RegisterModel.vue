<template>

</template>

<script>
  export default {
    name: "RegisterModel",
    props: ['imageData', 'SubmitLogin',  'getImageData'],
    data: function () {
      return {
        resquesInfo: {
          userName: '18487166238',
          loginKey: '454545',
          imageCode: ''
        }
      }
    },

    methods: {
      
    },

    created: function () {

    }
  }
</script>

<style scoped>
  .modal {
    margin-top: 10%;
  }
</style>
