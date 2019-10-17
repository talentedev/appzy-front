<template>
  <app-layout-default id="thanks" redo>
    <img src="@/Assets/thanks.png" class="mx-auto" style="width:30%;">
    <p class="text-center text-green-500 font-nahdi-bold text-xl my-4">شكرا لتفاعلك و مشاركتك</p>
    <p class="text-center text-gray-500 text-lg">لقد تم إرسال النتيجة إلى رقم جوالك كما ندعوكم لزيارة أقرب عيادة تثقيف الصحة و المتواجدة لخدمتكم مجانا بصيدلياتنا حول المملكة</p>
    <p class="text-center text-green-500 font-nahdi-bold text mt-6">شاركها مع أشخاص تهمك صحتهم</p>
    <div class="text-center mt-8">
      <img src="@/Assets/social/snapchat.png" class="inline-block mx-3" width="32px">
      <img src="@/Assets/social/twitter.png" class="inline-block mx-3" width="32px">
      <img src="@/Assets/social/whatsapp.png" class="inline-block mx-3" width="32px">
    </div>
  </app-layout-default>
</template>

<script>
import AppLayoutDefault from '@/Layouts/Default/Index.vue';

export default {
  name: 'Thanks',
  components: {
    AppLayoutDefault,
  },
}
</script>