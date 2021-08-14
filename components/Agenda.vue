<template>
  <div class="agenda">
    <div class="title">SPEELLIJST</div>
    <template v-for="(month, indexMonth) in currentAgenda">
      <month v-bind:month="month" :key="'agenda-' + indexMonth" />
    </template>
    <div class="title title-local">SPEELLIJST LOKALE VERSIES</div>
    <div class="description-local">
      Volgend seizoen maken we vier nieuwe versies van de voorstelling met een volledig lokale cast.
      <br />Wil je ook meedoen?
      <a href="https://forms.gle/dQAiwWDj8gL6LRTF8">Je kunt je hier aanmelden</a>.
    </div>
    <template v-for="(monthLocal, indexMonthLocal) in currentAgendaLocal">
      <month v-bind:month="monthLocal" :key="'agendaLocal-' + indexMonthLocal" />
    </template>
    <!-- <div
      class="outdated-shows"
      v-on:click="showOutdatedAgenda = !showOutdatedAgenda"
    >EERDERE VOORSTELLINGEN</div>
    <template v-for="(month, indexMonth) in outdatedAgenda">
      <month v-bind:month="month" :key="'2' + indexMonth" />
    </template>-->
  </div>
</template>

<script>
import moment from "moment";
import Month from "./Month.vue";
const parse = require('csv-parse/lib/sync')

export default {
  components: {
    Month,
  },
  data() {
    return {
      currentAgenda: [],
      currentAgendaLocal: [],
      outdatedAgenda: [],
    };
  },
  beforeCreate: function () {
    moment.locale("nl");
  },
  created: function () {
    this.fetchAgenda();
  },
  methods: {
    async fetchAgenda() {
      const data = await this.$axios.$get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSu9PwxbfvpIGh_DPQFb3Z6PVtNzHwOfStzj73XdRvxAQ8qBVxbacLgYn75m0Zsc7qUdoEXhUz8iN7f/pub?gid=0&single=true&output=csv"
      );

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
          tickets: record["Ticket link"],
          facebook: record["Facebook link"],
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

      this.currentAgenda = currentAgendaData;

      const dataLocal = await this.$axios.$get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSu9PwxbfvpIGh_DPQFb3Z6PVtNzHwOfStzj73XdRvxAQ8qBVxbacLgYn75m0Zsc7qUdoEXhUz8iN7f/pub?gid=1747042318&single=true&output=csv"
      );

      const recordsLocal = parse(dataLocal, {
        columns: true,
        skip_empty_lines: true
      });

      //Create agenda items
      var itemsLocal = [];
      recordsLocal.forEach((record) => {
        itemsLocal.push({
          date: record["Datum"] !== "onbekend" ? moment(record["Datum"], "DD-MM-YYYY").hour(23).minute(59) : null,
          dateUnknown: record["Datum onbekend"] === "ja",
          place: record["Stad"],
          venue: record["Locatie"],
          tickets: record["Ticket link"],
          facebook: record["Facebook link"],
          soldOut: record["Uitverkocht"] === "ja",
        });
      });

      //Group in months
      var currentAgendaLocalData = [];
      itemsLocal.forEach((item) => {
        if (item.date === null) {
          if (currentAgendaLocalData.find((_) => _.key === "onbekend") === undefined) {
            currentAgendaLocalData.push({
              month: "onbekend",
              key: "onbekend",
              items: [],
            });
          }

          var monthIndexOnbekend = currentAgendaLocalData.findIndex((_) => _.key === "onbekend");
          currentAgendaLocalData[monthIndexOnbekend].items.push(item);
        }
        else {
          var key = item.date.month().toString() + item.date.year().toString();

          if (currentAgendaLocalData.find((_) => _.key === key) === undefined) {
            currentAgendaLocalData.push({
              month: item.date.format("MMMM yyyy"),
              key: key,
              items: [],
            });
          }

          var monthIndex = currentAgendaLocalData.findIndex((_) => _.key === key);
          currentAgendaLocalData[monthIndex].items.push(item);
        }
      });

      this.currentAgendaLocal = currentAgendaLocalData;

      //TODO: outdatedAgenda
      //moment(month.items[0].date, "DD-MM-YYYY").isAfter(moment().startOf("month"))
    },
  },
};
</script>

<style>
.title-local {
  margin-top: 2rem;
}
.description-local {
  margin-top: -1rem;
}
.outdated-shows {
  font-weight: 700;
  font-size: 20px;
  margin-top: 2rem;
  margin-bottom: -0.5rem;
}
</style>
