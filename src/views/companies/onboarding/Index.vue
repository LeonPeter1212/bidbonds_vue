<template>
	<div class="contents">
		<div class="container-fluid">
			<div class="checkout-progress-indicator content-center py-30">
				<div class="checkout-progress justify-content-center">
					<div
						class="d-flex align-items-center"
						v-for="(step, i) in steps"
						:key="i"
					>
						<div
							:class="`step ${i < current ? 'completed' : null} ${
								i === current ? 'current' : null
							}`"
							:id="i"
						>
							<span
								:class="`${
									i < current ? 'las la-check' : null
								}`"
								>{{ i >= current ? i + 1 : null }}</span
							>
							<span>{{ step.title }}</span>
						</div>
						<div class="current" v-if="i !== steps.length - 1">
							<img
								src="@/assets/img/svg/checkout.svg"
								alt="img"
								class="svg"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<div class="card mt-30 px-30 pt-2 pb-30 border-color">
						<div class="card-body px-0">
							<!-- Company Information form -->
							<div v-show="current == 0" class="Vertical-form">
								<form action="#" class="row">
									<div class="form-group col-md-6">
										<label
											class="color-dark fs-14 fw-500 align-center"
											>Company Name</label
										>
										<input
											type="text"
											name="name"
											v-model="companystate.name"
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
										/>
										<span
											class="error"
											v-if="v$company.name.$error"
										>
											{{
												v$company.name.$errors[0]
													.$message
											}}
										</span>
									</div>

									<div class="form-group col-md-6">
										<label
											class="color-dark fs-14 fw-500 align-center"
											>Key Sector</label
										>
										<v-select
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
											name="sector"
											v-model="companystate.sector"
											:options="sectors"
										/>
										<span
											class="error"
											v-if="v$company.sector.$error"
										>
											{{
												v$company.sector.$errors[0]
													.$message
											}}
										</span>
									</div>

									<div class="form-group col-md-6">
										<label
											class="color-dark fs-14 fw-500 align-center"
											>Company Phone Number</label
										>
										<div class="d-flex">
											<v-select
												style="width: 40%"
												class="form-control ih-medium ip-gray radius-xs b-light px-15"
												name="country"
												v-model="companystate.country"
												:options="countries"
											/>
											<span
												class="d-flex align-items-center mx-2"
												>-</span
											>
											<input
												type="text"
												name="phone"
												v-model="companystate.phone"
												class="form-control ih-medium ip-gray radius-xs b-light px-15"
											/>
										</div>
										<span
											class="error"
											v-if="v$company.country.$error"
										>
											{{
												v$company.country.$errors[0]
													.$message
											}}
										</span>
										<span
											class="error"
											v-if="v$company.phone.$error"
										>
											{{
												v$company.phone.$errors[0]
													.$message
											}}
										</span>
									</div>

									<div class="form-group col-md-6">
										<label
											class="color-dark fs-14 fw-500 align-center"
											>Company Email</label
										>
										<input
											type="email"
											name="email"
											v-model="companystate.email"
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
										/>
										<span
											class="error"
											v-if="v$company.email.$error"
										>
											{{
												v$company.email.$errors[0]
													.$message
											}}
										</span>
									</div>

									<div class="form-group col-md-6">
										<label
											class="color-dark fs-14 fw-500 align-center"
											>Physical Address</label
										>
										<input
											type="text"
											name="phyaddr"
											v-model="companystate.phyaddr"
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
										/>
										<span
											class="error"
											v-if="v$company.phyaddr.$error"
										>
											{{
												v$company.phyaddr.$errors[0]
													.$message
											}}
										</span>
									</div>

									<div class="form-group col-md-3">
										<label
											class="color-dark fs-14 fw-500 align-center"
											>Postal Address</label
										>
										<input
											type="text"
											name="postaladdr"
											v-model="companystate.postaladdr"
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
										/>
										<span
											class="error"
											v-if="v$company.postaladdr.$error"
										>
											{{
												v$company.postaladdr.$errors[0]
													.$message
											}}
										</span>
									</div>

									<div class="form-group col-md-3">
										<label
											class="color-dark fs-14 fw-500 align-center"
											>Postal Code</label
										>
										<input
											type="text"
											name="postalcode"
											v-model="companystate.postalcode"
											class="form-control ih-medium ip-gray radius-xs b-light px-15"
										/>
										<span
											class="error"
											v-if="v$company.postalcode.$error"
										>
											{{
												v$company.postalcode.$errors[0]
													.$message
											}}
										</span>
									</div>
								</form>
							</div>

							<!-- Directors form -->
							<div class="Vertical-form" v-show="current == 1">
								<div
									class="userDatatable adv-table-table global-shadow border-0 bg-white w-100 adv-table"
								>
									<div class="table-responsive">
										<div
											id="filter-form-container"
											class="footable-filtering-external footable-filtering-right"
										>
											<form class="form-inline">
												<div
													class="form-group footable-filtering-search my-3"
												>
													<label class="sr-only"
														>Search</label
													>
													<div class="input-group">
														<input
															type="text"
															class="form-control"
															placeholder="Search"
														/>
													</div>
													<span class="px-3">or</span>
													<button
														class="btn btn-primary btn-sm"
														@click="
															modalVisible = true
														"
														type="button"
													>
														<i
															class="ml-0 las la-plus"
														></i>
														Add Director
													</button>

													<a-modal
														v-model:visible="
															modalVisible
														"
														centered
														@ok="
															modalVisible = false
														"
														width="80%"
														:footer="null"
													>
														<form
															action="#"
															class="row"
														>
															<div
																class="form-group col-md-6"
															>
																<label
																	class="color-dark fs-14 fw-500 align-center"
																	>National ID
																	/ Passport
																	Number</label
																>
																<input
																	type="text"
																	name="nipn"
																	v-model="
																		directorsstate.nipn
																	"
																	class="form-control ih-medium ip-gray radius-xs b-light px-15"
																/>
																<span
																	class="error"
																	v-if="
																		v$directors
																			.nipn
																			.$error
																	"
																>
																	{{
																		v$directors
																			.nipn
																			.$errors[0]
																			.$message
																	}}
																</span>
															</div>

															<div
																class="form-group col-md-6"
															>
																<label
																	class="color-dark fs-14 fw-500 align-center"
																	>First
																	Name</label
																>
																<input
																	type="text"
																	name="fname"
																	v-model="
																		directorsstate.fname
																	"
																	class="form-control ih-medium ip-gray radius-xs b-light px-15"
																/>
																<span
																	class="error"
																	v-if="
																		v$directors
																			.fname
																			.$error
																	"
																>
																	{{
																		v$directors
																			.fname
																			.$errors[0]
																			.$message
																	}}
																</span>
															</div>

															<div
																class="form-group col-md-6"
															>
																<label
																	class="color-dark fs-14 fw-500 align-center"
																	>Last
																	Name</label
																>
																<input
																	type="text"
																	name="lname"
																	v-model="
																		directorsstate.lname
																	"
																	class="form-control ih-medium ip-gray radius-xs b-light px-15"
																/>
																<span
																	class="error"
																	v-if="
																		v$directors
																			.lname
																			.$error
																	"
																>
																	{{
																		v$directors
																			.lname
																			.$errors[0]
																			.$message
																	}}
																</span>
															</div>

															<div
																class="form-group col-md-6"
															>
																<label
																	class="color-dark fs-14 fw-500 align-center"
																	>Other
																	Names</label
																>
																<input
																	type="text"
																	name="oname"
																	v-model="
																		directorsstate.oname
																	"
																	class="form-control ih-medium ip-gray radius-xs b-light px-15"
																/>
																<!-- <span class="error" v-if="v$directors.oname.$error">
									{{ v$directors.oname.$errors[0].$message }}
								</span> -->
															</div>

															<div
																class="form-group col-md-6"
															>
																<label
																	class="color-dark fs-14 fw-500 align-center"
																	>Phone
																	Number</label
																>
																<div
																	class="d-flex"
																>
																	<v-select
																		style="
																			width: 40%;
																		"
																		class="form-control ih-medium ip-gray radius-xs b-light px-15"
																		name="country"
																		v-model="
																			directorsstate.country
																		"
																		:options="
																			countries
																		"
																	/>
																	<span
																		class="d-flex align-items-center mx-2"
																		>-</span
																	>
																	<input
																		type="number"
																		name="phone"
																		v-model="
																			directorsstate.phone
																		"
																		class="form-control ih-medium ip-gray radius-xs b-light px-15"
																	/>
																</div>
																<span
																	class="error"
																	v-if="
																		v$directors
																			.country
																			.$error
																	"
																>
																	{{
																		v$directors
																			.country
																			.$errors[0]
																			.$message
																	}}
																</span>
																<span
																	class="error"
																	v-if="
																		v$directors
																			.phone
																			.$error
																	"
																>
																	{{
																		v$directors
																			.phone
																			.$errors[0]
																			.$message
																	}}
																</span>
															</div>

															<div
																class="form-group col-md-6"
															>
																<label
																	class="color-dark fs-14 fw-500 align-center"
																	>Company
																	Email</label
																>
																<input
																	type="email"
																	name="email"
																	v-model="
																		directorsstate.email
																	"
																	class="form-control ih-medium ip-gray radius-xs b-light px-15"
																/>
																<span
																	class="error"
																	v-if="
																		v$directors
																			.email
																			.$error
																	"
																>
																	{{
																		v$directors
																			.email
																			.$errors[0]
																			.$message
																	}}
																</span>
															</div>

															<div
																class="form-group col-md-6"
															>
																<label
																	class="color-dark fs-14 fw-500 align-center"
																	>Gender</label
																>
																<v-select
																	class="form-control ih-medium ip-gray radius-xs b-light px-15"
																	name="gender"
																	v-model="
																		directorsstate.gender
																	"
																	:options="
																		genders
																	"
																/>
																<span
																	class="error"
																	v-if="
																		v$directors
																			.gender
																			.$error
																	"
																>
																	{{
																		v$directors
																			.gender
																			.$errors[0]
																			.$message
																	}}
																</span>
															</div>

															<div
																class="form-group col-md-6"
															>
																<label
																	class="color-dark fs-14 fw-500 align-center"
																	>Company
																	Shares</label
																>
																<input
																	type="number"
																	name="shares"
																	v-model="
																		directorsstate.shares
																	"
																	class="form-control ih-medium ip-gray radius-xs b-light px-15"
																/>
																<span
																	class="error"
																	v-if="
																		v$directors
																			.shares
																			.$error
																	"
																>
																	{{
																		v$directors
																			.shares
																			.$errors[0]
																			.$message
																	}}
																</span>
															</div>

															<div
																class="form-group col-md-6"
															>
																<label
																	class="color-dark fs-14 fw-500 align-center"
																	>Nationality</label
																>
																<v-select
																	class="form-control ih-medium ip-gray radius-xs b-light px-15"
																	name="nationality"
																	v-model="
																		directorsstate.nationality
																	"
																	:options="
																		nationalities
																	"
																/>
																<span
																	class="error"
																	v-if="
																		v$directors
																			.nationality
																			.$error
																	"
																>
																	{{
																		v$directors
																			.nationality
																			.$errors[0]
																			.$message
																	}}
																</span>
															</div>

															<div
																class="form-group col-md-6"
															>
																<label
																	class="color-dark fs-14 fw-500 align-center"
																	>Citizenship
																	Type</label
																>
																<v-select
																	class="form-control ih-medium ip-gray radius-xs b-light px-15"
																	name="cittype"
																	v-model="
																		directorsstate.cittype
																	"
																	:options="
																		cittypelist
																	"
																/>
																<span
																	class="error"
																	v-if="
																		v$directors
																			.cittype
																			.$error
																	"
																>
																	{{
																		v$directors
																			.cittype
																			.$errors[0]
																			.$message
																	}}
																</span>
															</div>
														</form>
														<div
															class="steps-action d-flex"
														>
															<button
																class="btn btn-primary btn-default px-3 justify-content-center flex align-items-center"
																type="button"
																@click="
																	addNewDirector
																"
															>
																<i
																	class="ml-0 las la-plus"
																></i>
																Add Director
															</button>
														</div>
													</a-modal>
												</div>
												<div
													class="form-group atbd-select d-flex align-items-center adv-table-searchs__status my-3"
												>
													<label
														class="d-flex align-items-center mb-sm-0 mb-2"
														>Filter by</label
													>
													<select
														class="form-control ml-sm-10 ml-0"
													>
														<option>All</option>
														<option>Pending</option>
														<option>
															Complete
														</option>
													</select>
												</div>
											</form>
										</div>
										<table
											class="table mb-0 mt-2 table-borderless"
										>
											<thead>
												<tr
													class="userDatatable-header"
												>
													<th>
														<span
															class="userDatatable-title"
															>Director's
															Name</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>National ID/
															Passport ID</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Phone Number</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Email</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Shares</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Action</span
														>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr
													v-for="(
														director, i
													) in directorslist"
													:key="i"
												>
													<td>
														<div
															class="userDatatable-content"
														>
															<a-tooltip
																:title="
																	director.fname
																"
																color="#016AB3"
															>
																<a-text
																	ellipsis="true"
																	style="
																		max-width: 200px;
																	"
																	:content="`${director.fname} ${director.lname} ${director.oname}`"
																/>
															</a-tooltip>
														</div>
													</td>
													<td>
														<div
															class="userDatatable-content"
														>
															{{ director.nipn }}
														</div>
													</td>
													<td>
														<div
															class="userDatatable-content"
														>
															+{{
																director.country
																	.value
															}}
															{{ director.phone }}
														</div>
													</td>
													<td>
														<div
															class="userDatatable-content"
														>
															{{
																director.email
															}}
														</div>
													</td>
													<td>
														<div
															class="userDatatable-content"
														>
															{{
																director.shares
															}}%
														</div>
													</td>
													<td>
														<button
															class="btn btn-outline-danger btn-sm btn-squared"
															type="button"
															@click="
																removeDirector(
																	i
																)
															"
														>
															Delete
														</button>
													</td>
												</tr>
												<tr
													v-if="
														directorslist?.length ==
														0
													"
												>
													<td
														:colspan="6"
														class="text-center"
													>
														No data.
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>

							<!-- Documents form -->
							<div class="Vertical-form" v-show="current == 2">
								<a-collapse v-model:activeKey="activeKey">
									<!-- Directors -->
									<a-collapse-panel
										key="directors"
										header="Directors"
									>
										<a-collapse>
											<a-collapse-panel
												v-for="(director, i) in dummydirectors" :key="i"
												:header="director.name"
											>
												<div
													class="table-responsive userDatatable"
												>
													<table
														class="table mb-0 mt-2 table-bordered"
													>
														<thead>
															<tr
																class="userDatatable-header"
															>
																<th>
																	<span
																		class="userDatatable-title"
																		>Document</span
																	>
																</th>
																<th>
																	<span
																		class="userDatatable-title"
																		>Serial
																		Number</span
																	>
																</th>
																<th>
																	<span
																		class="userDatatable-title"
																		>Issue
																		Date
																		Status</span
																	>
																</th>
																<th>
																	<span
																		class="userDatatable-title"
																		>Status</span
																	>
																</th>
																<th>
																	<span
																		class="userDatatable-title"
																		>Action</span
																	>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr v-for="(doc, d) in director.docs" :key="d">
																<td>
																	<div class="userDatatable-content">{{doc.name}}</div>
																</td>
																<td>
																	<div class="userDatatable-content">{{doc.sn==null ? "N/A" : doc.sn}}</div>
																</td>
																<td>
																	<div class="userDatatable-content">{{doc.date==null ? "N/A" : doc.date}}</div>
																</td>
																<td>
																	<div class="userDatatable-content">
																		<span
																			class="bg-opacity-warning color-warning rounded-pill userDatatable-content-status active"
																			>{{doc.status}}</span
																		></div>
																</td>
																<td>
																	<div class="userDatatable-content">
																		<button
																			class="btn btn-info btn-sm btn-squared"
																			type="button"
																		>
																			Upload
																		</button>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</a-collapse-panel>

										</a-collapse>
									</a-collapse-panel>

									<!-- Company -->
									<a-collapse-panel
										key="company"
										header="Company"
									>
										<div
											class="table-responsive userDatatable"
										>
											<table
												class="table mb-0 mt-2 table-bordered"
											>
												<thead>
													<tr
														class="userDatatable-header"
													>
														<th>
															<span
																class="userDatatable-title"
																>Document</span
															>
														</th>
														<th>
															<span
																class="userDatatable-title"
																>Serial
																Number</span
															>
														</th>
														<th>
															<span
																class="userDatatable-title"
																>Issue Date
																Status</span
															>
														</th>
														<th>
															<span
																class="userDatatable-title"
																>Status</span
															>
														</th>
														<th>
															<span
																class="userDatatable-title"
																>Action</span
															>
														</th>
													</tr>
												</thead>
												<tbody>
													<!-- Certificate of Incorporation -->
													<tr>
														<td>
															<div
																class="userDatatable-content"
															>
																<a-tooltip
																	title="Certificate of Incorporation"
																	color="#016AB3"
																>
																	<a-text
																		ellipsis="true"
																		style="
																			max-width: 200px;
																		"
																		content="Certificate of Incorporation"
																	/>
																</a-tooltip>
															</div>
														</td>
														<td>
															<div
																class="userDatatable-content"
															>
																N/A
															</div>
														</td>
														<td>
															<div
																class="userDatatable-content d-inline-block"
															>
																N/A
															</div>
														</td>
														<td>
															<div
																class="userDatatable-content d-inline-block"
															>
																<span
																	class="bg-opacity-warning color-warning rounded-pill userDatatable-content-status active"
																	>Unavailable</span
																>
															</div>
														</td>
														<td>
															<router-link
																:to="`#`"
																class="btn btn-primary btn-sm btn-squared"
																>Upload</router-link
															>
														</td>
													</tr>

													<!-- CR12 Certificate -->
													<tr>
														<td>
															<div
																class="userDatatable-content"
															>
																<a-tooltip
																	title="CR12 Certificate"
																	color="#016AB3"
																>
																	<a-text
																		ellipsis="true"
																		style="
																			max-width: 200px;
																		"
																		content="CR12 Certificate"
																	/>
																</a-tooltip>
															</div>
														</td>
														<td>
															<div
																class="userDatatable-content"
															>
																N/A
															</div>
														</td>
														<td>
															<div
																class="userDatatable-content d-inline-block"
															>
																N/A
															</div>
														</td>
														<td>
															<div
																class="userDatatable-content d-inline-block"
															>
																<span
																	class="bg-opacity-warning color-warning rounded-pill userDatatable-content-status active"
																	>Unavailable</span
																>
															</div>
														</td>
														<td>
															<router-link
																:to="`#`"
																class="btn btn-primary btn-sm btn-squared"
																>Upload</router-link
															>
														</td>
													</tr>

													<!-- KRA PIN Certificate -->
													<tr>
														<td>
															<div
																class="userDatatable-content"
															>
																<a-tooltip
																	title="KRA PIN Certificate"
																	color="#016AB3"
																>
																	<a-text
																		ellipsis="true"
																		style="
																			max-width: 200px;
																		"
																		content="KRA PIN Certificate"
																	/>
																</a-tooltip>
															</div>
														</td>
														<td>
															<div
																class="userDatatable-content"
															>
																N/A
															</div>
														</td>
														<td>
															<div
																class="userDatatable-content d-inline-block"
															>
																N/A
															</div>
														</td>
														<td>
															<div
																class="userDatatable-content d-inline-block"
															>
																<span
																	class="bg-opacity-warning color-warning rounded-pill userDatatable-content-status active"
																	>Unavailable</span
																>
															</div>
														</td>
														<td>
															<router-link
																:to="`#`"
																class="btn btn-primary btn-sm btn-squared"
																>Upload</router-link
															>
														</td>
													</tr>

													<!-- Tax Compliance Certificate -->
													<tr>
														<td>
															<div
																class="userDatatable-content"
															>
																<a-tooltip
																	title="Tax Compliance Certificate"
																	color="#016AB3"
																>
																	<a-text
																		ellipsis="true"
																		style="
																			max-width: 200px;
																		"
																		content="Tax Compliance Certificate"
																	/>
																</a-tooltip>
															</div>
														</td>
														<td>
															<div
																class="userDatatable-content"
															>
																N/A
															</div>
														</td>
														<td>
															<div
																class="userDatatable-content d-inline-block"
															>
																N/A
															</div>
														</td>
														<td>
															<div
																class="userDatatable-content d-inline-block"
															>
																<span
																	class="bg-opacity-warning color-warning rounded-pill userDatatable-content-status active"
																	>Unavailable</span
																>
															</div>
														</td>
														<td>
															<router-link
																:to="`#`"
																class="btn btn-primary btn-sm btn-squared"
																>Upload</router-link
															>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</a-collapse-panel>
								</a-collapse>
							</div>
						</div>
					</div>
					<!-- ends: .card -->
					<div
						class="button-group d-flex pt-3 justify-content-between flex-wrap my-3"
					>
						<button
							@click="prev"
							v-show="current !== 0"
							class="btn btn-outline-primary btn-default btn-squared fw-400 text-capitalize m-1"
							type="button"
						>
							<i class="las la-arrow-left mr-10"></i>Previous
						</button>
						<button
							@click="next"
							v-show="current !== steps.length - 1"
							class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
							type="button"
						>
							Save & Next<i
								class="ml-10 mr-0 las la-arrow-right"
							></i>
						</button>
						<button
							@click="next"
							v-show="current == steps.length - 1"
							class="btn text-white btn-primary btn-default btn-squared text-capitalize m-1"
							type="button"
						>
							Submit<i class="ml-10 mr-0 las la-arrow-right"></i>
						</button>
					</div>
				</div>
				<!-- ends: .col -->
			</div>
		</div>
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
import nationalitiesjson from "@/assets/js/nationalities.json";
import { Modal, message, Tooltip, Typography, Collapse } from "ant-design-vue";

