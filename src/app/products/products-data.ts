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
    heroImages: 'products/online-ordering.PNG',
    ctaTextKey: 'productsData.onlineOrdering.ctaText',
    featuresHeaderTextKey: 'productsData.onlineOrdering.featuresHeaderText',
    growthTitleKey: 'productsData.onlineOrdering.growthTitle',
    features: [
      {
        icon: 'touch_app',
        titleKey: 'productsData.onlineOrdering.features.userFriendly.title',
        descriptionKey: 'productsData.onlineOrdering.features.userFriendly.description',
      },
      {
        icon: 'tune',
        titleKey: 'productsData.onlineOrdering.features.fullyCustomizable.title',
        descriptionKey: 'productsData.onlineOrdering.features.fullyCustomizable.description',
      },
      {
        icon: 'speed',
        titleKey: 'productsData.onlineOrdering.features.speedsUp.title',
        descriptionKey: 'productsData.onlineOrdering.features.speedsUp.description',
      },
      {
        icon: 'lock',
        titleKey: 'productsData.onlineOrdering.features.fastSecure.title',
        descriptionKey: 'productsData.onlineOrdering.features.fastSecure.description',
      },
      {
        icon: 'sync',
        titleKey: 'productsData.onlineOrdering.features.realTimeUpdates.title',
        descriptionKey: 'productsData.onlineOrdering.features.realTimeUpdates.description',
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
    isKiosk: false
  },
];
