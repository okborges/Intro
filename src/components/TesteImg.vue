<template>
  <div>
    <ul>
      <li v-for="item in todos" :key="item.id">
        {{ item.id }} -
        {{ item.title }}
        <img v-if="item.url" :src="item.url" :alt="item.alt" width="30" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const todos = [
  {
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/150/92c952',
    alt: 'foto bonita1'
  },
  {
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    alt: 'foto bonita2'
  },
  {
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/150/24f355',
    alt: 'foto bonita3'
  }
]
</script>

<style lang="scss" scoped>
li {
  padding: 10px;
  list-style: none;
  background-color: #333;
  margin: 20px 0px;
  border-radius: 4px;
}
</style>
