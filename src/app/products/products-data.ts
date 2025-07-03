// src/app/products/products-data.ts

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductSidebarItem {
  label: string;
  active?: boolean;
  title?: string;
  image?: string;
  bullets?: string[];
}

export interface ProductData {
  slug: string;
  name: string;
  catergory: string;
  heroTitle: string;
  heroDescription: string;
  heroImages: string;
  complianceTag?: string;
  complianceImage?: string;
  ctaText?: string;
  features: ProductFeature[];
  featuresHeaderText: string;
  isSideBarVisible: boolean;
  sidebarMenu?: ProductSidebarItem[];
  sidebarImage?: string;
  overlayImage?: string;
  sidebarTitle?: string;
  sidebarBullets?: string[];
  horizontalBar?: string;
}

export const PRODUCTS_DATA: ProductData[] = [
  {
    slug: 'cloud-pos',
    name: 'Cloud Point of Sales',
    catergory: 'Front Office',
    heroTitle:
      '<h2 class="text-3xl md:text-5xl font-bold text-blue-900">Cloud Point of Sales</h2>',
    heroDescription: `DigiPOS is a modern, cloud-based Point of Sale (POS) system made for restaurants and hospitality businesses. 
            It works both online and offline, so your business can run smoothly at all times. With DigiPOS, you can see live sales reports, 
            track inventory, check staff performance, and learn about your customers from anywhere. 
            It helps you stay in control, cut costs, and grow your profits using smart tools and real-time data.`,
    heroImages: 'products/Cloud Point of Sales.png',
    complianceTag: 'Compliant with:',
    complianceImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIyG9CImBv66uEEChinrNgQL_s05hCggeBg&s',
    ctaText: 'Get a Demo',
    featuresHeaderText:
      '  <h2 class="text-2xl md:text-4xl font-bold text-[#002999] mx-auto md:w-[49%]"> Run your restaurant smarter with  <span class="text-[#002999]">All-In-One features from <span class="text-[#f48021] font-black underline underline-2">DigiPOS</span></span> </h2>',
    features: [
      {
        icon: 'bolt',
        title: 'Quick & Easy Setup',
        description:
          'Switch to DigiPOS effortlessly with a quick and hassle-free installation.',
      },
      {
        icon: 'wifi_off',
        title: 'Online & Offline Functionality',
        description:
          'Ensures full operational continuity even during internet outages.',
      },
      {
        icon: 'query_stats',
        title: 'Real-Time Data Access',
        description:
          'View up-to-the-minute reports, sales trends, and inventory levels from any device.',
      },
      {
        icon: 'touch_app',
        title: 'User-Friendly Interface',
        description:
          'Designed with intuitive workflows for quick onboarding and faster staff adoption.',
      },
      {
        icon: 'devices',
        title: 'Multi-Device Compatibility',
        description:
          'Works seamlessly across tablets, desktops, and mobile devices.',
      },
      {
        icon: 'insights',
        title: 'Comprehensive Reporting',
        description:
          'Generate insightful reports on sales transactions, peak hours, and more to support decision-making.',
      },
      {
        icon: 'cloud_done',
        title: 'Secure Cloud Backup',
        description:
          'All data is encrypted and automatically backed up, ensuring business continuity and data protection.',
      },
      {
        icon: 'sync_alt',
        title: 'Integration Capabilities',
        description:
          'Easily integrates with accounting software, payment gateways, and third-party applications.',
      },
      {
        icon: 'support_agent',
        title: '24/7 Customer Support',
        description:
          'Our dedicated support team is available around the clock to help you with any questions or issues you may have.',
      },
    ],
    isSideBarVisible: true,
    sidebarMenu: [
      {
        label: 'Dashboards Management',
        active: true,
        title: 'Dashboard Management',
        image: 'products/Features-01.png',
        bullets: [
          'With DigiPOS dashboard management, you can easily visualize data in real-time. Performance indicators related to sales transactions and overall business operations.',
          'Monitor key metrics such as:',
          'Sales: Track daily, hourly, weekly, and monthly sales performance.',
          'Status-wise Sales: View sales by order status to understand your workflow and identify bottlenecks.',
          'Top Products & Category Sales: Identify best-selling products and categories to optimize inventory and promotions.',
          'Customer Trends: Understand customer preferences and behaviors to improve service and marketing strategies.',
        ],
      },
      {
        label: 'Menu Management',
        title: 'Menu Management',
        image: 'products/Features-02.png',
        bullets: [
          'Manage your menu anytime, anywhere.',
          'With DigiPOS, you can create, update, and control your menu in real-time from any device, ensuring smooth operations and maximized profits.',
          'Real-time menu control for real-world speed.',
          'DigiPOS empowers your team to make immediate changes, manage item availability, and keep the front and back of house in sync.',
        ],
      },
      {
        label: 'Dine-In Table Management',
        title: 'Dine-In Table Management',
        image: 'products/Features-03.png',
        bullets: [
          'Using DigiPOS Table Management feature is essential for efficiently managing dine-in orders, assign tables and track orders.',
          'Real-time updates: The system provides real-time updates, allowing the staff to see which tables are occupied, available, or being prepared for new guests.',
          'Customer count: Track the number of customers at each table to adjust the order size and customize the dining experience.',
        ],
      },
      {
        label: 'Reporting Management',
        title: 'Reporting Management',
        image: 'products/Features-04.png',
        bullets: [
          'Want to uncover hidden trends in your sales data?',
          'Generate comprehensive reports to analyze your business performance.',
          'Track sales trends, identify peak hours, and gain valuable insights to optimize your operations.',
        ],
      },
      {
        label: 'Outlets Management',
        title: 'Outlets Management',
        image: 'products/Features-05.png',
        bullets: [
          'Managing multiple outlets? DigiPOS has the solution.',
          'If you have multiple outlets, DigiPOS simplifies management across all locations.',
          'Synchronize inventory, track sales, and maintain consistent operations, regardless of where your customers are.',
        ],
      },
      {
        label: 'Foods Recipes & Costing',
        title: 'Foods Recipes & Costing',
        image: 'products/Features-06.png',
        bullets: [
          'Tired of wondering where your profits are going? Want to take control of your food costs?',
          'Let’s do it with DigiPOS.',
          'Create detailed recipes, track ingredient usage, and optimize your menu pricing to maximize profitability.',
        ],
      },
      {
        label: 'Inventory Management',
        title: 'Inventory Management',
        image: 'products/Features-07.png',
        bullets: [
          "Inventory management is the process of efficiently overseeing, tracking, and controlling a company's inventory of raw materials, and finished products.",
          'Stock Opening',
          'Stock Transfers Note (Stock Out)',
          'Stock Receiving Note (Stock In)',
          'Stock Damage (Wastage)',
          'Inventory Physical Counts',
        ],
      },
      {
        label: 'Purchase Management',
        title: 'Purchase Management',
        image: 'products/Features-08.png',
        bullets: [
          'Purchase management is the process of acquiring goods and services efficiently while controlling costs and ensuring quality. Here are the key features of Purchase Management.',
          'Purchase Requisition (PR)',
          'Purchase Order (PO)',
          'Goods Received Note (GRN)',
          'Purchase Return',
        ],
      },
      {
        label: 'Offline Mode & Utility',
        title: 'Offline Mode & Utility',
        image: 'products/Features-09.png',
        bullets: [
          'DigiPOS is a flexible and reliable Point of Sale solution designed to keep your business running smoothly no matter your internet connectivity.',
          'With an active internet connection, DigiPOS operates in real-time allowing you to process orders, manage inventory, and access up-to-the-minute sales reports instantly across all devices.',
          'While offline, DigiPOS securely stores all transaction data locally on the device. Once the connection is restored, all data is automatically synced to the cloud, keeping your system fully updated.',
        ],
      },
      {
        label: 'ZATCA E-Invoicing Compliant',
        title: 'ZATCA Integration',
        image: 'products/Features-10.png',
        bullets: [
          'DigiPOS is now fully integrated with Saudi Arabia ZATCA requirements, providing businesses with a streamlined and efficient way to manage their sales and inventory while staying fully compliant with the latest tax regulations.',
          'Our team of experts worked diligently to ensure that DigiPOS seamlessly integrates with ZATCA, providing businesses with a seamless and user-friendly way to comply with the latest tax regulations.',
          'The integration allows businesses in Saudi Arabia to easily comply with the latest tax regulations, without having to worry about the complexities of tax compliance.',
        ],
      },
    ],
    sidebarImage: 'products/Features-01.png',
    overlayImage: 'products/Features-01.png',
    sidebarTitle: 'Dashboard Management',
    sidebarBullets: [
      'With DigiPOS dashboard management, you can easily visualize data in real-time. Performance indicators related to sales transactions and overall business operations.',
      'Monitor key metrics such as:',
      'Sales: Track daily, hourly, weekly, and monthly sales performance.',
      'Status-wise Sales: View sales by order status to understand your workflow and identify bottlenecks.',
      'Top Products & Category Sales: Identify best-selling products and categories to optimize inventory and promotions.',
      'Customer Trends: Understand customer preferences and behaviors to improve service and marketing strategies.',
    ],
  },
  {
    slug: 'waiter-tab',
    name: 'Waiter Tab',
    catergory: 'Front Office',
    heroTitle:
      '<h2 class="text-3xl md:text-5xl font-bold text-blue-900">Waiter Tab</h2>',
    heroDescription: `The DigiPOS Waiter Tablet is designed to revolutionize restaurant operations by enhancing efficiency for both staff and customers! With servers taking orders and processing payments directly at the table, it cuts down on the time spent walking back and forth to a terminal, making the entire dining experience feel seamless and faster.`,
    heroImages: 'products/Waiter Tab.png',
    ctaText: 'Get Now',
    featuresHeaderText:
      '  <h2 class="text-2xl md:text-4xl font-bold text-[#002999] mx-auto md:w-[49%]"> Empower Your Team with Effortless Table Service Anywhere </h2>',
    features: [
      {
        icon: 'restaurant',
        title: 'Order Taking at the Table',
        description:
          'Waiter can take customer orders directly at the table using the DigiPOS tablet, delivering a smooth and efficient dining experience',
      },
      {
        icon: 'fact_check',
        title: 'Quick & Accurate Ordering',
        description:
          'Reducing errors that may occur when writing orders by hand.',
      },
      {
        icon: 'tune',
        title: 'Customizable Orders',
        description:
          'Allows customization of orders (e.g., special dietary requirements, extra toppings) on the spot.',
      },
      {
        icon: 'send',
        title: 'Instant Order-to-Kitchen Sync',
        description:
          'No more lost tickets or delays; orders fire in real time.',
      },
      {
        icon: 'directions_bus',
        title: 'Food Trucks & Pop-ups',
        description: 'Process orders anywhere with cloud sync.',
      },
      {
        icon: 'call_split',
        title: 'Split & Merge Orders',
        description: 'Quickly process merged or split bills with ease.',
      },
      {
        icon: 'dashboard_customize',
        title: 'User-Friendly Interface',
        description:
          'Designed with intuitive workflows for quick onboarding and faster staff adoption.',
      },
      {
        icon: 'devices_other',
        title: 'Multi-Device Compatibility',
        description:
          'Works seamlessly across tablets, mobile devices, iOS, and Android.',
      },
      {
        icon: 'cloud_upload',
        title: 'Secure Cloud Backup',
        description:
          'All data is encrypted and automatically backed up, ensuring business continuity and data protection.',
      },
    ],
    isSideBarVisible: false,
  },
  {
    slug: 'digikds',
    name: 'Kitchen Display System (DigiKDS)',
    catergory: 'Front Office',
    heroTitle:
      '<h2 class="text-3xl md:text-5xl font-bold text-blue-900">Kitchen Display System <span class="text-[#f48021] underline underline-offset-2"> DigiKDS </span></h2>',
    heroDescription: `Digi KDS (Kitchen Display System) is a digital screen
                        system for restaurant kitchens that replaces paper
                        tickets. It shows orders instantly, organises them by
                        cooking station, and helps kitchens cook faster with
                        fewer mistakes. Perfect for speeding up service and
                        keeping customers happy.`,
    heroImages: 'products/kds.jpg',
    complianceTag: 'Operating System',
    complianceImage: '/products/iosandorid.png.png',
    ctaText: 'Get it Now',
    featuresHeaderText:
      '  <h2 class="text-2xl md:text-4xl font-bold text-[#002999] mx-auto md:w-[49%]">Transform Your Kitchen with<span class="text-[#f48021] underline underline-offset-2"> DigiKDS </span> Paperless, Zero Mistakes and Quick Service.</h2>',
    features: [
      {
        icon: 'monitor',
        title: 'Real-Time Order Display',
        description:
          'Orders appear instantly on the digital screen, eliminating delays and ensuring timely kitchen responses.',
      },
      {
        icon: 'receipt_long',
        title: 'No More Paper Ticket',
        description:
          'Say goodbye to lost, messy, or hard-to-read paper receipts. Everything is displayed clearly and digitally.',
      },
      {
        icon: 'sort',
        title: 'Order Prioritization',
        description:
          "Orders are automatically organized by priority (e.g. appetizers, entrees), so the kitchen stays focused on what's next.",
      },
      {
        icon: 'track_changes',
        title: 'Easy Order Tracking',
        description:
          'Track, update, and manage orders seamlessly, ensuring all modifications or special requests are handled with accuracy.',
      },
      {
        icon: 'history',
        title: 'Bump Order Recall',
        description:
          'Quickly recall previous or missed orders, preventing confusion and ensuring nothing is overlooked.',
      },
      {
        icon: 'speed',
        title: 'Faster Service',
        description:
          'With streamlined processes and real-time order tracking, the kitchen delivers food faster, improving overall service times.',
      },
      {
        icon: 'eco',
        title: 'Reduced Food Waste',
        description:
          'Better tracking and real-time updates reduce food waste and improve portion accuracy.',
      },
      {
        icon: 'devices_other',
        title: 'Multi-Device Compatibility',
        description:
          'DigiKDS offers ultimate flexibility for restaurant operations, working seamlessly across Android, iOS, and Web Browsers.',
      },
      {
        icon: 'cloud_sync',
        title: 'Real-Time Updates',
        description:
          'Orders and changes are synced in real-time cloud, so the kitchen always works with the most up-to-date information.',
      },
    ],
    isSideBarVisible: false,
    horizontalBar: `
            <section class="w-screen bg-[#f48021] md:flex mt-12 extraWaiterTab">
                <div class="left md:w-1/2 flex items-center justify-center md:pl-8 ">
                <div class=" md:w-[85%] p-4 md:p-0 ">
                    <h2 class="text-xl md:text-[2.75rem] font-bold text-[#002999] leading-tight "> Empower Your Team with Effortless Table
                    Service Anywhere </h2>
                    <p class="text-white text-md md:text-lg xl:text-xl leading-relaxed mt-4">
                    Upgrade your restaurant's efficiency by ditching
                    traditional paper slips. Our solution eliminates the need
                    for physical exchanges, promoting a cleaner, more
                    sanitary environment. Plus, with reliable and clean input
                    tools, you can wave goodbye to smudged, greasy screens
                    that are a constant battle in busy kitchens.
                    </p>
                </div>
                </div>
                <div class="right md:w-1/2 flex items-center justify-center">
                <img src="/front-office/KDS.png" class="m-auto h-[70%] w-auto pb-4 md:pb-0" />
                </div>
            </section>`,
  },
  {
    slug: 'customer-display',
    name: 'Customer Display',
    catergory: 'Front Office',
    heroTitle:
      '<h2 class="text-3xl md:text-5xl font-bold text-blue-900">Customer Display</h2>',
    heroDescription: `DigiPOS Customer Display is a dynamic screen
                      designed to elevate the customer experience at the
                      point of sale. It provides real-time visibility into each
                      transaction by clearly displaying itemized order lists,
                      individual prices, total amounts, and personalized
                      promotions for every customer. it’s a powerful
                      engagement tool. Use the screen to showcase
                      promotional offers, display branded messages,
                      highlight seasonal deals turning every transaction
                      into an opportunity to connect, inform, and promote
                      your brand.`,
    heroImages: 'products/customerDisplay.PNG',
    ctaText: 'Get Now!',
    featuresHeaderText:
      '  <h2 class="text-2xl md:text-4xl font-bold text-[#002999] mx-auto md:w-[49%]">The smart way to elevate transparency and trust at checkout!</h2>',
    features: [
      {
        icon: 'monitor',
        title: 'Real-Time Order Display',
        description:
          'Orders appear instantly on the digital screen, eliminating delays and ensuring timely kitchen responses.',
      },
      {
        icon: 'visibility',
        title: 'Transparent Transactions',
        description:
          'Enhances customer confidence by providing complete order visibility during checkout.',
      },
      {
        icon: 'local_offer',
        title: 'Personalized Promotions',
        description:
          "Display targeted promotions and upsell suggestions based on the customer profile or items purchased.",
      },
      {
        icon: 'branding_watermark',
        title: 'Custom Branding Support',
        description:
          'Allows your business logo, themes, and marketing visuals to appear on the screen.',
      },
      {
        icon: 'autorenew',
        title: 'Dynamic Content Rotation',
        description:
          'Showcase seasonal deals, loyalty programs, or marketing messages when not in active transaction',
      },
      {
        icon: 'language',
        title: 'Multilingual Interface',
        description:
          'Supports multiple languages for diverse customer bases.',
      },
      {
        icon: 'fit_screen',
        title: 'Compact, Modern Design',
        description:
          'Sleek, space-saving hardware that fits easily into any POS station.',
      },
      {
        icon: 'devices',
        title: 'Multi-Device Compatibility',
        description:
          'DigiPOS Customer Display is designed to work seamlessly across Android, iOS, and Web Browsers screen.',
      },
      {
        icon: 'dashboard_customize',
        title: 'Customizable Layouts',
        description:
          'Set customizable layouts of the screen, including promotional banners, branded messages, and seasonal campaigns.',
      },
    ],
    isSideBarVisible: false,
    horizontalBar: `
            <section class="w-screen bg-[#f48021] md:flex mt-12 extraWaiterTab">
                <div class="left md:w-1/2 flex items-center justify-center md:pl-8 ">
                <div class=" md:w-[85%] p-4 md:p-0 ">
                    <h2 class="text-xl md:text-[2.75rem] font-bold text-[#002999] leading-tight "> Designed to enhance the customer experience </h2>
                    <p class="text-white text-md md:text-lg xl:text-xl leading-relaxed mt-4">
                      Beyond simply showing prices and itemized lists, more
                      advanced DigiPOS customer displays can integrate with
                      advertising and marketing efforts, displaying
                      promotions, or even upcoming deals to engage
                      customers while they wait.
                    </p>
                </div>
                </div>
                <div class="right md:w-1/2 flex items-center justify-center">
                <img src="/products/customerDisplayBar.PNG" class="m-auto h-[70%] w-auto pb-4 md:pb-0"  />
                </div>
            </section>
            
            `,
  },
  {
    slug: 'table-ordering',
    name: 'Table Ordering',
    catergory: 'Front Office',
    heroTitle:
      '<h2 class="text-3xl md:text-5xl font-bold text-blue-900">Table Ordering</h2>',
    heroDescription: `DigiPOS Table Ordering simplifies the dining
    experience by allowing customers order and pay
    directly from their table with just a QR scan menu
    and a tap on a tablet. Customers can view the digital
    menu place their order, and pay without needing to
    wait for a server. This self-service option helps reduce
    wait times, improving order accuracy, and enhancing
    customers satisfaction. Table Orders go straight to
    the kitchen, and payments sync instantly with digital
    menu, making service faster and more efficient for
    both diners and staff.`,
    heroImages: 'products/Table Ordering.PNG',
    ctaText: 'Get Now!',
    featuresHeaderText:
      '  <h2 class="text-2xl md:text-4xl font-bold text-[#002999] mx-auto md:w-[49%]">Tap Order Smart, Fast and Effortless. Make every guest feel special with easy, smooth dining.</h2>',
    features: [
      {
        icon: 'qr_code_scanner',
        title: 'QR Code Menu Access',
        description:
          'Customers can scan a QR code to instantly access the digital menu on their smartphones, no app download needed.',
      },
      {
        icon: 'tune',
        title: 'Order Customization',
        description:
          'Customers can modify orders menu items (add sides and remove ingredients) based on their preferences.',
      },
      {
        icon: 'update',
        title: 'Real Time Menu Updates',
        description:
          "Always display current items, prices and promotions.",
      },
      {
        icon: 'touch_app',
        title: 'User Friendly Interface',
        description:
          'Easy for all customers to navigate and place orders quickly',
      },
      {
        icon: 'speed',
        title: 'Speeds Up Service',
        description:
          'Cuts down wait times and keeps queues moving smoothly.',
      },
      {
        icon: 'kitchen',
        title: 'Direct Kitchen Integration (KDS)',
        description:
          'Orders are instantly sent to the kitchen display system, reducing delays and errors.',
      },
      {
        icon: 'palette',
        title: 'Custom Branding',
        description:
          'Customize menus, buttons, and fonts to match your restaurant’s brand for a consistent digital experience.',
      },
      {
        icon: 'payment',
        title: 'Integrated Payments',
        description:
          'Pay directly from the phone or tablet, fast and secure.',
      },
      {
        icon: 'translate',
        title: 'Multi-Language Support',
        description:
          'Menus can be displayed in English and Arabic languages to serve a diverse customer base.',
      },
    ],
    isSideBarVisible: false,
  },
];
