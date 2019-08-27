<template>
  <form action="#" class="search-form">
    <div class="input-wrapper">
      <label for="search">
        Search
        <input type="search" name="search" id="search" placeholder="Type here"/>
      </label>
      <button id="search-btn">Search</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Search"
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
  input {
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