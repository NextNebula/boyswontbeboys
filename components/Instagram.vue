<template>
  <div class="instagram">
    <template v-for="(post, index) in posts">
        <img class="instagram-post" v-bind:src="post.node.thumbnail_resources[3].src" :key="index">
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: null
    }
  },
  methods: {
    getPosts: function () {
      this.$axios
        .get('https://www.instagram.com/boyswntbeboys/?__a=1')
        .then(response => (this.posts = response.data.graphql.user.edge_owner_to_timeline_media.edges.slice(0, 9)))
      }
    },
  mounted() {
      this.getPosts();
  },
};
</script>

<style>
  .instagram {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
    max-width: 950px;
  }

  .instagram-post {
    border: 2px solid white;
    margin: 0 0.125rem 0.25rem 0.125rem;
    width: calc(33.33% - 0.25rem);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
</style>
