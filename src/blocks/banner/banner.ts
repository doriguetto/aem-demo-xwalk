import Banner from "./Banner.svelte";
import './banner.scss'
import './tile.scss'
import { hydrate } from 'svelte';
import type {BannerProps} from "Blocks/banner/Banner.svelte";

export default async function decorate(block: Element) {

    const data: BannerProps = {
        pictureEl: block.children[0].querySelector('picture'),
        content: block.children[1].children[0],
        button: block.children[2].children[0]
    }
    hydrate(Banner, {
        target: block,
        props: data
    })
}
