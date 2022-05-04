<template>
	<div class="steps-content">
		<div class="social-dash-wrap my-4">
			<div class="row">
				<div class="col-lg-12">
					<div class="card">
						<div class="card-body">
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
														modal2Visible = true
													"
													type="button"
												>
													<span
														data-feather="plus"
														class="nav-icon"
													></span>
													Add Director
												</button>

												<a-modal
													v-model:visible="
														modal2Visible
													"
													centered
													@ok="modal2Visible = false"
													width="80%"
													:footer="null"
												>
													<OnboardForm />
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
													<option>Complete</option>
												</select>
											</div>
										</form>
									</div>
									<table
										class="table mb-0 mt-2 table-borderless"
									>
										<thead>
											<tr class="userDatatable-header">
												<th>
													<span
														class="userDatatable-title"
														>Director's Name</span
													>
												</th>
												<th>
													<span
														class="userDatatable-title"
														>National ID/ Passport
														ID</span
													>
												</th>
												<th>
													<span
														class="userDatatable-title"
														>Phone Number
														Status</span
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
													company, i
												) in companies"
												:key="i"
											>
												<td>
													<div
														class="userDatatable-content"
													>
														<a-tooltip
															:title="
																company.name
															"
															color="#016AB3"
														>
															<a-text
																ellipsis="true"
																style="
																	max-width: 200px;
																"
																:content="
																	company.name
																"
															/>
														</a-tooltip>
													</div>
												</td>
												<td>
													<div
														class="userDatatable-content"
													>
														{{
															company.sector.label
														}}
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
															v-if="
																company.onboarding ==
																'completed'
															"
															>Completed</span
														>
														<span
															class="bg-opacity-warning color-warning rounded-pill userDatatable-content-status active"
															v-else
															>Pending</span
														>
													</div>
												</td>
												<td>
													<router-link
														:to="`#`"
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
	<div class="steps-action d-flex">
		<button
			class="btn btn-outline-info btn-default px-3 justify-content-center flex align-items-center mr-2"
			@click="prev"
		>
			Previous
			<vue-feather type="arrow-left" class="flex-1 ml-2 mr-0" size="18" />
		</button>
		<button
			class="btn btn-primary btn-default px-3 justify-content-center flex align-items-center mr-2"
		>
			Save details
			<vue-feather type="save" class="flex-1 ml-2 mr-0" size="18" />
		</button>
	</div>
</template>

<script>
import { ref } from "vue";
import VueFeather from "vue-feather";
import { Typography, Tooltip, Drawer, Modal } from "ant-design-vue";
import OnboardForm from "./OnboardForm.vue";

const { Text } = Typography;

export default {
	name: "DirectorsProfile",
	setup() {
		const modal1Visible = ref(false);
		const modal2Visible = ref(false);

		const setModal1Visible = (visible) => {
			modal1Visible.value = visible;
		};

		const visible = ref(false);

		const afterVisibleChange = (bool) => {
			console.log("visible", bool);
		};

		const showDrawer = () => {
			visible.value = true;
		};

		return {
			visible,
			afterVisibleChange,
			showDrawer,

			modal1Visible,
			modal2Visible,
			setModal1Visible,
		};
	},
	data: () => ({
		directors: null,
	}),
	components: {
		ATooltip: Tooltip,
		AText: Text,
		ADrawer: Drawer,
		AModal: Modal,
		OnboardForm,
		VueFeather,
	},
	methods: {
		prev() {
			this.$store.dispatch("setCurrentDecrement");
		},
	},
};
</script>
