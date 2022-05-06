<template>
	<aside class="sidebar">
		<div class="sidebar__menu-group">
			<ul class="sidebar_nav" v-for="(route, i) in menu.filter(el=>el.meta.type == user.type)" :key="i">
				<li v-if="route.children.length == 0">
					<router-link :to="route.link">
						<vue-feather
							:type="route.icon"
							class="nav-icon"
						></vue-feather>
						<span class="menu-text">{{ route.name }}</span>
					</router-link>
				</li>

				<li v-else class="has-child">
					<a :href="route.link">
						<vue-feather
							:type="route.icon"
							class="nav-icon"
						></vue-feather>
						<span class="menu-text">{{ route.name }}</span>
						<span class="toggle-icon"></span>
					</a>
					<ul>
						<li v-for="(child, j) in route.children" :key="j">
							<router-link
								v-if="child.children.length == 0"
								:to="child.link"
							>
								<span class="menu-text">{{ child.name }}</span>
							</router-link>

							<a
								v-if="child.children.length > 0"
								class="has-child child flex-column justify-content-center align-items-start p-0"
								:href="child.link"
							>
								<a style="padding: 20px">
									<vue-feather
										:type="child.icon"
										class="nav-icon"
									></vue-feather>
									<span class="menu-text">{{
										child.name
									}}</span>
									<span class="toggle-icon"></span>
								</a>

								<ul
									style="padding-left: 14px"
									class="py-0 w-full"
								>
									<li
										v-for="(item, k) in child.children"
										:key="k"
									>
										<router-link :to="item.link">{{
											item.name
										}}</router-link>
									</li>
								</ul>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</aside>
</template>

<script>
import { ref } from "vue";
import VueFeather from "vue-feather";
import { getAuth } from "@firebase/auth";
import {
	collection,
	query,
	getFirestore,
	onSnapshot,
	addDoc,
} from "firebase/firestore";
import { Spin } from "ant-design-vue";
import $ from "jquery";
import "@/assets/js/main.js";

