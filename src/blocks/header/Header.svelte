<script lang="ts">
    import NabLogoSvg from '../../assets/nab-logo.svg?raw';
    import ChevronRightSvg from '../../assets/chevron-right.svg?raw';
    import SearchSvg from '../../assets/search.svg?raw';
    import CloseSvg from '../../assets/close.svg?raw';
    import {onMount} from "svelte";

    let isSearchOpen = $state(false);
    let activeMenu = $state('');
    let mainNavContainerComponent;
    let notificationsComponent
    let mainLoginContainerComponent;
    
    let megaMenuPersonalComponent;
    let megaMenuBusinessComponent;
    let megaMenuCorporateComponent;
    let megaMenuAboutUsComponent;
    let megaMenuHelpComponent;
    const toggleSearch = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isSearchOpen = !isSearchOpen;
    }

    const openMenu = (e: MouseEvent, menu: string) => {
        e.preventDefault();
        e.stopPropagation();
        activeMenu = activeMenu === menu? '' : menu;
    }

    // onMount(async () => {
        mainNavContainerComponent = import('./MainNavContainer.svelte')
        notificationsComponent = import('./Notifications.svelte')
        mainLoginContainerComponent = import('./MainLoginContainer.svelte')
        megaMenuPersonalComponent = import('./MegaMenuPersonal.svelte')
        megaMenuBusinessComponent = import('./MegaMenuBusiness.svelte')
        megaMenuCorporateComponent = import('./MegaMenuCorporate.svelte')
        megaMenuAboutUsComponent = import('./MegaMenuAboutUs.svelte')
        megaMenuHelpComponent = import('./MegaMenuHelp.svelte')
    // })

</script>

