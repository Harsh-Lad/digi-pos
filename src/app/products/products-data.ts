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
  sidebarMenu: ProductSidebarItem[];
  sidebarImage: string;
  overlayImage?: string;
  sidebarTitle: string;
  sidebarBullets: string[];
}

export const PRODUCTS_DATA: ProductData[] = [
    {
        slug: 'cloud-pos',
        name: 'Cloud Point of Sales',
        catergory: 'Front Office',
        heroTitle: 'Cloud Point of Sales',
        heroDescription: `DigiPOS is a modern, cloud-based Point of Sale (POS) system made for restaurants and hospitality businesses. 
            It works both online and offline, so your business can run smoothly at all times. With DigiPOS, you can see live sales reports, 
            track inventory, check staff performance, and learn about your customers from anywhere. 
            It helps you stay in control, cut costs, and grow your profits using smart tools and real-time data.`,
        heroImages: 'products/Cloud Point of Sales.png',
        complianceTag: 'Compliant with:',
        complianceImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIyG9CImBv66uEEChinrNgQL_s05hCggeBg&s',
        ctaText: 'Get a Demo',
        features: [
            { icon: 'bolt', title: 'Quick & Easy Setup', description: 'Switch to DigiPOS effortlessly with a quick and hassle-free installation.' },
            { icon: 'wifi_off', title: 'Online & Offline Functionality', description: 'Ensures full operational continuity even during internet outages.' },
            { icon: 'query_stats', title: 'Real-Time Data Access', description: 'View up-to-the-minute reports, sales trends, and inventory levels from any device.' },
            { icon: 'touch_app', title: 'User-Friendly Interface', description: 'Designed with intuitive workflows for quick onboarding and faster staff adoption.' },
            { icon: 'devices', title: 'Multi-Device Compatibility', description: 'Works seamlessly across tablets, desktops, and mobile devices.' },
            { icon: 'insights', title: 'Comprehensive Reporting', description: 'Generate insightful reports on sales transactions, peak hours, and more to support decision-making.' },
            { icon: 'cloud_done', title: 'Secure Cloud Backup', description: 'All data is encrypted and automatically backed up, ensuring business continuity and data protection.' },
            { icon: 'sync_alt', title: 'Integration Capabilities', description: 'Easily integrates with accounting software, payment gateways, and third-party applications.' },
            { icon: 'support_agent', title: '24/7 Customer Support', description: 'Our dedicated support team is available around the clock to help you with any questions or issues you may have.' }
        ],
        sidebarMenu: [
            {
                label: 'Dashboards Management',
                active: true,
                title: 'Dashboard Management',
                image: 'products/Features-01.png',
                bullets: [
                    'With DigiPOS dashboard management, you can easily visualize data in real-time. Performance indicators related to sales transactions and overall business operations.',
                    'Monitor key metrics such as:',
                    '<strong>Sales:</strong> Track daily, hourly, weekly, and monthly sales performance.',
                    '<strong>Status-wise Sales:</strong> View sales by order status to understand your workflow and identify bottlenecks.',
                    '<strong>Top Products & Category Sales:</strong> Identify best-selling products and categories to optimize inventory and promotions.',
                    '<strong>Customer Trends:</strong> Understand customer preferences and behaviors to improve service and marketing strategies.'
                ]
            },
            {
                label: 'Menu Management',
                title: 'Menu Management',
                 image: 'products/Features-02.png',
                bullets: [
                    'Manage your menu anytime, anywhere.',
                    'With DigiPOS, you can create, update, and control your menu in real-time from any device, ensuring smooth operations and maximized profits.',
                    'Real-time menu control for real-world speed.',
                    'DigiPOS empowers your team to make immediate changes, manage item availability, and keep the front and back of house in sync.'
                ]
            },
            {
                label: 'Dine-In Table Management',
                title: 'Dine-In Table Management',
                 image: 'products/Features-03.png',
                bullets: [
                    'Using DigiPOS Table Management feature is essential for efficiently managing dine-in orders, assign tables and track orders.',
                    'Real-time updates: The system provides real-time updates, allowing the staff to see which tables are occupied, available, or being prepared for new guests.',
                    'Customer count: Track the number of customers at each table to adjust the order size and customize the dining experience.'
                ]
            },
            {
                label: 'Reporting Management',
                title: 'Reporting Management',
                 image: 'products/Features-04.png',
                bullets: [
                    'Want to uncover hidden trends in your sales data?',
                    'Generate comprehensive reports to analyze your business performance.',
                    'Track sales trends, identify peak hours, and gain valuable insights to optimize your operations.'
                ]
            },
            {
                label: 'Outlets Management',
                title: 'Outlets Management',
                 image: 'products/Features-05.png',
                bullets: [
                    'Managing multiple outlets? DigiPOS has the solution.',
                    'If you have multiple outlets, DigiPOS simplifies management across all locations.',
                    'Synchronize inventory, track sales, and maintain consistent operations, regardless of where your customers are.'
                ]
            },
            {
                label: 'Foods Recipes & Costing',
                title: 'Foods Recipes & Costing',
                 image: 'products/Features-06.png',
                bullets: [
                    'Tired of wondering where your profits are going? Want to take control of your food costs?',
                    'Let’s do it with DigiPOS.',
                    'Create detailed recipes, track ingredient usage, and optimize your menu pricing to maximize profitability.'
                ]
            },
            {
                label: 'Inventory Management',
                title: 'Inventory Management',
                 image: 'products/Features-07.png',
                bullets: [
                    'Inventory management is the process of efficiently overseeing, tracking, and controlling a company\'s inventory of raw materials, and finished products.',
                    '<strong>Stock Opening</strong>',
                    'Stock Transfers Note (Stock Out)',
                    'Stock Receiving Note (Stock In)',
                    'Stock Damage (Wastage)',
                    'Inventory Physical Counts'
                ]
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
                    'Purchase Return'
                ]
            },
            {
                label: 'Offline Mode & Utility',
                title: 'Offline Mode & Utility',
                 image: 'products/Features-09.png',
                bullets: [
                    'DigiPOS is a flexible and reliable Point of Sale solution designed to keep your business running smoothly no matter your internet connectivity.',
                    'With an active internet connection, DigiPOS operates in real-time allowing you to process orders, manage inventory, and access up-to-the-minute sales reports instantly across all devices.',
                    'While offline, DigiPOS securely stores all transaction data locally on the device. Once the connection is restored, all data is automatically synced to the cloud, keeping your system fully updated.'
                ]
            },
            {
                label: 'ZATCA E-Invoicing Compliant',
                title: 'ZATCA Integration',
                 image: 'products/Features-10.png',
                bullets: [
                    'DigiPOS is now fully integrated with Saudi Arabia ZATCA requirements, providing businesses with a streamlined and efficient way to manage their sales and inventory while staying fully compliant with the latest tax regulations.',
                    'Our team of experts worked diligently to ensure that DigiPOS seamlessly integrates with ZATCA, providing businesses with a seamless and user-friendly way to comply with the latest tax regulations.',
                    'The integration allows businesses in Saudi Arabia to easily comply with the latest tax regulations, without having to worry about the complexities of tax compliance.'
                ]
            }
        ],
        sidebarImage: 'products/Features-01.png',
        overlayImage: 'products/Features-01.png',
        sidebarTitle: 'Dashboard Management',
        sidebarBullets: [
            'With DigiPOS dashboard management, you can easily visualize data in real-time. Performance indicators related to sales transactions and overall business operations.',
            'Monitor key metrics such as:',
            '<strong>Sales:</strong> Track daily, hourly, weekly, and monthly sales performance.',
            '<strong>Status-wise Sales:</strong> View sales by order status to understand your workflow and identify bottlenecks.',
            '<strong>Top Products & Category Sales:</strong> Identify best-selling products and categories to optimize inventory and promotions.',
            '<strong>Customer Trends:</strong> Understand customer preferences and behaviors to improve service and marketing strategies.'
        ]
    },
    {
        slug: 'waiter-tab',
        name: 'Waiter Tab',
        catergory: 'Front Office',
        heroTitle: 'Waiter Tab',
        heroDescription: `DigiPOS is a modern, cloud-based Point of Sale (POS) system made for restaurants and hospitality businesses. 
            It works both online and offline, so your business can run smoothly at all times. With DigiPOS, you can see live sales reports, 
            track inventory, check staff performance, and learn about your customers from anywhere. 
            It helps you stay in control, cut costs, and grow your profits using smart tools and real-time data.`,
        heroImages: "products/Cloud Point of Sales.png",
        complianceTag: 'Compliant with:',
        complianceImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIyG9CImBv66uEEChinrNgQL_s05hCggeBg&s',
        ctaText: 'Get a Demo',
        features: [
            { icon: 'bolt', title: 'Quick & Easy Setup', description: 'Switch to DigiPOS effortlessly with a quick and hassle-free installation.' },
            { icon: 'wifi_off', title: 'Online & Offline Functionality', description: 'Ensures full operational continuity even during internet outages.' },
            { icon: 'query_stats', title: 'Real-Time Data Access', description: 'View up-to-the-minute reports, sales trends, and inventory levels from any device.' },
            { icon: 'touch_app', title: 'User-Friendly Interface', description: 'Designed with intuitive workflows for quick onboarding and faster staff adoption.' },
            { icon: 'devices', title: 'Multi-Device Compatibility', description: 'Works seamlessly across tablets, desktops, and mobile devices.' },
            { icon: 'insights', title: 'Comprehensive Reporting', description: 'Generate insightful reports on sales transactions, peak hours, and more to support decision-making.' },
            { icon: 'cloud_done', title: 'Secure Cloud Backup', description: 'All data is encrypted and automatically backed up, ensuring business continuity and data protection.' },
            { icon: 'sync_alt', title: 'Integration Capabilities', description: 'Easily integrates with accounting software, payment gateways, and third-party applications.' },
            { icon: 'support_agent', title: '24/7 Customer Support', description: 'Our dedicated support team is available around the clock to help you with any questions or issues you may have.' }
        ],
        sidebarMenu: [
            {
                label: 'Dashboards Management',
                active: true,
                title: 'Dashboard Management',
                 image: 'products/Features-01.png',
                bullets: [
                    'With DigiPOS dashboard management, you can easily visualize data in real-time. Performance indicators related to sales transactions and overall business operations.',
                    'Monitor key metrics such as:',
                    '<strong>Sales:</strong> Track daily, hourly, weekly, and monthly sales performance.',
                    '<strong>Status-wise Sales:</strong> View sales by order status to understand your workflow and identify bottlenecks.',
                    '<strong>Top Products & Category Sales:</strong> Identify best-selling products and categories to optimize inventory and promotions.',
                    '<strong>Customer Trends:</strong> Understand customer preferences and behaviors to improve service and marketing strategies.'
                ]
            },
            {
                label: 'Menu Management',
                title: 'Menu Management',
                 image: 'products/Features-01.png',
                bullets: [
                    'Manage your menu anytime, anywhere.',
                    'With DigiPOS, you can create, update, and control your menu in real-time from any device, ensuring smooth operations and maximized profits.',
                    'Real-time menu control for real-world speed.',
                    'DigiPOS empowers your team to make immediate changes, manage item availability, and keep the front and back of house in sync.'
                ]
            },
            {
                label: 'Dine-In Table Management',
                title: 'Dine-In Table Management',
                 image: 'products/Features-01.png',
                bullets: [
                    'Using DigiPOS Table Management feature is essential for efficiently managing dine-in orders, assign tables and track orders.',
                    'Real-time updates: The system provides real-time updates, allowing the staff to see which tables are occupied, available, or being prepared for new guests.',
                    'Customer count: Track the number of customers at each table to adjust the order size and customize the dining experience.'
                ]
            },
            {
                label: 'Reporting Management',
                title: 'Reporting Management',
                 image: 'products/Features-01.png',
                bullets: [
                    'Want to uncover hidden trends in your sales data?',
                    'Generate comprehensive reports to analyze your business performance.',
                    'Track sales trends, identify peak hours, and gain valuable insights to optimize your operations.'
                ]
            },
            {
                label: 'Outlets Management',
                title: 'Outlets Management',
                 image: 'products/Features-01.png',
                bullets: [
                    'Managing multiple outlets? DigiPOS has the solution.',
                    'If you have multiple outlets, DigiPOS simplifies management across all locations.',
                    'Synchronize inventory, track sales, and maintain consistent operations, regardless of where your customers are.'
                ]
            },
            {
                label: 'Foods Recipes & Costing',
                title: 'Foods Recipes & Costing',
                 image: 'products/Features-01.png',
                bullets: [
                    'Tired of wondering where your profits are going? Want to take control of your food costs?',
                    'Let’s do it with DigiPOS.',
                    'Create detailed recipes, track ingredient usage, and optimize your menu pricing to maximize profitability.'
                ]
            },
            {
                label: 'Inventory Management',
                title: 'Inventory Management',
                 image: 'products/Features-01.png',
                bullets: [
                    'Inventory management is the process of efficiently overseeing, tracking, and controlling a company\'s inventory of raw materials, and finished products.',
                    '<strong>Stock Opening</strong>',
                    'Stock Transfers Note (Stock Out)',
                    'Stock Receiving Note (Stock In)',
                    'Stock Damage (Wastage)',
                    'Inventory Physical Counts'
                ]
            },
            {
                label: 'Purchase Management',
                title: 'Purchase Management',
                 image: 'products/Features-01.png',
                bullets: [
                    'Purchase management is the process of acquiring goods and services efficiently while controlling costs and ensuring quality. Here are the key features of Purchase Management.',
                    'Purchase Requisition (PR)',
                    'Purchase Order (PO)',
                    'Goods Received Note (GRN)',
                    'Purchase Return'
                ]
            },
            {
                label: 'Offline Mode & Utility',
                title: 'Offline Mode & Utility',
                 image: 'products/Features-01.png',
                bullets: [
                    'DigiPOS is a flexible and reliable Point of Sale solution designed to keep your business running smoothly no matter your internet connectivity.',
                    'With an active internet connection, DigiPOS operates in real-time allowing you to process orders, manage inventory, and access up-to-the-minute sales reports instantly across all devices.',
                    'While offline, DigiPOS securely stores all transaction data locally on the device. Once the connection is restored, all data is automatically synced to the cloud, keeping your system fully updated.'
                ]
            },
            {
                label: 'ZATCA E-Invoicing Compliant',
                title: 'ZATCA Integration',
                 image: 'products/Features-01.png',
                bullets: [
                    'DigiPOS is now fully integrated with Saudi Arabia ZATCA requirements, providing businesses with a streamlined and efficient way to manage their sales and inventory while staying fully compliant with the latest tax regulations.',
                    'Our team of experts worked diligently to ensure that DigiPOS seamlessly integrates with ZATCA, providing businesses with a seamless and user-friendly way to comply with the latest tax regulations.',
                    'The integration allows businesses in Saudi Arabia to easily comply with the latest tax regulations, without having to worry about the complexities of tax compliance.'
                ]
            }
        ],
        sidebarImage: 'products/Features-01.png',
        overlayImage: 'products/Features-01.png',
        sidebarTitle: 'Dashboard Management',
        sidebarBullets: [
            'With DigiPOS dashboard management, you can easily visualize data in real-time. Performance indicators related to sales transactions and overall business operations.',
            'Monitor key metrics such as:',
            '<strong>Sales:</strong> Track daily, hourly, weekly, and monthly sales performance.',
            '<strong>Status-wise Sales:</strong> View sales by order status to understand your workflow and identify bottlenecks.',
            '<strong>Top Products & Category Sales:</strong> Identify best-selling products and categories to optimize inventory and promotions.',
            '<strong>Customer Trends:</strong> Understand customer preferences and behaviors to improve service and marketing strategies.'
        ]
    },
];
