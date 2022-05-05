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
									<router-link to="/users/colleagues/manage/">
										Colleagues
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
						<h4>Create Colleagues</h4>
					</div>

					<div class="col-lg-12">
						<div class="Vertical-form">
							<form action="#" class="row">
								<div class="form-group col-lg-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>First Name</label
									>
									<input
										type="text"
										name="fname"
										v-model="colstate.fname"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
									<span
										class="error"
										v-if="v$cols.fname.$error"
									>
										{{ v$cols.fname.$errors[0].$message }}
									</span>
								</div>

								<div class="form-group col-lg-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Last Name</label
									>
									<input
										type="text"
										name="lname"
										v-model="colstate.lname"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
									<span
										class="error"
										v-if="v$cols.lname.$error"
									>
										{{ v$cols.lname.$errors[0].$message }}
									</span>
								</div>

								<div class="form-group col-md-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Phone Number</label
									>
									<div class="d-flex">
										<v-select
											style="width: 40%"
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
											name="country"
											v-model="colstate.country"
											:options="countries"
										/>
										<span
											class="d-flex align-items-center mx-2"
											>-</span
										>
										<input
											type="number"
											name="phone"
											v-model="colstate.phone"
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
										/>
									</div>
									<span
										class="error"
										v-if="v$cols.country.$error"
									>
										{{ v$cols.country.$errors[0].$message }}
									</span>
									<span
										class="error"
										v-if="v$cols.phone.$error"
									>
										{{ v$cols.phone.$errors[0].$message }}
									</span>
								</div>

								<div class="form-group col-lg-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Email</label
									>
									<input
										type="email"
										name="email"
										v-model="colstate.email"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
									<span
										class="error"
										v-if="v$cols.email.$error"
									>
										{{ v$cols.email.$errors[0].$message }}
									</span>
								</div>

								<div class="form-group col-md-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Branch</label
									>
									<v-select
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
										name="branch"
										v-model="colstate.branch"
									/>
									<!-- <span
										class="error"
										v-if="v$cols.branch.$error"
									>
										{{ v$cols.branch.$errors[0].$message }}
									</span> -->
								</div>

								<div class="form-group col-md-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Assign Roles</label
									>
									<v-select
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
										name="role"
										v-model="colstate.role"
										:options="roles"
									/>
									<span
										class="error"
										v-if="v$cols.role.$error"
									>
										{{ v$cols.role.$errors[0].$message }}
									</span>
								</div>

								<div class="col-12">
									<a-button
										class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
										type="button"
										@click="submit"
										:loading="this.btnloading"
									>
										Create Colleague<i
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
		const roles = ref([]);
		const countries = ref([]);

		const colstate = reactive({
			fname: "",
			lname: "",
			country: "",
			phone: "",
			email: "",
			branch: "",
			role: "",
		});

		const colrules = {
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
			// branch: {
			// 	required: helpers.withMessage(
			// 		"Please select the branch.",
			// 		required
			// 	),
			// },
			role: {
				required: helpers.withMessage(
					"Please select the role(s).",
					required
				),
			},
		};

		const v$cols = useVuelidate(colrules, colstate);

		const btnloading = ref(false);
		const auth = ref();

		return {
			db,
			roles,
			v$cols,
			colstate,
			btnloading,
			countries,
			auth
		};
	},

	components: {
		ACard: Card,
		VueFeather,
		vSelect,
		AButton: Button,
	},

	async beforeCreate() {
		this.db = await getFirestore();
		this.auth = await getAuth();
		this.countries = this.$store.state.countries.map(el=>{
			el.label = `${el.a3} +${el.pc}`;
			el.value = el.pc;
			return el
		})

		// Get list of roles
		const q = query(collection(this.db, "/accounts/accid/roles"));
		onSnapshot(q, (querySnapshot) => {
			const roles = [];
			querySnapshot.forEach((doc) => {
				// console.log({...doc.data(), docid: doc.id});
				roles.push({
					...doc.data(),
					value: doc.id,
					label: doc.data().name,
				});
			});
			this.roles = roles;
		});
	},

	methods: {
		message: function() {
			return message;
		},
		register: async function () {
			const auth = await getAuth();
			createUserWithEmailAndPassword(auth, this.colstate.email, "12345")
				.then(() => {
					console.log("User created successfully");
				})
				.catch((err) => {
					message.error(
						"The credentials entered either already exist or didn't match the required criteria."
					);
					console.log(err);
				});
		},

		async submit() {
			this.btnloading = true;

			this.v$cols.$validate();
			if (!this.v$cols.$error) {
				try {
					await addDoc(collection(this.db, `users`), {
						...this.colstate,
						role: this.colstate.role.public_id,
						type: "colleague",
						public_id: Date.now(),
						created: {
							by: this.auth.currentUser.uid,
							at: moment().format(),
						},
					}).then(()=>{
						this.btnloading = false
						message.success('Colleague successfully created.')
						router.push("/users/colleagues/manage")
					});
					// this.register().then(async()=>{

					// })
				} catch (e) {
					console.error("Error adding document: ", e);
					this.btnloading = false
				}
				return;
			}
		},
	},
};
</script>
