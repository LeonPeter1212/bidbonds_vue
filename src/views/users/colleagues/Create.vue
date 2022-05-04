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
									<router-link to="#"> Users </router-link>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link to="#"> Colleagues </router-link>
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
										name="name"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
								</div>

								<div class="form-group col-lg-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Last Name</label
									>
									<input
										type="text"
										name="name"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
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
										/>
										<span
											class="d-flex align-items-center mx-2"
											>-</span
										>
										<input
											type="text"
											name="phone"
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
										/>
									</div>
								</div>

								<div class="form-group col-lg-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Email</label
									>
									<input
										type="email"
										name="name"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
								</div>

								<div class="form-group col-md-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Branch</label
									>
									<v-select
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
										name="branch"
									/>
								</div>

								<div class="form-group col-md-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Assign Roles</label
									>
									<v-select
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
										name="sector"
									/>
								</div>

								<div class="col-12">
									<button
										class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
									>
										Create Colleague<i
											class="ml-10 mr-0 las la-arrow-right"
										></i>
									</button>
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
import { Card } from "ant-design-vue";
import VueFeather from "vue-feather";
import vSelect from "vue-select";

export default {
	components: {
		ACard: Card,
		VueFeather,
		vSelect,
	},
};
</script>
