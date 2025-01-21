import Header from "./Header.svelte";
import {hydrate } from "svelte";
import './header.scss'

export default async function decorate(block: Element) {
    hydrate(Header, {
        target: block,
    })
}
