<template>
  <div class="content-block" v-chapter>
    <p class="w--heading-1">聊聊 React 和 Vue的哲学</p>
    <p>
      前端的模块化演变历史，从最早的文件分离：html、css、js文件分离，到自执行函数挂载全局变量（JQuery），后来的CMD、AMD和ES6实现import标准。
    </p>
    <p class="w--heading-3">React，函数式编程，一切皆为组件</p>
    <p>
      React的所有模块都是以
      function为维度的，一切都可以用函数来表示一个模块，这样的思想使得它非常适合函数式编程。
    </p>
    <CodeBlock>
      <pre>function comp() {</pre>
      <pre>  const count = 0</pre>
      <pre>  const onAddClick = () => {</pre>
      <pre>    count++</pre>
      <pre>  }</pre>
      <pre></pre>
      <pre>  return &lt;button onClick={onAddClick}&gt;click&lt;/button&gt;</pre>
      <pre>}</pre>
    </CodeBlock>
    <QupteBlock>
      函数式编程：是一个纯函数，具有不可变性。将一个功能不断地拆分直至能够将用简单的语句表达一个动作，最终使用组合的方式将这些动作串联起来实现一个完整的功能。
    </QupteBlock>
    <P><b>函数式编程是时代发展的产物，但同时也是一个理想国。</b></P>
    <p>
      函数式编程有点类似夸克，它是组成万事万物的基本单元，这样的好处是解耦程度非常高，我只要通过组合的方式就能构建一个完整的组件or功能
      但它带来的性能问题是不可忽视的，由于它超低低耦合度，可能会导致一个简单的计算功能变得复杂，比如针对一个纯数字数组，留下偶数并乘以2，好在计算机的发展非常迅速，硬件的提升拔高了软件的性能瓶颈，如今的家用电脑也能轻轻松松实现诸如《英雄联盟》这样的游戏。
    </p>
    <p>
      但它也是一个理想国，函数式编程并不能满足业务要求，在处理一些需要大量状态变更和副作用的场景时并不能很好的匹配。但在处理数据聚合，过滤，转换等远离业务的操作时能够提供能加简洁，清晰和健壮的方案。
    </p>
    <p>
      总的来说，一切皆为组件的想法是没有问题的，但想要实现纯函数式编程方案，或许只能是在单纯的乌托邦中。
    </p>
    <p class="w--heading-3">Vue3 组合式编程注重逻辑分离，像玩乐高</p>
    <p>
      解耦是代码工程一直在研究的事情，直到Vue2单文件组件的出现打破了这样的解耦方式，尤大并不忌讳把html、css和js放在一个文件处理。他认为一个组件本身就是由不同的模块拼接而成的，
      如数据、方法、样式和标签，所以它们本就是一个整体，以组件的维度来定义耦合的标准。
    </p>
    <CodeBlock>
      <pre>export default {</pre>
      <pre>  data() {</pre>
      <pre>    return {</pre>
      <pre>      count: 0</pre>
      <pre>    }</pre>
      <pre>  },</pre>
      <pre></pre>
      <pre>  methods: {</pre>
      <pre>    onAddClick() {</pre>
      <pre>      this.count++</pre>
      <pre>    }</pre>
      <pre>  }</pre>
      <pre>}</pre>
    </CodeBlock>
    <p>
      到了Vue3，基于单文件组件的解耦得到了进一步提升，组合式api的出现让组件内部的逻辑分离更加分明，相关的功能写在一起，让代码阅读和代码调试工作更轻松
    </p>
    <CodeBlock>
      <pre>const count = ref(0)</pre>
      <pre>const onAddClick = () => {</pre>
      <pre>  count.value++</pre>
      <pre>}</pre>
    </CodeBlock>
    <p>
      这写起来真是太舒服了，我以前使用Vue2的时候就在想如果一个单文件组件很大，数据放在data里，方法放在methods里，调试的时候跳来跳去岂不是累死个人？
      现在有了组合式api，以功能为维度规划逻辑分类，将它用到的相关api都绑定到一起。
    </p>
    <p>
      Vue3组合式编程现在就更像一家企业，企业开设许多部门，data部门，props部门、computed部门等等，而企业底下有许多项目，每个项目又会配置不同的职位及其人员，
      比如从data部门抽几个出来，methods部门里抽几个出来组成一个项目，专门实现某个需求。
    </p>
  </div>
</template>

<script setup>
import CodeBlock from '@/components/CodeBlock.vue'
import QupteBlock from '@/components/QupteBlock.vue'
</script>

<style scoped>
.content-block {
  display: flex;
  gap: 16rem;
  flex-direction: column;
}
</style>