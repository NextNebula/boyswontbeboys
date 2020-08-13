<template>
  <div class="agenda">
    <template v-for="(month, indexMonth) in currentAgenda">
      <month v-bind:month="month" :key="'1' + indexMonth" />
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

export default {
  components: {
    Month,
  },
  data() {
    return {
      currentAgenda: [],
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
        "https://spreadsheets.google.com/feeds/cells/1c3lI5c47d6S4XNew_KNlBR0kAK5Gn8DCwLn--gutoYU/1/public/full?alt=json"
      );

      //Create agenda items
      var items = [];
      data.feed.entry.forEach((entry) => {
        //Skip first row with headers
        if (entry.gs$cell.row === "1") {
          return;
        }

        var value = entry.gs$cell.inputValue;
        var index = Number(entry.gs$cell.row) - 2;

        if (entry.gs$cell.col === "1") {
          items.push({
            date: moment(value, "DD-MM-YYYY").hour(23).minute(59),
            place: null,
            venue: null,
            tickets: null,
            facebook: null,
            soldOut: false,
          });
        } else if (entry.gs$cell.col === "2") {
          items[index].place = value;
        } else if (entry.gs$cell.col === "3") {
          items[index].venue = value;
        } else if (entry.gs$cell.col === "4") {
          items[index].tickets = value;
        } else if (entry.gs$cell.col === "5") {
          items[index].facebook = value;
        } else if (entry.gs$cell.col === "6") {
          items[index].soldOut = value === "ja";
        }
      });

      //Group in months
      var currentAgendaData = [];
      items.forEach((item) => {
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
      });

      this.currentAgenda = currentAgendaData;

      //TODO: outdatedAgenda
      //moment(month.items[0].date, "DD-MM-YYYY").isAfter(moment().startOf("month"))
    },
  },
};
</script>

<style>
.agenda {
  width: 100%;
  margin-top: -1rem;
}
.outdated-shows {
  font-weight: 700;
  font-size: 20px;
  margin-top: 2rem;
  margin-bottom: -0.5rem;
}
</style>
