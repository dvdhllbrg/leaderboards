<template>
  <div class="card horizontal">
    <div class="card-image">
      <img :src="user.author.avatar_url">
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <span class="card-title"v-html="user.author.login"></span>
        <div class="contributions">
          <div class="total row center-align">
            <div class="col s12 m4">
              <span class="number">{{ user.total.c.toLocaleString() }}</span>
              <small class="label">commits ({{ (user.total.c / total.total.c * 100).toFixed() }} %)</small>
            </div>
            <div class="col s12 m4">
              <span class="number green-text">{{ user.total.a.toLocaleString() }}</span>
              <small class="label">added ({{ (user.total.a / total.total.a * 100).toFixed() }} %)</small>
            </div>
            <div class="col s12 m4">
              <span class="number red-text">{{ user.total.d.toLocaleString() }}</span>
              <small class="label">deleted ({{ (user.total.d / total.total.d * 100).toFixed() }} %)</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gh-card',
  props: ['user', 'total']
}
</script>
