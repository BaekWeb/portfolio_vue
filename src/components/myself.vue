<template>
  <article class="myself">
    <h2 class="title">
      My about

      <div class="open" @click="open()">
        <img src="~@/assets/images/icon/dropDown.png" alt="열기 버튼">
      </div>
    </h2>

    <div class="box">
      <p>
        저는 신입 웹 퍼블리셔 백승인 입니다. <br>
        css & JavaScript를 통해 동적으로 웹에 구현 하는 것을 좋아합니다.
      </p>
      <p>
        웹은 사용자에게 필요한 정보를 전달하는 매개체 로써,<br>
        정보를 효과적으로 전달하기 위해서는 동적요소를 적절히 사용하여 가독성을 높이고<br>
        웹 접근성을 고려하여 제작하는 것이 저의 일 입니다.
      </p>
      <p>
        신입으로써 아직은 부족한 점이 많아 저는 부족한 점을 보완하고자 오늘도 배울 것입니다.<br>
        그러다 보면 좋아하는 이 일을 잘하게 될테니까요.<br>
        솔직히 좋은 코드란 무엇인지 잘모르겠습니다.<br>
        반복되는 코드를 간소화하고 누구나 알기 쉬운 코드가 좋은 코드라는 것은 알고 있습니다.<br>
        하지만 제가 그렇게 코드를 작성하고 있는지는 아직도 고민을 해보고 있습니다.
      </p>

      <div class="close" @click="close()">
        <img src="~@/assets/images/icon/dropUp.png" alt="닫기 버튼">
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    open() {
      console.log("open");
    },
    close() {
      console.log("close");
    }
  }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";

.myself {
  max-width: 64rem;
  margin: 0 auto;

  .title {
    display: none;
  }

  .box {
    padding: 2rem 1rem;
    box-sizing: border-box;
    p {
      @include font-m;
      margin: 1rem 0;
      line-height: 2rem;
    }

    .close {
      display: none;
    }
  }
}

// mo
@include mo-lg {
  .myself {
    max-width: 64rem;
    margin: 0 auto;

    .title {
      position: relative;
      display: block;
      padding: 1rem 0;
      color: $white;
      text-align: center;
      background-color: $black;

      .open {
        @include setPosition(absolute, auto, auto, -30px, 50%, 90);
        transform: translate(-50%, 0);
        display: block;
        width: 60px;
        height: 30px;

        img {
          width: 100%;
        }
      }
    }

    .box {
      position: relative;
      padding: 1rem;

      p {
        @include font-s;
        margin: 0 0 2rem 0;
      }

      .close {
        @include setPosition(absolute, auto, auto, 0, 50%, 90);
        transform: translate(-50%, 0);
        display: block;
        width: 60px;
        height: 30px;

        img {
          width: 100%;
        }
      }
    }
  }
} 

</style>