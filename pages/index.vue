<template>
  <div>
    <div class="container container-banner"></div>
      <section class="container container-overview">
        <span class="title">OVER DE SHOW</span>
        <span class="text">
        Boys won't be boys van Rikkert Huisstede is een maatschappelijke beweging en theatervoorstelling die een diverse groep jongens en mannen samenbrengt.
        Een collage van dansers, zangers, rappers, dichters en theatermakers laat zien dat het stoer is om je als man kwetsbaar op te stellen.
        Ze vertellen hun persoonlijke verhaal en vinden elkaar in het doorbreken van stereotypen. 
        <br>
        <br>
        We hebben lieve jongens nodig. Jongens die niet aan het mannelijkheidsideaal voldoen, denken vaak dat ze iets fout doen. Ze denken dat ze mannelijker zouden moeten zijn.
        Maar in tijden van #metoo, homofobie, seksisme, racisme en geweld zijn zij misschien juist een oplossing? Onze wereld heeft behoefte aan liefde van mannen.
        Wij kunnen laten zien dat het anders kan door hokjes te doorbreken en ruimte te maken om onszelf te zijn.
        </span>
      </section>
      <section class="container container-agenda">
        <span class="title">SPEELLIJST</span>
        <agenda/>
      </section>
  </div>
</template>

<script>
import Agenda from '~/components/Agenda.vue'

export default {
  components: {
    Agenda
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 100;
  padding: 2rem 1rem 2rem 1rem;
  color: #605E5E;
}

.container-banner {
  background-image: url('~assets/banner.jpg');
  width: 100vw;
  height: calc(100vh - 50px);
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

.container-overview {
  background-color: #EDEDE4;
  color: #605E5E;
}

.container-agenda {
  background-color: #FAFAFA;
}

.title {
  font-size: 24px;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1;
}

.text {
  font-size: 18px;
  max-width: 900px;
}
</style>
