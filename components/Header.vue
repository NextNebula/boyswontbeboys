<template>
  <header>
    <div class="social-nav">
      <a href="https://www.facebook.com/boyswontbeboys/" target="_blank">
        <font-awesome-icon :icon="['fab', 'facebook-square']" />
      </a>
      <a href="https://www.instagram.com/boyswntbeboys/" target="_blank">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </div>
    <nav class="navigation">
      <span>|</span>
      <a href="#agenda">Speellijst</a>
      <span>|</span>
      <a href="#overview">Over de show</a>
      <span>|</span>
      <a href="#team">Het team</a>
      <span>|</span>
      <a href="#call">Bel ons</a>
      <span>|</span>
      <a href="#contact">Contact</a>
      <span>|</span>
    </nav>
  </header>
</template>

<script>
export default {
  mounted: function () {
    var doc = document.documentElement;

    var prevScroll = window.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var header = document.getElementsByTagName("header")[0];

    var checkScroll = function () {
      curScroll = window.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) {
        //scrolled up
        direction = 2;
      } else if (curScroll < prevScroll) {
        //scrolled down
        direction = 1;
      }

      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }

      prevScroll = curScroll;
    };

    var toggleHeader = function (direction, curScroll) {
      if (direction === 2 && curScroll > 45) {
        header.classList.add("hide");
        prevDirection = direction;
      } else if (direction === 1) {
        header.classList.remove("hide");
        prevDirection = direction;
      }
    };

    window.addEventListener("scroll", checkScroll);
  },
};
</script>

<style>
header {
  display: flex;
  position: fixed;
  width: 100vw;
  background-color: white;
  align-items: stretch;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
  z-index: 200;
  opacity: 1;
  transition: opacity 0.15s;
}

header.hide {
  opacity: 0;
}

.social-nav {
  flex-grow: 1;
  font-size: 26px;
  margin: 0.25rem 0.5rem 0.25rem 1rem;
}

.social-nav a:hover {
  color: #38b2ac;
}

nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
}

nav a {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>