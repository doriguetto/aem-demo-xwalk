import Banner from "./Banner.svelte";
import './banner.scss'
import './tile.scss'
import { hydrate } from 'svelte';
import type {BannerProps} from "Blocks/banner/Banner.svelte";

export default async function decorate(block: Element) {

    const data: BannerProps = {
        pictureEl: block.firstElementChild?.children[0].querySelector('picture'),
        content: block.firstElementChild?.children[1],
        button: block.firstElementChild?.children[2]
    }
    hydrate(Banner, {
        target: block,
        props: data
    })
}
