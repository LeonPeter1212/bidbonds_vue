<template>
	<aside class="sidebar">
		<div class="sidebar__menu-group">
			<ul class="sidebar_nav" v-for="(route, i) in samenu" :key="i">
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
							<router-link v-if="child.children.length == 0" :to="child.link">
								<span class="menu-text">{{ child.name }}</span>
							</router-link>

							<a v-if="child.children.length > 0" class="has-child child flex-column justify-content-center align-items-start p-0" :href="child.link">
								<a style="padding: 20px;">
									<vue-feather
										:type="child.icon"
										class="nav-icon"
									></vue-feather>
									<span class="menu-text">{{child.name}}</span>
									<span class="toggle-icon"></span>
								</a>

								<ul style="padding-left: 14px;" class="py-0 w-full">
									<li v-for="(item, k) in child.children" :key="k">
										<router-link
											:to="item.link"
											>{{item.name}}</router-link
										>
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

export default {
	name: "Sidebar",
	setup() {
		const samenu = ref([
			{
				name: "Dashboard",
				link: "/",
				icon: "feather",
				children: [],
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
								name: "Customer",
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
								name: "Customer",
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
			},
			{
				name: "Messages",
				link: "/messages/",
				icon: "feather",
				children: [],
			},
		]);
		return {
			samenu,
		};
	},
	components: {
		VueFeather,
	},
};
</script>
