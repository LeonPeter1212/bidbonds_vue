<template>
	<div class="Vertical-form">
		<form action="#" class="row">
			<div class="form-group col-lg-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>First Name</label
				>
				<input
					type="text"
					name="fname"
					v-model="colstate.fname"
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
				/>
				<span class="error" v-if="v$cols.fname.$error">
					{{ v$cols.fname.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-lg-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>Last Name</label
				>
				<input
					type="text"
					name="lname"
					v-model="colstate.lname"
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
				/>
				<span class="error" v-if="v$cols.lname.$error">
					{{ v$cols.lname.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
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
					<span class="d-flex align-items-center mx-2">-</span>
					<input
						type="number"
						name="phone"
						v-model="colstate.phone"
						class="form-control ih-medium ip-gray radius-xs b-light px-15"
					/>
				</div>
				<span class="error" v-if="v$cols.country.$error">
					{{ v$cols.country.$errors[0].$message }}
				</span>
				<span class="error" v-if="v$cols.phone.$error">
					{{ v$cols.phone.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-lg-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>Email</label
				>
				<input
					type="email"
					name="email"
					v-model="colstate.email"
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
				/>
				<span class="error" v-if="v$cols.email.$error">
					{{ v$cols.email.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>Branch</label
				>
				<v-select
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
					name="branch"
					v-model="colstate.branch"
					:options="branches"
					multiple
				/>
				<span class="error" v-if="v$cols.branch.$error">
					{{ v$cols.branch.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>Assign Roles</label
				>
				<v-select
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
					name="role"
					v-model="colstate.role"
					:options="roles"
					multiple
				/>
				<span class="error" v-if="v$cols.role.$error">
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
					Update Colleague<i
						class="ml-10 mr-0 las la-arrow-right"
					></i>
				</a-button>
			</div>
		</form>
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
	doc,
	query,
	getFirestore,
	onSnapshot,
	updateDoc,
	collection,
} from "firebase/firestore";
import { getAuth } from "@firebase/auth";

// import router from "../../router";

export default {
	name: "EditColleagues",
    props: {
        coll: Object,
    },
	setup() {
		const db = ref();
		const countries = ref([]);
		const branches = ref([]);
		const roles = ref([]);

		const colstate = ref({
			fname: "",
			lname: "",
			country: null,
			phone: "",
			email: "",
			branch: null,
			role: null,
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
			branch: {
				required: helpers.withMessage(
					"Please select the branch.",
					required
				),
			},
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
			auth,
			branches,
		};
	},

	components: {
		ACard: Card,
		VueFeather,
		vSelect,
		AButton: Button,
	},

	methods: {
		message: function () {
			return message;
		},

		async submit() {
			this.btnloading = true;
			const auth = await getAuth().currentUser;

			this.v$cols.$validate();
			if (!this.v$cols.$error) {
				try {
					await updateDoc(doc(this.db, "users", this.colstate.docid), {
						...this.colstate,
						updated: {
							by: this.auth.uid,
							at: moment().format(),
						},
					}).then(() => {
						this.btnloading = false;
						message.success({
							content: "Colleague successfully updated.",
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

	async created() {
		this.db = getFirestore();
		this.auth = await getAuth().currentUser;
        this.colstate = this.$props.coll
		this.countries = this.$store.state.countries.map((el) => {
			el.label = `${el.a3} +${el.pc}`;
			el.value = el.pc;
			return el;
		});

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
		const branches_q = query(
			collection(this.db, "/accounts/accid/branches")
		);
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
};
</script>
