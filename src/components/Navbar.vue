<template>
  <nav>
    <router-link to="/" class="logo">
      <img alt="profile" src="../assets/Icons/Circle.svg" />
      <span class="searchicon"><h4>@EbunDavid</h4></span>
    </router-link>

    <ul class="navlink">
      <li v-for="navLink in navLinks" :key="navLink.id" class="navLinks">
        <router-link :to="navLink.link" class="link">
          {{ navLink.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HomeNavbar",
  data() {
    return {
      navLinks: [
        {
          id: 1,
          name: "Home",
          link: "/",
        },
        {
          id: 2,
          name: "Counter",
          link: "/counter",
        },
        {
          id: 3,
          name: "Error",
          link: "/error",
        },
      ],
    };
  },
};
</script>

<style scoped>
.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.logo h4 {
  font-weight: bolder;
  color: black;
}

.logo img {
  padding: 10px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.link {
	text-decoration: none;
}

ul {
  list-style: none;
}
.navlink {
  gap: 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.navlink li:hover {
  cursor: pointer;
}
.navlink li a {
  text-decoration: none;
  color: black;
}
</style>
