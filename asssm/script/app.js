let header = document.getElementById("header");

let header_div = `
    <header class="d-none d-lg-flex header position-fixed w-100 justify-content-between">

        <div class="d-flex align-items-center gap-4 logo"><a href="/"><img alt="" loading="lazy" width="198" height="48"
                    decoding="async" data-nimg="1" class="d-none d-sm-block" style="color:transparent"
                    src="../img/logo.webp" /><img alt="" loading="lazy" width="64" height="64" decoding="async"
                    data-nimg="1" class="d-sm-none" style="color:transparent"
                    src="/_next/image?url=%2Fimages%2Flogo-icon.png&amp;w=128&amp;q=75" /></a>
            <form class="align-items-center gap-1 d-none d-xl-flex"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="fs-5">
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                </svg><input type="text" placeholder="Search..." class="bg-transparent border-0" /></form>


        </div>


        <div class="d-flex align-items-center">
            <div class="gap-3 pe-3 d-none d-4xl-flex"></div>
            <a
                class="cart d-flex align-items-center gap-2 border-0 fs-4" href="#"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-shopping-cart-plus">
                    <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M12.5 17h-6.5v-14h-2"></path>
                    <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path>
                    <path d="M16 19h6"></path>
                    <path d="M19 16v6"></path>
                </svg><span>2</span></a><a class="list text-uppercase border-0 font-medium d-none d-md-block"
                href="equipment">list your equipment</a>


            <a class="collection text-uppercase border-0 d-none d-md-flex align-items-center gap-2 font-medium"
                href="collection"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="fs-4">
                    <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                    <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                    <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                    <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                </svg> our collection</a>

            <button id="addClass"
                class="list text-uppercase nav__bar border-0 d-flex flex-column align-items-center justify-content-center"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fs-3">
                    <path d="M4 6h16"></path>
                    <path d="M7 12h13"></path>
                    <path d="M10 18h10"></path>
                </svg><span>Menu</span></button>
        </div>
    </header>
















    <nav class="mobile-menu">
        
        <a class="active" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="tabler-icon tabler-icon-home">
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
            </svg><span>Home</span></a>
            <a href="cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="tabler-icon tabler-icon-shopping-cart">
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
            </svg><span>Cart</span></a><a href="collection"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-layout-grid">
                <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
            </svg><span>Collections</span></a><a id="nav__bar" class="nav__bar" href="#"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="tabler-icon tabler-icon-menu-2">
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
            </svg><span>Menu</span></a></nav>





    <div class="mobile-search d-lg-none" id="open_manue">
      <div
        class="content"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-search"
        >
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M21 21l-6 -6"></path>
        </svg>
        <div class="flex-grow-1">
          <h6>Choose Machine</h6>
          <span>Category • Type • Location</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-adjustments-horizontal"
        >
          <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M4 6l8 0"></path>
          <path d="M16 6l4 0"></path>
          <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M4 12l2 0"></path>
          <path d="M10 12l10 0"></path>
          <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M4 18l11 0"></path>
          <path d="M19 18l1 0"></path>
        </svg>
      </div>

      <div
        class="modal fade show"
        id="exampleModal"
        tabindex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header border-0">
              <button
                id="close_manue"
                type="button"
                class="text-white border-0 bg-transparent"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-x"
                >
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div class="modal-body">
              <form class="inner flex-column">
                <div class="select-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-backhoe"
                  >
                    <path d="M4 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M13 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M13 19l-9 0"></path>
                    <path d="M4 15l9 0"></path>
                    <path d="M8 12v-5h2a3 3 0 0 1 3 3v5"></path>
                    <path d="M5 15v-2a1 1 0 0 1 1 -1h7"></path>
                    <path d="M21.12 9.88l-3.12 -4.88l-5 5"></path>
                    <path
                      d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z"
                    ></path>
                  </svg>
                  <div class="flex-grow-1">
                    <div class="d-flex justify-content-between">
                      <!--$--><!--/$-->
                      <div class="position-relative">
                        <div>
                          <button
                            class="heading-input"
                            id="headlessui-listbox-button-:r17:"
                            type="button"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            data-headlessui-state=""
                          >
                            <span>Select Category</span>
                          </button>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tabler-icon tabler-icon-selector"
                      >
                        <path d="M8 9l4 -4l4 4"></path>
                        <path d="M16 15l-4 4l-4 -4"></path>
                      </svg>
                    </div>
                    <p>Select Your Category</p>
                  </div>
                </div>
                <div class="select-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-bulldozer"
                  >
                    <path d="M2 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M12 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M19 13v4a2 2 0 0 0 2 2h1"></path>
                    <path d="M14 19h-10"></path>
                    <path d="M4 15h10"></path>
                    <path d="M9 11v-5h2a3 3 0 0 1 3 3v6"></path>
                    <path d="M5 15v-3a1 1 0 0 1 1 -1h8"></path>
                    <path d="M19 17h-3"></path>
                  </svg>
                  <div class="flex-grow-1">
                    <div class="d-flex justify-content-between">
                      <!--$--><!--/$-->
                      <div class="position-relative">
                        <div>
                          <button
                            class="heading-input"
                            id="headlessui-listbox-button-:r18:"
                            type="button"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            data-headlessui-state=""
                          >
                            <span>Equipment Name</span>
                          </button>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tabler-icon tabler-icon-selector"
                      >
                        <path d="M8 9l4 -4l4 4"></path>
                        <path d="M16 15l-4 4l-4 -4"></path>
                      </svg>
                    </div>
                    <p>Select Your Equipment</p>
                  </div>
                </div>
                <div class="select-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-map-pin-filled"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      stroke-width="0"
                    ></path>
                  </svg>
                  <div class="flex-grow-1">
                    <div class="d-flex justify-content-between">
                      <!--$--><!--/$-->
                      <div class="position-relative">
                        <div>
                          <button
                            class="heading-input"
                            id="headlessui-listbox-button-:r19:"
                            type="button"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            data-headlessui-state=""
                          >
                            <span>Your Location</span>
                          </button>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tabler-icon tabler-icon-selector"
                      >
                        <path d="M8 9l4 -4l4 4"></path>
                        <path d="M16 15l-4 4l-4 -4"></path>
                      </svg>
                    </div>
                    <p>Select Your Location</p>
                  </div>
                </div>
                <div class="select-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-calendar-due"
                  >
                    <path
                      d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                    ></path>
                    <path d="M16 3v4"></path>
                    <path d="M8 3v4"></path>
                    <path d="M4 11h16"></path>
                    <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  </svg>
                  <div class="flex-grow-1">
                    <input
                      class="bg-transparent w-100 border-0 text-white picker"
                      type="date"
                    />
                    <p>Select Your Date</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


        <div class="nav__items-wrapper " id="navWrapper">
        <div class="nav__items">
            <div class="nav__items-head d-flex align-items-center justify-content-between"><a class="nav__item "
                    href="/"><img alt="" loading="lazy" width="198" height="48" decoding="async" data-nimg="1"
                        style="color:transparent"
                        srcSet="/_next/image?url=%2Fimages%2Flogo.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogo.png&amp;w=640&amp;q=75 2x"
                        src="/_next/image?url=%2Fimages%2Flogo.png&amp;w=640&amp;q=75" /></a><button
                    class="nav__close border-0 " id="removeClass"><i class="close icon"></i></button></div>
            <ul class="list-unstyled">
                <li><a class="nav__item  " href="/">Home</a></li>
                <li><a class="nav__item  " href="/landing">Landing Page</a></li>
                <li><a class="nav__item  " href="/about">About</a></li>
                <li><a class="nav__item  " href="/contact">contact</a></li>
                <li><a class="nav__item  " href="/services">Services</a></li>
                <li><a class="nav__item  " href="/services-details">Service Details</a></li>
                <li><a class="nav__item  " href="/information">Cart Info</a></li>
                <li><a class="nav__item  " href="/shipping">Shipping Details</a></li>
                <li><a class="nav__item  " href="/payment">Payment</a></li>
                <li><a class="nav__item active " href="/order-complete">Payment Success</a></li>
                <li><a class="nav__item  " href="/result">Search Result</a></li>
                <li><a class="nav__item  " href="/terms">Terms Of Service</a></li>
                <li><a class="nav__item  " href="/error">Not Found</a></li>
            </ul>
        </div>
    </div>


`;

