<template>
  <div id="app" class="container">
    <h2 class="center-align white-text">Valley of Death™ Official Leaderboards</h2>
    <div class="row">
      <div class="col s12 m6">
        <h4 class="center-align white-text">GitHub</h4>
        <transition-group name="flip-list">
          <gh-card v-for="user in ghUsers" :key="user.author.id" :user="user" :total="ghUsers.sumTotal"></gh-card>
        </transition-group>
      </div>
      <div class="col s12 m6">
        <h4 class="center-align white-text">Stack Overflow</h4>
        <transition-group name="flip-list">
          <so-card v-for="user in soUsers" :key="user.account_id" :user="user"></so-card>
        </transition-group>
      </div>
    </div>
    <p class="white-text center-align">Updating in {{ new Date(timer * 1000).toISOString().substr(14, 5) }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GhCard from './components/GHCard.vue';
import SoCard from './components/SOCard.vue';

export default {
  name: 'app',
  components: {
    GhCard,
    SoCard
  },
  computed: mapGetters([
    'timer',
    'ghUsers',
    'soUsers'
  ]),
  methods: mapActions([
    'loadUsers',
    'decreaseTimer'
  ]),
  created () {
    this.loadUsers();

    setInterval(() => {
      this.loadUsers();
    }, 1000 * 60 * 10);

    setInterval(() => {
      this.decreaseTimer();
    }, 1000);
  }
}
</script>

<style lang="scss">
  @import './assets/sass/main.scss';
</style>
