import Footer from "./Footer.svelte";
import './footer.scss'
import { hydrate } from 'svelte';

export default async function decorate(block: Element) {
    hydrate(Footer, {
        target: block,
    })
}
