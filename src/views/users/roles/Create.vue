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
									<router-link to="/users/roles/manage"> Roles </router-link>
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
										v-model="rolesstate.name"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
									<span
										class="error"
										v-if="v$roles.name.$error"
									>
										{{
											v$roles.name.$errors[0]
												.$message
										}}
									</span>
								</div>

								<div class="form-group col-12">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Description</label
									>
									<textarea
										name="desc"
										v-model="rolesstate.desc"
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
														@click="
															checkbox(perm.value)
														"
													>
														<input
															class="checkbox"
															type="checkbox"
															:name="perm.value"
															v-model="
																rolesstate
																	.perms[
																	perm.value
																]
															"
														/>
														<label
															:for="perm.value"
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

								<div class="col-12 mb-4">
									<a-button
										class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
										type="button"
										@click="create"
										:loading="btnloading"
									>
										Create Role<i
											class="ml-10 mr-0 las la-arrow-right"
										></i>
									</a-button>
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
import { Card, Button, message } from "ant-design-vue";
import VueFeather from "vue-feather";
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import moment from "moment";

import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getAuth } from '@firebase/auth';

import router from "../../../router"

export default {
	name: "CreateRole",
	setup() {
		const btnloading = ref(false)

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
		]);

		const rolesstate = reactive({
			name: "",
			desc: "",
			perms: {
				create_colleague: false,
				view_colleague: false,
				edit_colleague: false,
				reset_colleagues_password: false,
				disable_colleague: false,
				view_activity_logs: false,
				create_reports: false,
				create_branch: false,
				view_branch: false,
				update_branch: false,
				delete_branch: false,
				update_limit: false,
				onboard_company: false,
				view_company: false,
				blacklist_company: false,
				approve_company: false,
				create_customer: false,
				edit_customer: false,
			},
		});

		const rolesrules = {
			name: {
				required: helpers.withMessage(
					"Please enter the role's name.",
					required
				),
			},
		};

		const v$roles = useVuelidate(rolesrules, rolesstate);

		const db = ref();
		const auth = ref();

		return {
			permissions,
			rolesstate,
			db,
			v$roles,
			auth,
			btnloading,
		};
	},
	components: {
		ACard: Card,
		VueFeather,
		AButton: Button,
	},
	methods: {
		message() {
			return message;
		},
		moment() {
			return moment;
		},
		async create() {
			this.btnloading.value = true
			
			this.v$roles.$validate();
			if (!this.v$roles.$error) {
				try {
					await addDoc(collection(this.db, `/accounts/accid/roles`), {
						...this.rolesstate,
						public_id: Date.now(),
						created: {
							by: this.auth.uid,
							at: moment().format()
						}
					}).then(()=>{
						this.btnloading.value = false
						message.success({
							content: 'Role successfully created.',
							style: {
								marginRight: '20px',
								marginTop: '74px',
								textAlign: 'right'
							},
						})
						router.push("/users/roles/manage")
					});
				} catch (e) {
					console.error("Error adding document: ", e);
					this.btnloading.value = false
				}
				return;
			}

		},
		checkbox(perm) {
			this.rolesstate.perms[perm] = !this.rolesstate.perms[perm];
		},
	},
	async beforeCreate() {
		this.db = getFirestore();
		this.auth = await getAuth().currentUser;
	},
};
</script>
