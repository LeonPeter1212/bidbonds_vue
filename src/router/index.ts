import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import TestView from "../Test.vue";
import HomeView from "../views/Index.vue";
import Customers from "../views/customers/Index.vue";
import CustomerProfile from "../views/customers/profile/Index.vue";
import UserCustomerProfile from "../views/users/customers/Profile.vue";
import BidbondsProfile from "../views/bidbonds/profile/Index.vue";
import CustomerCompanies from "../views/customers/profile/companies/Index.vue";
import CustomerCompanyProfile from "../views/customers/profile/companies/profile/Index.vue";
import CompanyProfile from "../views/companies/profile/Index.vue";
import CompaniesManage from "../views/companies/Manage.vue";
import CompaniesOnboarding from "../views/companies/onboarding/Index.vue";
import BidBonds from "../views/bidbonds/Index.vue";

// Superadmin
import CreateRoles from "../views/users/roles/Create.vue";
import ManageRoles from "../views/users/roles/Manage.vue";
import CreateCol from "../views/users/colleagues/Create.vue";
import CreateCust from "../views/users/customers/Create.vue";
import ManageCol from "../views/users/colleagues/Manage.vue";
import ManageCust from "../views/users/customers/Manage.vue";
import ProfileCol from "../views/users/colleagues/Profile.vue";
import AddBranches from "../views/branches/Create.vue";
import ManageBranches from "../views/branches/Manage.vue";
import Messages from "../views/Messages.vue";
import SettingsProfile from "../views/settings/Profile.vue";
import SettingsNotifications from "../views/settings/Notifications.vue";
// import ManageCol from "../views/users/colleagues/Manage.vue";
// import ManageCust from "../views/users/customers/Manage.vue";
// import ProfileCol from "../views/users/colleagues/Profile.vue";
// import AddBranches from "../views/branches/Add.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/customers",
    name: "customers",
    component: Customers,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/customers/:id",
    name: "customer_profile",
    component: CustomerProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/users/customers/:id",
    name: "user_customer_profile",
    component: UserCustomerProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/customers/:id/companies",
    name: "customer_companies",
    component: CustomerCompanies,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/customers/:id/companies/:id",
    name: "customer_company_profile",
    component: CustomerCompanyProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/companies/:id",
    name: "company_profile",
    component: CompanyProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/companies/onboarding",
    name: "companies_onboarding",
    component: CompaniesOnboarding,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/companies/manage",
    name: "companies_manage",
    component: CompaniesManage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/bidbonds",
    name: "bidbonds",
    component: BidBonds,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/bidbonds/:id",
    name: "bidbonds_profile",
    component: BidbondsProfile,
    meta: {
      requiresAuth: true
    }
  },


  // Superadmin
  {
    path: "/users/roles/create",
    name: "create_roles",
    component: CreateRoles,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/users/colleagues/create",
    name: "create_colleagues",
    component: CreateCol,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/users/customers/create",
    name: "create_customers",
    component: CreateCust,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/users/roles/manage",
    name: "manage_roles",
    component: ManageRoles,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/users/colleagues/manage",
    name: "manage_colleagues",
    component: ManageCol,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/users/colleagues/profile",
    name: "profile_colleagues",
    component: ProfileCol,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/users/customers/manage",
    name: "manage_customers",
    component: ManageCust,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/branches/create",
    name: "add_branches",
    component: AddBranches,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/branches/manage",
    name: "manage_branches",
    component: ManageBranches,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/messages",
    name: "messages",
    component: Messages,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/settings/profile",
    name: "settings_profile",
    component: SettingsProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/settings/notifications",
    name: "settings_notifications",
    component: SettingsNotifications,
    meta: {
      requiresAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
