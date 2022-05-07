<template>
	<div class="contents">
		<div class="p-4">
			<h4 class="my-3">Send OTP code to Phone</h4>
			<form action="#" class="row">
				<div class="col-12 my-2">
					<label for="phone">Phone number:</label>
					<input
						type="tel"
						name="phone"
						id="phone"
						v-model="otpform.phone"
						@input="generateRecaptcha"
					/>
				</div>
				<div class="col-12 my-2" v-show="otpToggle">
					<label for="otp">OTP:</label>
					<input
						type="number"
						name="otp"
						id="otp"
						v-model="otpform.otp"
					/>
				</div>
				<div class="col-12 my-2">
					<button type="button" @click="sendVerif">
						Request OTP
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { ref, reactive } from "vue";
// import * as firebase from 'firebase';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
// import AfricasTalking from "africastalking"
// const AfricasTalking = require("africastalking")


export default {
	setup() {
		// const africastalking = AfricasTalking({
		// apiKey: '1eb343df09a289854b5915a02a99d6a260c40e6cd9f3d071c8d317bf47bb70e3',
		// username: 'sandbox'
		// });

		const otpform = reactive({
			phone: null,
			otp: null,
		});

		const otpToggle = ref(false)

		const auth = getAuth();
		auth.languageCode = 'it';

		// const  recaptchaVerifier = ref();

		return {
			otpform,
			otpToggle,
			// africastalking,
			auth,
			// recaptchaVerifier: new RecaptchaVerifier('recaptcha-container'),
		};
	},

	updated() {
			console.log(new RecaptchaVerifier('recaptcha-container'));
	},

	methods: {
		// africastalking() {
		// 	return africastalking;
		// },
		// recaptchaVerifier(){
		// 	return new RecaptchaVerifier;
		// },

		generateRecaptcha() {
			// window.recaptchaVerifier = 'dsds'
			// window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
			// 	'size': 'invisible',
			// 	'callback': (response) => {
			// 		// reCAPTCHA solved, allow signInWithPhoneNumber.
			// 		// onSignInSubmit();
			// 		console.log(response);
			// 	},
			// 	'expired-callback': (err) => {
			// 		console.log(err);
			// 	},
			// }, this.auth);
		},

		async sendVerif() {
			// Africastalking
			// try {
			// 	const result= await this.africastalking.SMS.send({
			// 		to: '+254712254001',
			// 		message: 'Hey AT Ninja! Wassup...',
			// 		from: '+254712254001'
			// 	});
			// 	console.log(result);
			// } catch(ex) {
			// 	console.error(ex);
			// }

			// Firebase otp
			// const appVerifier = window.recaptchaVerifier
			// console.log(appVerifier);
			// signInWithPhoneNumber(this.auth, this.otpform.phone, appVerifier).then(confirmation=>{
			// 	console.log(confirmation);
			// 	window.confirmation = confirmation;
			// }).catch(error=>{
			// 	console.log(error);
			// })
		},
	},

	async created() {
		// sessionStorage.setItem('recaptchaVerifier', new RecaptchaVerifier('recaptcha-container', {
		// 	size: 'invisible',
		// 	callback: (response) => {
		// 		// reCAPTCHA solved, allow signInWithPhoneNumber.
		// 		// onSignInSubmit();
		// 		console.log(response);
		// 	},
		// }, await getAuth()))
		// console.log(sessionStorage);
		// Start Firebase invisible reCAPTCHA verifier
		// window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
		// 	size: 'invisible',
		// 	callback: (response) => {
		// 		// reCAPTCHA solved, allow signInWithPhoneNumber.
		// 		// onSignInSubmit();
		// 		console.log(response);
		// 	},
		// }, this.auth);

		// window.recaptchaVerifier.render().then((widgetId) => {
		// 	window.recaptchaWidgetId = widgetId;
		// });
	},
};
</script>
