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
            v-model="filterData.type"
          />
          Mounting
        </label>
        <label for="city">
          <input type="checkbox" name="city" id="city" value="city" v-model="filterData.type" />
          City
        </label>
      </fieldset>
      <fieldset class="group-wrapper">
        <legend class="group-title">Gender</legend>
        <label for="male">
          <input type="checkbox" name="male" id="male" value="male" v-model="filterData.gender" />
          Male
        </label>
        <label for="female">
          <input
            type="checkbox"
            name="female"
            id="female"
            value="female"
            v-model="filterData.gender"
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
            v-model="filterData.wheelSize"
          />
          26 inch
        </label>
        <label for="27inch">
          <input
            type="checkbox"
            name="27inch"
            id="27inch"
            value="27"
            v-model="filterData.wheelSize"
          />
          27 inch
        </label>
        <label for="28inch">
          <input
            type="checkbox"
            name="28inch"
            id="28inch"
            value="28"
            v-model="filterData.wheelSize"
          />
          28 inch
        </label>
      </fieldset>
    </form>
    <span>{{filterData}}</span>
  </aside>
</template>

<script>
export default {
  name: "AsideFilter",
  data() {
    return {
      url: "http://localhost:3000",
      API_KEY: ``,
      filterData: {
        gender: [],
        type: [],
        wheelSize: [],
        options: '',
      }
    };
  },
  methods: {
    getRequest(options) {
      console.log(this.filterData);
      this.API_KEY = `${this.url}?${this.filterData.options}`
      fetch(this.API_KEY)
        .then(response => {
          if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText));
          }
          return Promise.resolve(response);
        })
        // .then(response => response.json())
        .then(response => {
          console.log(response);
        });
    }
  },
  watch: {
    filterData: {
      handler: (data) => {
        data.options = `type='${data.type}'&gender=${data.gender}&wheelSize=${data.wheelSize}`;
      },
      deep: true
    }
  },
  updated() {
    this.getRequest(this.filterData);
  }
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


