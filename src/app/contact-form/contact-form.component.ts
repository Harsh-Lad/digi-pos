import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  showToastFlag = false;
  toastMessage = '';
  countrySearchTerm: string = '';
  countries: any[] = [
    { name: 'Afghanistan', code: '93' },
    { name: 'Albania', code: '355' },
    { name: 'Algeria', code: '213' },
    { name: 'American Samoa', code: '1-684' },
    { name: 'Andorra', code: '376' },
    { name: 'Angola', code: '244' },
    { name: 'Anguilla', code: '1-264' },
    { name: 'Antigua and Barbuda', code: '1-268' },
    { name: 'Argentina', code: '54' },
    { name: 'Armenia', code: '374' },
    { name: 'Aruba', code: '297' },
    { name: 'Australia', code: '61' },
    { name: 'Austria', code: '43' },
    { name: 'Azerbaijan', code: '994' },
    { name: 'Bahamas', code: '1-242' },
    { name: 'Bahrain', code: '973' },
    { name: 'Bangladesh', code: '880' },
    { name: 'Barbados', code: '1-246' },
    { name: 'Belarus', code: '375' },
    { name: 'Belgium', code: '32' },
    { name: 'Belize', code: '501' },
    { name: 'Benin', code: '229' },
    { name: 'Bermuda', code: '1-441' },
    { name: 'Bhutan', code: '975' },
    { name: 'Bolivia', code: '591' },
    { name: 'Bosnia and Herzegovina', code: '387' },
    { name: 'Botswana', code: '267' },
    { name: 'Brazil', code: '55' },
    { name: 'British Virgin Islands', code: '1-284' },
    { name: 'Brunei', code: '673' },
    { name: 'Bulgaria', code: '359' },
    { name: 'Burkina Faso', code: '226' },
    { name: 'Burundi', code: '257' },
    { name: 'Cabo Verde', code: '238' },
    { name: 'Cambodia', code: '855' },
    { name: 'Cameroon', code: '237' },
    { name: 'Canada', code: '1' },
    { name: 'Cayman Islands', code: '1-345' },
    { name: 'Central African Republic', code: '236' },
    { name: 'Chad', code: '235' },
    { name: 'Chile', code: '56' },
    { name: 'China', code: '86' },
    { name: 'Colombia', code: '57' },
    { name: 'Comoros', code: '269' },
    { name: 'Congo', code: '242' },
    { name: 'Cook Islands', code: '682' },
    { name: 'Costa Rica', code: '506' },
    { name: "Côte d'Ivoire", code: '225' },
    { name: 'Croatia', code: '385' },
    { name: 'Cuba', code: '53' },
    { name: 'Curaçao', code: '599' },
    { name: 'Cyprus', code: '357' },
    { name: 'Czech Republic', code: '420' },
    { name: 'Denmark', code: '45' },
    { name: 'Djibouti', code: '253' },
    { name: 'Dominica', code: '1-767' },
    { name: 'Dominican Republic', code: '1-809' },
    { name: 'DR Congo', code: '243' },
    { name: 'Ecuador', code: '593' },
    { name: 'Egypt', code: '20' },
    { name: 'El Salvador', code: '503' },
    { name: 'Equatorial Guinea', code: '240' },
    { name: 'Eritrea', code: '291' },
    { name: 'Estonia', code: '372' },
    { name: 'Eswatini', code: '268' },
    { name: 'Ethiopia', code: '251' },
    { name: 'Faeroe Islands', code: '298' },
    { name: 'Falkland Islands', code: '500' },
    { name: 'Fiji', code: '679' },
    { name: 'Finland', code: '358' },
    { name: 'France', code: '33' },
    { name: 'French Polynesia', code: '689' },
    { name: 'Gabon', code: '241' },
    { name: 'Gambia', code: '220' },
    { name: 'Georgia', code: '995' },
    { name: 'Germany', code: '49' },
    { name: 'Ghana', code: '233' },
    { name: 'Gibraltar', code: '350' },
    { name: 'Greece', code: '30' },
    { name: 'Greenland', code: '299' },
    { name: 'Grenada', code: '1-473' },
    { name: 'Guam', code: '1-671' },
    { name: 'Guatemala', code: '502' },
    { name: 'Guinea', code: '224' },
    { name: 'Guinea-Bissau', code: '245' },
    { name: 'Guyana', code: '592' },
    { name: 'Haiti', code: '509' },
    { name: 'Holy See', code: '379' },
    { name: 'Honduras', code: '504' },
    { name: 'Hong Kong', code: '852' },
    { name: 'Hungary', code: '36' },
    { name: 'Iceland', code: '354' },
    { name: 'India', code: '91' },
    { name: 'Indonesia', code: '62' },
    { name: 'Iran', code: '98' },
    { name: 'Iraq', code: '964' },
    { name: 'Ireland', code: '353' },
    { name: 'Isle of Man', code: '44-1624' },
    { name: 'Israel', code: '972' },
    { name: 'Italy', code: '39' },
    { name: 'Jamaica', code: '1-876' },
    { name: 'Japan', code: '81' },
    { name: 'Jordan', code: '962' },
    { name: 'Kazakhstan', code: '7' },
    { name: 'Kenya', code: '254' },
    { name: 'Kiribati', code: '686' },
    { name: 'Kuwait', code: '965' },
    { name: 'Kyrgyzstan', code: '996' },
    { name: 'Laos', code: '856' },
    { name: 'Latvia', code: '371' },
    { name: 'Lebanon', code: '961' },
    { name: 'Lesotho', code: '266' },
    { name: 'Liberia', code: '231' },
    { name: 'Libya', code: '218' },
    { name: 'Liechtenstein', code: '423' },
    { name: 'Lithuania', code: '370' },
    { name: 'Luxembourg', code: '352' },
    { name: 'Macao', code: '853' },
    { name: 'Madagascar', code: '261' },
    { name: 'Malawi', code: '265' },
    { name: 'Malaysia', code: '60' },
    { name: 'Maldives', code: '960' },
    { name: 'Mali', code: '223' },
    { name: 'Malta', code: '356' },
    { name: 'Marshall Islands', code: '692' },
    { name: 'Mauritania', code: '222' },
    { name: 'Mauritius', code: '230' },
    { name: 'Mayotte', code: '262' },
    { name: 'Mexico', code: '52' },
    { name: 'Micronesia', code: '691' },
    { name: 'Moldova', code: '373' },
    { name: 'Monaco', code: '377' },
    { name: 'Mongolia', code: '976' },
    { name: 'Montenegro', code: '382' },
    { name: 'Montserrat', code: '1-664' },
    { name: 'Morocco', code: '212' },
    { name: 'Mozambique', code: '258' },
    { name: 'Myanmar', code: '95' },
    { name: 'Namibia', code: '264' },
    { name: 'Nauru', code: '674' },
    { name: 'Nepal', code: '977' },
    { name: 'Netherlands', code: '31' },
    { name: 'New Caledonia', code: '687' },
    { name: 'New Zealand', code: '64' },
    { name: 'Nicaragua', code: '505' },
    { name: 'Niger', code: '227' },
    { name: 'Nigeria', code: '234' },
    { name: 'Niue', code: '683' },
    { name: 'Northern Mariana Islands', code: '1-670' },
    { name: 'North Korea', code: '850' },
    { name: 'North Macedonia', code: '389' },
    { name: 'Norway', code: '47' },
    { name: 'Oman', code: '968' },
    { name: 'Pakistan', code: '92' },
    { name: 'Palau', code: '680' },
    { name: 'Panama', code: '507' },
    { name: 'Papua New Guinea', code: '675' },
    { name: 'Paraguay', code: '595' },
    { name: 'Peru', code: '51' },
    { name: 'Philippines', code: '63' },
    { name: 'Poland', code: '48' },
    { name: 'Portugal', code: '351' },
    { name: 'Puerto Rico', code: '1-787' },
    { name: 'Qatar', code: '974' },
    { name: 'Réunion', code: '262' },
    { name: 'Romania', code: '40' },
    { name: 'Russia', code: '7' },
    { name: 'Rwanda', code: '250' },
    { name: 'Saint Barthelemy', code: '590' },
    { name: 'Saint Helena', code: '290' },
    { name: 'Saint Kitts & Nevis', code: '1-869' },
    { name: 'Saint Lucia', code: '1-758' },
    { name: 'Saint Martin', code: '590' },
    { name: 'Saint Pierre & Miquelon', code: '508' },
    { name: 'Samoa', code: '685' },
    { name: 'San Marino', code: '378' },
    { name: 'Sao Tome & Principe', code: '239' },
    { name: 'Saudi Arabia', code: '966' },
    { name: 'Senegal', code: '221' },
    { name: 'Serbia', code: '381' },
    { name: 'Seychelles', code: '248' },
    { name: 'Sierra Leone', code: '232' },
    { name: 'Singapore', code: '65' },
    { name: 'Sint Maarten', code: '1-721' },
    { name: 'Slovakia', code: '421' },
    { name: 'Slovenia', code: '386' },
    { name: 'Solomon Islands', code: '677' },
    { name: 'Somalia', code: '252' },
    { name: 'South Africa', code: '27' },
    { name: 'South Korea', code: '82' },
    { name: 'South Sudan', code: '211' },
    { name: 'Spain', code: '34' },
    { name: 'Sri Lanka', code: '94' },
    { name: 'State of Palestine', code: '970' },
    { name: 'St. Vincent & Grenadines', code: '1-784' },
    { name: 'Sudan', code: '249' },
    { name: 'Suriname', code: '597' },
    { name: 'Sweden', code: '46' },
    { name: 'Switzerland', code: '41' },
    { name: 'Syria', code: '963' },
    { name: 'Taiwan', code: '886' },
    { name: 'Tajikistan', code: '992' },
    { name: 'Tanzania', code: '255' },
    { name: 'Thailand', code: '66' },
    { name: 'Timor-Leste', code: '670' },
    { name: 'Togo', code: '228' },
    { name: 'Tokelau', code: '690' },
    { name: 'Tonga', code: '676' },
    { name: 'Trinidad and Tobago', code: '1-868' },
    { name: 'Tunisia', code: '216' },
    { name: 'Turkey', code: '90' },
    { name: 'Turkmenistan', code: '993' },
    { name: 'Turks and Caicos', code: '1-649' },
    { name: 'Tuvalu', code: '688' },
    { name: 'Uganda', code: '256' },
    { name: 'Ukraine', code: '380' },
    { name: 'United Arab Emirates', code: '971' },
    { name: 'United Kingdom', code: '44' },
    { name: 'United States', code: '1' },
    { name: 'Uruguay', code: '598' },
    { name: 'U.S. Virgin Islands', code: '1-340' },
    { name: 'Uzbekistan', code: '998' },
    { name: 'Vanuatu', code: '678' },
    { name: 'Venezuela', code: '58' },
    { name: 'Vietnam', code: '84' },
    { name: 'Wallis & Futuna', code: '681' },
    { name: 'Western Sahara', code: '212' },
    { name: 'Yemen', code: '967' },
    { name: 'Zambia', code: '260' },
    { name: 'Zimbabwe', code: '263' },
  ];

  @ViewChild('formRef') formRef!: ElementRef<HTMLFormElement>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneCountry: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      businessName: [''],
      branches: ['', Validators.required],
      country: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
      privacy: [false, Validators.requiredTrue],
    });
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }

  filteredCountries() {
    if (!this.countrySearchTerm) {
      return this.countries;
    }

    const searchTerm = this.countrySearchTerm.toLowerCase();
    return this.countries.filter(
      (country) =>
        country.name.toLowerCase().includes(searchTerm) ||
        country.code.toString().includes(searchTerm)
    );
  }

  async onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    // Prepare form data
    const formData = {
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      email: this.contactForm.value.email,
      phoneCountry: this.contactForm.value.phoneCountry,
      phoneNumber: this.contactForm.value.phoneNumber,
      businessName: this.contactForm.value.businessName,
      branches: this.contactForm.value.branches,
      country: this.contactForm.value.country,
      terms: this.contactForm.value.terms,
      privacy: this.contactForm.value.privacy,
      _subject: 'New Contact Us Submission!',
      _template: 'table',
    };

    try {
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      const response = await axios.post(
        'https://formsubmit.co/ajax/sales@digipos.io',
        formData
      );
      if (response.data.success === 'true') {
        this.showToast('✔ Thank you for submitting the form!');
        this.contactForm.reset();
        this.submitted = false;
      } else {
        this.showToast('Submission failed. Please try again.');
      }
    } catch (error) {
      this.showToast('Submission failed. Please try again.');
    }
  }

  showToast(message: string) {
    this.toastMessage = message;
    this.showToastFlag = true;
    setTimeout(() => {
      this.showToastFlag = false;
    }, 3000);
  }
}
