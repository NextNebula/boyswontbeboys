<template>
  <div class="agenda">
    <div class="title">SPEELLIJST<br>THE CHOSEN FAMILY SHOW-HO-HO</div>
    <div class="title-text">Een nieuwe show in Theater Bellevue in de week voor kerst.</div>
    <template v-for="(month, indexMonth) in specalAgenda">
      <month v-bind:month="month" :key="'special-agenda-' + indexMonth" />
    </template>
    <div class="title title-margin">SPEELLIJST<br>BOYS WON'T BE BOYS</div>
    <template v-for="(month, indexMonth) in tourAgenda">
      <month v-bind:month="month" :key="'tour-agenda-' + indexMonth" />
    </template>
    <div class="title title-margin">AANMELDEN</div>
    <div class="title-text">
      Wil je ook meedoen?
      <a href="https://forms.gle/dQAiwWDj8gL6LRTF8">Je kunt je hier aanmelden</a>.
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Month from "./Month.vue";
const { parse } = require('csv-parse/lib/sync');

export default {
  components: {
    Month,
  },
  data() {
    return {
      tourAgenda: [],
      specalAgenda: []
    };
  },
  beforeCreate: function () {
    moment.locale("nl");
  },
  created: function () {
    this.fetchAgenda("https://docs.google.com/spreadsheets/d/e/2PACX-1vSu9PwxbfvpIGh_DPQFb3Z6PVtNzHwOfStzj73XdRvxAQ8qBVxbacLgYn75m0Zsc7qUdoEXhUz8iN7f/pub?gid=0&single=true&output=csv", false);
    this.fetchAgenda("https://docs.google.com/spreadsheets/d/e/2PACX-1vSu9PwxbfvpIGh_DPQFb3Z6PVtNzHwOfStzj73XdRvxAQ8qBVxbacLgYn75m0Zsc7qUdoEXhUz8iN7f/pub?gid=1907847438&single=true&output=csv", true)
  },
  methods: {
    async fetchAgenda(url, isSpecial) {
      const data = await this.$axios.$get(url);

      const records = parse(data, {
        columns: true,
        skip_empty_lines: true
      });

      //Create agenda items
      var items = [];
      records.forEach((record) => {
        items.push({
          date: record["Datum"] !== "onbekend" ? moment(record["Datum"], "DD-MM-YYYY").hour(23).minute(59) : null,
          dateUnknown: record["Datum onbekend"] === "ja",
          place: record["Stad"],
          venue: record["Locatie"],
          type: record['Type'] ?  record['Type'] : null,
          extra: record["Extra informatie"],
          tickets: record["Ticket link"] ? record["Ticket link"] : null,
          soldOut: record["Uitverkocht"] === "ja",
        });
      });

      //Group in months
      var currentAgendaData = [];
      items.forEach((item) => {
        if (item.date === null) {
          if (currentAgendaData.find((_) => _.key === "onbekend") === undefined) {
            currentAgendaData.push({
              month: "onbekend",
              key: "onbekend",
              items: [],
            });
          }

          var monthIndexOnbekend = currentAgendaData.findIndex((_) => _.key === "onbekend");
          currentAgendaData[monthIndexOnbekend].items.push(item);
        }
        else {
          var key = item.date.month().toString() + item.date.year().toString();

          if (currentAgendaData.find((_) => _.key === key) === undefined) {
            currentAgendaData.push({
              month: item.date.format("MMMM yyyy"),
              key: key,
              items: [],
            });
          }

          var monthIndex = currentAgendaData.findIndex((_) => _.key === key);
          currentAgendaData[monthIndex].items.push(item);
        }
      });

      if(isSpecial) {
        this.specalAgenda = currentAgendaData;
      } else {
        this.tourAgenda = currentAgendaData;
      }
    },
  },
};
</script>

<style>
.title-margin {
  margin-top: 32px;
}
.title-text {
  margin-top: -16px;
}
.outdated-shows {
  font-weight: 700;
  font-size: 20px;
  margin-top: 2rem;
  margin-bottom: -0.5rem;
}
</style>
