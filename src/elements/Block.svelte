<script lang="ts">
  import type { BlockProps } from "../interfaces";

  export let props: BlockProps;
</script>

<div>
  <a href={props.link} target="_blank">
    {#if props.icon}
      <img src={props.icon} alt="icon for {props.text}" />
    {/if}
    <p>{props.text}</p>
  </a>
</div>

<style>
  img {
    width: 100%;
    height: auto;
    max-width: 24px;
  }

  div {
    text-align: center;
    margin: 24px 0;
  }

  a {
    display: block;
    color: #333;
    border-style: solid;
    border-width: 2px;
    border-radius: 6px;
  }

  a:hover {
    color: #e00000;
    text-decoration: none;
  }
</style>
