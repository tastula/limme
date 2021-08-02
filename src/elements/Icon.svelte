<script lang="ts">
  import type { IconProps } from "../interfaces";

  export let props: IconProps;
</script>

<a href={props.link}>
  <div>
    <i class={props.icon} />
  </div>
</a>

<style>
  a {
    color: #333;
  }
  a:hover {
    color: #e00000;
  }
  div {
    padding: 6px 3px;
  }
  i {
    font-size: 40px;
  }
</style>
