<template>
    <div class="contents">
        <div class="container-fluid">
			<div class="social-dash-wrap">
				<div class="row">
					<!-- <div class="col-lg-12">
                                </div> -->

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
									<router-link to="/companies/manage"
										>Companies</router-link
									>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link to="#">{{
										currentCompany.name
									}}</router-link>
								</li>
							</ul>
						</div>

						<!-- <div class="backlink my-4" @click="$router.go(-1)">
							<vue-feather
								type="chevrons-left"
								size="18"
							></vue-feather>
							<span class="ml-1">Go back</span>
						</div> -->
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
											{{ currentCompany.name }}
										</h5>
									</div>
								</div>
								<div class="ps-tab p-20 pb-25">
									<ul class="d-flex flex-column">
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120"
													>Phone number:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													{{ currentCompany.phone }}
												</p>
											</div>
										</li>
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120"
													>Email:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													{{ currentCompany.email }}
												</p>
											</div>
										</li>
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120"
													>Physical address:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													{{ currentCompany.phyaddr }}
												</p>
											</div>
										</li>
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120"
													>Postal address:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													{{
														currentCompany.postaladdr
													}}
												</p>
											</div>
										</li>
									</ul>
									<hr class="my-4" />
									<ul class="d-flex flex-column">
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120"
													>Key sector:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													{{
														currentCompany.sector
															.label
													}}
												</p>
											</div>
										</li>
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
											>
												<span
													class="font-bold text-black min120"
													>Onboarding:</span
												>
												<p
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													<span
														class="bg-opacity-success color-success rounded-pill userDatatable-content-status active text-sm"
														v-if="
															currentCompany.onboarding ==
															'completed'
														"
														>Completed</span
													>
													<span
														class="bg-opacity-warning color-warning rounded-pill userDatatable-content-status active text-sm"
														v-else
														>Pending</span
													>
												</p>
											</div>
										</li>
									</ul>
									<hr class="my-4" />
									<div class="flex text-left">
										<button
											class="btn btn-sm btn-outline-info d-inline-block mt-1 mr-1"
											v-if="
												currentCompany.onboarding ==
												'completed'
											"
										>
											Blacklist
										</button>
										<router-link
											class="btn btn-info btn-sm d-inline-block mt-1 mr-1"
											to="#"
										>
											Onboarding Report
										</router-link>
										<button
											@click="modalVisible = true"
											class="btn btn-info btn-transparent-info btn-sm d-inline-block mt-1 mr-1"
										>
											Transfer
										</button>

										<a-modal
											v-model:visible="modalVisible"
											centered
											title="Transfer Company"
											@ok="modalVisible = false"
											:footer="null"
										>
											<form action="#" class="row">
												<div
													class="form-group col-md-12"
												>
													<label
														class="color-dark fs-14 fw-500 align-center"
														>Transfer company to
														this owner:</label
													>
													<v-select
														class="form-control ih-medium ip-gray radius-xs b-light px-15"
														name="transferto"
													/>
												</div>
												<div class="col-12">
													<button
														class="btn btn-primary btn-sm d-inline-block mt-1 mr-1"
													>
														Transfer
													</button>
												</div>
											</form>
										</a-modal>
									</div>
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
										<h6>Company Information</h6>
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
																	Directors
																</div>
															</td>
															<td>
																<div
																	class="userDatatable-content"
																>
																	{{
																		currentCompany
																			.directors
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
																	Documents
																</div>
															</td>
															<td>
																<div
																	class="userDatatable-content"
																>
																	0
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
							<div class="col-12">
								<div class="card">
									<div class="card-header">
										<h6>Company Activity</h6>
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
																	Bid bonds
																</div>
															</td>
															<td>
																<div
																	class="userDatatable-content"
																>
																	0
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
																	Performance
																	bonds
																</div>
															</td>
															<td>
																<div
																	class="userDatatable-content"
																>
																	0
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