header.innerHTML = header_div;

let sidebar_left = document.getElementById("sidebar_left");

let sidebar_left_ = `
    <div class="sidebar d-none d-lg-flex flex-column justify-content-end align-items-center">
        <div class="vline"></div>
        <ul class="social list-unstyled">
            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="tabler-icon tabler-icon-brand-facebook">
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                    </svg></a></li>
            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="tabler-icon tabler-icon-brand-instagram">
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M16.5 7.5l0 .01"></path>
                    </svg></a></li>
            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="tabler-icon tabler-icon-brand-discord">
                        <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                        <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                        <path
                            d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3">
                        </path>
                        <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                    </svg></a></li>
            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="tabler-icon tabler-icon-brand-wikipedia">
                        <path d="M3 4.984h2"></path>
                        <path d="M8 4.984h2.5"></path>
                        <path d="M14.5 4.984h2.5"></path>
                        <path d="M22 4.984h-2"></path>
                        <path d="M4 4.984l5.455 14.516l6.545 -14.516"></path>
                        <path d="M9 4.984l6 14.516l6 -14.516"></path>
                    </svg></a></li>
        </ul>
        <div class="vline"></div>
        <div class="position-relative">
            <div class="d-flex flex-column"><button id="plusbtn" class="plus bg-primary fs-5"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="tabler-icon tabler-icon-plus">
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                    </svg></button><button id="sharebtn" class="share text-primary"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="tabler-icon tabler-icon-share">
                        <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M8.7 10.7l6.6 -3.4"></path>
                        <path d="M8.7 13.3l6.6 3.4"></path>
                    </svg></button></div>

        </div>
    </div>
`;