const { Text } = Typography;

export default {
	setup() {
		// Form validation
		const companystate = reactive({
			// Company information
			name: "",
			sector: null,
			country: null,
			phone: "",
			email: "",
			phyaddr: "",
			postaladdr: "",
			postalcode: "",
		});

		const directorsstate = reactive({
			// Directors
			nipn: "",
			fname: "",
			lname: "",
			oname: "",
			gender: null,
			shares: null,
			nationality: null,
			cittype: null,
			country: null,
			phone: "",
			email: "",
		});

		const companyformrules = {
			// Company information
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

		const directorsformrules = {
			// Directors
			nipn: {
				required: helpers.withMessage(
					"Please enter the director's national ID or passport number.",
					required
				),
			},
			fname: {
				required: helpers.withMessage(
					"Please enter the director's first name.",
					required
				),
			},
			lname: {
				required: helpers.withMessage(
					"Please enter the director's last name.",
					required
				),
			},
			gender: {
				required: helpers.withMessage(
					"Please select a gender.",
					required
				),
			},
			shares: {
				required: helpers.withMessage(
					"Please enter the director's shares.",
					required
				),
			},
			nationality: {
				required: helpers.withMessage(
					"Please select a nationality.",
					required
				),
			},
			cittype: {
				required: helpers.withMessage(
					"Please select a citizenship type.",
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
					"Please enter the director's phone number.",
					required
				),
			},
			email: {
				required: helpers.withMessage(
					"Please enter the director's email address.",
					required
				),
				email: helpers.withMessage(
					"Please enter a valid email address.",
					required
				),
			},
		};

		const v$company = useVuelidate(companyformrules, companystate);
		const v$directors = useVuelidate(directorsformrules, directorsstate);

		// Modal visiblility
		const modalVisible = ref(false);

		// Accordion
		const activeKey = ref(["directors"]);

		const directorslist = ref([]);

		const countries = ref([]);

		const nationalities = ref([]);

		const dummydirectors = ref([
			{
				name: "Alamin Macharia",
				docs: [
					{
						name: "KRA Certificate",
						sn: null,
						date: null,
						status: 'Unavailable',
						file: null,
					},
					{
						name: "Tax Compliance Certificate",
						sn: null,
						date: null,
						status: 'Unavailable',
						file: null,
					},
				]
			}
		]);

		return {
			// Form validation
			companystate,
			directorsstate,
			v$company,
			v$directors,
			directorslist,
			nationalities,
			countries,
			dummydirectors,

			// Modal visiblility
			modalVisible,

			// Accordion
			activeKey,
		};
	},

	data() {
		return {
			current: 2,
			steps: [
				{
					title: "Company Information",
				},
				{
					title: "Directors",
				},
				{
					title: "Documents",
				},
			],
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
			genders: [
				{
					label: "Male",
					value: "male",
				},
				{
					label: "Female",
					value: "female",
				},
			],
			cittypelist: [
				{
					label: "Citizenship by family",
					value: "family",
				},
				{
					label: "Citizenship by birth",
					value: "birth",
				},
				{
					label: "Citizenship by marriage (jus matrimonii)",
					value: "marriage",
				},
				{
					label: "Naturalization",
					value: "naturalization",
				},
				{
					label: "Citizenship by investment or Economic Citizenship",
					value: "economic",
				},
			],
		};
	},

	components: {
		vSelect,
		VueFeather,
		AModal: Modal,
		ATooltip: Tooltip,
		AText: Text,
		ACollapse: Collapse,
		ACollapsePanel: Collapse.Panel,
	},

	beforeCreate() {
		this.nationalities = nationalitiesjson
			.map((el, i) => {
				let label = el;
				let value = i;
				return { label, value };
			})
			.sort((a, b) => a.label.localeCompare(b.label));

		this.countries = countriesjson
			.map((el) => {
				el.label = `${el.a3} +${el.pc}`;
				el.value = el.pc;
				return el;
			})
			.sort((a, b) => a.label.localeCompare(b.label));
	},

	methods: {
		message: function () {
			return message();
		},

		next() {
			if (this.current == 1 && this.directorslist.length == 0) {
				message.info({
					content: "Please add a director first.",
					style: {
						marginRight: "20px",
						textAlign: "right",
					},
				});
				return;
			}
			// if (this.current == 0) {
			// 	this.v$company.$validate();
			// 	if (!this.v$company.$error) {
			// 		this.current += 1;
			// 		this.$store.dispatch("setCurrentIncrement");
			// 		return;
			// 	}
			// 	message.info("Please fill in all required fields first.")
			// 	return
			// }
			this.current += 1;
		},

		prev() {
			return (this.current -= 1);
		},

		addNewDirector() {
			this.v$directors.$validate();
			if (!this.v$directors.$error) {
				this.directorslist.push(this.directorsstate);

				this.modalVisible = false;

				setTimeout(() => {
					this.directorsstate.nipn = ""
					this.directorsstate.fname = ""
					this.directorsstate.lname = ""
					this.directorsstate.oname = ""
					this.directorsstate.gender = null
					this.directorsstate.shares = ""
					this.directorsstate.nationality = null
					this.directorsstate.cittype = null
					this.directorsstate.country = null
					this.directorsstate.phone = ""
					this.directorsstate.email = ""
				}, 1000);
				return;
			}
			message.info("Please fill in all required fields first.");
			return;
		},
		removeDirector(id) {
			this.directorslist.splice(id, 1);
		},
	},
};
</script>
