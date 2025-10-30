import { Component, type OnInit, type OnDestroy, PLATFORM_ID, Inject, ElementRef, ViewChild, HostListener } from "@angular/core"
import { CommonModule, isPlatformBrowser } from "@angular/common"
import { RouterModule } from "@angular/router"
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { NavbarDataService, type MenuKey, type MegaMenus } from './navbar-data.service'

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
})
export class NavbarComponent implements OnInit, OnDestroy {
  activeMenu: MenuKey | null = null;
  mobileMenuOpen: boolean = false; // Add property to track mobile menu state
  menuKeys: MenuKey[] = ['products', 'hardware', 'business'];
  closeTimeout: any = null; // Add this to manage the close timeout
  resizeListener: any;
  isBrowser: boolean;
  currentLanguage: string = 'en';

  @ViewChild('navbarElement') navbarElement!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private translate: TranslateService,
    private navbarDataService: NavbarDataService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.currentLanguage = this.translate.currentLang || 'en';
  }


  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.activeMenu = null;
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLanguage);
    
    // Update document direction for RTL support
    // if (this.isBrowser) {
    //   document.documentElement.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    //   document.documentElement.lang = this.currentLanguage;
    // }
  }

  getCurrentFlag(): string {
    return this.currentLanguage === 'en' ? 'https://flagcdn.com/w40/sa.png' : 'https://flagcdn.com/w40/us.png';
  }

  getCurrentFlagAlt(): string {
    return this.currentLanguage === 'en' ? 'SA Flag' : 'US Flag';
  }



  // @HostListener('document:click', ['$event'])
  // handleClickOutside(event: Event) {
  //   this.closeMenuOnOutsideClick(event);
  // }

  // Mega menu data structure with translation keys
  megaMenus!: MegaMenus;
    
    openMenu(menu: MenuKey): void {
      // Clear any existing timeout to prevent the menu from closing
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = null;
      }
      this.activeMenu = menu;
    }
  
    startCloseMenu(): void {
      // Set a small delay before actually closing the menu
      // This gives time to move the cursor to the dropdown
      this.closeTimeout = setTimeout(() => {
        this.activeMenu = null;
        this.closeTimeout = null;
      }, 150); // 150ms delay gives enough time to move to dropdown
    }
  
    // Keep the mobile menu toggle method
    toggleMobileMenu(): void {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  
    // Keep the original toggleMenu for mobile
    toggleMenu(menu: MenuKey): void {
      this.activeMenu = this.activeMenu === menu ? null : menu;
    }
  
    // Method to close menu when clicking outside
    closeMenuOnOutsideClick(event: MouseEvent): void {
      // Check if there's an active menu and if the click was outside of the navbar
      if (this.activeMenu && this.navbarElement) {
        // Check if the click target is contained within the navbar
        const clickedInside = this.navbarElement.nativeElement.contains(event.target);
        
        if (!clickedInside) {
          // Click was outside navbar, close any open menus
          this.activeMenu = null;
          // Close mobile menu too if open
          if (this.mobileMenuOpen) {
            this.mobileMenuOpen = false;
          }
        }
      }
    }
  
    ngOnInit() {
      // Initialize mega menu data
      this.megaMenus = this.navbarDataService.getMegaMenuData();
      
      // Ensure translation service is ready
      if (this.isBrowser && this.translate.currentLang) {
        this.currentLanguage = this.translate.currentLang;
      }
      
      // Add resize listener to close mobile menu on larger screens
      if (this.isBrowser) {
        this.resizeListener = () => {
          if (window.innerWidth >= 1024) { // Use lg breakpoint (1024px)
            this.mobileMenuOpen = false;
          }
        }
        window.addEventListener("resize", this.resizeListener);
      }
    }
  
    ngOnDestroy() {
      // Clean up event listeners
      if (this.isBrowser && this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
      }
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
      }
    }

    // Helper method to determine the appropriate grid class based on number of sections
    getGridClass(sectionCount: number): string {
      switch(sectionCount) {
        case 1: return 'grid-cols-1';
        case 2: return 'grid-cols-2';
        case 3: return 'grid-cols-3';
        case 4: return 'grid-cols-4';
        default: return sectionCount > 4 ? 'grid-cols-4' : 'grid-cols-1';
      }
    }
  }
