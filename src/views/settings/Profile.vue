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
									<router-link to="#">Profile settings</router-link>
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
											John Doe
										</h5>
										<p
											class="ap-nameAddress__subTitle fs-14 m-0"
										>
											Super Administrator
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
														moment().format("llll")
													}}
												</p>
											</div>
										</li>
										<li>
											<div
												class="statistics-item statistics-default d-flex flex-row flex-wrap align-items-center my-2"
											>
												<span
													class="font-bold text-black min120 text-sm"
													>Status:</span
												>
												<div
													class="statistics-item__number ml-2 mt-0 text-sm"
												>
													<span
														class="bg-opacity-success color-success rounded-pill userDatatable-content-status active text-sm"
														>Active</span
													>
													<span
														class="bg-opacity-warning color-warning rounded-pill userDatatable-content-status active text-sm"
														>Inactive</span
													>
													<span
														class="bg-opacity-danger color-danger rounded-pill userDatatable-content-status active text-sm"
														>Disabled</span
													>
													<span
														class="bg-opacity-dark color-dark rounded-pill userDatatable-content-status active text-sm"
														>Blacklisted</span
													>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
                            <div class="card-footer">
                                <form action="#" class="row">


                                    <div class="col-12">
									<input
										type="password"
										name="password"
										class="form-control ih-medium ip-gray radius-xs b-light px-15 mb-3"
                                        placeholder="Old password"
									/>
                                    </div>
                                    <div class="col-12">
									<input
										type="password"
										name="password"
										class="form-control ih-medium ip-gray radius-xs b-light px-15 mb-3"
                                        placeholder="New password"
									/>
                                    </div>
                                    <div class="col-12">
									<input
										type="password"
										name="password"
										class="form-control ih-medium ip-gray radius-xs b-light px-15 mb-3"
                                        placeholder="Confirm password"
									/>
                                    </div>
                                    <div class="col-12">
										<button
											class="btn btn-info btn-sm d-inline-block mt-1 mr-1"
											to="#"
										>
											Change Password
										</button>
                                    </div>
                                    <div class="col-12">
										<button
											class="btn btn-outline-info btn-sm d-inline-block mt-1 mr-1"
											to="#"
										>
											Cancel
										</button>
										<button
											class="btn btn-info btn-sm d-inline-block mt-1 mr-1"
											to="#"
                                            disabled
										>
											Save Changes
										</button>
                                    </div>
                                </form>
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
									<div class="card-body p-0">
										<div
											class="atbd-collapse atbd-accordion"
										>
											<div class="atbd-collapse-item">
												<div
													class="atbd-collapse-item__header"
												>
													<div
														class="item-link py-1"
														data-toggle="collapse"
														data-target="#collapse-body-a-1"
														aria-expanded="true"
														aria-controls="collapse-body-a-1"
													>
														<div
															class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
														>
															<span
																class="font-bold text-black min120 text-sm"
																>Personal
																details:</span
															>
															<p
																class="statistics-item__number ml-2 mt-0 text-sm"
															>
																John Doe
															</p>
															<router-link to="#" class="flex-grow-1 text-right">edit</router-link>
														</div>
													</div>
												</div>
												<div
													id="collapse-body-a-1"
													class="collapse atbd-collapse-item__body"
												>
													<div
														class="collapse-body-text"
													></div>
												</div>
											</div>

											<div class="atbd-collapse-item">
												<div
													class="atbd-collapse-item__header"
												>
													<div
														class="item-link py-1"
														data-toggle="collapse"
														data-target="#collapse-body-a-2"
														aria-expanded="true"
														aria-controls="collapse-body-a-2"
													>
														<div
															class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
														>
															<span
																class="font-bold text-black min120 text-sm"
																>Phone
																number:</span
															>
															<p
																class="statistics-item__number ml-2 mt-0 text-sm"
															>
																currentCustomer.phone
															</p>
															<router-link to="#" class="flex-grow-1 text-right">edit</router-link>
														</div>
													</div>
												</div>
												<div
													id="collapse-body-a-2"
													class="collapse atbd-collapse-item__body"
												>
													<div
														class="collapse-body-text"
													></div>
												</div>
											</div>

											<div class="atbd-collapse-item">
												<div
													class="atbd-collapse-item__header"
												>
													<div
														class="item-link py-1"
														data-toggle="collapse"
														data-target="#collapse-body-a-3"
														aria-expanded="true"
														aria-controls="collapse-body-a-3"
													>
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
																currentCustomer.email
															</p>
															<router-link to="#" class="flex-grow-1 text-right">edit</router-link>
														</div>
													</div>
												</div>
												<div
													id="collapse-body-a-3"
													class="collapse atbd-collapse-item__body"
												>
													<div
														class="collapse-body-text"
													></div>
												</div>
											</div>

											<div class="atbd-collapse-item">
												<div
													class="atbd-collapse-item__header"
												>
													<div
														class="item-link py-1"
														data-toggle="collapse"
														data-target="#collapse-4"
														aria-expanded="true"
														aria-controls="collapse-4"
													>
														<div
															class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
														>
															<span
																class="font-bold text-black min120 text-sm"
																>Branch:</span
															>
															<div class="tags">
																<a-tag color="blue">Josem Trust House Branch</a-tag>
															</div>
															<a
																href="#"
																class="flex-grow-1 text-right d-block"
																>edit</a
															>
														</div>
													</div>
												</div>

												<div
													id="collapse-4"
													class="collapse atbd-collapse-item__body"
												>
													<div
														class="collapse-body-text"
													>
													</div>
												</div>
                                            </div>

											<div class="atbd-collapse-item">
												<div
													class="atbd-collapse-item__header"
												>
													<div
														class="item-link py-1"
														data-toggle="collapse"
														data-target="#collapse-5"
														aria-expanded="true"
														aria-controls="collapse-5"
													>
														<div
															class="statistics-item statistics-default d-flex flex-row align-items-center my-2"
														>
															<span
																class="font-bold text-black min120 text-sm"
																>Roles:</span
															>
															<div class="tags">
																<a-tag color="blue">Account Manager</a-tag>
																<a-tag color="blue">Trade Finance Manager</a-tag>
															</div>
															<a
																href="#"
																class="flex-grow-1 text-right d-block"
																>edit</a
															>
														</div>
													</div>
												</div>
												<div
													id="collapse-5"
													class="collapse atbd-collapse-item__body"
												>
													<div
														class="collapse-body-text"
													>
														<p class="d-none">
															A dog is a type of
															domesticated animal.
															Known for its
															loyalty and
															faithfulness, it can
															be found as a
															welcome guest in
															many households
															across the world.
														</p>
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
		</div>
	</div>
</template>

<script>
	import { Card, Tag } from "ant-design-vue";
	import moment from "moment";

	export default {
		name: "Profile",
		data: () => ({
			currentCustomer: null,
		}),
		created() {
			// this.currentCustomer = this.$store.getters.getCustomers.filter(
			// 	(el) => el.id == this.$route.params.id
			// )[0];
		},
		components: {
			ACard: Card,
			ATag: Tag,
		},
		methods: {
			moment: function () {
				return moment();
			},
		},
	};
</script>
