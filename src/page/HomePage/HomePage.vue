<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
  <div class="homePage">
    <div class="header">
      <!-- make header a seperate component later -->

      <!-- <div class="headerLeft"> -->
      <div class="headerLogo">
        <svg
          width="60"
          height="60"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="8" fill="#FEDA03"></rect>
          <path
            d="M27.6007 19.8536C28.8607 19.5262 29.9817 18.5838 29.9817 16.6889C29.9817 13.5342 27.3031 12.8 23.8706 12.8H10.2V27.0064H15.9539V22.185H22.7793C23.8309 22.185 24.446 22.6016 24.446 23.6334V27.0064H30.2V23.4548C30.2 21.5203 29.1087 20.3 27.6007 19.8536ZM22.8785 18.3556H15.9539V16.9667H22.8785C23.6325 16.9667 24.0888 17.0659 24.0888 17.6612C24.0888 18.2564 23.6325 18.3556 22.8785 18.3556Z"
            fill="black"
          ></path>
        </svg>
      </div>

      <div class="headerMenu">
        <a href="/" class="titleStyle" data-marker="main-menu/exploreLink">Explore</a>
        <a href="/" class="titleStyle" data-marker="main-menu/exploreLink">My Items</a>
        <a href="/" class="titleStyle" data-marker="main-menu/exploreLink">Following</a>
        <a href="/" class="titleStyle" data-marker="main-menu/exploreLink">Activity</a>
      </div>

      <div class="menuSeperator"></div>

      <div class="menuDropDown sc-bdnxRM sc-hTRkXV jvCTkj enlJuL" aria-expanded="false">
        <span class="sc-dlnjwi sc-hKFxyN sc-biJonm dJXsSm hALNzR jxdTsu">
          <button type="button" class="btn sc-pNWdM sc-jrsJWt sc-eHEENL XJxhY jkMuXo htxsRE">
            <svg
              viewBox="0 0 14 4"
              fill="none"
              width="16"
              height="16"
              xlmns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                fill="currentColor"
              ></path>
            </svg></button
        ></span>
      </div>
      <!-- </div> -->

      <div class="headerRight">
        <div class="sc-bdnxRM sc-gtsrHT jvCTkj fDJtLj">
          <div class="buttonWrap">
            <button
              class="generalBtn createBtn"
              type="button"
              data-marker="root/appPage/header/createCollectibleButton"
            >
              Create
            </button>

            <button class="generalBtn connectWalletBtn" type="button">Connect wallet</button>

            <button type="button" class="generalBtn searchBtn">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                width="12"
                height="12"
                xlmns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7ZM7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C8.57591 14 10.0302 13.4792 11.2001 12.6004C11.2281 12.6376 11.259 12.6733 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.7071 11.2929C12.6733 11.259 12.6376 11.2281 12.6004 11.2001C13.4792 10.0302 14 8.57591 14 7C14 3.13401 10.866 0 7 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="body ijYuIo">
      <!-- make body a seperate component later -->
      <!-- <div class="displayImage">
        <div class="leftImage" style="cursor: zoom-in">
          <img
            src="https://img.rarible.com/prod/image/upload/t_big/prod-itemImages/0xa4cbac73fa850e431303245ac23a688eef1b0056:15"
            alt="#14 - Neon Drop"
            title="#14 - Neon Drop"
            class="
              leftImage
              sc-gGLxEB sc-ckTSus sc-fbIWvP sc-FRrlG
              dGJRan
              gStCxK
              jREztg
              cIjgB
              sc-dvXYtj
              iduHXF
            "
            loading="lazy"
            style="width: 614px; opacity: 1; visibility: visible; position: relative"
          />
          <div class="sc-bdnxRM sc-fXazdy jvCTkj UjHkE" style="display: none">
            <div class="sc-bdnxRM sc-hOPeYd jvCTkj eXirsP" style="width: 403px; height: 439px">
              <div
                class="sc-bdnxRM sc-gtsrHT sc-eKYRIR jvCTkj kjrcYC lcKYlP"
                style="width: 403px; height: 403px"
              ></div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <div class="description"></div> -->

      <div class="sc-bdnxRM sc-gtsrHT sc-bZesDY jvCTkj SofnU bCyfTj">
        <div class="sc-bdnxRM sc-gtsrHT sc-dkuGKe sc-cKhgmI jvCTkj gdXnHw fklXsV fRPFrj">
          <div class="sc-bdnxRM sc-gtsrHT sc-hgRTRj jvCTkj gdXnHw LNHIN">
            <div
              data-marker="root/appPage/token/image"
              class="sc-bdnxRM sc-gtsrHT sc-fXgAZx jvCTkj ha-dmQP erAkNO"
            >
              <div class="sc-bdnxRM sc-clGGWX jvCTkj kvptmo">
                <div
                  class="sc-bdnxRM sc-oeezt sc-hndLF jvCTkj cPyZzU iWOYzY"
                  style="cursor: zoom-in"
                >
                  <img
                    src="https://img.rarible.com/prod/image/upload/t_big/prod-itemImages/0xa4cbac73fa850e431303245ac23a688eef1b0056:15"
                    alt="#14 - Neon Drop"
                    title="#14 - Neon Drop"
                    class="
                      sc-gGLxEB sc-ckTSus sc-fbIWvP sc-FRrlG
                      dGJRan
                      gStCxK
                      jREztg
                      cIjgB
                      sc-dvXYtj
                      iduHXF
                    "
                    loading="lazy"
                    style="width: 612px; opacity: 1; visibility: visible; position: relative"
                  />
                  <div class="sc-bdnxRM sc-fXazdy jvCTkj UjHkE" style="display: none">
                    <div
                      class="sc-bdnxRM sc-hOPeYd jvCTkj eXirsP"
                      style="width: 612px; height: 744px"
                    >
                      <div
                        class="sc-bdnxRM sc-gtsrHT sc-eKYRIR jvCTkj jSaqLG lcKYlP"
                        style="width: 612px; height: 612px"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="description sc-bdnxRM sc-gtsrHT jvCTkj fIXVxK">
        <div class="sc-bdnxRM sc-gtsrHT jvCTkj cqyYQe">
          <div class="sc-bdnxRM sc-gtsrHT jvCTkj gdXnHw">
            <div class="sc-bdnxRM sc-gtsrHT jvCTkj fcJOkd">
              <div
                data-marker="root/appPage/token/sidebar/header"
                class="sc-bdnxRM sc-gtsrHT jvCTkj fDJtLj"
              >
                <div class="sc-bdnxRM sc-gtsrHT jvCTkj PHhKC">
                  <div class="sc-bdnxRM sc-gtsrHT jvCTkj jgXjXG">
                    <h1 class="sc-dlnjwi sc-hKFxyN sc-jHUuBy dJXsSm gEHjVu kQiVoP">
                      #14 - Neon Drop
                    </h1>
                  </div>
                  <div class="sc-bdnxRM sc-gtsrHT jvCTkj hSELKp">
                    <button
                      class="
                        sc-pNWdM sc-jrsJWt sc-kEqXSa
                        XJxhY
                        cyTDyE
                        cIaeyZ
                        sc-crzoAE
                        gtFsLw
                        sc-jFcyzc
                        fdJCKr
                      "
                      type="button"
                    >
                      <div class="sc-bdnxRM sc-bOCfAF jvCTkj bWbxPx">
                        <svg
                          viewBox="0 0 17 16"
                          fill="none"
                          width="15"
                          height="15"
                          xlmns="http://www.w3.org/2000/svg"
                          class="sc-bRubDb lmSvld"
                        >
                          <path
                            d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                            stroke="rgba(4, 4, 5, 1)"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                      <span data-value="60" class="sc-dlnjwi sc-hKFxyN dJXsSm gEHjVu">60</span>
                    </button>
                    <div class="sc-bdnxRM sc-gtsrHT jvCTkj drtNyu">
                      <div class="sc-bdnxRM sc-hTRkXV jvCTkj enlJuL" aria-expanded="false">
                        <button
                          type="button"
                          data-marker="root/appPage/token/sidebar/header/actions/trigger"
                          class="sc-pNWdM sc-jrsJWt sc-fKgJPI sc-iwajpm XJxhY cyTDyE jDJikH yIthn"
                        >
                          <svg
                            viewBox="0 0 14 4"
                            fill="none"
                            width="13.200000000000001"
                            height="13.200000000000001"
                            xlmns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sc-bdnxRM sc-gtsrHT jvCTkj hmMFuy">
                  <span class="sc-dlnjwi sc-hKFxyN sc-zHacW dJXsSm fZhgKn hFBxwb"
                    >On sale for
                    <span class="sc-dlnjwi sc-hKFxyN sc-daBunf dJXsSm yJIFJ eQUdeu"
                      ><span
                        title="1.09 ETH"
                        data-currency-symbol="ETH"
                        data-currency-address="0x0000000000000000000000000000000000000000"
                        data-price="1.09"
                        class="sc-dlnjwi sc-hKFxyN dJXsSm fbQESC"
                        >1.09 ETH</span
                      ></span
                    ></span
                  >
                </div>
              </div>
            </div>
            <div class="sc-bdnxRM sc-gtsrHT jvCTkj lonEzw">
              <div class="sc-bdnxRM sc-enTqHk jvCTkj gVANIR">
                <button type="button" class="sc-pNWdM sc-jrsJWt sc-ciSkZP XJxhY cyTDyE kPCRWr">
                  <span class="sc-dlnjwi sc-hKFxyN sc-dsXzNU dJXsSm exA-dlz bTkamK"
                    >Unlockable</span
                  >
                </button>
              </div>
            </div>
            <div class="sc-bdnxRM sc-gtsrHT jvCTkj lonEzw">
              <span class="sc-dlnjwi sc-hKFxyN sc-eqLmJG dJXsSm fbQESC fvWiKM"
                >The Drops Original Series Buyers will get access to the
                <a
                  href="http://drops.family"
                  target="_blank"
                  class="
                    sc-dlnjwi sc-hKFxyN sc-dIvrsQ sc-hHEiqL
                    dJXsSm
                    fbQESC
                    ptkOb
                    clIRY
                    sc-yEDbz
                    bYtTOq
                  "
                  >drops.family</a
                >
                channel on discord. Includes: 1x Portratit shot. 1x Side view (Unlockable).
                <span class="sc-dlnjwi sc-hKFxyN dJXsSm fbQESC"> </span
              ></span>
            </div>
            <div class="sc-bdnxRM sc-gtsrHT jvCTkj jhaHaJ">
              <div id="item-credits" class="sc-bdnxRM sc-gtsrHT jvCTkj jsKwbJ">
                <div class="sc-bdnxRM sc-gtsrHT jvCTkj cJQiTp">
                  <div class="sc-bdnxRM sc-gtsrHT jvCTkj fDJtLj">
                    <span class="sc-dlnjwi sc-hKFxyN dJXsSm bHLYLH">Creator</span>
                    <div class="sc-bdnxRM sc-gtsrHT jvCTkj hmMFuy">
                      <div class="sc-bdnxRM sc-gtsrHT jvCTkj gcLMcm">
                        <div
                          data-address="0xb32ec9935f9131d7f3d0b3ad1c28ca60f828a395"
                          data-marker="root/appPage/token/sidebar/main/creator"
                          class="sc-bdnxRM sc-gtsrHT jvCTkj ddDgOL"
                        >
                          <div class="sc-bdnxRM sc-kHWWYL jvCTkj iGDlQI">
                            <a
                              href="/nebenzu?tab=onsale"
                              data-marker="root/appPage/token/sidebar/main/creator/avatarLink"
                              class="
                                sc-dlnjwi sc-hKFxyN sc-dIvrsQ sc-hHEiqL
                                dJXsSm
                                fbQESC
                                ptkOb
                                clIRY
                              "
                              ><div class="sc-bdnxRM sc-fuISkM jvCTkj jnAJaq">
                                <img
                                  src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xb32ec9935f9131d7f3d0b3ad1c28ca60f828a395/avatar/QmVaNj5JLgcJ3w2CyxYiuaCxbVHYn24UbVPmz4GGDHVS25"
                                  class="
                                    sc-gGLxEB sc-ckTSus sc-fbIWvP
                                    dGJRan
                                    NsoaT
                                    jREztg
                                    sc-dvXYtj
                                    iduHXF
                                  "
                                  loading="lazy"
                                  style="
                                    width: 40px;
                                    height: 40px;
                                    opacity: 1;
                                    visibility: visible;
                                    position: relative;
                                  "
                                />
                                <div class="sc-bdnxRM sc-fXazdy jvCTkj UjHkE" style="display: none">
                                  <div
                                    class="sc-bdnxRM sc-gtsrHT sc-eKYRIR jvCTkj hqmMME dlRkEP"
                                    style="width: 40px; height: 40px"
                                  ></div>
                                </div>
                                <div class="sc-bdnxRM sc-fcmMJX jvCTkj bRzrLL">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
                                      fill="#feda03"
                                    ></path>
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
                                      fill="#000000"
                                    ></path>
                                  </svg>
                                </div></div
                            ></a>
                          </div>
                          <div class="sc-bdnxRM sc-gtsrHT sc-bTDOke jvCTkj bMdBsL dXiuJH">
                            <span class="sc-dlnjwi sc-hKFxyN dJXsSm jOUuLS"
                              ><a
                                href="/nebenzu?tab=onsale"
                                data-marker="root/appPage/token/sidebar/main/creator/nameLink"
                                class="
                                  sc-dlnjwi sc-hKFxyN sc-dIvrsQ sc-hHEiqL
                                  dJXsSm
                                  fbQESC
                                  ptkOb
                                  clIRY
                                "
                                ><span
                                  data-address="0xb32ec9935f9131d7f3d0b3ad1c28ca60f828a395"
                                  title="0xb32ec9935f9131d7f3d0b3ad1c28ca60f828a395"
                                  class="sc-dlnjwi sc-hKFxyN dJXsSm yJIFJ"
                                  >Nebenzu</span
                                ></a
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sc-bdnxRM sc-gtsrHT jvCTkj cJQiTp">
                  <div class="sc-bdnxRM sc-gtsrHT jvCTkj fDJtLj">
                    <span class="sc-dlnjwi sc-hKFxyN dJXsSm bHLYLH">Collection</span>
                    <div class="sc-bdnxRM sc-gtsrHT jvCTkj hmMFuy">
                      <div class="sc-bdnxRM sc-gtsrHT jvCTkj gcLMcm">
                        <div
                          data-address="0xa4cbac73fa850e431303245ac23a688eef1b0056"
                          data-marker="root/appPage/token/sidebar/main/collection"
                          class="sc-bdnxRM sc-gtsrHT jvCTkj ddDgOL"
                        >
                          <div class="sc-bdnxRM sc-kHWWYL jvCTkj iGDlQI">
                            <a
                              href="/drops?tab=onsale"
                              data-marker="root/appPage/token/sidebar/main/collection/avatarLink"
                              class="
                                sc-dlnjwi sc-hKFxyN sc-dIvrsQ sc-hHEiqL
                                dJXsSm
                                fbQESC
                                ptkOb
                                clIRY
                              "
                              ><div class="sc-bdnxRM sc-fuISkM jvCTkj jnAJaq">
                                <img
                                  src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xa4cbac73fa850e431303245ac23a688eef1b0056/avatar/QmVaNj5JLgcJ3w2CyxYiuaCxbVHYn24UbVPmz4GGDHVS25"
                                  class="
                                    sc-gGLxEB sc-ckTSus sc-fbIWvP
                                    dGJRan
                                    NsoaT
                                    jREztg
                                    sc-dvXYtj
                                    iduHXF
                                  "
                                  loading="lazy"
                                  style="
                                    width: 40px;
                                    height: 40px;
                                    opacity: 1;
                                    visibility: visible;
                                    position: relative;
                                  "
                                />
                                <div class="sc-bdnxRM sc-fXazdy jvCTkj UjHkE" style="display: none">
                                  <div
                                    class="sc-bdnxRM sc-gtsrHT sc-eKYRIR jvCTkj hqmMME dlRkEP"
                                    style="width: 40px; height: 40px"
                                  ></div>
                                </div>
                                <div class="sc-bdnxRM sc-fcmMJX jvCTkj bRzrLL">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
                                      fill="#feda03"
                                    ></path>
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
                                      fill="#000000"
                                    ></path>
                                  </svg>
                                </div></div
                            ></a>
                          </div>
                          <div class="sc-bdnxRM sc-gtsrHT sc-bTDOke jvCTkj bMdBsL dXiuJH">
                            <span class="sc-dlnjwi sc-hKFxyN dJXsSm jOUuLS"
                              ><a
                                href="/drops?tab=onsale"
                                data-marker="root/appPage/token/sidebar/main/collection/nameLink"
                                class="
                                  sc-dlnjwi sc-hKFxyN sc-dIvrsQ sc-hHEiqL
                                  dJXsSm
                                  fbQESC
                                  ptkOb
                                  clIRY
                                "
                                ><span
                                  data-address="0xa4cbac73fa850e431303245ac23a688eef1b0056"
                                  title="0xa4cbac73fa850e431303245ac23a688eef1b0056"
                                  class="sc-dlnjwi sc-hKFxyN dJXsSm yJIFJ"
                                  >The Drops</span
                                ></a
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-marker="root/appPage/token/sidebar/main/royalties"
                class="sc-bdnxRM sc-gtsrHT jvCTkj eccOyI"
              >
                <div class="sc-bdnxRM sc-gtsrHT sc-cCwPlL jvCTkj fDJtLj jbBjbv">
                  <span class="sc-dlnjwi sc-hKFxyN sc-kqfmhM dJXsSm eKtFCI dJNUVb"
                    ><span class="sc-dlnjwi sc-hKFxyN dJXsSm yJIFJ"
                      ><span data-value="1000" class="sc-dlnjwi sc-hKFxyN dJXsSm fbQESC"
                        >10%</span
                      ></span
                    >
                    of sales will go to creator</span
                  >
                </div>
              </div>
              <div class="sc-bdnxRM sc-gtsrHT sc-czETjp jvCTkj iaKKki hnTkDI">
                <div class="sc-bdnxRM sc-gtsrHT jvCTkj fUTYcx">
                  <div class="sc-bdnxRM sc-gtsrHT jvCTkj aZAhn" style="display: flex">
                    <div
                      style="
                        position: relative;
                        overflow: hidden;
                        width: 100%;
                        height: auto;
                        min-height: 48px;
                        
                      "
                    >

                    <!-- max-height: 200px; -->
                      <div
                        style="
                          position: relative;
                          overflow: scroll;
                          margin-right: -15px;
                          margin-bottom: -15px;
                          min-height: 63px;
                          display: flex;
                        "
                      >
                                                <!-- max-height: 215px; -->

                        <div
                          role="tablist"
                          class="sc-bdnxRM sc-gtsrHT sc-fVnRWS jvCTkj fDJtLj ipwLBG"
                        >
                          <button
                            role="tab"
                            aria-selected="true"
                            type="button"
                            data-marker="root/appPage/token/sidebar/main/info/details/trigger"
                            class="sc-pNWdM sc-jrsJWt sc-juNJA-d XJxhY cyTDyE flcLKg"
                          >
                            <span class="sc-dlnjwi sc-hKFxyN sc-gGqFFC dJXsSm cBHPdj eOTYGC"
                              >Details</span
                            >
                            <div
                              class="sc-bdnxRM sc-gtsrHT sc-gDyJDg jvCTkj fDJtLj ccDJtE"
                            ></div></button
                          ><button
                            role="tab"
                            aria-selected="false"
                            type="button"
                            data-marker="root/appPage/token/sidebar/main/info/bids/trigger"
                            class="sc-pNWdM sc-jrsJWt sc-juNJA-d XJxhY cyTDyE ehoVfs"
                          >
                            <span class="sc-dlnjwi sc-hKFxyN sc-gGqFFC dJXsSm cBHPdj eOTYGC"
                              >Bids</span
                            >
                            <div
                              class="sc-bdnxRM sc-gtsrHT sc-gDyJDg jvCTkj fDJtLj epUnBg"
                            ></div></button
                          ><button
                            role="tab"
                            aria-selected="false"
                            type="button"
                            data-marker="root/appPage/token/sidebar/main/info/history/trigger"
                            class="sc-pNWdM sc-jrsJWt sc-juNJA-d XJxhY cyTDyE ehoVfs"
                          >
                            <span class="sc-dlnjwi sc-hKFxyN sc-gGqFFC dJXsSm cBHPdj eOTYGC"
                              >History</span
                            >
                            <div class="sc-bdnxRM sc-gtsrHT sc-gDyJDg jvCTkj fDJtLj epUnBg"></div>
                          </button>
                        </div>
                      </div>
                      <div
                        class="sc-laZMeE ljWfRO"
                        style="
                          position: absolute;
                          height: 6px;
                          transition: opacity 200ms ease 0s;
                          opacity: 0;
                          visibility: hidden;
                        "
                      >
                        <div
                          class="sc-bdnxRM sc-gSYDnn jvCTkj gUaHnb"
                          style="position: relative; display: block; height: 100%; width: 0px"
                        ></div>
                      </div>
                      <div
                        class="sc-laZMeE ljWfRO"
                        style="
                          position: absolute;
                          width: 6px;
                          transition: opacity 200ms ease 0s;
                          opacity: 0;
                          visibility: hidden;
                        "
                      >
                        <div
                          class="sc-bdnxRM sc-gSYDnn jvCTkj gUaHnb"
                          style="position: relative; display: block; width: 100%; height: 0px"
                        ></div>
                      </div>
                    </div>
                    <div class="sc-bShgHC bPNwGg" style="z-index: -1; opacity: 0"></div>
                    <div class="sc-hkoqWr fLUzWa" style="opacity: 0; z-index: -1"></div>
                  </div>
                </div>
              </div>
              <div class="sc-bdnxRM sc-gtsrHT jvCTkj jQzmww">
                <div class="sc-bdnxRM sc-gtsrHT jvCTkj gdXnHw">
                  <div class="sc-bdnxRM sc-gtsrHT jvCTkj fDJtLj">
                    <div class="sc-bdnxRM sc-gtsrHT jvCTkj dVaqxJ">
                      <div class="sc-bdnxRM sc-gtsrHT jvCTkj fDJtLj">
                        <span class="sc-dlnjwi sc-hKFxyN dJXsSm bHLYLH">Owner</span>
                        <div class="sc-bdnxRM sc-gtsrHT jvCTkj hmMFuy">
                          <div class="sc-bdnxRM sc-gtsrHT jvCTkj gcLMcm">
                            <div
                              data-address="0x91857afe6cd40f459aabb56491e9b5c852e66255"
                              data-marker="root/appPage/token/sidebar/main/info/details/ownerLink"
                              class="sc-bdnxRM sc-gtsrHT jvCTkj ddDgOL"
                            >
                              <div class="sc-bdnxRM sc-kHWWYL jvCTkj iGDlQI">
                                <a
                                  href="/user/0x91857afe6cd40f459aabb56491e9b5c852e66255?tab=onsale"
                                  data-marker="root/appPage/token/sidebar/main/info/details/ownerLink/avatarLink"
                                  class="
                                    sc-dlnjwi sc-hKFxyN sc-dIvrsQ sc-hHEiqL
                                    dJXsSm
                                    fbQESC
                                    ptkOb
                                    clIRY
                                  "
                                  ><div class="sc-bdnxRM sc-fuISkM jvCTkj jnAJaq">
                                    <img
                                      src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x91857afe6cd40f459aabb56491e9b5c852e66255/avatar/QmR1p5Q7zSGN7JiVTpNTFQUxKEaFBLdjBBBJgELY4BaLRG"
                                      class="
                                        sc-gGLxEB sc-ckTSus sc-fbIWvP
                                        dGJRan
                                        NsoaT
                                        jREztg
                                        sc-dvXYtj
                                        iduHXF
                                      "
                                      loading="lazy"
                                      style="
                                        width: 40px;
                                        height: 40px;
                                        opacity: 1;
                                        visibility: visible;
                                        position: relative;
                                      "
                                    />
                                    <div
                                      class="sc-bdnxRM sc-fXazdy jvCTkj UjHkE"
                                      style="display: none"
                                    >
                                      <div
                                        class="sc-bdnxRM sc-gtsrHT sc-eKYRIR jvCTkj hqmMME dlRkEP"
                                        style="width: 40px; height: 40px"
                                      ></div>
                                    </div>
                                    <div class="sc-bdnxRM sc-fcmMJX jvCTkj bRzrLL">
                                      <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
                                          fill="#feda03"
                                        ></path>
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
                                          fill="#000000"
                                        ></path>
                                      </svg>
                                    </div></div
                                ></a>
                              </div>
                              <div class="sc-bdnxRM sc-gtsrHT sc-bTDOke jvCTkj bMdBsL dXiuJH">
                                <span class="sc-dlnjwi sc-hKFxyN dJXsSm jOUuLS"
                                  ><a
                                    href="/user/0x91857afe6cd40f459aabb56491e9b5c852e66255?tab=onsale"
                                    data-marker="root/appPage/token/sidebar/main/info/details/ownerLink/nameLink"
                                    class="
                                      sc-dlnjwi sc-hKFxyN sc-dIvrsQ sc-hHEiqL
                                      dJXsSm
                                      fbQESC
                                      ptkOb
                                      clIRY
                                    "
                                    ><span
                                      data-address="0x91857afe6cd40f459aabb56491e9b5c852e66255"
                                      title="0x91857afe6cd40f459aabb56491e9b5c852e66255"
                                      class="sc-dlnjwi sc-hKFxyN dJXsSm yJIFJ"
                                      >DNZCNGZ</span
                                    ></a
                                  ></span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc-bdnxRM sc-gtsrHT sc-kMGnOH jvCTkj fDJtLj gIgWXs">
                      <div class="sc-bdnxRM sc-gtsrHT jvCTkj fDJtLj">
                        <div class="sc-bdnxRM sc-gtsrHT jvCTkj fDJtLj">
                          <span class="sc-dlnjwi sc-hKFxyN dJXsSm bHLYLH">Size</span>
                          <div class="sc-bdnxRM sc-gtsrHT jvCTkj hmMFuy">
                            <span class="sc-dlnjwi sc-hKFxyN dJXsSm cCpYEe">4000x4000px</span>
                          </div>
                        </div>
                      </div>
                      <div class="sc-bdnxRM sc-gtsrHT jvCTkj fDJtLj">
                        <div class="sc-bdnxRM sc-gtsrHT jvCTkj fDJtLj">
                          <span class="sc-dlnjwi sc-hKFxyN dJXsSm bHLYLH">Background</span>
                          <div class="sc-bdnxRM sc-gtsrHT jvCTkj hmMFuy">
                            <span class="sc-dlnjwi sc-hKFxyN dJXsSm cCpYEe">Black</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sc-bdnxRM sc-gtsrHT sc-hrlCSN jvCTkj cMRcYJ htLCcn">
          <div class="sc-bdnxRM sc-gtsrHT jvCTkj FHEoH">
            <div class="sc-bdnxRM sc-gtsrHT sc-gKAaRy jvCTkj fDJtLj hTrBNW">
              <div class="sc-bdnxRM sc-gtsrHT jvCTkj hLcxsH">
                <div class="sc-bdnxRM sc-gtsrHT jvCTkj fDJtLj">
                  <div class="sc-bdnxRM sc-gtsrHT jvCTkj hcigyn">
                    <div class="sc-bdnxRM sc-gtsrHT jvCTkj cJQiTp">
                      <button
                        class="sc-pNWdM sc-jrsJWt sc-kEqXSa XJxhY cyTDyE UJnfT sc-crzoAE dbjGIW"
                        type="button"
                        data-marker="root/appPage/token/sidebar/footer/purchaseWidget/buyButton"
                      >
                        <span class="sc-dlnjwi sc-hKFxyN dJXsSm fbQESC"
                          >Buy for
                          <span
                            title="1.09 ETH"
                            data-currency-symbol="ETH"
                            data-currency-address="0x0000000000000000000000000000000000000000"
                            data-price="1.09"
                            class="sc-dlnjwi sc-hKFxyN dJXsSm fbQESC"
                            >1.09 ETH</span
                          ></span
                        >
                      </button>
                    </div>
                    <div class="sc-bdnxRM sc-gtsrHT jvCTkj cJQiTp">
                      <button
                        class="sc-pNWdM sc-jrsJWt sc-kEqXSa XJxhY cyTDyE UJnfT sc-crzoAE lfjFGa"
                        type="button"
                        data-marker="root/appPage/token/sidebar/footer/purchaseWidget/bidButton"
                      >
                        Place a bid
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <h2>HomePage hello</h2> -->
  </div>
</template>







