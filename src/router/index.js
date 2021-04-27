import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AllRecipes from '../views/AllRecipes.vue'
import Categories from '../views/Categories.vue'
import Zones from '../views/Zones.vue'
import Zone from '../views/Zone.vue'
import Rechercher from '../views/Rechercher.vue'
import Categorie from '../views/Categorie.vue'
import Meal from '../views/Meal.vue'
import Ingredients from '../views/Ingredients.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/allrecipes',
    name: 'AllRecipes',
    component: AllRecipes
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/zones',
    name: 'Zones',
    component: Zones
  },
  {
    path: '/zone',
    name: 'Zone',
    component: Zone
  },
  {
    path: '/rechercher',
    name: 'Rechercher',
    component: Rechercher
  },
  {
    path: '/categorie',
    name: 'Categorie',
    component: Categorie
  },
  {
    path: '/meal',
    name: 'Meal',
    component: Meal
  },
  {
    path: '/ingredients',
    name: 'Ingredients',
    component: Ingredients
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/allrecipes',
    name: 'AllRecipes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "allrecipes" */ '../views/AllRecipes.vue'),
    children: [
      {
        path: 'lettre',
        name: 'Lettre',
        component: () => import(/* webpackChunkName: "lettre" */ '../components/Lettre.vue')
      }
    ]
  },
  {
    path: '/categories',
    name: 'Categories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Categories" */ '../views/Categories.vue')
  },
  {
    path: '/zones',
    name: 'Zones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Zones" */ '../views/Zones.vue')
  },
  {
    path: '/zone/:slugArea',
    name: 'Zone',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Zone" */ '../views/Zone.vue')
  },
  {
    path: '/rechercher',
    name: 'Rechercher',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Rechercher" */ '../views/Rechercher.vue')
  },
  {
    path: '/categorie/:slug',
    name: 'Categorie',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Categorie" */ '../views/Categorie.vue')
  },
  {
    path: '/meal/:slugSingle',
    name: 'Meal',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Meal" */ '../views/Meal.vue')
  },
  {
    path: '/ingredients/:slugIngredient1',
    name: 'Ingredients',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Ingredients" */ '../views/Ingredients.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
