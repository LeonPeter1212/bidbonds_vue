<template>
	<aside class="sidebar">
		<div class="sidebar__menu-group">
			<ul class="sidebar_nav" v-for="(route, i) in samenu" :key="i">
				<li>
					<router-link :to="route.link">
						<vue-feather
							:type="route.icon"
							class="nav-icon"
						></vue-feather>
						<span class="menu-text">{{route.name}}</span>
					</router-link>
				</li>
			</ul>
			<ul class="sidebar_nav">
				<li>
					<router-link to="/">
						<vue-feather
							type="feather"
							class="nav-icon"
						></vue-feather>
						<span class="menu-text">Dashboard</span>
					</router-link>
				</li>
				<li class="has-child">
					<a href="#">
						<vue-feather
							type="user-check"
							class="nav-icon"
						></vue-feather>
						<span class="menu-text">Users</span>
						<span class="toggle-icon"></span>
					</a>
					<ul>
						<li class="has-child">
							<a href="#">
								<vue-feather
									type="plus"
									class="nav-icon"
								></vue-feather>
								<span class="menu-text">Create user</span>
								<span class="toggle-icon"></span>
							</a>
							<ul>
								<li>
									<router-link
										class=""
										to="/users/colleagues/create"
										>Colleagues</router-link
									>
								</li>
								<!-- <li>
									<router-link
										class=""
										to="#"
										>Agent</router-link
									>
								</li> -->
								<li>
									<router-link
										class=""
										to="/users/customers/create"
										>Customer</router-link
									>
								</li>
							</ul>
						</li>
						<li class="has-child">
							<a href="#">
								<vue-feather
									type="plus"
									class="nav-icon"
								></vue-feather>
								<span class="menu-text">Manage users</span>
								<span class="toggle-icon"></span>
							</a>
							<ul>
								<li>
									<router-link
										class=""
										to="/users/colleagues/manage"
										>Colleagues</router-link
									>
								</li>
								<!-- <li>
									<router-link
										class=""
										to="#"
										>Agent</router-link
									>
								</li> -->
								<li>
									<router-link
										class=""
										to="/users/customers/manage"
										>Customer</router-link
									>
								</li>
							</ul>
						</li>
						<li class="has-child">
							<a href="#">
								<vue-feather
									type="plus"
									class="nav-icon"
								></vue-feather>
								<span class="menu-text">Roles</span>
								<span class="toggle-icon"></span>
							</a>
							<ul>
								<li>
									<router-link
										class=""
										to="/users/roles/create"
										>Create role</router-link
									>
								</li>
								<li>
									<router-link
										class=""
										to="/users/roles/manage"
										>Manage roles</router-link
									>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="has-child">
					<a href="#">
						<vue-feather
							type="shopping-bag"
							class="nav-icon"
						></vue-feather>
						<span class="menu-text">Branches</span>
						<span class="toggle-icon"></span>
					</a>
					<ul>
						<li>
							<router-link class="" to="/branches/create"
								>Create Branches</router-link
							>
						</li>
						<li>
							<router-link class="" to="/branches/manage/"
								>Manage Branches</router-link
							>
						</li>
					</ul>
				</li>
				<li>
					<router-link to="/customers/">
						<vue-feather
							type="users"
							class="nav-icon"
						></vue-feather>
						<span class="menu-text">Customers</span>
					</router-link>
				</li>
				<li class="has-child">
					<a href="#">
						<vue-feather
							type="shopping-bag"
							class="nav-icon"
						></vue-feather>
						<span class="menu-text">Companies</span>
						<span class="toggle-icon"></span>
					</a>
					<ul>
						<li>
							<router-link class="" to="/companies/onboarding"
								>Onboard Company</router-link
							>
						</li>
						<li>
							<router-link class="" to="/companies/manage/"
								>Manage Companies</router-link
							>
						</li>
					</ul>
				</li>
				<li>
					<router-link to="/bidbonds">
						<vue-feather type="file" class="nav-icon"></vue-feather>
						<span class="menu-text">Bid Bonds</span>
					</router-link>
				</li>
				<li>
					<router-link to="/messages">
						<vue-feather type="mail" class="nav-icon"></vue-feather>
						<span class="menu-text">Messages</span>
					</router-link>
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
						name: "Colleagues",
						link: "/users/colleagues/create/",
						icon: "user-check",
						children: [],
					},
					{
						name: "Customer",
						link: "/users/customers/create/",
						icon: "user-check",
						children: [],
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
						icon: "user-check",
						children: [],
					},
					{
						name: "Manage Branches",
						link: "/branches/manage/",
						icon: "user-check",
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
			samenu
		};
	},
	components: {
		VueFeather,
	},
};
</script>
