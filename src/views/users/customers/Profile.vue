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
									<router-link to="/users/customers/manage/"
										>Customers</router-link
									>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link to="#"
										>{{ user.fname }}
										{{ user.lname }}</router-link
									>
								</li>
							</ul>
						</div>
						<h4 class="text-capitalize breadcrumb-title mb-4">
							Profile Overview
						</h4>
					</div>
					<div class="col-xxl-3 col-lg-4 col-sm-12">
						<!-- Profile Acoount -->
						<div class="card mb-25">
							<div class="card-body text-center p-0">
								<div
									class="account-profile border-bottom pt-25 px-25 pb-0 d-flex align-items-center"
								>
									<div class="ap-img mb-20 pro_img_wrapper">
										JD
									</div>
									<div class="ap-nameAddress pb-3 pl-3">
										<h5 class="ap-nameAddress__title">
											{{ user.fname }} {{ user.lname }}
										</h5>
										<p
											class="ap-nameAddress__subTitle fs-14 m-0"
										>
											Account Manager, Trade Finance
											Manager
										</p>
									</div>
								</div>
								<div class="ps-tab p-20 pb-25">
									<ul class="d-flex flex-column">
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120 text-sm"
													>Created:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													{{
														moment(
															user.created.at
														).format("llll")
													}}
												</p>
											</div>
										</li>
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120 text-sm"
													>By:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													John Doe
												</p>
											</div>
										</li>
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row flex-wrap align-items-center my-2"
											>
												<span
													class="font-bold text-black min120 text-sm"
													>Status:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													<span
														class="bg-opacity-success color-success rounded-pill userDatatable-content-status active text-sm"
														>Active</span
													>
													<span
														class="bg-opacity-warning color-warning rounded-pill userDatatable-content-status active text-sm"
														>Inactive</span
													>
													<span
														class="bg-opacity-danger color-danger rounded-pill userDatatable-content-status active text-sm"
														>Disabled</span
													>
													<span
														class="bg-opacity-dark color-dark rounded-pill userDatatable-content-status active text-sm"
														>Blacklisted</span
													>
												</p>
											</div>
										</li>
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120 text-sm"
													>Reason:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													Lorem ipsum, dolor sit amet
													consectetur adipisicing
													elit. Numquam possimus minus
													ipsa, pariatur dolor.
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="card-footer">
								<button
									class="btn btn-info btn-sm d-inline-block mt-1 mr-1"
								>
									Enable Account
								</button>
								<button
									class="btn btn-outline-info btn-sm d-inline-block mt-1 mr-1"
								>
									Disable Account
								</button>
								<button
									class="btn btn-info btn-sm d-inline-block mt-1 mr-1"
								>
									Reset Password
								</button>
							</div>
						</div>
						<!-- Profile Acoount End -->
					</div>
					<div class="col-xxl-9 col-lg-8 col-sm-12">
						<div class="row">
							<div class="col-12">
								<div class="card mb-4">
									<div class="card-header">
										<h6>Account Information</h6>
									</div>
									<div class="card-body p-0">
										<div
											class="atbd-collapse atbd-accordion rounded-0"
										>
											<div class="atbd-collapse-item">
												<div
													class="atbd-collapse-item__header"
												>
													<div
														class="item-link py-2"
														data-toggle="collapse"
														data-target="#collapse-1"
														aria-expanded="true"
														aria-controls="collapse-1"
													>
														<div
															class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
														>
															<span
																class="font-bold text-black min120 text-sm"
																>Personal
																details:</span
															>
															<p
																class="statistics-item__number ml-2 mt-0 text-sm"
															>
																{{ user.fname }}
																{{ user.lname }}
															</p>
															<a
																href="#"
																class="flex-grow-1 text-right d-block"
																>edit</a
															>
														</div>
													</div>
												</div>
												<div
													id="collapse-1"
													class="collapse atbd-collapse-item__body"
												>
													<div
														class="collapse-body-text"
													>
														<div class="row">
															<div
																class="form-group col-lg-6"
															>
																<label
																	class="color-dark fs-14 fw-500 align-center"
																	>First
																	name</label
																>
																<input
																	type="text"
																	name="fname"
																	v-model="
																		user.fname
																	"
																	class="form-control ih-medium ip-gray radius-xs b-light px-15"
																/>
																<!-- <span
																	class="error"
																	v-if="
																		v$cust
																			.fname
																			.$error
																	"
																>
																	{{
																		v$cust
																			.fname
																			.$errors[0]
																			.$message
																	}}
																</span> -->
															</div>

															<div
																class="form-group col-lg-6"
															>
																<label
																	class="color-dark fs-14 fw-500 align-center"
																	>Last
																	name</label
																>
																<input
																	type="text"
																	name="lname"
																	v-model="
																		user.lname
																	"
																	class="form-control ih-medium ip-gray radius-xs b-light px-15"
																/>
																<!-- <span
																	class="error"
																	v-if="
																		v$cust
																			.fname
																			.$error
																	"
																>
																	{{
																		v$cust
																			.fname
																			.$errors[0]
																			.$message
																	}}
																</span> -->
															</div>

															<div class="col-12">
																<a-button
																	class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
																	@click="runupdate"
																	:loading="btnloading"
																>
																	Save Changes
																</a-button>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="atbd-collapse-item">
												<div
													class="atbd-collapse-item__header"
												>
													<div
														class="item-link py-2"
														data-toggle="collapse"
														data-target="#collapse-2"
														aria-expanded="true"
														aria-controls="collapse-2"
													>
														<div
															class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
														>
															<span
																class="font-bold text-black min120 text-sm"
																>Phone
																number:</span
															>
															<p
																class="statistics-item__number ml-2 mt-0 text-sm"
															>
																(+{{
																	user.country
																		?.pc
																}})
																{{ user.phone }}
															</p>
															<a
																href="#"
																class="flex-grow-1 text-right d-block"
																>edit</a
															>
														</div>
													</div>
												</div>
												<div
													id="collapse-2"
													class="collapse atbd-collapse-item__body"
												>
													<div
														class="collapse-body-text"
													>
														<div class="row">
															<div
																class="form-group col-md-12"
															>
																<label
																	class="color-dark fs-14 fw-500 align-center"
																	>Phone
																	Number</label
																>
																<div
																	class="d-flex"
																>
																	<v-select
																		style="
																			width: 40%;
																		"
																		class="form-control ih-medium ip-gray radius-xs b-light px-15"
																		name="country"
																		v-model="
																			user.country
																		"
																		:options="
																			countries
																		"
																	/>
																	<span
																		class="d-flex align-items-center mx-2"
																		>-</span
																	>
																	<input
																		type="text"
																		name="phone"
																		v-model="
																			user.phone
																		"
																		class="form-control ih-medium ip-gray radius-xs b-light px-15"
																	/>
																</div>
																<!-- <span
																	class="error"
																	v-if="
																		v$cust
																			.country
																			.$error
																	"
																>
																	{{
																		v$cust
																			.country
																			.$errors[0]
																			.$message
																	}}
																</span>
																<span
																	class="error"
																	v-if="
																		v$cust
																			.phone
																			.$error
																	"
																>
																	{{
																		v$cust
																			.phone
																			.$errors[0]
																			.$message
																	}}
																</span> -->
															</div>

															<div class="col-12">
																<a-button
																	class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
																	@click="runupdate"
																	:loading="btnloading"
																>
																	Save Changes
																</a-button>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="atbd-collapse-item">
												<div
													class="atbd-collapse-item__header"
												>
													<div
														class="item-link py-2"
														data-toggle="collapse"
														data-target="#collapse-3"
														aria-expanded="true"
														aria-controls="collapse-3"
													>
														<div
															class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
														>
															<span
																class="font-bold text-black min120 text-sm"
																>Email:</span
															>
															<p
																class="statistics-item__number ml-2 mt-0 text-sm"
															>
																{{ user.email }}
															</p>
															<a
																href="#"
																class="flex-grow-1 text-right d-block"
																>edit</a
															>
														</div>
													</div>
												</div>
												<div
													id="collapse-3"
													class="collapse atbd-collapse-item__body"
												>
													<div
														class="collapse-body-text"
													>
														<div class="row">
															<div
																class="form-group col-md-12"
															>
																<div
																	class="form-group col-lg-12"
																>
																	<label
																		class="color-dark fs-14 fw-500 align-center"
																		>Email</label
																	>
																	<input
																		type="email"
																		name="email"
																		v-model="
																			user.email
																		"
																		class="form-control ih-medium ip-gray radius-xs b-light px-15"
																	/>
																	<!-- <span
																		class="error"
																		v-if="
																			v$cust
																				.email
																				.$error
																		"
																	>
																		{{
																			v$cust
																				.email
																				.$errors[0]
																				.$message
																		}}
																	</span> -->
																</div>
																<!-- <span
																	class="error"
																	v-if="
																		v$cust
																			.country
																			.$error
																	"
																>
																	{{
																		v$cust
																			.country
																			.$errors[0]
																			.$message
																	}}
																</span>
																<span
																	class="error"
																	v-if="
																		v$cust
																			.phone
																			.$error
																	"
																>
																	{{
																		v$cust
																			.phone
																			.$errors[0]
																			.$message
																	}}
																</span> -->
															</div>

															<div class="col-12">
																<a-button
																	class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
																	@click="runupdate"
																	:loading="btnloading"
																>
																	Save Changes
																</a-button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import { Card, Collapse, Tag, message, Button } from "ant-design-vue";
