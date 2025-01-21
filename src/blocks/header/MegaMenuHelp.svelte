<script>
    import ChevronRightSvg from "@/assets/chevron-right.svg?raw";
    const {isActive} = $props();

</script>

<ul data-type="mega-menu" class="dropdown mega-menu {isActive ? 'active' : 'hidden'}"
    style="width: 1920px;">
    <li class="navigation__item--level-2 parent mega-menu-li">


        <a data-menulevel="2" data-menuitem-index="0" aria-expanded="false"
           class="mega-menu-anchor" href="/help-support">
            <span>Help</span>
            
                                                            {@html ChevronRightSvg}
        </a>

    </li>

    <li class="mega-menu-li navigation__item--level-2 active">


        <a data-menulevel="2" data-menuitem-index="1" aria-expanded="false"
           class="mega-menu-anchor menu-trigger"
           href="/help-support/personal-banking">
            <span>Help with personal banking</span>

        </a>


        <div class="nav-container">
            <ul class="dropdown">
                <li class="navigation__item--level-3 parent mega-menu-li">


                    <a data-menulevel="3" data-menuitem-index="0"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/personal-banking">
                        <span>Help with personal banking</span>
                        
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="1"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/personal-banking/manage-online-banking">
                        <span>Online banking support</span>
                        
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="2"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/personal-banking/manage-cards">
                        <span>Credit and debit card support</span>
                        
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="3"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/personal-banking/manage-home-loan">
                        <span>Home loan support</span>
                        
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="4"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/personal-banking/manage-personal-loans">
                        <span>Personal loan support</span>
                        
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="5"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/personal-banking/manage-rollover">
                        <span>Term deposit support</span>
                        
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="6"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/personal-banking/manage-payments-transfers">
                        <span>Payments and transfers support</span>
                        
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

            </ul>


            <div class="xfpage page basicpage">


                <div class="xf-content-height">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                        <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12">


                            <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                <section
                                        class="section-container container responsivegrid section-container__mega-menu bg-dark-grey aem-GridColumn aem-GridColumn--default--12">

                                    <div id="section-container-c2af4916f8"
                                         class="cmp-container"></div>


                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                        <div class="title aem-GridColumn aem-GridColumn--default--12">
                                            <div class="cmp-title">
                                                <h3 class="cmp-title__heading">
        <span role="text">


            <span class="cmp-title__text h3">

                Need more help?
            </span>
        </span>
                                                </h3>
                                            </div>


                                        </div>
                                        <div class="link-list list nab-link-list--text-links aem-GridColumn aem-GridColumn--default--12">
                                            <div class="nab-link-list nab-link-list--segmented-links-stacked-xs">
                                                <ul class="cmp-list">
                                                    <li class="cmp-list__item">
                                                        <a href="/about-us/security/fraud-scams"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="0">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-direction"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">Identify and report fraud and scams</span>


                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        {@html ChevronRightSvg}
                                                                                                    </span>
                                                        </a>

                                                    </li>

                                                    <li class="cmp-list__item">
                                                        <a href="/help-support/transaction-dispute"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="1">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-security"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">Dispute a transaction</span>


                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        {@html ChevronRightSvg}
                                                                                                    </span>
                                                        </a>

                                                    </li>

                                                    <li class="cmp-list__item">
                                                        <a href="/contact-us/feedback"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="2">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-document"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">How to give us feedback</span>


                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        {@html ChevronRightSvg}
                                                                                                    </span>
                                                        </a>

                                                    </li>

                                                    <li class="cmp-list__item">
                                                        <a href="/contact-us"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="3">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-add-circle"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">Contact us</span>


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


                            </div>
                        </div>


                    </div>

                </div>
            </div>


        </div>

    </li>

    <li class="mega-menu-li navigation__item--level-2">


        <a data-menulevel="2" data-menuitem-index="2" aria-expanded="false"
           class="mega-menu-anchor menu-trigger"
           href="/help-support/business-banking">
            <span>Help with business banking</span>

        </a>


        <div class="nav-container">
            <ul class="dropdown">
                <li class="navigation__item--level-3 parent mega-menu-li">


                    <a data-menulevel="3" data-menuitem-index="0"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/business-banking">
                        <span>Help with business banking</span>
                        
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="1"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/business-banking/manage-business-cards">
                        <span>Business credit card support</span>
                        
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

                                    <div id="section-container-26648eb701"
                                         class="cmp-container"></div>


                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                        <div class="title aem-GridColumn aem-GridColumn--default--12">
                                            <div class="cmp-title">
                                                <h3 class="cmp-title__heading">
        <span role="text">


            <span class="cmp-title__text h3">

                Troubleshooting guides
            </span>
        </span>
                                                </h3>
                                            </div>


                                        </div>
                                        <div class="link-list list nab-link-list--text-links aem-GridColumn aem-GridColumn--default--12">
                                            <div class="nab-link-list nab-link-list--segmented-links-stacked-xs">
                                                <ul class="cmp-list">
                                                    <li class="cmp-list__item">
                                                        <a href="/business/online-banking/nab-connect/help"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="0">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-direction"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">NAB Connect guides</span>


                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        {@html ChevronRightSvg}
                                                                                                    </span>
                                                        </a>

                                                    </li>

                                                    <li class="cmp-list__item">
                                                        <a href="/business/payments-and-merchants/merchant-support-centre"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="1">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-security"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">Merchant support centre</span>


                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        {@html ChevronRightSvg}
                                                                                                    </span>
                                                        </a>

                                                    </li>

                                                    <li class="cmp-list__item">
                                                        <a href="/contact-us"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="2">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-add-circle"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">Contact us</span>


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


                            </div>
                        </div>


                    </div>

                </div>
            </div>


        </div>

    </li>

    <li class="mega-menu-li navigation__item--level-2">


        <a data-menulevel="2" data-menuitem-index="3" aria-expanded="false"
           class="mega-menu-anchor"
           href="/help-support/better-ways-to-bank">
            <span>Ways to bank with us</span>
            
                                                            {@html ChevronRightSvg}
        </a>


    </li>

    <li class="mega-menu-li navigation__item--level-2">


        <a data-menulevel="2" data-menuitem-index="4" aria-expanded="false"
           class="mega-menu-anchor"
           href="/help-support/financial-wellbeing">
            <span>Financial wellbeing</span>
            
                                                            {@html ChevronRightSvg}
        </a>


    </li>

    <li class="mega-menu-li navigation__item--level-2">


        <a data-menulevel="2" data-menuitem-index="5" aria-expanded="false"
           class="mega-menu-anchor menu-trigger"
           href="/help-support/financial-hardship">
            <span>Financial assistance</span>

        </a>


        <div class="nav-container">
            <ul class="dropdown">
                <li class="navigation__item--level-3 parent mega-menu-li">


                    <a data-menulevel="3" data-menuitem-index="0"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/financial-hardship">
                        <span>Financial assistance</span>
                        
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="1"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/financial-hardship/home-loan">
                        <span>Home loan repayment support</span>
                        
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="2"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/financial-hardship/credit-card-personal-loan">
                        <span>Credit card or personal loan support</span>
                        
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="3"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/financial-hardship/business">
                        <span>Business financial hardship</span>
                        
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

                <li class="mega-menu-li navigation__item--level-3">


                    <a data-menulevel="3" data-menuitem-index="4"
                       aria-expanded="false" class="mega-menu-anchor"
                       href="/help-support/financial-hardship/support-services">
                        <span>Extra care support services</span>
                        
                                                                        {@html ChevronRightSvg}
                    </a>

                </li>

            </ul>


            <div class="xfpage page basicpage">


                <div class="xf-content-height">


                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                        <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12">


                            <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                <section
                                        class="section-container container responsivegrid section-container__mega-menu bg-dark-grey aem-GridColumn aem-GridColumn--default--12">

                                    <div id="section-container-c2af4916f8"
                                         class="cmp-container"></div>


                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                        <div class="title aem-GridColumn aem-GridColumn--default--12">
                                            <div class="cmp-title">
                                                <h3 class="cmp-title__heading">
        <span role="text">


            <span class="cmp-title__text h3">

                Need more help?
            </span>
        </span>
                                                </h3>
                                            </div>


                                        </div>
                                        <div class="link-list list nab-link-list--text-links aem-GridColumn aem-GridColumn--default--12">
                                            <div class="nab-link-list nab-link-list--segmented-links-stacked-xs">
                                                <ul class="cmp-list">
                                                    <li class="cmp-list__item">
                                                        <a href="/about-us/security/fraud-scams"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="0">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-direction"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">Identify and report fraud and scams</span>


                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        {@html ChevronRightSvg}
                                                                                                    </span>
                                                        </a>

                                                    </li>

                                                    <li class="cmp-list__item">
                                                        <a href="/help-support/transaction-dispute"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="1">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-security"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">Dispute a transaction</span>


                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        {@html ChevronRightSvg}
                                                                                                    </span>
                                                        </a>

                                                    </li>

                                                    <li class="cmp-list__item">
                                                        <a href="/contact-us/feedback"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="2">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-document"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">How to give us feedback</span>


                                                            <span class="cmp-list__item-icon"
                                                                  aria-hidden="true">
                                                                                                        {@html ChevronRightSvg}
                                                                                                    </span>
                                                        </a>

                                                    </li>

                                                    <li class="cmp-list__item">
                                                        <a href="/contact-us"
                                                           class="cmp-list__item-link"
                                                           data-menulevel="4"
                                                           data-menuitem-index="3">
                                                                                                    <span class="cmp-list__item-title-icon"
                                                                                                          aria-hidden="true">
                                                                                                        <use xlink:href="#icon-add-circle"></use>
                                                                                                    </span>
                                                            <span class="cmp-list__item-title">Contact us</span>


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


                            </div>
                        </div>


                    </div>

                </div>
            </div>


        </div>

    </li>

</ul>