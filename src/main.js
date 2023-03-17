import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./assets/main.css";
import Home from "./pages/Home.vue";
import Counter from "./pages/Counter.vue";
import Error from "./pages/Error.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},

		{
			path: "/counter",
			name: "Counter",
			component: Counter,
		},

		{
			path: "/:catchAll(.*)",
			name: "Error",
			component: Error,
		},
	],
});

createApp(App).use(router).mount("#app");
