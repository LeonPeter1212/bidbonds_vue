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
									<router-link to="#">Bid Bonds</router-link>
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
											<h4>All Bid Bonds</h4>
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
													<button
														class="btn btn-warning btn-sm"
													@click="
														modalVisible = true
													"
                                                        type="button"
													>
														Generate Report
													</button>

												<a-modal
												title="Generate Report"
												v-model:visible="modalVisible"
												centered
                                                :footer="null"
												>
													<ReportForm />
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
															>Reference Number</span>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Company Name</span>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Amount</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Start Date</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Expiry Date</span
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
												<tr v-for="(bond, i) in state.bonds" :key="i">
													<td>
														<span class="text-warning text-uppercase">{{bond.refno}}</span>
													</td>
													<td>{{bond.name}}</td>
													<td>{{bond.amount}}</td>
													<td>{{bond.start}}</td>
													<td>{{bond.end}}</td>
													<td>
															<span
																class="bg-opacity-warning color-warning rounded-pill userDatatable-content-status active"
																>{{bond.status}}</span></td>
																<td>
														<router-link
															:to="`/bidbonds/${bond.id}/`"
															class="btn btn-primary btn-sm"
															>View</router-link
														></td>
												</tr>
												<!-- <tr v-for="(company, i) in companies" :key="i">
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
												</tr> -->
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
import { ref } from "vue";
import { reactive } from "vue";
import {Typography, Tooltip, Modal} from 'ant-design-vue'
import ReportForm from "./ReportForm.vue";

const {Text} = Typography

export default {
	name: "CompanyProfile",
    setup() {
		const state = reactive({
			bonds: [
				{
					id: 1,
					refno: "Unassigned",
					name: "Bunisha Limited",
					amount: "KES 1,000,000",
					start: "28th Feb, 2022",
					end: "28th May, 2022",
					status: "Pending",
				}
			]
		})

		const modalVisible = ref(false);

		return {
			modalVisible,
			state
		};
    },
	data: () => ({
		companies: null,
	}),
    components: {
        ATooltip: Tooltip,
        AText: Text,
		AModal: Modal,
        ReportForm,
    },
	created() {
		this.companies = this.$store.getters.getCompanies;
	},
};
</script>
