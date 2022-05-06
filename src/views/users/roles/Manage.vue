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
									<router-link to="#">Roles</router-link>
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
														class="btn btn-primary btn-sm d-flex align-items-center"
														to="/users/roles/create/"
													>
														<vue-feather
															type="plus"
														></vue-feather>
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
												<tr
													v-for="(role, i) in roles"
													:key="i"
												>
													<td>{{ role.name }}</td>
													<td>{{ role.desc == "" ? "-" : role.desc }}</td>
													<td>{{ 0 }}</td>
													<td>{{ 0 }}</td>
													<td class="d-flex">
														<a-button
															:loading="false"
															class="btn btn-info btn-sm btn-squared mr-2"
															@click="showModal(role)"
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
															@confirm="deleterole(role.docid)"
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

import Editrole from "../../../components/roles/Edit.vue"

const { Text } = Typography;

export default {
	name: "CompanyProfile",

	setup() {
		const db = ref();
		const roles = ref([]);
		const visible = ref(false);
		const selected = ref(null);


		const confirm = (e) => {
			console.log(e);
			// message.success("Click on Yes");
		};

		const cancel = (e) => {
			selected.value = null;
			visible.value=false;
		};

		const showModal = (role) => {
			selected.value = role;
			visible.value = true;
		};

		return {
			db,
			roles,
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
		Editrole,
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

		const q = query(collection(this.db, "/accounts/accid/roles"));
		onSnapshot(q, (querySnapshot) => {
			const roles = [];
			querySnapshot.forEach((doc) => {
				// console.log({...doc.data(), docid: doc.id});
				roles.push({...doc.data(), docid: doc.id});
			});
			this.roles = roles;
		});
	},
};
</script>