import moment from "moment";
import {
	doc,
	query,
	getDoc,
	getFirestore,
	onSnapshot,
	updateDoc,
	collection,
} from "firebase/firestore";
import { getAuth } from "@firebase/auth";
import { useRoute } from "vue-router";
import vSelect from "vue-select";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

export default {
	name: "Profile",

	setup() {
		// Accordion
		const activeKey = ref(["directors"]);
		const countries = ref([]);
		const btnloading = ref(false)
		const auth = ref(null);
		const db = ref(null);

		const user = ref({
			country: null,
			created: {
				at: "",
				by: "",
			},
			email: "",
			fname: "",
			holdertype: "",
			lname: "",
			phone: "",
			public_id: null,
			type: "",
			uid: "",
		});

		const custrules = {
			fname: {
				required: helpers.withMessage(
					"Please enter the first name.",
					required
				),
			},
			lname: {
				required: helpers.withMessage(
					"Please enter the last name.",
					required
				),
			},
			country: {
				required: helpers.withMessage(
					"Please select a country.",
					required
				),
			},
			phone: {
				required: helpers.withMessage(
					"Please enter the phone number.",
					required
				),
			},
			email: {
				required: helpers.withMessage(
					"Please enter the email.",
					required
				),
			},
			holdertype: {
				required: helpers.withMessage(
					"Please select an account holder type.",
					required
				),
			},
		};

		const v$cust = useVuelidate(custrules, user);

		const routeid = ref('')

		return {
			activeKey,
			user,
			countries,
			v$cust,
			auth,
			routeid,
			db,
			btnloading,
		};
	},

	data: () => ({
		currentCustomer: null,
	}),

	async beforeCreate() {
		const route = useRoute();
		this.routeid = route.params.id
		this.auth = await getAuth();
		this.db = await getFirestore();

		this.countries = this.$store.state.countries.map((el) => {
			el.label = `${el.a3} +${el.pc}`;
			el.value = el.pc;
			return el;
		});

		const docRef = doc(await getFirestore(), "users", route.params.id);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			this.user = docSnap.data();
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	},

	created() {
		this.currentCustomer = this.$store.getters.getCustomers.filter(
			(el) => el.id == this.$route.params.id
		)[0];
	},

	components: {
		ACard: Card,
		ACollapse: Collapse,
		ACollapsePanel: Collapse.Panel,
		ATag: Tag,
		vSelect,
		AButton: Button,
	},
	
	methods: {
		moment: function () {
			return moment();
		},
		message: function() {
			return message;
		},

		async runupdate() {
			this.btnloading = true;

			this.v$cust.$validate();
			if (!this.v$cust.$error) {
				try {
					await updateDoc(doc(this.db, "users", this.routeid), {
						...this.user,
						updated: {
							by: this.auth.currentUser.uid,
							at: moment().format(),
						},
					}).then(() => {
						this.btnloading = false;
						message.success({
							content: "Customer successfully updated.",
							style: {
								marginRight: '20px',
								textAlign: 'right'
							},
						});
						// router.push("/users/roles/manage")
					})
				} catch (e) {
					console.error("Error adding document: ", e);
					this.btnloading = false;
				}
				return;
			}
			this.btnloading = false;
		},
	},
};
</script>
