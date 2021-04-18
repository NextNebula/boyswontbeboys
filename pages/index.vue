<template>
  <div>
    <StickyHeader />
    <img class="image-banner" src="banner.jpg" />
    <div id="arrow-up" class="arrow bounce"></div>
    <section id="agenda" class="container container-agenda">
      <Agenda />
    </section>
    <section id="overview" class="container container-overview">
      <div class="title">WERVELENDE THEATERHAPPENING MET ECHTE MENSEN</div>
      <div class="text">
        BOYS WON’T BE BOYS is een wervelende collage van jongens en mannen*. Ze zingen, dansen, dichten, grappen, rappen of vertellen in wisselende samenstelling over hun persoonlijke levens. Want het is stoer om je (als man) kwetsbaar op te stellen. Mannelijkheid is iets waar iedereen dagelijks mee te maken heeft. Homo, hetero, man, vrouw of anders, iedereen verhoudt zich tot wat er van mannen (en vrouwen) wordt verwacht. Het is daarom gek dat nadenken over ‘gender’ wordt gezien als iets voor gemarginaliseerde groepen. Is het niet juist succesvol om als man je mannelijkheid te bevragen?
        <br />
        <br />Of je nou hetero of homo, a-seksueel of bi-seksueel, bouwplaatsmanager of musicalster, intersekse of transgender, jonge vader of dragqueen bent, niemand past precies in het hokje “man”. De spelers van BOYS WON’T BE BOYS weten inmiddels hoe bevrijdend het is om je open te stellen. Door al die verschillende verhalen doorbreken we vooroordelen en stereotypen en komen we dichter bij elkaar.
        <br />
        <br />
        <i>* waar wij de termen mannen/jongens gebruiken bedoelen we een breed scala aan mensen.</i>
      </div>
      <div class="photo-slider">
        <vueper-slides fade :slide-ratio="2 / 4">
          <vueper-slide v-for="(slide, i) in slides" :key="i" content="foto door Bas de Brouwer">
            <template v-slot:content>
              <picture>
                <source :srcSet="require(`~/assets/${slide.image}?webp`)" type="image/webp" />
                <source :srcSet="require(`~/assets/${slide.image}`)" type="image/jpeg" />
                <img :src="require(`~/assets/${slide.image}`)" loading="lazy" />
              </picture>
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
      <iframe class="youtube" src="https://www.youtube.com/embed/hqKh1DtqKwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
    <div class="container container-split container-first">
      <section id="call" class="container-half container-bel">
        <div class="title">BEL ONS</div>
        <div class="text">
          We hebben een telefoonnummer:
          <a href="tel:0642280481">06 42 28 04 81</a>.
          <br />Je kunt het 24/7
          bellen voor inspiratie, informatie en voorproefjes van de
          maatschappelijke beweging en theatervoorstelling.
        </div>
        <div class="lijst">
          <ul>
            <li>doe een telefonische workshop zelfliefde (2 minuten)</li>
            <li>beluister een opwindend gedicht van Simone van Saarloos</li>
            <li>hoor een lied van Rikkert van Huisstede</li>
            <li>laat Barry de Bruin je voorlezen</li>
            <li>en heel veel meer!</li>
          </ul>
        </div>
        <div class="text">
          Eigenlijk is het telefoonnummer de voorstelling, maar dan in het
          klein! Probeer het zelf maar eens uit. Deze audiobeleving is gemaakt
          door Allard Medema.
        </div>
      </section>
      <section id="education" class="container-half container-educatie">
        <div class="title">EDUCATIE</div>
        <div>
          Bij de voorstelling bieden wij ook een op maat gemaakt educatie programma. We doen inleidingen en nagesprekken rondom de voorstelling, komen op school voor een workshop, maken in één dag een eigen versie van de voorstelling met leerlingen of spelen de voorstelling op school. De voorstelling en het educatieve programma sluiten goed aan bij de vakken CKV, maatschappijleer, filosofie en mentoruren. We gaan graag in gesprek om de wensen en mogelijkheden te onderzoeken. Neem een kijkje in ons educatieaanbod of neem contact op met Rikkert via educatie@zoujijhetzijn.nl.
        </div>
      </section>
    </div>
    <section id="team" class="container container-team">
      <div class="title">SPELERS</div>
      <div class="team">
        <template v-for="(artist, indexArtist) in artists">
          <div class="person" v-bind:key="indexArtist">
            <picture>
              <source :srcSet="require(`~/assets/${artist.picture}?webp`)" type="image/webp" />
              <source :srcSet="require(`~/assets/${artist.picture}`)" type="image/jpeg" />
              <img :src="require(`~/assets/${artist.picture}`)" loading="lazy" />
            </picture>
            <div>{{artist.name}}</div>
          </div>
        </template>
      </div>
      <div class="title">ORGANISATIE</div>
      <div class="crew">
        <template v-for="(crewPerson, crewIndex) in crew">
          <div class="person" v-bind:key="crewIndex">
            <picture>
              <source :srcSet="require(`~/assets/${crewPerson.picture}?webp`)" type="image/webp" />
              <source :srcSet="require(`~/assets/${crewPerson.picture}`)" type="image/jpeg" />
              <img :src="require(`~/assets/${crewPerson.picture}`)" lloading="lazy" />
            </picture>
            <div>
              <span>{{crewPerson.name}}</span>
              <br />
              <span>({{crewPerson.role}})</span>
            </div>
          </div>
        </template>
      </div>
    </section>
    <section id="contact" class="container container-contact">
      <div class="title">CONTACT</div>Wil je meer weten over BOYS WON'T BE BOYS? Of een interview inplannen?
      Dat kan allemaal.
      <br />
      <div class="lijst">
        <ul>
          <li>Productioneel: productie@zoujijhetzijn.nl</li>
          <li>Over de spelers: rikkert@zoujijhetzijn.nl</li>
          <li>Zakelijk: benjamin@zoujijhetzijn.nl</li>
          <li>Publiciteit en pers: info@wildchildagency.nl / 020-2386079</li>
          <li>
            <a href="/Stichting-ZOU-JIJ-HET-ZIJN.pdf" target="_blank">ANBI informatie</a>
            en
            <a href="/Jaarrekening 2019.pdf" target="_blank">Jaarrekening</a>
             Stichting ZOU JIJ HET ZIJN
          </li>
        </ul>
      </div>
      <div class="social">
        <div>
          <b>Volg ons op</b>
        </div>
        <a href="https://www.facebook.com/boyswontbeboys/" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook-square']" style="font-size: 35px" />
        </a>
        <a
          href="https://www.instagram.com/boyswntbeboys/"
          target="_blank"
          style="margin-left: 0.25rem;"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" style="font-size: 35px" />
        </a>
      </div>
      <div class="credits">
        Vormgeving: BUROBRAAK.
        <br />Fotografie: Ernst Coppejans (publiciteitsbeeld en blauwe portretten), Bas de Brouwer (scènefoto’s).
        <br />Overige fotografie: o.a. Klemens Patijn.
      </div>
    </section>
    <section class="container container-foundations">
      <div class="title">BOYS WON'T BE BOYS BEDANKT</div>
      <div class="foundations">
        <img class="credit-logo" src="/fondspodiumkunsten.png" />
        <img class="credit-logo" src="/vsbfonds.png" />
        <img class="credit-logo" src="/bankgiro.png" />
        <img class="credit-logo" src="/prinsbernhardcultuurfonds.png" />
        <img class="credit-logo" src="/vdef.png" />
        <img class="credit-logo" src="/fonds21.png" />
        <img class="credit-logo" src="/janvino.png" />
        <img class="credit-logo" src="/kickstartcultuurfonds.png" />
        <img class="credit-logo" src="/dno.png" />
        <img class="credit-logo" src="/vriendenvantheater.png" />
        <img class="credit-logo" src="/kunstraadgroningen.png" />
        <img class="credit-logo" src="/kobra.png" />
      </div>
    </section>
  </div>
