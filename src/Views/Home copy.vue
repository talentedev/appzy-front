<template>
  <div id="home" class="text-center">
    <img src="@/Assets/header.png" alt="" class="w-full object-cover">
    <p class="text-gray-600 text-xl p-4">
      التمتع بصحة جيدة تعتمد على عوامل كثيرة و التي تتطلب منا أن نوازنها بطريقة تناسب حياتنا و اسلوبها، كمكونات الأكل ز معدل شرب المياه و التعرض للشمس و غيرها و التي بدورها موازنتها فإنها تأثر على صحتنا بشكل عام تركيز تفكيرنا و تقوية مناعتنا.
    </p>
    <p class="text-gray-600 text-xl font-bold p-4 mb-2">
      تعرف على المكملات التي تحتاجها
    </p>
    <router-link class="bg-green-500 py-3 px-12 rounded-full shadow text-white font-bold text-xl outline-none hover:shadow-outline focus:shadow-outline hover:bg-green-600 focus:bg-green-700 border-4 border-white" :to="{name: 'personal-information'}">
      ابدأ من هنا
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>