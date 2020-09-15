import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import("@/views/home/HomeView");
const CategoryView = () => import("@/views/category/CategoryView");
const Cart = () => import("@/views/cart/CartView");
const ProfileView = () => import("@/views/profile/ProfileView");

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: HomeView
}, {
  path: '/category',
  component: CategoryView
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/profile',
  component: ProfileView
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router