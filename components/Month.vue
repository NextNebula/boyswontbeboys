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
        <div class="agenda-column column-place">{{ item.place }}</div>
        <div class="agenda-column column-venue">{{ item.venue }}</div>
        <div class="agenda-column column-links">
          <div
            v-if="item.tickets === null"
            class="column-tickets column-tickets-soon"
            v-bind:class="{ 'column-tickets__with-facebook': item.facebook !== null}"
          >Verkoop start later</div>
          <a
            v-else
            class="column-tickets"
            v-bind:class="{ 'column-tickets__with-facebook': item.facebook !== null}"
            v-bind:href="item.tickets"
            target="_blank"
            rel="noopener"
          >
            <span v-if="item.soldOut">Uitverkocht</span>
            <span v-else>Kaarten</span>
          </a>
          <a
            v-if="item.facebook !== null"
            v-bind:href="item.facebook"
            class="column-facebook"
            target="_blank"
            rel="noopener"
          >Facebook event</a>
        </div>
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
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
}

.agenda-item__passed {
  opacity: 0.5;
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
  width: 245px;
}

.column-links {
  font-size: 0;
  width: 220px;
}

.column-tickets {
  float: left;
  width: 80px;
  margin-right: 0.5rem;
  font-size: 16px;
  text-align: center;
}

.column-tickets-soon {
  width: auto;
}

.column-facebook {
  float: left;
  font-size: 16px;
  width: 113px;
}

@media only screen and (max-width: 715px) {
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
    display: flex;
  }

  .column-tickets {
    flex-grow: 1;
  }

  .column-tickets__with-facebook {
    width: 50%;
    text-align: right;
  }

  .column-facebook {
    margin-left: 0.5rem;
    width: 50%;
  }
}
</style>