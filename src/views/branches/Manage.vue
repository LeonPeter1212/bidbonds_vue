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
									<router-link to="#">Branches</router-link>
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
											<h4>All Branches</h4>
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
														Create Branch
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
															>Branch Name</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Code</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Physical Address</span
														>
													</th>
													<th>
														<span
															class="userDatatable-title"
															>Users </span
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
													v-for="(branch, i) in branches"
													:key="i"
												>
													<td>{{ branch.name }}</td>
													<td>{{ branch.code }}</td>
													<td>{{ branch.address }}</td>
													<td>{{ 0 }}</td>
													<td class="d-flex">
														<a-button
															:loading="false"
															class="btn btn-info btn-sm btn-squared mr-2"
															@click="showModal(branch)"
															>Edit</a-button
														>
														<a-modal
															v-if="visible"
															:visible="visible"
															title="Edit Role"
															centered
															:footer="null"
															@cancel="cancel"
															width="80%"
														>
															<Editrole :role="selected" />
														</a-modal>

														<a-popconfirm
															title="Are you sure delete this role?"
															ok-text="Yes"
															cancel-text="Cancel"
															@confirm="deleterole(branch.public_id)"
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
} from "firebase/firestore";

const { Text } = Typography;

export default {
	name: "CompanyProfile",

	setup() {
		const db = ref();
		const branches = ref([]);
		const visible = ref(false);
		const selected = ref(null);


		const confirm = (e) => {
			console.log(e);
		};

		const cancel = (e) => {
			selected.value = null;
			visible.value=false;
		};

		const showModal = (role) => {
			// selected.value = role;
			// visible.value = true;
		};

		return {
			db,
			branches,
			confirm,
			cancel,
			visible,
			showModal,
			selected,
		};
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
			await deleteDoc(doc(this.db, "/accounts/accid/roles", id))
				.then(()=>message.info({
					content: "Role deleted successfully.",
					style: {
						marginRight: '20px',
						marginTop: '74px',
						textAlign: 'right'
					},
				}))
				.catch(err=>console.log(err));
		},
	},

	async beforeCreate() {
		this.db = await getFirestore();

		const q = query(collection(this.db, "/accounts/accid/branches"));
		onSnapshot(q, (querySnapshot) => {
			const branches = [];
			querySnapshot.forEach((doc) => {
				// console.log({...doc.data(), docid: doc.id});
				branches.push({...doc.data(), docid: doc.id});
			});
			this.branches = branches;
		});
	},
};
</script>
