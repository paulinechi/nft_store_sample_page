<style src="./HomePage.scss" module lang="scss"></style>
<script src="./DescriptionHeader.ts" module lang="ts"></script>

<template>
  <div class="descriptionHeader">
    <div data-marker="root/appPage/token/sidebar/header" class="displayFlex">
      <div class="descriptionHeaderTitle">
        <div class="descriptionHeaderFlex">
          <h1 class="descriptionDetailsTitle textBreakWord">#14 - Neon Drop</h1>
        </div>
        <div class="descriptionDetailsTitleLikes">
          <button
            class="descriptionDetailsTextBtnStyle generalBtnStyle gtFsLw fdJCKr"
            type="button"
          >
            <div class="bWbxPx">
              <svg
                viewBox="0 0 17 16"
                fill="none"
                width="15"
                height="15"
                xlmns="http://www.w3.org/2000/svg"
                class="lmSvld"
                style="margin-right: 8px"
              >
                <path
                  d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                  stroke="rgba(4, 4, 5, 1)"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <span data-value="60" class="descriptionDetailsTitle">60</span>
          </button>

          <div>
            <b-dropdown
              id="dropdown-1"
              text="..."
              class="m-md-1"
              no-caret
              toggle-class="rounded-circle bold"
            >
              <b-dropdown-item class="dropDownItem">New bid</b-dropdown-item>
              <b-dropdown-item>Purchase now</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>View on OpenSea</b-dropdown-item>
              <b-dropdown-item>Share</b-dropdown-item>
              <b-dropdown-item>Report</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
      <div class="descriptionTextBoxPadding">
        <span class="descriptionSaleTextStyle hFBxwb"
          >On sale for
          <span class="linkFontColor"
            ><span
              title="1.09 ETH"
              data-currency-symbol="ETH"
              data-currency-address="0x0000000000000000000000000000000000000000"
              data-price="1.09"
              class="paragraphStyle linkForETHPrice"
              >1.09 ETH</span
            ></span
          ></span
        >
      </div>
    </div>
  </div>
</template>