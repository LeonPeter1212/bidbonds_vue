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
									<router-link to="/customers/"
										>Customers</router-link
									>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link to="#">{{
										currentCustomer.name
									}}</router-link>
								</li>
							</ul>
						</div>
						<h4 class="text-capitalize breadcrumb-title mb-4">
							Profile Overview
						</h4>
					</div>
					<div class="col-xxl-3 col-lg-4 col-sm-12">
						<!-- Profile Acoount -->
						<div class="card mb-25">
							<div class="card-body text-center p-0">
								<div
									class="account-profile border-bottom pt-25 px-25 pb-0 d-flex align-items-center"
								>
									<div class="ap-img mb-20 pro_img_wrapper">
										JD
									</div>
									<div class="ap-nameAddress pb-3 pl-3">
										<h5 class="ap-nameAddress__title">
											{{ currentCustomer.name }}
										</h5>
										<p
											class="ap-nameAddress__subTitle fs-14 m-0"
										>
											{{ currentCustomer.accountType }}
										</p>
									</div>
								</div>
								<div class="ps-tab p-20 pb-25">
									<ul class="d-flex flex-column">
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120 text-sm"
													>Created:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													{{
														moment(
															currentCustomer
																.created.at
														).format("llll")
													}}
												</p>
											</div>
										</li>
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120 text-sm"
													>By:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													{{
														currentCustomer.created
															.by
													}}
												</p>
											</div>
										</li>
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120 text-sm"
													>Status:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													<span
														class="bg-opacity-success color-success rounded-pill userDatatable-content-status active text-sm"
														v-if="
															currentCustomer.status ==
															'active'
														"
														>Active</span
													>
													<span
														class="bg-opacity-warning color-warning rounded-pill userDatatable-content-status active text-sm"
														v-else
														>Inactive</span
													>
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<!-- Profile Acoount End -->
					</div>
					<div class="col-xxl-9 col-lg-8 col-sm-12">
						<div class="row">
							<div class="col-12">
								<div class="card mb-4">
									<div class="card-header">
										<h6>
											Account Information
										</h6>
									</div>
									<ul class="card-body list-box p-0">
										<li class="list-box__item">
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120 text-sm"
													>Personal details:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													{{ currentCustomer.name }}
												</p>
											</div>
										</li>
										<li class="list-box__item">
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120 text-sm"
													>Phone number:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													{{ currentCustomer.phone }}
												</p>
											</div>
										</li>
										<li class="list-box__item">
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120 text-sm"
													>Email:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													{{ currentCustomer.email }}
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-12">
								<div class="card">
									<div class="card-header">
										<h6>
											Account Activity
										</h6>
									</div>
									<div class="card-body p-0">
										<div class="table4 bg-white">
											<div class="table-responsive">
												<table class="table mb-0">
													<tbody>
														<tr>
															<td>
																<div
																	class="userDatatable-content"
																>
																	Companies
																</div>
															</td>
															<td>
																<div
																	class="userDatatable-content"
																>
																	{{
																		currentCustomer
																			.companies
																			.length
																	}}
																</div>
															</td>
															<td>
																<div
																	class="userDatatable-content text-right"
																>
																	<router-link
																		:to="`/customers/${currentCustomer.id}/companies/`"
																		>View</router-link
																	>
																</div>
															</td>
														</tr>

														<tr>
															<td>
																<div
																	class="userDatatable-content"
																>
																	Bid Bonds
																</div>
															</td>
															<td>
																<div
																	class="userDatatable-content"
																>
																	{{
																		currentCustomer
																			.bidbonds
																			.length
																	}}
																</div>
															</td>
															<td>
																<div
																	class="userDatatable-content text-right"
																>
																	<router-link
																		to="#"
																		>View</router-link
																	>
																</div>
															</td>
														</tr>

														<tr>
															<td>
																<div
																	class="userDatatable-content"
																>
																	Subscriptions
																</div>
															</td>
															<td>
																<div
																	class="userDatatable-content"
																>
																	{{
																		currentCustomer
																			.subs
																			.length
																	}}
																</div>
															</td>
															<td>
																<div
																	class="userDatatable-content text-right"
																>
																	<router-link
																		to="#"
																		>View</router-link
																	>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Card } from "ant-design-vue";
import moment from "moment";

export default {
	name: "Profile",
	data: () => ({
		currentCustomer: null,
	}),
	created() {
		this.currentCustomer = this.$store.getters.getCustomers.filter(
			(el) => el.id == this.$route.params.id
		)[0];
	},
	components: {
		ACard: Card,
	},
	methods: {
		moment: function () {
			return moment();
		},
	},
};
</script>
