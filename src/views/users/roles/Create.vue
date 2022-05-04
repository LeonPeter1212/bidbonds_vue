<template>
	<div class="contents">
		<div class="container-fluid">
			<div class="social-dash-wrap">
				<div class="row">
					<div class="col-lg-12">
						<div class="breadcrumb-main">
							<ul class="atbd-breadcrumb nav">
								<li class="atbd-breadcrumb__item">
									<router-link to="/">
										Dashboard
									</router-link>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link to="#"> Users </router-link>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link to="#"> Roles </router-link>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link to="#">Create</router-link>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-12 mb-4">
						<h4>Create Role</h4>
					</div>

					<div class="col-lg-12">
						<div class="Vertical-form">
							<form action="#" class="row">
								<div class="form-group col-12">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Role Name</label
									>
									<input
										type="text"
										name="name"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
								</div>

								<div class="form-group col-12">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Description</label
									>
									<textarea
										name="desc"
										class="form-control ip-gray radius-xs b-light px-15"
										rows="5"
									/>
								</div>

								<div class="form-group col-12">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Assign permissions</label
									>
									<a-card>
										<div
											class="input-container icon-left position-relative"
										>
											<span class="input-icon icon-left">
												<vue-feather
													type="search"
												></vue-feather>
											</span>

											<input
												type="text"
												class="form-control ih-medium ip-gray radius-xs b-light"
												placeholder="Search permissions"
											/>
										</div>

										<div class="checkboxs mt-4">
											<div
												class="checkbox-group-header mb-20"
											>
												<div
													class="checkbox-theme-2 custom-checkbox check-all"
												>
													<input
														class="checkbox"
														type="checkbox"
														id="check-3"
													/>
													<label for="check-3">
														<span
															class="checkbox-text text-black text-black font-weight-bold"
														>
															Select all
															permissions
														</span>
													</label>
												</div>
											</div>
											<div class="checkbox-group-wrapper">
												<div class="row">
													<div
														class="checkbox-theme-default custom-checkbox col-lg-3 py-2"
														v-for="(
															perm, i
														) in permissions"
														:key="i"
													>
														<input
															class="checkbox"
															type="checkbox"
															:name="perm.name"
														/>
														<label
															for="check-grp-1"
														>
															<span
																class="checkbox-text text-black"
																>{{
																	perm.text
																}}</span
															>
														</label>
													</div>
												</div>
											</div>
										</div>
									</a-card>
								</div>

								<div class="col-12">
									<button
										class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
										type="button"
										@click="create"
									>
										Create Role<i
											class="ml-10 mr-0 las la-arrow-right"
										></i>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import { Card } from "ant-design-vue";
import VueFeather from "vue-feather";

import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";


// import firebase from "firebase/app";
// import "firebase/firestore";
// const firestore = firebase.firestore();

export default {
	name: "CreateRole",
	setup() {
		const permissions = ref([
			{
				text: "Create colleague",
				value: "create_colleague",
			},
			{
				text: "View colleague",
				value: "view_colleague",
			},
			{
				text: "Edit colleague",
				value: "edit_colleague",
			},
			{
				text: "Reset colleague's password",
				value: "reset_colleagues_password",
			},
			{
				text: "Disable colleague",
				value: "disable_colleague",
			},
			{
				text: "View activity logs",
				value: "view_activity_logs",
			},
			{
				text: "Create reports",
				value: "create_reports",
			},
			{
				text: "Create branch",
				value: "create_branch",
			},
			{
				text: "View branch",
				value: "view_branch",
			},
			{
				text: "Update branch",
				value: "update_branch",
			},
			{
				text: "Delete branch",
				value: "delete_branch",
			},
			{
				text: "Update limit",
				value: "update_limit",
			},
			{
				text: "Onboard company",
				value: "onboard_company",
			},
			{
				text: "View company",
				value: "view_company",
			},
			{
				text: "Blacklist company",
				value: "blacklist_company",
			},
			{
				text: "Evaluate/approve company",
				value: "approve_company",
			},
			{
				text: "Create customer",
				value: "create_customer",
			},
			{
				text: "Edit customer",
				value: "edit_customer",
			},
		])

		const db = ref()

		return {
			permissions,
			db
		}
	},
	components: {
		ACard: Card,
		VueFeather,
	},
	methods: {
		async create() {
			try {
				const docRef = await addDoc(collection(this.db, "users"), {
					first: "Ada",
					last: "Lovelace",
					born: 1815
				});
				console.log("Document written with ID: ", docRef.id);
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		}
	},
	mounted(){
		this.db = getFirestore();
	}
};
</script>
