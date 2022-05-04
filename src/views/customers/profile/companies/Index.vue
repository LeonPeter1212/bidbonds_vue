<template>

        <div class="contents">

            <div class="container-fluid">
                <div class="social-dash-wrap">
                    <div class="row">
					<div class="col-lg-12">
						<div class="breadcrumb-main">
							<ul class="atbd-breadcrumb nav">
								<li class="atbd-breadcrumb__item">
									<router-link to="/"> Dashboard </router-link>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link to="/customers/">Customers</router-link>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link :to="`/customers/${currentCustomer.id}`">{{currentCustomer.name}}</router-link>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link to="#">Companies</router-link>
								</li>
							</ul>
						</div>
						<h4 class="text-capitalize breadcrumb-title mb-4">
							Profile Overview
						</h4>
					</div>

                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <div
                                        class="userDatatable adv-table-table global-shadow border-0 bg-white w-100 adv-table">
                                        <div class="table-responsive">
                                            <div class="adv-table-table__header">
                                                <h4>All Companies</h4>
                                            </div>
                                            <div id="filter-form-container"
                                                class="footable-filtering-external footable-filtering-right">
                                                <form class="form-inline">
                                                    <div class="form-group footable-filtering-search my-3">
                                                        <label class="sr-only">Search</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control"
                                                                placeholder="Search">
                                                        </div>
                                                        <span class="px-3">or</span>
                                                        <router-link class="btn btn-primary btn-sm" to="#">
                                                            <span data-feather="plus" class="nav-icon"></span>
                                                            Onboard Company
                                                        </router-link>
                                                    </div>
                                                    <div
                                                        class="form-group atbd-select d-flex align-items-center adv-table-searchs__status my-3">
                                                        <label class="d-flex align-items-center mb-sm-0 mb-2">Filter
                                                            by</label>
                                                        <select class="form-control ml-sm-10 ml-0">
                                                            <option>All</option>
                                                            <option>Pending</option>
                                                            <option>Complete</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                            <table class="table mb-0 mt-2 table-borderless">
                                                <thead>
                                                    <tr class="userDatatable-header">
                                                        <th>
                                                            <span class="userDatatable-title">Company Name</span>
                                                        </th>
                                                        <th>
                                                            <span class="userDatatable-title">Key Sector</span>
                                                        </th>
                                                        <th>
                                                            <span class="userDatatable-title">Company Status</span>
                                                        </th>
                                                        <th>
                                                            <span class="userDatatable-title">Onboarding</span>
                                                        </th>
                                                        <th>
                                                            <span class="userDatatable-title">Action</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(company, i) in customerCompanies" :key="i">
                                                        <td>
                                                            <div class="userDatatable-content">
                                                                {{company.name}}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="userDatatable-content">
                                                                {{company.sector.label}}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="userDatatable-content d-inline-block">
                                                                <span class="bg-opacity-success color-success rounded-pill userDatatable-content-status active">Completed</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="userDatatable-content d-inline-block">
                                                                <span class="bg-opacity-warning color-warning rounded-pill userDatatable-content-status active">Pending</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <router-link :to="`/companies/${company.id}`"
                                                                class="btn btn-info btn-sm btn-squared ">View</router-link>
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
import { Card } from "ant-design-vue";
import moment from "moment";

export default {
	name: "Profile",
	data: () => ({
		currentCustomer: null,
        customerCompanies: null
	}),
	created() {
		this.currentCustomer = this.$store.getters.getCustomers.filter(
			(el) => el.id == this.$route.params.id
		)[0];
        
        this.customerCompanies = this.$store.getters.getCompanies.filter(el=>this.currentCustomer.companies.some(e=>e == el.id));
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