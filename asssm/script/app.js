let header = document.getElementById("header");

let header_div = `
        <header data-fetch-key="AppHeader:0" class="header">
                    <div class="container">
                        <div class="header-wrapper">
                            <div class="main-logo"><span><a href="#" class="nuxt-link-active">



                                        <strong>
                                            KAMILA
                                        </strong>
                                    </a></span></div>
                            <div class="flex">
                                <div data-fetch-key="Navigation:0" class="menu-wrapper-nav"><button
                                        class="btn btn--categories header-search">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 20 20" fill="none">
                                            <script xmlns="" />
                                            <g id="Media / Icon/Unfilled/view-grid">
                                                <g id="Icon">
                                                    <path
                                                        d="M3 4.75C3 3.7835 3.7835 3 4.75 3H6.5C7.4665 3 8.25 3.7835 8.25 4.75V6.5C8.25 7.4665 7.4665 8.25 6.5 8.25H4.75C3.7835 8.25 3 7.4665 3 6.5V4.75Z"
                                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M11.75 4.75C11.75 3.7835 12.5335 3 13.5 3H15.25C16.2165 3 17 3.7835 17 4.75V6.5C17 7.4665 16.2165 8.25 15.25 8.25H13.5C12.5335 8.25 11.75 7.4665 11.75 6.5V4.75Z"
                                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M3 13.5C3 12.5335 3.7835 11.75 4.75 11.75H6.5C7.4665 11.75 8.25 12.5335 8.25 13.5V15.25C8.25 16.2165 7.4665 17 6.5 17H4.75C3.7835 17 3 16.2165 3 15.25V13.5Z"
                                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M11.75 13.5C11.75 12.5335 12.5335 11.75 13.5 11.75H15.25C16.2165 11.75 17 12.5335 17 13.5V15.25C17 16.2165 16.2165 17 15.25 17H13.5C12.5335 17 11.75 16.2165 11.75 15.25V13.5Z"
                                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </g>
                                            </g>
                                            <script xmlns="" />
                                            <script xmlns="" />
                                        </svg>


                                        <b>All products</b></button>

                                </div>





                                <!--  -->
                                <div class="search-section">
                                    <div class="search-wrapper">
                                        <div class="form">
                                            <div class="toggle-button-cover">
                                                <div class="knob knob-selected"><span>Buy</span></div>
                                                <div class="knob"><span>Rent</span></div>
                                            </div>
                                            <div class="form__input-placeholder"><input autocomplete="off" type="search"
                                                    name="search" placeholder="Search by brands, model, ref. no..."
                                                    value="" class="form__input"></div> <button aria-label="clear"
                                                class="clear clear-desktop"><!----></button> 
                                        </div>
                                    </div> <button aria-label="Search" class="search-cta mobile-cta"><i
                                            class="icon icon--search"></i></button> <!---->
                                </div>
                            </div>

                            <div class="flex profile-wrapper desktop-only">




                                <div class="header__cta-placeholder header-cart cart">
                                    <div class="btn btn--round-outline-disabled" style="background-color:transparent;">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                            viewBox="0 0 32 32" fill="none">
                                            <script xmlns="" />
                                            <path
                                                d="M1.33331 3.33334H3.98756C4.46595 3.33334 4.70514 3.33334 4.89959 3.42008C5.07102 3.49655 5.21746 3.61972 5.32217 3.77551C5.44094 3.95223 5.48193 4.18788 5.5639 4.6592L6.14491 8.00001M6.14491 8.00001L7.49171 15.7441C7.67089 16.7744 7.76047 17.2895 8.02581 17.6606C8.25943 17.9874 8.58604 18.2362 8.96309 18.3747C9.3913 18.532 9.91174 18.4817 10.9526 18.3809L25.7749 16.9465C26.7962 16.8477 27.3069 16.7983 27.6928 16.5676C28.0327 16.3644 28.3047 16.0648 28.4742 15.7069C28.6666 15.3005 28.6666 14.7875 28.6666 13.7614V11.7734C28.6666 10.6828 28.6666 10.1376 28.4566 9.71623C28.2719 9.34545 27.9765 9.04121 27.6113 8.84553C27.1964 8.62316 26.6514 8.60702 25.5613 8.57476L6.14491 8.00001Z"
                                                stroke="#132528" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <ellipse cx="11.3334" cy="25.3333" rx="2.66667" ry="2.66667"
                                                stroke="#132528" stroke-width="1.5" />
                                            <ellipse cx="24" cy="25.3333" rx="2.66667" ry="2.66667" stroke="#132528"
                                                stroke-width="1.5" />
                                            <script xmlns="" />
                                            <script xmlns="" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="user-comp">
                                    <div><button aria-label="MyAccount" class="sign-in-btn"><svg width="22" height="28"
                                                viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.0001 6C16.0001 8.76142 13.7615 11 11.0001 11C8.23865 11 6.00007 8.76142 6.00007 6C6.00007 3.23858 8.23865 1 11.0001 1C13.7615 1 16.0001 3.23858 16.0001 6Z"
                                                    stroke="#1D262A" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                                <path
                                                    d="M1.00159 24.8243C1.09533 19.3825 5.5359 15 11.0001 15C16.4644 15 20.905 19.3827 20.9986 24.8247C17.9548 26.2214 14.5686 27 11.0005 27C7.43207 27 4.04553 26.2212 1.00159 24.8243Z"
                                                    stroke="#1D262A" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </svg></button></div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="menu-bar" data-v-4db352b3="">
                        <div data-v-4db352b3="">
                            <nav class="hero-banner" data-v-4db352b3="">
                                <ul class="banner-container" data-v-4db352b3="">
                                    <li data-v-4db352b3=""><a href="/c/equipment-rent"
                                            class="hero-banner-title nuxt-link-exact-active nuxt-link-active"
                                            data-v-4db352b3="" aria-current="page">
                                            For rent
                                        </a></li>
                                    <li class="with-submenu" data-v-4db352b3="">
                                        New for sale
                                        <span data-v-4db352b3=""><i class="down-arrow icon icon--angle-bold-down"
                                                data-v-4db352b3=""></i></span>

                                    </li>
                                    <li data-v-4db352b3=""><a
                                            href="/c/equipment-buy?condition=620&amp;condition=621&amp;sort=POSITION"
                                            class="hero-banner-title" data-v-4db352b3="">
                                            Used for sale
                                        </a></li>
                                    <li data-v-4db352b3=""><a href="/c/attachment-buy?sort=POSITION"
                                            class="hero-banner-title" data-v-4db352b3="">
                                            Attachments
                                        </a></li>
                                    <li class="with-submenu w-auto" data-v-4db352b3=""><span data-v-4db352b3="">
                                            Brands&nbsp;
                                            <i class="down-arrow ltr:ml-1.5 rtl:mr-1.5 icon icon--angle-bold-down"
                                                data-v-4db352b3=""></i></span>

                                    </li>
                                    <li class="with-submenu more-drop desktop-only" data-v-4db352b3="">
                                        More
                                        <span data-v-4db352b3=""><i class="down-arrow icon icon--angle-bold-down"
                                                data-v-4db352b3=""></i></span>


                                    </li>
                                </ul>

                            </nav>


                        </div>
                    </div>


                </header>

`;

header.innerHTML = header_div;
