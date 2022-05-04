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
									<router-link to="#">
										Customers
									</router-link>
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
						<h4>Create Customer</h4>
					</div>

					<div class="col-lg-7">
						<div class="d-flex mb-4 bg-white border p-3 rounded">
							<input type="checkbox" class="checkbox mr-3" />
							<div class="contactinfo">
								<h6 class="mb-2">Account holder</h6>
								<span
									>Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Temporibus voluptas
									deserunt placeat debitis quibusdam
									aspernatur inventore a dolor! Assumenda
									reprehenderit sed illum cumque, culpa saepe
									ea eos iusto exercitationem ipsum</span
								>
							</div>
						</div>
						<div class="d-flex mb-4 bg-white border p-3 rounded">
							<input type="checkbox" class="checkbox mr-3" />
							<div class="contactinfo">
								<h6 class="mb-2">Non-account holder</h6>
								<span
									>Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Rem nostrum aliquam cumque
									harum ea aperiam similique consequuntur
									natus voluptatibus aut totam omnis, odit,
									repellat nesciunt cupiditate! Eos quisquam
									exercitationem maxime</span
								>
							</div>
						</div>
					</div>

					<div class="col-lg-5">
						<div class="Vertical-form">
							<form action="#">
								<div class="card">
									<div class="card-body">
										<div class="row">
											<div class="form-group col-lg-12">
												<label
													class="color-dark fs-14 fw-500 align-center"
													>Name</label
												>
												<input
													type="text"
													name="name"
													class="form-control ih-medium ip-gray radius-xs b-light px-15"
												/>
											</div>

											<div class="form-group col-md-12">
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

											<div class="form-group col-lg-12">
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

											<div class="col-12">
												<button
													class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
												>
													Create Account
												</button>
											</div>
										</div>
									</div>
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
