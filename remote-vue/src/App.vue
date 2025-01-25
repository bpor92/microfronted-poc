<script setup lang="ts">
import VButon from 'vueRemote/VButton'

const onClick = val => console.log(val)
</script>

<template>
  <div>
    <VButon label="123" @clicked="onClick"/>
  </div>
</template>

