<style src="./HomePage.scss" module lang="scss"></style>
<script src="./DescriptionBottom.ts" module lang="ts"></script>

<template>
  <div class="descriptionBottomBtn descriptionBottomBg">
    <div class="descriptionBottomPadding">
      <div class="displayFlex">
        <div class="descriptionBottom">
          <div class="displayFlex">
            <div class="descriptionBottomFlex">
              <div class="creatorSecMargin">
                <button
                  class="
                    descriptionDetailsTextBtnStyle
                    descriptionBottomBtnStyle
                    descriptionBottomBuyBtn
                  "
                  type="button"
                  data-marker="root/appPage/token/sidebar/footer/purchaseWidget/buyButton"
                >
                  <span class="paragraphStyle"
                    >Buy for
                    <span
                      title="1.09 ETH"
                      data-currency-symbol="ETH"
                      data-currency-address="0x0000000000000000000000000000000000000000"
                      data-price="1.09"
                      class="paragraphStyle"
                      >1.09 ETH</span
                    ></span
                  >
                </button>
              </div>
              <div class="creatorSecMargin">
                <button
                  class="
                    descriptionDetailsTextBtnStyle
                    descriptionBottomBtnStyle
                    descriptionBottomPlaceBtn
                  "
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
</template>