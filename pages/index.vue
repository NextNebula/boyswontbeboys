<template>
  <div>
    <img id="top-banner" class="image-banner" src="/banner.jpg" />
    <div id="arrow-up" class="arrow bounce"></div>
    <section id="container-agenda" class="container container-agenda">
      <div class="title">SPEELLIJST</div>
      <agenda />
    </section>
    <section class="container container-overview">
      <div class="title">OVER DE SHOW</div>
      <div class="text">
        BOYS WON'T BE BOYS van Rikkert van Huisstede is een maatschappelijke
        beweging en theatervoorstelling die een diverse groep jongens en mannen*
        samenbrengt. Een collage van dansers, zangers, rappers, dichters en
        theatermakers laat zien dat het stoer is om je (als man) kwetsbaar op te
        stellen. Ze vertellen hun persoonlijke verhaal en vinden elkaar in het
        doorbreken van stereotypen.
        <br />
        <br />We hebben lieve jongens nodig. Jongens die niet aan het
        mannelijkheidsideaal voldoen, denken vaak dat ze iets fout doen. Ze
        denken dat ze mannelijker zouden moeten zijn. Maar in tijden van #metoo,
        homofobie, seksisme, racisme en geweld zijn zij misschien juist een
        oplossing? Onze wereld heeft behoefte aan liefde van mannen*. Wij kunnen
        laten zien dat het anders kan door hokjes te doorbreken en ruimte te
        maken om onszelf te zijn.
        <br />
        <br />
        <i>
          * waar wij de termen mannen/jongens gebruiken bedoelen we een breed
          scala aan mensen.
        </i>
      </div>
    </section>
    <section class="container container-media">
      <div class="title" style="padding-bottom: 6px;">IN DE MEDIA</div>
      <div class="quote">
        <i>
          "Herkenbaar, eigentijds, prikkelend, en eerlijk. [...] Een goede
          mix van sterke performers."
        </i>
        <br />Jury Amsterdam Fringe Festival 2018
      </div>
      <div class="quote">
        <i>
          "Alles bij elkaar is het een enorm project dat met veel liefde is
          vormgegeven."
        </i>
        <br />Theaterkrant
        <a
          href="https://www.theaterkrant.nl/recensie/boys-wont-be-boys/rikkert-van-huisstede/"
          target="_blank"
        >[Lees meer]</a>
      </div>
      <div class="quote">
        Interview met regisseur Rikkert van Huisstede
        <br />
        <i>
          "De bezoeker is een beetje verliefd geworden op de jonge
          theatermaker. Rikkert zingt, dicht, praat en lacht op betoverende
          wijze over liefde, gender en seksualiteit."
        </i>
        <br />Gaykrant
        <a
          href="https://www.degaykrant.nl/2018/08/22/waarom-ook-mannen-jurken-mogen-dragen/"
          target="_blank"
        >[Lees meer]</a>
      </div>
    </section>
    <div class="container container-team">
      <div class="title">SPELERS</div>
      <div class="team">
        <template v-for="(artist, indexArtist) in artists">
          <div class="person" v-bind:key="indexArtist">
            <img :src="`/${artist.picture}`" />
            <div>{{artist.name}}</div>
          </div>
        </template>
      </div>
      <div class="title">ORGANISATIE</div>
      <div class="crew">
        <template v-for="(crewPerson, crewIndex) in crew">
          <div class="person" v-bind:key="crewIndex">
            <img :src="`/${crewPerson.picture}`" />
            <div>
              <span>{{crewPerson.name}}</span>
              <br />
              <span>({{crewPerson.role}})</span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="container container-split container-first">
      <section class="container-half container-bel">
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
      <section class="container-half container-contact">
        <div class="title">CONTACT</div>Wil je meer weten over BOYS WON'T BE BOYS? Of een interview inplannen?
        Dat kan allemaal. Het beeldmerk, portretten van (een aantal) spelers en
        de promotionele teksten zijn hieronder te vinden.
        <br />
        <div class="lijst">
          <ul>
            <li>
              <a href="http://bit.ly/BOYSWONTBEBOYS" target="_blank">Download onze perskit</a>
            </li>
            <li>info@wildchildagency.nl</li>
            <li>productie@zoujijhetzijn.nl</li>
            <li>rikkert@zoujijhetzijn.nl</li>
            <li>
              <a
                href="/Stichting-ZOU-JIJ-HET-ZIJN.pdf"
                target="_blank"
              >ANBI informatie Stichting ZOU JIJ HET ZIJN</a>
            </li>
          </ul>
        </div>
        <div class="social">
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
          Vormgever
          <a href="https://www.burobraak.nl" target="_blank">BUROBRAAK</a>.
          Fotograaf
          <a
            href="https://www.ernstcoppejans.com"
            target="_blank"
          >Ernst Coppejans</a>.
        </div>
        <div class="foundations">BOYS WON'T BE BOYS BEDANKT</div>
        <img class="creditLogo vsbfonds" src="~/assets/vsbfonds.png" />
        <img class="creditLogo vdef" src="~/assets/vdef.svg" />
        <img class="creditLogo afk" src="~/assets/afk.png" />
        <img class="creditLogo amerborgh" src="~/assets/amerborgh.svg" />
        <img class="creditLogo burobraak" src="~/assets/burobraak.png" />
      </section>
    </div>
    <img class="image-banner image-banner-bottom" src="/banner.jpg" />
  </div>
</template>

<script>
import Agenda from "~/components/Agenda.vue";
import ArtistsJson from "~/pages/artists.json";
import CrewJson from "~/pages/crew.json";

export default {
  components: {
    Agenda,
  },
  data() {
    return {
      artists: ArtistsJson,
      crew: CrewJson,
    };
  },
};
</script>

<style>
.image-banner {
  position: relative;
  width: 100vw;
  margin-bottom: -6px;
  z-index: -1;
}

.image-banner-bottom {
  z-index: 2;
}

.image-banner-paralex {
  position: fixed;
  top: 0;
}

.image-banner-paralex-big {
  position: fixed;
  bottom: 0;
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

.container-media {
  background-color: #7ad4d4;
  border-top: 3px solid white;
}

.container-team {
  background-color: #caeeee;
  border-top: 3px solid white;
}

.container-bel {
  background-color: #7ad4d4;
  border-right: 3px solid white;
  margin-right: -3px;
}

.container-contact {
  background-color: #7ad4d4;
  border-left: 3px solid white;
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
  margin: 5px;
  width: 190px;
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

.quote {
  margin-bottom: 2rem;
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

.foundations {
  margin-top: 1rem;
  font-weight: 700;
  line-height: 1;
}

.creditLogo {
  width: 170px;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  min-height: 40px;
  object-fit: contain;
  vertical-align: middle;
}

@media only screen and (max-width: 768px) {
  .container-split {
    flex-direction: column;
  }

  .container-half {
    width: 100%;
  }

  .container-media {
    border-left: none;
    background-color: #caeeee;
  }

  .container-bel {
    border-right: none;
    border-bottom: 3px solid white;
    background-color: #7ad4d4;
  }
}

@media only screen and (max-width: 540px) {
  .creditLogo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .amerborgh {
    margin-bottom: 0;
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
