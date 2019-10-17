<template>
  <app-layout name="Plain">
    <div class="px-8 py-2">
      <img src="@/Assets/NahdiLogo.png" class="mx-auto my-8">
      <div class="absolute top-auto w-auto" style="left: 1.5rem; right: 1.5rem;">
        <img src="@/Assets/header.jpg" class="w-full" ref="image" style="    border-radius: 21px;
    width: 96%;
    margin: 0px auto;">
        <div class="bg-white shadow rounded-lg mx-6 p-2 mb-8 -mt-6">
          <p class="px-1 py-8 text-center text-gray-500">
التمتع بصحة جيدة تعتمد على عوامل كثيرة و التي تتطلب منا أن نوازنها بطريقة تناسب حياتنا و اسلوبها، كمكونات الأكل ومعدل شرب المياه و التعرض للشمس و غيرها التي تؤثر على صحتنا بشكل عام .
          </p>
          <p class="text-gray-500 text-center font-nahdi-bold text-md">
            تعرف على المكملات التي تحتاجها
            <router-link class="bg-green-500 w-3/5 mx-auto py-4 rounded-lg block m-4 text-white text-xl hover:bg-green-300 focus:bg-green-300 focus:outline-none focus:shadow-outline" :to="{ name: 'personal-information' }">ابدأ هنا</router-link>
          </p>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
export default {
  name: 'Home',
}
</script>