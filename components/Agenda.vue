<template>
  <div class="agenda">
    <template v-for="(month, indexMonth) in agenda">
      <div class="month" :key="indexMonth">
        <div class="month-header">{{ month.month }}</div>
        <template v-for="(item, indexItem) in month.items">
          <div class="agenda-item" :key="indexMonth-indexItem">
            <div class="agenda-column column-date">{{ item.date }}</div>
            <div class="agenda-column column-place">{{ item.place }}</div>
            <div class="agenda-column column-venue">{{ item.venue }}</div>
            <div class="agenda-column column-links">
              <div v-if="item.tickets === ''" class="column-tickets"></div>
              <span v-else-if="item.soldOut" class="column-tickets">Uitverkocht</span>
              <a v-else class="column-tickets" v-bind:href="item.tickets" target="_blank">Tickets</a>
              <div v-if="item.tickets === ''" class="column-facebook"></div>
              <a v-else v-bind:href="item.facebook" class="column-facebook" target="_blank">Facebook</a>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import agendaJson from '~/components/agenda.json';

export default {
  data () {
    return {
      agenda: agendaJson.months
    }
  }
};
</script>

<style>
.agenda {
  width: 100%;
  margin-top: -1rem;
}

.month-header {
  font-weight: 700;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
}

.agenda-item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
}

.agenda-column {
  flex-grow: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: left;
}

.column-date {
  width: 71px;
  text-align: right;
}

.column-place {
  width: 107px;
}

.column-venue {
  width: 189px;
}

.column-tickets {
  display: inline-block;
  width: 93px;
  margin-right: 0.5rem;
  text-align: center;
}

.column-facebook {
  display: inline-block;
  width: 77px;
}

@media only screen and (max-width: 576px) {
  .agenda-item {
    margin-bottom: 0.75rem;
  }

  .agenda-column {
    padding-right: 0;
    font-size: 16px;
  }

  .column-date {
    padding-left: 0;
    text-align: left;
    width: auto;
  }

  .column-place {
    width: auto;
  }

  .column-venue {
    width: auto;
  }

  .column-links {
    width: 100%;
    text-align: center
  }

  .column-tickets {
    margin-right: 0.25rem;
  }
}

</style>
