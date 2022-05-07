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
									<router-link to="/branches/manage"> Branches </router-link>
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
						<h4>Create Branch</h4>
					</div>

					<div class="col-lg-12">
						<div class="Vertical-form">
							<form action="#" class="row">
								<div class="form-group col-lg-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Branch Name</label
									>
									<input
										type="text"
										name="name"
										v-model="branchstate.name"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
									<span
										class="error"
										v-if="v$branch.name.$error"
									>
										{{ v$branch.name.$errors[0].$message }}
									</span>
								</div>

								<div class="form-group col-lg-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Branch Code</label
									>
									<input
										type="text"
										name="code"
										v-model="branchstate.code"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
									<span
										class="error"
										v-if="v$branch.code.$error"
									>
										{{ v$branch.code.$errors[0].$message }}
									</span>
								</div>

								<div class="form-group col-lg-12">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Physical Address</label
									>
									<input
										type="text"
										name="address"
										v-model="branchstate.address"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
									<span
										class="error"
										v-if="v$branch.address.$error"
									>
										{{ v$branch.address.$errors[0].$message }}
									</span>
								</div>

								<div class="col-12">
									<a-button
										class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
										type="button"
										@click="submit"
										:loading="btnloading"
									>
										Create Branch<i
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
import router from "../../router";

export default {
	setup() {
		const db = ref();

		const branchstate = reactive({
			name: "",
			code: "",
			address: "",
		});

		const branchrules = {
			name: {
				required: helpers.withMessage(
					"Please enter the branch name.",
					required
				),
			},
			code: {
				required: helpers.withMessage(
					"Please enter the branch.",
					required
				),
			},
			address: {
				required: helpers.withMessage(
					"Please enter the branch's physical address.",
					required
				),
			},
		};

		const v$branch = useVuelidate(branchrules, branchstate);

		const btnloading = ref(false);

		const auth = ref();

		return {
			db,
			v$branch,
			branchstate,
			btnloading,
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
					message.error({
						content: "The credentials entered either already exist or didn't match the required criteria.",
						style: {
							marginRight: '20px',
							textAlign: 'right'
						},
					});
					console.log(err);
				});
		},

		async submit() {
			this.btnloading = true;

			this.v$branch.$validate();
			if (!this.v$branch.$error) {
				try {
					await addDoc(collection(this.db, `/accounts/accid/branches`), {
						...this.branchstate,
						public_id: Date.now(),
						created: {
							by: this.auth.currentUser.uid,
							at: moment().format(),
						},
					}).then(()=>{
						this.btnloading = false
						message.success({
							content: 'Branch successfully created.',
							style: {
								marginRight: '20px',
								textAlign: 'right'
							},
						})
						router.push("/branches/manage")
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
