<template>
	<div class="steps-content">
		<div class="card card-Vertical card-default card-md my-4">
			<div class="card-body pb-md-30">
				<div class="Vertical-form">
					<form action="#" class="row">
						<div class="form-group col-md-6">
							<label class="color-dark fs-14 fw-500 align-center"
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
							<label class="color-dark fs-14 fw-500 align-center"
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
							<label class="color-dark fs-14 fw-500 align-center"
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
								<span class="d-flex align-items-center mx-2">-</span>
								<a-input
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
								>Physical Address</label
							>
							<input
								type="text"
								name="phyaddr"
								v-model="state.phyaddr"
								class="form-control ih-medium ip-gray radius-xs b-light px-15"
							/>
							<span class="error" v-if="v$.phyaddr.$error">
								{{ v$.phyaddr.$errors[0].$message }}
							</span>
						</div>

						<div class="form-group col-md-3">
							<label class="color-dark fs-14 fw-500 align-center"
								>Postal Address</label
							>
							<input
								type="text"
								name="postaladdr"
								v-model="state.postaladdr"
								class="form-control ih-medium ip-gray radius-xs b-light px-15"
							/>
							<span class="error" v-if="v$.postaladdr.$error">
								{{ v$.postaladdr.$errors[0].$message }}
							</span>
						</div>

						<div class="form-group col-md-3">
							<label class="color-dark fs-14 fw-500 align-center"
								>Postal Code</label
							>
							<input
								type="text"
								name="postalcode"
								v-model="state.postalcode"
								class="form-control ih-medium ip-gray radius-xs b-light px-15"
							/>
							<span class="error" v-if="v$.postalcode.$error">
								{{ v$.postalcode.$errors[0].$message }}
							</span>
						</div>

						<div class="form-group col-md-6">
							<label class="color-dark fs-14 fw-500 align-center"
								>Certificate of Incorporation</label
							>
							<input
								type="file"
								name="incorpcert"
								class="form-control ih-medium ip-gray radius-xs b-light px-15"
							/>
						</div>

						<div class="form-group col-md-6">
							<label class="color-dark fs-14 fw-500 align-center"
								>CR12 Certificate</label
							>
							<input
								type="file"
								name="cr12"
								class="form-control ih-medium ip-gray radius-xs b-light px-15"
							/>
						</div>

						<div class="form-group col-md-6">
							<label class="color-dark fs-14 fw-500 align-center"
								>KRA PIN Certificate</label
							>
							<input
								type="file"
								name="krapin"
								class="form-control ih-medium ip-gray radius-xs b-light px-15"
							/>
						</div>

						<div class="form-group col-md-6">
							<label class="color-dark fs-14 fw-500 align-center"
								>Tax Compiance Certificate</label
							>
							<input
								type="file"
								name="compiance"
								class="form-control ih-medium ip-gray radius-xs b-light px-15"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div class="steps-action d-flex">
		<button
			class="btn btn-primary btn-default px-3 justify-content-center flex align-items-center"
			@click="next"
		>
			Directors
			<vue-feather
				type="arrow-right"
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
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import countriesjson from "@/assets/js/countries.json";

export default {
	name: "Step1",
	setup() {
		const state = reactive({
			name: "",
			sector: "",
			country: "",
			phone: "",
			email: "",
			phyaddr: "",
			postaladdr: "",
			postalcode: "",
		});

		const rules = {
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
			this.v$.$validate();
			if (!this.v$.$error) {
				// console.log('success');
			    // console.log(this.$store.state.currentOnboarding)
				this.$store.dispatch("setCurrentIncrement");
			    return
			} else {
			    console.log('error');
			}
		},
		prev() {
			this.$store.dispatch("setCurrentDecrement");
		}
	},
};
</script>
