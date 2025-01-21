<script context="module" lang="ts">
    export type ImageBreakpoint = {
        media?: string;
        width: string;
    };

    export type ImageSource = {
        type: string;
        srcSet: string;
        media?: string;
    };

    export type ImagePreloaderProps = {
        breakpoints?: ImageBreakpoint[];
        pictureEl: HTMLPictureElement | null | undefined,
        lazy?: boolean;
        preload?: boolean;
        ext?: string;
    };
</script>

<script lang="ts">
    import {onMount} from "svelte";



    const {breakpoints = [], pictureEl, lazy = false, preload = false, ext = 'webp'}: ImagePreloaderProps = $props();
    let sources: ImageSource[] = $state([]);
    let alt = '';
    let width = '0';
    let height = '0';
    let imgSrc = '';
    if (pictureEl) {
        const img = pictureEl.querySelector('img')
        const imgElSrc = img?.getAttribute('src')

        if (imgElSrc) {
            alt = img?.getAttribute('alt') || '';
            width = img?.getAttribute('width') || '0';
            height = img?.getAttribute('height') || '0';

            const url = new URL(imgElSrc, window.location.href);
            const {pathname} = url;
            const pathWithoutExtension = pathname.substring(0, pathname.lastIndexOf('.'));
            imgSrc = `${pathWithoutExtension}.${ext}?width=2048&amp;format=jpeg&amp;optimize=medium`

            onMount(() => {

                sources = breakpoints.map((breakpoint) => {
                    const srcSet = `${pathWithoutExtension}.${ext}?width=${breakpoint.width}&format=webply&optimize=medium`
                    return {
                        type: 'image/webp',
                        srcSet: srcSet,
                        media: breakpoint.media
                    }
                })
            });
        }
    }

</script>
{#if pictureEl}
    {#if preload}
        {#each sources as source}
            <link rel="preload" as="image" media={source.media} href={source.srcSet}>
        {/each}
    {/if}
    <picture>
        {#each sources as source}
            <source height="auto" media={source.media} type={source.type} srcSet={source.srcSet}/>
        {/each}
        <img
                loading={lazy ? 'lazy' : 'eager'}
                alt={alt}
                width={width}
                height={height}
                src={imgSrc}
        />
    </picture>
{/if}
