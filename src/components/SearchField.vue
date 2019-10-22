<template>
  <form action="#" class="search-form">
    <div class="input-wrapper">
      <span>{{result}}</span>
      <label for="search">
        Search
        <input type="search" name="text" id="search" v-model="value" value="result" @input="formatNumber($event.target.value)" placeholder="Type here"/>

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
  methods: {
    formatNumber(event) {
      this.result = Number(event).toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
      console.log(this.result);
      return this.result;
    },
  },
  beforeUpdate() {
    this.formatNumber(this.value);
  },
};
</script>

<style lang="scss">
.input-wrapper {
  display: flex;
  position: relative;
  max-width: 435px;

  label {
    font-size: 0;
  }
  #search {
    color: #cbcbcb;
    border: 1px solid #3cc3b5;
    border-radius: 25px 0 0 25px;
    width: 100%;
    height: 24px;
    padding: 15px 15px 15px 15px;
    font-size: 16px;
  }

  #search-btn {
    position: relative;
    cursor: pointer;
    left: -4px;
    border-radius: 0 25px 25px 0;
    height: 32px;
    width: 35%;
    background: #3cc3b5;
    border: none;
    color: #fff;
    &:hover {
      background: darken($color: #3cc3b5, $amount: 5%);
    }
  }
}
</style>
