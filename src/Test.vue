<template>
	<div class="contents">
		<div class="checkout-progress-indicator content-center py-30">
			<div class="checkout-progress justify-content-center">
				<div
					class="d-flex align-items-center"
					v-for="(step, i) in steps"
					:key="i"
				>
					<div
						:class="`step ${i < current ? 'completed' : null} ${
							i === current ? 'current' : null
						}`"
						:id="i"
					>
						<span
							:class="`${i < current ? 'las la-check' : null}`"
							>{{ i >= current ? i + 1 : null }}</span
						>
						<span>{{ step.title }}</span>
					</div>
					<div class="current" v-if="i !== steps.length - 1">
						<img
							src="@/assets/img/svg/checkout.svg"
							alt="img"
							class="svg"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="card mt-30 px-30 pt-2 pb-30 border-color">
					<div class="card-body px-0">
						<!-- Company Information form -->
						<div v-show="current == 0" class="Vertical-form">
							<form action="#" class="row">
								<div class="form-group col-md-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Company Name</label
									>
									<input
										type="text"
										name="name"
										v-model="state.name"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
									<span class="error" v-if="v$.name.$error">
										{{ v$.name.$errors[0].$message }}
									</span>
								</div>

								<div class="form-group col-md-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Key Sector</label
									>
									<v-select
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
										name="sector"
										v-model="state.sector"
										:options="sectors"
									/>
									<span class="error" v-if="v$.sector.$error">
										{{ v$.sector.$errors[0].$message }}
									</span>
								</div>

								<div class="form-group col-md-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Company Phone Number</label
									>
									<div class="d-flex">
										<v-select
											style="width: 40%"
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
											name="country"
											v-model="state.country"
											:options="countries"
										/>
										<span
											class="d-flex align-items-center mx-2"
											>-</span
										>
										<a-input
											type="text"
											name="phone"
											v-model="state.phone"
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
										/>
									</div>
									<span
										class="error"
										v-if="v$.country.$error"
									>
										{{ v$.country.$errors[0].$message }}
									</span>
									<span class="error" v-if="v$.phone.$error">
										{{ v$.phone.$errors[0].$message }}
									</span>
								</div>

								<div class="form-group col-md-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
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
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Physical Address</label
									>
									<input
										type="text"
										name="phyaddr"
										v-model="state.phyaddr"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
									<span
										class="error"
										v-if="v$.phyaddr.$error"
									>
										{{ v$.phyaddr.$errors[0].$message }}
									</span>
								</div>

								<div class="form-group col-md-3">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Postal Address</label
									>
									<input
										type="text"
										name="postaladdr"
										v-model="state.postaladdr"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
									<span
										class="error"
										v-if="v$.postaladdr.$error"
									>
										{{ v$.postaladdr.$errors[0].$message }}
									</span>
								</div>

								<div class="form-group col-md-3">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Postal Code</label
									>
									<input
										type="text"
										name="postalcode"
										v-model="state.postalcode"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
									<span
										class="error"
										v-if="v$.postalcode.$error"
									>
										{{ v$.postalcode.$errors[0].$message }}
									</span>
								</div>
							</form>
						</div>

						<!-- Directors form -->
						<div class="Vertical-form" v-show="current == 1">
							<form action="#" class="row">
								<div class="form-group col-md-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
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
									<label
										class="color-dark fs-14 fw-500 align-center"
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
									<label
										class="color-dark fs-14 fw-500 align-center"
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
									<label
										class="color-dark fs-14 fw-500 align-center"
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
									<label
										class="color-dark fs-14 fw-500 align-center"
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
										<span
											class="d-flex align-items-center mx-2"
											>-</span
										>
										<input
											type="text"
											name="phone"
											v-model="state.phone"
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
										/>
									</div>
									<span
										class="error"
										v-if="v$.country.$error"
									>
										{{ v$.country.$errors[0].$message }}
									</span>
									<span class="error" v-if="v$.phone.$error">
										{{ v$.phone.$errors[0].$message }}
									</span>
								</div>

								<div class="form-group col-md-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
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
									<label
										class="color-dark fs-14 fw-500 align-center"
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
									<label
										class="color-dark fs-14 fw-500 align-center"
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
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Nationality</label
									>
									<v-select
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
										name="nationality"
										v-model="state.nationality"
										:options="genders"
									/>
									<span
										class="error"
										v-if="v$.nationality.$error"
									>
										{{ v$.nationality.$errors[0].$message }}
									</span>
								</div>

								<div class="form-group col-md-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Citizenship Type</label
									>
									<v-select
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
										name="cittype"
										v-model="state.cittype"
										:options="genders"
									/>
									<span
										class="error"
										v-if="v$.cittype.$error"
									>
										{{ v$.cittype.$errors[0].$message }}
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>
				<!-- ends: .card -->
				<div
					class="button-group d-flex pt-3 justify-content-between flex-wrap my-3"
				>
					<button
						@click="prev"
						v-show="current !== 0"
						class="btn btn-outline-primary btn-default btn-squared fw-400 text-capitalize m-1"
					>
						<i class="las la-arrow-left mr-10"></i>Previous
					</button>
					<button
						@click="next"
						v-show="current !== steps.length - 1"
						class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
					>
						Save & Next<i class="ml-10 mr-0 las la-arrow-right"></i>
					</button>
				</div>
			</div>
			<!-- ends: .col -->
		</div>
		<!-- ends: .global-shadow -->
	</div>
</template>
<script>
import vSelect from "vue-select";
import VueFeather from "vue-feather";
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import countriesjson from "@/assets/js/countries.json";

export default {
	setup() {
		const state = reactive({
			// Company information
			name: "",
			sector: "",
			country: "",
			phone: "",
			email: "",
			phyaddr: "",
			postaladdr: "",
			postalcode: "",

			// Directors
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
			// Company information
			name: {
				required: helpers.withMessage(
					"Please enter the company name.",
					required
				),
			},
			sector: {
				required: helpers.withMessage(
					"Please select the key sector.",
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
					"Please enter the company's phone number.",
					required
				),
			},
			email: {
				required: helpers.withMessage(
					"Please enter the company's email address.",
					required
				),
				email: helpers.withMessage(
					"Please enter a valid email address.",
					required
				),
			},
			phyaddr: {
				required: helpers.withMessage(
					"Please enter the company's physical address.",
					required
				),
			},
			postaladdr: {
				required: helpers.withMessage(
					"Please enter the company's postal address.",
					required
				),
			},
			postalcode: {
				required: helpers.withMessage(
					"Please enter the company's postal code.",
					required
				),
			},

			// Directors
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
			current: 0,
			steps: [
				{
					title: "Company Information",
				},
				{
					title: "Directors",
				},
				{
					title: "Documents",
				},
			],
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
			return (this.current += 1);
		},
		prev() {
			return (this.current -= 1);
		},
	},
};
</script>
