<template>
  <aside class="filter-container">
    <form action="#" method="get">
      <fieldset class="group-wrapper">
        <legend class="group-title">Type</legend>
        <label for="mounting">
          <input
            type="checkbox"
            name="mounting"
            id="mounting"
            value="mounting"
            v-model="filterData.productType"
          />
          Mounting
        </label>
        <label for="city">
          <input
            type="checkbox"
            name="city"
            id="city"
            value="city"
            v-model="filterData.productType"
          />
          City
        </label>
      </fieldset>
      <fieldset class="group-wrapper">
        <legend class="group-title">Gender</legend>
        <label for="male">
          <input
            type="checkbox"
            name="male"
            id="male"
            value="male"
            v-model="filterData.productGender"
          />
          Male
        </label>
        <label for="female">
          <input
            type="checkbox"
            name="female"
            id="female"
            value="female"
            v-model="filterData.productGender"
          />
          Female
        </label>
      </fieldset>
      <fieldset class="group-wrapper">
        <legend class="group-title">Wheel Size</legend>
        <label for="26inch">
          <input
            type="checkbox"
            name="26inch"
            id="26inch"
            value="26"
            v-model="filterData.productWheelSize"
          />
          26 inch
        </label>
        <label for="27inch">
          <input
            type="checkbox"
            name="27inch"
            id="27inch"
            value="27"
            v-model="filterData.productWheelSize"
          />
          27 inch
        </label>
        <label for="28inch">
          <input
            type="checkbox"
            name="28inch"
            id="28inch"
            value="28"
            v-model="filterData.productWheelSize"
          />
          28 inch
        </label>
      </fieldset>
    </form>
  </aside>
</template>

<script>
export default {
  name: 'AsideFilter',
  data() {
    return {
      url: 'http://localhost:3000/shop',
      API_KEY: '',
      filterData: {
        productType: [],
        productGender: [],
        productWheelSize: [],
      },
    };
  },
  methods: {
    getRequest(options) {
      this.API_KEY = `${this.url}${options}`;
      return this.API_KEY;
    },
  },
  watch: {
    filterData: {
      handler(data) {
        const query = [];
        let options = '';

        for (const key in data) {
          if (data[key].length !== 0) {
            for (let index = 0; index < data[key].length; index++) {
              query.push(`${key}=${data[key][index]}`);
            }
          }
          options = `?${query.join('&')}`;
        }

        if (query.length === 0) {
          options = '';
        }

        this.getRequest(options);
      },
      deep: true,
    },
  },
  updated() {
    this.$store.dispatch('goods/getProducts', this.API_KEY);
  },
};
</script>

<style lang="scss">
.filter-container {
  max-width: 230px;
  width: 100%;

  .group-wrapper {
    display: flex;
    text-align: left;
    margin-bottom: 20px;
    border-color: #3cc3b5;

    .group-title {
      font-size: 22px;
      margin-bottom: 15px;
    }
    label {
      display: flex;
      align-items: center;
      input[type="checkbox"] {
        margin-right: 5px;
      }
    }
  }
}
</style>
