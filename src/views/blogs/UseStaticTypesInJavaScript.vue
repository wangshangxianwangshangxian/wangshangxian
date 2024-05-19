<template>
  <div class="content-block" v-chapter>
    <p class="w--heading-1">静态类型是JavaScript的负担吗？</p>
    <p class="w--heading-3">我的TypeScript实践之路</p>
    <p>我刚入行时是做h5游戏的，使用TypeScript开发，各种 interface 到处飞，，，</p>
    <QupteBlock>
      h5游戏也是web开发的一个方向，只不过游戏和网站在框架使用和设计思想上都相差甚远，可以认为是两个行业。
    </QupteBlock>
    <p>
      后来跳到了web开发这个圈子，接触到了Vue2-TS，才渐渐发现TypeScript的局限性---它与html的结合并不好，也因为这个，成员对于TS很抵触，基本上都是any一把梭。
    </p>
    <p>
      TypeScript本身只是针对JavaScript的类型检测，它管不到html部分。这是界限问题，是TypeScript无论如何都无法突破的范围。
    </p>
    <p>
      直到接触了React，一切皆为组件。这个思想让我感到兴奋，一言不合就写个 function 爽一把。
      React可以说几乎是用纯JavaScript来表达需求，将数据、逻辑和UI都在一个function里实现它。
      这简直是TypeScript的天堂！
    </p>
    <p>
      再到后来尝试了Vue3的组合式编程，终于把我多年前的想法实现了---我的房间为什么不能同时拥有冰箱、冲凉房、电视哇，而是非得跑到厨房、跑到浴室、跑到客厅去。
    </p>
    <p>
      Vue3源码确实是用TypeScript重写的，但仅仅是代码部分，即使是 transition
      组件，也是通过JSX，或者叫TSX来写的。难道尤大大通过单文件组件的方式来实现
      transition，体验就会更好吗？ 我想如果使用这种方式来开发，体验应该和我们正常开发是差不多的。
    </p>
    <p class="w--heading-3">使用静态类型是一种负担吗？</p>
    <p>
      有意思的是，工作上遇到的所有项目，无一例外使用了TypeScript，无论他是React项目、Vue项目还是h5项目。
      而我个人的项目，又无一例外地全都使用了JavaScript。
    </p>
    <p>
      我想我还是更喜欢JavaScript，我喜欢她的自由和灵活。和极客精神有点类似---因为自由所以创造，因为灵活所以猎奇。
    </p>
    <p>
      但实际上我也很少会把一个 string 类型的变量当成 number来用，因为我清楚知道这个变量的职责。所以，我爱的是js的灵魂和意志，而非语法和特性带来的，不滥用类型转换，这更多的是职业素养。
    </p>
    <p>
      而TypeScript呢，它的类型检测就是一个负担吗？诚然，它与html的结合体验并不好，它编译出来的包体积又大，
      它还像大人一样时刻管教着你的言行，但它就是个大人，大人是什么，是家庭责任，是社会担当，他不能再考虑一人吃饱全家不饿的事情，他需要与社会连接，与人交互。
      所以当我把它当作一个大人来看待，就很好理解在多人协作上它具备的优势：类型声明、同一份约定。
    </p>
  </div>
</template>

<script setup>
import QupteBlock from '@/components/QupteBlock.vue'
</script>

<style scoped>
.content-block {
  display: flex;
  gap: 16rem;
  flex-direction: column;
}
</style>