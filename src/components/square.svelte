<script lang="ts">
  interface Props {
    value: string;
    handleClick: () => void;
  }
  let { value, handleClick }: Props = $props();
</script>

<button class="border hover:bg-gray-100" type="button" onclick={handleClick}>
  {value}
</button>
