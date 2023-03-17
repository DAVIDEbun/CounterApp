<template>
  <div class="header">
    <div class="subheader">
      <img src="../assets/Icons/Line.svg" alt="arrow" />
      <p>VUE JS COMPOSABLES</p>
    </div>
    <h1>
      Creating a Counter <br />
      Web Application <br />
      Let’s go
    </h1>
  </div>
  <router-link to="/counter" class="link">
    <button>COUNTER</button>
  </router-link>
</template>

<script></script>

<style lang="scss" scoped>
.header {
  display: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  text-align: center;
}

.subheader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
}

h1 {
  font-size: 50px;
  font-weight: bolder;
  line-height: 60px;
}

.link {
	text-decoration: none;
}

button {
  background-color: #390ce5;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  display: block;
  margin: 0 auto;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
