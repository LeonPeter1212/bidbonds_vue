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
									<router-link to="#"> Users </router-link>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link to="#"> Roles </router-link>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link to="#">Manage</router-link>
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
											<h4>All Roles</h4>
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
														Create Role
													</router-link>
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
															>Role Name</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Description</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Users</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Permissions</span
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
												<tr></tr>
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
	// data: () => ({
	// 	companies: null,
	// }),
    components: {
        ATooltip: Tooltip,
        AText: Text,
    },
	// created() {
	// 	this.companies = this.$store.getters.getCompanies;
    //     console.log(this.companies[0].onboarding);
	// },
};
</script>
