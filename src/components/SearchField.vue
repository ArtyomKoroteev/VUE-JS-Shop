<template>
  <form action="#" class="search-form">
    <div class="input-wrapper">
      <label for="search">
        Search
        <input
          type="search"
          name="text"
          value="result"
          id="search"
          placeholder="Type here"
        />
      </label>
      <button id="search-btn">Search</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'search-field',
  data() {
    return {
      searchValue: '',
    };
  },
};
</script>
