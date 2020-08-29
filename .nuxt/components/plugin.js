import Vue from 'vue'

const globalComponents = {
  AppColorSwitcher: () => import('../..\\components\\global\\app\\AppColorSwitcher.vue' /* webpackChunkName: "components_global/app/AppColorSwitcher" */).then(c => c.default || c),
  AppCopyButton: () => import('../..\\components\\global\\app\\AppCopyButton.vue' /* webpackChunkName: "components_global/app/AppCopyButton" */).then(c => c.default || c),
  AppDropdown: () => import('../..\\components\\global\\app\\AppDropdown.vue' /* webpackChunkName: "components_global/app/AppDropdown" */).then(c => c.default || c),
  AppFooter: () => import('../..\\components\\global\\app\\AppFooter.vue' /* webpackChunkName: "components_global/app/AppFooter" */).then(c => c.default || c),
  AppGithubLink: () => import('../..\\components\\global\\app\\AppGithubLink.vue' /* webpackChunkName: "components_global/app/AppGithubLink" */).then(c => c.default || c),
  AppHeader: () => import('../..\\components\\global\\app\\AppHeader.vue' /* webpackChunkName: "components_global/app/AppHeader" */).then(c => c.default || c),
  AppLangSwitcher: () => import('../..\\components\\global\\app\\AppLangSwitcher.vue' /* webpackChunkName: "components_global/app/AppLangSwitcher" */).then(c => c.default || c),
  AppNav: () => import('../..\\components\\global\\app\\AppNav.vue' /* webpackChunkName: "components_global/app/AppNav" */).then(c => c.default || c),
  AppPrevNext: () => import('../..\\components\\global\\app\\AppPrevNext.vue' /* webpackChunkName: "components_global/app/AppPrevNext" */).then(c => c.default || c),
  AppSearch: () => import('../..\\components\\global\\app\\AppSearch.vue' /* webpackChunkName: "components_global/app/AppSearch" */).then(c => c.default || c),
  AppToc: () => import('../..\\components\\global\\app\\AppToc.vue' /* webpackChunkName: "components_global/app/AppToc" */).then(c => c.default || c),
  Alert: () => import('../..\\components\\global\\base\\Alert.vue' /* webpackChunkName: "components_global/base/Alert" */).then(c => c.default || c),
  CodeBlock: () => import('../..\\components\\global\\base\\CodeBlock.vue' /* webpackChunkName: "components_global/base/CodeBlock" */).then(c => c.default || c),
  CodeGroup: () => import('../..\\components\\global\\base\\CodeGroup.vue' /* webpackChunkName: "components_global/base/CodeGroup" */).then(c => c.default || c),
  CodeSandbox: () => import('../..\\components\\global\\base\\CodeSandbox.vue' /* webpackChunkName: "components_global/base/CodeSandbox" */).then(c => c.default || c),
  Home: () => import('../..\\components\\global\\base\\Home.vue' /* webpackChunkName: "components_global/base/Home" */).then(c => c.default || c),
  List: () => import('../..\\components\\global\\base\\List.vue' /* webpackChunkName: "components_global/base/List" */).then(c => c.default || c),
  BuiltWithNuxtDark: () => import('../..\\components\\global\\icons\\BuiltWithNuxtDark.vue' /* webpackChunkName: "components_global/icons/BuiltWithNuxtDark" */).then(c => c.default || c),
  BuiltWithNuxtLight: () => import('../..\\components\\global\\icons\\BuiltWithNuxtLight.vue' /* webpackChunkName: "components_global/icons/BuiltWithNuxtLight" */).then(c => c.default || c),
  IconArrowLeft: () => import('../..\\components\\global\\icons\\IconArrowLeft.vue' /* webpackChunkName: "components_global/icons/IconArrowLeft" */).then(c => c.default || c),
  IconArrowRight: () => import('../..\\components\\global\\icons\\IconArrowRight.vue' /* webpackChunkName: "components_global/icons/IconArrowRight" */).then(c => c.default || c),
  IconBadgeCheck: () => import('../..\\components\\global\\icons\\IconBadgeCheck.vue' /* webpackChunkName: "components_global/icons/IconBadgeCheck" */).then(c => c.default || c),
  IconCheckCircle: () => import('../..\\components\\global\\icons\\IconCheckCircle.vue' /* webpackChunkName: "components_global/icons/IconCheckCircle" */).then(c => c.default || c),
  IconChevronRight: () => import('../..\\components\\global\\icons\\IconChevronRight.vue' /* webpackChunkName: "components_global/icons/IconChevronRight" */).then(c => c.default || c),
  IconClipboardCheck: () => import('../..\\components\\global\\icons\\IconClipboardCheck.vue' /* webpackChunkName: "components_global/icons/IconClipboardCheck" */).then(c => c.default || c),
  IconClipboardCopy: () => import('../..\\components\\global\\icons\\IconClipboardCopy.vue' /* webpackChunkName: "components_global/icons/IconClipboardCopy" */).then(c => c.default || c),
  IconExclamationCircle: () => import('../..\\components\\global\\icons\\IconExclamationCircle.vue' /* webpackChunkName: "components_global/icons/IconExclamationCircle" */).then(c => c.default || c),
  IconExternalLink: () => import('../..\\components\\global\\icons\\IconExternalLink.vue' /* webpackChunkName: "components_global/icons/IconExternalLink" */).then(c => c.default || c),
  IconGithub: () => import('../..\\components\\global\\icons\\IconGithub.vue' /* webpackChunkName: "components_global/icons/IconGithub" */).then(c => c.default || c),
  IconInformationCircle: () => import('../..\\components\\global\\icons\\IconInformationCircle.vue' /* webpackChunkName: "components_global/icons/IconInformationCircle" */).then(c => c.default || c),
  IconMenu: () => import('../..\\components\\global\\icons\\IconMenu.vue' /* webpackChunkName: "components_global/icons/IconMenu" */).then(c => c.default || c),
  IconMoon: () => import('../..\\components\\global\\icons\\IconMoon.vue' /* webpackChunkName: "components_global/icons/IconMoon" */).then(c => c.default || c),
  IconSearch: () => import('../..\\components\\global\\icons\\IconSearch.vue' /* webpackChunkName: "components_global/icons/IconSearch" */).then(c => c.default || c),
  IconSun: () => import('../..\\components\\global\\icons\\IconSun.vue' /* webpackChunkName: "components_global/icons/IconSun" */).then(c => c.default || c),
  IconTranslate: () => import('../..\\components\\global\\icons\\IconTranslate.vue' /* webpackChunkName: "components_global/icons/IconTranslate" */).then(c => c.default || c),
  IconTwitter: () => import('../..\\components\\global\\icons\\IconTwitter.vue' /* webpackChunkName: "components_global/icons/IconTwitter" */).then(c => c.default || c),
  IconX: () => import('../..\\components\\global\\icons\\IconX.vue' /* webpackChunkName: "components_global/icons/IconX" */).then(c => c.default || c),
  IconXCircle: () => import('../..\\components\\global\\icons\\IconXCircle.vue' /* webpackChunkName: "components_global/icons/IconXCircle" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
