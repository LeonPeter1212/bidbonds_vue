<template>
	<div class="Vertical-form">
		<form action="#" class="row">

			<div class="form-group col-md-12">
				<label class="color-dark fs-14 fw-500 align-center"
					>Company</label
				>
				<v-select
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
					name="company"
				/>
			</div>

			<div class="form-group col-md-12">
				<label class="color-dark fs-14 fw-500 align-center"
					>Beneficiary</label
				>
				<v-select
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
					name="company"
				/>
			</div>

			<div class="form-group col-md-12">
				<label class="color-dark fs-14 fw-500 align-center"
					>Dates</label
				>
				<v-select
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
					name="company"
				/>
			</div>

			<div class="form-group col-md-12">
				<label class="color-dark fs-14 fw-500 align-center"
					>Amount (KES)</label
				>
				<div class="d-flex align-items-center">
					<input
						type="text"
						name="number"
						v-model="state.phone"
						class="form-control ih-medium ip-gray radius-xs b-light px-15"
					/>
                    <span class="d-flex align-items-center mx-2">-</span>
					<input
						type="text"
						name="number"
						v-model="state.phone"
						class="form-control ih-medium ip-gray radius-xs b-light px-15"
					/>
				</div>
			</div>

			<div class="form-group col-md-12">
				<label class="color-dark fs-14 fw-500 align-center"
					>Status</label
				>
				<v-select
					class="form-control ih-medium ip-gray radius-xs b-light px-15"
					name="company"
				/>
			</div>
		</form>
	</div>
	<div class="steps-action d-flex">
		<button
			class="btn btn-primary btn-default px-3 justify-content-center flex align-items-center mr-2"
		>
			 Generate Report
			<vue-feather
				type="file"
				class="flex-1 ml-2 mr-0"
				size="18"
			/>
		</button>
		<button
			class="btn btn-outline-primary btn-default px-3 justify-content-center flex align-items-center mr-2"
		>
			 Cancel
			<vue-feather
				type="x-circle"
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
