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
									<router-link to="/users/customers/manage/">
										Customers
									</router-link>
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
						<h4>Create Customer</h4>
					</div>

					<div class="col-lg-7">
						<div>
							<div 
								:class="`d-flex border mb-4 p-3 rounded-lg holder ${custstate.holdertype == 'acc' ? 'activeholder' : null}`"
								@click="custstate.holdertype = 'acc'"
							>
								<input 
								type="radio" 
								name="holdertype" 
								value="acc" 
								v-model="custstate.holdertype" 
								class="checkbox mr-3" />
								<div class="contactinfo">
									<h6 class="mb-2">Account holder</h6>
									<span
										>Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Temporibus voluptas
										deserunt placeat debitis quibusdam
										aspernatur inventore a dolor! Assumenda
										reprehenderit sed illum cumque, culpa saepe
										ea eos iusto exercitationem ipsum</span
									>
								</div>
							</div>
							<div 
								:class="`d-flex border mb-4 p-3 rounded-lg holder ${custstate.holdertype == 'nonacc' ? 'activeholder' : null}`"
								@click="custstate.holdertype = 'nonacc'"
							>
								<input 
								type="radio" 
								name="holdertype" 
								value="nonacc" 
								v-model="custstate.holdertype" 
								class="checkbox mr-3" />
								<div class="contactinfo">
									<h6 class="mb-2">Non-account holder</h6>
									<span
										>Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Rem nostrum aliquam cumque
										harum ea aperiam similique consequuntur
										natus voluptatibus aut totam omnis, odit,
										repellat nesciunt cupiditate! Eos quisquam
										exercitationem maxime</span
									>
								</div>
							</div>
							<span
								class="error"
								v-if="v$cust.holdertype.$error"
							>
								{{ v$cust.holdertype.$errors[0].$message }}
							</span>

						</div>
					</div>

					<div class="col-lg-5">
						<div class="Vertical-form" v-show="custstate.holdertype == 'acc'">
							<form action="#">
								<div class="card">
									<div class="card-body">
										<div class="row">
											<div class="form-group col-lg-12">
												<label
													class="color-dark fs-14 fw-500 align-center"
													>Bank account number</label
												>
												<input
													type="number"
													name="ban"
													class="form-control ih-medium ip-gray radius-xs b-light px-15"
												/>
											</div>

											<div class="form-group col-lg-12">
												<label
													class="color-dark fs-14 fw-500 align-center"
													>Account name</label
												>
												<input
													type="text"
													name="an"
													class="form-control ih-medium ip-gray radius-xs b-light px-15"
												/>
											</div>

											<div class="col-12">
												<a-button
													class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
													type="button"
													@click="validateform"
												>
													Validate
												</a-button>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="Vertical-form" v-show="custstate.holdertype == 'nonacc'">
							<form action="#">
								<div class="card">
									<div class="card-body">
										<div class="row">
											<div class="form-group col-lg-12">
												<label
													class="color-dark fs-14 fw-500 align-center"
													>First name</label
												>
												<input
													type="text"
													name="fname"
													v-model="custstate.fname"
													class="form-control ih-medium ip-gray radius-xs b-light px-15"
												/>
												<span
													class="error"
													v-if="v$cust.fname.$error"
												>
													{{ v$cust.fname.$errors[0].$message }}
												</span>
											</div>

											<div class="form-group col-lg-12">
												<label
													class="color-dark fs-14 fw-500 align-center"
													>Last name</label
												>
												<input
													type="text"
													name="lname"
													v-model="custstate.lname"
													class="form-control ih-medium ip-gray radius-xs b-light px-15"
												/>
												<span
													class="error"
													v-if="v$cust.lname.$error"
												>
													{{ v$cust.lname.$errors[0].$message }}
												</span>
											</div>

											<div class="form-group col-md-12">
												<label
													class="color-dark fs-14 fw-500 align-center"
													>Phone Number</label
												>
												<div class="d-flex">
													<v-select
														style="width: 40%"
														class="form-control ih-medium ip-gray radius-xs b-light px-15"
														name="country"
														v-model="custstate.country"
														:options="countries"
													/>
													<span
														class="d-flex align-items-center mx-2"
														>-</span
													>
													<input
														type="text"
														name="phone"
														v-model="custstate.phone"
														class="form-control ih-medium ip-gray radius-xs b-light px-15"
													/>
												</div>
												<span
													class="error"
													v-if="v$cust.country.$error"
												>
													{{ v$cust.country.$errors[0].$message }}
												</span>
												<span
													class="error"
													v-if="v$cust.phone.$error"
												>
													{{ v$cust.phone.$errors[0].$message }}
												</span>
											</div>

											<div class="form-group col-lg-12">
												<label
													class="color-dark fs-14 fw-500 align-center"
													>Email</label
												>
												<input
													type="email"
													name="email"
													v-model="custstate.email"
													class="form-control ih-medium ip-gray radius-xs b-light px-15"
												/>
												<span
													class="error"
													v-if="v$cust.email.$error"
												>
													{{ v$cust.email.$errors[0].$message }}
												</span>
											</div>

											<div class="col-12">
												<a-button
													:loading="btnloading"
													@click="submit"
													class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
												>
													Create Account
												</a-button>
											</div>
										</div>
									</div>
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
import { ref, reactive } from "vue";
import { Card, message, Button } from "ant-design-vue";
import VueFeather from "vue-feather";
import vSelect from "vue-select";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import moment from "moment";
import {
	collection,
	query,
	getFirestore,
	onSnapshot,
	addDoc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";

import router from "../../../router";

export default {
	setup() {
		const db = ref();
		const countries = ref([]);
		const branches = ref([]);
		const roles = ref([]);

		const custstate = reactive({
			fname: "",
			lname: "",
			country: null,
			phone: "",
			email: "",
			holdertype: "nonacc",
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

		const v$cust = useVuelidate(custrules, custstate);

		const btnloading = ref(false);
		const auth = ref();


		return {
			db,
			roles,
			v$cust,
			custstate,
			btnloading,
			countries,
			auth,
			branches
		};
	},

	components: {
		ACard: Card,
		VueFeather,
		vSelect,
		AButton: Button,
	},

	async data() {
		this.auth = await getAuth();
	},

	async beforeCreate() {
		this.db = await getFirestore();
		// this.auth = await getAuth();
		this.countries = this.$store.state.countries.map(el=>{
			el.label = `${el.a3} +${el.pc}`;
			el.value = el.pc;
			return el
		})

		// Get list of roles
		const roles_q = query(collection(this.db, "/accounts/accid/roles"));
		onSnapshot(roles_q, (querySnapshot) => {
			const roles = [];
			querySnapshot.forEach((doc) => {
				roles.push({
					...doc.data(),
					value: doc.id,
					label: doc.data().name,
				});
			});
			this.roles = roles;
		});

		// Get list of branches
		const branches_q = query(collection(this.db, "/accounts/accid/branches"));
		onSnapshot(branches_q, (querySnapshot) => {
			const branches = [];
			querySnapshot.forEach((doc) => {
				branches.push({
					...doc.data(),
					value: doc.id,
					label: doc.data().name,
				});
			});
			this.branches = branches;
		});
	},

	methods: {
		message: function() {
			return message;
		},

		validateform() {
			message.info({
				content: "This form is currently inactive.",
				style: {
					marginRight: '20px',
					textAlign: 'right'
				},
			})
		},

		async submit() {
			this.btnloading = true;
			const auth = await getAuth()

			this.v$cust.$validate();
			if (!this.v$cust.$error) {
				try {
					createUserWithEmailAndPassword(auth, this.custstate.email, "123456")
						.then(async(userCredentials) => {
							await addDoc(collection(this.db, `users`), {
								...this.custstate,
								uid: userCredentials.user.uid,
								type: "customer",
								public_id: Date.now(),
								created: {
									by: this.auth.currentUser.uid,
									at: moment().format(),
								},
							}).then(()=>{
								this.btnloading = false
								message.success({
									content: 'Customer successfully created.',
									style: {
										marginRight: '20px',
										textAlign: 'right'
									},
								})
								router.push("/users/customers/manage")
							});
						})
					.catch((err) => {
						message.error({
							content: "The credentials entered either already exist or didn't match the required criteria.",
							style: {
								marginRight: '20px',
								textAlign: 'right'
							},
						});
						this.btnloading = false
						console.log(err);
					});
				} catch (e) {
					console.error("Error adding document: ", e);
					this.btnloading = false
				}
				return;
			}
			this.btnloading = false
		},
	},
};
</script>
