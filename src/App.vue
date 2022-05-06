<template>
	<div v-if="isLoggedIn">
		<div class="layout-light side-menu overlayScroll">
			<Header />
			<main class="main-content">
				<Sidebar />
				<router-view />
				<Footer />
			</main>
			<!-- <div id="overlayer">
				<span class="loader-overlay">
					<div class="atbd-spin-dots spin-lg">
						<span class="spin-dot badge-dot dot-primary"></span>
						<span class="spin-dot badge-dot dot-primary"></span>
						<span class="spin-dot badge-dot dot-primary"></span>
						<span class="spin-dot badge-dot dot-primary"></span>
					</div>
				</span>
			</div> -->
			<div class="overlay-dark-sidebar"></div>
			<div class="customizer-overlay"></div>
		</div>
	</div>
	<div v-else>
		<router-view />
	</div>
</template>

<script>
// css
import "ant-design-vue/dist/antd.css";
import 'vue-select/dist/vue-select.css';
import "@/assets/css/plugin.min.css";
import "@/assets/css/style.css";
import "@/assets/css/dev.css";

// js
import "@/assets/js/plugins.min.js"
import "@/assets/js/script.min.js"
import "@/assets/js/main.js"

// Components
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import $ from 'jquery';

// const logged = true

export default {
	setup() {
        const isLoggedIn = ref(true)
		
        onMounted(async()=>{
            onAuthStateChanged(await getAuth(), (user)=>{
                if (user) {
                    isLoggedIn.value = true
                }else {
                    isLoggedIn.value = false
                }
            })
        })

		return {
			isLoggedIn,
		};
	},
	components: {
		Header,
		Sidebar,
		Footer,
	},
};
</script>