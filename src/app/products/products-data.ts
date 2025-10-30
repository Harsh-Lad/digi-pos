// src/app/products/products-data.ts

export interface ProductFeature {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export interface ProductSidebarItem {
  labelKey: string;
  active?: boolean;
  titleKey?: string;
  image?: string;
  bulletsKey?: string;
}

export interface ProductData {
  slug: string;
  nameKey: string;
  categoryKey: string;
  heroTitleKey: string;
  heroDescriptionKey: string;
  heroImages: string;
  complianceTagKey?: string;
  complianceImage?: string;
  ctaTextKey?: string;
  features: ProductFeature[];
  featuresHeaderTextKey: string;
  isSideBarVisible: boolean;
  sidebarMenu?: ProductSidebarItem[];
  sidebarImage?: string;
  overlayImage?: string;
  sidebarTitleKey?: string;
  sidebarBulletsKey?: string;
  horizontalBarKey?: string;
  keyBenefitsSectionKey?: string;
  growthTitleKey?: string;
  isKiosk?: boolean;
}

export const PRODUCTS_DATA: ProductData[] = [
  {
    slug: 'cloud-pos',
    nameKey: 'productsData.cloudPos.name',
    categoryKey: 'productsData.cloudPos.category',
    heroTitleKey: 'productsData.cloudPos.heroTitle',
    heroDescriptionKey: 'productsData.cloudPos.heroDescription',
    heroImages: 'products/Cloud Point of Sales.png',
    complianceTagKey: 'productsData.cloudPos.complianceTag',
    complianceImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIyG9CImBv66uEEChinrNgQL_s05hCggeBg&s',
    ctaTextKey: 'productsData.cloudPos.ctaText',
    featuresHeaderTextKey: 'productsData.cloudPos.featuresHeaderText',
    features: [
      {
        icon: 'bolt',
        titleKey: 'productsData.cloudPos.features.quickSetup.title',
        descriptionKey: 'productsData.cloudPos.features.quickSetup.description',
      },
      {
        icon: 'wifi_off',
        titleKey: 'productsData.cloudPos.features.offlineFunctionality.title',
        descriptionKey: 'productsData.cloudPos.features.offlineFunctionality.description',
      },
      {
        icon: 'query_stats',
        titleKey: 'productsData.cloudPos.features.realTimeData.title',
        descriptionKey: 'productsData.cloudPos.features.realTimeData.description',
      },
      {
        icon: 'touch_app',
        titleKey: 'productsData.cloudPos.features.userFriendly.title',
        descriptionKey: 'productsData.cloudPos.features.userFriendly.description',
      },
      {
        icon: 'devices',
        titleKey: 'productsData.cloudPos.features.multiDevice.title',
        descriptionKey: 'productsData.cloudPos.features.multiDevice.description',
      },
      {
        icon: 'insights',
        titleKey: 'productsData.cloudPos.features.reporting.title',
        descriptionKey: 'productsData.cloudPos.features.reporting.description',
      },
      {
        icon: 'cloud_done',
        titleKey: 'productsData.cloudPos.features.cloudBackup.title',
        descriptionKey: 'productsData.cloudPos.features.cloudBackup.description',
      },
      {
        icon: 'sync_alt',
        titleKey: 'productsData.cloudPos.features.integration.title',
        descriptionKey: 'productsData.cloudPos.features.integration.description',
      },
      {
        icon: 'support_agent',
        titleKey: 'productsData.cloudPos.features.support.title',
        descriptionKey: 'productsData.cloudPos.features.support.description',
      },
    ],
    isSideBarVisible: true,
    sidebarMenu: [
      {
        labelKey: 'productsData.cloudPos.sidebarMenu.dashboards.label',
        active: true,
        titleKey: 'productsData.cloudPos.sidebarMenu.dashboards.title',
        image: 'products/Features-01.png',
        bulletsKey: 'productsData.cloudPos.sidebarMenu.dashboards.bullets',
      },
      {
        labelKey: 'productsData.cloudPos.sidebarMenu.menu.label',
        titleKey: 'productsData.cloudPos.sidebarMenu.menu.title',
        image: 'products/Features-02.png',
        bulletsKey: 'productsData.cloudPos.sidebarMenu.menu.bullets',
      },
      {
        labelKey: 'productsData.cloudPos.sidebarMenu.tableManagement.label',
        titleKey: 'productsData.cloudPos.sidebarMenu.tableManagement.title',
        image: 'products/Features-03.png',
        bulletsKey: 'productsData.cloudPos.sidebarMenu.tableManagement.bullets',
      },
      {
        labelKey: 'productsData.cloudPos.sidebarMenu.reporting.label',
        titleKey: 'productsData.cloudPos.sidebarMenu.reporting.title',
        image: 'products/Features-04.png',
        bulletsKey: 'productsData.cloudPos.sidebarMenu.reporting.bullets',
      },
      {
        labelKey: 'productsData.cloudPos.sidebarMenu.outlets.label',
        titleKey: 'productsData.cloudPos.sidebarMenu.outlets.title',
        image: 'products/Features-05.png',
        bulletsKey: 'productsData.cloudPos.sidebarMenu.outlets.bullets',
      },
      {
        labelKey: 'productsData.cloudPos.sidebarMenu.recipes.label',
        titleKey: 'productsData.cloudPos.sidebarMenu.recipes.title',
        image: 'products/Features-06.png',
        bulletsKey: 'productsData.cloudPos.sidebarMenu.recipes.bullets',
      },
      {
        labelKey: 'productsData.cloudPos.sidebarMenu.inventory.label',
        titleKey: 'productsData.cloudPos.sidebarMenu.inventory.title',
        image: 'products/Features-07.png',
        bulletsKey: 'productsData.cloudPos.sidebarMenu.inventory.bullets',
      },
      {
        labelKey: 'productsData.cloudPos.sidebarMenu.purchase.label',
        titleKey: 'productsData.cloudPos.sidebarMenu.purchase.title',
        image: 'products/Features-08.png',
        bulletsKey: 'productsData.cloudPos.sidebarMenu.purchase.bullets',
      },
      {
        labelKey: 'productsData.cloudPos.sidebarMenu.offline.label',
        titleKey: 'productsData.cloudPos.sidebarMenu.offline.title',
        image: 'products/Features-09.png',
        bulletsKey: 'productsData.cloudPos.sidebarMenu.offline.bullets',
      },
      {
        labelKey: 'productsData.cloudPos.sidebarMenu.zatca.label',
        titleKey: 'productsData.cloudPos.sidebarMenu.zatca.title',
        image: 'products/Features-10.png',
        bulletsKey: 'productsData.cloudPos.sidebarMenu.zatca.bullets',
      },
    ],
    sidebarImage: 'products/Features-01.png',
    overlayImage: 'products/Features-01.png',
    sidebarTitleKey: 'productsData.cloudPos.sidebarTitle',
    sidebarBulletsKey: 'productsData.cloudPos.sidebarBullets',
    isKiosk: false
  },
  {
    slug: 'waiter-tab',
    nameKey: 'productsData.waiterTab.name',
    categoryKey: 'productsData.waiterTab.category',
    heroTitleKey: 'productsData.waiterTab.heroTitle',
    heroDescriptionKey: 'productsData.waiterTab.heroDescription',
    heroImages: 'products/Waiter Tab.png',
    ctaTextKey: 'productsData.waiterTab.ctaText',
    featuresHeaderTextKey: 'productsData.waiterTab.featuresHeaderText',
    features: [
      {
        icon: 'restaurant',
        titleKey: 'productsData.waiterTab.features.orderTaking.title',
        descriptionKey: 'productsData.waiterTab.features.orderTaking.description',
      },
      {
        icon: 'fact_check',
        titleKey: 'productsData.waiterTab.features.accurateOrdering.title',
        descriptionKey: 'productsData.waiterTab.features.accurateOrdering.description',
      },
      {
        icon: 'tune',
        titleKey: 'productsData.waiterTab.features.customizable.title',
        descriptionKey: 'productsData.waiterTab.features.customizable.description',
      },
      {
        icon: 'send',
        titleKey: 'productsData.waiterTab.features.instantSync.title',
        descriptionKey: 'productsData.waiterTab.features.instantSync.description',
      },
      {
        icon: 'directions_bus',
        titleKey: 'productsData.waiterTab.features.foodTrucks.title',
        descriptionKey: 'productsData.waiterTab.features.foodTrucks.description',
      },
      {
        icon: 'call_split',
        titleKey: 'productsData.waiterTab.features.splitMerge.title',
        descriptionKey: 'productsData.waiterTab.features.splitMerge.description',
      },
      {
        icon: 'dashboard_customize',
        titleKey: 'productsData.waiterTab.features.userFriendly.title',
        descriptionKey: 'productsData.waiterTab.features.userFriendly.description',
      },
      {
        icon: 'devices_other',
        titleKey: 'productsData.waiterTab.features.multiDevice.title',
        descriptionKey: 'productsData.waiterTab.features.multiDevice.description',
      },
      {
        icon: 'cloud_upload',
        titleKey: 'productsData.waiterTab.features.cloudBackup.title',
        descriptionKey: 'productsData.waiterTab.features.cloudBackup.description',
      },
    ],
    isSideBarVisible: false,
    isKiosk: false
  },
  {
    slug: 'digikds',
    nameKey: 'productsData.digiKds.name',
    categoryKey: 'productsData.digiKds.category',
    heroTitleKey: 'productsData.digiKds.heroTitle',
    heroDescriptionKey: 'productsData.digiKds.heroDescription',
    heroImages: 'products/kds.jpg',
    complianceTagKey: 'productsData.digiKds.complianceTag',
    complianceImage: '/products/iosandorid.png.png',
    ctaTextKey: 'productsData.digiKds.ctaText',
    featuresHeaderTextKey: 'productsData.digiKds.featuresHeaderText',
    features: [
      {
        icon: 'monitor',
        titleKey: 'productsData.digiKds.features.realTimeDisplay.title',
        descriptionKey: 'productsData.digiKds.features.realTimeDisplay.description',
      },
      {
        icon: 'receipt_long',
        titleKey: 'productsData.digiKds.features.paperless.title',
        descriptionKey: 'productsData.digiKds.features.paperless.description',
      },
      {
        icon: 'sort',
        titleKey: 'productsData.digiKds.features.prioritization.title',
        descriptionKey: 'productsData.digiKds.features.prioritization.description',
      },
      {
        icon: 'track_changes',
        titleKey: 'productsData.digiKds.features.tracking.title',
        descriptionKey: 'productsData.digiKds.features.tracking.description',
      },
      {
        icon: 'history',
        titleKey: 'productsData.digiKds.features.recall.title',
        descriptionKey: 'productsData.digiKds.features.recall.description',
      },
      {
        icon: 'speed',
        titleKey: 'productsData.digiKds.features.fasterService.title',
        descriptionKey: 'productsData.digiKds.features.fasterService.description',
      },
      {
        icon: 'eco',
        titleKey: 'productsData.digiKds.features.reducedWaste.title',
        descriptionKey: 'productsData.digiKds.features.reducedWaste.description',
      },
      {
        icon: 'devices_other',
        titleKey: 'productsData.digiKds.features.multiDevice.title',
        descriptionKey: 'productsData.digiKds.features.multiDevice.description',
      },
      {
        icon: 'cloud_sync',
        titleKey: 'productsData.digiKds.features.realTimeUpdates.title',
        descriptionKey: 'productsData.digiKds.features.realTimeUpdates.description',
      },
    ],
    isSideBarVisible: false,
    horizontalBarKey: 'productsData.digiKds.horizontalBar',
    isKiosk: false
  },
  {
    slug: 'kds-screens',
    nameKey: 'productsData.kdsScreens.name',
    categoryKey: 'productsData.kdsScreens.category',
    heroTitleKey: 'productsData.kdsScreens.heroTitle',
    heroDescriptionKey: 'productsData.kdsScreens.heroDescription',
    heroImages: 'products/KDS Screen.png',
    complianceTagKey: 'productsData.kdsScreens.complianceTag',
    
    ctaTextKey: 'productsData.kdsScreens.ctaText',
    featuresHeaderTextKey: 'productsData.kdsScreens.featuresHeaderText',
    features: [
      {
        icon: 'monitor',
        titleKey: 'productsData.kdsScreens.features.realTimeDisplay.title',
        descriptionKey: 'productsData.kdsScreens.features.realTimeDisplay.description',
      },
      {
        icon: 'receipt_long',
        titleKey: 'productsData.kdsScreens.features.paperless.title',
        descriptionKey: 'productsData.kdsScreens.features.paperless.description',
      },
      {
        icon: 'sort',
        titleKey: 'productsData.kdsScreens.features.prioritization.title',
        descriptionKey: 'productsData.kdsScreens.features.prioritization.description',
      },
      {
        icon: 'track_changes',
        titleKey: 'productsData.kdsScreens.features.tracking.title',
        descriptionKey: 'productsData.kdsScreens.features.tracking.description',
      },
      {
        icon: 'history',
        titleKey: 'productsData.kdsScreens.features.recall.title',
        descriptionKey: 'productsData.kdsScreens.features.recall.description',
      },
      {
        icon: 'speed',
        titleKey: 'productsData.kdsScreens.features.fasterService.title',
        descriptionKey: 'productsData.kdsScreens.features.fasterService.description',
      },
      {
        icon: 'eco',
        titleKey: 'productsData.kdsScreens.features.reducedWaste.title',
        descriptionKey: 'productsData.kdsScreens.features.reducedWaste.description',
      },
      {
        icon: 'devices_other',
        titleKey: 'productsData.kdsScreens.features.multiDevice.title',
        descriptionKey: 'productsData.kdsScreens.features.multiDevice.description',
      },
      {
        icon: 'cloud_sync',
        titleKey: 'productsData.kdsScreens.features.realTimeUpdates.title',
        descriptionKey: 'productsData.kdsScreens.features.realTimeUpdates.description',
      },
    ],
    isSideBarVisible: false,
    horizontalBarKey: 'productsData.kdsScreens.horizontalBar',
    isKiosk: false
  },
  {
    slug: 'hardware-tablets',
    nameKey: 'productsData.hardwareTablets.name',
    categoryKey: 'productsData.hardwareTablets.category',
    heroTitleKey: 'productsData.hardwareTablets.heroTitle',
    heroDescriptionKey: 'productsData.hardwareTablets.heroDescription',
    heroImages: 'products/Tab Page.png',

    ctaTextKey: 'productsData.hardwareTablets.ctaText',
    featuresHeaderTextKey: 'productsData.hardwareTablets.featuresHeaderText',
    features: [
      {
        icon: 'tablet',
        titleKey: 'productsData.hardwareTablets.features.realTimeDisplay.title',
        descriptionKey: 'productsData.hardwareTablets.features.realTimeDisplay.description',
      },
      {
        icon: 'devices',
        titleKey: 'productsData.hardwareTablets.features.paperless.title',
        descriptionKey: 'productsData.hardwareTablets.features.paperless.description',
      },
      {
        icon: 'touch_app',
        titleKey: 'productsData.hardwareTablets.features.prioritization.title',
        descriptionKey: 'productsData.hardwareTablets.features.prioritization.description',
      },
      {
        icon: 'battery_charging_full',
        titleKey: 'productsData.hardwareTablets.features.tracking.title',
        descriptionKey: 'productsData.hardwareTablets.features.tracking.description',
      },
      {
        icon: 'wifi',
        titleKey: 'productsData.hardwareTablets.features.recall.title',
        descriptionKey: 'productsData.hardwareTablets.features.recall.description',
      },
      {
        icon: 'speed',
        titleKey: 'productsData.hardwareTablets.features.fasterService.title',
        descriptionKey: 'productsData.hardwareTablets.features.fasterService.description',
      },
      {
        icon: 'smartphone',
        titleKey: 'productsData.hardwareTablets.features.reducedWaste.title',
        descriptionKey: 'productsData.hardwareTablets.features.reducedWaste.description',
      },
      {
        icon: 'sync',
        titleKey: 'productsData.hardwareTablets.features.multiDevice.title',
        descriptionKey: 'productsData.hardwareTablets.features.multiDevice.description',
      },
      {
        icon: 'cloud_done',
        titleKey: 'productsData.hardwareTablets.features.realTimeUpdates.title',
        descriptionKey: 'productsData.hardwareTablets.features.realTimeUpdates.description',
      },
    ],
    isSideBarVisible: false,
    horizontalBarKey: 'productsData.hardwareTablets.horizontalBar',
    isKiosk: false
  },
  {
    slug: 'customer-display',
    nameKey: 'productsData.customerDisplay.name',
    categoryKey: 'productsData.customerDisplay.category',
    heroTitleKey: 'productsData.customerDisplay.heroTitle',
    heroDescriptionKey: 'productsData.customerDisplay.heroDescription',
    heroImages: 'products/customerDisplay.PNG',
    ctaTextKey: 'productsData.customerDisplay.ctaText',
    featuresHeaderTextKey: 'productsData.customerDisplay.featuresHeaderText',
    features: [
      {
        icon: 'monitor',
        titleKey: 'productsData.customerDisplay.features.realTimeDisplay.title',
        descriptionKey: 'productsData.customerDisplay.features.realTimeDisplay.description',
      },
      {
        icon: 'visibility',
        titleKey: 'productsData.customerDisplay.features.transparent.title',
        descriptionKey: 'productsData.customerDisplay.features.transparent.description',
      },
      {
        icon: 'local_offer',
        titleKey: 'productsData.customerDisplay.features.personalized.title',
        descriptionKey: 'productsData.customerDisplay.features.personalized.description',
      },
      {
        icon: 'branding_watermark',
        titleKey: 'productsData.customerDisplay.features.branding.title',
        descriptionKey: 'productsData.customerDisplay.features.branding.description',
      },
      {
        icon: 'autorenew',
        titleKey: 'productsData.customerDisplay.features.dynamicContent.title',
        descriptionKey: 'productsData.customerDisplay.features.dynamicContent.description',
      },
      {
        icon: 'language',
        titleKey: 'productsData.customerDisplay.features.multilingual.title',
        descriptionKey: 'productsData.customerDisplay.features.multilingual.description',
      },
      {
        icon: 'fit_screen',
        titleKey: 'productsData.customerDisplay.features.compactDesign.title',
        descriptionKey: 'productsData.customerDisplay.features.compactDesign.description',
      },
      {
        icon: 'devices',
        titleKey: 'productsData.customerDisplay.features.multiDevice.title',
        descriptionKey: 'productsData.customerDisplay.features.multiDevice.description',
      },
      {
        icon: 'dashboard_customize',
        titleKey: 'productsData.customerDisplay.features.customizable.title',
        descriptionKey: 'productsData.customerDisplay.features.customizable.description',
      },
    ],
    isSideBarVisible: false,
    horizontalBarKey: 'productsData.customerDisplay.horizontalBar',
    isKiosk: false
    
  },
  {
    slug: 'table-ordering',
    nameKey: 'productsData.tableOrdering.name',
    categoryKey: 'productsData.tableOrdering.category',
    heroTitleKey: 'productsData.tableOrdering.heroTitle',
    heroDescriptionKey: 'productsData.tableOrdering.heroDescription',
    heroImages: 'products/Table Ordering.PNG',
    ctaTextKey: 'productsData.tableOrdering.ctaText',
    featuresHeaderTextKey: 'productsData.tableOrdering.featuresHeaderText',
    features: [
      {
        icon: 'qr_code_scanner',
        titleKey: 'productsData.tableOrdering.features.qrAccess.title',
        descriptionKey: 'productsData.tableOrdering.features.qrAccess.description',
      },
      {
        icon: 'tune',
        titleKey: 'productsData.tableOrdering.features.customization.title',
        descriptionKey: 'productsData.tableOrdering.features.customization.description',
      },
      {
        icon: 'update',
        titleKey: 'productsData.tableOrdering.features.realTimeUpdates.title',
        descriptionKey: 'productsData.tableOrdering.features.realTimeUpdates.description',
      },
      {
        icon: 'touch_app',
        titleKey: 'productsData.tableOrdering.features.userFriendly.title',
        descriptionKey: 'productsData.tableOrdering.features.userFriendly.description',
      },
      {
        icon: 'speed',
        titleKey: 'productsData.tableOrdering.features.speedsUp.title',
        descriptionKey: 'productsData.tableOrdering.features.speedsUp.description',
      },
      {
        icon: 'kitchen',
        titleKey: 'productsData.tableOrdering.features.kitchenIntegration.title',
        descriptionKey: 'productsData.tableOrdering.features.kitchenIntegration.description',
      },
      {
        icon: 'palette',
        titleKey: 'productsData.tableOrdering.features.customBranding.title',
        descriptionKey: 'productsData.tableOrdering.features.customBranding.description',
      },
      {
        icon: 'payment',
        titleKey: 'productsData.tableOrdering.features.integratedPayments.title',
        descriptionKey: 'productsData.tableOrdering.features.integratedPayments.description',
      },
      {
        icon: 'translate',
        titleKey: 'productsData.tableOrdering.features.multiLanguage.title',
        descriptionKey: 'productsData.tableOrdering.features.multiLanguage.description',
      },
    ],
    isSideBarVisible: false,
    isKiosk: false
  },
  {
    slug: 'kiosk',
    nameKey: 'productsData.kiosk.name',
    categoryKey: 'productsData.kiosk.category',
    heroTitleKey: 'productsData.kiosk.heroTitle',
    heroDescriptionKey: 'productsData.kiosk.heroDescription',
    heroImages: 'products/kiosk.PNG',
    ctaTextKey: 'productsData.kiosk.ctaText',
    featuresHeaderTextKey: 'productsData.kiosk.featuresHeaderText',
    growthTitleKey: 'productsData.kiosk.growthTitle',
    features: [
      {
        icon: 'touch_app',
        titleKey: 'productsData.kiosk.features.userFriendly.title',
        descriptionKey: 'productsData.kiosk.features.userFriendly.description',
      },
      {
        icon: 'tune',
        titleKey: 'productsData.kiosk.features.fullyCustomizable.title',
        descriptionKey: 'productsData.kiosk.features.fullyCustomizable.description',
      },
      {
        icon: 'speed',
        titleKey: 'productsData.kiosk.features.speedsUp.title',
        descriptionKey: 'productsData.kiosk.features.speedsUp.description',
      },
      {
        icon: 'lock',
        titleKey: 'productsData.kiosk.features.fastSecure.title',
        descriptionKey: 'productsData.kiosk.features.fastSecure.description',
      },
      {
        icon: 'sync',
        titleKey: 'productsData.kiosk.features.realTimeUpdates.title',
        descriptionKey: 'productsData.kiosk.features.realTimeUpdates.description',
      },
      {
        icon: 'devices_other',
        titleKey: 'productsData.kiosk.features.compactDesign.title',
        descriptionKey: 'productsData.kiosk.features.compactDesign.description',
      },
      {
        icon: 'translate',
        titleKey: 'productsData.kiosk.features.multiLanguage.title',
        descriptionKey: 'productsData.kiosk.features.multiLanguage.description',
      },
      {
        icon: 'phonelink',
        titleKey: 'productsData.kiosk.features.multiDevice.title',
        descriptionKey: 'productsData.kiosk.features.multiDevice.description',
      }
    ],
    isSideBarVisible: false,
    isKiosk: true
  },
    {
    slug: 'online-ordering',
    nameKey: 'productsData.onlineOrdering.name',
    categoryKey: 'productsData.onlineOrdering.category',
    heroTitleKey: 'productsData.onlineOrdering.heroTitle',
    heroDescriptionKey: 'productsData.onlineOrdering.heroDescription',
    heroImages: 'products/Online Ordering System.png',
    ctaTextKey: 'productsData.onlineOrdering.ctaText',
    featuresHeaderTextKey: 'productsData.onlineOrdering.featuresHeaderText',
    growthTitleKey: 'productsData.onlineOrdering.growthTitle',
    features: [
      {
        icon: 'web',
        titleKey: 'productsData.onlineOrdering.features.onlineOrderingSystem.title',
        descriptionKey: 'productsData.onlineOrdering.features.onlineOrderingSystem.description',
      },
      {
        icon: 'cloud_sync',
        titleKey: 'productsData.onlineOrdering.features.cloudPosIntegration.title',
        descriptionKey: 'productsData.onlineOrdering.features.cloudPosIntegration.description',
      },
      {
        icon: 'domain',
        titleKey: 'productsData.onlineOrdering.features.restaurantWebsiteOrdering.title',
        descriptionKey: 'productsData.onlineOrdering.features.restaurantWebsiteOrdering.description',
      },
      {
        icon: 'phone_android',
        titleKey: 'productsData.onlineOrdering.features.mobileAppOrdering.title',
        descriptionKey: 'productsData.onlineOrdering.features.mobileAppOrdering.description',
      },
      {
        icon: 'schedule',
        titleKey: 'productsData.onlineOrdering.features.realTimeOrderTracking.title',
        descriptionKey: 'productsData.onlineOrdering.features.realTimeOrderTracking.description',
      },
      {
        icon: 'credit_card',
        titleKey: 'productsData.onlineOrdering.features.multiplePaymentOptions.title',
        descriptionKey: 'productsData.onlineOrdering.features.multiplePaymentOptions.description',
      },
      {
        icon: 'account_balance',
        titleKey: 'productsData.onlineOrdering.features.localPaymentGateways.title',
        descriptionKey: 'productsData.onlineOrdering.features.localPaymentGateways.description',
      },
      {
        icon: 'restaurant',
        titleKey: 'productsData.onlineOrdering.features.errorFreeKitchenOperations.title',
        descriptionKey: 'productsData.onlineOrdering.features.errorFreeKitchenOperations.description',
      },
      {
        icon: 'favorite',
        titleKey: 'productsData.onlineOrdering.features.customerConvenience.title',
        descriptionKey: 'productsData.onlineOrdering.features.customerConvenience.description',
      }
    ],
    isSideBarVisible: false,
    keyBenefitsSectionKey: 'productsData.onlineOrdering.keyBenefitsSection',
    isKiosk: false
  },
  {
    slug: 'queue-management-system',
    nameKey: 'productsData.queueManagement.name',
    categoryKey: 'productsData.queueManagement.category',
    heroTitleKey: 'productsData.queueManagement.heroTitle',
    heroDescriptionKey: 'productsData.queueManagement.heroDescription',
    heroImages: 'products/Digital Queue Management.png',
    ctaTextKey: 'productsData.queueManagement.ctaText',
    featuresHeaderTextKey: 'productsData.queueManagement.featuresHeaderText',
    features: [
      {
        icon: 'update',
        titleKey: 'productsData.queueManagement.features.realTimeQueueUpdates.title',
        descriptionKey: 'productsData.queueManagement.features.realTimeQueueUpdates.description',
      },
      {
        icon: 'notifications_active',
        titleKey: 'productsData.queueManagement.features.customerNotificationSystem.title',
        descriptionKey: 'productsData.queueManagement.features.customerNotificationSystem.description',
      },
      {
        icon: 'table_restaurant',
        titleKey: 'productsData.queueManagement.features.tableAllocationAutomation.title',
        descriptionKey: 'productsData.queueManagement.features.tableAllocationAutomation.description',
      },
      {
        icon: 'analytics',
        titleKey: 'productsData.queueManagement.features.queueAnalyticsReporting.title',
        descriptionKey: 'productsData.queueManagement.features.queueAnalyticsReporting.description',
      },
      {
        icon: 'phone_android',
        titleKey: 'productsData.queueManagement.features.mobileQueueManagement.title',
        descriptionKey: 'productsData.queueManagement.features.mobileQueueManagement.description',
      },
      {
        icon: 'contactless',
        titleKey: 'productsData.queueManagement.features.contactlessQueueSystem.title',
        descriptionKey: 'productsData.queueManagement.features.contactlessQueueSystem.description',
      },
      {
        icon: 'sync',
        titleKey: 'productsData.queueManagement.features.multiChannelQueueIntegration.title',
        descriptionKey: 'productsData.queueManagement.features.multiChannelQueueIntegration.description',
      },
      {
        icon: 'schedule',
        titleKey: 'productsData.queueManagement.features.waitTimePrediction.title',
        descriptionKey: 'productsData.queueManagement.features.waitTimePrediction.description',
      },
      {
        icon: 'tune',
        titleKey: 'productsData.queueManagement.features.queueOptimization.title',
        descriptionKey: 'productsData.queueManagement.features.queueOptimization.description',
      }
    ],
    isSideBarVisible: false,
    keyBenefitsSectionKey: 'productsData.queueManagement.keyBenefitsSection',
    isKiosk: false
  },
  {
    slug: 'product-menu-management',
    nameKey: 'productsData.productMenuManagement.name',
    categoryKey: 'productsData.productMenuManagement.category',
    heroTitleKey: 'productsData.productMenuManagement.heroTitle',
    heroDescriptionKey: 'productsData.productMenuManagement.heroDescription',
    heroImages: 'products/Product and Menu Management.png',
    ctaTextKey: 'productsData.productMenuManagement.ctaText',
    featuresHeaderTextKey: 'productsData.productMenuManagement.featuresHeaderText',
    features: [
      {
        icon: 'cloud',
        titleKey: 'productsData.productMenuManagement.features.cloudBasedPosSystem.title',
        descriptionKey: 'productsData.productMenuManagement.features.cloudBasedPosSystem.description',
      },
      {
        icon: 'restaurant_menu',
        titleKey: 'productsData.productMenuManagement.features.restaurantMenuManagement.title',
        descriptionKey: 'productsData.productMenuManagement.features.restaurantMenuManagement.description',
      },
      {
        icon: 'dashboard',
        titleKey: 'productsData.productMenuManagement.features.centralizedProductControl.title',
        descriptionKey: 'productsData.productMenuManagement.features.centralizedProductControl.description',
      },
      {
        icon: 'tune',
        titleKey: 'productsData.productMenuManagement.features.dynamicMenuCustomization.title',
        descriptionKey: 'productsData.productMenuManagement.features.dynamicMenuCustomization.description',
      },
      {
        icon: 'update',
        titleKey: 'productsData.productMenuManagement.features.realTimeMenuUpdates.title',
        descriptionKey: 'productsData.productMenuManagement.features.realTimeMenuUpdates.description',
      },
      {
        icon: 'speed',
        titleKey: 'productsData.productMenuManagement.features.efficientRestaurantOperations.title',
        descriptionKey: 'productsData.productMenuManagement.features.efficientRestaurantOperations.description',
      },
      {
        icon: 'dining',
        titleKey: 'productsData.productMenuManagement.features.onlineAndDineInOrders.title',
        descriptionKey: 'productsData.productMenuManagement.features.onlineAndDineInOrders.description',
      },
      {
        icon: 'local_offer',
        titleKey: 'productsData.productMenuManagement.features.flexiblePricingSpecials.title',
        descriptionKey: 'productsData.productMenuManagement.features.flexiblePricingSpecials.description',
      },
      {
        icon: 'star',
        titleKey: 'productsData.productMenuManagement.features.improvedCustomerExperience.title',
        descriptionKey: 'productsData.productMenuManagement.features.improvedCustomerExperience.description',
      }
    ],
    isSideBarVisible: false,
    keyBenefitsSectionKey: 'productsData.productMenuManagement.keyBenefitsSection',
    isKiosk: false
  },
  {
    slug: 'recipe-management',
    nameKey: 'productsData.recipeManagement.name',
    categoryKey: 'productsData.recipeManagement.category',
    heroTitleKey: 'productsData.recipeManagement.heroTitle',
    heroDescriptionKey: 'productsData.recipeManagement.heroDescription',
    heroImages: 'products/Recipe Management.png',
    ctaTextKey: 'productsData.recipeManagement.ctaText',
    featuresHeaderTextKey: 'productsData.recipeManagement.featuresHeaderText',
    features: [
      {
        icon: 'restaurant',
        titleKey: 'productsData.recipeManagement.features.restaurantPosFeatures.title',
        descriptionKey: 'productsData.recipeManagement.features.restaurantPosFeatures.description',
      },
      {
        icon: 'cloud',
        titleKey: 'productsData.recipeManagement.features.cloudBasedManagement.title',
        descriptionKey: 'productsData.recipeManagement.features.cloudBasedManagement.description',
      },
      {
        icon: 'dashboard',
        titleKey: 'productsData.recipeManagement.features.menuProductManagementPos.title',
        descriptionKey: 'productsData.recipeManagement.features.menuProductManagementPos.description',
      },
      {
        icon: 'calculate',
        titleKey: 'productsData.recipeManagement.features.recipeCostAnalysis.title',
        descriptionKey: 'productsData.recipeManagement.features.recipeCostAnalysis.description',
      },
      {
        icon: 'inventory',
        titleKey: 'productsData.recipeManagement.features.inventoryTrackingRestaurants.title',
        descriptionKey: 'productsData.recipeManagement.features.inventoryTrackingRestaurants.description',
      },
      {
        icon: 'update',
        titleKey: 'productsData.recipeManagement.features.realTimeMenuUpdatesPos.title',
        descriptionKey: 'productsData.recipeManagement.features.realTimeMenuUpdatesPos.description',
      },
      {
        icon: 'scale',
        titleKey: 'productsData.recipeManagement.features.portionControlPos.title',
        descriptionKey: 'productsData.recipeManagement.features.portionControlPos.description',
      },
      {
        icon: 'recycling',
        titleKey: 'productsData.recipeManagement.features.wasteReductionTools.title',
        descriptionKey: 'productsData.recipeManagement.features.wasteReductionTools.description',
      },
      {
        icon: 'book',
        titleKey: 'productsData.recipeManagement.features.restaurantRecipeSystem.title',
        descriptionKey: 'productsData.recipeManagement.features.restaurantRecipeSystem.description',
      }
    ],
    isSideBarVisible: false,
    keyBenefitsSectionKey: 'productsData.recipeManagement.keyBenefitsSection',
    isKiosk: false
  },
  {
    slug: 'inventory-management',
    nameKey: 'productsData.inventoryManagement.name',
    categoryKey: 'productsData.inventoryManagement.category',
    heroTitleKey: 'productsData.inventoryManagement.heroTitle',
    heroDescriptionKey: 'productsData.inventoryManagement.heroDescription',
    heroImages: 'products/Inventory Management.png',
    ctaTextKey: 'productsData.inventoryManagement.ctaText',
    featuresHeaderTextKey: 'productsData.inventoryManagement.featuresHeaderText',
    features: [
      {
        icon: 'cloud',
        titleKey: 'productsData.inventoryManagement.features.cloudBasedPosSystem.title',
        descriptionKey: 'productsData.inventoryManagement.features.cloudBasedPosSystem.description',
      },
      {
        icon: 'inventory_2',
        titleKey: 'productsData.inventoryManagement.features.restaurantInventoryManagement.title',
        descriptionKey: 'productsData.inventoryManagement.features.restaurantInventoryManagement.description',
      },
      {
        icon: 'calculate',
        titleKey: 'productsData.inventoryManagement.features.recipeCostAnalysis.title',
        descriptionKey: 'productsData.inventoryManagement.features.recipeCostAnalysis.description',
      },
      {
        icon: 'restaurant_menu',
        titleKey: 'productsData.inventoryManagement.features.menuManagementSoftware.title',
        descriptionKey: 'productsData.inventoryManagement.features.menuManagementSoftware.description',
      },
      {
        icon: 'visibility',
        titleKey: 'productsData.inventoryManagement.features.realTimeStockTracking.title',
        descriptionKey: 'productsData.inventoryManagement.features.realTimeStockTracking.description',
      },
      {
        icon: 'scale',
        titleKey: 'productsData.inventoryManagement.features.portionControlRestaurants.title',
        descriptionKey: 'productsData.inventoryManagement.features.portionControlRestaurants.description',
      },
      {
        icon: 'notification_important',
        titleKey: 'productsData.inventoryManagement.features.automatedReorderAlerts.title',
        descriptionKey: 'productsData.inventoryManagement.features.automatedReorderAlerts.description',
      },
      {
        icon: 'eco',
        titleKey: 'productsData.inventoryManagement.features.wasteReductionStrategies.title',
        descriptionKey: 'productsData.inventoryManagement.features.wasteReductionStrategies.description',
      },
      {
        icon: 'insights',
        titleKey: 'productsData.inventoryManagement.features.menuProfitabilityInsights.title',
        descriptionKey: 'productsData.inventoryManagement.features.menuProfitabilityInsights.description',
      }
    ],
    isSideBarVisible: false,
    keyBenefitsSectionKey: 'productsData.inventoryManagement.keyBenefitsSection',
    isKiosk: false
  },
  {
    slug: 'purchase-supply-chain-management',
    nameKey: 'productsData.purchaseSupplyChain.name',
    categoryKey: 'productsData.purchaseSupplyChain.category',
    heroTitleKey: 'productsData.purchaseSupplyChain.heroTitle',
    heroDescriptionKey: 'productsData.purchaseSupplyChain.heroDescription',
    heroImages: 'products/Inventory Management.png',
    ctaTextKey: 'productsData.purchaseSupplyChain.ctaText',
    featuresHeaderTextKey: 'productsData.purchaseSupplyChain.featuresHeaderText',
    features: [
      {
        icon: 'cloud',
        titleKey: 'productsData.purchaseSupplyChain.features.cloudBasedPosSystem.title',
        descriptionKey: 'productsData.purchaseSupplyChain.features.cloudBasedPosSystem.description',
      },
      {
        icon: 'inventory_2',
        titleKey: 'productsData.purchaseSupplyChain.features.restaurantInventoryManagement.title',
        descriptionKey: 'productsData.purchaseSupplyChain.features.restaurantInventoryManagement.description',
      },
      {
        icon: 'calculate',
        titleKey: 'productsData.purchaseSupplyChain.features.recipeCostAnalysis.title',
        descriptionKey: 'productsData.purchaseSupplyChain.features.recipeCostAnalysis.description',
      },
      {
        icon: 'restaurant_menu',
        titleKey: 'productsData.purchaseSupplyChain.features.menuManagementSoftware.title',
        descriptionKey: 'productsData.purchaseSupplyChain.features.menuManagementSoftware.description',
      },
      {
        icon: 'link',
        titleKey: 'productsData.purchaseSupplyChain.features.integratedPurchaseManagement.title',
        descriptionKey: 'productsData.purchaseSupplyChain.features.integratedPurchaseManagement.description',
      },
      {
        icon: 'groups',
        titleKey: 'productsData.purchaseSupplyChain.features.vendorRelationshipManagement.title',
        descriptionKey: 'productsData.purchaseSupplyChain.features.vendorRelationshipManagement.description',
      },
      {
        icon: 'notification_important',
        titleKey: 'productsData.purchaseSupplyChain.features.automatedStockAlerts.title',
        descriptionKey: 'productsData.purchaseSupplyChain.features.automatedStockAlerts.description',
      },
      {
        icon: 'scale',
        titleKey: 'productsData.purchaseSupplyChain.features.portionControlTools.title',
        descriptionKey: 'productsData.purchaseSupplyChain.features.portionControlTools.description',
      },
      {
        icon: 'analytics',
        titleKey: 'productsData.purchaseSupplyChain.features.salesPurchaseReporting.title',
        descriptionKey: 'productsData.purchaseSupplyChain.features.salesPurchaseReporting.description',
      }
    ],
    isSideBarVisible: false,
    keyBenefitsSectionKey: 'productsData.purchaseSupplyChain.keyBenefitsSection',
    isKiosk: false
  },
  {
    slug: 'retail-pos',
    nameKey: 'productsData.retailPos.name',
    categoryKey: 'productsData.retailPos.category',
    heroTitleKey: 'productsData.retailPos.heroTitle',
    heroDescriptionKey: 'productsData.retailPos.heroDescription',
    heroImages: 'products/POS Retail.png',
    complianceTagKey: 'productsData.retailPos.complianceTag',
    complianceImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIyG9CImBv66uEEChinrNgQL_s05hCggeBg&s',
    ctaTextKey: 'productsData.retailPos.ctaText',
    featuresHeaderTextKey: 'productsData.retailPos.featuresHeaderText',
    features: [
      {
        icon: 'bolt',
        titleKey: 'productsData.retailPos.features.quickSetup.title',
        descriptionKey: 'productsData.retailPos.features.quickSetup.description',
      },
      {
        icon: 'wifi_off',
        titleKey: 'productsData.retailPos.features.offlineFunctionality.title',
        descriptionKey: 'productsData.retailPos.features.offlineFunctionality.description',
      },
      {
        icon: 'query_stats',
        titleKey: 'productsData.retailPos.features.realTimeData.title',
        descriptionKey: 'productsData.retailPos.features.realTimeData.description',
      },
      {
        icon: 'touch_app',
        titleKey: 'productsData.retailPos.features.userFriendly.title',
        descriptionKey: 'productsData.retailPos.features.userFriendly.description',
      },
      {
        icon: 'devices',
        titleKey: 'productsData.retailPos.features.multiDevice.title',
        descriptionKey: 'productsData.retailPos.features.multiDevice.description',
      },
      {
        icon: 'insights',
        titleKey: 'productsData.retailPos.features.reporting.title',
        descriptionKey: 'productsData.retailPos.features.reporting.description',
      },
      {
        icon: 'cloud_done',
        titleKey: 'productsData.retailPos.features.cloudBackup.title',
        descriptionKey: 'productsData.retailPos.features.cloudBackup.description',
      },
      {
        icon: 'sync_alt',
        titleKey: 'productsData.retailPos.features.integration.title',
        descriptionKey: 'productsData.retailPos.features.integration.description',
      },
      {
        icon: 'support_agent',
        titleKey: 'productsData.retailPos.features.support.title',
        descriptionKey: 'productsData.retailPos.features.support.description',
      },
    ],
    isSideBarVisible: false,
    sidebarMenu: [
      {
        labelKey: 'productsData.retailPos.sidebarMenu.dashboards.label',
        active: true,
        titleKey: 'productsData.retailPos.sidebarMenu.dashboards.title',
        image: 'products/Features-01.png',
        bulletsKey: 'productsData.retailPos.sidebarMenu.dashboards.bullets',
      },
      {
        labelKey: 'productsData.retailPos.sidebarMenu.menu.label',
        titleKey: 'productsData.retailPos.sidebarMenu.menu.title',
        image: 'products/Features-02.png',
        bulletsKey: 'productsData.retailPos.sidebarMenu.menu.bullets',
      },
      {
        labelKey: 'productsData.retailPos.sidebarMenu.tableManagement.label',
        titleKey: 'productsData.retailPos.sidebarMenu.tableManagement.title',
        image: 'products/Features-03.png',
        bulletsKey: 'productsData.retailPos.sidebarMenu.tableManagement.bullets',
      },
      {
        labelKey: 'productsData.retailPos.sidebarMenu.reporting.label',
        titleKey: 'productsData.retailPos.sidebarMenu.reporting.title',
        image: 'products/Features-04.png',
        bulletsKey: 'productsData.retailPos.sidebarMenu.reporting.bullets',
      },
      {
        labelKey: 'productsData.retailPos.sidebarMenu.outlets.label',
        titleKey: 'productsData.retailPos.sidebarMenu.outlets.title',
        image: 'products/Features-05.png',
        bulletsKey: 'productsData.retailPos.sidebarMenu.outlets.bullets',
      },
      {
        labelKey: 'productsData.retailPos.sidebarMenu.recipes.label',
        titleKey: 'productsData.retailPos.sidebarMenu.recipes.title',
        image: 'products/Features-06.png',
        bulletsKey: 'productsData.retailPos.sidebarMenu.recipes.bullets',
      },
      {
        labelKey: 'productsData.retailPos.sidebarMenu.inventory.label',
        titleKey: 'productsData.retailPos.sidebarMenu.inventory.title',
        image: 'products/Features-07.png',
        bulletsKey: 'productsData.retailPos.sidebarMenu.inventory.bullets',
      },
      {
        labelKey: 'productsData.retailPos.sidebarMenu.purchase.label',
        titleKey: 'productsData.retailPos.sidebarMenu.purchase.title',
        image: 'products/Features-08.png',
        bulletsKey: 'productsData.retailPos.sidebarMenu.purchase.bullets',
      },
      {
        labelKey: 'productsData.retailPos.sidebarMenu.offline.label',
        titleKey: 'productsData.retailPos.sidebarMenu.offline.title',
        image: 'products/Features-09.png',
        bulletsKey: 'productsData.retailPos.sidebarMenu.offline.bullets',
      },
      {
        labelKey: 'productsData.retailPos.sidebarMenu.zatca.label',
        titleKey: 'productsData.retailPos.sidebarMenu.zatca.title',
        image: 'products/Features-10.png',
        bulletsKey: 'productsData.retailPos.sidebarMenu.zatca.bullets',
      },
    ],
    sidebarImage: 'products/Features-01.png',
    overlayImage: 'products/Features-01.png',
    sidebarTitleKey: 'productsData.retailPos.sidebarTitle',
    sidebarBulletsKey: 'productsData.retailPos.sidebarBullets',
    isKiosk: false
  },
  {
    slug: 'pos-terminals',
    nameKey: 'productsData.posTerminals.name',
    categoryKey: 'productsData.posTerminals.category',
    heroTitleKey: 'productsData.posTerminals.heroTitle',
    heroDescriptionKey: 'productsData.posTerminals.heroDescription',
    heroImages: 'products/POS ACessories.png',
    complianceTagKey: 'productsData.posTerminals.complianceTag',
    ctaTextKey: 'productsData.posTerminals.ctaText',
    featuresHeaderTextKey: 'productsData.posTerminals.featuresHeaderText',
    features: [
      {
        icon: 'point_of_sale',
        titleKey: 'productsData.posTerminals.features.allInOne.title',
        descriptionKey: 'productsData.posTerminals.features.allInOne.description',
      },
      {
        icon: 'touch_app',
        titleKey: 'productsData.posTerminals.features.touchScreen.title',
        descriptionKey: 'productsData.posTerminals.features.touchScreen.description',
      },
      {
        icon: 'print',
        titleKey: 'productsData.posTerminals.features.builtInPrinter.title',
        descriptionKey: 'productsData.posTerminals.features.builtInPrinter.description',
      },
      {
        icon: 'credit_card',
        titleKey: 'productsData.posTerminals.features.paymentIntegration.title',
        descriptionKey: 'productsData.posTerminals.features.paymentIntegration.description',
      },
      {
        icon: 'construction',
        titleKey: 'productsData.posTerminals.features.durableDesign.title',
        descriptionKey: 'productsData.posTerminals.features.durableDesign.description',
      },
      {
        icon: 'speed',
        titleKey: 'productsData.posTerminals.features.fastPerformance.title',
        descriptionKey: 'productsData.posTerminals.features.fastPerformance.description',
      },
      {
        icon: 'fit_screen',
        titleKey: 'productsData.posTerminals.features.compactFootprint.title',
        descriptionKey: 'productsData.posTerminals.features.compactFootprint.description',
      },
      {
        icon: 'usb',
        titleKey: 'productsData.posTerminals.features.multipleConnections.title',
        descriptionKey: 'productsData.posTerminals.features.multipleConnections.description',
      },
      {
        icon: 'security',
        titleKey: 'productsData.posTerminals.features.secureTransactions.title',
        descriptionKey: 'productsData.posTerminals.features.secureTransactions.description',
      },
    ],
    isSideBarVisible: false,
    horizontalBarKey: 'productsData.posTerminals.horizontalBar',
    isKiosk: false
  },
  {
    slug: 'pos-accessories',
    nameKey: 'productsData.posAccessories.name',
    categoryKey: 'productsData.posAccessories.category',
    heroTitleKey: 'productsData.posAccessories.heroTitle',
    heroDescriptionKey: 'productsData.posAccessories.heroDescription',
    heroImages: 'products/pos-accessories.png',
    ctaTextKey: 'productsData.posAccessories.ctaText',
    featuresHeaderTextKey: 'productsData.posAccessories.featuresHeaderText',
    features: [
      {
        icon: 'print',
        titleKey: 'productsData.posAccessories.features.thermalPrinter.title',
        descriptionKey: 'productsData.posAccessories.features.thermalPrinter.description',
      },
      {
        icon: 'speed',
        titleKey: 'productsData.posAccessories.features.highSpeed.title',
        descriptionKey: 'productsData.posAccessories.features.highSpeed.description',
      },
      {
        icon: 'description',
        titleKey: 'productsData.posAccessories.features.sharpOutput.title',
        descriptionKey: 'productsData.posAccessories.features.sharpOutput.description',
      },
      {
        icon: 'settings',
        titleKey: 'productsData.posAccessories.features.easyLoading.title',
        descriptionKey: 'productsData.posAccessories.features.easyLoading.description',
      },
      {
        icon: 'fit_screen',
        titleKey: 'productsData.posAccessories.features.compactSize.title',
        descriptionKey: 'productsData.posAccessories.features.compactSize.description',
      },
      {
        icon: 'cable',
        titleKey: 'productsData.posAccessories.features.connectivity.title',
        descriptionKey: 'productsData.posAccessories.features.connectivity.description',
      },
      {
        icon: 'build',
        titleKey: 'productsData.posAccessories.features.lowMaintenance.title',
        descriptionKey: 'productsData.posAccessories.features.lowMaintenance.description',
      },
      {
        icon: 'account_balance_wallet',
        titleKey: 'productsData.posAccessories.features.cashDrawers.title',
        descriptionKey: 'productsData.posAccessories.features.cashDrawers.description',
      },
      {
        icon: 'qr_code_scanner',
        titleKey: 'productsData.posAccessories.features.barcodeScanner.title',
        descriptionKey: 'productsData.posAccessories.features.barcodeScanner.description',
      },
    ],
    isSideBarVisible: false,
    keyBenefitsSectionKey: 'productsData.posAccessories.keyBenefitsSection',
    isKiosk: false
  },
];
