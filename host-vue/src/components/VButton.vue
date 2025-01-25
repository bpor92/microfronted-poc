<template>
  <div>
    <button
      @click="handleClick"
      style="padding: 10px; background-color: blue; color: white; border-radius: 5px;"
    >
      {{ label }}
    </button>
    <div v-if="$slots.default">
      <slot :info="additionalInfo" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { label = 'Kliknij mnie!', additionalInfo = 'Domyślna informacja z Vue' } = defineProps<{ label: string, additionalInfo?: string}>()

const emit = defineEmits<{
  clicked: [string],
}>()

const handleClick = () => {
  emit('clicked', 'Wiadomość z komponentu Vue!');
};
</script>
