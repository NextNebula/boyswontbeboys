<template>
  <div class="agenda">
    <template v-for="(month, indexMonth) in currentAgenda">
      <month v-bind:month="month" :key="'1' + indexMonth"/>
    </template>
    <div class="outdated-shows" v-on:click="showOutdatedAgenda = !showOutdatedAgenda">EERDERE VOORSTELLINGEN</div>
    <template v-for="(month, indexMonth) in outdatedAgenda">
      <month v-bind:month="month" :key="'2' + indexMonth"/>
    </template>
  </div>
</template>

<script>
import moment from 'moment';
import agendaJson from '~/components/agenda.json';
import Month from './Month.vue';

export default {
  components: {
    Month
  },
  data () {
    return {
      currentAgenda: [],
      outdatedAgenda: [],
    }
  },
  beforeCreate: function() {
    moment.locale('nl');
  },
  created: function() {
    agendaJson.months.map((month) => {
      month.items.forEach(function (item) {
        item.date = moment(item.date, 'DD-MM-YYYY').hour(23).minute(59);
      });
      if (moment(month.items[0].date, 'DD-MM-YYYY').isAfter(moment().startOf('month'))) {
        this.currentAgenda.push(month)
      }
      else {
        this.outdatedAgenda.push(month)
      }
    });
  }
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
