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
                                        <router-link to="#">Customers</router-link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <div
                                        class="userDatatable adv-table-table global-shadow border-0 bg-white w-100 adv-table">
                                        <div class="table-responsive">
                                            <div class="adv-table-table__header">
                                                <h4>All Customers</h4>
                                            </div>
                                            <div id="filter-form-container"
                                                class="footable-filtering-external footable-filtering-right">
                                                <form class="form-inline">
                                                    <div class="form-group footable-filtering-search my-3">
                                                        <label class="sr-only">Search</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Search">
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="form-group atbd-select d-flex align-items-center adv-table-searchs__status my-3">
                                                        <label class="d-flex align-items-center mb-sm-0 mb-2">Filter by</label>
                                                        <select class="form-control ml-sm-10 ml-0">
                                                            <option>All</option>
                                                            <option>Active</option>
                                                            <option>Inactive</option>
                                                            <option>Disabled</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                            <table class="table mb-0 mt-2 table-borderless">
                                                <thead>
                                                    <tr class="userDatatable-header">
                                                        <th>
                                                            <span class="userDatatable-title">Customer Name</span>
                                                        </th>
                                                        <th>
                                                            <span class="userDatatable-title">Phone Number</span>
                                                        </th>
                                                        <th>
                                                            <span class="userDatatable-title">Email</span>
                                                        </th>
                                                        <th>
                                                            <span class="userDatatable-title">Account Type</span>
                                                        </th>
                                                        <th>
                                                            <span class="userDatatable-title">Status</span>
                                                        </th>
                                                        <th>
                                                            <span class="userDatatable-title">Action</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(customer, i) in customers" :key="i">
                                                        <td>
                                                            <div class="userDatatable-content">
                                                                {{customer.name}}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="userDatatable-content">
                                                                {{customer.phone}}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="userDatatable-content">
                                                                {{customer.email}}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="userDatatable-content">
                                                                {{customer.accountType}}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="userDatatable-content d-inline-block">
                                                                <span 
                                                                    class="bg-opacity-success color-success rounded-pill userDatatable-content-status active"
                                                                     v-if="customer.status == 'active'"
                                                                >Active</span>
                                                                <span
                                                                    class="bg-opacity-warning  color-warning rounded-pill userDatatable-content-status active"
                                                                    v-else
                                                                >Inactive</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <router-link :to="`/customers/${customer.id}`"
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
// import {Tag} from 'ant-design-vue'

export default {
    name: "Customers",
    data: ()=>({
        customers: [],
    }),
    mounted() {
        this.customers = this.$store.getters.getCustomers
    },
    components: {
        // ATag: Tag
    }
}
</script>