import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-integrations-marquee',
  templateUrl: './integrations-marquee.component.html',
  styleUrl: './integrations-marquee.component.css',
  imports: [NgFor],
})
export class IntegrationsMarqueeComponent {
  images = [
    'https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/client-story-images/ul/general/2a/14/neoleap_logo.component.complex-narrative-nocrop-xl.ts=1738761703178.png/content/adobe-cms/us/en/case-studies/neoleap/_jcr_content/root/table_of_contents/content_section_styl/content-section-body/complex_narrative_251799598/logoimage',
    'https://www.deliverect.com/_next/static/media/Deliverect_Logo_Primary.f53dd6eb.png',
    'https://accendero.com/wp-content/uploads/erpnext-logo-700.png',
    'https://info.qlub.io/hs-fs/hubfs/images/logos/Final-logo.png?width=2315&height=730&name=Final-logo.png',
    'https://files.readme.io/23ffaffb361467efe1d2da696bc31aa92fc73a74fe3699ba3d197ec878a13344-small-MF-Logo-Black.png',
    'https://lyveglobal.com/wp-content/uploads/2023/04/logo-geidea.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7mcocM_W_gZA_VzFXbbGF9_gfZM024sGyg&s',
  ];
}
