<template>
	<main class="main-content">
		<div class="signUP-admin">
			<div class="container-fluid">
				<div class="row justify-content-center">
					<div class="col-xl-6 p-0">
						<div
							class="
								signUP-admin-left
								signIn-admin-left
								position-relative
								d-flex
								align-items-center
							"
						>
							<div class="signUP-admin-left__content">
								<h1 class="text-white">
									Service title goes here
								</h1>
							</div>
							<!-- End: .signUP-admin-left__content  -->
						</div>
						<!-- End: .signUP-admin-left  -->
					</div>
					<!-- End: .col-xl-4  -->
					<div class="col-xl-6">
						<div
							class="
								signUp-admin-right
								signIn-admin-right
								p-md-40 p-10
								d-flex
								align-items-center
								h-100
							"
						>
							<div class="row justify-content-center flex-grow-1">
								<div class="col-xl-7 col-lg-8 col-md-12">
									<div class="edit-profile">
										<div class="card border-0 shadow-none">
											<div
												class="
													card-header
													justify-content-center
													border-0
													pb-md-15 pb-10
													pt-md-20 pt-10
												"
											>
												<div
													class="edit-profile__title"
												>
													<img
														src="@/assets/img/logo.png"
														width="120"
													/>
												</div>
											</div>
											<div class="card-body">
												<div class="edit-profile__body">
													<p
														class="
															text-center
															font-weight-bold
														"
													>
														Log in to youreBusiness account
													</p>
													<div
														class="form-group mb-20"
													>
														<input
															type="email"
															class="form-control"
															id="email"
															v-model="email"
															placeholder="Email"
														/>
														<p class="text-sm error" v-if="errMsg">'sfsdf</p>
													</div>
													<div
														class="form-group mb-15"
													>
														<div
															class="
																position-relative
															"
														>
															<input
																id="password"
																type="password"
																class="form-control"
																v-model="password"
																placeholder="Password"
															/>
														</div>
													</div>
													<div
														class="
															button-group
															d-block
															pt-1
															justify-content-md-start
															justify-content-center
														"
													>
														<button
															class="
																btn
																btn-primary
																btn-sm
																btn-squared
																text-capitalize
																lh-normal
																px-50
																py-15
																signIn-createBtn
																w-100
															"
															@click="
																login
															"
														>
															Login
														</button>
													</div>
												</div>
											</div>
											<!-- End: .card-body -->
										</div>
										<!-- End: .card -->
									</div>
									<!-- End: .edit-profile -->
								</div>
								<!-- End: .col-xl-5 -->
							</div>
						</div>
						<!-- End: .signUp-admin-right  -->
					</div>
					<!-- End: .col-xl-8  -->
				</div>
			</div>
		</div>
		<!-- End: .signUP-admin  -->
	</main>
</template>

<script>
import { ref } from "vue";
import router from "../router";
// import useRouter from "vue-router"
import {signInWithEmailAndPassword, getAuth} from 'firebase/auth'
import {message} from 'ant-design-vue'

// const router = useRouter()

export default {
	setup() {
		const email = ref("")	
		const password = ref("")
		const errMsg = ref()
		
		return {
			email,
			password,
			errMsg,
		}
	},
	name: "Login",
	methods: {
		message: function () {
			return message
		},
		login: function () {
			const auth = getAuth()
			signInWithEmailAndPassword(auth, email.value, password.value)
				.then(()=>{
					router.push('/')
					message.success('Welcome.')
				})
				.catch((err)=>{
					// console.log(err);
					// switch (err) {
					// 	case "FirebaseError: Firebase: Error (auth/invalid-email).":
					// 		message.error('The email address is invalid.')
					// 		break;
					// 	case "auth/user-not-found":
					// 		message.error('No account with that email was found.')
					// 		break;
					// 	case "auth/wrong-password":
					// 		message.error('The password is incorrect.')
					// 		break;
					// 	default:
					// 		break;
					// }
					message.error('The email or password is incorrect.')
				})
		},
	},
};
</script>