</template>

<script>
import Agenda from "~/components/Agenda.vue";
import ArtistsJson from "~/pages/artists.json";
import CrewJson from "~/pages/crew.json";
import StickyHeader from "~/components/Header.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: {
    Agenda,
    StickyHeader,
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      artists: ArtistsJson,
      crew: CrewJson,
      slides: [
        {
          image: "slide1.jpg",
        },
        {
          image: "slide2.jpg",
        },
        {
          image: "slide3.jpg",
        },
        {
          image: "slide4.jpg",
        },
        {
          image: "slide5.jpg",
        },
        {
          image: "slide6.jpg",
        },
        {
          image: "slide7.jpg",
        },
        {
          image: "slide8.jpg",
        },
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.setYouTubeAspectRatio);
  },
  mounted() {
    this.setYouTubeAspectRatio();
  },
  destroyed() {
    window.removeEventListener("resize", this.setYouTubeAspectRatio);
  },
  methods: {
    setYouTubeAspectRatio(e) {
      const videos = document.getElementsByClassName("youtube");
      videos.forEach(v => {
        const height = Math.floor((v.offsetWidth * 9) / 16);
        console.log(height);
        v.style.height = `${height}px`;
      })
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

.image-banner {
  position: relative;
  width: 100vw;
  margin-bottom: -6px;
  z-index: -1;
}

.container {
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 100;
  padding: 2rem 1rem 2rem 1rem;
}

.container-split {
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  position: relative;
}

.container-half {
  width: 50%;
  float: right;
  padding: 2rem 1rem 2rem 1rem;
}

.container-first {
  background-color: #7ad4d4;
}

.container-second {
  background-color: #caeeee;
}

.container-agenda {
  background-color: #7ad4d4;
  border-top: 3px solid white;
}

.container-overview {
  background-color: #caeeee;
  border-top: 3px solid white;
}

.container-educatie {
  background-color: #7ad4d4;
  border-left: 3px solid white;
}

.container-team {
  background-color: #caeeee;
}

.container-bel {
  background-color: #7ad4d4;
  border-right: 3px solid white;
  margin-right: -3px;
}

.container-contact {
  background-color: #7ad4d4;
  border-top: 3px solid white;
}

.container-foundations {
  background-color: #caeeee;
  border-top: 3px solid white;
  border-bottom: 3px solid white;
}

.foundations {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -1rem;
}

.team,
.crew {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: -5px;
}

.team {
  margin-bottom: 1rem;
}

.person {
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  width: 190px;
  min-width: 190px;
  position: relative;
  border: 2px solid white;
  z-index: 2;
}

.person img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 0%;
}

.person div {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: white;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  padding: 3px 0 3px 0;
}

.youtube {
  width: 100%;
  max-width: 750px;
  margin-top: 2rem;
}

.photo-slider {
  margin-top: 2rem;
  width: 100%;
  max-width: 750px;
}

.container-overview .vueperslides__bullet .default {
  border-color: #fff;
}

.container-overview .vueperslide__content {
  color: white;
  font-size: 12px;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}

.vueperslide img {
  width: 100%;
}

.credits {
  margin-top: 1rem;
}

.title {
  font-size: 30px;
  margin-bottom: 1rem;
  font-weight: 800;
  line-height: 1;
}

.text {
  max-width: 1000px;
}

.lijst {
  display: inline-block;
  text-align: left;
  margin: 1rem auto 1rem auto;
}

.arrow {
  z-index: 1;
  position: fixed;
  bottom: 1rem;
  right: calc(50% - 30px);
  width: 60px;
  height: 60px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MTIiIGlkPSJzdmcyIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzIGlkPSJkZWZzNCIvPjxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTU0MC4zNjIyKSI+PHBhdGggZD0ibSAxMjcuNDA2MjUsNjU3Ljc4MTI1IGMgLTQuOTg1MywwLjA3ODQgLTkuOTEwNzcsMi4xNjMwOCAtMTMuNDM3NSw1LjY4NzUgbCAtNTUsNTUgYyAtMy42MDA1NjUsMy41OTkyNyAtNS42OTY4ODMsOC42NTg5NSAtNS42OTY4ODMsMTMuNzUgMCw1LjA5MTA1IDIuMDk2MzE4LDEwLjE1MDczIDUuNjk2ODgzLDEzLjc1IEwgMjQyLjI1LDkyOS4yNSBjIDMuNTk5MjcsMy42MDA1NiA4LjY1ODk1LDUuNjk2ODggMTMuNzUsNS42OTY4OCA1LjA5MTA1LDAgMTAuMTUwNzMsLTIuMDk2MzIgMTMuNzUsLTUuNjk2ODggTCA0NTMuMDMxMjUsNzQ1Ljk2ODc1IGMgMy42MDA1NiwtMy41OTkyNyA1LjY5Njg4LC04LjY1ODk1IDUuNjk2ODgsLTEzLjc1IDAsLTUuMDkxMDUgLTIuMDk2MzIsLTEwLjE1MDczIC01LjY5Njg4LC0xMy43NSBsIC01NSwtNTUgYyAtMy41OTgxNSwtMy41OTEyNyAtOC42NTA2OCwtNS42ODEyNyAtMTMuNzM0MzgsLTUuNjgxMjcgLTUuMDgzNjksMCAtMTAuMTM2MjIsMi4wOSAtMTMuNzM0MzcsNS42ODEyNyBMIDI1Niw3NzguMDMxMjUgMTQxLjQzNzUsNjYzLjQ2ODc1IGMgLTMuNjY2NzgsLTMuNjY0MjMgLTguODQ4MDEsLTUuNzY0NDIgLTE0LjAzMTI1LC01LjY4NzUgeiIgaWQ9InBhdGgzNzY2LTEiIHN0eWxlPSJmb250LXNpemU6bWVkaXVtO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO2xpbmUtaGVpZ2h0Om5vcm1hbDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2RpcmVjdGlvbjpsdHI7YmxvY2stcHJvZ3Jlc3Npb246dGI7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO2NvbG9yOiNmZmZmZmY7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDozOC44ODAwMDEwNzttYXJrZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlO2ZvbnQtZmFtaWx5OlNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpTYW5zIi8+PC9nPjwvc3ZnPg==);
  background-size: contain;
  animation: bounce 2s infinite;
  margin-left: auto;
  margin-right: auto;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
}

