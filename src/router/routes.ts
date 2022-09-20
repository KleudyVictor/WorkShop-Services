import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/IndexPage.vue') }],
  },
  {
    path: '/premium',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/PremiumPage.vue') }],
  },
  {
    path: '/ayuda',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AyudaPage.vue') }],
  },
  {
    path: '/pago',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PagoPage.vue') }],
  },
  {
    path: '/pago_exitoso',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PagoExitoso.vue') }],
  },
  {
    path: '/registro',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/RegistroPage.vue')
   }],
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
