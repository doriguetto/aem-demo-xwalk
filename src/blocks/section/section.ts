import {hydrate} from "svelte";
import Section from "./Section.svelte";
import SectionWithHeadingAndLinks from './SectionWithHeadingAndLinks.svelte'
import './section.scss'

export default async function decorate(block: Element) {
    if (block.classList.contains('heading-with-links')) {
        hydrate(SectionWithHeadingAndLinks, {
            target: block,
        })
        return;
    }

    hydrate(Section, {
        target: block,
    })
}