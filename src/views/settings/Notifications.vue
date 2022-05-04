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
									<router-link to="#"
										>Notifications Settings</router-link
									>
								</li>
							</ul>
						</div>
						<h4 class="text-capitalize breadcrumb-title mb-4">
							Personalize Notifications
						</h4>
					</div>

					<form action="#" class="col-12">
						<div class="list-box settings">
							<ul>
								<li class="list-box__item px-0">
									<h6 class="mb-3">Do not disturb</h6>
									<a-switch
										v-model:checked="checked1"
										checked-children="Unmute"
										un-checked-children="Mute"
									/>
								</li>
								<li class="list-box__item px-0">
									<h6 class="mb-3">Days</h6>
									<p>
										I would like to receive notifications on
										the following days:
									</p>

									<div class="d-flex">
										<div class="flex-item mr-5">
											<div
												class="checkbox-theme-default custom-checkbox py-2"
											>
												<input
													class="checkbox"
													type="checkbox"
												/>
												<label for="check-grp-1">
													<span
														class="checkbox-text text-black"
														>Sunday</span
													>
												</label>
											</div>
										</div>
										<div class="flex-item mr-5">
											<div
												class="checkbox-theme-default custom-checkbox py-2"
											>
												<input
													class="checkbox"
													type="checkbox"
												/>
												<label for="check-grp-1">
													<span
														class="checkbox-text text-black"
														>Monday</span
													>
												</label>
											</div>
										</div>
										<div class="flex-item mr-5">
											<div
												class="checkbox-theme-default custom-checkbox py-2"
											>
												<input
													class="checkbox"
													type="checkbox"
												/>
												<label for="check-grp-1">
													<span
														class="checkbox-text text-black"
														>Tuesday</span
													>
												</label>
											</div>
										</div>
										<div class="flex-item mr-5">
											<div
												class="checkbox-theme-default custom-checkbox py-2"
											>
												<input
													class="checkbox"
													type="checkbox"
												/>
												<label for="check-grp-1">
													<span
														class="checkbox-text text-black"
														>Wednesday</span
													>
												</label>
											</div>
										</div>
										<div class="flex-item mr-5">
											<div
												class="checkbox-theme-default custom-checkbox py-2"
											>
												<input
													class="checkbox"
													type="checkbox"
												/>
												<label for="check-grp-1">
													<span
														class="checkbox-text text-black"
														>Thursday</span
													>
												</label>
											</div>
										</div>
										<div class="flex-item mr-5">
											<div
												class="checkbox-theme-default custom-checkbox py-2"
											>
												<input
													class="checkbox"
													type="checkbox"
												/>
												<label for="check-grp-1">
													<span
														class="checkbox-text text-black"
														>Friday</span
													>
												</label>
											</div>
										</div>
										<div class="flex-item mr-5">
											<div
												class="checkbox-theme-default custom-checkbox py-2"
											>
												<input
													class="checkbox"
													type="checkbox"
												/>
												<label for="check-grp-1">
													<span
														class="checkbox-text text-black"
														>Saturday</span
													>
												</label>
											</div>
										</div>
									</div>
								</li>
								<li class="list-box__item px-0">
									<h6 class="mb-3">
										<input
											class="checkbox mr-2"
											type="checkbox"
										/>
										Schedule
									</h6>
									<p>
										I would like to receive notifications
										between:
									</p>
									<div class="d-flex w-25">
										<input
											type="text"
											name="phone"
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
										/>
										<span
											class="d-flex align-items-center mx-2"
											>and</span
										>
										<input
											type="text"
											name="phone"
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
										/>
									</div>
								</li>
								<li class="list-box__item px-0">
									<h6 class="mb-3">
										Preferred notification method
									</h6>
									<p>
										I would like to receive notifications
										via:
									</p>
									<div class="d-flex w-50">
										<div class="flex-item d-flex mr-4 border p-3 rounded">
											<input
												type="checkbox"
												class="checkbox mr-3"
											/>
											<div class="contactinfo">
												<h6 class="mb-2">Phone number</h6>
												<span>0712345678</span>
											</div>
										</div>
										<div class="flex-item d-flex mr-4 border p-3 rounded">
											<input
												type="checkbox"
												class="checkbox mr-3"
											/>
											<div class="contactinfo">
												<h6 class="mb-2">Email address</h6>
												<span>0712345678</span>
											</div>
										</div>
									</div>
								</li>
								<li class="list-box__item px-0">
									<button
										class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
                                        disabled
									>
										Save changes
									</button>
                                    </li>
							</ul>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { Switch } from "ant-design-vue";
import VueFeather from "vue-feather";

export default {
	setup() {
		const state = reactive({
			checked1: true,
		});
		return { ...toRefs(state) };
	},
	components: {
		ASwitch: Switch,
		VueFeather,
	},
};
</script>
