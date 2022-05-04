<template>
	<div class="Vertical-form">
		<form action="#" class="row">
			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>National ID / Passport Number</label
				>
				<input
					type="text"
					name="nipn"
					v-model="state.nipn"
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
				/>
				<span class="error" v-if="v$.nipn.$error">
					{{ v$.nipn.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>First Name</label
				>
				<input
					type="text"
					name="fname"
					v-model="state.fname"
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
				/>
				<span class="error" v-if="v$.fname.$error">
					{{ v$.fname.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>Last Name</label
				>
				<input
					type="text"
					name="lname"
					v-model="state.lname"
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
				/>
				<span class="error" v-if="v$.lname.$error">
					{{ v$.lname.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>Other Names</label
				>
				<input
					type="text"
					name="oname"
					v-model="state.oname"
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
				/>
				<!-- <span class="error" v-if="v$.oname.$error">
								{{ v$.oname.$errors[0].$message }}
							</span> -->
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
						v-model="state.country"
						:options="countries"
					/>
					<input
						type="text"
						name="phone"
						v-model="state.phone"
						class="form-control ih-medium ip-gray radius-xs b-light px-15"
					/>
				</div>
				<span class="error" v-if="v$.country.$error">
					{{ v$.country.$errors[0].$message }}
				</span>
				<span class="error" v-if="v$.phone.$error">
					{{ v$.phone.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>Company Email</label
				>
				<input
					type="email"
					name="email"
					v-model="state.email"
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
				/>
				<span class="error" v-if="v$.email.$error">
					{{ v$.email.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>Gender</label
				>
				<v-select
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
					name="gender"
					v-model="state.gender"
					:options="genders"
				/>
				<span class="error" v-if="v$.gender.$error">
					{{ v$.gender.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>Company Shares</label
				>
				<input
					type="text"
					name="shares"
					v-model="state.shares"
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
				/>
				<span class="error" v-if="v$.shares.$error">
					{{ v$.shares.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>Nationality</label
				>
				<v-select
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
					name="nationality"
					v-model="state.nationality"
					:options="genders"
				/>
				<span class="error" v-if="v$.nationality.$error">
					{{ v$.nationality.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>Citizenship Type</label
				>
				<v-select
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
					name="cittype"
					v-model="state.cittype"
					:options="genders"
				/>
				<span class="error" v-if="v$.cittype.$error">
					{{ v$.cittype.$errors[0].$message }}
				</span>
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>National ID / Passport Copy</label
				>
                <input
                    type="file"
                    name="nipncopy"
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
                />
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>KRA PIN Certificate</label
				>
                <input
                    type="file"
                    name="krapincopy"
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
                />
			</div>

			<div class="form-group col-md-6">
				<label class="color-dark fs-14 fw-500 align-center"
					>Tax Compliance Certificate</label
				>
                <input
                    type="file"
                    name="compliancecopy"
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
                />
			</div>
		</form>
	</div>
	<div class="steps-action d-flex">
		<button
			class="btn btn-primary btn-default px-3 justify-content-center flex align-items-center"
		>
			 Add Director
			<vue-feather
				type="plus"
				class="flex-1 ml-2 mr-0"
				size="18"
			/>
		</button>
	</div>
</template>

<script>
import { ref } from "vue";
import vSelect from "vue-select";
import VueFeather from "vue-feather";
import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import countriesjson from "@/assets/js/countries.json";
// import {message} from "ant-design-vue"

export default {
	name: "Step1",
	setup() {
		// sessionStorage.clear();

		const state = reactive({
			nipn: "",
			fname: "",
			lname: "",
			oname: "",
			gender: "",
			shares: "",
			nationality: "",
			cittype: null,
			country: "",
			phone: "",
			email: "",
		});

		const rules = {
			nipn: {
				required: helpers.withMessage(
					"Please enter the director's national ID or passport number.",
					required
				),
			},
			fname: {
				required: helpers.withMessage(
					"Please enter the director's first name.",
					required
				),
			},
			lname: {
				required: helpers.withMessage(
					"Please enter the director's last name.",
					required
				),
			},
			gender: {
				required: helpers.withMessage(
					"Please select a gender.",
					required
				),
			},
			shares: {
				required: helpers.withMessage(
					"Please enter the director's shares.",
					required
				),
			},
			nationality: {
				required: helpers.withMessage(
					"Please select a nationality.",
					required
				),
			},
			cittype: {
				required: helpers.withMessage(
					"Please select a citizenship type.",
					required
				),
			},
			country: {
				required: helpers.withMessage(
					"Please select a country code.",
					required
				),
			},
			phone: {
				required: helpers.withMessage(
					"Please enter the director's phone number.",
					required
				),
			},
			email: {
				required: helpers.withMessage(
					"Please enter the director's email address.",
					required
				),
				email: helpers.withMessage(
					"Please enter a valid email address.",
					required
				),
			},
		};

		const v$ = useVuelidate(rules, state);

		return {
			state,
			v$,
		};
	},
	data() {
		return {
			countries: [],
			sectors: [
				{
					label: "Sector 1",
					value: "Sector1",
				},
				{
					label: "Sector 2",
					value: "Sector2",
				},
				{
					label: "Sector 3",
					value: "Sector3",
				},
			],
			genders: [
				{
					label: "Male",
					value: "male",
				},
				{
					label: "Female",
					value: "female",
				},
			],
		};
	},
	components: {
		vSelect,
		VueFeather,
	},
	created() {
		this.countries = countriesjson
			.map((el) => {
				el.label = `${el.a3} +${el.pc}`;
				el.value = el.pc;
				return el;
			})
			.sort((a, b) => a.label.localeCompare(b.label));
	},
	methods: {
		next() {
			this.$store.dispatch("setCurrentIncrement");
			// this.v$.$validate();
			// if (!this.v$.$error) {
			//     console.log('success');
			//     // console.log(this.$store.state.currentOnboarding)
			//     return
			// } else {
			//     console.log('error');
			// }
		},
	},
};
</script>
