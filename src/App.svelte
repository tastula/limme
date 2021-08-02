<script lang="ts">
  import { Block, IconRow, Picture } from "./elements";
  import { ElementType } from "./enums";
  import type {
    AppProps,
    ElementProps,
    BlockProps,
    PictureProps,
    IconRowProps,
  } from "./interfaces";

  export let props: AppProps;

  const toBlockProps = (p: ElementProps): BlockProps => p as BlockProps;
  const toIconRowProps = (p: ElementProps): IconRowProps => p as IconRowProps;
  const toPictureProps = (p: ElementProps): PictureProps => p as PictureProps;
</script>

<main>
  <Picture props={props.profilePicture} isProfilePic />
  <h1>{props.title}</h1>
  {#if props.description}
    <p>{props.description}</p>
  {/if}

  {#each props.elementProps as p}
    {#if p.element === ElementType.Block}
      <Block props={toBlockProps(p)} />
    {:else if p.element === ElementType.IconRow}
      <IconRow props={toIconRowProps(p)} />
    {:else if p.element === ElementType.Picture}
      <Picture props={toPictureProps(p)} />
    {/if}
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    color: #e00000;
    text-transform: uppercase;
    font-size: 2em;
  }
</style>
