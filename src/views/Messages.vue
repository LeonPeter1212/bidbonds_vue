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
									<router-link to="#">Messages</router-link>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-12">
						<div class="table-responsive">
							<div class="adv-table-table__header">
								<h4>Messages</h4>
							</div>
							<div
								id="filter-form-container"
								class="footable-filtering-external footable-filtering-right"
							>
								<form class="form-inline">
									<div
										class="form-group footable-filtering-search my-3"
									>
										<label class="sr-only">Search</label>
										<div class="input-group">
											<input
												type="text"
												class="form-control"
												placeholder="Search"
											/>
										</div>
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
							<div class="actions-sec d-flex mt-1 mb-3 align-items-center">
								<a-checkbox class="mr-2">Select all</a-checkbox>
								<select
									class="form-control w-auto"
									placeholder="Action"
								>
									<option>Mark all as read</option>
									<option>Pending</option>
									<option>Complete</option>
								</select>
							</div>
							<div class="card">
								<div class="card-body p-0">
									<a-tabs class="ant-nav-0" v-model:activeKey="activeKey">
										<a-tab-pane key="1">
											<template #tab>
												<div
													class="d-flex align-items-center px-3"
												>
													<vue-feather
														size="16"
														type="bell"
														class="nav-icon mr-2"
													/>
													General
												</div>
											</template>
											<div class="list-box border-0">
												<ul>
													<li class="list-box__item d-flex align-items-center">
														<a-checkbox class="mr-3"></a-checkbox>
														<p class="flex-grow-1 m-0">
															<span class="identity font-bold">Felix Murage's </span>
															account has been inactive for 6 months.
															<router-link to="#"> View Profile</router-link>
														</p>
														<div class="date text-right">{{moment().format('lll')}}</div>
													</li>
													<li class="list-box__item d-flex align-items-center">
														<a-checkbox class="mr-3"></a-checkbox>
														<p class="flex-grow-1 m-0">
															<span class="identity font-bold">Felix Murage's </span>
															account has been inactive for 6 months.
															<router-link to="#"> View Profile</router-link>
														</p>
														<div class="date text-right">{{moment().format('lll')}}</div>
													</li>
													<li class="list-box__item d-flex align-items-center read">
														<a-checkbox class="mr-3"></a-checkbox>
														<p class="flex-grow-1 m-0">
															<span class="identity font-bold">Felix Murage's </span>
															account has been inactive for 6 months.
															<router-link to="#"> View Profile</router-link>
														</p>
														<div class="date text-right">{{moment().format('lll')}}</div>
													</li>
												</ul>
											</div>
										</a-tab-pane>
										<a-tab-pane key="2">
											<template #tab>
												<div
													class="d-flex align-items-center px-3"
												>
													<vue-feather
														size="16"
														type="mail"
														class="nav-icon mr-2"
													/>
													Activity Log
													<a-badge
														count="2"
														:number-style="{
															backgroundColor:
																'#FFCC00',
														}"
														class="px-2"
													/>
												</div>
											</template>
											<div class="list-box border-0">
												<ul>
													<li class="list-box__item d-flex align-items-center">
														<a-checkbox class="mr-3"></a-checkbox>
														<p class="flex-grow-1 m-0">
															<span class="identity font-bold">Felix Murage's </span>
															updated a branch.
															<span class="identity font-bold"> Mama Ngina Street</span>
														</p>
														<div class="date text-right">{{moment().format('lll')}}</div>
													</li>
													<li class="list-box__item d-flex align-items-center">
														<a-checkbox class="mr-3"></a-checkbox>
														<p class="flex-grow-1 m-0">
															<span class="identity font-bold">Felix Murage's </span>
															updated a branch.
															<span class="identity font-bold"> Mama Ngina Street</span>
														</p>
														<div class="date text-right">{{moment().format('lll')}}</div>
													</li>
													<li class="list-box__item d-flex align-items-center read">
														<a-checkbox class="mr-3"></a-checkbox>
														<p class="flex-grow-1 m-0">
															<span class="identity font-bold">Felix Murage's </span>
															updated a branch.
															<span class="identity font-bold"> Mama Ngina Street</span>
														</p>
														<div class="date text-right">{{moment().format('lll')}}</div>
													</li>
													<li class="list-box__item d-flex align-items-center read">
														<a-checkbox class="mr-3"></a-checkbox>
														<p class="flex-grow-1 m-0">
															<span class="identity font-bold">Felix Murage's </span>
															updated a branch.
															<span class="identity font-bold"> Mama Ngina Street</span>
														</p>
														<div class="date text-right">{{moment().format('lll')}}</div>
													</li>
													<li class="list-box__item d-flex align-items-center read">
														<a-checkbox class="mr-3"></a-checkbox>
														<p class="flex-grow-1 m-0">
															<span class="identity font-bold">Felix Murage's </span>
															updated a branch.
															<span class="identity font-bold"> Mama Ngina Street</span>
														</p>
														<div class="date text-right">{{moment().format('lll')}}</div>
													</li>
													<li class="list-box__item d-flex align-items-center read">
														<a-checkbox class="mr-3"></a-checkbox>
														<p class="flex-grow-1 m-0">
															<span class="identity font-bold">Felix Murage's </span>
															updated a branch.
															<span class="identity font-bold"> Mama Ngina Street</span>
														</p>
														<div class="date text-right">{{moment().format('lll')}}</div>
													</li>
												</ul>
											</div>
										</a-tab-pane>
									</a-tabs>
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
import { Tabs, Badge, Checkbox } from "ant-design-vue";
import VueFeather from "vue-feather";
import moment from "moment";

const { TabPane } = Tabs;

export default {
	setup() {
		return {
			activeKey: ref("2"),
		};
	},
	components: {
		ATabs: Tabs,
		ATabPane: TabPane,
		ABadge: Badge,
		ACheckbox: Checkbox,
		VueFeather,
	},
	methods: {
		moment: function () {
			return moment();
		},
	},
};
</script>
