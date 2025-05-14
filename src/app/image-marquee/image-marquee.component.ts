import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-marquee',
  templateUrl: './image-marquee.component.html',
  styleUrls: ['./image-marquee.component.css'],
  imports: [NgFor]
})
export class ImageMarqueeComponent {
  images = [
    'https://1000logos.net/wp-content/uploads/2020/09/Cinnabon-logo.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/04b0e30e-c394-4e4f-b4bb-b0bb99c50e22/dg92lft-b78100b0-c4c5-4be9-8cf0-cad766c0160d.png/v1/fill/w_1280,h_309/dunkin__donuts_logo_combination__2007___2022__by_vincerabina_dg92lft-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzA5IiwicGF0aCI6IlwvZlwvMDRiMGUzMGUtYzM5NC00ZTRmLWI0YmItYjBiYjk5YzUwZTIyXC9kZzkybGZ0LWI3ODEwMGIwLWM0YzUtNGJlOS04Y2YwLWNhZDc2NmMwMTYwZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.UR4V108E7LEljWH5S8xG7FyCFQbzZG-56akPxkBGZi8',
    'https://pngimg.com/d/starbucks_PNG7.png',
    'https://amman.bwr-intl.com/wp-content/themes/bwr_market/images/logo.png',
    'https://brandlogos.net/wp-content/uploads/2021/12/little_caesar-brandlogo.net_.png',
    'https://cdn.brandfetch.io/halfm.sa/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI14Z2OY506B2whqax0CgQk1PPJ2GiL1vQEw&s',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freshii_logo.svg/2048px-Freshii_logo.svg.png',
  ];
}