sidebar_left.innerHTML = sidebar_left_;

let bottom_bar = document.getElementById("bottom_bar");

let bottom_bar_ = `
    <div class="bottom-bar">
        <form class="inner">
            <div class="select-box">

                <div class="flex-grow-1"><!--$-->
                    <div class="position-relative">
                        <div><button class="input" id="headlessui-listbox-button-:Rphra:" type="button"
                                aria-haspopup="listbox" aria-expanded="false" data-headlessui-state=""><span>Select
                                    Category</span></button></div>
                    </div><!--/$-->
                    <p>Select Your Category</p>
                </div>
            </div>

            <div class="select-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-bulldozer">
                    <path d="M2 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M12 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M19 13v4a2 2 0 0 0 2 2h1"></path>
                    <path d="M14 19h-10"></path>
                    <path d="M4 15h10"></path>
                    <path d="M9 11v-5h2a3 3 0 0 1 3 3v6"></path>
                    <path d="M5 15v-3a1 1 0 0 1 1 -1h8"></path>
                    <path d="M19 17h-3"></path>
                </svg>
                <div class="flex-grow-1"><!--$-->
                    <div class="position-relative">
                        <div><button class="input" id="headlessui-listbox-button-:Rpira:" type="button"
                                aria-haspopup="listbox" aria-expanded="false" data-headlessui-state=""><span>Equipment
                                    Name</span></button></div>
                    </div><!--/$-->
                    <p>Select Your Equipment</p>
                </div>
            </div>
            <div class="select-box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-map-pin-filled">
                    <path
                        d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                        fill="currentColor" stroke-width="0"></path>
                </svg>
                <div class="flex-grow-1"><!--$-->
                    <div class="position-relative">
                        <div><button class="input" id="headlessui-listbox-button-:Rpjra:" type="button"
                                aria-haspopup="listbox" aria-expanded="false" data-headlessui-state=""><span>Your
                                    Location</span></button></div>
                    </div><!--/$-->
                    <p>Select Your Location</p>
                </div>
            </div>
            <div class="select-box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="tabler-icon tabler-icon-calendar-due">
                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M16 3v4"></path>
                    <path d="M8 3v4"></path>
                    <path d="M4 11h16"></path>
                    <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                </svg>
                <div class="flex-grow-1">
                    <div class="react-datepicker-wrapper">
                        <div class="react-datepicker__input-container"><input type="text" class=""
                                value="11/09/2023 - 11/09/2023" /></div>
                    </div>
                    <p>Select Your Date</p>
                </div>
            </div>
            <div class="search-btn-area"><a class="search-btn" href="result"><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-search">
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                        <path d="M21 21l-6 -6"></path>
                    </svg></a></div>
        </form>
    </div>


`;

bottom_bar.innerHTML = bottom_bar_;

let navWrapper = document.getElementById("navWrapper");
let addClass = document.getElementById("addClass");
let removeClass = document.getElementById("removeClass");
let open_manue = document.getElementById("open_manue");
let nav__bar = document.getElementById("nav__bar");

let close_manue = document.getElementById("close_manue");

let exampleModal = document.getElementById("exampleModal");

addClass.onclick = function () {
  navWrapper.classList.add("nav__items-wrapper-active");
};

nav__bar.onclick = function () {
  navWrapper.classList.add("nav__items-wrapper-active");
};

removeClass.onclick = function () {
  navWrapper.classList.remove("nav__items-wrapper-active");
};

open_manue.onclick = function () {
  exampleModal.style.display = "block";
};
close_manue.addEventListener("click", function () {
  exampleModal.style.display = "none !important";
});
