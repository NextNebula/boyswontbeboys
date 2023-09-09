<template>
  <div class="month">
    <div class="month-header">{{ month.month !== "onbekend" ? month.month : "nog niet bekend" }}</div>
    <template v-for="(item, indexItem) in month.items">
      <div
        v-bind:class="{ 'agenda-item__passed': item.date && item.date.isBefore() }"
        class="agenda-item"
        :key="indexItem"
      >
        <div
          v-if="!item.dateUnknown"
          class="agenda-column column-date"
        >{{ item.date.format("dd DD") }}</div>
        <div v-else-if="item.date === null" class="agenda-column column-date"></div>
        <div v-else class="agenda-column column-date">n.n.b</div>
        <div class="agenda-column column-place">{{ item.place }} <br> <span class="column-extra">{{ item.venue }}</span></div>
        <div class="agenda-column column-type">{{ item.type }}<br> <span class="column-extra">{{ item.extra }}</span></div>
        <div
          v-if="item.tickets === null"
          class="column-tickets column-tickets-soon"
        >Verkoop start later</div>
        <a
          v-else
          class="column-tickets"
          v-bind:href="item.tickets"
          target="_blank"
          rel="noopener"
        >
          <span v-if="item.soldOut">Uitverkocht</span>
          <span v-else>Kaarten</span>
        </a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ["month"],
};
</script>

<style>
.month-header {
  font-weight: 700;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
}

.agenda-item {
  display: flex;
  gap: 0 16px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.agenda-item__passed {
  opacity: 0.5;
}

.agenda-item__passed .column-tickets {
  visibility: hidden;
  height: 0;
}

.agenda-column {
  flex-grow: 0;
  text-align: left;
}

.column-date {
  width: 71px;
  text-align: right;
}

.column-place {
  width: 165px;
  line-height: 100%;
}

.column-type {
  width: 270px;
  font-size: 16px;
}

.column-extra {
  font-size: 14px;
  font-style: italic;
}

.column-tickets {
  text-align: center;
}

.column-tickets-soon {
  width: auto;
}

@media only screen and (max-width: 715px) {
  .agenda-item {
    margin-bottom: 12px;
  }

  .agenda-column {
    padding-right: 0;
    font-size: 16px;
  }

  .column-date {
    width: calc(50% - 16px);
  }

  .column-place {
    width: calc(50% - 16px);
  }

  .column-type {
    width: calc(50% - 16px);
    text-align: right;
  }

  .column-tickets {
    width: calc(50% - 16px);
    text-align: left;
  }
}
</style>