export default {
	name: "Sidebar",

	setup() {
		const menu = ref([
			{
				name: "Dashboard",
				link: "/",
				icon: "feather",
				children: [],
				meta: {
					type: "sa"
				},
			},
			{
				name: "Users",
				link: "#",
				icon: "user-check",
				children: [
					{
						name: "Create User",
						link: "#",
						icon: "plus",
						children: [
							{
								name: "Colleagues",
								link: "/users/colleagues/create/",
								icon: null,
								children: [],
							},
							{
								name: "Customesr",
								link: "/users/customers/create/",
								icon: null,
								children: [],
							},
						],
					},
					{
						name: "Manage Users",
						link: "#",
						icon: "plus",
						children: [
							{
								name: "Colleagues",
								link: "/users/colleagues/manage/",
								icon: null,
								children: [],
							},
							{
								name: "Customers",
								link: "/users/customers/manage/",
								icon: null,
								children: [],
							},
						],
					},
					{
						name: "Roles",
						link: "#",
						icon: "plus",
						children: [
							{
								name: "Create role",
								link: "/users/roles/create/",
								icon: null,
								children: [],
							},
							{
								name: "Manage roles",
								link: "/users/roles/manage/",
								icon: null,
								children: [],
							},
						],
					},
				],
				meta: {
					type: "sa"
				},
			},
			{
				name: "Branches",
				link: "#",
				icon: "shopping-bag",
				children: [
					{
						name: "Create Branches",
						link: "/branches/create/",
						icon: null,
						children: [],
					},
					{
						name: "Manage Branches",
						link: "/branches/manage/",
						icon: null,
						children: [],
					},
				],
				meta: {
					type: "sa"
				},
			},
			{
				name: "Messages",
				link: "/messages/",
				icon: "feather",
				children: [],
				meta: {
					type: "sa"
				},
			},
			{
				name: "Dashboard",
				link: "/",
				icon: "feather",
				children: [],
				meta: {
					type: "colleague"
				},
			},
			{
				name: "Customers",
				link: "/users/customers/manage/",
				icon: "users",
				children: [],
				meta: {
					type: "colleague"
				},
			},
			{
				name: "Companies",
				link: "#",
				icon: "shopping-bag",
				children: [
					{
						name: "Onboarding",
						link: "/companies/onboarding/",
						icon: null,
						children: [],
					},
					{
						name: "Manage",
						link: "/companies/manage/",
						icon: null,
						children: [],
					},
				],
				meta: {
					type: "colleague"
				},
			},
			{
				name: "Bidbonds",
				link: "/bidbonds/",
				icon: "file",
				children: [],
				meta: {
					type: "colleague"
				},
			},
			{
				name: "Messages",
				link: "/messages/",
				icon: "mail",
				children: [],
				meta: {
					type: "colleague"
				},
			},
		]);

		const user = ref({
			type: "",
		});

		const auth = ref(null);
		const db = ref(null);

		return {
			menu,
			auth,
			user,
			db,
		};
	},

	// watch: {
	// 	user: function () {
	// 		setTimeout(() => {
	// 			$(window).on("load", function () {
	// 				$(".loader-overlay").delay(500).fadeOut("slow"),
	// 					$("#overlayer").fadeOut(500, function () {
	// 						$("body").removeClass("overlayScroll");
	// 					});
	// 			});

	// 			const a = document.querySelector(".sidebar-toggle");
	// 			a &&
	// 				a.addEventListener("click", function (t) {
	// 					t.preventDefault(),
	// 						$(".overlay-dark-sidebar").toggleClass("show"),
	// 						document
	// 							.querySelector(".sidebar")
	// 							.classList.toggle("collapsed"),
	// 						document
	// 							.querySelector(".contents")
	// 							.classList.toggle("expanded");
	// 				}),
	// 				$(".sidebar_nav .has-child ul").hide(),
	// 				$(".sidebar_nav .has-child.open ul").show(),
	// 				$(".sidebar_nav .has-child >a").on("click", function (t) {
	// 					t.preventDefault(),
	// 						$(this).parent().next("has-child").slideUp(),
	// 						$(this)
	// 							.parent()
	// 							.parent()
	// 							.children(".has-child")
	// 							.children("ul")
	// 							.slideUp(),
	// 						$(this)
	// 							.parent()
	// 							.parent()
	// 							.children(".has-child")
	// 							.removeClass("open"),
	// 						console.log($(this).next()),
	// 						$(this).next().is(":visible")
	// 							? $(this).parent().removeClass("open")
	// 							: ($(this).parent().addClass("open"),
	// 							  $(this).next().slideDown());
	// 				}),
	// 				$(window)
	// 					.bind("resize", function () {
	// 						window.innerWidth;
	// 						$(this).width() <= 767.98 &&
	// 							($(".navbar-right__menu").appendTo(
	// 								".mobile-author-actions"
	// 							),
	// 							$(".search-form").appendTo(".mobile-search"),
	// 							$(".contents").addClass("expanded"),
	// 							$(".sidebar ").addClass("collapsed"));
	// 					})
	// 					.trigger("resize"),
	// 				$(window)
	// 					.bind("resize", function () {
	// 						window.innerWidth;
	// 						$(this).width() > 767.98 &&
	// 							$(".atbd-mail-sidebar").addClass("show");
	// 					})
	// 					.trigger("resize"),
	// 				$(window)
	// 					.bind("resize", function () {
	// 						window.innerWidth;
	// 						$(this).width() <= 991 &&
	// 							($(".sidebar").addClass("collapsed"),
	// 							$(".sidebar-toggle").on("click", function () {
	// 								$(".overlay-dark-sidebar").toggleClass(
	// 									"show"
	// 								);
	// 							}),
	// 							$(".overlay-dark-sidebar").on(
	// 								"click",
	// 								function () {
	// 									console.log($(this)),
	// 										$(this).removeClass("show"),
	// 										$(".sidebar").addClass("collapsed");
	// 								}
	// 							));
	// 					})
	// 					.trigger("resize"),
	// 				$(window)
	// 					.bind("resize", function () {
	// 						window.innerWidth;
	// 						$(this).width() <= 991.98 &&
	// 							$(".menu-horizontal").appendTo(
	// 								".mobile-nav-wrapper"
	// 							);
	// 					})
	// 					.trigger("resize"),
	// 				$(".btn-search").on("click", function () {
	// 					$(this).toggleClass("search-active"),
	// 						$(".mobile-search").toggleClass("show"),
	// 						$(".mobile-author-actions").removeClass("show");
	// 				});
	// 		}, 1000);
	// 	},
	// },

	components: {
		VueFeather,
		ASpin: Spin,
	},

	updated() {
		$(window).on("load", function () {
			$(".loader-overlay").delay(500).fadeOut("slow"),
				$("#overlayer").fadeOut(500, function () {
					$("body").removeClass("overlayScroll");
				});
		});

		const a = document.querySelector(".sidebar-toggle");
		a &&
			a.addEventListener("click", function (t) {
				t.preventDefault(),
					$(".overlay-dark-sidebar").toggleClass("show"),
					document
						.querySelector(".sidebar")
						.classList.toggle("collapsed"),
					document
						.querySelector(".contents")
						.classList.toggle("expanded");
			}),
			$(".sidebar_nav .has-child ul").hide(),
			$(".sidebar_nav .has-child.open ul").show(),
			$(".sidebar_nav .has-child >a").on("click", function (t) {
				t.preventDefault(),
					$(this).parent().next("has-child").slideUp(),
					$(this)
						.parent()
						.parent()
						.children(".has-child")
						.children("ul")
						.slideUp(),
					$(this)
						.parent()
						.parent()
						.children(".has-child")
						.removeClass("open"),
					console.log($(this).next()),
					$(this).next().is(":visible")
						? $(this).parent().removeClass("open")
						: ($(this).parent().addClass("open"),
						  $(this).next().slideDown());
			}),
			$(window)
				.bind("resize", function () {
					window.innerWidth;
					$(this).width() <= 767.98 &&
						($(".navbar-right__menu").appendTo(
							".mobile-author-actions"
						),
						$(".search-form").appendTo(".mobile-search"),
						$(".contents").addClass("expanded"),
						$(".sidebar ").addClass("collapsed"));
				})
				.trigger("resize"),
			$(window)
				.bind("resize", function () {
					window.innerWidth;
					$(this).width() > 767.98 &&
						$(".atbd-mail-sidebar").addClass("show");
				})
				.trigger("resize"),
			$(window)
				.bind("resize", function () {
					window.innerWidth;
					$(this).width() <= 991 &&
						($(".sidebar").addClass("collapsed"),
						$(".sidebar-toggle").on("click", function () {
							$(".overlay-dark-sidebar").toggleClass(
								"show"
							);
						}),
						$(".overlay-dark-sidebar").on(
							"click",
							function () {
								console.log($(this)),
									$(this).removeClass("show"),
									$(".sidebar").addClass("collapsed");
							}
						));
				})
				.trigger("resize"),
			$(window)
				.bind("resize", function () {
					window.innerWidth;
					$(this).width() <= 991.98 &&
						$(".menu-horizontal").appendTo(
							".mobile-nav-wrapper"
						);
				})
				.trigger("resize"),
			$(".btn-search").on("click", function () {
				$(this).toggleClass("search-active"),
					$(".mobile-search").toggleClass("show"),
					$(".mobile-author-actions").removeClass("show");
			});
	
	},

	async beforeCreate() {
		this.db = await getFirestore();
		this.auth = await getAuth().currentUser;

		// Get list of branches
		const users_q = query(collection(this.db, "users"));
		onSnapshot(users_q, (querySnapshot) => {
			// const users = [];
			querySnapshot.forEach(async (doc) => {
				if (doc.data().uid == (await getAuth().currentUser.uid)) {
					this.user = doc.data();
					// console.log(this.user.type);
				}
				// users.push({
				// 	...doc.data(),
				// 	value: doc.id,
				// 	label: doc.data().name,
				// });
			});
			// this.users = users;
		});
		// console.log(this.users);
	},
};
</script>
