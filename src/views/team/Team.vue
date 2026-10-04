<script setup lang="ts">
import { ref } from 'vue';
import Banner from '@/elements/Banner.vue';
import { IMAGES } from '@/constent/Them';
import TeamSection1 from '@/components/TeamSection1.vue';
import AboutSection2 from '@/components/AboutSection2.vue';
import GetForm from '@/components/GetForm.vue';

const TeamSectionData = ref({
    title:'Highly Qualified Team',
    description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    list:[
      {
        image:IMAGES.teamSmall1,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall2,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall3,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall4,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall5,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall1,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall2,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall3,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
    ]
})

const AboutSectionData2 = ref({
  title:'About Dr. Nashid Martines',
  description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
})
</script>
<template>
  <main class="page-content">
    <Banner :pageTitle="'Team'"/>

    <TeamSection1 :data="TeamSectionData"/>

    <AboutSection2 :data="AboutSectionData2"/>
 
    <GetForm :class="'content-inner'"/>
  </main>
</template>