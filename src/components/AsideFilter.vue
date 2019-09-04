<template>
  <aside class="filter-container">
    <form action="#" method="get">
      <fieldset class="group-wrapper">
        <legend class="group-title">Type</legend>
        <label for="mounting">
          <input type="checkbox" name="mounting" id="mounting" />
          Mounting
        </label>
        <label for="city">
          <input type="checkbox" name="city" id="city" />
          City
        </label>
      </fieldset>
      <fieldset class="group-wrapper">
        <legend class="group-title">Gender</legend>
        <label for="male">
          <input type="checkbox" name="male" id="male" />
          Male
        </label>
        <label for="female">
          <input type="checkbox" name="female" id="female" />
          Female
        </label>
      </fieldset>
      <fieldset class="group-wrapper">
        <legend class="group-title">Wheel Size</legend>
        <label for="26inch">
          <input type="checkbox" name="26inch" id="26inch" />
          26 inch
        </label>
        <label for="27inch">
          <input type="checkbox" name="27inch" id="27inch" />
          27 inch
        </label>
        <label for="28inch">
          <input type="checkbox" name="28inch" id="28inch" />
          28 inch
        </label>
      </fieldset>
    </form>
  </aside>
</template>

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
      input[type=checkbox] {
        margin-right: 5px;
      }
    }
  }
}
</style>

<script>
export default {
  name: "AsideFilter"
};
</script>
