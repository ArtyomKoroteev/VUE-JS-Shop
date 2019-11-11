<template>
  <form action="#" class="search-form">
    <div class="input-wrapper">
      <span>{{result}}</span>
      <label for="search">
        Search
        <input type="search"
               name="text"
               value="result"
               id="search"
               placeholder="Type here"
               v-model="value"
      </label>
      <button id="search-btn">Search</button>
    </div>
    <div class="value">{{searchValue}}</div>
  </form>
</template>

<script>
export default {
  name: 'search-field',
  data() {
    return {
      searchValue: '',
      value: '',
      result: '',
    };
  },
};
</script>
