<script lang="ts">
  import type { PictureProps } from "../interfaces";

  export let props: PictureProps;
</script>

{#if props.link}
  <a href={props.link} target="_blank">
    <div class={props.profile ? "" : "border"}>
      <img
        src={props.path}
        class="{props.style ?? 'default'} {props.profile ? 'small' : ''}"
        alt="profile"
      />
    </div>
  </a>
{:else}
  <div class={props.profile ? "" : "border"}>
    <img
      src={props.path}
      class="{props.style ?? 'default'} {props.profile ? 'small' : ''}"
      alt="profile"
    />
  </div>
{/if}

<style>
  .small {
    width: 96px;
    height: 96px;
  }
  .big {
    object-fit: cover;
  }
  .default {
    object-fit: cover;
    border-radius: 6px;
    width: calc(100% -4px -24px);
    height: auto;
    max-height: 300px;
    color: #333;
    border-style: solid;
    border-width: 2px;
    border-radius: 6px;
    padding: 24px;
    background: #bad9ea;
  }
  .circle {
    border-radius: 50%;
  }
  .squareSoft {
    border-radius: 25%;
  }
  .squareHard {
    border-radius: 0%;
  }
  .default:hover {
    color: #e00000;
    text-decoration: none;
  }
</style>
