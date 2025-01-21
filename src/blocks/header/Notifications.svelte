<script>
import CloseSvg from "@/assets/close.svg";
import ChevronRightSvg from "@/assets/chevron-right.svg";
import NabAppLogo from "@/assets/nab-app-logo-283x283.png";
</script>

<section aria-label="Notification: ">
    <div class="notification-banner" aria-expanded="false" aria-hidden="true">
        <div id="notification-banner-live" class="notification-banner__content responsivegrid responsivegrid--fixed responsivegrid--gutters">
            <div class="notification-banner__close nab-button-icon--black">
                <button class="nab-button">
                    <span class="sr-only">close notification</span>
                    <span aria-hidden="true"  class="notification-banner__close-icon icon">
                                        {@html CloseSvg}
                                    </span>
                </button>
            </div>
        </div>
        <div id="notification-banner-cache" class="notification-banner__cache">


            <div class="priority-message-notification">


            </div>


            <div class="app-notification">

                <div class="notification" data-analytics-internal-promo="23068" data-next-prompt-days="180" data-percentage="100" data-prompt-delay-seconds="5" id="notification-app-prompt" data-ios-app-path="https://apps.apple.com/au/app/nab/id373434223" data-android-app-path="https://play.google.com/store/apps/details?id=au.com.nab.mobile&amp;hl=en">
                    <div class="notification__icon">
                        <img alt="NAB App Image" src="{NabAppLogo}">
                    </div>
                    <div class="notification__body">
                        <span class="sr-only">Notification:</span>
                        <div class="title notification__label">
                            <div class="cmp-title">
                                <h2 class="cmp-title__text">NAB Mobile Banking app</h2>
                            </div>
                        </div>
                        <p class="notification__caption"></p>
                        <div class="notification__button button nab-button--large nab-button-link--red">
                            <a class="nab-button" href="#">
                                <span>Get it from the app store</span>
                                <span aria-hidden="true" class="nab-button__icon--right icon" >
                                                    <use xlink:href="#icon-link"></use>
                                                </span>
                            </a>
                        </div>
                    </div>
                </div>


            </div>


            <div class="unsupported-browser-notification">

                <div class="unsupported-browser-notification notification">
                    <div class="notification__icon">
                                        <span aria-hidden="true"  class="icon" xmlns="http://www.w3.org/2000/span" width="24" height="24" viewBox="0 0 24 24">
                                            <use xlink:href="#icon-warning-fill"></use>
                                        </span>
                    </div>
                    <div class="notification__body">
                        <div class="title notification__label">
                            <div class="cmp-title">
                                <h2 class="cmp-title__text">Update your browser.</h2>
                            </div>
                        </div>
                        <p class="notification__caption">This website doesn't support your browser and may impact your experience.</p>
                        <div class="notification__button button nab-button--large nab-button-link--black">
                            <a class="nab-button" href="/about-us/using-this-site/technical-requirements">
                                <span>Get a supported browser</span>
                                <span aria-hidden="true"  class="nab-button__icon--right icon">
                                                    {@html ChevronRightSvg}
                                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>


            <div class="nps-notification">


            </div>


        </div>
    </div>
</section>