<script lang="ts">
    import SearchSvg from '../../assets/search.svg?raw';

    let isSearchOpen = $state(false);
    const toggleSearch = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isSearchOpen = !isSearchOpen;
    }
</script>

<div id="main-navigation-container">
    <div id="main-navigation" class="hidden" role="navigation" itemtype="http://schema.org/SiteNavigationElement">
        <div class="nav-inner-container">
            <div class="inner-container">

                <nav id="menu-nav" class="visible-xs" role="navigation"
                     itemtype="http://schema.org/SiteNavigationElement">
                    <div class="side-menu">

                        <form id="search-form-mobile" class="search-form-mobile" action="/search" method="get">
                            <fieldset>
                                <legend>Search</legend>
                                <label for="side-menu-search" class="nab-header-search__label-mobile">Search
                                    nab.com.au</label>
                                <input id="side-menu-search" name="term" autocomplete="off"
                                       aria-label="Search nab.com.au" type="search"
                                       class="ac-input input-not-empty">
                                <div class="animate-label">Search nab.com.au</div>
                                <div class="nab-button-icon--white">
                                    <a href="#" aria-label="Search"
                                       class="nab-button nab-header-search__search-button-mobile"
                                       on:click={toggleSearch}>
                                            <span aria-hidden="true">
                                                {@html SearchSvg}
                                            </span>
                                    </a>
                                </div>
                            </fieldset>
                        </form>


                        <!-- First level items -->
                        <ul id="navigation">
                            <li class="mega-menu-li navigation__item--level-1 active">
                                <a href="#" aria-expanded="false" class="mega-menu-anchor" data-menuitem="1">
                                    <span>Personal</span>
                                    <span aria-hidden="true"><use xlink:href="#icon-add"></use></span>
                                </a>
                                <!-- Second level items -->
                                <ul>
                                    <li class="parent mega-menu-li navigation__item--level-2">
                                        <a href="/personal" class="parentList mega-menu-anchor" data-menulevel="2"
                                           data-menuitem-index="0">
                                            Personal home
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/personal/bank-accounts" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="1">
                                            Bank accounts
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/personal/buy-now-pay-later" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="2">
                                            Buy now pay later
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/personal/credit-cards" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="3">
                                            Credit cards
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/personal/personal-loans" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="4">
                                            Personal loans
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/personal/home-loans" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="5">
                                            Home loans
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/personal/online-banking" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="6">
                                            Online banking
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/personal/private-wealth" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="7">
                                            Private Wealth
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/personal/super-and-investments" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="8">
                                            Super and investments
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/personal/insurance" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="9">
                                            Insurance
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/personal/international-banking" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="10">
                                            International banking
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li class="mega-menu-li navigation__item--level-1">
                                <a href="#" aria-expanded="false" class="mega-menu-anchor" data-menuitem="2">
                                    <span>Business</span>
                                    <span aria-hidden="true"><use xlink:href="#icon-add"></use></span>
                                </a>
                                <!-- Second level items -->
                                <ul>
                                    <li class="parent mega-menu-li navigation__item--level-2">
                                        <a href="/business" class="parentList mega-menu-anchor" data-menulevel="2"
                                           data-menuitem-index="0">
                                            Business home
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/business/business-bank-accounts"
                                           class="childList mega-menu-anchor" data-menulevel="2"
                                           data-menuitem-index="1">
                                            Business bank accounts
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/business/loans-and-finance" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="2">
                                            Loans and finance
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/business/business-credit-cards" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="3">
                                            Business credit cards
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/business/payments-and-merchants"
                                           class="childList mega-menu-anchor" data-menulevel="2"
                                           data-menuitem-index="4">
                                            EFTPOS, payments and merchants
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/business/online-banking" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="5">
                                            Online banking
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/business/international-and-foreign-exchange"
                                           class="childList mega-menu-anchor" data-menulevel="2"
                                           data-menuitem-index="6">
                                            International and foreign exchange
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/business/industry" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="7">
                                            Industry specific banking
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/business/small-business" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="8">
                                            Small business
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/business/nab-bookkeeper" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="9">
                                            NAB Bookkeeper
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li class="mega-menu-li navigation__item--level-1">
                                <a href="#" aria-expanded="false" class="mega-menu-anchor" data-menuitem="3">
                                    <span>Corporate</span>
                                    <span aria-hidden="true"><use xlink:href="#icon-add"></use></span>
                                </a>
                                <!-- Second level items -->
                                <ul>
                                    <li class="parent mega-menu-li navigation__item--level-2">
                                        <a href="/corporate" class="parentList mega-menu-anchor" data-menulevel="2"
                                           data-menuitem-index="0">
                                            Corporate home
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/corporate/global-relationships" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="1">
                                            Global relationships
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/corporate/industry-expertise" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="2">
                                            Industry expertise
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/corporate/specialist-solutions" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="3">
                                            Specialist solutions
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/corporate/sustainability-esg" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="4">
                                            Sustainability and ESG
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/corporate/research-insights" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="5">
                                            Research and insights
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li class="mega-menu-li navigation__item--level-1">
                                <a href="#" aria-expanded="false" class="mega-menu-anchor" data-menuitem="4">
                                    <span>About us</span>
                                    <span aria-hidden="true"><use xlink:href="#icon-add"></use></span>
                                </a>
                                <!-- Second level items -->
                                <ul>
                                    <li class="parent mega-menu-li navigation__item--level-2">
                                        <a href="/about-us" class="parentList mega-menu-anchor" data-menulevel="2"
                                           data-menuitem-index="0">
                                            About us home
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/about-us/security" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="1">
                                            Security
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/about-us/careers" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="2">
                                            Careers at NAB
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/about-us/sustainability" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="3">
                                            Sustainability
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/about-us/corporate-governance" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="4">
                                            Corporate Governance
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/about-us/shareholder-centre" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="5">
                                            Shareholder Centre
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/about-us/capital-and-funding" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="6">
                                            Capital and funding
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/about-us/media" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="7">
                                            Media
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/about-us/more-than-money" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="8">
                                            More than money
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/about-us/accessibility-inclusion"
                                           class="childList mega-menu-anchor" data-menulevel="2"
                                           data-menuitem-index="9">
                                            Accessibility
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li class="mega-menu-li navigation__item--level-1">
                                <a href="#" aria-expanded="false" class="mega-menu-anchor" data-menuitem="5">
                                    <span>Help</span>
                                    <span aria-hidden="true"><use xlink:href="#icon-add"></use></span>
                                </a>
                                <!-- Second level items -->
                                <ul>
                                    <li class="parent mega-menu-li navigation__item--level-2">
                                        <a href="/help-support" class="parentList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="0">
                                            Help home
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/help-support/personal-banking" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="1">
                                            Help with personal banking
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/help-support/business-banking" class="childList mega-menu-anchor"
                                           data-menulevel="2" data-menuitem-index="2">
                                            Help with business banking
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/help-support/better-ways-to-bank"
                                           class="childList mega-menu-anchor" data-menulevel="2"
                                           data-menuitem-index="3">
                                            Ways to bank with us
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/help-support/financial-wellbeing"
                                           class="childList mega-menu-anchor" data-menulevel="2"
                                           data-menuitem-index="4">
                                            Financial wellbeing
                                        </a>
                                    </li>

                                    <li class="mega-menu-li navigation__item--level-2">
                                        <a href="/help-support/financial-hardship"
                                           class="childList mega-menu-anchor" data-menulevel="2"
                                           data-menuitem-index="5">
                                            Financial assistance
                                        </a>
                                    </li>

                                </ul>
                            </li>
                        </ul>


                        <ul id="quick-links">
                            <li>
                                <a aria-label="Contact us" href="/contact-us">
                                        <span aria-hidden="true">
                                            <use xlink:href="#icon-call"></use>
                                        </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div id="latest-offers" class="visible-xs">
                    <h2 class="paragraph-text">Latest offers</h2>

                    <div class="latest-offers-buttons">
                        <div class="nab-button--large nab-button--primary">
                            <a aria-label="Personal" href="/personal/credit-cards/offers" class="nab-button">
                                <span>Personal</span>
                            </a>
                        </div>
                        <div class="nab-button--large nab-button--primary">
                            <a aria-label="Business" href="/business/offers" class="nab-button">
                                <span>Business</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>