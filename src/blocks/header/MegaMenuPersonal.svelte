<script>
    import ChevronRightSvg from "@/assets/chevron-right.svg?raw";
    const {isActive} = $props();
</script>

<ul data-type="mega-menu" class="dropdown mega-menu {isActive ? 'active' : 'hidden'}"
    style="width: 1920px;">
    <li class="navigation__item--level-2 parent mega-menu-li">


        <a data-menulevel="2" data-menuitem-index="0" aria-expanded="false"
           class="mega-menu-anchor" href="/personal">
            <span>Personal home</span>
           
                                                            {@html ChevronRightSvg}
        </a>

    </li>

    <li class="mega-menu-li navigation__item--level-2 active">


        <a data-menulevel="2" data-menuitem-index="1" aria-expanded="false"
           class="mega-menu-anchor menu-trigger"
           href="/personal/bank-accounts">
            <span>Bank accounts</span>

        </a>


        <div class="nav-container">
            <ul class="dropdown">
                <li class="navigation__item--level-3 parent mega-menu-li">


                    <a data-menulevel="3" data-menuitem-index="0"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/bank-accounts">
                        <span>Bank accounts</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="1"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/bank-accounts/transaction-accounts">
                        <span>Transaction accounts</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="2"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/bank-accounts/savings-accounts">
                        <span>Savings accounts</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="3"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/bank-accounts/debit-cards">
                        <span>Visa Debit cards</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="4"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/bank-accounts/nab-term-deposit">
                        <span>Term Deposit</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="5"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/bank-accounts/joint-accounts">
                        <span>Joint bank accounts</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

            </ul>

        </div>

    </li>

    <li class="mega-menu-li navigation__item--level-2">


        <a data-menulevel="2" data-menuitem-index="2" aria-expanded="false"
           class="mega-menu-anchor" href="/personal/buy-now-pay-later">
            <span>Buy now pay later</span>
           
                                                            {@html ChevronRightSvg}
        </a>


    </li>

    <li class="mega-menu-li navigation__item--level-2">


        <a data-menulevel="2" data-menuitem-index="3" aria-expanded="false"
           class="mega-menu-anchor menu-trigger"
           href="/personal/credit-cards">
            <span>Credit cards</span>

        </a>


        <div class="nav-container">
            <ul class="dropdown">
                <li class="navigation__item--level-3 parent mega-menu-li">


                    <a data-menulevel="3" data-menuitem-index="0"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/credit-cards">
                        <span>Credit cards</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="1"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/credit-cards/nab-straightup-card">
                        <span>NAB StraightUp Card</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="2"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/credit-cards/nab-low-rate-card">
                        <span>NAB Low Rate Credit Card</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="3"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/credit-cards/low-fee-cards">
                        <span>NAB low fee credit card</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="4"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/credit-cards/qantas-rewards">
                        <span>NAB Qantas Rewards credit cards</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="5"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/credit-cards/nab-rewards-cards">
                        <span>NAB Rewards credit cards</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

            </ul>


            <div class="xfpage page basicpage">


                <div class="xf-content-height">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                        <div class="responsivegrid xf-content__mega-menu aem-GridColumn aem-GridColumn--default--12">


                            <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                <section
                                        class="section-container container responsivegrid section-container__mega-menu bg-light-grey aem-GridColumn aem-GridColumn--default--12">

                                    <div id="section-container-4beb4e317d"
                                         class="cmp-container"></div>


                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                        <div class="tile aem-GridColumn aem-GridColumn--default--12">

                                            <div class="nab-tile nab-tile--banner">
                                                <div class="nab-tile__content">
                                                    <div class="title">
                                                        <div class="cmp-title">
                                                            <h3 class="cmp-title__heading">
                                                                                                            <span role="text">

                                                                                                                <div class="badge nab-badge--red">
                                                                                                        <div class="nab-badge">
                                                                                                            <span class="nab-badge__icon"
                                                                                                                  aria-hidden="true">
                                                                                                                <use xlink:href="#icon-favourite-fill">
                                                                                                                </use>
                                                                                                            </span>
                                                                                                            <span class="nab-badge__text"
                                                                                                                  aria-label="Offer"
                                                                                                                  role="text">Offer</span>
                                                                                                        </div>




                                                                                                    </div>

                                                                                                                <span class="cmp-title__text h3">

                                                                                                                    180,000 NAB Rewards bonus points
                                                                                                                </span>
                                                                                                            </span>
                                                            </h3>
                                                        </div>


                                                    </div>

                                                    <div class="text parbase">
                                                        <div class="nab-text">
                                                            <p>Earn <strong>130,000
                                                                bonus
                                                                points</strong>&nbsp;when
                                                                you spend
                                                                $3,000 using
                                                                your new
                                                                <strong>NAB
                                                                    Rewards
                                                                    Signature
                                                                    Card</strong>
                                                                within 60
                                                                days of
                                                                account
                                                                opening and&nbsp;<strong>50,000
                                                                    bonus
                                                                    points</strong>&nbsp;when
                                                                you keep
                                                                your card
                                                                for over 12
                                                                months.</p>

                                                        </div>


                                                    </div>

                                                </div>
                                                <div class="nab-call-to-action">

                                                    <div class="nab-call-to-action__buttons">
                                                        <div class="button nab-button-link--red">


                                                        </div>

                                                        <div class="button1 button nab-button-link--red">


                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="text parbase aem-GridColumn aem-GridColumn--default--12">
                                            <div class="nab-text">
                                                <p><span
                                                        class="caption-text">Minimum monthly repayments required. NAB may vary or end this offer at any time. Eligibility criteria, exclusions and T&amp;Cs apply.</span>
                                                </p>

                                            </div>


                                        </div>
                                        <div class="button nab-button-link--red aem-GridColumn aem-GridColumn--default--12">

                                            <a href="/personal/credit-cards/nab-rewards-cards/signature-card"
                                               class="nab-button">


                                                <span>View our NAB Rewards Signature Card offer</span>


                                                <span class="nab-button__icon--right"
                                                      aria-hidden="true">
                                                                                                {@html ChevronRightSvg}
                                                                                            </span>

                                            </a>


                                        </div>


                                    </div>


                                </section>


                            </div>
                        </div>


                    </div>

                </div>
            </div>


        </div>

    </li>

    <li class="mega-menu-li navigation__item--level-2">


        <a data-menulevel="2" data-menuitem-index="4" aria-expanded="false"
           class="mega-menu-anchor" href="/personal/personal-loans">
            <span>Personal loans</span>
           
                                                            {@html ChevronRightSvg}
        </a>


    </li>

    <li class="mega-menu-li navigation__item--level-2">


        <a data-menulevel="2" data-menuitem-index="5" aria-expanded="false"
           class="mega-menu-anchor menu-trigger"
           href="/personal/home-loans">
            <span>Home loans</span>

        </a>


        <div class="nav-container">
            <ul class="dropdown">
                <li class="navigation__item--level-3 parent mega-menu-li">


                    <a data-menulevel="3" data-menuitem-index="0"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/home-loans">
                        <span>Home loans</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="1"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/home-loans/nab-base-variable-rate-home-loan">
                        <span>Basic variable rate</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="2"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/home-loans/nab-variable-rate-offset-home-loan">
                        <span>Tailored variable rate with offset</span>
                       
                                                                        {@html ChevronRightSvg}
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="3"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/home-loans/nab-fixed-rate-home-loan">
                        <span>Tailored fixed rate</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

            </ul>


            <div class="xfpage page basicpage">


                <div class="xf-content-height">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                        <div class="responsivegrid xf-content__mega-menu aem-GridColumn aem-GridColumn--default--12">


                            <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                <section
                                        class="section-container container responsivegrid section-container__mega-menu bg-dark-grey aem-GridColumn aem-GridColumn--default--12">

                                    <div id="section-container-5b85c7b4ac"
                                         class="cmp-container"></div>


                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                        <div class="title aem-GridColumn aem-GridColumn--default--12">
                                            <div class="cmp-title">
                                                <h3 class="cmp-title__heading">
                                                                                                <span role="text">


                                                                                                    <span class="cmp-title__text h3">

                                                                                                        View calculators
                                                                                                    </span>
                                                                                                </span>
                                                </h3>
                                            </div>


                                        </div>
                                        <div class="link-list list nab-link-list--text-links aem-GridColumn aem-GridColumn--default--12">
                                            <div class="nab-link-list nab-link-list--segmented-links-stacked-xs">
                                                <ul class="cmp-list">
                                                    <li class="cmp-list__item">
                                                        <a href="/personal/home-loans/calculators/loan-repayments-calculator"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="0">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-calculator"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">What will my repayments be?</span>


                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        {@html ChevronRightSvg}
                                                                                                    </span>
                                                        </a>

                                                    </li>

                                                    <li class="cmp-list__item">
                                                        <a href="/personal/home-loans/calculators/borrowing-calculator"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="1">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-calculator"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">How much can I borrow?</span>


                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        {@html ChevronRightSvg}
                                                                                                    </span>
                                                        </a>

                                                    </li>

                                                    <li class="cmp-list__item">
                                                        <a href="/personal/home-loans/calculators/equity-loan-calculator"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="2">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-calculator"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">How much equity do I have?</span>


                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        {@html ChevronRightSvg}
                                                                                                    </span>
                                                        </a>

                                                    </li>

                                                    <li class="cmp-list__item">
                                                        <a href="/personal/home-loans/calculators/stamp-duty-calculator"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="3">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-calculator"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">What will my stamp duty be?</span>


                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        {@html ChevronRightSvg}
                                                                                                    </span>
                                                        </a>

                                                    </li>
                                                </ul>
                                            </div>


                                        </div>


                                    </div>


                                </section>
                                <section
                                        class="section-container container responsivegrid section-container__mega-menu bg-light-grey aem-GridColumn aem-GridColumn--default--12">

                                    <div id="section-container-697946a5e0"
                                         class="cmp-container"></div>


                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                        <div class="tile aem-GridColumn aem-GridColumn--default--12">

                                            <div class="nab-tile nab-tile--banner">
                                                <div class="nab-tile__content">
                                                    <div class="title">
                                                        <div class="cmp-title">
                                                            <h3 class="cmp-title__heading">
                                                                                                            <span role="text">


                                                                                                                <span class="cmp-title__text h3">

                                                                                                                    Refinancing your home loan?
                                                                                                                </span>
                                                                                                            </span>
                                                            </h3>
                                                        </div>


                                                    </div>

                                                    <div class="text parbase">
                                                        <div class="nab-text">
                                                            <p>Our home loan
                                                                experts are
                                                                here to
                                                                help.<br>
                                                            </p>
                                                            <p>Book a time
                                                                with a NAB
                                                                home loan
                                                                expert who
                                                                can guide
                                                                you through
                                                                the
                                                                application
                                                                process and
                                                                answer any
                                                                questions
                                                                you might
                                                                have.</p>

                                                        </div>


                                                    </div>

                                                </div>
                                                <div class="nab-call-to-action">

                                                    <div class="nab-call-to-action__buttons">
                                                        <div class="button nab-button-link--red">

                                                            <a href="/personal/home-loans/refinance"
                                                               aria-label="Find out more about refinancing your home loan"
                                                               class="nab-button">


                                                                <span>Find out more about refinancing your home loan</span>


                                                                <span class="nab-button__icon--right"
                                                                      aria-hidden="true">
                                                                                                                {@html ChevronRightSvg}
                                                                                                            </span>

                                                            </a>


                                                        </div>

                                                        <div class="button1 button nab-button-link--red">


                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>


                                    </div>


                                </section>


                            </div>
                        </div>


                    </div>

                </div>
            </div>


        </div>

    </li>

    <li class="mega-menu-li navigation__item--level-2">


        <a data-menulevel="2" data-menuitem-index="6" aria-expanded="false"
           class="mega-menu-anchor menu-trigger"
           href="/personal/online-banking">
            <span>Online banking</span>

        </a>


        <div class="nav-container">
            <ul class="dropdown">
                <li class="navigation__item--level-3 parent mega-menu-li">


                    <a data-menulevel="3" data-menuitem-index="0"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/online-banking">
                        <span>Online banking</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="1"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/online-banking/nab-internet-banking">
                        <span>NAB Internet Banking</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="2"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/online-banking/digital-payments">
                        <span>Digital payments</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="3"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/online-banking/mobile-banking-app">
                        <span>The NAB app</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="4"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/online-banking/fast-payments">
                        <span>Fast Payments guide</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

            </ul>

        </div>

    </li>

    <li class="mega-menu-li navigation__item--level-2">


        <a data-menulevel="2" data-menuitem-index="7" aria-expanded="false"
           class="mega-menu-anchor menu-trigger"
           href="/personal/private-wealth">
            <span>Private Wealth</span>

        </a>


        <div class="nav-container">
            <ul class="dropdown">
                <li class="navigation__item--level-3 parent mega-menu-li">


                    <a data-menulevel="3" data-menuitem-index="0"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/private-wealth">
                        <span>Private Wealth</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="1"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/private-wealth/tailored-solutions">
                        <span>Banking solutions</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="2"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/private-wealth/investment-solutions">
                        <span>Investment solutions</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="3"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/private-wealth/advice-solutions">
                        <span>Advice solutions</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="4"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/private-wealth/our-clients">
                        <span>Our clients</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="5"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/private-wealth/what-is-private-banking">
                        <span>Private banking</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

            </ul>


            <div class="xfpage page basicpage">


                <div class="xf-content-height">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                        <div class="responsivegrid xf-content__mega-menu aem-GridColumn aem-GridColumn--default--12">


                            <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                <section
                                        class="section-container container responsivegrid section-container__mega-menu bg-dark-grey aem-GridColumn aem-GridColumn--default--12">

                                    <div id="section-container-1f4a188e2b"
                                         class="cmp-container"></div>


                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                        <div class="title aem-GridColumn aem-GridColumn--default--12">
                                            <div class="cmp-title">
                                                <h3 class="cmp-title__heading">
        <span role="text">


            <span class="cmp-title__text h3">

                View our research and insights hub
            </span>
        </span>
                                                </h3>
                                            </div>


                                        </div>
                                        <div class="link-list list nab-link-list--text-links aem-GridColumn aem-GridColumn--default--12">
                                            <div class="nab-link-list ">
                                                <ul class="cmp-list">
                                                    <li class="cmp-list__item">
                                                        <a href="https://business.nab.com.au/tag/private-view/?browser=external"
                                                           target="_blank"
                                                           rel="noopener noreferrer"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="0">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-website"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">View wealth news and trends</span>
                                                            <span class="sr-only">, opens in new window</span>

                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        <use xlink:href="#icon-link"></use>
                                                                                                    </span>
                                                        </a>

                                                    </li>

                                                    <li class="cmp-list__item">
                                                        <a href="https://business.nab.com.au/tag/investments/?browser=external"
                                                           target="_blank"
                                                           rel="noopener noreferrer"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="1">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-website"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">View investment insights</span>
                                                            <span class="sr-only">, opens in new window</span>

                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        <use xlink:href="#icon-link"></use>
                                                                                                    </span>
                                                        </a>

                                                    </li>
                                                </ul>
                                            </div>


                                        </div>


                                    </div>


                                </section>


                            </div>
                        </div>


                    </div>

                </div>
            </div>


        </div>

    </li>

    <li class="mega-menu-li navigation__item--level-2">


        <a data-menulevel="2" data-menuitem-index="8" aria-expanded="false"
           class="mega-menu-anchor menu-trigger"
           href="/personal/super-and-investments">
            <span>Super and investments</span>

        </a>


        <div class="nav-container">
            <ul class="dropdown">
                <li class="navigation__item--level-3 parent mega-menu-li">


                    <a data-menulevel="3" data-menuitem-index="0"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/super-and-investments">
                        <span>Super and investments</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="1"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/super-and-investments/financial-advice">
                        <span>Financial advice</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="2"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/super-and-investments/investment-lending">
                        <span>Investment lending</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="3"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/super-and-investments/self-managed-super-fund">
                        <span>Self Managed Super Funds (SMSF)</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="4"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/super-and-investments/cash-management">
                        <span>Cash management</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="5"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/super-and-investments/online-investing">
                        <span>Online investing - nabtrade</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

            </ul>

        </div>

    </li>

    <li class="mega-menu-li navigation__item--level-2">


        <a data-menulevel="2" data-menuitem-index="9" aria-expanded="false"
           class="mega-menu-anchor menu-trigger" href="/personal/insurance">
            <span>Insurance</span>

        </a>


        <div class="nav-container">
            <ul class="dropdown">
                <li class="navigation__item--level-3 parent mega-menu-li">


                    <a data-menulevel="3" data-menuitem-index="0"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/insurance">
                        <span>Insurance</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="1"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/insurance/home-contents">
                        <span>Home and Contents Insurance</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="2"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/insurance/landlord">
                        <span>Landlord Insurance</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="3"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/insurance/car">
                        <span>Car Insurance </span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="4"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/insurance/caravan-trailer">
                        <span>Caravan and trailer insurance</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="5"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/insurance/complimentary-card-insurances">
                        <span>Complimentary card insurances</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

            </ul>

        </div>

    </li>

    <li class="mega-menu-li navigation__item--level-2">


        <a data-menulevel="2" data-menuitem-index="10" aria-expanded="false"
           class="mega-menu-anchor menu-trigger"
           href="/personal/international-banking">
            <span>International banking</span>

        </a>


        <div class="nav-container">
            <ul class="dropdown">
                <li class="navigation__item--level-3 parent mega-menu-li">


                    <a data-menulevel="3" data-menuitem-index="0"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/international-banking">
                        <span>International banking</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="1"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/international-banking/foreign-exchange-rates">
                        <span>Foreign exchange calculator and rates</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="2"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/international-banking/transfer-money-overseas">
                        <span>Transfer money overseas</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="3"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/personal/international-banking/international-transaction-fee">
                        <span>International transaction fees on your card explained</span>
                       
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

            </ul>


            <div class="xfpage page basicpage">


                <div class="xf-content-height">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                        <div class="responsivegrid xf-content__mega-menu aem-GridColumn aem-GridColumn--default--12">


                            <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                <section
                                        class="section-container container responsivegrid section-container__mega-menu bg-light-grey aem-GridColumn aem-GridColumn--default--12">

                                    <div id="section-container-86246bec20"
                                         class="cmp-container"
                                         data-analytics-internal-promo="23005"></div>


                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                        <div class="image aem-GridColumn aem-GridColumn--default--12">



                                        </div>
                                        <div class="tile aem-GridColumn aem-GridColumn--default--12">

                                            <div class="nab-tile nab-tile--banner">
                                                <div class="nab-tile__content">
                                                    <div class="title">
                                                        <div class="cmp-title">
                                                            <h3 class="cmp-title__heading">
        <span role="text">


            <span class="cmp-title__text h3">

                $0 international transfer fee
            </span>
        </span>
                                                            </h3>
                                                        </div>


                                                    </div>

                                                    <div class="text parbase">
                                                        <div class="nab-text">
                                                            <p>Transfer your
                                                                money
                                                                securely
                                                                overseas
                                                                using NAB
                                                                Internet
                                                                Banking or
                                                                the NAB app.
                                                                $0 transfer
                                                                fee when
                                                                sending in a
                                                                foreign
                                                                currency.</p>

                                                        </div>


                                                    </div>

                                                </div>
                                                <div class="nab-call-to-action">

                                                    <div class="nab-call-to-action__buttons">
                                                        <div class="button nab-button-link--red">

                                                            <a href="/personal/international-banking/transfer-money-overseas"
                                                               class="nab-button">


                                                                <span>Learn more about international transfers</span>


                                                                <span class="nab-button__icon--right"
                                                                      aria-hidden="true">
                                                                                                                {@html ChevronRightSvg}
                                                                                                            </span>

                                                            </a>


                                                        </div>

                                                        <div class="button1 button nab-button-link--red">


                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>


                                    </div>


                                </section>


                            </div>
                        </div>


                    </div>

                </div>
            </div>


        </div>

    </li>

</ul>