<div class="headerbar aem-GridColumn aem-GridColumn--default--12">

    {#if mainNavContainerComponent}
        {#await mainNavContainerComponent then { default: MainNavContainer }}
            <MainNavContainer/>
        {/await}
    {/if}

    <div class="nab-header-bar">
        <div class="nab-header-bar--inner">
            <div id="header-container">

                <!--{#if notificationsComponent}-->
                <!--    {#await notificationsComponent then { default: Notifications }}-->
                <!--        <Notifications/>-->
                <!--    {/await}-->
                <!--{/if}-->


                <div class="nab-header-bar__header" role="banner">


                    <div class="nab-header-bar__mega-menu">
                        <div id="menu-logo-container">
                            <!-- navigation drawer component -->
                            <a href="#" aria-expanded="false" id="menu">
                                <div id="hamburger">
                                    <div id="top-bar" class="hamburger-layer"></div>
                                    <div id="middle-bar" class="hamburger-layer"></div>
                                    <div id="bottom-bar" class="hamburger-layer"></div>
                                </div>
                                <p class="sr-only">Main menu</p>
                            </a>
                        </div>
                    </div>

                    <div class="nab-header-bar__logo">
                        <a href="/content/nabrwd/en">
                            {@html NabLogoSvg }
                        </a>
                    </div>


                    <div class="nab-header-bar__search-container">
                        <div class="nab-header-bar__mega-menu--desktop {isSearchOpen ? 'hidden' : ''}">


                            <div class="mega-menu--container">
                                <nav role="navigation" class="primary-nav"
                                     itemtype="http://schema.org/SiteNavigationElement">

                                    <ul>
                                        <li class="mega-menu-li navigation__item--level-1 {activeMenu === 'personal' ? 'active' : ''}">
                                            <a href="#" class="mega-menu-anchor menu-trigger" aria-expanded="false"
                                               on:click={(e) => openMenu(e, 'personal')}
                                               data-menuitem="1">Personal</a>

                                            {#if megaMenuPersonalComponent}
                                                {#await megaMenuPersonalComponent then { default: MegaMenuPersonal }}
                                                    <MegaMenuPersonal isActive={activeMenu === 'personal'}/>
                                                {/await}
                                            {/if}

                                        </li>

                                        <li class="mega-menu-li navigation__item--level-1 {activeMenu === 'business' ? 'active' : ''}">
                                            <a href="#" class="mega-menu-anchor menu-trigger" aria-expanded="false"
                                               on:click={(e) => openMenu(e, 'business')}
                                               data-menuitem="2">Business</a>


                                            {#if megaMenuBusinessComponent}
                                                {#await megaMenuBusinessComponent then { default: MegaMenuBusiness }}
                                                    <MegaMenuBusiness isActive={activeMenu === 'business'}/>
                                                {:catch error}
                                                    <p>Error loading component: {error.message}</p>
                                                {/await}
                                            {/if}

                                        </li>

                                        <li class="mega-menu-li navigation__item--level-1 {activeMenu === 'corporate' ? 'active' : ''}">
                                            <a href="#" class="mega-menu-anchor menu-trigger" aria-expanded="false"
                                               on:click={(e) => openMenu(e, 'corporate')}
                                               data-menuitem="3">Corporate</a>

                                            {#if megaMenuCorporateComponent}
                                                {#await megaMenuCorporateComponent then { default: MegaMenuCorporate }}
                                                    <MegaMenuCorporate isActive={activeMenu === 'corporate'}/>
                                                {/await}
                                            {/if}


                                        </li>

                                        <li class="mega-menu-li navigation__item--level-1 {activeMenu === 'about us' ? 'active' : ''}">
                                            <a href="#" class="mega-menu-anchor menu-trigger" aria-expanded="false"
                                               on:click={(e) => openMenu(e, 'about us')}
                                               data-menuitem="4">About us</a>


                                            {#if megaMenuAboutUsComponent}
                                                {#await megaMenuAboutUsComponent then { default: MegaMenuAboutUs }}
                                                    <MegaMenuAboutUs isActive={activeMenu === 'about us'}/>
                                                {/await}
                                            {/if}

                                        </li>

                                        <li class="mega-menu-li navigation__item--level-1 {activeMenu === 'help' ? 'active' : ''}">
                                            <a href="#" class="mega-menu-anchor menu-trigger" aria-expanded="false"
                                               on:click={(e) => openMenu(e, 'help')}
                                               data-menuitem="5">Help</a>


                                            {#if megaMenuHelpComponent}
                                                {#await megaMenuHelpComponent then { default: MegaMenuHelp }}
                                                    <MegaMenuHelp isActive={activeMenu === 'help'}/>
                                                {/await}
                                            {/if}

                                        </li>
                                    </ul>
                                </nav>
                            </div>


                        </div>

                        <div class="nab-header-bar__search">
                            <form class="nab-header-search__form {isSearchOpen ? 'search-active' : ''}" action="/search"
                                  method="get">
                                <fieldset>
                                    <div class="flex-inner-wrapper">
                                        <label for="nab-header-search__input" aria-hidden="true"
                                               class="nab-header-search__label {isSearchOpen ? 'fade-in' : ''}">
                                            Search nab.com.au
                                        </label>
                                        <div class="nab-header-search__input-container">
                                            <input id="nab-header-search__input" aria-label="Search nab.com.au"
                                                   aria-hidden="true" aria-owns="autoComplete_list"
                                                   aria-autocomplete="list" autocomplete="off" autocorrect="off"
                                                   autocapitalize="none" name="term" spellcheck="false" tabindex="-1"
                                                   type="search">
                                            <div class="nab-header-search__results">
                                                <ul id="autoComplete_list" role="listbox"
                                                    aria-labelledby="#nab-header-search__input"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>

                            <div class="nab-button-icon--white">
                                <a href="#" aria-label="Search" class="nab-button nab-header-search__search-button"
                                   on:click={toggleSearch}>
                                    <span aria-hidden="true">
                                        {@html SearchSvg}
                                    </span>
                                </a>
                            </div>


                        </div>
                    </div>

                    <div class="nab-header-bar__search-close nab-button-icon--white">
                        <a href="#" aria-label="Close Search"
                           class="nab-button nab-header-search__close-button {isSearchOpen ? '' : 'hidden'}"
                           on:click={toggleSearch}>
                            <span aria-hidden="true">
                                {@html CloseSvg}
                            </span>
                        </a>
                    </div>
                    <div class="nab-header-bar__login">
                        <div class="login-container">
                            <button id="login" class="login-select" aria-expanded="false"
                                    aria-label="Login to a NAB service">
                                <span class="mobile-login-label">Login</span>
                                <div class="close">
                                    <span aria-hidden="true">
                                        {@html CloseSvg}
                                    </span>
                                </div>
                            </button>
                            <button id="login-desktop" class="login-select-desktop" aria-expanded="false"
                                    aria-label="Login to a NAB service">
                                <span class="current-dropdown-item">Internet Banking</span>
                                <div class="dropdown-indicator">
                                    <span aria-hidden="true">
                                        <use xlink:href="#icon-chevron-down"></use>
                                    </span>
                                </div>
                                <div class="close">
                                    <span aria-hidden="true">
                                        {@html CloseSvg}
                                    </span>
                                </div>
                            </button>

                            <nav class="login-options-desktop" aria-hidden="true" data-type="login-nav"
                                 role="navigation" itemtype="http://schema.org/SiteNavigationElement">
                                <ul>
                                    <li>
                                        <a href="https://ib.nab.com.au/login" tabindex="-1" data-loginlist-position="0">
                                            Internet Banking
                                            <div class="link-indicator" aria-hidden="true">
                                                <span aria-hidden="true">
                                                    {@html ChevronRightSvg}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.nab.com.au/cgi-bin/nabconnect/nc_start.pl?browser=correct"
                                           tabindex="-1" data-loginlist-position="1">
                                            NAB Connect
                                            <div class="link-indicator" aria-hidden="true">
                                                <span aria-hidden="true">
                                                    {@html ChevronRightSvg}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.nabtrade.com.au/" tabindex="-1"
                                           data-loginlist-position="2">
                                            nabtrade
                                            <div class="link-indicator" aria-hidden="true">
                                                <span aria-hidden="true">
                                                    {@html ChevronRightSvg}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://equitylending.nab.com.au/Login.aspx" tabindex="-1"
                                           data-loginlist-position="3">
                                            Margin Lending
                                            <div class="link-indicator" aria-hidden="true">
                                                <span aria-hidden="true">
                                                    {@html ChevronRightSvg}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://transact.nab.com.au/nablogin/index.jsp" tabindex="-1"
                                           data-loginlist-position="4">
                                            NAB Transact
                                            <div class="link-indicator" aria-hidden="true">
                                                <span aria-hidden="true">
                                                    {@html ChevronRightSvg}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://assetservicing.nab.com.au" tabindex="-1"
                                           data-loginlist-position="6">
                                            Asset Servicing
                                            <div class="link-indicator" aria-hidden="true">
                                                <span aria-hidden="true">
                                                    {@html ChevronRightSvg}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <a id="quick-login" class="" href="https://ib.nab.com.au/login"
                               data-loginlink-desktop="https://ib.nab.com.au/login" tabindex="0" role="button"
                               aria-label="Login">
                                <span class="desktop-login-label">Login</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    {#if mainLoginContainerComponent}
        {#await mainLoginContainerComponent then { default: MainLoginContainer }}
            <MainLoginContainer/>
        {/await}
    {/if}

</div>