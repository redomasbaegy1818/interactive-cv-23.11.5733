<script setup>
import SectionTitle from './SectionTitle.vue';
</script>
<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">

      <SectionTitle title="Hubungi Saya" />
      <div class="mb-12 flex items-center flex-col">
        <p class="text-xl text-gray-300 mb-8">Jangan ragu untuk terhubung
          atau bertanya.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.749159196284!2d110.40321127492012!3d-7.8104024922100574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57b7c622b0b1%3A0x858399ff0a252779!2sRumah%20Risol%20Risol!5e1!3m2!1sen!2sid!4v1752482963689!5m2!1sen!2sid" width="500" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <a href="https://wa.me/087654543213" class="text-sm text-gray-300 mt-10 mb-8 d-block">0876-5454-3213</a>
      </div>

      <a href="mailto:redomasbaegy1818@example.com" class="bg-blue-600 text-
white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-
colors duration-300 inline-block mb-12">

        Kirim Email
      </a>
      <div class="flex justify-center space-x-6 mb-8">

        <a href="https://github.com/redomasbaegy1818" target="_blank" class="text-gray-400 hover:text-
white transition-colors duration-300">GitHub</a>

        <a href="#" target="_blank" class="text-gray-400 hover:text-
white transition-colors duration-300">LinkedIn</a>

      </div>
      <p class="text-gray-500">&copy; {{ new Date().getFullYear() }}
        Redomas </p>
    </div>
  </footer>
</template>
