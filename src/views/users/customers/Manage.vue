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
									<router-link to="#"> Customers </router-link>
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
											<h4>All Customers</h4>
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
														to="/users/customers/create/"
													>
														<span
															data-feather="plus"
															class="nav-icon"
														></span>
														Create Customer
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
															>Customers Name</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Roles</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Branch</span
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
												<tr
													v-for="(coll, i) in custs"
													:key="i"
												>
													<td>{{ coll.fname }} {{coll.lname}}</td>
													<td>-</td>
													<td>-</td>
													<td>-</td>
													<td class="d-flex">
														<router-link
															:to="`/users/customers/${coll.docid}`"
															class="btn btn-info btn-sm btn-squared mr-2"
															>Edit</router-link
														>
														<!-- <a-modal
															v-if="visible"
															:visible="visible"
															title="Edit Role"
															centered
															:footer="null"
															@cancel="cancel"
															width="80%"
														>
															<Editrole :role="selected" />
														</a-modal> -->

														<a-popconfirm
															title="Are you sure delete this customer?"
															ok-text="Yes"
															cancel-text="Cancel"
															@confirm="deleterole(coll.docid)"
															@cancel="cancel"
														>
															<button
																class="btn btn-outline-danger btn-sm btn-squared mr-2"
															>
																Delete
															</button>
														</a-popconfirm>
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
import { ref } from "vue";
import VueFeather from "vue-feather";
import {
	Typography,
	Tooltip,
	Popconfirm,
	message,
	Modal,
} from "ant-design-vue";
import {
	collection,
	query,
	getFirestore,
	onSnapshot,
	doc,
	deleteDoc,
	where,
} from "firebase/firestore";

const {Text} = Typography

export default {
	name: "CompanyProfile",

	setup() {
		const db = ref();
		const custs = ref([]);

		const cancel = (e) => {
			selected.value = null;
			visible.value=false;
		};

		const showModal = (role) => {
			selected.value = role;
			visible.value = true;
		};

		return {
			db, custs,
			cancel,
			showModal,
		}
	},

    components: {
		ATooltip: Tooltip,
		AText: Text,
		APopconfirm: Popconfirm,
		AModal: Modal,
		VueFeather,
    },

	methods: {
		message() {
			return message;
		},
		async deleterole(id) {
			await deleteDoc(doc(this.db, "users", id))
				.then(()=>message.info({
					content: "Customer deleted successfully.",
					style: {
						marginRight: '20px',
						textAlign: 'right'
					},
				}))
				.catch(err=>console.log(err));
		},
	},

	async beforeCreate() {
		this.db = await getFirestore();

		const q = query(collection(this.db, "users"), where("type", "==", "customer"));
		onSnapshot(q, (querySnapshot) => {
			const user = [];
			querySnapshot.forEach((doc) => {
				user.push({...doc.data(), docid: doc.id});
			});
			this.custs = user;
		});
	},
};
</script>
