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
									<router-link to="#">Companies</router-link>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-12">
						<div class="card">
							<div class="card-body">
								<div
									class="userDatatable adv-table-table global-shadow border-0 bg-white w-100 adv-table"
								>
									<div class="table-responsive">
										<div class="adv-table-table__header">
											<h4>All Companies</h4>
										</div>
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
													<router-link
														class="btn btn-primary btn-sm"
														to="#"
													>
														<span
															data-feather="plus"
															class="nav-icon"
														></span>
														Onboard Company
													</router-link>
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
															>Company Name</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Key Sector</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Company
															Status</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Onboarding</span
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
												<tr v-for="(company, i) in companies" :key="i">
													<td>
														<div
															class="userDatatable-content"
														>
                                                            <a-tooltip :title="company.name" color="#016AB3">
                                                                <a-text
                                                                    ellipsis="true"
                                                                    style="max-width: 200px"
                                                                    :content="company.name"
                                                                />
                                                            </a-tooltip>
														</div>
													</td>
													<td>
														<div
															class="userDatatable-content"
														>
															{{company.sector.label}}
														</div>
													</td>
													<td>
														<div
															class="userDatatable-content d-inline-block"
														>
															<span
																class="bg-opacity-success color-success rounded-pill userDatatable-content-status active"
																>Completed</span
															>
														</div>
													</td>
													<td>
														<div
															class="userDatatable-content d-inline-block"
														>
															<span
																class="bg-opacity-success color-success rounded-pill userDatatable-content-status active"
                                                                v-if="company.onboarding == 'completed'"
																>Completed</span>
															<span
																class="bg-opacity-warning color-warning rounded-pill userDatatable-content-status active"
                                                                v-else
																>Pending</span>
														</div>
													</td>
													<td>
														<router-link
															:to="`/companies/${company.id}/`"
															class="btn btn-info btn-sm btn-squared"
															>View</router-link
														>
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
</template>

<script>
import {Typography, Tooltip} from 'ant-design-vue'

const {Text} = Typography

export default {
	name: "CompanyProfile",
	data: () => ({
		companies: null,
	}),
    components: {
        ATooltip: Tooltip,
        AText: Text,
    },
	created() {
		this.companies = this.$store.getters.getCompanies;
        console.log(this.companies[0].onboarding);
	},
};
</script>