.arrow svg {
  color: #ffffff !important;
  fill: #ffffff !important;
}

.credit-logo {
  max-width: 170px;
  max-height: 80px;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
  min-height: 40px;
  object-fit: contain;
  vertical-align: middle;
}

@media only screen and (max-width: 950px) {
  .container-split {
    flex-direction: column;
  }

  .container-half {
    width: 100%;
  }

  .container-educatie {
    border-left: none;
    background-color: #7ad4d4;
  }

  .container-bel {
    border-right: none;
    border-bottom: 3px solid white;
    background-color: #7ad4d4;
  }

  .container-educatie {
    background-color: #caeeee;
  }

  .container-team {
    background-color: #7ad4d4;
  }

  .container-contact {
    background-color: #caeeee;
  }

  .container-foundations {
    background-color: #7ad4d4;
  }

  .vueperslides--fixed-height.vueperslides--bullets-outside {
    margin-bottom: 2em;
  }

  .team,
  .crew {
    flex-wrap: nowrap;
    justify-content: left;
    overflow-x: scroll;
    width: 100vw;
  }

  .team .person:first-child,
  .crew .person:first-child {
    margin-left: 0.5rem;
  }
}

@media only screen and (max-width: 540px) {
  .credit-logo {
    max-width: 130px;
    max-height: 60px;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
