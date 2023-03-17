<template>
  <div class="container">
    <div class="errortext">
      <h1>404</h1>
      <p>
        Opps! Seems like you’ve <br />
        entered an unknown page
      </p>

      <router-link to="/" class="link">
        <button>HOME</button>
      </router-link>
    </div>

    <div class="errorimg">
      <img src="../assets/Icons/Error.svg" />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.errortext {
  width: 50%;
}

h1 {
  font-size: 50px;
  font-weight: bolder;
  line-height: 60px;
}

p {
  margin-bottom: 20px;
}

.link {
  text-decoration: none;
}

button {
  background-color: #390ce5;
  border: none;
  color: white;
  padding: 10px 60px;
  text-align: center;
  display: flex;
  margin: 0 auto;
  font-size: 16px;
  margin: 20px 0;
  border-radius: 5px;
  cursor: pointer;
}
.errorimg {
  width: 40%;
}

.errorimg img {
  width: 100%;
}

@media screen and (max-width: 800px) {
  .container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
  }

  .errortext {
    width: 100%;
    text-align: left;
    margin-left: 20px;
  }

  .errortext p {
    padding: 10px 0px;
    line-height: 40px;
  }

  h1 {
    font-size: 50px;
    font-weight: 600;
    line-height: 120%;
  }

  .errorimg {
    width: 100%;
  }

  .errorimg img {
    width: 100%;
  }
}
</style>
