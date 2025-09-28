// src/app/business/business-data.ts

export interface BusinessFeature {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export interface BusinessData {
  slug: string;
  nameKey: string;
  heroTitleKey: string;
  heroDescriptionKey: string;
  heroImages: string;
  fullWidthImage?: string;
  ctaTextKey?: string;
  features: BusinessFeature[];
  featuresHeaderTextKey: string;
  ctaBottomTextKey?: string;
  learnMoreTextKey?: string;
}

export const BUSINESS_DATA: BusinessData[] = [
  {
    slug: 'cafe-bakery',
    nameKey: 'businessData.cafeBakery.name',
    heroTitleKey: 'businessData.cafeBakery.heroTitle',
    heroDescriptionKey: 'businessData.cafeBakery.heroDescription',
    heroImages: '/business/cafe.png',
    fullWidthImage: '/business/Cafés.png',
    ctaTextKey: 'businessData.cafeBakery.ctaText',
    featuresHeaderTextKey: 'businessData.cafeBakery.featuresHeaderText',
    features: [
      {
        icon: 'coffee',
        titleKey: 'businessData.cafeBakery.features.cafePosSystem.title',
        descriptionKey: 'businessData.cafeBakery.features.cafePosSystem.description',
      },
      {
        icon: 'bakery_dining',
        titleKey: 'businessData.cafeBakery.features.bakeryPosSoftware.title',
        descriptionKey: 'businessData.cafeBakery.features.bakeryPosSoftware.description',
      },
      {
        icon: 'cloud_sync',
        titleKey: 'businessData.cafeBakery.features.cloudBasedOrdering.title',
        descriptionKey: 'businessData.cafeBakery.features.cloudBasedOrdering.description',
      },
      {
        icon: 'inventory',
        titleKey: 'businessData.cafeBakery.features.inventoryManagement.title',
        descriptionKey: 'businessData.cafeBakery.features.inventoryManagement.description',
      },
      {
        icon: 'cloud',
        titleKey: 'businessData.cafeBakery.features.bakeryCloudPos.title',
        descriptionKey: 'businessData.cafeBakery.features.bakeryCloudPos.description',
      },
      {
        icon: 'loyalty',
        titleKey: 'businessData.cafeBakery.features.customerLoyalty.title',
        descriptionKey: 'businessData.cafeBakery.features.customerLoyalty.description',
      },
      {
        icon: 'analytics',
        titleKey: 'businessData.cafeBakery.features.realTimeSalesReporting.title',
        descriptionKey: 'businessData.cafeBakery.features.realTimeSalesReporting.description',
      },
      {
        icon: 'phone_android',
        titleKey: 'businessData.cafeBakery.features.mobilePos.title',
        descriptionKey: 'businessData.cafeBakery.features.mobilePos.description',
      },
      {
        icon: 'savings',
        titleKey: 'businessData.cafeBakery.features.costEffectivePos.title',
        descriptionKey: 'businessData.cafeBakery.features.costEffectivePos.description',
      },
    ],
    ctaBottomTextKey: 'businessData.cafeBakery.ctaBottomText',
    learnMoreTextKey: 'businessData.cafeBakery.learnMoreText',
  },
  {
    slug: 'dine-in-service',
    nameKey: 'businessData.casualDining.name',
    heroTitleKey: 'businessData.casualDining.heroTitle',
    heroDescriptionKey: 'businessData.casualDining.heroDescription',
    heroImages: '/business/dine.png',
    fullWidthImage: '/business/Casual Dining Restaurants.png',
    ctaTextKey: 'businessData.casualDining.ctaText',
    featuresHeaderTextKey: 'businessData.casualDining.featuresHeaderText',
    features: [
      {
        icon: 'restaurant',
        titleKey: 'businessData.casualDining.features.casualDiningPosSystem.title',
        descriptionKey: 'businessData.casualDining.features.casualDiningPosSystem.description',
      },
      {
        icon: 'tablet_mac',
        titleKey: 'businessData.casualDining.features.mobileTablesideOrdering.title',
        descriptionKey: 'businessData.casualDining.features.mobileTablesideOrdering.description',
      },
      {
        icon: 'cloud',
        titleKey: 'businessData.casualDining.features.cloudRestaurantManagement.title',
        descriptionKey: 'businessData.casualDining.features.cloudRestaurantManagement.description',
      },
      {
        icon: 'inventory_2',
        titleKey: 'businessData.casualDining.features.realTimeInventoryTracking.title',
        descriptionKey: 'businessData.casualDining.features.realTimeInventoryTracking.description',
      },
      {
        icon: 'hub',
        titleKey: 'businessData.casualDining.features.multiChannelOrderManagement.title',
        descriptionKey: 'businessData.casualDining.features.multiChannelOrderManagement.description',
      },
      {
        icon: 'contactless',
        titleKey: 'businessData.casualDining.features.contactlessPaymentIntegration.title',
        descriptionKey: 'businessData.casualDining.features.contactlessPaymentIntegration.description',
      },
      {
        icon: 'card_giftcard',
        titleKey: 'businessData.casualDining.features.guestLoyaltyPrograms.title',
        descriptionKey: 'businessData.casualDining.features.guestLoyaltyPrograms.description',
      },
      {
        icon: 'shopping_cart',
        titleKey: 'businessData.casualDining.features.onlineOrderingIntegration.title',
        descriptionKey: 'businessData.casualDining.features.onlineOrderingIntegration.description',
      },
      {
        icon: 'dashboard',
        titleKey: 'businessData.casualDining.features.restaurantAnalyticsDashboard.title',
        descriptionKey: 'businessData.casualDining.features.restaurantAnalyticsDashboard.description',
      },
    ],
    ctaBottomTextKey: 'businessData.casualDining.ctaBottomText',
    learnMoreTextKey: 'businessData.casualDining.learnMoreText',
  },
  {
    slug: 'cloud-kitchen',
    nameKey: 'businessData.cloudKitchens.name',
    heroTitleKey: 'businessData.cloudKitchens.heroTitle',
    heroDescriptionKey: 'businessData.cloudKitchens.heroDescription',
    heroImages: '/business/cloud.png',
    fullWidthImage: '/business/Cloud Kitchens.png',
    ctaTextKey: 'businessData.cloudKitchens.ctaText',
    featuresHeaderTextKey: 'businessData.cloudKitchens.featuresHeaderText',
    features: [
      {
        icon: 'cloud_queue',
        titleKey: 'businessData.cloudKitchens.features.cloudKitchenPosSystem.title',
        descriptionKey: 'businessData.cloudKitchens.features.cloudKitchenPosSystem.description',
      },
      {
        icon: 'restaurant_menu',
        titleKey: 'businessData.cloudKitchens.features.menuManagementSoftware.title',
        descriptionKey: 'businessData.cloudKitchens.features.menuManagementSoftware.description',
      },
      {
        icon: 'delivery_dining',
        titleKey: 'businessData.cloudKitchens.features.deliveryPlatformIntegration.title',
        descriptionKey: 'businessData.cloudKitchens.features.deliveryPlatformIntegration.description',
      },
      {
        icon: 'tablet',
        titleKey: 'businessData.cloudKitchens.features.tabletPosGhostKitchens.title',
        descriptionKey: 'businessData.cloudKitchens.features.tabletPosGhostKitchens.description',
      },
      {
        icon: 'enhanced_encryption',
        titleKey: 'businessData.cloudKitchens.features.encryptedTransactionSecurity.title',
        descriptionKey: 'businessData.cloudKitchens.features.encryptedTransactionSecurity.description',
      },
      {
        icon: 'system_update',
        titleKey: 'businessData.cloudKitchens.features.automaticPosUpdates.title',
        descriptionKey: 'businessData.cloudKitchens.features.automaticPosUpdates.description',
      },
      {
        icon: 'savings',
        titleKey: 'businessData.cloudKitchens.features.costEffectivePosSolution.title',
        descriptionKey: 'businessData.cloudKitchens.features.costEffectivePosSolution.description',
      },
      {
        icon: 'backup',
        titleKey: 'businessData.cloudKitchens.features.dataBackupRecovery.title',
        descriptionKey: 'businessData.cloudKitchens.features.dataBackupRecovery.description',
      },
      {
        icon: 'trending_up',
        titleKey: 'businessData.cloudKitchens.features.scalableRestaurantTechnology.title',
        descriptionKey: 'businessData.cloudKitchens.features.scalableRestaurantTechnology.description',
      },
    ],
    ctaBottomTextKey: 'businessData.cloudKitchens.ctaBottomText',
    learnMoreTextKey: 'businessData.cloudKitchens.learnMoreText',
  },
  {
    slug: 'fine-dining',
    nameKey: 'businessData.fineDining.name',
    heroTitleKey: 'businessData.fineDining.heroTitle',
    heroDescriptionKey: 'businessData.fineDining.heroDescription',
    heroImages: '/business/fine.png',
    fullWidthImage: '/business/Fine Dining .png',
    ctaTextKey: 'businessData.fineDining.ctaText',
    featuresHeaderTextKey: 'businessData.fineDining.featuresHeaderText',
    features: [
      {
        icon: 'tablet_mac',
        titleKey: 'businessData.fineDining.features.tablesideOrderingSystem.title',
        descriptionKey: 'businessData.fineDining.features.tablesideOrderingSystem.description',
      },
      {
        icon: 'menu_book',
        titleKey: 'businessData.fineDining.features.digitalMenuCustomization.title',
        descriptionKey: 'businessData.fineDining.features.digitalMenuCustomization.description',
      },
      {
        icon: 'kitchen',
        titleKey: 'businessData.fineDining.features.integratedKitchenCommunication.title',
        descriptionKey: 'businessData.fineDining.features.integratedKitchenCommunication.description',
      },
      {
        icon: 'star',
        titleKey: 'businessData.fineDining.features.vipGuestProfiles.title',
        descriptionKey: 'businessData.fineDining.features.vipGuestProfiles.description',
      },
      {
        icon: 'event_seat',
        titleKey: 'businessData.fineDining.features.reservationWaitlistManagement.title',
        descriptionKey: 'businessData.fineDining.features.reservationWaitlistManagement.description',
      },
      {
        icon: 'loyalty',
        titleKey: 'businessData.fineDining.features.loyaltyProgramIntegration.title',
        descriptionKey: 'businessData.fineDining.features.loyaltyProgramIntegration.description',
      },
      {
        icon: 'inventory_2',
        titleKey: 'businessData.fineDining.features.realTimeInventoryTracking.title',
        descriptionKey: 'businessData.fineDining.features.realTimeInventoryTracking.description',
      },
      {
        icon: 'analytics',
        titleKey: 'businessData.fineDining.features.advancedAnalyticsDashboard.title',
        descriptionKey: 'businessData.fineDining.features.advancedAnalyticsDashboard.description',
      },
      {
        icon: 'cloud',
        titleKey: 'businessData.fineDining.features.cloudBasedRestaurantPos.title',
        descriptionKey: 'businessData.fineDining.features.cloudBasedRestaurantPos.description',
      },
    ],
    ctaBottomTextKey: 'businessData.fineDining.ctaBottomText',
    learnMoreTextKey: 'businessData.fineDining.learnMoreText',
  },
  {
    slug: 'food-trucks',
    nameKey: 'businessData.foodTrucks.name',
    heroTitleKey: 'businessData.foodTrucks.heroTitle',
    heroDescriptionKey: 'businessData.foodTrucks.heroDescription',
    heroImages: '/business/food.png',
    fullWidthImage: '/business/Food Trucks.png',
    ctaTextKey: 'businessData.foodTrucks.ctaText',
    featuresHeaderTextKey: 'businessData.foodTrucks.featuresHeaderText',
    features: [
      {
        icon: 'local_shipping',
        titleKey: 'businessData.foodTrucks.features.foodTruckPosSystem.title',
        descriptionKey: 'businessData.foodTrucks.features.foodTruckPosSystem.description',
      },
      {
        icon: 'restaurant_menu',
        titleKey: 'businessData.foodTrucks.features.digitalMenuManagement.title',
        descriptionKey: 'businessData.foodTrucks.features.digitalMenuManagement.description',
      },
      {
        icon: 'shopping_cart',
        titleKey: 'businessData.foodTrucks.features.onlineOrderingIntegration.title',
        descriptionKey: 'businessData.foodTrucks.features.onlineOrderingIntegration.description',
      },
      {
        icon: 'tablet',
        titleKey: 'businessData.foodTrucks.features.tabletPosFoodTrucks.title',
        descriptionKey: 'businessData.foodTrucks.features.tabletPosFoodTrucks.description',
      },
      {
        icon: 'cloud_done',
        titleKey: 'businessData.foodTrucks.features.cloudBasedPaymentSecurity.title',
        descriptionKey: 'businessData.foodTrucks.features.cloudBasedPaymentSecurity.description',
      },
      {
        icon: 'contactless',
        titleKey: 'businessData.foodTrucks.features.contactlessOrderingTechnology.title',
        descriptionKey: 'businessData.foodTrucks.features.contactlessOrderingTechnology.description',
      },
      {
        icon: 'system_update',
        titleKey: 'businessData.foodTrucks.features.posSoftwareAutoUpdates.title',
        descriptionKey: 'businessData.foodTrucks.features.posSoftwareAutoUpdates.description',
      },
      {
        icon: 'business',
        titleKey: 'businessData.foodTrucks.features.smallBusinessCloudTools.title',
        descriptionKey: 'businessData.foodTrucks.features.smallBusinessCloudTools.description',
      },
      {
        icon: 'phone_android',
        titleKey: 'businessData.foodTrucks.features.mobileRestaurantTechnology.title',
        descriptionKey: 'businessData.foodTrucks.features.mobileRestaurantTechnology.description',
      },
    ],
    ctaBottomTextKey: 'businessData.foodTrucks.ctaBottomText',
    learnMoreTextKey: 'businessData.foodTrucks.learnMoreText',
  },
  {
    slug: 'quick-service',
    nameKey: 'businessData.quickService.name',
    heroTitleKey: 'businessData.quickService.heroTitle',
    heroDescriptionKey: 'businessData.quickService.heroDescription',
    heroImages: '/business/quick.png',
    fullWidthImage: '/business/Quick Service Restaurants .png',
    ctaTextKey: 'businessData.quickService.ctaText',
    featuresHeaderTextKey: 'businessData.quickService.featuresHeaderText',
    features: [
      {
        icon: 'cloud',
        titleKey: 'businessData.quickService.features.cloudPosQuickService.title',
        descriptionKey: 'businessData.quickService.features.cloudPosQuickService.description',
      },
      {
        icon: 'inventory_2',
        titleKey: 'businessData.quickService.features.restaurantInventoryManagement.title',
        descriptionKey: 'businessData.quickService.features.restaurantInventoryManagement.description',
      },
      {
        icon: 'phone_android',
        titleKey: 'businessData.quickService.features.mobilePosSystem.title',
        descriptionKey: 'businessData.quickService.features.mobilePosSystem.description',
      },
      {
        icon: 'business',
        titleKey: 'businessData.quickService.features.multiLocationPosSolution.title',
        descriptionKey: 'businessData.quickService.features.multiLocationPosSolution.description',
      },
      {
        icon: 'analytics',
        titleKey: 'businessData.quickService.features.realTimeSalesAnalytics.title',
        descriptionKey: 'businessData.quickService.features.realTimeSalesAnalytics.description',
      },
      {
        icon: 'speed',
        titleKey: 'businessData.quickService.features.fasterOrderProcessing.title',
        descriptionKey: 'businessData.quickService.features.fasterOrderProcessing.description',
      },
      {
        icon: 'cloud_done',
        titleKey: 'businessData.quickService.features.secureCloudDataStorage.title',
        descriptionKey: 'businessData.quickService.features.secureCloudDataStorage.description',
      },
      {
        icon: 'payment',
        titleKey: 'businessData.quickService.features.integratedPaymentSolutions.title',
        descriptionKey: 'businessData.quickService.features.integratedPaymentSolutions.description',
      },
      {
        icon: 'trending_up',
        titleKey: 'businessData.quickService.features.scalablePosSystem.title',
        descriptionKey: 'businessData.quickService.features.scalablePosSystem.description',
      },
      {
        icon: 'sentiment_satisfied',
        titleKey: 'businessData.quickService.features.improvedCustomerSatisfaction.title',
        descriptionKey: 'businessData.quickService.features.improvedCustomerSatisfaction.description',
      },
    ],
    ctaBottomTextKey: 'businessData.quickService.ctaBottomText',
    learnMoreTextKey: 'businessData.quickService.learnMoreText',
  },
];