import Offer from "./Offer.svelte";
import "./offer.scss";
import {hydrate} from "svelte";

export default async function decorate(block) {
    hydrate(Offer, {
        target: block,
    })
}