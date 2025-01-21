<script lang="ts" context="module">
    export type BannerProps = {
        pictureEl?: HTMLPictureElement | null;
        content?: Element | null;
        button?: Element | null;
    };
</script>

<script lang="ts">
    import Image, {type ImagePreloaderProps} from "Blocks/banner/Image.svelte";

    const {pictureEl, content, button}: BannerProps = $props();
    let img: ImagePreloaderProps;

    if (pictureEl) {
        img = {
            pictureEl,
            preload: true,
            breakpoints: [
                {media: '(max-width: 768px)', width: '960'},
                {media: '(max-width: 960px)', width: '1536'},
            ]
        }
    }

</script>

<div class="banner-entry container responsivegrid aem-GridColumn aem-GridColumn--default--12 at-element-marker">

    <div class="container">
        <div class="root responsivegrid responsivegrid--gutters-col">


            <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                        <div class="banner-entry container responsivegrid aem-GridColumn aem-GridColumn--default--12">

                            <div id="banner-b7303cc3e2" class="cmp-container">


                                <div class="nab-banner nab-banner--image" data-analytics-internal-promo="MH24040-P">
                                    <div class="nab-banner--background-image">
                                        <div class="image">
                                            <Image {...img}/>
                                        </div>
                                    </div>
                                    <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters">
                                        <div class="grid--12 grid">
                                            <div class="gridColumn--default--5 gridColumn--sm--6 gridColumn--xs--12 gridColumn">
                                                <div class="responsivegrid nab-banner__primary-content">


                                                    <div class="tile tile--white-card">

                                                        <div class="nab-tile nab-tile--banner cmp-title--h1-appearance">
                                                            <div class="nab-tile__content">
                                                                <div class="cmp-title__heading">
                                                                    {@html content?.outerHTML}
                                                                </div>

                                                                <!--                                                                <div class="title cmp-title&#45;&#45;h1-appearance">-->
                                                                <!--                                                                    <div class="cmp-title">-->
                                                                <!--                                                                        <h2 class="cmp-title__heading">-->
                                                                <!--                                                                            <span role="text">-->


                                                                <!--                                                                                <span class="cmp-title__text h2">-->

                                                                <!--                                                                                    No more first home FOMO-->
                                                                <!--                                                                                </span>-->
                                                                <!--                                                                            </span>-->
                                                                <!--                                                                            </h2>-->
                                                                <!--                                                                    </div>-->
                                                                <!--                                                                </div>-->

                                                                <!--                                                                <div class="text parbase">-->
                                                                <!--                                                                    <div class="nab-text">-->
                                                                <!--                                                                        <p>With a 5% deposit and no LMI, the First Home-->
                                                                <!--                                                                            Guarantee, proudly supported by NAB, can-->
                                                                <!--                                                                            help you get ready to make a winning-->
                                                                <!--                                                                            bid.</p>-->
                                                                <!--                                                                        <p><span class="disclaimer-text">Terms and conditions, fees, charges, eligibility and lending criteria apply.</span>-->
                                                                <!--                                                                        </p>-->
                                                                <!--                                                                    </div>-->


                                                                <!--                                                                </div>-->

                                                            </div>
                                                            {#if button}

                                                                <div class="nab-call-to-action">

                                                                    <div class="nab-call-to-action__buttons">
                                                                        <div class="button nab-button--large nab-button--primary">

                                                                            <a href={button.getAttribute('href') || '#'}
                                                                               aria-label="Find out more about the Home Guarantee Scheme"
                                                                               class="nab-button">
                                                                                {button.textContent}

<!--                                                                                <span>Find out more</span>-->


                                                                            </a>


                                                                        </div>

                                                                        <div class="button1 button nab-button-link--red">


                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            {/if}
                                                        </div>


                                                    </div>


                                                </div>
                                            </div>
                                            <div class="gridColumn--default--6 gridColumn--xs--12 gridColumn">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
                <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">


                    </div>
                </div>
                <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">


                    </div>
                </div>
                <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">


                    </div>
                </div>
                <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">


                    </div>
                </div>
                <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">


                    </div>
                </div>


            </div>
        </div>

    </div>

</div>