<script lang="ts">
  import Icon from "./Icon.svelte";
  import type { IconRowProps } from "../interfaces";

  export let props: IconRowProps;
</script>

<div>
  {#each props.icons as i}
    <Icon props={i} />
  {/each}
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }
</style>
