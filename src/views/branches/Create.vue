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
									<router-link to="#"> Branches </router-link>
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
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
								</div>

								<div class="form-group col-lg-6">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Branch Code</label
									>
									<input
										type="text"
										name="name"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
								</div>

								<div class="form-group col-lg-12">
									<label
										class="color-dark fs-14 fw-500 align-center"
										>Physical Address</label
									>
									<input
										type="text"
										name="name"
										class="form-control ih-medium ip-gray radius-xs b-light px-15"
									/>
								</div>

								<div class="col-12">
									<button
										class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
									>
										Create Branch<i
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
