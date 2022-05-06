<template>
	<div class="mobile-search"></div>

	<div class="mobile-author-actions"></div>
	<header class="header-top">
		<nav class="navbar navbar-light">
			<div class="navbar-left">
				<a href="#" class="sidebar-toggle">
					<img class="svg" src="@/assets/img/svg/bars.svg" alt="img"
				/></a>
				<router-link class="navbar-brand" to="/"
					><img class="dark" src="@/assets/img/logo.png" /><img
						class="light"
						src="@/assets/img/logo.png"
						alt="img"
				/></router-link>
			</div>
			<!-- ends: navbar-left -->

			<div class="navbar-right">
				<ul class="navbar-right__menu">
					<li class="">
						<form class="search-form">
							<vue-feather type="search"></vue-feather>
							<input
								class="form-control mr-sm-2"
								type="search"
								placeholder="Search..."
								aria-label="Search"
							/>
						</form>
					</li>
					<li class="nav-search d-none">
						<router-link to="#" class="search-toggle">
							<i class="la la-search"></i>
							<i class="la la-times"></i>
						</router-link>
						<form class="search-form-topMenu">
							<span
								class="search-icon"
								data-feather="search"
							></span>
							<input
								class="form-control mr-sm-2 box-shadow-none"
								type="search"
								placeholder="Search..."
								aria-label="Search"
							/>
						</form>
					</li>
					<li class="nav-message">
						<div class="dropdown-custom d-flex align-items-center">
							<a
								href="#"
								class="nav-item-toggle d-flex align-items-center"
							>
								<vue-feather type="mail"></vue-feather
							></a>
						</div>
					</li>
					<!-- ends: nav-message -->
					<li class="nav-author">
						<div class="dropdown-custom">
							<a href="#" class="nav-item-toggle">{{`${user.fname} ${user.lname}`.match(/\b(\w)/g).join('')}}</a>
							<div class="dropdown-wrapper">
								<div class="nav-author__info">
									<div class="author-img">{{`${user.fname} ${user.lname}`.match(/\b(\w)/g).join('')}}</div>
									<div>
										<h6 class="text-capitalize">{{user.fname}} {{user.lname}}</h6>
										<span>{{title(user.type)}}</span>
									</div>
								</div>
								<div class="nav-author__options">
									<ul>
										<li>
											<router-link to="/settings/profile">
												<vue-feather
													type="user"
												></vue-feather>
												Profile</router-link
											>
										</li>
										<li>
											<router-link
												to="/settings/notifications"
											>
												<vue-feather
													type="settings"
												></vue-feather>
												Settings</router-link
											>
										</li>
									</ul>
									<router-link
										to="#"
										class="nav-author__signout d-flex align-items-center justify-content-center"
										@click="handleSignout"
									>
										<vue-feather
											type="log-out"
											class="mr-2"
										></vue-feather>
										Sign Out</router-link
									>
								</div>
							</div>
							<!-- ends: .dropdown-wrapper -->
						</div>
					</li>
					<!-- ends: .nav-author -->
				</ul>
				<!-- ends: .navbar-right__menu -->
				<div class="navbar-right__mobileAction d-md-none">
					<router-link to="#" class="btn-search">
						<vue-feather type="search"></vue-feather>
						<vue-feather type="x"></vue-feather
					></router-link>
					<router-link to="#" class="btn-author-action">
						<vue-feather type="more-vertical"></vue-feather
					></router-link>
				</div>
			</div>
			<!-- ends: .navbar-right -->
		</nav>
	</header>
</template>

<script>
import { onMounted, ref, reactive } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import VueFeather from "vue-feather";
import router from "../router"
import {
	collection,
	query,
	getFirestore,
	onSnapshot,
	doc,
	deleteDoc,
	where,
} from "firebase/firestore";

export default {
	name: "Sidebar",
	setup() {
		const auth = ref(null);
		const db = ref(null);
		const user = ref('');

		return {
            auth,
			user,
			db,
		};
	},
	components: {
		VueFeather,
	},
	methods: {
		title(type) {
			switch (type) {
				case 'sa':
					return 'Super Admin'
				case 'colleague':
					return 'Colleague'
			
				default:
					return '---'
			}
		},
		handleSignout: async function () {
            signOut(await getAuth())
                .then(()=>{
                    router.push('/login')
                });
		},
	},

	async beforeCreate() {
		this.db = await getFirestore();
		this.auth = await getAuth().currentUser

		// Get list of branches
		const users_q = query(collection(this.db, "users"));
		onSnapshot(users_q, (querySnapshot) => {
			// const users = [];
			querySnapshot.forEach(async(doc) => {
				if (doc.data().uid == await getAuth().currentUser.uid) {
					this.user = doc.data()
					console.log(this.user);
				}
			});
		});
	}
};
</script>
