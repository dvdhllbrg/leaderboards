<template>
  <div class="card horizontal">
    <div class="card-image">
      <img :src="user.profile_image">
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <span class="card-title" v-html="user.display_name"></span>
        <div class="so-rating row center-align valign-wrapper">
          <div class="col s3">
            <span class="total">{{ user.reputation.toLocaleString() }}</span> 
            <span class="change light-green lighten-2 white-text">+{{ user.reputation_change_week.toLocaleString() }}</span>
            <small class="label">reputation (+week)</small>
          </div>
          <div class="col s3">
            <span class="so-badge bronze">{{ user.badge_counts.bronze.toLocaleString() }}</span>
            <small class="label">bronze badges</small>
          </div>
          <div class="col s3">
            <span class="so-badge silver">{{ user.badge_counts.silver.toLocaleString() }}</span>
            <small class="label">silver badges</small>
          </div>
          <div class="col s3">
            <span class="so-badge gold">{{ user.badge_counts.gold.toLocaleString() }}</span>
            <small class="label">gold badges</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'so-card',
  props: ['user']
}
</script>
