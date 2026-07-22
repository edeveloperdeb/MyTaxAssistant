/* ----------------------------------------------------
         DATA STRUCTURE — DEDUCTIONS
      ---------------------------------------------------- */

const BLOCKS = {
  /* ------------------------------
           ANIMALS
        ------------------------------ */
  Animals: {
    general: `
        <div><strong>Working Dogs / Horses:</strong> A working animal can only be claimed where the taxpayer's work duties requires them to use a working animal, it is a condition of employment that they provide their own working animal, the animal is trained from a young age, and the animal is only used for purpose and is not treated like the taxpayer's pet.
            <ul>
                <li><strong>Deductible:</strong> Veterinary care, training, food, and registration costs </li>
                <li><strong>Not Deductible:</strong> The initial cost of purchasing a working animal is a capital expense. However, decline in value can be claimed over the animals's effective life.</li>
            </ul>
        </div>
     `,
  },

  /* ------------------------------
           BAGS
        ------------------------------ */
  bags: {
    general: `
        <div><strong>Bags: </strong>Satchels, Briefcases, Handbags, Laptop Bags</div>
    `,
    police: `
        <div><strong>Bags: </strong>Kit Bags, Satchels, Briefcases, Handbags and Laptop Bags</div>
    `,
  },

  /* ------------------------------
           CLOTHING & UNIFORMS
        ------------------------------ */
  clothing: {
    general: `
                  <div>
                    <strong>Clothing and Uniform Expenses</strong>
                    <ul>
                      <li><strong>Maintenance:</strong> Laundry, Dry Cleaning, Laundromat (washing and drying), and Ironing.</li>
                      <li><strong>Compulsory Uniform:</strong> Accessories, Shirts, Pants, Skirts, Jackets, and Ties. May include Footwear and Stockings.</li>
                      <li><strong>Non-Compulsory Uniform:</strong> Complete Outfits of Shirts, Pants, Skirts, Jackets, Accessories and Ties.</li>
                      <li><strong>Protective Clothing:</strong> Fire-Resistant Clothing, Sun-Protective clothing, High-Visibility Vests, Safety-Coloured Vests, Steel-Capped Boots, Heavy-Duty Gloves, Overalls, and Heavy-Duty Shirts and Pants (jeans are generally excluded).</li>
                      <li><strong>Occupation Specifc Clothing:</strong> Distinct items that clearly identify a specific profession and not suitable for everyday wear. For example, Chef's Pants and Hat.</li>
                    </ul>
                  </div>
          `,

    adf: `
                  <div>
                  <strong>Clothing and Uniform Expenses</strong>
                    <ul>
                      <li><strong>Accessories:</strong> Embellishments, Regulation Hats, Caps, Ties, Socks, and Stockings that are part of a compulsory uniform</li>
                      <li><strong>Compulsory Uniforms / Service Dress / Mess Dress:</strong> Uniform Shirts, Pants, Jumpers, Jackets, Skirts and Dresses with Rank or Insignia</li>
                      <li><strong>Footwear:</strong> Combat/Duty Gear and Footwear (specially issued service dress shoes or black boots)</li>
                      <li><strong>Maintenance:</strong> Laundry, Dry Cleaning, Laundromat (washing and drying), Ironing, Shoe Polishing Materials (rags and polish)</li>
                      <li><strong>Other:</strong> Medal Mounting, Purchase of Medals (replicas of issued medals)</li>
                      <li><strong>Physical Training (PT Gear):</strong> Official monogram (such as regimental crest) and easily identifies the person as a member of the ADF</li>
                      <li><strong>Protective Clothing:</strong> Overalls, Safety Boots, Fire Resistant Clothing, and  Wet Weather Gear. Navy - Diver's additional wetsuit.</li>
                    </ul>
                  </div>
          `,

    adult: `
                  <div>
                    <strong>Clothing and Grooming</strong>
                    <ul>
                      <li><strong>Maintenance:</strong> Laundry, Dry Cleaning, Laundromat (washing and drying), and Ironing.</li>
                      <li><strong>Costumes and Special Gear:</strong> Clothing, Lingerie, Special Props required for a specific role or performance that are not suitable for everyday private wear</li>
                      <li><strong>Makeupm:</strong> Cost of stage makeup and cleansing materials for removing stage make-up</li>
                    </ul>
                  </div>
          `,

    nurse: `
                  <div>
                    <strong>Clothing and Uniform Expenses</strong>
                    <ul>
                      <li><strong>Compulsory Items: </strong>Shirts and Polo Tops with logos, Vests, Cardigans</li>
                      <li><strong>Footwear: </strong>Non-slip nursing shoes (specifically designed with slip-resistant soles and adequate support for long shifts)</li>
                      <li><strong>Maintenance:</strong> Laundry, Laundromat, Ironing and Dry Cleaning</li>
                      <li><strong>Protective/Occupation Specific Items:</strong> Aprons, Lab Coats and Scrubs</li>
                    </ul>
                  </div>
          `,

    office: `
                  <div>
                    <strong>Clothing and Uniform Expenses</strong>
                    <ul>
                      <li><strong>Maintenance:</strong> Laundry, Dry Cleaning, Laundromat (washing and drying), and Ironing.</li>
                      <li><strong>Compulsory Uniform:</strong> Accessories, Shirts, Pants, Skirts, Jackets, and Ties. May include Footwear and Stockings.</li>
                      <li><strong>Non-Compulsory Uniform:</strong> Complete Outfits of Shirts, Pants, Skirts, Jackets, Accessories and Ties.</li>
                    </ul>
                  </div>
          `,
    outdoor: `
                  <div>
                    <strong>Clothing and Uniform Expenses</strong>
                    <ul>
                      <li><strong>Maintenance:</strong> Laundry, Dry Cleaning, Laundromat (washing and drying), and Ironing.</li>
                      <li><strong>Compulsory Uniform:</strong> Accessories, Shirts, Pants, Skirts, Jackets, and Ties. May include Footwear and Stockings.</li>
                      <li><strong>Protective Clothing:</strong> Fire-Resistant Clothing, Sun-Protective clothing, High-Visibility Vests, Safety-Coloured Vests, Steel-Capped Boots, Gumboots, Heavy-Duty Gloves, Overalls, and Heavy-Duty Shirts and Pants (jeans are generally excluded).</li>
                      <li><strong>Occupation Specifc Clothing:</strong> Distinct items that clearly identify a specific profession and not suitable for everyday wear. For example, Beekeeping Suit.</li>
                    </ul>
                  </div>
          `,
    police: `
                  <div>
                  <strong>Clothing and Uniform Expenses</strong>
                    <ul>
                      <li><strong>Maintenance:</strong> Laundry, Dry Cleaning, Laundromat (washing and drying), Ironing, Shoe Polishing Materials (rags and polish)</li>
                      <li><strong>Compulsory Uniform:</strong> Accessories, Shirts, Pants, Skirts, Jackets, Ties, Hats, Caps, Socks and Stockings.</li>
                      <li><strong>Conventional Clothing:</strong> When worn by undercover police officers where they would not be worn outside of work.</li>
                      <li><strong>Protective Clothing:</strong> Fire-Resistant Clothing, High-Visibility Vests, Overalls, and Wet Weather Clothing.</li>
                      <li><strong>Footwear:</strong> Heavy Duty Boots and Footwear (specially issued service dress shoes or black boots).</li>
                      <li><strong>Other:</strong> Medal Mounting</li>
                    </ul>
                  </div>
          `,
  },

  /* ------------------------------
           EYEWEAR
        ------------------------------ */
  Eyewear: {
    general: `
                  <div><strong>Eye Protection:</strong> Anti-glare Glasses, Photochromatic Glasses, Sunglasses, Goggles, and Safety Glasses</div>
          `,
    actor: `
                  <div><strong>Eyewear:</strong> Costume Glasses, Sunglasses, Goggles, Safety Glasses, and Tinted Lenses to alter eye color if required for a role</div>
          `,
  },

  /* ------------------------------
           FIRST AID
        ------------------------------ */
  firstAid: {
    general: `
                  <div><strong>First Aid Courses:</strong> Where the taxpayer is the designated first aid person and they need to complete this course to assist in emergency situations.</div>
          `,
  },

  /* ------------------------------
           FITNESS
        ------------------------------ */
  fitness: {
    actor: `
                  <div><strong>Fitness Expenses (specific roles only):</strong> Generally, gym memberships are not deductible. However, exceptionally high-level fitness required for specific work (like an acrobat, or a dancer) may be claimed</div>
          `,
    ambulance: `
                  <div><strong>Fitness Expenses:</strong> While general gym fees are not deductible, officers in specialized rescue operations requiring extraordinary, above-average fitness testing (e.g., white water survival, vertical access) may be able to claim specialized fitness expenses. </div>
          `,
    police: `
                  <div><strong>Fitness Expenses:</strong> Where the job requires a fitness level well above the Police general standard, i.e. PTI, Special Operations Group, Tactical Operations Group etc</div>
          `,
  },

  /* ------------------------------
           MOTOR VEHICLES
        ------------------------------ */
  motorVehicles: {
    general: `
                  <div>
                    <strong>Motor Vehicles</strong>
                        <ul>
                            <li><strong>Carry bulky tools and/or equipment:</strong> No place to leave them at work. The items are too large and heavy (generally over 20kgs).</li>
                            <li><strong>Travel:</strong> Between and to alternative workplaces, visiting clients, picking up and dropping off items (does not include stopping at post office on the way to or way home from work)</li>
                            <li><strong>Logbook Method:</strong> Cleaning, Depreciation, Fuel, Interest on Car Loan, Lease Payments, Oil, Repairs, Registration, Roadside Assistance, and Services.</li>
                            <li><strong>Cents per km:</strong> Reasonable estimate of kilometres travelled. Capped at 5,000 kms per car per tax return.</li>
                        </ul>
                  </div>
          `,
    police: `
                  <div>
                    <strong>Motor Vehicles</strong>
                        <ul>
                            <li><strong>Carry bulky tools and/or equipment:</strong> No place to leave them at work. The items are too large and heavy (generally over 20kgs).</li>
                            <li><strong>Travel:</strong> Court, OSTT, Police Academy, Alternate Station Start, Meetings at other stations, Between Stations.</li>
                            <li><strong>Logbook Method:</strong> Cleaning, Depreciation, Fuel, Interest on Car Loan, Lease Payments, Oil, Repairs, Registration, Roadside Assistance, and Services.</li>
                            <li><strong>Cents per km:</strong> Reasonable estimate of kilometres travelled. Capped at 5,000 kms per car per tax return.</li>
                        </ul>
                  </div>
          `,
  },

  /* ------------------------------
           OVERTIME MEALS
        ------------------------------ */
  overtimeMeals: {
    general: `
                  <div><strong>Overtime Meals:</strong> Deductible where the taxpayer receives an overtime allowance under an industrial law, award or agreement, the allowance is on the income statement as an allowance, and the the allowance is included in the tax return as income.</div>
          `,
  },

  /* ------------------------------
           PROFESSIONAL ASSOCIATION AND UNION FEES
        ------------------------------ */
  professionalassociation: {
    general: `
                  <div>
                      <strong>Professional Fees, Association Fees, Professional Memberships & Union Fees</strong>
                      <ul>
                          <li><strong>Professional Fees</strong> Tax Agent Fees, Accountant Fees</li>
                          <li><strong>Association / Profssional Membership Fees</strong></li>
                          <li><strong>Union Fees</strong></li>
                      </ul>
                  </div>
          `,
    accountants: `
                  <div>
                      <strong>Professional Fees, Association Fees, Professional Memberships & Union Fees</strong>
                      <ul>
                          <li><strong>Professional Fees:</strong> Tax Agent Fees, Accountant Fees</li>
                          <li><strong>Association / Professional Membership Fees:</strong> CPA, IPA, NTAA, CA, Institute of Certified Bookkeeper, Australian Bookkeepers Network, Tax Practitioners Board</li>
                          <li><strong>Union Fees</strong></li>
                      </ul>
                  </div>
          `,
    actor: `
                  <div>
                      <strong>Professional Fees, Association Fees, Professional Memberships & Union Fees</strong>
                      <ul>
                          <li><strong>Professional Fees</strong> Tax Agent Fees, Accountant Fees</li>
                          <li><strong>Association / Profssional Membership / Union Fees: </strong>Media, Entertainment & Arts Alliance (MEAA), Australian Directors' Guild, Australian Writers' Guild, Live Performance Australia, Association of Artist Managers, Australian Entertainment Agents Association, Dancers Australia, Ausdance, Musicians Australia, Australian Music Association</li>
                      </ul>
                  </div>
          `,
    actuaries: `
                  <div>
                    <strong>Professional Fees, Association Fees, Professional Memberships & Union Fees</strong>
                    <ul>
                        <li><strong>Professional Fees:</strong> Tax Agent Fees, Accountant Fees</li>
                        <li><strong>Association / Professional Membership Fees:</strong> Australian Mathematical Society, Actuaries Institute, Statistical Society of Australia</li>
                        <li><strong>Union Fees</strong></li>
                    </ul>
                  </div>
          `,
    adult: `
                  <div>
                      <strong>Professional Fees, Association Fees, Professional Memberships & Union Fees</strong>
                      <ul>
                          <li><strong>Professional Fees</strong> Tax Agent Fees, Accountant Fees</li>
                          <li><strong>Association / Profssional Membership Fees</strong>Scarlet Alliance (Australian Sex Workers Association), Eros Association</li>
                          <li><strong>Union Fees</strong>Media, Entertainment & Arts Alliance (MEAA), Dancers Australia, South Australia Stripper Hub (SASH)</li>
                      </ul>
                  </div>
          `,
    advertising: `
                  <div>
                    <strong>Professional Fees, Association Fees, Professional Memberships & Union Fees</strong>
                    <ul>
                        <li><strong>Professional Fees:</strong> Tax Agent Fees, Accountant Fees</li>
                        <li><strong>Association / Professional Membership Fees:</strong> Association for Data Driven Marketing and Advertising (ADMA), Australian Marketing Institute (AMI), Advertising Council Australia (ACA), Australian Association of National Advertisers (AANA), Australasian Writers and Art Directors Association (AWARD)</li>
                        <li><strong>Union Fees</strong></li>
                    </ul>
                   </div>
          `,
    ambulance: `
                  <div>
                      <strong>Professional Fees, Association Fees, Licences, Professional Memberships & Union Fees</strong>
                      <ul>
                          <li><strong>Licences</strong> Heavy Vehicle Permits</li>
                          <li><strong>Professional Fees</strong> Tax Agent Fees, Accountant Fees</li>
                          <li><strong>Association / Profssional Membership Fees</strong>Australasian College of Paramedicine</li>
                          <li><strong>Union Fees</strong>NSW & ACT - Ambulance Division of the Health Services Union (ADHSU), VIC - Victorian Ambulance Union (VAU) and Ambulance Employees Australia - Victoria (AEAV), QLD - QLD Ambulance & Paramedics Union, WA - WA Ambulance & Paramedics Union, SA - Ambulance Employees Association of South Australia (AEASA), TAS - Health Services Union (HSU), and NT - United WOrkers Union</li>
                      </ul>
                  </div>
          `,
    archivist: `
                  <div>
                      <strong>Professional Fees, Association Fees, Licences, Professional Memberships & Union Fees</strong>
                      <ul>
                          <li><strong>Licences</strong> Heavy Vehicle Permits</li>
                          <li><strong>Professional Fees</strong> Tax Agent Fees, Accountant Fees</li>
                          <li><strong>Association / Profssional Membership Fees: </strong> <br><strong> - For Archivist and Record Managers:</strong> Australian Society of Archivists (ASA), Records and Information Management Pratitioners Alliance (RIMPA Global) <br> <strong> - For Curators and Museum Professionals:</strong> Australian Museums and Galleries Association (AMaGA) and International Council of Museums (ICOM Australia), Interdiscinplinary Associations: Art Association of Australia and New Zealand (AAANZ), and National Association for the Visual Arts (NAVA)</li>
                          <li><strong>Union Fees</strong>Community and Public Sector Union (CPSU), </li>
                      </ul>
                  </div>
          `,
    forestry: `
                  <div>
                      <strong>Professional Fees, Association Fees, Professional Memberships & Union Fees</strong>
                      <ul>
                          <li><strong>Professional Fees</strong> Tax Agent Fees, Accountant Fees</li>
                          <li><strong>Association / Profssional Membership Fees / Licences: </strong> Gun clubs, Gun Licence Renewals, Forestry Australia, New Zealand Institute of Forestry (NZIF), Commonwealth Forestry Association (CFA), Ag Institute Australia (AIAST), Australian Society of Agronomy, Australian Agricultural and Resource Economics Society (AARES), Soil Science Australia, International Association for the Plant Protection Sciences (IAPPS) </li>
                          <li><strong>Union Fees</strong></li>
                      </ul>
                  </div>
          `,
    mechanic: `
                  <div>
                      <strong>Professional Fees, Association Fees, Professional Memberships, Licences & Union Fees</strong>
                      <ul>
                          <li><strong>Professional Fees</strong> Tax Agent Fees, Accountant Fees</li>
                          <li><strong>Vehicle Airconditioning: </strong>Refrigerant Handling Licence (issued by Australian Refrigeration Council) </li>
                          <li><strong>Vehicle Testing: </strong>Licenced Vehicle Tester </li>
                          <li><strong>High Risk Work Licence: </strong>Required in Victoria if operating certain machinery (like vehicle hoist for specific weights, forklift etc) - issued through Worksafe </li>
                          <li><strong>Restricted Electrical Worker's Licence: </strong>Required if mechanics need to disconnect and reconnect fixed electrical installations in hybrid/electric vehicles or machinery </li>
                          <li><strong>Union / Association Fees: </strong>Austraian Manufacturing Workers' Union (AMWU), Victorian Automtovie Chamber of Commerce (VACC), Motor Trades Association of Australia (MTAA), Institute of Automotive Mechanical Engineers (IAME), Australian Heavy Vehicle Repairers Association (AHVRA), Australian Refrigeration Mechanics Association (ARMA) </li>
                      </ul>
                  </div>
          `,
    nurse: `
                  <div>
                    <strong>Professional Fees, Association Fees, Professional Memberships & Union Fees</strong>
                        <ul>
                            <li><strong>Professional Fees:</strong> Tax Agent Fees, Accountant Fees</li>
                            <li><strong>Annual Practicing Certificate</strong> Issued by Nursing and Midwifery Board of Australia (NMBA)</li>
                            <li><strong>Union Fees:</strong> Australian Nursing and Midwifery Federation (ANMF), Nurses Professional Association of Australia (Red Union), New South Wales Nurses and Midwives Association (NSWMA), Queensland Nurses & Midwives Union (QNMU), Nurses' Professional Association of Australia (NPAA)</li>
                            <li><strong>Professional Membership Fees:</strong> Australian College of Nursing (ACN), Australian Primary Health Care Nurses Association (APNA), College of Emergency Nursing Australasia (CENA)</li>
                        </ul>
                  </div>
          `,
    police: `
                  <div>
                    <strong>Professional Fees, Association Fees, Professional Memberships & Union Fees</strong>
                        <ul>
                            <li><strong>Professional Fees:</strong> Tax Agent Fees, Accountant Fees</li>
                            <li><strong>Union / Association Fees:</strong> Police Association of Victoria, Police Association of New South Wales, Queensland Police Union, WA Police Union, Police Association of South Australia, Police Association of Tasmania, Northern Territory Police Association, and Australian Federal Police Association</li>
                            <li><strong>Professional Membership Fees</strong></li>
                        </ul>
                  </div>
          `,
  },

  /* ------------------------------
           PPE
        ------------------------------ */
  ppe: {
    general: `
            <div><strong>Protective Items:</strong> Face Masks, Sunscreen (must have AUST-L number), Hand Sanitizer, and Anti-Bacterial Spray</div>
          `,
  },

  /* ------------------------------
           SELF‑EDUCATION
        ------------------------------ */
  selfEducation: {
    general: `
            <div>
              <strong>Self‑Education</strong>
              <ul>
                <li><strong>General:</strong> Conferences, Seminars, Workshops and Training Courses fees</li>
                <li><strong>Depreciation:</strong> Laptops, Printers, Tablets, Computers, or Other Specialised Technical Instruments
                <li><strong>Equipment:</strong> Repairs to Equipment, USBs, and Hard Drives
                <li><strong>Other:</strong> Textbooks, Stationery, Student Union/Amenities Fees, Software, Subscriptions, Trade Journals, Intest on Loans to purchase Equipment, Internet and Telephone
                <li><strong>Travel:</strong> Motor Vehicle, Public Transport, Overnight Accommodation and Meal Expenses
                <li><strong>Work from home:</strong> Fixed Rate or Actual Expenses
              </ul>
            </div>
          `,
  },

  /* ------------------------------
           STATIONERY
        ------------------------------ */
  stationery: {
    general: `
            <div>
              <strong>Printing and Stationery</strong>
              <ul>
                <li><strong>Writing Instruments:</strong> Pens, Pencils, Markers, and Highlighters</li>
                <li><strong>Paper Products:</strong> Printer Paper, Notebooks, Sticky Notes, and Envelopes</li>
                <li><strong>Desk Accessories:</strong> Calculators, Paperclips, Staplers, and Desk Tidies</li>
                <li><strong>Organisational Items:</strong> Diaries, Planners, and Logbooks</li>
                <li><strong>Printing Consumables:</strong> Printer ink and Toner Cartridges</li>
              </ul>
            </div>
          `,
  },

  /* ------------------------------
           SUBSCRIPTIONS
        ------------------------------ */
  subscriptions: {
    general: `
            <div>
              <strong>Subscriptions</strong>
              <ul>
                <li><strong>Digital:</strong> Office 365, Adobe and Cloud Storage</li>
                <li><strong>Technical Journals:</strong> Relating to field of work</li>
                <li><strong>Reference Books:</strong> Relating to field of work</li>

              </ul>
            </div>
          `,
    archivist: `
            <div>
              <strong>Subscriptions</strong>
              <ul>
                <li><strong>Digital:</strong> Office 365, Adobe, Born Digital Forensics, File Processing & Ingest Software - Archivematica, DROID, and Siegfried, Email Processing Software - ePadd, Web Archiving - Archive-It and Cloud Storage</li>
                <li><strong>Technical Journals - Archivists:</strong> The American Archivist, Australian Society of Archivists, Archives and Records  Association</li>
                <li><strong>Technical Journals - Curators:</strong> Journal of Curatorial Studies, Curator: The Museum Journal</li>  
                <li><strong>Reference Books:</strong> Relating to field of work</li>

              </ul>
            </div>
          `,
    accountants: `
            <div>
              <strong>Subscriptions</strong>
              <ul>
                <li><strong>Digital:</strong> Adobe, Cloud Storage, Bookkeeping Software (for example Xero and MYOB), and Office 365</li>
                <li><strong>Technical Journals</strong></li>
                <li><strong>Reference Books</strong></li>

              </ul>
            </div>
          `,
    actuaries: `
            <div>
              <strong>Subscriptions</strong>
              <ul>
                <li><strong>Digital:</strong> Adobe, Cloud Storage, Statistical software like MATLAB, Mathematica, and Office 365</li>
                <li><strong>Technical Journals</strong></li>
                <li><strong>Reference Books</strong></li>

              </ul>
            </div>
          `,
    adult: `
            <div>
              <strong>Subscriptions</strong>
              <ul>
                <li><strong>Digital:</strong> Cloud Storage, Adobe, Office 365, Video Editing Software, Scheduling Tools, Canva, Shutterstock</li>
                <li><strong>Technical Journals</strong></li>
                <li><strong>Reference Books</strong></li>

              </ul>
            </div>
          `,
    advertising: `
            <div>
              <strong>Subscriptions</strong>
              <ul>
                <li><strong>Digital:</strong> Adobe, Adobe Creative Cloud, Cloud Storage, Canva, Shutterstock, Semrush, Hootsuite, Sprout Social, Asana, Monday.com, Function Point, WARC, Neilsen, and Office 365</li>
                <li><strong>Technical Journals</strong></li>
                <li><strong>Reference Books</strong></li>

              </ul>
            </div>
          `,
    it: `
              <div>
                  <strong>Subscriptions</strong>
                  <ul>
                  <li><strong>Digital:</strong> Adobe, Cloud Storage, Software Licences, Development Tools, and Office 365</li>
                  <li><strong>Technical Journals</strong></li>
                  <li><strong>Reference Books</strong></li>
                  </ul>
              </div>
              `,
  },

  /* ------------------------------
           TELEPHONE AND INTERNET
        ------------------------------ */
  communication: {
    general: `
            <div><strong>Telephone, Internet and Data:</strong> Limited to work use percentage</div>
          `,
  },

  /* ------------------------------
           TOOLS & EQUIPMENT
        ------------------------------ */
  tools: {
    general: `
                  <div>
                    <strong>Tools and Equipment</strong>
                    <ul>
                        <li><strong>General: </strong>Repairs</li>
                        <li><strong>Office Furniture: </strong>Desks, Standing Desks, Office Chairs, Bookcases, and Filing Cabinets</li>
                        <li><strong>Electronics: </strong> Computers, Laptops , Tablets, USBs, Hard Drives, Printers, Scanners, Monitors, Keyboards, and Mouse</li>
                    </ul>
                  </div>
          `,
    actor: `
                  <div>
                    <strong>Tools and Equipment</strong>
                    <ul>
                        <li><strong>General: </strong>Repairs</li>
                        <li><strong>Electronics:</strong> Computers, Laptops , Tablets, USBs, Hard Drives, Printers, Scanners, Monitors, Keyboards, and Mouse</li>
                        <li><strong>Equipment:</strong> Lighting, Audio, A ccessories, Sound System, Cameras, Televisions</li>
                        <li><strong>Office Furniture:</strong>Desks, Standing Desks, Office Chairs, Bookcases, and Filing Cabinets</li>
                    </ul>
                  </div>
          `,
    adf: `
                  <div>
                    <strong>Tools and Equipment</strong>
                    <ul>
                        <li><strong>General: </strong>Repairs to tools and equipment, Medkit, Cleaning Equipment</li>
                        <li><strong>Anciliary Equipment: </strong> Knives, Leatherman, Pouches, Multi Tool, Torch and Batteries, Headlamps, and Utility Belts</li>
                        <li><strong>Electronics: </strong> Computers, Laptops , Tablets, USBs, Hard Drives, Printers, Scanners, Monitors, Keyboards, and Mouse</li>
                        <li><strong>Equipment: </strong> Pack, Swag, Sleeping Bag, Webbing, Pouches, Bivvy Bag, Dive Bag, Hydration Pack</li>
                        <li><strong>Office Furniture: </strong>Desks, Standing Desks, Office Chairs, Bookcases, and Filing Cabinets</li>
                    </ul>
                  </div>
          `,
    adult: `
                  <div>
                    <strong>Tools and Equipment</strong>
                    <ul>
                        <li><strong>General: </strong>Repairs</li>
                        <li><strong>Electronics:</strong> Computers, Laptops , Tablets, USBs, Hard Drives, Printers, Scanners, Monitors, Keyboards, and Mouse</li>
                        <li><strong>Equipment:</strong> Lighting, Audio, A ccessories, Sound System, Cameras, Televisions</li>
                        <li><strong>Office Furniture:</strong>Desks, Standing Desks, Office Chairs, Bookcases, and Filing Cabinets</li>
                        <li><strong>Tools of Trade:</strong>Fetish Equipment, Adult Novelties</li>
                    </ul>
                  </div>
          `,
    ambulance: `
            <div>
              <strong>Tools and Equipment</strong>
              <ul>
                <li><strong>Electronics: </strong> Computers, Laptops , Tablets, Printers, Scanners, Monitors, Keyboards, and Mouse</li>
                <li><strong>General: </strong>Repairs, Stethoscope, USBs, Hard Drives, Specialised Gear Bag, and Pin Watches/Fob Watches</li>
                <li><strong>Office Furniture: </strong>Desks, Standing Desks, Office Chairs, Bookcases, and Filing Cabinets</li>
              </ul>
            </div>
          `,
    archivist: `
            <div>
              <strong>Tools and Equipment</strong>
              <ul>
                <li><strong>Electronics: </strong> Computers, Laptops , Tablets, Cameras, Printers, Scanners, Monitors, Keyboards, and Mouse</li>
                <li><strong>General: </strong>Repairs, USBs, Hard Drives, Magnifying Equipment, Conservation Brushes, Museum-grade HEPA Vacuum Cleaners, Bone Folders, Micro Spatulas, Weights and Custom Foam, Sandbag Supports, Digital hygrometers, Data Loggers, Dictaphones</li>
                <li><strong>Office Furniture: </strong>Desks, Standing Desks, Office Chairs, Bookcases, and Filing Cabinets</li>
              </ul>
            </div>
          `,
    forestry: `
                  <div>
                    <strong>Tools and Equipment</strong>
                    <ul>
                      <li><strong>Anciliary Equipment: </strong>Chainsaws, Soil Testing Kits, pH Meters, Ecological Monitoring Tools, All Terrain Vehicles (ATVs), Weed Spraying Equipment, Fencing Tools Horse riding equipment like saddles, bridles etc, Firearms, Ammunition</li>
                      <li><strong>Electronics: </strong> Computers, Laptops , Tablets, Printers, Scanners, Monitors, GPS, Keyboards, and Mouse</li>
                      <li><strong>General: </strong>Repairs, USBs, and Hard Drives</li>
                      <li><strong>Office Furniture: </strong>Desks, Standing Desks, Office Chairs, Bookcases, and Filing Cabinets</li>
                    </ul>
                  </div>
          `,

    mechanic: `
                  <div>
                    <strong>Tools and Equipment</strong>
                    <ul>
                      <li><strong>Anciliary Equipment: </strong>Organisational Items (Tool Chests & Roll Cabs, Lifting Equipment etc), Hand Tools (Ratchets & Sockets, Wrenches, Pliers & Cutters, Screwdrivers, Pry Bars & Hammers etc), Cordless Power Tools (Impact Wrenches, Cordless Ratchets, Impact Drivers etc), Diagnostic Equipment (OBD-II Scanners & Code Readers, Digital Multimeters, Automotive Stethoscopes), Specialty Tools (Torque Wrenches, Oil Filter Wrenches, Drain Pans, Spill-Free Coolant Funnels) </li>
                      <li><strong>Electronics: </strong> Computers, Laptops , Tablets, Printers, Scanners, Monitors, GPS, Keyboards, and Mouse</li>
                      <li><strong>General: </strong>Repairs, USBs, and Hard Drives</li>
                      <li><strong>Office Furniture: </strong>Desks, Standing Desks, Office Chairs, Bookcases, and Filing Cabinets</li>
                    </ul>
                  </div>
          `,

    nurse: `
            <div>
              <strong>Tools and Equipment</strong>
              <ul>
                <li><strong>Electronics: </strong> Computers, Laptops , Tablets, Printers, Scanners, Monitors, Keyboards, and Mouse</li>
                <li><strong>General: </strong>Repairs, Stethoscope, USBs, Hard Drives, and Fob Watch</li>
                <li><strong>Office Furniture: </strong>Desks, Standing Desks, Office Chairs, Bookcases, and Filing Cabinets</li>
              </ul>
            </div>
          `,

    police: `
            <div>
              <strong>Tools and Equipment</strong>
              <ul>
                <li><strong>Anciliary Equipment: </strong>Bullet Proof Vests and Body Armour, Knives, Leatherman, Gauntlets, Holsters, Ammunition, Handcuffs, Pouches, Multi Tool, Belt Cutter, Torch and Batteries, and Utility Belts</li>
                <li><strong>Electronics: </strong> Computers, Laptops , Tablets, Printers, Scanners, Monitors, GPS, Keyboards, and Mouse</li>
                <li><strong>General: </strong>Repairs, USBs, and Hard Drives</li>
                <li><strong>Office Furniture: </strong>Desks, Standing Desks, Office Chairs, Bookcases, and Filing Cabinets</li>
                <li><strong>Mounted Branch: </strong>Tall Riding Boots, Helmets, Riding Breeches / Tights, and Gloves</li>
                <li><strong>Search and Rescue: </strong>Headlamps, Hydration Packs, Hiking Boots, Work Gloves, and Wet Suits</li>
              </ul>
            </div>
          `,
  },

  /* ------------------------------
           TRAVEL
        ------------------------------ */
  travel: {
    general: `
            <div>
              <strong>Travel</strong>
              <ul>
                <li><strong>General: </strong>Tolls (bridge and road) and parking</li>
                <li><strong>Overnight Travel:	</strong>Meals, Accommodation, and Incidental expenses</li>
                <li><strong>Transport Expenses: </strong>Airfares, Buses, Car Hire, Ride Share, Taxis, and Trains</li>
              </ul>
            </div>
          `,
  },

  /* ------------------------------
           WORKING FROM HOME
        ------------------------------ */
  wfh: {
    general: `
            <div>
              <strong>Working from Home</strong>
              <ul>
                <li><strong>Fixed Rate:</strong> From 1 July 2022, a record of all hours worked at home must be kept, along with at least evidence of one expense the taxpayer incurred from working from home. Fixed rate includes: Utilities (gas and electricity), Telephone, Internet, Stationery, and Computer Consumables.</li>
                <li><strong>Actual Expenses:</strong>	Items that may be claimed: Utilities (gas and electricity), Telephone, Internet, Stationery, Computer Consumables.</li>
                <li><strong>Items both methods can claim:</strong> Depreciation on assets used for working from home (laptops, printers, devices, computers, chairs, desks, bookcases, etc) and cleaning a dedicated home office space.</li>
                <li><strong>Occupancy Expenses:</strong> Where an area of the home has the character of a 'place of business' - in addition to the actual expenses deductions may include: mortgage interest, rent, council and water rates, land taxes and house insurance premiums.</li>

              </ul>
            </div>
          `,
  },

  /* ------------------------------
           GENERAL
        ------------------------------ */
  general: {
    adf: `
              <div>
                  <strong>General</strong>
                  <ul>
                      <li><strong>Compulsory Mess Fees: </strong>Deductible for Senior NCOs and above</li>
                      <li><strong>Extra Regimental Duties (ERDs): </strong>Costs associated with coaching a sports team, organising social functions (not including food or drink), or holding a position on the Mess Committee.</li>
                      <li><strong>Fitness Expenses: </strong>Where the job requires a fitness level well above the ADF general standard, i.e. Special Forces, PTI"</li>
                      <li><strong>Language Courses: </strong>Where not provided by miltary school and is required for work</li>
                  </ul>
              </div>
              `,

    actor: `
              <div>
                  <strong>General</strong>
                  <ul>
                      <li><strong>Fees and Promotion: </strong>Agency Commissions, Platform Hosting Fees (for example, Only Fans), Website Setup, Industry Advertising</li>
                      <li><strong>Photos: </strong>Costs of maintaining photographic portfolio for publicity purposes</li>
                      <li><strong>Theatre Tickets: </strong> If the show has a content related to current work",
                  </ul>
              </div>
              `,
    adult: `
              <div>
                  <strong>General</strong>
                  <ul>
                      <li><strong>Consumables: </strong>Condoms, Lubricants, Gels, Oils, Tissues, and Wipes</li>
                      <li><strong>Fees and Promotion: </strong>Agency Commissions, Platform Hosting Fees (for example, Only Fans), Website Setup, Industry Advertising</li>
                      <li><strong>Other: </strong>Bedding, Sheets, Towels</li>
                      <li><strong>Photos: </strong>Costs of maintaining photographic portfolio for publicity purposes</li>
                      <li><strong>Rent: </strong>Rent of premises for working, Room Rental</li>
                      <li><strong>Self Education (specific): </strong>Dance Classes, Pole Dancing Techniques, Attending Industry Events (i.e. Sexpo)</li>
                  </ul>
              </div>
              `,
    police: `
              <div>
                  <strong>General</strong>
                  <ul>
                      <li><strong>Police Informant Fees: </strong>Payments made to informants including cash, food (light meals only), drinks (no alcohol), cigarettes etc, provided payments are authorised by the police service and not reimbursed</li>
                      <li><strong>Police Dogs: </strong>Costs include vet bills and food only to the extent that the employer did not pay for, nor reimburse these expenses</li>
                      <li><strong>Storage: </strong>Shelving or storage containers to store kit items</li>
                      <li><strong>Subscriptions, Licences & Memberships:</strong>Police Journal, Federal/State Police Pistol Club, Adobe, Office 365, Firearms Licence. Does not include standard driver's licence or the initial cost of obtaining licence/permit</li>
                  </ul>
              </div>
              `,

    nurse: `
              <div>
                  <strong>General</strong>
                  <ul>
                      <li><strong>Fees:</strong> Agency Commissions, Other Agency Fees </strong></li>
                      <li><strong>Medical Items:</strong> Stethoscope, Cuffs, Fob Watch, Batteries</li>
                  </ul>
              </div>
              `,
  },
};

/* ----------------------------------------------------
         DATA STRUCTURE (OCCUPATIONS ALIASES AND DEDUCTIONS)
      ---------------------------------------------------- */

const deductions = {
  "Accountant , Tax Agent, Bookkeeper": {
    aliases: [
      "221111",
      "221112",
      "922101",
      "512299",
      "Accounting Practice Manager",
      "Accountant – Bank",
      "Accountant – Carbon",
      "Accountant – Chartered",
      "Accountant – Commercial",
      "Accountant – Cost",
      "Accountant – General",
      "Accountant – Management",
      "Accountant – Product",
      "Assistant Accountant",
      "Bank Accountant",
      "Carbon Accountant",
      "Chartered Accountant",
      "Commercial Accountant",
      "Consultant – Tax Accountant",
      "Cost Accountant",
      "Management Accountant",
      "Product Accountant",
      "221113",
      "599516",
      "Tax Investigator",
      "Tax Consultant",
      "Tax Agent",
      "Bookkeeper",
      "551211",
      "External Auditor",
      "Insolvency Consultant",
      "Tax Agent or Consultant",
      "221213",
      "221111",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.office,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.professionalassociation.accountants,
      BLOCKS.selfEducation.general,
      BLOCKS.stationery.general,
      BLOCKS.subscriptions.accountants,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Actuaries, Mathematicians and Statisticians": {
    aliases: [
      "552314",
      "224111",
      "224112",
      "224116",
      "Actuarial Clerk",
      "Actuary",
      "Clerk – Actuarial",
      "Mathematician",
      "Statistical Clerk",
      "Statistician",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.office,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.professionalassociation.actuaries,
      BLOCKS.selfEducation.general,
      BLOCKS.stationery.general,
      BLOCKS.subscriptions.actuaries,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Actors, Dancers, Musicians and Entertainers": {
    aliases: [
      "Actor",
      "Entertainer",
      "Musician – Singer",
      "Opera Singer",
      "Singer",
      "211111",
      "211113",
      "211214",
      "211112",
      "211299",
      "211213",
      "211211",
      "Dancer",
      "Musician – Composer",
      "Musician - Conductor",
      "Musician - Instrumentalist",
      "Musician - Other Music Professional",
      "Musician - Singer",
      "Conductor - Music",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.actor,
      BLOCKS.Eyewear.actor,
      BLOCKS.firstAid.general,
      BLOCKS.actor,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.actor,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.adult,
      BLOCKS.communication.general,
      BLOCKS.tools.actor,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Advertising and Marketing": {
    aliases: [
      "225111",
      "561911",
      "922501",
      "225114",
      "225115",
      "212112",
      "131113",
      "225113",
      "131112",
      "Advertising Director",
      "Advertising Manager",
      "Advertising Specialist",
      "Art Director – Publishing or Advertising",
      "Business Development Officer – Marketing",
      "Classified Advertising Clerk",
      "Clerk – Classified Advertising",
      "Consultant – Marketing Specialist",
      "Content Creator (Marketing)",
      "Digital Marketing Analyst",
      "Director – Advertising",
      "Director – Art Director – Publishing or Advertising",
      "Manager – Advertising",
      "Manager – Sales and Marketing",
      "Marketing Manager",
      "Marketing Specialist",
      "Sales and Marketing Manager",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.office,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.professionalassociation.advertising,
      BLOCKS.selfEducation.general,
      BLOCKS.stationery.general,
      BLOCKS.subscriptions.advertising,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Adult Industry Workers": {
    aliases: [
      "451813",
      "211112",
      "Escort Service",
      "Sex Worker",
      "Stripper – Entertainment",
      "Adult Industry Workers",
      "Prostitute",
      "Only Fans",
      "Porn",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.adult,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.adult,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.adult,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.adult,
      BLOCKS.communication.general,
      BLOCKS.tools.adult,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Aged and Disabled Carers": {
    aliases: [
      "Aged Care Nurse",
      "Nurse – Aged Care",
      "Registered Nurse – Aged Care",
      "Aged Care Worker",
      "Aged Carer",
      "Aged or Disabled Carer",
      "Carer – Aged or Disabled",
      "Disabled or Aged Carer",
      "254412",
      "423111",
      "Personal Carer",
      "Respite Carer",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.nurse,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.nurse,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Agricultural and Forestry Scientists": {
    aliases: [
      "Foresterer - Scientist, Agricultural and Agritech Technician",
      "Agricultural Engineer",
      "Agricultural Field Officer",
      "Agricultural Labourer – Farm Machinery Operator",
      "Agricultural Research Scientist",
      "Apprentice – Agricultural Technician",
      "Apprentice – Forestry",
      "Ecologist – Forestry",
      "Engineer – Agricultural",
      "Forestry and Garden Workers NEC",
      "Forestry Ecologist",
      "Forestry Operations Supervisor",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.outdoor,
      BLOCKS.Animals.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.forestry,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.forestry,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Agricultural, Farming, Forestry, and Horticultural Operations": {
    aliases: [
      "Agricultural",
      "Apprentice – Farm or Garden Worker",
      "Beekeeping",
      "Aquaculture Farmer or Farm Overseer",
      "Beef Cattle Farm Worker",
      "Beef Cattle Farmer or Farm Overseer",
      "Broadacre Crop and Livestock Farm Worker",
      "Broadacre Crop and Livestock Farmer",
      "Cattle and Sheep Farm Worker",
      "Cotton Farm Worker",
      "Crop Farm Workers Nec",
      "Dairy Cattle Farm Worker",
      "Dairy Cattle Farmer or Farm Overseer",
      "Deer Farmer or Farm Overseer",
      "Farm Hand or Worker – Farm Machinery Operator",
      "Farm Machinery Operator",
      "Farmer or Farm Overseer – Aquaculture",
      "Farmer or Farm Overseer – Beef Cattle",
      "Farmer or Farm Overseer – Dairy Cattle",
      "Farmer or Farm Overseer – Deer",
      "Farmer or Farm Overseer – Dog Breeding",
      "Farmer or Farm Overseer – Goats",
      "Farmer or Farm Overseer – Marine",
      "Farmer or Farm Overseer – Other Livestock",
      "Farmer or Farm Overseer – Pigs",
      "Farmer or Farm Overseer – Poultry",
      "Farmer or Farm Overseer – Sheep",
      "Forest Ranger",
      "Fruit Farm Worker",
      "Goat Farmer or Farm Overseer",
      "Grain, Oilseed, Pulse and Pasture Farm Worker (Aust) or Field Farm Worker (NZ)",
      "Horticultural Crop Growers Nec",
      "Horticultural Nursery Assistant",
      "Horticultural Supervisor or Specialist",
      "Horticulturist – Nursery",
      "Livestock Farm Workers Nec",
      "Logging Assistant",
      "Marine Farmer or Farm Overseer",
      "Mixed Cattle and Sheep Farmer",
      "Mixed Production Farm Workers Nec",
      "Mixed Production Farmers Nec",
      "Nut Farm Worker",
      "Oyster Farmer or Farm Overseer",
      "Pastoral Labourer – Farm Machinery Operator",
      "Pig Farmer or Farm Overseer",
      "Piggery Farm Worker",
      "Poultry Farm Worker",
      "Poultry Farmer or Farm Overseer",
      "Seafood Farmer or Farm Overseer",
      "Senior Broadacre Crop and Livestock Farm Worker",
      "Senior Broadacre Crop Farm Worker",
      "Senior Cattle and Sheep Farm Worker",
      "Senior Dairy Cattle Farm Worker",
      "Senior Livestock Farm Workers Nec",
      "Senior Sheep Farm Worker",
      "Sheep Farm Worker",
      "Sheep Farmer or Farm Overseer",
      "Sugar Cane Farm Worker",
      "Trainee – Farm or Garden Worker",
      "Vegetable Farm Worker (Aust) or Market Garden Worker (NZ)",
      "Vegetable Grower (Aust) or Market Gardener (NZ)",
      "984101",
      "121111",
      "842311",
      "121312",
      "842411",
      "121711",
      "842312",
      "842211",
      "842299",
      "842313",
      "121313",
      "121314",
      "721111",
      "121399",
      "121315",
      "121318",
      "121321",
      "121322",
      "234113",
      "842212",
      "842214",
      "121699",
      "843311",
      "363114",
      "362411",
      "842399",
      "843112",
      "121323",
      "842499",
      "121799",
      "842216",
      "842315",
      "842316",
      "363115",
      "363116",
      "363212",
      "363213",
      "363299",
      "363215",
      "842317",
      "842217",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.outdoor,
      BLOCKS.Animals.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.forestry,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.forestry,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Australian Defence Force - Army, Navy and Air Force": {
    aliases: [
      "441212",
      "323212",
      "399911",
      "253111",
      "231212",
      "231214",
      "231212",
      "233911",
      "342314",
      "342312",
      "451711",
      "224411",
      "223311",
      "321211",
      "133611",
      "411411",
      "254499",
      "139211",
      "399999",
      "312999",
      "233211",
      "323113",
      "323112",
      "323111",
      "441111",
      "139111",
      "111212",
      "233411",
      "733112",
      "733115",
      "134299",
      "342413",
      "313112",
      "741111",
      "251511",
      "599411",
      "599599",
      "342414",
      "Clearance Diver (Navy)",
      "Medical Officer (Navy)",
      "Seaman Officer (Navy)",
      "Weapons Electrical Engineering Officer (Navy)",
      "Fitter Armament (Army)",
      "Fire Engineer (Army)",
      "Acoustic Warfare Analyst (Navy)",
      "Admiral (Navy)",
      "Aeronautical Engineer",
      "Aeronautical Engineering Officer (Navy)",
      "Aerospace Engineer Officer – Aeronautical (Air Force)",
      "Aerospace Engineer Officer – Armament (Air Force)",
      "Aerospace Engineer Officer – Electronics (Air Force)",
      "Air Chief Marshal (Air Force)",
      "Air Commodore (Air Force)",
      "Air Defence Officer (Air Force)",
      "Air Dispatcher (Army)",
      "Air Force – Aerospace Engineer Officer – Aeronautical",
      "Air Force – Aerospace Engineer Officer – Armament",
      "Air Force – Aerospace Engineer Officer – Electronics",
      "Air Force – Air Chief Marshal",
      "Air Force – Air Commodore",
      "Air Force – Air Defence Officer",
      "Air Force – Air Marshal",
      "Air Force – Air Surveillance Operator",
      "Air Force – Air Vice Marshal",
      "Air Force – Airborne Electronics Analyst",
      "Air Force – Aircraft Life Support Fitter",
      "Air Force – Aircraft Structural Fitter",
      "Air Force – Aircraft Systems Technician",
      "Air Force – Aircraft Technician",
      "Air Force – Airfield Defence Guard",
      "Air Force – Airfield Engineer Officer",
      "Air Force – Avionics Systems Technician",
      "Air Force – Avionics Technician",
      "Air Force – Commissioned Officer – Junior",
      "Air Force – Commissioned Officer – Senior",
      "Air Force – Communication Electronic Technician",
      "Air Force – Communications Information Systems Controller",
      "Air Force – Crew Attendant",
      "Air Force – Defence Intelligence Analyst",
      "Air Force – Education Officer",
      "Air Force – Geospatial Imagery Intelligence Analyst",
      "Air Force – Ground Defence Officer",
      "Air Force – Ground Support Equipment Fitter",
      "Air Force – Group Captain",
      "Air Force – Logistics Officer",
      "Air Force – Medical Assistant",
      "Air Force – Non-Commissioned Officer – Junior",
      "Air Force – Non-Commissioned Officer – Senior",
      "Air Force – Nursing Officer",
      "Air Force – Other Ranks",
      "Air Force – Security Police",
      "Air Force – Security Police Officer",
      "Air Force – Signal Operator Linguist",
      "Air Force – Signal Operator Technical",
      "Air Force – Wing Commander",
      "Air Force Junior Non-Commissioned Officer",
      "Air Force Senior Officer",
      "Air Marshal (Air Force)",
      "Air Surveillance Operator (Air Force)",
      "Air Vice Marshal (Air Force)",
      "Airborne Electronics Analyst (Air Force)",
      "Aircraft Draftsperson",
      "Aircraft Life Support Fitter (Air Force, Army)",
      "Aircraft Maintenance Engineer – Avionics",
      "Aircraft Maintenance Engineer – Mechanical",
      "Aircraft Maintenance Engineer – Structures",
      "Aircraft Refueller",
      "Aircraft Structural Fitter (Air Force, Army)",
      "Aircraft Systems Technician (Air Force)",
      "Aircraft Technician (Air Force, Army)",
      "Aircrewman (Navy)",
      "Airfield Defence Guard (Air Force)",
      "Airfield Engineer Officer (Air Force)",
      "Airline Steward",
      "Armoured Corps Officer (Army)",
      "Army – Air Dispatcher",
      "Army – Aircraft Life Support Fitter",
      "Army – Aircraft Structural Fitter",
      "Army – Aircraft Technician",
      "Army – Armoured Corps Officer",
      "Army – Artillery Officer",
      "Army – Avionics Technician",
      "Army – Brigadier",
      "Army – Colonel",
      "Army – Combat Engineer",
      "Army – Commando",
      "Army – Commissioned Officer – Junior",
      "Army – Commissioned Officer – Senior",
      "Army – Communications Engineer",
      "Army – Crewman Armoured Personnel Carrier M113",
      "Army – Crewman Australian Light Armoured Vehicle (Aslav)",
      "Army – Crewman Main Battle Tank",
      "Army – Defence Intelligence Analyst",
      "Army – Education Officer",
      "Army – Fitter Armament",
      "Army – General",
      "Army – General Service Officer",
      "Army – Ground Crewman Aircraft Support",
      "Army – Ground Crewman Mission Support",
      "Army – Gun Number",
      "Army – Infantry Officer",
      "Army – Lieutenant Colonel",
      "Army – Lieutenant General",
      "Army – Major General",
      "Army – Marine Specialist",
      "Army – Mechanic Recovery",
      "Army – Medical Assistant",
      "Army – Medical Corps Officer",
      "Army – Military Police Officer",
      "Army – Non-Commissioned Officer – Junior",
      "Army – Non-Commissioned Officer – Senior",
      "Army – Nursing Officer",
      "Army – Operator Artillery Meteorology and Surveyor",
      "Army – Operator Bearer Systems",
      "Army – Operator Command Support Systems",
      "Army – Operator Electronic Warfare",
      "Army – Operator Ground Based Air Defence",
      "Army – Operator Specialist Communications",
      "Army – Operator Supply",
      "Army – Operator Weapon Locating Radar",
      "Army – Ordnance Corps Officer",
      "Army – Other Ranks",
      "Army – Pharmaceutical Officer",
      "Army – Psychological Examiner",
      "Army – Rifleman",
      "Army – Special Services Officer",
      "Army – Technician Preventative Medicine",
      "Army – Technician Telecommunications Systems",
      "Army – Transport Corps Officer",
      "Army – Vehicle Mechanic",
      "Artillery Officer (Army)",
      "Attendant – Flight",
      "Aviation Technician Aircraft (Navy)",
      "Avionics Systems Technician (Air Force)",
      "Avionics Technician (Air Force, Army, Navy)",
      "Biomedical Engineering Technician or Associate",
      "Biomedical Technician",
      "Boatswain's Mate (Navy)",
      "Brigadier (Army)",
      "Cabin Crew",
      "Captain (Navy)",
      "Chemical Engineering Technician",
      "Civil Engineer",
      "Classer – Hide or Skin",
      "Clerk – Employment Office",
      "Clerk – Human Resources",
      "Clerk – Personnel Records",
      "Coffee Machine Technician",
      "Colonel (Army)",
      "Combat Engineer (Army)",
      "Combat Systems Operator (Navy)",
      "Combat Systems Operator Mine Warfare (Navy)",
      "Commander (Navy)",
      "Commando (Army)",
      "Commissioned Officer – Defence – Junior",
      "Commissioned Officer – Defence – Senior",
      "Commodore (Navy)",
      "Communication Electronic Technician (Air Force)",
      "Communications and Information Systems Controller (Air Force)",
      "Communications and Information Systems Sailor (Navy)",
      "Communications Engineer (Army)",
      "Communications Officer – Installation or Maintenance",
      "Communications Operator",
      "Computer Support or Help Desk",
      "Computing Professional – Customer Support or Help Desk",
      "Computing Professional – Help Desk Officer",
      "Corrosion Technician",
      "Crew Attendant (Air Force)",
      "Crewman Armoured Personnel Carrier M113 (Army)",
      "Crewman Australian Light Armoured Vehicle (Aslav) (Army)",
      "Crewman Main Battle Tank (Army)",
      "Defence Intelligence Analyst (Air Force, Army, Navy)",
      "Draftsperson – Aircraft, Shipbuilding or Mining",
      "Driver – Tow Truck",
      "Education Officer (Air Force, Army)",
      "Electronic Instrument Fitter or Technician",
      "Electronic Technician (Navy)",
      "Electronic Warfare – Linguist (Navy)",
      "Electronic Warfare – Technical (Navy)",
      "Electronics Engineer",
      "Employment Office Clerk",
      "Engineer – Aeronautical",
      "Engineer – Civil",
      "Engineer – Electronics",
      "Enrolled Nurse",
      "Fibre Composite Technician",
      "Flight Attendant or Steward",
      "Flight Nurse",
      "Fraud Investigator",
      "Garage Mechanic",
      "General (Army)",
      "General Service Officer (Army)",
      "Geospatial Imagery Intelligence Analyst (Air Force)",
      "Glass Blower",
      "Ground Crewman Mission Support (Army)",
      "Ground Defence Officer (Air Force)",
      "Ground Support Equipment Fitter (Air Force)",
      "Group Captain (Air Force)",
      "Gun Number (Army)",
      "Health and Welfare Service Manager – Other",
      "Hide or Skin Classer",
      "Hospital Pharmacist",
      "Human Resources Clerk",
      "Infantry Officer (Army)",
      "Infection Control Nurse",
      "Inspector – Other Regulatory",
      "Intelligence Officer",
      "Investigator – Fraud",
      "Investigator – Other Government",
      "IT Customer Support Officer",
      "IT Help Desk Officer",
      "Lieutenant Colonel (Army)",
      "Lieutenant General (Army)",
      "Lines Worker – Telecommunications",
      "Logistics Officer (Air Force)",
      "Maintenance Engineer – Aircraft – Avionics",
      "Maintenance Engineer – Aircraft – Mechanical",
      "Maintenance Engineer – Aircraft – Structures",
      "Major General (Army)",
      "Manager – Health and Welfare Service – Other",
      "Manager – Supply and Distribution",
      "Marine Specialist (Army)",
      "Mechanic – Garage",
      "Mechanic – General",
      "Mechanic – Petrol Motor",
      "Mechanic – Roadside",
      "Mechanic Recovery (Army)",
      "Medical Assistant (Air Force, Army, Navy)",
      "Medical Corps Officer (Army)",
      "Military Police Officer (Army)",
      "Mining Draftsperson",
      "Model Maker – Architectural",
      "Motor Mechanic",
      "Motor Mechanic – Petrol",
      "Naval Police Coxswain (Navy)",
      "Navy – Acoustic Warfare Analyst",
      "Navy – Admiral",
      "Navy – Aeronautical Engineering Officer",
      "Navy – Aircrewman",
      "Navy – Aviation Technician Aircraft",
      "Navy – Avionics Technician",
      "Navy – Boatswain's Mate",
      "Navy – Captain",
      "Navy – Combat Systems Operator",
      "Navy – Combat Systems Operator Mine Warfare",
      "Navy – Commander",
      "Navy – Commissioned Officer – Junior",
      "Navy – Commissioned Officer – Senior",
      "Navy – Commodore",
      "Navy – Communications Information Systems Sailor",
      "Navy – Defence Intelligence Analyst",
      "Navy – Electronic Technician",
      "Navy – Electronic Warfare – Linguist",
      "Navy – Electronic Warfare – Technical",
      "Navy – Medical Assistant",
      "Navy – Naval Police Coxswain",
      "Navy – Non–Commissioned Officer – Junior",
      "Navy – Non–Commissioned Officer – Senior",
      "Navy – Nursing Officer",
      "Navy – Observer",
      "Navy – Other Ranks",
      "Navy – Rear Admiral",
      "Navy – Stores Naval",
      "Navy – Supply Officer",
      "Navy – Training Systems Officer",
      "Navy – Vice Admiral",
      "Navy – Weapons Aeronautical Engineering Officer",
      "Navy Junior Non–Commissioned Officer",
      "Navy Senior Officer",
      "Non–Commissioned Officer – Captain",
      "Non–Commissioned Officer – Commander",
      "Non–Commissioned Officer – Commissioned Officer – Senior",
      "Non–Commissioned Officer – Commodore",
      "Non–Commissioned Officer – Defence – Junior",
      "Non–Commissioned Officer – Defence – Senior",
      "Non–Commissioned Officer – Rear Admiral",
      "Non–Commissioned Officer – Vice Admiral",
      "Nurse – Enrolled",
      "Nurse – Flight",
      "Nurse – General",
      "Nurse – Infection Control",
      "Nurse – Nurse Consultant – Clinical",
      "Nurse – Nursing Officer (Defence Forces)",
      "Nurse – Other",
      "Nurse – Remote or Rural Area",
      "Nurse – Student",
      "Nurse – Student Registered Nurse",
      "Nurse Consultant – Clinical",
      "Nursing Officer (Air Force, Army, Navy)",
      "Nursing Officer (Defence Forces)",
      "Observer (Navy)",
      "Operator Artillery Meteorology and Surveyor (Army)",
      "Operator Bearer Systems (Army)",
      "Mechanical Engineering Officer (Navy)",
      "Operator Command Support Systems (Army)",
      "Operator Electronic Warfare (Army)",
      "Operator Ground Based Air Defence (Army)",
      "Operator Specialist Communications (Army)",
      "Operator Supply (Army)",
      "Operator Weapon Locating Radar (Army)",
      "Ordnance Corps Officer (Army)",
      "Personnel Records Clerk",
      "Pharmaceutical Officer (Army)",
      "Pharmacist – Hospital",
      "Psychological Examiner (Army)",
      "RAAF – Other Ranks",
      "RAAF Junior Non–Commissioned Officer",
      "RAAF Junior Officer",
      "RAAF Officer – Senior Officer",
      "RAAF Senior Officer",
      "Rear Admiral (Navy)",
      "Registered Nurse",
      "Registered Nurse – General",
      "Registered Nurse – Other",
      "Remote or Rural Area Nurse",
      "Rifleman (Army)",
      "Roadside Mechanic",
      "Security Police (Air Force)",
      "Security Police Officer (Air Force)",
      "Shipbuilding Draftsperson",
      "Signal Operator Linguist (Air Force)",
      "Signal Operator Technical (Air Force)",
      "Ski Technician",
      "Special Service Officer (Army)",
      "Staff Development Officer",
      "Steward – Airline",
      "Storeman",
      "Storeperson",
      "Stores Naval (Navy)",
      "Student Enrolled Nurse",
      "Student Nurse",
      "Student Registered Nurse",
      "Supply and Distribution Manager",
      "Supply Officer (Navy)",
      "Technician – Biomedical",
      "Technician – Chemical Engineering",
      "Technician – Coffee Machine",
      "Technician – Corrosion",
      "Technician – Electronic Instrument",
      "Technician – Fibre Composite",
      "Technician – Other",
      "Technician – Preventative Medicine (Army)",
      "Technician – Ski",
      "Technician – Telecommunications",
      "Technician Telecommunications Systems (Army)",
      "Telecommunications Lines Worker",
      "Telecommunications Technician",
      "Telephone Technician",
      "Tow Truck Driver",
      "Training Officer",
      "Training Systems Officer (Navy)",
      "Transport Corps Officer (Army)",
      "Vehicle Mechanic (Army)",
      "Vice Admiral (Navy)",
      "Warehouse Assistant",
      "Weapons Aeronautical Engineering Officer (Navy)",
      "Wing Commander (Air Force)",
    ],
    items: [
      BLOCKS.bags.police,
      BLOCKS.clothing.adf,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.general.adf,
      BLOCKS.motorVehicles.police,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.adf,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Mechanics - Automotive, Airconditioning, Bicycle, Diesel, Electrical, Motor Cycle, Office Machine, Small Engine, and Textile":
    {
      aliases: [
        "Air Conditioning and Mechanical Services Plumber",
        "Air Conditioning Mechanic",
        "Apprentice – Airconditioning and Refrigeration Mechanic",
        "Apprentice – Automotive Mechanic",
        "Apprentice – Mechanic",
        "Bicycle Mechanic",
        "Electrical Mechanic",
        "Engineer – Mechanical",
        "Lift Mechanic",
        "Mechanic – Air Conditioning and Refrigeration",
        "Mechanic – Bicycle",
        "Mechanic – Diesel Motor",
        "Mechanic – Electrical",
        "Mechanic – Lift",
        "Mechanic – Mechanic's Assistant",
        "Mechanic – Motorcycle",
        "Mechanic – Office Machine Mechanic",
        "Mechanic – Small Engine",
        "Mechanic – Textile, Clothing and Footwear",
        "Mechanical Engineering Technician or Associate",
        "Mechanic's Assistant",
        "Motor Mechanic – Diesel",
        "Motorcycle Mechanic",
        "Navy – Mechanical Engineering Officer",
        "Office Machine Mechanic",
        "Optical Mechanic",
        "Plumber – Air Conditioning and Mechanical Services",
        "Refrigeration Mechanic",
        "Small Engine Mechanic",
        "Technician – Mechanical Engineering",
        "Textile, Clothing and Footwear Mechanic",
        "Trainee – Airconditioning and Refrigeration Mechanic",
        "Trainee – Automotive Mechanic",
        "Trainee – Mechanical Trades Engineer",
        "Electrician - Automotive",
        "321111",
        "Electrician - Automotive",
        "321111",
        "334112",
        "342111",
        "934201",
        "932102",
        "899911",
        "341111",
        "233512",
        "341113",
        "321212",
        "899916",
        "321213",
        "342311",
        "321214",
        "323215",
        "312512",
        "231212",
        "399914",
        "932301",
      ],
      items: [
        BLOCKS.bags.general,
        BLOCKS.clothing.outdoor,
        BLOCKS.Eyewear.general,
        BLOCKS.firstAid.general,
        BLOCKS.motorVehicles.general,
        BLOCKS.overtimeMeals.general,
        BLOCKS.stationery.general,
        BLOCKS.ppe.general,
        BLOCKS.professionalassociation.mechanic,
        BLOCKS.selfEducation.general,
        BLOCKS.subscriptions.general,
        BLOCKS.communication.general,
        BLOCKS.tools.mechanic,
        BLOCKS.travel.general,
        BLOCKS.wfh.general,
      ],
    },

  Nurse: {
    aliases: [
      "Nursing Supervisor or Manager",
      "254311",
      "Enrolled Nurse",
      "Flight Nurse",
      "Infection Control Nurse",
      "Nurse – Enrolled",
      "Nurse – Flight",
      "Nurse – General",
      "Nurse – Infection Control",
      "Nurse – Nurse Consultant – Clinical",
      "Nurse – Nursing Officer (Defence Forces)",
      "Nurse – Other",
      "Nurse – Remote or Rural Area",
      "Nurse – Student",
      "Nurse – Student Registered Nurse",
      "Nurse Consultant – Clinical",
      "Registered Nurse",
      "Registered Nurse – General",
      "Registered Nurse – Other",
      "Remote or Rural Area Nurse",
      "Student Enrolled Nurse",
      "Student Nurse",
      "Student Registered Nurse",
      "Acute Care Nurse",
      "Aged Care Nurse",
      "Anaesthetic Nurse",
      "Animal Nurse",
      "Apprentice – Nurseryperson",
      "Assistant Nurse",
      "Charge Nurse",
      "Child and Adolescence Mental Health Nurse",
      "Child and Family Health Nurse",
      "Clinical Nurse Educator",
      "Community Health Nurse",
      "Consultant – Clinical Nurse",
      "Critical Care and Emergency Nurse",
      "Developmental Disability Nurse",
      "Disability and Rehabilitation Nurse",
      "Drug and Alcohol Nurse",
      "Emergency/Trauma Nurse",
      "Gerontology Nurse",
      "Health Education and Promotion Nurse",
      "High Dependency Nurse",
      "Manager – Nurse – Senior",
      "Manager – Nurse (Including Unit) or Supervisor",
      "Medical Nurse",
      "Medical Practice Nurse",
      "Mental Health Nurse",
      "Mothercraft Nurse",
      "Neonatal Intensive Care Nurse",
      "Nurse – Acute Care",
      "Nurse – Aged Care",
      "Nurse – Anaesthetic",
      "Nurse – Animal",
      "Nurse – Assistant In Nursing",
      "Nurse – Charge",
      "Nurse – Child and Adolescence Mental Health",
      "Nurse – Child and Family Health",
      "Nurse – Community Health",
      "Nurse – Critical Care and Emergency",
      "Nurse – Developmental Disability",
      "Nurse – Disability and Rehabilitation",
      "Nurse – Drug and Alcohol",
      "Nurse – Emergency/Trauma",
      "Nurse – Gerontology",
      "Nurse – Health Education and Promotion",
      "Nurse – High Dependency",
      "Nurse – Medical",
      "Nurse – Medical Practice",
      "Nurse – Mental Health",
      "Nurse – Midwifery",
      "Nurse – Mothercraft",
      "Nurse – Neonatal Intensive Care",
      "Nurse – Nurse Educator (Including Clinical)",
      "Nurse – Nurse Manager – Senior",
      "Nurse – Nurse Manager (Including Unit) or Supervisor",
      "Nurse – Nursing Assistant or Aide",
      "Nurse – Nursing Director (Including Assistant, Deputy, Executive and Clinical)",
      "Nurse – Operating Room",
      "Nurse – Paediatric Intensive Care",
      "Nurse – Paediatrics",
      "Nurse – Perioperative",
      "Nurse – Practice (Medical)",
      "Nurse – Psychiatric",
      "Nurse – Psychogeriatric Care",
      "Nurse – Public Health",
      "Nurse – Recovery",
      "Nurse – Rehabilitation",
      "Nurse – Research",
      "Nurse – School",
      "Nurse – Staff Development",
      "Nurse – Surgical",
      "Nurse Educator (Including Clinical)",
      "Nurse Practitioner",
      "Operating Room Nurse",
      "Paediatric Intensive Care Nurse",
      "Paediatrics Nurse",
      "Perioperative Nurse",
      "Practice (Medical) Nurse",
      "Psychiatric Nurse",
      "Psychogeriatric Care Nurse",
      "Public Health Nurse",
      "Recovery Nurse",
      "Registered Nurse – Aged Care",
      "Registered Nurse – Child and Family Health",
      "Registered Nurse – Community Health",
      "Registered Nurse – Critical Care and Emergency",
      "Registered Nurse – Developmental Disability",
      "Registered Nurse – Disability and Rehabilitation",
      "Registered Nurse – Medical",
      "Registered Nurse – Medical Practice",
      "Registered Nurse – Mental Health",
      "Registered Nurse – Midwifery",
      "Registered Nurse – Perioperative",
      "Registered Nurse – Psychiatric",
      "Registered Nurse – Surgical",
      "Research Nurse",
      "School Nurse",
      "411411",
      "254499",
      "254415",
      "254412",
      "254423",
      "361311",
      "936204",
      "936104",
      "423312",
      "254311",
      "254422",
      "254413",
      "254211",
      "254414",
      "925401",
      "423211",
      "254416",
      "254417",
      "134212",
      "254418",
      "254421",
      "411412",
      "254111",
      "254425",
      "254212",
      "254424",
      "254411",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.nurse,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.nurse,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Police Officer / Detective": {
    aliases: [
      "441211",
      "Emergency Service Worker",
      "441312",
      "441311",
      "139113",
      "441312",
      "Commissioned Officer – Police",
      "Detective – Police",
      "Inspector – Police",
      "Investigator – Police",
      "Officer – Police",
      "Plain Clothes Police Officer",
      "Police Detective",
      "Police Inspector",
      "Police Officer – Commissioned",
      "Police Officer",
      "Emergency Services Worker",
      ",441211",
    ],
    items: [
      BLOCKS.bags.police,
      BLOCKS.clothing.police,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.fitness.police,
      BLOCKS.general.police,
      BLOCKS.motorVehicles.police,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.police,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.police,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Administrative and Clerical": {
    aliases: [
      "132211",
      "134211",
      "134412",
      "139911",
      "139915",
      "224214",
      "511111",
      "511112",
      "512111",
      "521211",
      "521212",
      "531111",
      "542114",
      "552313",
      "599916",
      "953001",
      "955201",
      "Admin Officer",
      "Administration",
      "Administration Clerk",
      "Administrative Officer",
      "Administrator – Arts",
      "Administrator – Contract",
      "Administrator – Facilities",
      "Administrator – Financial",
      "Administrator – Funds",
      "Administrator – Medical",
      "Administrator – Office",
      "Administrator – Program",
      "Administrator – Project",
      "Administrator – Records",
      "Administrator – School",
      "Administrator – Sports",
      "Apprentice – Clerical Services",
      "Clerical",
      "Clerical Assistant",
      "Clerical Officer",
      "Consultant – Insurance (Clerical)",
      "Contract Administrator",
      "Facilities Administrator",
      "Legal Secretary",
      "Medical Secretary",
      "Office Administrator",
      "Records Administrator",
      "School Administrator",
      "Secretary",
      "Secretary – Legal",
      "Secretary – Medical",
      "Secretary – Office",
      "Sports Administrator",
      "Trainee – Clerical Services",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.office,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.office,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Ambulance Officer": {
    aliases: [
      "Paramedic",
      "Ambulance Officer",
      "Ambo",
      "411111",
      "Emergency Services Worker",
      "441211",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.fitness.ambulance,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.ambulance,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.ambulance,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Archivist, Curators and Records Managers": {
    aliases: [
      "Archivist",
      "Curator – Gallery or Museum",
      "Gallery Curator",
      "Museum Curator",
      "224211",
      "224212",
      "224212",
      "224212",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.archivist,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.archivist,
      BLOCKS.communication.general,
      BLOCKS.tools.archivist,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  // 👉 Occupations to be customised
  Cleaners: {
    aliases: [
      "811211",
      "811311",
      "811611",
      "Window Cleaner",
      "811612",
      "811699",
      "Carpet Cleaner",
      "Cleaner – Carpet",
      "Cleaner – Commercial",
      "Cleaner – Domestic",
      "Cleaner – High Pressure",
      "Cleaner – Hotel or Motel",
      "Cleaner – Office or School",
      "Cleaner – Other",
      "Cleaner – Window",
      "High Pressure Cleaner",
      "Office Cleaner",
      "School Cleaner",
      "Window Cleaner",
      "Cleaner – Office or School",
      "High Pressure Cleaner",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Construction Managers and Supervisors": {
    aliases: [
      "Builder – Construction Project Manager",
      "Building and Construction Manager",
      "Consultant – Construction Manager",
      "Manager – Building and Construction",
      "Building Construction Supervisor",
      "Construction Project Manager",
      "133111",
      "312112",
      "913301",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Construction Workers": {
    aliases: [
      "312114",
      "331111",
      "331112",
      "331211",
      "333211",
      "333212",
      "333411",
      "334113",
      "334114",
      "334115",
      "712111",
      "821111",
      "821112",
      "821113",
      "821114",
      "821211",
      "821311",
      "821411",
      "821511",
      "821611",
      "821711",
      "821712",
      "821713",
      "821714",
      "821915",
      "Building Construction Labourer",
      "Construction Estimator",
      "Construction Worker – Bricklayer",
      "Construction Worker – Builder's Labourer",
      "Construction Worker – Building Insulation Installer",
      "Construction Worker – Carpenter and Joiner",
      "Construction Worker – Cement Renderer",
      "Construction Worker – Concrete Plasterer",
      "Construction Worker – Concreter",
      "Construction Worker – Construction Rigger",
      "Construction Worker – Crane Operator",
      "Construction Worker – Digging",
      "Construction Worker – Drainage, Sewerage and Stormwater Labourer",
      "Construction Worker – Drainer",
      "Construction Worker – Earthmoving Labourer",
      "Construction Worker – Fencer",
      "Construction Worker – Gasfitter",
      "Construction Worker – General Assistant",
      "Construction Worker – Hoist Operator",
      "Construction Worker – Lift Operator",
      "Construction Worker – Paving and Surfacing Labourer",
      "Construction Worker – Plasterer",
      "Construction Worker – Plumber's Assistant",
      "Construction Worker – Railway Track",
      "Construction Worker – Road Maintenance",
      "Construction Worker – Roof Plumber",
      "Construction Worker – Scaffolder",
      "Construction Worker – Steel Fixer",
      "Construction Worker – Stonemason",
      "Construction Worker – Structural Steel Erector",
      "Construction Worker – Surveyor's Assistant",
      "Construction Worker – Tiler",
      "Labourer – Construction Rigger",
      "Rigger – Construction",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Dentist, Dental Nurse, Dental Technician and Dental Hygienist": {
    aliases: [
      "Dentist",
      "Dental Nurse",
      "Nurse – Dental",
      "Dental Assistant",
      "Dental Hygienist",
      "Dental Mechanic or Technician",
      "Dental Prosthetist",
      "Dental Specialist",
      "Dental Technician",
      "Dental Therapist",
      "Technician – Dental",
      "Therapist – Dental",
      "252312",
      "423211",
      "411211",
      "411213",
      "411212",
      "252311",
      "411214",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Doctor, Surgeon, Medical Practitioner and Specialists": {
    aliases: [
      "Gynaecologist",
      "253913",
      "Gastroenterologist",
      "253316",
      "General Practitioner",
      "253111",
      "Medical Officer – Resident",
      "253112",
      "Medical Oncologist	253314",
      "Medical Practitioner – Medical Practitioner – Other",
      "253999",
      "Medical Practitioner – Resident Medical Officer",
      "253112",
      "Neurologist",
      "253318",
      "Neurosurgeon",
      "253513",
      "Obstertrician",
      "253913",
      "Opthalmologist",
      "253914",
      "Orthopaedic Surgeon",
      "253514",
      "Paediatrician",
      "253321",
      "Paediatric Surgeon",
      "253516",
      "Surgeon – Cardiothoracic",
      "Surgeon – General",
      "Surgeon – Neurosurgeon",
      "Surgeon – Orthopaedic",
      "Surgeon – Otorhinolaryngologist",
      "Surgeon – Paediatric",
      "Surgeon – Plastic and Reconstructive",
      "Surgeon – Urologist",
      "Surgeon – Vascular",
      "253512",
      "253511",
      "253513",
      "253514",
      "253515",
      "253516",
      "253517",
      "253518",
      "253521",
      "Cardiothoracic Surgeon",
      "253512",
      "Cardiologist",
      "253312",
      "Sleep Medicine Physician",
      "Nuclear Medicine Physician",
      "Rehabilitation Medicine Physician",
      "Public Health Physician",
      "253999",
      "Medical Practitioner – Public Health Physician",
      "Thoracic Medicine Specialist",
      "Specialist Physician – General Medicine",
      "Renal Medicine Specialist",
      "Medical Specialist – Vascular Surgeon",
      "Medical Specialist – Urologist",
      "Medical Specialist – Thoracic Medicine Specialist",
      "Medical Specialist – Surgeon (General)",
      "Medical Specialist – Specialist Physician (General Medicine)",
      "Medical Specialist – Specialist Physician – Other",
      "Medical Specialist – Rheumatologist",
      "Medical Specialist – Renal Medicine Specialist",
      "Medical Specialist – Radiation Oncologist",
      "Medical Specialist – Psychiatrist",
      "Medical Specialist – Plastic and Reconstructive Surgeon",
      "Medical Specialist – Pathologist",
      "Medical Specialist – Paediatrician",
      "Medical Specialist – Paediatric Surgeon",
      "Medical Specialist – Otorhinolaryngologist",
      "Medical Specialist – Orthopaedic Specialist",
      "Medical Specialist – Ophthalmologist",
      "Medical Specialist – Obstetrician",
      "Medical Specialist – Neurosurgeon",
      "Medical Specialist – Neurologist",
      "Medical Specialist – Medical Oncologist",
      "Medical Specialist – Intensive Care Specialist",
      "Medical Specialist – Gynaecologist",
      "Medical Specialist – Gastroenterologist",
      "Medical Specialist – Endocrinologist",
      "Medical Specialist – Emergency Medicine Specialist",
      "Medical Specialist – Diagnostic and Interventional Radiologist",
      "Medical Specialist – Dermatologist",
      "Medical Specialist – Clinical Haematologist",
      "Medical Specialist – Cardiothoracic Surgeon",
      "Medical Specialist – Cardiologist",
      "Medical Specialist – Anaesthetist",
      "Medical Practitioner – Specialist – Vascular Surgeon",
      "Medical Practitioner – Specialist – Sleep Medicine Physician",
      "Medical Practitioner – Specialist – Rehabilitation Medicine Physician",
      "Medical Practitioner – Specialist – Nuclear Medicine Physician",
      "Medical Practitioner – Specialist – Anaesthetist",
      "Intensive Care Specialist",
      "Emergency Medicine Specialist",
      "Doctor – Specialist – Vascular Surgeon",
      "Doctor – Specialist – Urologist",
      "Doctor – Specialist – Thoracic Medicine Specialist",
      "Doctor – Specialist – Surgeon (General)",
      "Doctor – Specialist – Specialist Physician (General Medicine)",
      "Doctor – Specialist – Specialist Physician – Other",
      "Doctor – Specialist – Rheumatologist",
      "Doctor – Specialist – Renal Medicine Specialist",
      "Doctor – Specialist – Radiation Oncologist",
      "Doctor – Specialist – Psychiatrist",
      "Doctor – Specialist – Plastic and Reconstructive Surgeon",
      "Doctor – Specialist – Pathologist",
      "Doctor – Specialist – Paediatrician",
      "Doctor – Specialist – Paediatric Surgeon",
      "Doctor – Specialist – Otorhinolaryngologist",
      "Doctor – Specialist – Orthopaedic Specialist",
      "Doctor – Specialist – Ophthalmologist",
      "Doctor – Specialist – Obstetrician",
      "Doctor – Specialist – Neurosurgeon",
      "Doctor – Specialist – Neurologist",
      "Doctor – Specialist – Medical Oncologist",
      "Doctor – Specialist – Intensive Care Specialist",
      "Doctor – Specialist – Gynaecologist",
      "Doctor – Specialist – Gastroenterologist",
      "Doctor – Specialist – Endocrinologist",
      "Doctor – Specialist – Emergency Medicine Specialist",
      "Doctor – Specialist – Diagnostic and Interventional Radiologist",
      "Doctor – Specialist – Dermatologist",
      "Doctor – Specialist – Clinical Haematologist",
      "Doctor – Specialist – Cardiothoracic Surgeon",
      "Doctor – Specialist – Cardiologist",
      "Doctor – Specialist – Anaesthetist",
      "Doctor – Resident Medical Officer",
      "Doctor – Public Health Physician",
      "Doctor – Medical Practitioner – Other",
      "Doctor",
      "253999",
      "253918",
      "253917",
      "253915",
      "253914",
      "253913",
      "253912",
      "253911",
      "253521",
      "253518",
      "253517",
      "253516",
      "253515",
      "253514",
      "253513",
      "253512",
      "253511",
      "253411",
      "253399",
      "253324",
      "253323",
      "253322",
      "253321",
      "253318",
      "253317",
      "253316",
      "253315",
      "253314",
      "253313",
      "253312",
      "253311",
      "253211",
      "253112",
      "253111",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  Drycleaner: {
    aliases: ["Cleaner – Drycleaner", "Drycleaner", "811512"],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Finance Manager, Finance Officers, and Finance Brokers": {
    aliases: [
      "222112",
      "551111",
      "132211",
      "Broker – Finance",
      "Finance Broker",
      "Finance Manager",
      "Finance Officer",
      "Manager – Finance",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Firefighter, Brigade Officer, Fire Investigator and Locomtive Fireperson": {
    aliases: [
      "Emergency Services Worker",
      ",441211",
      "139112",
      "441212",
      "731311",
      "Commissioned Officer – Fire",
      "Fire Brigade Officer",
      "Fire Fighter",
      "Fire Investigator",
      "Fire Officer – Commissioned",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Hospitality Workers, Cleaners, Housekeepers and Luggage Porters": {
    aliases: [
      "Hospitality Employee – Cleaner",
      "Hospitality Employee – Housekeeper",
      "Hospitality Employee – Luggage Porter",
      "Housekeeper – Commercial",
      "Housekeeper – Domestic",
      "811211",
      "811411",
      "431912",
      "811412",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Hospitality Workers, Waitors, Baristas, Bartendenders, Fast Food Cooks, Cooks, and Food & Beverage Steward":
    {
      aliases: [
        "Barista",
        "Barman",
        "Bartender",
        "431112",
        "Bar Person",
        "Bar Useful or Busser",
        "431911",
        "431111",
        "Bar Attendant",
        "Apprentice – Hospitality",
        "Hospitality Employee – Bar Useful or Busser",
        "Hospitality Employee – Barista",
        "Hospitality Employee – Bartender",
        "Hospitality Employee – Cafe, Cafeteria or Canteen Worker",
        "Hospitality Employee – Casino Host",
        "Hospitality Employee – Cook",
        "Hospitality Employee – Door Attendant",
        "Hospitality Employee – Drink Waiter",
        "Hospitality Employee – Fast Food Cook",
        "Hospitality Employee – Host – Dining Room",
        "Hospitality Employee – Kitchenhand",
        "Hospitality Employee – Other",
        "Hospitality Employee – Snack Bar Assistant",
        "Hospitality Employee – Steward – Food and Beverage",
        "Hospitality Employee – Waiter",
        "Trainee – Hospitality",
        "943101",
        "431911",
        "431112",
        "431111",
        "431999",
        "431211",
        "351411",
        "431912",
        "851311",
        "851111",
        "431511",
      ],
      items: [
        BLOCKS.bags.general,
        BLOCKS.clothing.general,
        BLOCKS.Eyewear.general,
        BLOCKS.firstAid.general,
        BLOCKS.motorVehicles.general,
        BLOCKS.overtimeMeals.general,
        BLOCKS.stationery.general,
        BLOCKS.ppe.general,
        BLOCKS.professionalassociation.general,
        BLOCKS.selfEducation.general,
        BLOCKS.subscriptions.general,
        BLOCKS.communication.general,
        BLOCKS.tools.general,
        BLOCKS.travel.general,
        BLOCKS.wfh.general,
      ],
    },
  "Hotel and Motel Workers": {
    aliases: [
      "Baggage Handler – Hotel or Motel",
      "Cellar Hand – Hotel",
      "Concierge – Hotel",
      "Hotel Cellar Hand",
      "Hotel Manager",
      "Hotel Receptionist",
      "Hotel Service Manager",
      "Manager – Hotel",
      "Manager – Hotel Service",
      "Motel Receptionist",
      "Receptionist – Hotel or Motel",
      "431912",
      "431999",
      "431411",
      "542113",
      "141311",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Insurance Agent, Insurance Broker, Insurance Salesperson": {
    aliases: [
      "Agent – Insurance",
      "Broker – Insurance",
      "Claims Consultant – Insurance",
      "Clerk – Insurance",
      "Company Rep. – Insurance",
      "Insurance Agent or Salesperson",
      "Insurance Broker",
      "Insurance Consultant or Clerk",
      "Retail Assistant – Insurance",
      "Sales Assistant – Insurance",
      "Salesperson – Insurance",
      "611211",
      "222113",
      "552312",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Insurance Claims Investigator, Insurance Loss Adjuster & Insurance Risk Surveyor":
    {
      aliases: [
        "Consultant – Insurance Claims Investigator",
        "Insurance Assessor",
        "Insurance Investigator",
        "Insurance Loss Adjuster",
        "Insurance Risk Surveyor",
        "Investigator – Insurance",
        "959902",
        "552312",
        "599611",
        "599612",
        "599613",
      ],
      items: [
        BLOCKS.bags.general,
        BLOCKS.clothing.general,
        BLOCKS.Eyewear.general,
        BLOCKS.firstAid.general,
        BLOCKS.motorVehicles.general,
        BLOCKS.overtimeMeals.general,
        BLOCKS.stationery.general,
        BLOCKS.ppe.general,
        BLOCKS.professionalassociation.general,
        BLOCKS.selfEducation.general,
        BLOCKS.subscriptions.general,
        BLOCKS.communication.general,
        BLOCKS.tools.general,
        BLOCKS.travel.general,
        BLOCKS.wfh.general,
      ],
    },
  "Investment & Financial Advisors and Managers": {
    aliases: [
      "132211",
      "149914",
      "221111",
      "221212",
      "222199",
      "222299",
      "222311",
      "222312",
      "922201",
      "955001",
      "Analyst – Financial",
      "Analyst – Financial Risk",
      "Apprentice – Financial Services",
      "Branch Manager – Financial Institution",
      "Consultant – Financial Investment",
      "Financial Administrator",
      "Financial Adviser",
      "Financial Analyst",
      "Financial Controller",
      "Financial Institution Branch Manager",
      "Financial Investment Manager",
      "Financial Planner",
      "Financial Risk Analyst",
      "Financial Risk Manager",
      "Manager – Financial Administration",
      "Manager – Financial Institution Branch",
      "Manager – Financial Investment",
      "Manager – Financial Risk",
      "Planner – Financial",
      "Trainee – Financial Services",
      "Broker – Investment",
      "Investment Broker",
      "Investment Dealer",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Manager: {
    aliases: [
      "512111",
      "142115",
      "512111",
      "142115",
      "Manager – Office",
      "Manager – Post Office",
      "Office Manager",
      "Post Office Manager",
      "139911",
      "141211",
      "141411",
      "141999",
      "142113",
      "149111",
      "149212",
      "149912",
      "149915",
      "212316",
      "212318",
      "224213",
      "551111",
      "111211",
      "121111",
      "131112",
      "131114",
      "132111",
      "132311",
      "133411",
      "133512",
      "133513",
      "133612",
      "134213",
      "134214",
      "134412",
      "135112",
      "135199",
      "139912",
      "139913",
      "139916",
      "139917",
      "139999",
      "141111",
      "141311",
      "141912",
      "142111",
      "142114",
      "149112",
      "149113",
      "149211",
      "149311",
      "149411",
      "149412",
      "149413",
      "149913",
      "149914",
      "149999",
      "224999",
      "225211",
      "225212",
      "231299",
      "232214",
      "251911",
      "361112",
      "362312",
      "399599",
      "431111",
      "511112",
      "611399",
      "612112",
      "612113",
      "621511",
      "Account Manager",
      "Accounts Manager",
      "Amusement Centre Manager",
      "Arts Manager",
      "Bank Manager",
      "Bar Manager",
      "Beauty Salon Manager",
      "Betting Agency Manager",
      "Cafe Manager",
      "Call Centre Manager",
      "Canteen Manager",
      "Caravan Park Manager",
      "Cinema Manager",
      "Client Service Manager",
      "Club Manager – Licensed Club",
      "Contact Centre Manager",
      "Customer Service Manager",
      "Engineer – Engineering Manager",
      "Engineering Manager",
      "Environmental Manager",
      "Equipment Hire Manager",
      "Event Manager",
      "Facilities Manager",
      "Factory Manager",
      "Fast Food Manager",
      "Hair Salon Manager",
      "Health Information Manager",
      "Hostel Manager",
      "Lodge Manager",
      "Manager – Amusement Centre",
      "Manager – Arts",
      "Manager – Bank",
      "Manager – Bar",
      "Manager – Betting Agency",
      "Manager – Cafe, Restaurant or Canteen",
      "Manager – Call Centre",
      "Manager – Caravan Park",
      "Manager – Cinema or Theatre",
      "Manager – Contact Centre",
      "Manager – Corporate General",
      "Manager – Corporate Services",
      "Manager – Customer Service",
      "Manager – Data Processing",
      "Manager – Engineering",
      "Manager – Environmental",
      "Manager – Equipment Hire",
      "Manager – Event",
      "Manager – Facilities",
      "Manager – Factory",
      "Manager – Fast Food",
      "Manager – Fish Hatchery",
      "Manager – Fitness Centre",
      "Manager – Fleet",
      "Manager – General",
      "Manager – Geographic Information Systems",
      "Manager – Grocery – Supermarket",
      "Manager – Hair or Beauty Salon",
      "Manager – Health Information",
      "Manager – Health Promotion",
      "Manager – Hostel",
      "Manager – Human Resources",
      "Manager – IT – Other",
      "Manager – IT Account",
      "Manager – IT Business Development",
      "Manager – IT Project",
      "Manager – IT Service Delivery",
      "Manager – Key Account",
      "Manager – Knowledge",
      "Manager – Laboratory",
      "Manager – Licensed Club",
      "Manager – Lodge",
      "Manager – Manufacturing Company",
      "Manager – Marina",
      "Manager – Marine Certification and Surveillance",
      "Manager – Mining Production",
      "Manager – Motel",
      "Manager – Nursing Agency",
      "Manager – Personnel and Industrial Relations",
      "Manager – Primary Health Organisation",
      "Manager – Procurement",
      "Manager – Public Relations",
      "Manager – Railway Station",
      "Manager – Real Estate Agency",
      "Manager – Real Estate Property",
      "Manager – Regional Education",
      "Manager – Research and Development",
      "Manager – Retirement Village",
      "Manager – School Administration",
      "Manager – Security (Non–IT)",
      "Manager – Sports Centre",
      "Manager – Stable",
      "Manager – Stage",
      "Manager – Transport Company",
      "Manager – Video Production",
      "Manager – Weight Loss Centre",
      "Manager – Welfare Centre",
      "Manufacturing Company Manager",
      "Marina Manager",
      "Mining Production Manager",
      "Motel Manager",
      "Nursing Agency Manager",
      "Performing Arts Road Manager",
      "Personnel and Industrial Relations Manager",
      "Primary Health Organisation Manager",
      "Procurement Manager",
      "Project Manager",
      "Public Relations Manager",
      "Quality Assurance Manager",
      "Railway Worker – Station Manager",
      "Real Estate Agency Manager",
      "Real Estate Property Manager",
      "Regional Education Manager",
      "Regulatory Affairs Manager",
      "Research and Development Manager",
      "Restaurant Manager",
      "Retirement Village Manager",
      "Sales Director or Manager",
      "Sales Manager",
      "Security Manager (Non–IT)",
      "Shop Manager",
      "Sports Centre Manager",
      "Sports Turf Manager",
      "Stable Manager",
      "Stage Manager",
      "Store Manager",
      "Theatre Manager",
      "Transport Company Manager",
      "Video Production Manager",
      "Weight Loss Centre Manager",
      "Welfare Centre Manager",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Policy and Planning Managers": {
    aliases: [
      "Analyst – Policy",
      "Foreign Policy Officer",
      "Manager – Policy and Planning",
      "Manager – Public Policy",
      "Policy Adviser or Analyst",
      "Policy and Planning Manager",
      "Policy Officer",
      "Public Policy Manager",
      "224412",
      "132411",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Practice Manager": {
    aliases: [
      "Architectural Practice Manager",
      "Health Practice Manager",
      "Legal Practice Manager",
      "Manager – Accounting Practice",
      "Manager – Architectural Practice",
      "Manager – Health Practice",
      "Manager – Legal Practice",
      "Manager – Other Practice",
      "Medical Practitioner – General Practice",
      "512299",
      "512211",
      "253111",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Retail Managers and Supervisors": {
    aliases: [
      "Manager – Retail Bakery",
      "Manager – Retail Store",
      "Retail Bakery Manager",
      "Retail Manager",
      "Retail Store Manager",
      "Retail Supervisor",
      "142111",
      "621511",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Supply and Distirbution Manager": {
    aliases: ["Manager – Warehouse", "Warehouse Manager", "591116"],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Taxi Driver, Taxi Owner and Ride Share Driver": {
    aliases: [
      "Cab Driver",
      "Driver – Taxi",
      "Owner–Driver – Taxi",
      "Taxi Driver",
      "Taxi Proprietor",
      "Owner – Taxi",
      "731112",
      "149999",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Teacher, Principal, Lecturer, Instructor, Aide, Tutor, Online, Distance, Kindergarten, Primary , Secondary, and TAFE, University":
    {
      aliases: [
        "Head of School – TAFE",
        "Integration Aide (Schools)",
        "Kindergarten Assistant",
        "Maths Tutor (Private Tuition)",
        "134411",
        "422112",
        "422115",
        "249299",
        "School Principal",
        "134311",
        "Tutor – Language (Private Tuition)",
        "Tutor – Maths (Private Tuition)",
        "Tutor – University",
        "Tutor – Vocational Education",
        "Art Teacher – Private",
        "Ballet Teacher",
        "Dance Teacher – Private",
        "Distance Education Teacher",
        "Drama Teacher – Private",
        "English Language Teacher",
        "ESL Teacher",
        "High School Teacher",
        "Infant School Teacher",
        "Kindergarten Teacher",
        "Lecturer",
        "Lecturer – University",
        "Lecturer – Vocational Education",
        "Middle School Teacher",
        "Migrant Teacher",
        "Music Teacher – Private",
        "Pre–School Teacher",
        "Primary School Teacher",
        "Professor",
        "Remedial Teacher",
        "School Teacher – High School or Secondary School",
        "School Teacher – Infant or Primary School",
        "School Teacher – Middle School",
        "School Teacher – of the Hearing Impaired",
        "School Teacher – of the Sight Impaired",
        "School Teacher – Other School",
        "School Teacher – Pre-School or Kindergarten",
        "School Teacher – Remedial, Special Needs or Special Education",
        "School Teacher of English to Speakers of Other Languages",
        "Secondary School Teacher",
        "Special Education Teacher",
        "Special Needs Teacher",
        "TAFE Teacher or Tutor",
        "Teacher – Art – Private",
        "Teacher – Ballet",
        "Teacher – Dance – Private",
        "Teacher – Distance Education",
        "Teacher – Drama – Private",
        "Teacher – Education Advisor",
        "Teacher – Education Reviewer",
        "Teacher – English Language",
        "Teacher – Governess (Pre–Primary)",
        "Teacher – Governess (Primary Level)",
        "Teacher – Governess (Secondary Level)",
        "Teacher – High School or Secondary School",
        "Teacher – Infant or Primary School",
        "Teacher – Middle School",
        "Teacher – Migrant",
        "Teacher – Music – Private",
        "Teacher – Other School",
        "Teacher – Pre-School or Kindergarten",
        "Teacher – Remedial, Special Needs or Special Education",
        "Teacher – Vocational Education",
        "Teacher of English to Speakers of Other Languages",
        "Teacher of The Hearing Impaired",
        "Teacher of The Sight Impaired",
        "Teachers Aide",
        "Teachers' Aide",
        "University Lecturer",
        "249211",
        "241213",
        "241311",
        "241411",
        "241511",
        "241512",
        "241513",
        "241599",
        "242211",
        "249111",
        "249112",
        "249212",
        "249213",
        "249214",
        "249299",
        "249311",
        "422116",
      ],
      items: [
        BLOCKS.bags.general,
        BLOCKS.clothing.general,
        BLOCKS.Eyewear.general,
        BLOCKS.firstAid.general,
        BLOCKS.motorVehicles.general,
        BLOCKS.overtimeMeals.general,
        BLOCKS.stationery.general,
        BLOCKS.ppe.general,
        BLOCKS.professionalassociation.general,
        BLOCKS.selfEducation.general,
        BLOCKS.subscriptions.general,
        BLOCKS.communication.general,
        BLOCKS.tools.general,
        BLOCKS.travel.general,
        BLOCKS.wfh.general,
      ],
    },
  "Train, Bus and Tram Driver": {
    aliases: [
      "Bus – Owner-Driver",
      "Bus Driver",
      "Charter Bus Driver",
      "Coach Driver",
      "Concrete Mixer Driver",
      "Delivery Driver",
      "Driver – Bus",
      "Driver – Bus Owner-Driver",
      "Driver – Charter Bus",
      "Driver – Chauffeur or Hire Car",
      "Driver – Forklift",
      "Driver – Furniture Removalist",
      "Driver – Lorry",
      "Driver – Passenger Coach",
      "Driver – Racing Car",
      "Driver – Tour Bus",
      "Driver – Train or Locomotive",
      "Driver – Tram",
      "149413",
      "733113",
      "452452",
      "721311",
      "731111",
      "733111",
      "731211",
      "732111",
      "731212",
      "731213",
      "731311",
      "731312",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Travel Agent, Travel Consultant, Tourism Adviser, and Travel Adviser": {
    aliases: [
      "Agent – Travel",
      "Apprentice – Tourism and Travel Adviser",
      "Commercial Traveller",
      "Consultant – Travel",
      "Manager – Travel Agency",
      "Retail Assistant – Commercial Traveller",
      "Sales Assistant – Commercial Traveller",
      "Sales Representative – Commercial Traveller",
      "Salesperson – Commercial Traveller",
      "Trainee – Tourism and Travel Adviser",
      "Travel Agency Manager",
      "Travel Agent or Consultant",
      "451612",
      "142116",
      "945103",
      "945104",
      "611399",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Truck Driver, Delivery Driver, Transport Driver and Owner Driver": {
    aliases: [
      "Concrete Pump Opeator",
      "712915",
      "Driver – Concrete Mixer",
      "Driver – Delivery",
      "Driver – Semi-Trailer",
      "Driver – Tanker",
      "Driver – Taxi-Truck",
      "Driver – Truck or Transport",
      "Driver – Truck Owner-Driver",
      "Driver – Van",
      "Owner – Bus, Truck, Limousine or Hire Car",
      "Owner–Driver – Truck",
      "Taxi–Truck Driver",
      "Truck – Owner-Driver",
      "Truck Driver",
      "Truck Driver – General",
      "Truck Driver's Offsider",
      "733111",
      "149413",
      "733114",
      "891112",
      "732111",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Undertakers, Funeral Attendants, and Funeral Directors": {
    aliases: [
      "Attendant – Funeral",
      "Director – Funeral",
      "Funeral Attendant",
      "Funeral Director",
      "Undertaker",
      "451399",
      "451311",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Upholsterers: {
    aliases: [
      "Apprentice - Upholsterer",
      "Furniture Upholsterer",
      "Trainee - Upholsterer",
      "Upholsterer",
      "939303",
      "393311",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Valuer: {
    aliases: ["Valuerrs", "224512"],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Veterinarians and Veterinary Nurses": {
    aliases: [
      "Apprentice – Veterinary Nurse",
      "Nurse – Veterinary",
      "Manager – Veterinary Practice",
      "Scientist – Veterinarian",
      "Trainee – Veterinary Nurse",
      "Veterinarian",
      "Veterinary Nurse",
      "Veterinary Practice Manager",
      "936104",
      "512299",
      "234711",
      "361311",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Weight Loss Consultant and Nutritionist": {
    aliases: [
      "Consultant – Weight Loss",
      "Nutritionist",
      "Scientist – Nutritionist",
      "Weight Loss Consultant",
      "945102",
      "251112",
      "451512",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Welfare Officers": {
    aliases: [
      "Apprentice – Health and Welfare Support Services",
      "Trainee – Health and Welfare Support Services",
      "Welfare Officer",
      "941001",
      "272613",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Circus: {
    aliases: [
      "Circus Performer",
      "Circus Trainer",
      "Trainer – Circus",
      "211113",
      "211199",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Apprentice: {
    aliases: [
      "Apprentice – Clerical Services",
      "Apprentice – Agricultural Technician",
      "Apprentice – Forestry",
      "Apprentice – Farm or Garden Worker",
      "Apprentice – Hospitality",
      "Apprentice – Financial Services",
      "Apprentice – Airconditioning and Refrigeration Mechanic",
      "Apprentice – Automotive Mechanic",
      "Apprentice – Mechanic",
      "Apprentice – Nurseryperson",
      "Apprentice – Tourism and Travel Adviser",
      "Apprentice – Upholsterer",
      "Apprentice – Veterinary Nurse",
      "Apprentice – Health and Welfare Support Services",
      "Apprentice – Aircraft Maintenance Engineer",
      "Apprentice – Animal Attendant",
      "Apprentice – Autoglazier",
      "Apprentice – Automotive – Other",
      "Apprentice – Automotive Electrician",
      "Apprentice – Baker or Pastrycook",
      "Apprentice – Beauty Therapist",
      "Apprentice – Boat Builder",
      "Apprentice – Bricklayer",
      "Apprentice – Business Services",
      "Apprentice – Butcher",
      "Apprentice – Canvas and Leather Tradesperson",
      "Apprentice – Care and Community Services",
      "Apprentice – Carpenter and Joiner",
      "Apprentice – Chef",
      "Apprentice – Cleaning Services",
      "Apprentice – Clothing Tradesperson",
      "Apprentice – Cook",
      "Apprentice – Deck Hand",
      "Apprentice – Electrician",
      "Apprentice – Electronics Tradesperson",
      "Apprentice – Fishing Hand",
      "Apprentice – Floor Finisher",
      "Apprentice – Florist",
      "Apprentice – Food, Drink or Meat Processor",
      "Apprentice – Furniture Maker or Finisher",
      "Apprentice – Gardener",
      "Apprentice – Graphic Artist",
      "Apprentice – Greenkeeper",
      "Apprentice – Hairdresser",
      "Apprentice – Information Technology Technician",
      "Apprentice – Jeweller",
      "Apprentice – Jockey",
      "Apprentice – Justice and Legal Services",
      "Apprentice – Mechanical Trades Engineer",
      "Apprentice – Medical Technician",
      "Apprentice – Metal Fabrication Engineer",
      "Apprentice – Miner",
      "Apprentice – Painter",
      "Apprentice – Pastrycook",
      "Apprentice – Performing Arts Technician",
      "Apprentice – Plasterer",
      "Apprentice – Plumber",
      "Apprentice – Power Generation Plant Operator",
      "Apprentice – Printer",
      "Apprentice – Security and Correctional Services",
      "Apprentice – Shearer",
      "Apprentice – Shipwright",
      "Apprentice – Signwriter",
      "Apprentice – Sport and Recreation",
      "Apprentice – Stablehand",
      "Apprentice – Storeperson",
      "Apprentice – Telecommunications Technical Specialist",
      "Apprentice – Telecommunications Tradesperson",
      "Apprentice – Tiler",
      "Apprentice – Transport and Distribution Driver",
      "Apprentice – Watch and Clock Maker",
      "Apprentice – Wood Tradesperson",
      "931101",
      "931102",
      "931301",
      "931302",
      "932101",
      "932102",
      "932201",
      "932301",
      "932302",
      "932303",
      "932401",
      "933101",
      "933102",
      "933201",
      "933202",
      "933301",
      "933302",
      "933401",
      "934101",
      "934201",
      "934202",
      "934203",
      "935101",
      "935102",
      "935103",
      "935104",
      "936102",
      "936103",
      "936104",
      "936201",
      "936202",
      "936203",
      "936204",
      "939101",
      "939201",
      "939301",
      "939302",
      "939303",
      "939401",
      "939901",
      "939902",
      "939903",
      "939904",
      "939905",
      "941001",
      "942001",
      "943101",
      "944201",
      "945101",
      "945103",
      "945201",
      "945203",
      "951001",
      "953001",
      "955001",
      "959901",
      "971201",
      "973001",
      "974101",
      "981101",
      "983101",
      "984101",
      "984102",
      "984103",
      "989901",
      "989902",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Trainee: {
    aliases: [
      "Trainee – Clerical Services",
      "Trainee – Agricultural Technician",
      "Trainee – Forestry",
      "Trainee – Farm or Garden Worker",
      "Trainee – Hospitality",
      "Trainee – Financial Services",
      "Trainee – Airconditioning and Refrigeration Mechanic",
      "Trainee – Automotive Mechanic",
      "Trainee – Mechanical Trades Engineer",
      "Trainee – Tourism and Travel Adviser",
      "Trainee – Upholsterer",
      "Trainee – Veterinary Nurse",
      "Trainee – Health and Welfare Support Services",
      "Clerk – Trainee Sales",
      "Office Trainee",
      "Retail Assistant – Retail Trainee",
      "Retail Trainee",
      "Sales Assistant – Retail Trainee",
      "Salesperson – Retail Trainee",
      "Shop Assistant – Retail Trainee",
      "Trainee – Aircraft Maintenance Engineer",
      "Trainee – Animal Attendant",
      "Trainee – Autoglazier",
      "Trainee – Automotive – Other",
      "Trainee – Automotive Electrician",
      "Trainee – Baker or Pastrycook",
      "Trainee – Beauty Therapist",
      "Trainee – Boat Builder",
      "Trainee – Bricklayer",
      "Trainee – Business Services",
      "Trainee – Butcher",
      "Trainee – Canvas and Leather Tradesperson",
      "Trainee – Care and Community Services",
      "Trainee – Carpenter and Joiner",
      "Trainee – Chef",
      "Trainee – Cleaning Services",
      "Trainee – Clothing Tradesperson",
      "Trainee – Cook",
      "Trainee – Deck Hand",
      "Trainee – Electrician",
      "Trainee – Electronics Tradesperson",
      "Trainee – Fishing Hand",
      "Trainee – Floor Finisher",
      "Trainee – Florist",
      "Trainee – Food, Drink or Meat Processor",
      "Trainee – Furniture Maker or Finisher",
      "Trainee – Gardener",
      "Trainee – Graphic Artist",
      "Trainee – Greenkeeper",
      "Trainee – Hairdresser",
      "Trainee – IT Technician",
      "Trainee – Jeweller",
      "Trainee – Jockey",
      "Trainee – Justice and Legal Services",
      "Trainee – Medical Technician",
      "Trainee – Metal Fabrication Engineer",
      "Trainee – Miner",
      "Trainee – Nurseryperson",
      "Trainee – Painter",
      "Trainee – Pastrycook",
      "Trainee – Performing Arts Technician",
      "Trainee – Plasterer",
      "Trainee – Plumber",
      "Trainee – Power Generation Plant Operator",
      "Trainee – Printer",
      "Trainee – Security and Correctional Services",
      "Trainee – Shearer",
      "Trainee – Shipwright",
      "Trainee – Signwriter",
      "Trainee – Sport and Recreation",
      "Trainee – Stable hand",
      "Trainee – Storeperson",
      "Trainee – Telecommunications Technical Specialist",
      "Trainee – Telecommunications Tradesperson",
      "Trainee – Tiler",
      "Trainee – Transport and Distribution Driver",
      "Trainee – Watch and Clock Maker",
      "Trainee – Wood Tradesperson",
      "561999",
      "621111",
      "931101",
      "931102",
      "931301",
      "931302",
      "932101",
      "932102",
      "932201",
      "932301",
      "932302",
      "932303",
      "932401",
      "933101",
      "933102",
      "933201",
      "933202",
      "933301",
      "933302",
      "933401",
      "934101",
      "934201",
      "934202",
      "934203",
      "935101",
      "935102",
      "935103",
      "935104",
      "936102",
      "936103",
      "936104",
      "936201",
      "936202",
      "936203",
      "936204",
      "939101",
      "939201",
      "939301",
      "939302",
      "939303",
      "939401",
      "939901",
      "939902",
      "939903",
      "939904",
      "939905",
      "941001",
      "942001",
      "943101",
      "944201",
      "945101",
      "945103",
      "945201",
      "945203",
      "951001",
      "953001",
      "955001",
      "959901",
      "971201",
      "973001",
      "974101",
      "981101",
      "983101",
      "984101",
      "984102",
      "984103",
      "989901",
      "989902",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Sportsperson: {
    aliases: [
      "Cricketer",
      "Cyclist",
      "Footballer",
      "Golfer",
      "Gymnast",
      "Jockey",
      "Tennis Player",
      "452457",
      "452455",
      "452411",
      "452412",
      "452456",
      "452413",
      "452460",
      "Surfer",
      "452458",
      "Basketballer",
      "452451",
      "Boxer – Sports",
      "Sportsperson – Athlete",
      "Sportsperson – Basketballer",
      "Sportsperson – Body Builder",
      "Sportsperson – Boxer",
      "Sportsperson – Cricketer",
      "Sportsperson – Cyclist",
      "Sportsperson – Footballer",
      "Sportsperson – Golfer",
      "Sportsperson – Gymnast",
      "Sportsperson – Horse or Dog Racing Judge",
      "Sportsperson – Jockey",
      "Sportsperson – Lifeguard",
      "Sportsperson – Other",
      "Sportsperson – Other Sports Instructor or Coach",
      "Sportsperson – Other Sports Official",
      "Sportsperson – Racecourse Official",
      "Sportsperson – Racing Car Driver",
      "Sportsperson – Referee",
      "Sportsperson – Soccer Player",
      "Sportsperson – Sports Development Officer",
      "Sportsperson – Squash Player",
      "Sportsperson – Surfer",
      "Sportsperson – Swimmer",
      "Sportsperson – Tennis Player",
      "Sportsperson – Umpire",
      "Trainee – Sport and Recreation",
      "452317",
      "452318",
      "452321",
      "452322",
      "452323",
      "452411",
      "452412",
      "452413",
      "452414",
      "452450",
      "452451",
      "452452",
      "452453",
      "452454",
      "452455",
      "452456",
      "452457",
      "452458",
      "452459",
      "452460",
      "452499",
      "945201",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Sports Coach, Sports Development Officer, and Sports Instructor, Umpires": {
    aliases: [
      "Gymnastics Coach or Instructor",
      "452312",
      "Umpire - Sports",
      "452322",
      "Coach – Diving (Open Water)",
      "Coach – Gymnastics",
      "Coach – Horse Riding",
      "Coach – Other",
      "Coach – Ski",
      "Coach – Swimming",
      "Coach – Tennis Coach",
      "452311",
      "452312",
      "452313",
      "452314",
      "452315",
      "452316",
      "452317",
      "Sports Coach – Diving (open water)",
      "Sports Coach – Gymnastics",
      "Sports Coach – Horse Riding",
      "Sports Coach – Other",
      "Sports Coach – Ski",
      "Sports Coach – Swimming",
      "Sports Coach – Tennis",
      "Sports Development Officer",
      "Sports Instructor – Aerobics",
      "Sports Instructor – Diving (open water)",
      "Sports Instructor – Fitness",
      "Sports Instructor – Gym",
      "Sports Instructor – Gymnastics",
      "Sports Instructor – Horse Riding",
      "Sports Instructor – Other",
      "Sports Instructor – Ski",
      "Sports Instructor – Swimming",
      "Sports Instructor – Tennis",
      "452311",
      "452111",
      "452312",
      "452313",
      "452314",
      "452315",
      "452316",
      "452317",
      "452321",
      "452450",
      "452451",
      "452452",
      "452453",
      "452454",
      "452455",
      "452456",
      "452457",
      "452458",
      "452459",
      "452460",
      "452499",
      "945201",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Sport Psychologist, Sport Physician,and Sports Scientist": {
    aliases: [
      "Medical Practitioner – Sports Physician",
      "Psychologist – Sport",
      "Sports Physician",
      "Sports Psychologist",
      "Sports Scientist",
      "272399",
      "234999",
      "253999",
      "272399",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Gardener, Turf Worker, and Landscape Gardener": {
    aliases: [
      "Garden Labourer",
      "Gardener (General)",
      "Landscape Gardener",
      "Sports Turf Trades Worker",
      "843211",
      "362611",
      "362711",
      "362313",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Carpenter: {
    aliases: [
      "Construction Worker – Carpenter and Joiner",
      "Apprentice – Carpenter and Joiner",
      "Trainee – Carpenter and Joiner",
      "Carpenter",
      "Carpenter and Joiner",
      "331211",
      "933102",
      "",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Plumber: {
    aliases: [
      "Construction Worker – Plumber's Assistant",
      "Construction Worker – Roof Plumber",
      "Air Conditioning and Mechanical Services Plumber",
      "Plumber – Air Conditioning and Mechanical Services",
      "Apprentice – Plumber",
      "Trainee – Plumber",
      "Fire Protection Plumber",
      "Labourer – Plumber's Assistant",
      "Plumber – Drainer",
      "Plumber – Gasfitter",
      "Plumber – Roof",
      "Plumber (General)",
      "Plumber's Assistant",
      "Roof Plumber",
      "334112",
      "334113",
      "334114",
      "334115",
      "334116",
      "334117",
      "821114",
      "933401",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Electrician: {
    aliases: [
      "Apprentice – Electrician",
      "Trainee – Electrician",
      "Electrician – General",
      "Electrician's Assistant",
      "934101",
      "341111",
      "899914",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Wood - Process Worker, Turner, Carver, Machinist, Processing Operator": {
    aliases: [
      "Apprentice – Wood Tradesperson",
      "Trainee – Wood Tradesperson",
      "Fabricator – Door or Window – Wood",
      "Factory Worker – Wood and Wood Products",
      "Factory Worker – Wood Processing Machine Operator Other Than Sawmilling",
      "Labourer – Wood and Wood Products Factory Worker",
      "Machine Operator – Wood Processing other than sawmilling",
      "Machinist – Wood",
      "Model Maker – Wood",
      "Process Worker – Other Wood Processing Machine Operator",
      "Process Worker – Wood and Wood Products Factory Worker",
      "Process Worker – Wood Processing Machine Operator Other Than Sawmilling",
      "Process Worker – Wood Processing Other Than Sawmilling",
      "Turner – Wood",
      "Wood and Wood Products Factory Worker",
      "Wood Carver",
      "Wood Machinist",
      "Wood Processing Machine Operator – Other Than Sawmilling",
      "Wood Turner",
      "394213",
      "839413",
      "939401",
      "394214",
      "394299",
      "711314",
      "711999",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Baggage Handler, Ground Crew, Check-in and Ticketing": {
    aliases: [
      "721911",
      "639411",
      "591211",
      "891111",
      "Airline Employee – Baggage Handling or Ground Crew",
      "Airline Employee – Check In or Ticketing",
      "Airline Employee – Load Controller",
      "Baggage Handler – Airline",
      "Baggage Handler – Bus or Train",
      "Baggage Handler – Freight – Road or Rail",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Animal Attendant and Animal Husbandry": {
    aliases: [
      "361199",
      "311113",
      "Animal Attendant",
      "Animal Husbandry Technician",
      "Attendant – Animal",
      "Kennel Operator",
      "149911",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Animals.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Animal Attendants and Trainers (Animal)": {
    aliases: [
      "Animal Trainer – Dog",
      "Animal Trainer – Horse",
      "Animal Trainer (Not Dog or Horse)",
      "Dog Handler or Trainer",
      "Horse Breaker or Trainer",
      "Trainer – Animal (Not Horse or Dog)",
      "Trainer – Dog",
      "Trainer – Horse",
      "361111",
      "361112",
      "361199",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Animals.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Lawyer, Judge, Registrar and Paralegal": {
    aliases: [
      "Barrister",
      "Clerk – Law",
      "Clerk – Legal and Related",
      "Intellectual Property Lawyer",
      "Judge – Law",
      "Law Clerk",
      "Lawyer",
      "Legal and Related Clerks",
      "Legal Executive",
      "Legal Researcher",
      "Paralegal",
      "Patent Attorney",
      "Registrar – Legal – Children's Court",
      "Registrar – Legal – County, District or Local Courts",
      "Registrar – Legal – Court of Appeals",
      "Registrar – Legal – Court of Petty Sessions or Magistrate's Court",
      "Registrar – Legal – Federal, Supreme or Family Courts",
      "Registrar – Legal – High Court",
      "Trademark Attorney",
      "271111",
      "271211",
      "271214",
      "271299",
      "271311",
      "599112",
      "599211",
      "599214",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Accounts Clerk, Accounts Officer, Accounts Payable and Accounts Receivable":
    {
      aliases: [
        "Accounts Assistant",
        "551111",
        "Accounts Officer",
        "Accounts Payable",
        "Accounts Receivable",
        "Accounts Manager",
      ],
      items: [
        BLOCKS.bags.general,
        BLOCKS.clothing.general,
        BLOCKS.Eyewear.general,
        BLOCKS.firstAid.general,
        BLOCKS.motorVehicles.general,
        BLOCKS.overtimeMeals.general,
        BLOCKS.stationery.general,
        BLOCKS.ppe.general,
        BLOCKS.professionalassociation.general,
        BLOCKS.selfEducation.general,
        BLOCKS.subscriptions.general,
        BLOCKS.communication.general,
        BLOCKS.tools.general,
        BLOCKS.travel.general,
        BLOCKS.wfh.general,
      ],
    },
  "IT, Computer Programmer, Computer Technician, Systems Engineer, and Computer Administrator":
    {
      aliases: [
        "Compositor",
        "Computing Professional – Account Manager",
        "Computing Professional – Analyst Programmer",
        "Computing Professional – Applications Programmer",
        "Computing Professional – Business Analyst",
        "Computing Professional – Business Development Manager",
        "Computing Professional – Chief Information Officer",
        "Computing Professional – Database Administrator",
        "Computing Professional – Hardware Technician",
        "Computing Professional – Multimedia Specialist",
        "Computing Professional – Network Administrator",
        "Computing Professional – Network Analyst",
        "Computing Professional – Network Systems Engineer",
        "Computing Professional – Other Manager",
        "Computing Professional – Other Support Technicians",
        "Computing Professional – Programmer",
        "Computing Professional – Project Manager",
        "Computing Professional – Quality Assurance Engineer",
        "Computing Professional – Sales Assistant",
        "Computing Professional – Sales Representative",
        "Computing Professional – Software Engineer",
        "Computing Professional – Software Tester",
        "Computing Professional – Support Engineer",
        "Computing Professional – Systems Analyst",
        "Computing Professional – Systems Programmer",
        "Computing Professional – Systems Test Engineer",
        "Computing Professional – Technician",
        "Computing Professional – Web Administrator",
        "Computing Professional – Web Programmer",
        "Computing Systems Analyst",
        "Cyber Governance Risk and Compliance Specialist",
        "Cyber Security Advice and Assessment Specialist",
        "Cyber Security Analyst",
        "Cyber Security Architect",
        "Cyber Security Engineer",
        "Cyber Security Operations Coordinator",
        "Data Analyst",
        "Data Entry Operator",
        "Data Processing Manager",
        "Data Processing Operator",
        "Data Scientist",
        "Database Administrator",
        "Games Programmer",
        "IT Business Analyst",
        "Methods Analyst – Computing",
        "Network Administrator – IT",
        "Network Analyst – IT",
        "Network Consultant – IT",
        "Program or Project Administrator",
        "Program Seller",
        "Programmer – Analyst",
        "Programmer – Applications",
        "Programmer – Computing Systems",
        "Programmer – Developer",
        "Programmer – Games",
        "Programmer – Software Tester",
        "Programmer – Web",
        "Systems Administrator",
        "Systems Analyst",
        "Systems Programmer – Computing",
        "Web Administrator",
        "Web Designer",
        "392211",
        "135111",
        "135112",
        "135199",
        "224114",
        "224115",
        "225211",
        "225212",
        "225213",
        "232414",
        "261111",
        "261112",
        "261211",
        "261212",
        "261311",
        "261312",
        "261313",
        "261314",
        "261315",
        "262111",
        "262113",
        "262114",
        "262115",
        "262116",
        "262117",
        "262118",
        "263111",
        "263112",
        "263113",
        "263211",
        "263212",
        "263213",
        "313111",
        "313113",
        "313199",
        "511112",
        "532111",
        "621211",
        "621999",
        "Administrator - Database",
        "262111",
        "Administrator – Computer Systems",
        "Computer Network and Systems Engineer",
        "Computer Programmer",
        "Computer Sales Assistant",
        "Computer Sales Representative",
        "Computer Servicer or Technician",
        "Computer Systems Administrator",
        "Computer Systems Auditor",
        "Engineer – Computer Network and Systems",
        "IT Account Manager",
        "IT Hardware Technician",
        "IT Manager – Other",
        "IT Network Administrator",
        "IT Network Analyst",
        "IT Professional – Chief Information Officer",
        "IT Project Manager",
        "IT Quality Assurance Engineer",
        "IT Sales Assistant",
        "IT Sales Representative",
        "IT Service Delivery Manager",
        "IT Support Engineer",
        "IT Systems Test Engineer",
        "IT Technician",
        "IT Web Administrator",
        "IT Web Programmer",
        "Programmer – Computer",
        "Systems Engineer – Computer Networks",
        "Technician – Computer",
        "262113",
        "263111",
        "261312",
        "621211",
        "225213",
        "342313",
        "262113",
        "263211",
        "263111",
        "225211",
        "313111",
        "135199",
        "263112",
        "263113",
        "135111",
        "135112",
        "263211",
        "621211",
        "225213",
        "135199",
        "263212",
        "263213",
        "342313",
        "313113",
        "261212",
        "261312",
        "263111",
        "342313",
      ],
      items: [
        BLOCKS.bags.general,
        BLOCKS.clothing.general,
        BLOCKS.Eyewear.general,
        BLOCKS.firstAid.general,
        BLOCKS.motorVehicles.general,
        BLOCKS.overtimeMeals.general,
        BLOCKS.stationery.general,
        BLOCKS.ppe.general,
        BLOCKS.professionalassociation.general,
        BLOCKS.selfEducation.general,
        BLOCKS.subscriptions.general,
        BLOCKS.communication.general,
        BLOCKS.tools.general,
        BLOCKS.travel.general,
        BLOCKS.wfh.general,
      ],
    },
  "Fitness, Aerobics Instructor, and Body Builder": {
    aliases: [
      "Aerobics Instructor",
      "Body Builder – Fitness",
      "Fitness Centre Manager",
      "Fitness Instructor",
      "Instructor – Aerobics",
      "Instructor – Fitness",
      "452111",
      "452499",
      "149112",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Artist - Sculptor, Painter, Commercial, and Make Up": {
    aliases: [
      "Commercial Artist",
      "232411",
      "Artist – Commercial",
      "Artist – Other Visual",
      "Artist – Painter",
      "Artist – Potter or Ceramic",
      "Artist – Sculptor",
      "Artist – Variety",
      "Artistic Director",
      "Arts Administrator",
      "Director – Artistic",
      "Painter – Visual Arts",
      "Sculptor",
      "Variety Artist",
      "232411",
      "139911",
      "211113",
      "211411",
      "211412",
      "211413",
      "211499",
      "212111",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Painter - House Painter, Industrial Spray Painter, and Vehicle Painter": {
    aliases: [
      "Apprentice – Painter",
      "Trainee – Painter",
      "Decorator and Painter",
      "House Painter",
      "Motor Vehicle Painter",
      "Painter – House",
      "Painter – Industrial Spray Painter",
      "Painter – Motor Vehicle Spray Painter",
      "Painter and Decorator",
      "Spray Painter",
      "Spray Painter – Industrial",
      "Spray Painter – Motor Vehicle",
      "Spray Painter – Vehicles",
      "Vehicle Painter",
      "324311",
      "332211",
      "711211",
      "933202",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Beauty and Wellness Industry": {
    aliases: [
      "Make-Up Artist",
      "399514",
      "Cosmetician",
      "621111",
      "Apprentice – Beauty Therapist",
      "Apprentice – Hairdresser",
      "Trainee – Hairdresser",
      "Beauty Salon Assistant",
      "Beauty Therapist",
      "Hairdresser",
      "Ladies' Hairdresser",
      "Men's Hairdresser",
      "Trainee – Beauty Therapist",
      "Thai Masseur",
      "Therapist – Beauty",
      "Artist – Make-Up",
      "Barber",
      "Beautician",
      "391111",
      "399514",
      "411611",
      "451111",
      "451812",
      "939101",
      "945101",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Animal Racing and Animal Judging": {
    aliases: [
      "Dog Racing Judge",
      "Horse Racing Judge",
      "Horse Riding Coach or Instructor",
      "Judge – Horse or Dog Racing",
      "452313",
      "452318",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Baking and Cookery": {
    aliases: [
      "Cook – Chef",
      "Cook – Fast Food or Short Order",
      "Cook – General",
      "Cook – Pastry",
      "Cook – Pastry Assistant",
      "351311",
      "851111",
      "351411",
      "351112",
      "851211",
      "Baker",
      "Bakery Assistant",
      "Cake Decorator",
      "Pastry Cook",
      "Pastry Cook's Assistant",
      "351111",
      "851211",
      "351112",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Call Centre Operator": {
    aliases: [
      "Call Centre Operator",
      "Call Centre Operator – Betting",
      "Call Centre Operator – Bookings",
      "Call Centre Operator – Classified Ads",
      "Call Centre Operator – Inbound Calls",
      "Call Centre Operator – Other",
      "Call Centre Operator – Outbound Calls or Telemarketer",
      "Call Centre Team Leader",
      "Contact Centre Operator – Betting",
      "Contact Centre Operator – Bookings",
      "Contact Centre Operator – Classified Ads",
      "Contact Centre Operator – Inbound Calls",
      "Contact Centre Operator – Other",
      "Contact Centre Operator – Outbound Calls or Telemarketer",
      "541112",
      "541111",
      "561113",
      "561911",
      "639311",
      "639411",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Casino Worker": {
    aliases: [
      "Casino Worker – Cashier or Cage Supervisor",
      "Casino Worker – Host",
      "Casino Worker – Surveillance Officer",
      "631112",
      "431999",
      "442299",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Working with Children": {
    aliases: [
      "Child Care Centre Director",
      "Child Carer – Child Care Aide",
      "Child Carer – Child Care Assistant",
      "Child Carer – Child Care Worker",
      "Child Carer – Child Minder",
      "Child Carer – Child or Youth Residential Care Assistant",
      "Child Carer – Family Day Care Worker",
      "Child Carer – Governess",
      "Child Carer – Out of School Hours Care Worker",
      "Child Minder",
      "Child or Youth Residential Care Assistant",
      "Childcare Worker",
      "Creche Attendant",
      "Family Day Care Worker",
      "Nanny",
      "134111",
      "421112",
      "421113",
      "421114",
      "423411",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Concreter: {
    aliases: [
      "Cement Plant Hand or Labourer",
      "Cement Production Plant Operator",
      "Cement Renderer",
      "Concrete Batching Plant Operator",
      "Concrete Plant Hand or Labourer",
      "Concrete Plasterer",
      "Concrete Products Machine Operator",
      "Concrete Worker",
      "839911",
      "712913",
      "333212",
      "712914",
      "839911",
      "333212",
      "711112",
      "821211",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Consultant: {
    aliases: [
      "Consultant – Chemical or Material Engineer",
      "Consultant – Civil Engineer",
      "Consultant – Electrical Engineer",
      "Consultant – Electronics Engineer",
      "Consultant – Employment",
      "Consultant – Engineering – Other",
      "Consultant – Environmental",
      "Consultant – Human Resources",
      "Consultant – Industrial or Mechanical Engineer",
      "Consultant – Insolvency",
      "Consultant – IT Business Analyst",
      "Consultant – Management",
      "Consultant – Medical",
      "Consultant – Medical and Pharmaceutical Products Sales Representative",
      "Consultant – Mining Engineer",
      "Consultant – Occupational Health and Safety",
      "Consultant – Public Relations Professional",
      "Consultant – Real Estate Representative",
      "Consultant – Recruitment",
      "Consultant – Sales Assistant (Retail)",
      "Consultant – Sales Representative (Wholesale)",
      "Consultant – Security",
      "Consultant – Urban and Regional Planner",
      "Consultant – Workplace Relations",
      "923301",
      "221111",
      "223112",
      "922301",
      "922302",
      "922303",
      "922401",
      "922502",
      "922503",
      "923202",
      "923302",
      "923303",
      "923304",
      "923305",
      "923306",
      "923307",
      "923401",
      "925001",
      "925101",
      "926101",
      "944202",
      "961101",
      "961202",
      "962102",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Engineer: {
    aliases: [
      "Engineer – Acoustic",
      "Engineer – Biomedical",
      "Engineer – Building Services",
      "Engineer – Chemical",
      "Engineer – Electrical",
      "Engineer – Engineering Technologist",
      "Engineer – Environmental",
      "Engineer – Flight",
      "Engineer – Geotechnical",
      "Engineer – Industrial",
      "Engineer – IT Quality Assurance",
      "Engineer – IT Support",
      "Engineer – IT Systems Test",
      "Engineer – Marine",
      "Engineer – Marine Surveyor",
      "Engineer – Materials",
      "Engineer – Mechanical",
      "Engineer – Mining",
      "Engineer – Naval Architect",
      "Engineer – Other Professional",
      "Engineer – Petroleum",
      "Engineer – Production or Plant",
      "Engineer – Software",
      "Engineer – Sound",
      "Engineer – Structural",
      "Engineer – Telecommunications",
      "Engineer – Telecommunications Network",
      "Engineer – Transport",
      "Engineering Patternmaker",
      "Engineering Technologist",
      "231199",
      "231212",
      "231215",
      "233111",
      "233112",
      "233212",
      "233214",
      "233215",
      "233311",
      "233511",
      "233512",
      "233513",
      "233611",
      "233612",
      "233913",
      "233914",
      "233915",
      "233916",
      "233999",
      "261313",
      "263211",
      "263212",
      "263213",
      "263311",
      "263312",
      "323411",
      "399516",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Factory Worker": {
    aliases: [
      "Factory Worker – Abattoir Process Worker",
      "Factory Worker – Assembly Line",
      "Factory Worker – Baking Factory",
      "Factory Worker – Biscuit Packer",
      "Factory Worker – Bread Packer",
      "Factory Worker – Brewery",
      "Factory Worker – Brickworks",
      "Factory Worker – Cement Plant Hand or Labourer",
      "Factory Worker – Cheesemaker",
      "Factory Worker – Chemical Plant Hand or Labourer",
      "Factory Worker – Chocolate Packer",
      "Factory Worker – Cloth Cutter",
      "Factory Worker – Clothing Factory Hand or Labourer",
      "Factory Worker – Coffee Roaster",
      "Factory Worker – Concrete Plant Hand or Labourer",
      "Factory Worker – Confectioner",
      "Factory Worker – Container Filler",
      "Factory Worker – Dairy Products Maker",
      "Factory Worker – Egg Grader",
      "Factory Worker – Fabric Factory Hand or Labourer",
      "Factory Worker – Fellmongery Hand or Labourer",
      "Factory Worker – Fettler",
      "Factory Worker – Food Processing Machine Operator",
      "Factory Worker – Footwear Factory Hand or Labourer",
      "Factory Worker – Fruit and Vegetable Classer",
      "Factory Worker – Fruit and Vegetable Factory",
      "Factory Worker – Fruit and Vegetable Packer",
      "Factory Worker – Gas Plant Hand or Labourer",
      "Factory Worker – Glass Plant Hand or Labourer",
      "Factory Worker – Grain Mill",
      "Factory Worker – Hide and Skin Processing Machine Operator",
      "Factory Worker – Kiln Hand or Labourer",
      "Factory Worker – Meat Boner and Slicer",
      "Factory Worker – Meat Packer",
      "Factory Worker – Meat Process Worker",
      "Factory Worker – Metal Worker",
      "Factory Worker – Other",
      "Factory Worker – Packer – Other",
      "Factory Worker – Paint Factory Hand or Labourer",
      "Factory Worker – Paper and Pulp Mill Worker",
      "Factory Worker – Pasta Maker",
      "Factory Worker – Plastics Plant Hand or Labourer",
      "Factory Worker – Poultry Process Worker",
      "Factory Worker – Product Examiner",
      "Factory Worker – Product Grader",
      "Factory Worker – Product Tester",
      "Factory Worker – Rag Cutter",
      "Factory Worker – Rubber Factory Hand or Labourer",
      "Factory Worker – Sawmill Labourer",
      "Factory Worker – Sawmilling Operator",
      "Factory Worker – Seafood Packer",
      "Factory Worker – Seafood Process Worker",
      "Factory Worker – Sheltered Workshop Hand or Labourer",
      "Factory Worker – Slaughterer",
      "Factory Worker – Stone Processing Machine Operator",
      "Factory Worker – Sugar Mill",
      "Factory Worker – Tannery Hand or Labourer",
      "Factory Worker – Textile Factory Hand or Labourer",
      "Factory Worker – Timber Yard Labourer",
      "711114",
      "711313",
      "711712",
      "831111",
      "831112",
      "831113",
      "831114",
      "831115",
      "831116",
      "831117",
      "831199",
      "831211",
      "831212",
      "831311",
      "831312",
      "831313",
      "832111",
      "832112",
      "832113",
      "832114",
      "832115",
      "832199",
      "832211",
      "839111",
      "839211",
      "839212",
      "839311",
      "839312",
      "839313",
      "839411",
      "839412",
      "839911",
      "839912",
      "839912",
      "839913",
      "839914",
      "839915",
      "839916",
      "839917",
      "839999",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Guides: {
    aliases: [
      "Fishing Guide",
      "Guide – Fishing",
      "Guide – Gallery or Museum",
      "Guide – Hunting",
      "Guide – Mountain",
      "Guide – Outdoor Adventure Guide – Other",
      "Guide – Outdoor Adventure Instructor",
      "Guide – Tourist",
      "Guide – Trekking",
      "Guide – Whitewater Rafting",
      "452212",
      "451411",
      "452213",
      "452214",
      "452299",
      "452215",
      "451412",
      "452216",
      "452217",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Inspector: {
    aliases: [
      "Inspector – Airworthiness",
      "Inspector – Aviation Safety",
      "Inspector – Building",
      "Inspector – Bus",
      "Inspector – Customs",
      "Inspector – Dairy Quality Assurance",
      "Inspector – Fisheries",
      "Inspector – Fruit and Vegetable",
      "Inspector – Health",
      "Inspector – Meat",
      "Inspector – Motor Vehicle Licence",
      "Inspector – Noxious Weeds and Pest",
      "Inspector – Parking",
      "Inspector – Plumbing",
      "Inspector – Quarantine",
      "Inspector – Safety",
      "Inspector – Traffic",
      "Inspector – Transport Operations",
      "Inspector – Water",
      "Meat Inspector",
      "Transport Operations Inspector",
      "Instructor – Diving (Open Water)",
      "Instructor – Driving",
      "Instructor – Flying",
      "Instructor – Gym",
      "Instructor – Horse Riding",
      "Instructor – Ski",
      "Instructor – Skydiving",
      "Instructor – Swimming",
      "231113",
      "231199",
      "251311",
      "311311",
      "311312",
      "311313",
      "311399",
      "312113",
      "312115",
      "312611",
      "451211",
      "452111",
      "452299",
      "452311",
      "452313",
      "452314",
      "452315",
      "561913",
      "599511",
      "599513",
      "599514",
      "599518",
      "599521",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Investigator: {
    aliases: [
      "Investigator – Air Safety",
      "Investigator – Customs",
      "Investigator – Fire",
      "Investigator – Private",
      "Investigator – Tax",
      "Private Detective",
      "Private Investigator",
      "231199",
      "599511",
      "139112",
      "442214",
      "599516",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Laboratory Technician": {
    aliases: [
      "Laboratory Technician – Chemistry",
      "Laboratory Technician – Earth Science or Soil",
      "Laboratory Technician – Life Science",
      "Laboratory Technician – Medical",
      "Laboratory Technician – School Laboratory",
      "311411",
      "311412",
      "311413",
      "311213",
      "311414",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Labourer: {
    aliases: [
      "Electrical Trades Assistant or Labourer",
      "Fabric Factory Hand or Labourer",
      "Footwear Factory Hand or Labourer",
      "Labourer – Assembly Line Worker",
      "Labourer – Bricklayer's",
      "Labourer – Brickworks",
      "Labourer – Builder's",
      "Labourer – Building Insulation Installer",
      "Labourer – Cement Plant Hand",
      "Labourer – Chemical Plant Hand",
      "Labourer – Cloth Cutter",
      "Labourer – Clothing Factory Hand",
      "Labourer – Concrete Plant Hand",
      "Labourer – Concreter",
      "Labourer – Crane Chaser",
      "Labourer – Digging",
      "Labourer – Drainage, Sewerage or Stormwater",
      "Labourer – Driller's Assistant",
      "Labourer – Earthmoving",
      "Labourer – Electrical",
      "Labourer – Fabric Factory Hand",
      "Labourer – Fellmongery Hand",
      "Labourer – Fencer",
      "Labourer – Fettler",
      "Labourer – Footwear Factory Hand",
      "Labourer – Gas Plant Hand",
      "Labourer – Glass Plant Hand",
      "Labourer – Kiln Hand",
      "Labourer – Lagger",
      "Labourer – Metal Worker",
      "Labourer – Mining",
      "Labourer – Other",
      "Labourer – Paint Factory Hand",
      "Labourer – Paper and Pulp Mill Worker",
      "Labourer – Paving and Surfacing",
      "Labourer – Plastics Plant Hand",
      "Labourer – Railway Track",
      "Labourer – Road Maintenance",
      "Labourer – Rubber Factory Hand",
      "Labourer – Saw Mill",
      "Labourer – Scaffolder",
      "Labourer – Sheltered Workshop Hand",
      "Labourer – Steel Fixer",
      "Labourer – Structural Steel Erector",
      "Labourer – Surveyor's Assistant",
      "Labourer – Tannery Hand",
      "Labourer – Textile Factory Hand",
      "Labourer – Timber Yard",
      "Labourer – Wharf",
      "821111",
      "821112",
      "821113",
      "821211",
      "821311",
      "821411",
      "821511",
      "821611",
      "821712",
      "821713",
      "821714",
      "821911",
      "821912",
      "821913",
      "821914",
      "821915",
      "832211",
      "839111",
      "839211",
      "839212",
      "839411",
      "839412",
      "839911",
      "839912",
      "839913",
      "839914",
      "839915",
      "839916",
      "839917",
      "839999",
      "891113",
      "899914",
      "899999",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Machine Operator": {
    aliases: [
      "Footwear Production Machine Operator",
      "Machine Operator – Chemical Production",
      "Machine Operator – Concrete Products",
      "Machine Operator – Food Processing",
      "Machine Operator – Footwear Production",
      "Machine Operator – Glass",
      "Machine Operator – Hide and Skin Processing",
      "Machine Operator – Knitting",
      "Machine Operator – Other",
      "Machine Operator – Paper Products",
      "Machine Operator – Plastic Cablemaking",
      "Machine Operator – Plastic Compounding and Reclamation",
      "Machine Operator – Plastics Press",
      "Machine Operator – Sawmilling",
      "Machine Operator – Stone Processing",
      "Machine Operator – Textile Dyeing and Finishing",
      "Machine Operator – Yarn Carding and Spinning",
      "711711",
      "711911",
      "711112",
      "831199",
      "711711",
      "711113",
      "711712",
      "711713",
      "711999",
      "711311",
      "711511",
      "711512",
      "711514",
      "711313",
      "711114",
      "711714",
      "711716",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Meatworker: {
    aliases: [
      "Meat Boner and Slicer",
      "Meat Process Worker",
      "Meatworker – Boner and Slicer",
      "Meatworker – Butcher or Smallgoods Maker",
      "Meatworker – Meat Packer",
      "Meatworker – Meat Process Worker",
      "Meatworker – Meatworker's Labourer",
      "Meatworker – Poultry Process Worker",
      "Meatworker – Slaughterer",
      "831211",
      "831311",
      "831211",
      "351211",
      "832114",
      "831311",
      "831311",
      "831312",
      "831212",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Media - Television, Online and Print": {
    aliases: [
      "Art Director – Film, Television or Stage",
      "Director – Art Director – Film, Television or Stage",
      "Television Journalist",
      "Web Journalist",
      "Copywriter",
      "Extra (Film or Television)",
      "Film Editor",
      "Journalist (Including Cadet) – Photo",
      "Journalist (Including Cadet) – Print",
      "Journalist (Including Cadet) – Radio",
      "Journalist (Including Cadet) – Technical Writer",
      "Journalist (Including Cadet) – Television",
      "Journalist (Including Cadet) – Web or Online",
      "Newspaper Editor",
      "Newspaper Journalist",
      "Newsreader – Radio",
      "Newsreader – Television",
      "Presenter – Radio",
      "Presenter – Television",
      "Program Director – Television or Radio",
      "Sub Editor",
      "Technical Director – Film, Television, Radio or Stage",
      "Television Announcer",
      "Television Director",
      "212311",
      "212311",
      "212416",
      "212499",
      "212411",
      "211199",
      "212314",
      "212499",
      "212413",
      "212414",
      "212415",
      "212416",
      "212499",
      "212412",
      "212413",
      "212113",
      "212114",
      "212113",
      "212114",
      "212315",
      "212412",
      "212317",
      "212114",
      "212312",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Other Medical Practitioner": {
    aliases: [
      "Massage Therapist",
      "Masseur or Masseuse – Other",
      "Masseur or Masseuse – Thai",
      "Masseur or Masseuse – Therapeutic, Remedial",
      "Myotherapist",
      "Natural Remedy Consultant",
      "Naturopath",
      "Orthoptist",
      "Orthotist",
      "Osteopath",
      "Pathologist",
      "Pathology Collector",
      "Physio Assistant",
      "Physiologist – Exercise",
      "Physiologist – General",
      "Physiotherapist",
      "Podiatrist",
      "Prosthetist",
      "Psychotherapist",
      "Reflexologist",
      "Dermatologist",
      "Genetic Counsellor",
      "Herbalist – Chinese",
      "Herbalist – Western",
      "Chinese Medicine Practitioner",
      "Chiropodist",
      "Chiropractor",
      "Clinical Haematologist",
      "411611",
      "451511",
      "411611",
      "411611",
      "411611",
      "451511",
      "252213",
      "251412",
      "251912",
      "252112",
      "253915",
      "311216",
      "423314",
      "234915",
      "234599",
      "252511",
      "252611",
      "251912",
      "272314",
      "451511",
      "253911",
      "251999",
      "252214",
      "451513",
      "252214",
      "252611",
      "252111",
      "253313",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Pharmacist and Pharmacy Assistant": {
    aliases: [
      "Pharmacist – Industrial",
      "Pharmacy Technician",
      "311215",
      "251512",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Photographer: {
    aliases: [
      "Artist – Photographer",
      "Newspaper Photographer",
      "Photo Journalist",
      "Photographer",
      "Photographic Developer and Printer",
      "Photographic Laboratory Assistant",
      "Photographic Studio Assistant",
      "Director of Photography",
      "211311",
      "211311",
      "212499",
      "211311",
      "711411",
      "711411",
      "399915",
      "212313",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Pilots: {
    aliases: [
      "Pilot – Commercial – Aeroplane",
      "Pilot – Commercial – Helicopter",
      "Pilot – Commercial – Ship",
      "231111",
      "231114",
      "231213",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Plant Operator": {
    aliases: [
      "Plant Labourer – Cement Plant",
      "Plant Labourer – Chemical Plant",
      "Plant Labourer – Concrete Plant",
      "Plant Labourer – Gas Plant",
      "Plant Labourer – Glass Plant",
      "Plant Labourer – Petroleum Plant",
      "Plant Labourer – Plastics Plant",
      "Plant Operator – Bulk Materials Handling Plant",
      "Plant Operator – Cement Production",
      "Plant Operator – Chemical Plant",
      "Plant Operator – Concrete Batching Plant",
      "Plant Operator – Drilling Plant",
      "Plant Operator – Earthmoving Plant – General",
      "Plant Operator – Gas Plant",
      "Plant Operator – Logging Plant",
      "Plant Operator – Paving Plant",
      "Plant Operator – Petroleum Plant",
      "Plant Operator – Power Generation Plant",
      "Plant Operator – Railway Track Plant",
      "Plant Operator – Waste Water or Water Plant",
      "839911",
      "839912",
      "839911",
      "839912",
      "839916",
      "839912",
      "839211",
      "712912",
      "712913",
      "399211",
      "712914",
      "712211",
      "721211",
      "399212",
      "721112",
      "721913",
      "399212",
      "399213",
      "721914",
      "712921",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Politial: {
    aliases: ["Councillor", "Member of Parliament", "111311", "111312"],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Corrections Officers Wardens, and Governors": {
    aliases: [
      "Correctional Officer",
      "Guard – Prison",
      "Prison Governor",
      "Prison Officer or Warder",
      "442111",
      "442111",
      "139999",
      "442111",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Process Worker": {
    aliases: [
      "Process Worker – Assembly Line Worker",
      "Process Worker – Baking Factory",
      "Process Worker – Biscuit Packer",
      "Process Worker – Bread Packer",
      "Process Worker – Brewery",
      "Process Worker – Brickworks",
      "Process Worker – Cement Plant Hand or Labourer",
      "Process Worker – Cheesemaker",
      "Process Worker – Chemical Plant Hand or Labourer",
      "Process Worker – Chocolate Packer",
      "Process Worker – Cloth Cutter",
      "Process Worker – Clothing Factory Hand or Labourer",
      "Process Worker – Concrete Plant Hand or Labourer",
      "Process Worker – Confectioner",
      "Process Worker – Container Filler",
      "Process Worker – Dairy Products Maker",
      "Process Worker – Egg Grader",
      "Process Worker – Fabric or Textile Factory Hand or Labourer",
      "Process Worker – Fellmongery Hand or Labourer",
      "Process Worker – Fettler",
      "Process Worker – Food Processing Machine Operator",
      "Process Worker – Footwear Factory Hand or Labourer",
      "Process Worker – Fruit and Vegetable Classer",
      "Process Worker – Fruit and Vegetable Factory",
      "Process Worker – Fruit and Vegetable Packer",
      "Process Worker – Gas Plant Hand or Labourer",
      "Process Worker – Glass Plant Hand or Labourer",
      "Process Worker – Grain Mill",
      "Process Worker – Hide and Skin Processing Machine Operator",
      "Process Worker – Kiln Hand or Labourer",
      "Process Worker – Meat Boner and Slicer",
      "Process Worker – Meat or Abattoir",
      "Process Worker – Meat Packer",
      "Process Worker – Metal Worker",
      "Process Worker – Other",
      "Process Worker – Packer – Other",
      "Process Worker – Paint Factory Hand or Labourer",
      "Process Worker – Paper and Pulp Mill Worker",
      "Process Worker – Plastics Plant Hand or Labourer",
      "Process Worker – Poultry",
      "Process Worker – Product Examiner",
      "Process Worker – Product Grader",
      "Process Worker – Rag Cutter",
      "Process Worker – Rubber Factory Hand or Labourer",
      "Process Worker – Sawmill or Timber Yard Labourer",
      "Process Worker – Sawmilling Operator",
      "Process Worker – Seafood",
      "Process Worker – Seafood Packer",
      "Process Worker – Sheltered Workshop Hand or Labourer",
      "Process Worker – Slaughterer",
      "Process Worker – Stone Processing Machine Operator",
      "Process Worker – Sugar Mill",
      "Process Worker – Tannery Hand or Labourer",
      "832211",
      "831111",
      "832199",
      "832199",
      "831112",
      "839913",
      "839911",
      "831114",
      "839912",
      "832111",
      "839914",
      "839914",
      "839911",
      "831113",
      "832112",
      "831114",
      "839312",
      "839914",
      "839917",
      "839111",
      "831199",
      "839915",
      "839312",
      "831115",
      "832113",
      "839912",
      "839916",
      "831116",
      "711712",
      "839913",
      "831211",
      "831311",
      "832114",
      "839111",
      "839999",
      "832199",
      "839912",
      "839411",
      "839211",
      "831312",
      "839311",
      "839312",
      "839999",
      "839212",
      "839412",
      "711313",
      "831313",
      "832115",
      "839999",
      "831212",
      "711114",
      "831117",
      "839917",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Psychologists and Therapists": {
    aliases: [
      "Clinical Psychologist",
      "Counselling Psychologist",
      "Counsellor – Careers",
      "Counsellor – Drug and Alcohol",
      "Counsellor – Family and Marriage",
      "Counsellor – Genetic",
      "Counsellor – of Students",
      "Counsellor – Other",
      "Counsellor – Rehabilitation",
      "Counsellor – Sexual Assault",
      "Family and Marriage Counsellor",
      "Marriage Counsellor",
      "Organisational Psychologist",
      "Student Counsellor",
      "Therapist – Diversional",
      "Therapist – Massage",
      "Therapist – Medical Radiation",
      "Therapist – Myotherapist",
      "Therapist – Occupational",
      "Therapist – Other Complementary Health",
      "Therapist – Physiotherapist",
      "Therapist – Play",
      "Therapist – Psychotherapist",
      "Therapist – Speech",
      "Psychiatrist",
      "Psychologist – Clinical",
      "Psychologist – Community",
      "Psychologist – Counselling",
      "Psychologist – Educational",
      "Psychologist – Organisational",
      "Psychologist – Other",
      "Psychologist – Psychotherapist",
      "272311",
      "272399",
      "272111",
      "272112",
      "272113",
      "251999",
      "272115",
      "272199",
      "272114",
      "272199",
      "272113",
      "272113",
      "272313",
      "272115",
      "411311",
      "411611",
      "251212",
      "411611",
      "252411",
      "252299",
      "252511",
      "252299",
      "272314",
      "252712",
      "253411",
      "272311",
      "272399",
      "272399",
      "272312",
      "272313",
      "272399",
      "272314",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Public Servant": {
    aliases: [
      "Public Servant – Federal or State/Territory – Executive – Lower (Eg Federal EL1–2)",
      "Public Servant – Federal or State/Territory – Executive – Upper (Eg Federal Senior Executive Service)",
      "Public Servant – Federal or State/Territory – Head or Deputy Head of Govt Department, Body or Agency",
      "Public Servant – Federal or State/Territory – Non–Executive – Lower (Eg Federal APS 1–2)",
      "Public Servant – Federal or State/Territory – Non–Executive – Middle (Eg Federal APS 3–4)",
      "Public Servant – Federal or State/Territory – Non–Executive – Upper (Eg Federal APS 5–6)",
      "132411",
      "132411",
      "111111",
      "561000",
      "531000",
      "511112",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Religios PRactitioners": {
    aliases: ["Chaplain", "Clergy – Member Of", "Imam272211"],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Salespersons: {
    aliases: [
      "Company Rep. – Industrial",
      "Company Rep. – Medical and Pharmaceutical Products",
      "Company Rep. – Non–Technical Goods and Services",
      "Company Rep. – Real Estate",
      "Company Rep. – Retail Buying",
      "Company Rep. – Selling Door–To–Door",
      "Retail Assistant – Bottle Shop",
      "Retail Assistant – Building and Plumbing Supplies",
      "Retail Assistant – Business Broker",
      "Retail Assistant – Business Services",
      "Retail Assistant – Cars or Caravans (New or Used)",
      "Retail Assistant – Cashier",
      "Retail Assistant – Checkout Operator",
      "Retail Assistant – Chemist Shop",
      "Retail Assistant – Cinema or Theatre Food or Drink",
      "Retail Assistant – Commission Agent – Wholesale or Retail",
      "Retail Assistant – Company Rep. – Non–Technical Goods and Services",
      "Retail Assistant – Console Operator – Service Station",
      "Retail Assistant – Cosmetician",
      "Retail Assistant – Deli Assistant",
      "Retail Assistant – General",
      "Retail Assistant – IT",
      "Retail Assistant – Motor Vehicle Parts and Accessories",
      "Retail Assistant – New or Used Cars or Caravans",
      "Retail Assistant – Other",
      "Retail Assistant – Personal and Household Goods",
      "Retail Assistant – Pharmacy",
      "Retail Assistant – Post Office Clerk",
      "Retail Assistant – Program Seller",
      "Retail Assistant – Rental",
      "Retail Assistant – Sales Demonstrator or Merchandiser",
      "Retail Assistant – Showroom Worker – Retail",
      "Sales Assistant – Bottle Shop",
      "Sales Assistant – Building and Plumbing Supplies",
      "Sales Assistant – Business Broker",
      "Sales Assistant – Business Services",
      "Sales Assistant – Cars or Caravans (New or Used)",
      "Sales Assistant – Cashier",
      "Sales Assistant – Checkout Operator",
      "Sales Assistant – Chemist Shop",
      "Sales Assistant – Cinema or Theatre Food or Drink",
      "Sales Assistant – Console Operator – Service Station",
      "Sales Assistant – Cosmetician",
      "Sales Assistant – Deli Assistant",
      "Sales Assistant – General",
      "Sales Assistant – IT",
      "Sales Assistant – Motor Vehicle Parts and Accessories",
      "Sales Assistant – New or Used Cars or Caravans",
      "Sales Assistant – Other",
      "Sales Assistant – Personal and Household Goods",
      "Sales Assistant – Pharmacy",
      "Sales Assistant – Post Office Clerk",
      "Sales Assistant – Program Seller",
      "Sales Assistant – Rental",
      "Sales Assistant – Sales Demonstrator or Merchandiser",
      "Sales Assistant – Showroom Worker – Retail",
      "Sales Assistant – Street Vendor",
      "Sales Clerk",
      "Sales Consultant – Wholesale",
      "Sales Demonstrator",
      "Sales Representative",
      "Sales Representative – Building and Plumbing Supplies",
      "Sales Representative – Business Services",
      "Sales Representative – Car Parts and Accessories",
      "Sales Representative – Commission Agent – Wholesale or Retail",
      "Sales Representative – Company Rep. – Non–Technical Goods and Services",
      "Sales Representative – Door–To–Door Salesperson",
      "Sales Representative – Industrial Products",
      "Sales Representative – Information Technology",
      "Sales Representative – Medical and Pharmaceutical Products",
      "Sales Representative – Motor Vehicle Parts and Accessories",
      "Sales Representative – Other",
      "Sales Representative – Other Technical Products",
      "Sales Representative – Personal and Household Goods",
      "Salesperson – Bottle Shop",
      "Salesperson – Building and Plumbing Supplies",
      "Salesperson – Business Broker",
      "Salesperson – Business Services",
      "Salesperson – Cars or Caravans (New or Used)",
      "Salesperson – Cashier",
      "Salesperson – Checkout Operator",
      "Salesperson – Chemist Shop",
      "Salesperson – Cinema or Theatre Food or Drink",
      "Salesperson – Commission Agent – Wholesale or Retail",
      "Salesperson – Company Rep. – Non–Technical Goods and Services",
      "Salesperson – Console Operator – Service Station",
      "Salesperson – Cosmetician",
      "Salesperson – Deli Assistant",
      "Salesperson – General",
      "Salesperson – IT",
      "Salesperson – Motor Vehicle Parts and Accessories",
      "Salesperson – New or Used Cars or Caravans",
      "Salesperson – Other",
      "Salesperson – Personal and Household Goods",
      "Salesperson – Pharmacy",
      "Salesperson – Post Office Clerk",
      "Salesperson – Program Seller",
      "Salesperson – Rental",
      "Salesperson – Sales Demonstrator or Merchandiser",
      "Salesperson – Showroom Worker – Retail",
      "Salesperson – Street Vendor",
      "Salesperson – Wholesale",
      "225411",
      "225412",
      "611399",
      "612115",
      "639211",
      "621712",
      "621111",
      "611311",
      "612111",
      "611312",
      "621311",
      "631112",
      "631111",
      "621411",
      "621111",
      "611399",
      "611399",
      "631111",
      "621111",
      "621111",
      "621111",
      "621211",
      "611313",
      "621311",
      "621999",
      "611314",
      "621411",
      "621111",
      "621999",
      "621912",
      "639112",
      "621111",
      "621111",
      "611311",
      "612111",
      "611312",
      "621311",
      "631112",
      "631111",
      "621411",
      "621111",
      "631111",
      "621111",
      "621111",
      "621111",
      "621211",
      "611313",
      "621311",
      "621999",
      "611314",
      "621411",
      "621111",
      "621999",
      "621912",
      "639112",
      "621111",
      "621713",
      "591117",
      "611399",
      "639112",
      "611399",
      "611311",
      "611312",
      "611313",
      "611399",
      "611399",
      "621712",
      "225411",
      "225213",
      "225412",
      "611313",
      "611399",
      "225499",
      "611314",
      "621111",
      "611311",
      "612111",
      "611312",
      "621311",
      "631112",
      "631111",
      "621411",
      "621111",
      "611399",
      "611399",
      "631111",
      "621111",
      "621111",
      "621111",
      "621211",
      "611313",
      "621311",
      "621999",
      "611314",
      "621411",
      "621111",
      "621999",
      "621912",
      "639112",
      "621111",
      "621713",
      "611399",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Scientist: {
    aliases: [
      "Geologist",
      "Geophysicist",
      "Medical Physicist",
      "Metallurgist",
      "Meteorologist",
      "Metrologist",
      "Microbiologist",
      "Neuroscientist",
      "Physicist",
      "School Services Officer",
      "Scientist – Anatomist",
      "Scientist – Biochemist",
      "Scientist – Biologist",
      "Scientist – Biophysicist",
      "Scientist – Biotechnologist",
      "Scientist – Botanist",
      "Scientist – Cartographer",
      "Scientist – Conservation Officer",
      "Scientist – Conservator",
      "Scientist – Dietitian",
      "Scientist – Environmental Consultant",
      "Scientist – Environmental Scientist",
      "Scientist – Exercise Physiologist",
      "Scientist – Food Technologist",
      "Scientist – Geologist",
      "Scientist – Geophysicist",
      "Scientist – Industrial Chemist",
      "Scientist – IVF Embryologist",
      "Scientist – Life Scientist",
      "Scientist – Marine Biologist",
      "Scientist – Materials",
      "Scientist – Medical Laboratory Scientist",
      "Scientist – Medical Physicist",
      "Scientist – Metallurgist",
      "Scientist – Meteorologist",
      "Scientist – Metrologist",
      "Scientist – Microbiologist",
      "Scientist – Neuroscientist",
      "Scientist – Park Ranger",
      "Scientist – Physicist",
      "Scientist – Physiologist (General)",
      "Scientist – Research Chemist",
      "Scientist – Sleep",
      "Scientist – Soil Scientist",
      "Scientist – Spatial Scientist other than Surveyor or Cartographer",
      "Scientist – Surveyor",
      "234411",
      "234412",
      "234914",
      "234912",
      "234913",
      "234999",
      "234517",
      "234599",
      "234914",
      "422116",
      "234599",
      "234513",
      "234511",
      "234599",
      "234514",
      "234515",
      "232213",
      "234311",
      "234911",
      "251111",
      "234312",
      "234313",
      "234915",
      "234212",
      "234411",
      "234412",
      "234211",
      "234611",
      "234511",
      "234516",
      "234999",
      "234611",
      "234914",
      "234912",
      "234913",
      "234999",
      "234517",
      "234599",
      "234314",
      "234914",
      "234599",
      "234211",
      "234999",
      "234399",
      "232214",
      "232212",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  "Security Worker": {
    aliases: [
      "Security Consultant",
      "Security Door Installer",
      "Security Worker – Armoured Car Escort",
      "Security Worker – Bouncer",
      "Security Worker – Crowd Controller",
      "Security Worker – Night Watchperson",
      "Security Worker – Other Security Officer or Guard",
      "Security Worker – Payroll",
      "Security Worker – Railways Patrol Officer",
      "Security Worker – Retail Loss Prevention",
      "Security Worker – Security Consultant",
      "Security Worker – Security Guard",
      "Security Worker – Security Officer",
      "Security Worker – Security, Alarm or Surveillance Monitor",
      "442216",
      "821412",
      "442212",
      "442213",
      "442213",
      "442217",
      "442299",
      "442212",
      "442217",
      "442215",
      "442216",
      "442217",
      "442217",
      "442211",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
  Tradesperson: {
    aliases: [
      "Fabricator – Door or Window – Metal",
      "Fabricator – Fibreglass",
      "Fabricator – Metal",
      "Fabricator – Plastics",
      "Fitter – Automotive – Car Accessories",
      "Fitter – Automotive – Exhausts and Mufflers",
      "Fitter – Automotive – Radiators",
      "Fitter – Automotive – Tyre",
      "Fitter – Automotive – Windscreen",
      "Fitter – Shop",
      "Fitter – Welder",
      "Fitter (Trade)",
      "Sheet Metal Trades Worker",
      "322311",
      "711515",
      "322311",
      "711513",
      "899411",
      "899413",
      "899414",
      "899415",
      "899412",
      "331211",
      "323213",
      "323211",
      "322211",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.mechanic,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Warehousing, Picker/Packer, Forklift Driver": {
    aliases: [
      "Forklift Driver",
      "721311",
      "Warehousing",
      "Picker/Packer",
      "Meat Packer",
      "Packer – Biscuit",
      "Packer – Bread",
      "Packer – Chocolate",
      "Packer – Fruit and Vegetable",
      "Packer – Furniture",
      "Packer – Meat",
      "Packer – Other",
      "Packer – Seafood",
      "Chocolate Packer",
      "832114",
      "832199",
      "832199",
      "832111",
      "832113",
      "733113",
      "832114",
      "832199",
      "832115",
      "832111",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  Director: {
    aliases: [
      "Director – Audio",
      "Director – Casting",
      "Director – Child Care Centre",
      "Director – Executive",
      "Director – Film and Video Editor",
      "Director – Film, Television, Radio or Stage",
      "Director – Managing",
      "Director – Manufacturing Company",
      "Director – Music",
      "Director – Nursing",
      "Director – of Nursing (Including Assistant, Deputy, Executive and Clinical)",
      "Director – Publishing",
      "Director – Sales",
      "Director – Technical – Film, Television, Radio or Stage",
      "Director – Television or Radio Program",
      "Director – Wholesaling Company",
      "212399",
      "212399",
      "134111",
      "111111",
      "212314",
      "212312",
      "111111",
      "133512",
      "211212",
      "134212",
      "134212",
      "133512",
      "131112",
      "212317",
      "212315",
      "133312",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },

  "Other Occupation": {
    aliases: [
      "Dog Breeder",
      "Horse Breeder",
      "Cook",
      "Tennis Coach",
      "Chauffeur",
      "Surgical Nurse",
      "Pharmacist – Retail",
      "Pharmacy Assistant",
      "Abattoir Process Worker",
      "Aboriginal and Torres Strait Islander Education Worker",
      "Aboriginal and Torres Strait Islander Health Liaison Officer",
      "Aboriginal and Torres Strait Islander Health Worker",
      "Academic",
      "Acoustic Engineer",
      "Acupuncturist",
      "Admissions Clerk",
      "Aeroplane Pilot",
      "Agent – Customs",
      "Agent – Migration",
      "Agent – Stock and Station",
      "Agronomist",
      "Air Safety Inspector or Investigator",
      "Air Traffic Controller",
      "Aircraft Navigator",
      "Airways Surveyor",
      "Airworthiness Inspector",
      "Alumina Refinery Operator",
      "Ambassador",
      "Amusement Park Attendant – Rides",
      "Amusement Ride Operator",
      "Anaesthetic Technician",
      "Anaesthetist",
      "Analyst – Equities",
      "Analyst – Industry",
      "Analyst – IT Business",
      "Analyst – Market Research",
      "Analyst – Programmer",
      "Anatomist",
      "Announcer – Radio",
      "Announcer – Television",
      "Antique Dealer",
      "Apiarist",
      "Apparel Cutter",
      "Applications Programmer",
      "Aquaculture or Fisheries Scientist",
      "Aquaculture or Fisheries Technician",
      "Aquaculture Supervisor",
      "Aquaculture Worker",
      "Arborist",
      "Arc Welder",
      "Archaeologist",
      "Archbishop",
      "Architect",
      "Architectural Draftsperson",
      "Armoured Car Escort",
      "Aromatherapist",
      "Articled Clerk",
      "Asbestos Removalist",
      "Assembler",
      "Assembly Line Worker",
      "Assistant In Nursing",
      "Associate Editor",
      "Athlete",
      "Attendant – Amusement Park Rides",
      "Attendant – Bar",
      "Attendant – Boiler",
      "Attendant – Bottle Shop",
      "Attendant – Car Park",
      "Attendant – Car Wash",
      "Attendant – Cinema or Theatre – Selling Food or Drinks",
      "Attendant – Cinema or Theatre – Selling Tickets",
      "Attendant – Cinema or Theatre – Ushering",
      "Attendant – Creche",
      "Attendant – Crosswalk",
      "Attendant – Dark Room",
      "Attendant – Door",
      "Attendant – Gallery",
      "Attendant – Medical Theatre",
      "Attendant – Museum",
      "Attendant – Service Station or Garage",
      "Attendant – Swimming Pool (Lifeguard)",
      "Attendant – Vending Machine",
      "Auctioneer",
      "Audio Director",
      "Audio Engineer",
      "Audiologist",
      "Auditor",
      "Auditor – External",
      "Auditor – Internal",
      "Auditor – Quality",
      "Auditor – Skills",
      "Author",
      "Aviation Safety Inspector",
      "Back Hoe Operator",
      "Baking Factory Worker",
      "Band Member",
      "Bank Employee",
      "Bank Officer",
      "Bank Teller",
      "Banker",
      "Bed and Breakfast Owner Operator",
      "Bedding and Mattress Maker",
      "Bingo Caller",
      "Biochemist",
      "Biologist",
      "Biomedical Engineer",
      "Biophysicist",
      "Biosecurity Officer",
      "Biotechnologist",
      "Biscuit Packer",
      "Bishop",
      "Blacksmith",
      "Blasting Worker – Mining",
      "Boarding Kennel or Cattery Operator",
      "Boat Builder or Repairer",
      "Boatswain",
      "Bobcat Operator",
      "Body Artist",
      "Body Piercer",
      "Boiler Attendant",
      "Boilermaker",
      "Boner",
      "Book Binder",
      "Book Editor",
      "Bookmaker",
      "Bookmaker's Clerk",
      "Botanist",
      "Bottle Shop Attendant",
      "Bouncer",
      "Bread Carter",
      "Bread Packer",
      "Brewery Worker",
      "Brick Handler – Brickworks",
      "Bricklayer",
      "Bricklayer's Labourer",
      "Broadacre Crop Growers Nec",
      "Broadcast Transmitter Operator",
      "Broker – Business",
      "Broker – Commodities",
      "Broker – Futures Trader",
      "Broker – Stocks",
      "Brothel Keeper",
      "Builder – Boat",
      "Builder – Professional",
      "Builder – Project",
      "Builder – Wardrobe",
      "Building Designer",
      "Building Inspector",
      "Building Insulation Installer",
      "Building Services Engineer",
      "Building Technician or Associate",
      "Bulk Materials Handling Plant Operator",
      "Bulldozer Operator",
      "Bungy Jump Master",
      "Bus Conductor",
      "Bus Inspector",
      "Business Analyst – IT",
      "Business Broker",
      "Business Development Officer – Bank, etc.",
      "Business Development Officer – Loans",
      "Butcher",
      "Butler",
      "Buyer – Commodities",
      "Buyer – Retail Goods",
      "Buyer – Scrap Metal",
      "Cabinet Maker",
      "Cable Jointer or Repairer – Communications",
      "Cabler – Data and Telecommunications",
      "Cafe Worker",
      "Cafeteria Worker",
      "Calibration – Technician",
      "Camera Operator – Film, Television or Video",
      "Camera Repairer",
      "Cane Furniture Maker",
      "Canteen Assistant",
      "Canvas Goods Maker",
      "Car Accessories Fitter",
      "Car Detailer",
      "Car Park Attendant",
      "Car Salesperson",
      "Car Wash Attendant",
      "Caravan Salesperson",
      "Cardiac Technician",
      "Careers Adviser",
      "Careers Counsellor",
      "Caretaker",
      "Carpet Layer",
      "Cartographer",
      "Cash Processor",
      "Cashier",
      "Casting Director",
      "Caterer",
      "Catering Assistant",
      "Cattery Operator",
      "Cellar Hand – Winery",
      "Ceramic Artist",
      "Change Management Facilitator",
      "Checkout Operator",
      "Cheesemaker",
      "Chef",
      "Chemical Engineer",
      "Chemical Plant Hand or Labourer",
      "Chemical Plant Operator",
      "Chemical Production Machine Operator",
      "Chemist – Biochemist",
      "Chemist – Industrial or Research",
      "Chemist – Pharmacy",
      "Chemist Shop Assistant",
      "Chemistry Technician",
      "Chief Executive Officer",
      "Chief Information Officer",
      "Chimney Sweep",
      "Choreographer",
      "Cinema Attendant – Selling Food or Drink",
      "Cinema Attendant – Selling Tickets",
      "Civil Celebrant",
      "Civil Engineering Draftsperson",
      "Civil Engineering Technician or Associate",
      "Classer – Fruit and Vegetable",
      "Clerk",
      "Clerk – Accounts",
      "Clerk – Admissions",
      "Clerk – Articled",
      "Clerk – Bookmaker's",
      "Clerk – Coding",
      "Clerk – Cost",
      "Clerk – Filing",
      "Clerk – Freight or Shipping",
      "Clerk – Import–Export",
      "Clerk – Inquiry",
      "Clerk – Mail",
      "Clerk – Order",
      "Clerk – Other",
      "Clerk – Payroll",
      "Clerk – Post Office",
      "Clerk – Pricing",
      "Clerk – Production Tally",
      "Clerk – Purchasing",
      "Clerk – Receiving and Dispatching",
      "Clerk – Reservations",
      "Clerk – Sales",
      "Clerk – Scheduling",
      "Clerk – Shipping or Freight",
      "Clerk – Statistical",
      "Clerk – Stock",
      "Clerk – Stockbroking",
      "Clerk – Stores",
      "Clerk – Tab",
      "Clerk – Typist",
      "Clerk of Court",
      "Clinical Coder",
      "Clock and Watch Maker and Repairer",
      "Cloth Cutter",
      "Clothing Designer",
      "Clothing Factory Hand or Labourer",
      "Clothing Pattern Maker",
      "Club Licensee",
      "Coach Builder",
      "Coal Miner",
      "Coding Clerk",
      "Coffee Roaster",
      "Comedian",
      "Commission Agent – Wholesale or Retail",
      "Commodities Broker",
      "Communications Equipment Tradesperson",
      "Communications Officer – Public Relations",
      "Community Arts Worker",
      "Community Psychologist",
      "Community Support Worker",
      "Company Secretary – Corporate Governance",
      "Compliance Officer – Quarantine",
      "Composer",
      "Conductor – Transport",
      "Confectioner",
      "Conference and Event Organiser",
      "Conservation Officer",
      "Conservator",
      "Console Operator – Service Station",
      "Contact Centre Team Leader",
      "Container Filler",
      "Continuity Person",
      "Conveyancer",
      "Cooper",
      "Coppersmith",
      "Coroner",
      "Corporate General Manager",
      "Corporate Services Manager",
      "Corporate Treasurer",
      "Correctional Institution Governor",
      "Cost Clerk",
      "Costume Maker",
      "Cotton Grower",
      "Courier",
      "Court Bailiff or Sheriff",
      "Court Orderly",
      "Court Registrar – Children's, County, District, High, Local, Magistrate's, Petty Sessions",
      "Court Registrar – Federal, Family, Supreme, Appeals",
      "Court Reporter",
      "Craft Worker",
      "Craftworker",
      "Crane Chaser",
      "Crane Operator",
      "Credit and Loans Officer",
      "Credit Union Employee",
      "Crossing Supervisor",
      "Crosswalk Attendant",
      "Croupier",
      "Crowd Controller",
      "Curtain Installer",
      "Curtain Maker",
      "Custodial Officer",
      "Customs Agent",
      "Customs Investigator or Officer",
      "Dairy Products Maker",
      "Dairy Quality Assurance Inspector",
      "Dark Room Attendant",
      "Debt Collector",
      "Deckhand",
      "Decorator – Cake",
      "Decorator – Floral",
      "Decorator – Interior",
      "Decorator – Window Dresser",
      "Deli Assistant",
      "Derivatives Trader",
      "Designer – Building",
      "Designer – Clothing or Fashion",
      "Designer – Furniture",
      "Designer – Graphic",
      "Designer – Industrial",
      "Designer – Interior",
      "Designer – Jewellery",
      "Designer – Multimedia",
      "Designer – Web",
      "Desktop Publisher",
      "Detailer – Aircraft",
      "Detailer – Roof Truss",
      "Detailer – Structural Steel",
      "Detailer – Vehicle",
      "Detective – Private",
      "Developer Programmer",
      "Devops Engineer",
      "Diagnostic and Interventional Radiologist",
      "Die Maker",
      "Die Setter – Metals",
      "Die Setter – Plastics",
      "Dietitian",
      "Disabilities Support Officer",
      "Disc Jockey – Nightclub",
      "Disc Jockey – Other Than Nightclub",
      "Dishwasher",
      "Distiller",
      "Diver (Open Water)",
      "Diversional Therapist",
      "Diving Instructor (Open Water)",
      "Door Attendant",
      "Door Person",
      "Door–To–Door Salesperson",
      "Draftsperson – Architectural",
      "Draftsperson – Civil Engineering or Structural",
      "Draftsperson – Electrical Engineering",
      "Draftsperson – Electronic Engineering",
      "Draftsperson – Mechanical Engineering",
      "Drainage, Sewerage and Stormwater Labourer",
      "Drainer",
      "Drainer or Drainlayer",
      "Dredge Operator",
      "Dressmaker",
      "Driller",
      "Driller's Assistant",
      "Drilling Plant Operator",
      "Drink Waiter",
      "Driving Instructor",
      "Drug and Alcohol Counsellor",
      "Drummer",
      "Early Childhood Worker",
      "Earth Science Technician",
      "Earthmoving Labourer",
      "Earthmoving Plant Operator – General",
      "Economist",
      "Editor – Associate or Sub (Print)",
      "Editor – Book or Script",
      "Editor – Film, Video or Television",
      "Editor – Newspaper or Periodical",
      "Editor – Sound",
      "Education Advisor",
      "Education Reviewer",
      "Educational Psychologist",
      "Egg Grader",
      "Electoral Officer",
      "Electorate Officer",
      "Electrical Appliance Servicer",
      "Electrical Engineer",
      "Electrical Engineering Draftsperson",
      "Electrical Engineering Technician",
      "Electrical Fitter",
      "Electrical Lines Worker",
      "Electrical Tester",
      "Electronic Engineering Draftsperson",
      "Electronic Engineering Technician",
      "Electronic Game Developer",
      "Electronics Tester",
      "Electroplater",
      "Employment Consultant",
      "Endocrinologist",
      "Engine or Boiler Operator",
      "Engraver",
      "Enquiry Clerk",
      "Entomologist",
      "Environmental Adviser",
      "Environmental Auditor",
      "Environmental Consultant",
      "Environmental Engineer",
      "Environmental Officer",
      "Environmental Scientist",
      "Equities Analyst",
      "Estate Agent",
      "Estimator",
      "Exam Supervisor",
      "Excavator Operator",
      "Executive – Chief Executive Officer",
      "Executive – Executive Director",
      "Executive Assistant",
      "Executive Director",
      "Exercise Physiologist",
      "Exhaust and Muffler Fitter",
      "Exporter",
      "Faculty Head",
      "Family Support Worker",
      "Farrier",
      "Fashion Designer",
      "Fast Food Cook",
      "Faults Consultant – Taking Reports of Faults",
      "Fellmongery Hand or Labourer",
      "Fence Erector",
      "Fettler",
      "Fibreglasser",
      "Fibrous Plasterer",
      "Filing Clerk",
      "Film Director",
      "Fire Protection Equipment Technician",
      "Fire Risk Assessor",
      "Fire Safety Officer",
      "First Aid Officer",
      "First Aid Trainer",
      "Fish and Chip Cook",
      "Fish Hatchery Manager",
      "Fisheries Officer",
      "Fishing Hand",
      "Fishing Leading Hand",
      "Fitter and Turner",
      "Fleet Manager",
      "Flight Engineer",
      "Flight Service Officer – Air Traffic Control",
      "Floor Finisher",
      "Floor Sander and Polisher",
      "Floor Tile Layer – Carpet, Lino or Cork",
      "Floor Tiler – Ceramic, Slate or Clay",
      "Florist",
      "Flower Grower",
      "Flying Instructor",
      "Food Preparation Assistant",
      "Food Processing Machine Operator",
      "Food Technologist",
      "Forms Designer",
      "Freight Clerk",
      "Freight Handler – Road or Rail",
      "French Polisher",
      "Front End Loader Operator",
      "Fruit and Vegetable Factory Worker",
      "Fruit and Vegetable Inspector",
      "Fruit and Vegetable Packer",
      "Fruit Grower",
      "Fruit Picker",
      "Functions Coordinator",
      "Funds Administrator",
      "Furnace Operator – Metals",
      "Furniture Designer",
      "Furniture Finisher",
      "Furniture Maker",
      "Furniture Packer",
      "Furniture Removalist – Driver",
      "Furniture Removalist's Assistant",
      "Futures Trader",
      "Gallery or Museum Guide",
      "Gallery Technician",
      "Galvaniser",
      "Gaming Attendant",
      "Gaming Worker",
      "Ganger – Earthmoving Labourer or Digger",
      "Ganger – Paving and Surfacing Labourer",
      "Ganger – Railway Track Worker",
      "Ganger – Road Maintenance Worker",
      "Garage Attendant",
      "Garbage Collector",
      "Gas Plant Hand or Labourer",
      "Gas Plant Operator",
      "Gasfitter",
      "Gem Cutter and Polisher",
      "General Manager – Corporate",
      "Geographer",
      "Geographic Information Systems Manager",
      "Geotechnical Engineer",
      "Glass Machine Operator",
      "Glass Plant Hand or Labourer",
      "Glassware Maker",
      "Glazier",
      "Goldsmith",
      "Governess – Child Care",
      "Governess – Teaching (Pre–Primary)",
      "Governess – Teaching (Primary Level)",
      "Governess – Teaching (Secondary Level)",
      "Grader Operator",
      "Grain Mill Worker",
      "Grain, Oilseed, Pulse or Pasture Grower or Field Crop Grower",
      "Graphic Designer",
      "Graphic Reproduction Tradesperson",
      "Grave Digger",
      "Guard – Payroll",
      "Guard – Train or Railway",
      "Guitarist",
      "Gunsmith",
      "Gym Instructor",
      "Hair Salon Assistant",
      "Hamburger Cook or Maker",
      "Handyperson",
      "Hansard Reporter",
      "Hat Maker",
      "Health Inspector",
      "Health Promotion Officer",
      "Helicopter Pilot",
      "Hide and Skin Processing Machine Operator",
      "Hire Car Driver",
      "Historian",
      "Hoist Operator",
      "Holistic Pulser",
      "Home Companion",
      "Homeopath",
      "Hospital Orderly",
      "Host – Casino",
      "Host – Dining Room",
      "Hostel Parent",
      "Housekeeping",
      "Human Resources Manager",
      "Human Resources Officer",
      "Hunter–Trapper",
      "Hunting Guide",
      "Hydrogeologist",
      "Ice Cream Van Vendor",
      "Illustrator",
      "Immigration Officer",
      "Importer",
      "Import–Export Clerk",
      "Industrial Chemist",
      "Industrial Designer",
      "Industrial Engineer",
      "Industrial Pharmacist",
      "Industrial Relations Manager",
      "Industrial Relations Officer",
      "Industry Analyst",
      "Information Officer",
      "Inquiry Clerk",
      "Installer – Building Insulation",
      "Installer – Curtain",
      "Installer – Home Improvements",
      "Installer – Security Door",
      "Interior Decorator",
      "Interior Designer",
      "Internal Auditor",
      "Interpreter",
      "Interviewer – Surveys or Market Research",
      "Invigilator",
      "Iridologist",
      "Iron Worker",
      "Ironer or Presser – Laundry",
      "Irrigation Assistant",
      "Irrigation Designer",
      "Irrigation Technician",
      "IT Business Development Manager",
      "IVF Embryologist",
      "Janitor",
      "Jeweller",
      "Jewellery Designer",
      "Joiner",
      "Judicial Registrar",
      "Kennel Hand",
      "Keno Terminal Operator",
      "Key Account Manager",
      "Key Cutter",
      "Keyboard Operator",
      "Kiln Hand or Labourer",
      "Kiln Operator – Metals",
      "Kinesiologist",
      "Kitchen Hand",
      "Knife Sharpener",
      "Knitting Machine Operator",
      "Knowledge Manager",
      "Laboratory Manager",
      "Lagger",
      "Land Economist",
      "Landcare Facilitator",
      "Landscape Architect",
      "Language Tutor (Private Tuition)",
      "Laundrette Owner",
      "Laundry Worker",
      "Lay Preacher",
      "Leaflet Deliverer",
      "Leather Goods Maker",
      "Liaison Officer",
      "Librarian",
      "Library Assistant",
      "Library Officer",
      "Library Technician",
      "Life Assurance Representative",
      "Life Science Technician",
      "Life Scientist",
      "Lifeguard",
      "Lift Operator",
      "Lighting Technician",
      "Linemarker",
      "Lines Worker – Electrical",
      "Livestock Husbandry Worker",
      "Loadmaster – Aircraft",
      "Loans Officer",
      "Lobbyist",
      "Local Government Legislator",
      "Locksmith",
      "Locomotive Driver",
      "Logging Plant Operator",
      "Logging Worker – Logging Plant Operator",
      "Lorry Driver",
      "Luggage Porter",
      "Machine Shorthand Reporter",
      "Machinist – Metal",
      "Machinist – Printing",
      "Machinist – Textile Sewing",
      "Magistrate",
      "Mail Clerk",
      "Mailing Service Hand or Labourer",
      "Maintenance Fitter",
      "Maintenance Planner",
      "Management Consultant",
      "Managing Director",
      "Manicurist",
      "Manufacturer",
      "Manufacturing Company Director",
      "Marine Biologist",
      "Marine Certification and Surveillance Manager",
      "Marine Engineer",
      "Marine Navigator",
      "Marine Safety Officer",
      "Marine Steward",
      "Marine Surveyor",
      "Market Research Analyst",
      "Market Research Interviewer",
      "Master Fisher",
      "Materials Engineer",
      "Materials Recycler",
      "Materials Scientist",
      "Mechanical Engineer",
      "Mechanical Engineering Draftsperson",
      "Media Officer",
      "Media Planner",
      "Medical Administrator",
      "Medical Laboratory Scientist",
      "Medical Laboratory Technician",
      "Medical Radiation Therapist",
      "Medical Receptionist",
      "Medical Technician – Anaesthetic",
      "Medical Technician – Cardiac",
      "Medical Technician – Medical Laboratory",
      "Medical Technician – Operating Theatre",
      "Medical Technician – Other",
      "Medical Technician – Pharmacy",
      "Medical Typist",
      "Merchandiser",
      "Merchant Seaman",
      "Messenger",
      "Metal Fabricator",
      "Metal Machinist",
      "Metal Polisher",
      "Metal Press Operator",
      "Metal Sprayer",
      "Metal Worker",
      "Metallurgical and Materials Technician",
      "Meter Reader",
      "Microphone Boom Operator",
      "Midwife",
      "Migration Agent",
      "Milk Vendor",
      "Miller – Cement",
      "Miller – Flour or Grain",
      "Miller – Timber",
      "Miller – Tyres",
      "Milliner",
      "Mine Deputy",
      "Mine Supervisor",
      "Miner",
      "Mining Blasting Worker",
      "Mining Engineer",
      "Mining Labourer",
      "Mining Technician",
      "Minister of Religion",
      "Missionary",
      "Model",
      "Model Maker – Metal",
      "Model Maker – Plastic",
      "Monk",
      "Motion Picture Camera Operator",
      "Motion Picture Projectionist",
      "Motor Vehicle Accessories Fitter",
      "Motor Vehicle Body Builder",
      "Motor Vehicle Licence Inspector",
      "Motor Vehicle Salesperson",
      "Motor Vehicle Trimmer",
      "Motor Vehicle Wrecker",
      "Mountain Guide",
      "Muffler Repairer",
      "Multimedia Designer",
      "Multimedia Specialist",
      "Museum or Gallery Guide",
      "Museum Registrar",
      "Museum Technician",
      "Mushroom Picker",
      "Music Director",
      "Music Researcher",
      "Musical Instrument Repairer",
      "Musicologist",
      "Mussel Opener",
      "Naval Architect",
      "Navigator – Aircraft",
      "Navigator – Marine",
      "New Car Salesperson",
      "Newspaper Deliverer",
      "Night Filler",
      "Night Watchperson",
      "Noxious Weeds and Pest Inspector",
      "Nuclear Medicine Technologist",
      "Nurseryperson",
      "Nursing Assistant or Aide",
      "Nursing Clinical Director",
      "Nursing Director (Including Assistant, Deputy, Executive and Clinical)",
      "Nut Grower",
      "Nutrition Assistant",
      "Occupation Not Listed",
      "Occupational Health and Safety Adviser",
      "Occupational Medicine Specialist",
      "Occupational Therapist",
      "Oceanographer",
      "Office Secretary or Stenographer",
      "Office Worker",
      "Oil Rig Worker – Driller",
      "Oil Rig Worker – Operating Crane",
      "Oil Rig Worker – Other",
      "Opal Miner",
      "Operating Theatre Technician",
      "Operator – Amusement Ride",
      "Operator – Chemical Plant",
      "Operator – Gas Plant",
      "Operator – Petroleum Plant",
      "Operator – Power Generation Plant",
      "Operator – Switchboard",
      "Operator – Tractor",
      "Ophthalmic Technician",
      "Optical Dispenser",
      "Optometrist",
      "Order Clerk",
      "Orderly – Hospital",
      "Organist",
      "Other Draftsperson",
      "Otorhinolaryngologist",
      "Out of School Hours Care Worker",
      "Outdoor Adventure Instructor",
      "Owner–Driver – Bus",
      "Paint Factory Hand or Labourer",
      "Paint Maker",
      "Painting Trades Worker",
      "Panel Beater",
      "Paper Mill Operator",
      "Paper Mill Worker",
      "Paper Products Machine Operator",
      "Paper Products Maker",
      "Paperhanger",
      "Park Ranger",
      "Parking Inspector",
      "Parliamentarian",
      "Parole Officer",
      "Passenger Coach Driver",
      "Pasta Maker",
      "Patents Examiner",
      "Patternmaker–Grader – Textiles",
      "Paving and Surfacing Labourer",
      "Paving Plant Operator",
      "Payroll Clerk",
      "Payroll Guard",
      "Payroll Officer",
      "Penetration Tester",
      "Performing Artist",
      "Periodical Editor",
      "Personal Assistant",
      "Personal Care Assistant",
      "Personnel Officer",
      "Pest and Noxious Weeds Inspector",
      "Pest Control Technician",
      "Pet Groomer",
      "Pet Minder",
      "Pet Sitter",
      "Petroleum Engineer",
      "Petroleum Plant Operator",
      "Phlebotomist",
      "Pianist",
      "Piano Tuner",
      "Picture Framer",
      "Pizza Chef or Maker",
      "Pizza Deliverer",
      "Planner – Town",
      "Planner – Urban and Regional",
      "Plasterer",
      "Plastic and Reconstructive Surgeon",
      "Plastic Cablemaking Machine Operator",
      "Plastic Compounding and Reclamation Machine Operator",
      "Plastics Fabricator or Welder",
      "Plastics Plant Hand or Labourer",
      "Plastics Press Machine Operator",
      "Plastics Technician",
      "Plate Maker – Newspaper/Printing",
      "Play Therapist",
      "Plumbing Inspector",
      "Poker Machine Servicer",
      "Polymer Scientist",
      "Porter – Luggage",
      "Post Office Clerk",
      "Postal Delivery Officer",
      "Postal Sorting Officer",
      "Potter or Ceramic Artist",
      "Poultry Process Worker",
      "Powder Monkey",
      "Power Generation Plant Operator",
      "Pre–School Aide",
      "Pressure Welder",
      "Pricing Clerk",
      "Priest",
      "Primary Products Quality Assurance Officer",
      "Print Finisher",
      "Print Journalist",
      "Printer – Photographic Developer and Printer",
      "Printer – Screen",
      "Printer – Small Offset",
      "Printer's Assistant",
      "Printer's Hand",
      "Printing Machinist",
      "Printing Table Worker",
      "Procurement Officer",
      "Procurement Specialist",
      "Producer – Media",
      "Product Examiner",
      "Product Grader",
      "Product Tester",
      "Production Assistant – Film, Television, Radio or Stage",
      "Production Nursery Grower",
      "Production or Plant Engineer",
      "Production Tally or Scheduling Clerk",
      "Project Builder",
      "Project Coordinator",
      "Projectionist – Film",
      "Proofreader",
      "Prospector",
      "Public Relations Officer",
      "Publishing Director",
      "Pulp Mill Operator",
      "Pulp Mill Worker",
      "Purchasing Officer or Clerk",
      "Quality Auditor",
      "Quantity Surveyor",
      "Quarantine Inspector",
      "Quilter",
      "Rabbi",
      "Racecourse Official",
      "Racing Car Driver",
      "Radiation Oncologist",
      "Radiator Fitter",
      "Radio Announcer",
      "Radio Director",
      "Radio Dispatcher",
      "Radio Journalist",
      "Radio Technician – Domestic Repairs",
      "Radio Traffic Controller",
      "Radiocommunications Technician",
      "Radiographer",
      "Radiologist – Diagnostic and Interventional",
      "Radiologist – Radiation Oncologist",
      "Rag Cutter",
      "Railway Worker – Guard",
      "Railway Worker – Labourer",
      "Railway Worker – Patrol Officer",
      "Railway Worker – Signal Operator",
      "Railway Worker – Station Assistant",
      "Railway Worker – Steward",
      "Railway Worker – Ticket Collector",
      "Railway Worker – Ticket Seller",
      "Railway Worker – Track Plant Operator",
      "Railway Worker – Track Worker",
      "Ranger – Parks",
      "Real Estate Agent",
      "Real Estate Salesperson",
      "Receiving and Dispatching Clerk",
      "Receptionist",
      "Receptionist – General",
      "Receptionist – Medical",
      "Recreation Officer",
      "Recruitment Consultant",
      "Recruitment Officer",
      "Recycling or Rubbish Collector",
      "Recycling Worker",
      "Referee",
      "Refuge Worker",
      "Registrar – Judicial",
      "Registrar – Museum",
      "Registrar – School",
      "Registrar – TAFE",
      "Registrar – University",
      "Rehabilitation Counsellor",
      "Religious Assistant",
      "Religious Leader",
      "Removalist",
      "Rental Salesperson",
      "Repairer – Communications Cable",
      "Repairer – Electrical Appliances",
      "Repairer – Exhausts and Mufflers",
      "Repairer – Musical Instruments",
      "Repairer – Radiators",
      "Repairer – Shoe",
      "Repairer – Television",
      "Research Chemist",
      "Reservations Clerk",
      "Resident Medical Officer",
      "Residential Care Assistant – Child or Youth",
      "Residential Care Officer",
      "Respiratory Scientist",
      "Respiratory Technician",
      "Rheumatologist",
      "Rigger – Boat",
      "Road Maintenance Worker",
      "Road Roller Operator",
      "Road Traffic Controller",
      "Roof Tiler",
      "Roof Truss Detailer",
      "Room Attendant",
      "Rubber Factory Hand or Labourer",
      "Rubbish or Recycling Collector",
      "Safety Inspector",
      "Sailmaker",
      "Sailor – Commercial/Merchant",
      "Sand-blaster",
      "Sandwich Hand",
      "Saw Doctor",
      "Saw Operator – Meat",
      "Saw Operator – Panel Saw",
      "Saw Sharpener",
      "Sawmill Labourer",
      "Sawmilling Operator",
      "Scaffolder",
      "School Assistant",
      "School Crossing Supervisor",
      "School Laboratory Technician",
      "Scrap Merchant",
      "Screen Printer",
      "Script Editor",
      "Seafarer",
      "Seafood Packer",
      "Seafood Process Worker",
      "Securities and Finance Dealer",
      "Semi-Trailer Driver",
      "Senior Beef Cattle Station Worker",
      "Senior Piggery Stockperson",
      "Service Cashier",
      "Service Station Attendant",
      "Servicer – Electrical Appliances",
      "Sewing Machinist",
      "Sexual Assault Counsellor",
      "Shearer",
      "Shelf Filler",
      "Sheltered Workshop Hand or Labourer",
      "Shipping Clerk",
      "Ship's Captain or Master",
      "Ship's Officer",
      "Ship's Purser",
      "Ship's Surveyor",
      "Shipwright",
      "Shoemaker or Repairer",
      "Shop Assistant – Bottle Shop",
      "Shop Assistant – Building and Plumbing Supplies",
      "Shop Assistant – Business Services",
      "Shop Assistant – Cars or Caravans (new or used)",
      "Shop Assistant – Cashier",
      "Shop Assistant – Checkout Operator",
      "Shop Assistant – Chemist Shop",
      "Shop Assistant – Console Operator – Service Station",
      "Shop Assistant – Cosmetician",
      "Shop Assistant – Deli Assistant",
      "Shop Assistant – General",
      "Shop Assistant – IT",
      "Shop Assistant – Motor Vehicle Parts and Accessories",
      "Shop Assistant – New or Used Cars or Caravans",
      "Shop Assistant – Other",
      "Shop Assistant – Personal and Household Goods",
      "Shop Assistant – Pharmacy",
      "Shop Assistant – Post Office Clerk",
      "Shop Assistant – Program Seller",
      "Shop Assistant – Rental",
      "Shop Assistant – Sales Demonstrator or Merchandiser",
      "Shop Assistant – Showroom Worker – Retail",
      "Shop Fitter",
      "Short Order Cook",
      "Shot Firer",
      "Showroom Worker – Retail",
      "Sign Erector",
      "Signwriter",
      "Silversmith",
      "Ski Instructor",
      "Skills Auditor",
      "Skydiving Instructor",
      "Slaughterer",
      "Sleep Scientist",
      "Small Offset Printer",
      "Smallgoods Maker",
      "Snack Bar Assistant",
      "Soccer Player",
      "Social Scientist",
      "Social Security Assessor",
      "Social Worker",
      "Software Designer",
      "Software Developer",
      "Software Engineer",
      "Software Tester",
      "Soil Scientist",
      "Soil Technician",
      "Solicitor",
      "Solid Plasterer",
      "Sonographer",
      "Sound Engineer or Technician",
      "Spatial Science Technician",
      "Spatial Scientist – Other",
      "Spatial Scientist Other Than Surveyor or Cartographer",
      "Special Effects Person",
      "Speech Pathologist",
      "Speech Therapist",
      "Squash Player",
      "Stable hand",
      "Staff Development Nurse",
      "Stage Director",
      "Stagehand",
      "State Governor",
      "Steel Erector – Structural",
      "Steel Fixer",
      "Stenographer",
      "Sterilisation Technician",
      "Stevedore",
      "Steward – Food and Beverage",
      "Steward – Racing",
      "Steward – Railway",
      "Stock and Station Agent",
      "Stock Clerk",
      "Stock Exchange Dealer",
      "Stockbroker",
      "Stockbroking Clerk",
      "Stone Processing Machine Operator",
      "Stonemason",
      "Stores Clerk",
      "Street Vendor",
      "Streetsweeper Operator",
      "Structural Draftsperson",
      "Structural Engineer",
      "Structural Steel Detailer",
      "Studio Hand",
      "Sugar Cane Grower",
      "Sugar Mill Worker",
      "Supply Chain Analyst",
      "Surveying Technician",
      "Surveyor – Airways",
      "Surveyor – Airworthiness",
      "Surveyor – Land, Engineering, Mining, Etc.",
      "Surveyor – Marine",
      "Surveyor – Quantity",
      "Surveyor – Ships",
      "Surveyor's Assistant",
      "Swimmer",
      "Swimming Instructor",
      "Swimming Pool Attendant – Lifeguard",
      "Switchboard Operator",
      "Tab Clerk",
      "Tablehand – Printing",
      "TAFE Registrar",
      "Tailor",
      "Tanker Driver",
      "Tannery Hand or Labourer",
      "Tattooist",
      "Taxidermist",
      "Technical Cable Jointer",
      "Technical Writer",
      "Technician – Building",
      "Technician – Calibration",
      "Technician – Chemistry",
      "Technician – Civil Engineering",
      "Technician – Electrical Engineering",
      "Technician – Electronic Engineering",
      "Technician – Fire Protection Equipment",
      "Technician – IT Hardware",
      "Technician – Laboratory – Earth Science or Soil",
      "Technician – Laboratory – Life Science",
      "Technician – Laboratory – School",
      "Technician – Library",
      "Technician – Lighting",
      "Technician – Medical – Anaesthetic",
      "Technician – Medical – Cardiac",
      "Technician – Medical – Operating Theatre",
      "Technician – Medical – Other",
      "Technician – Medical – Pharmacy",
      "Technician – Medical Laboratory",
      "Technician – Metallurgical and Materials",
      "Technician – Mining",
      "Technician – Museum or Gallery",
      "Technician – Ophthalmic",
      "Technician – Plastics",
      "Technician – Radio (Domestic)",
      "Technician – Radiocommunications",
      "Technician – Sound",
      "Technician – Sterilisation",
      "Technician – Surveying or Spatial Science",
      "Technician – Video",
      "Telecommunications and Data Cabler",
      "Telecommunications Cable Jointer or Repairer",
      "Telecommunications Engineer",
      "Telecommunications Field Engineer",
      "Telecommunications Network Engineer",
      "Telecommunications Network Planner",
      "Telecommunications Technical Officer",
      "Telecommunications Trades Assistant",
      "Telemarketer",
      "Telephonist",
      "Television Equipment Operator",
      "Television Servicer or Repairer",
      "Television Traffic Controller",
      "Teller – Bank",
      "Textile Dyeing and Finishing Machine Operator",
      "Textile Factory Hand or Labourer",
      "Textile Sewing Machinist",
      "Theatre Attendant – Medical",
      "Theatre Attendant – Selling Food or Drink",
      "Theatre Attendant – Selling Tickets",
      "Theatre Attendant – Ushering",
      "Theatrical Dresser",
      "Ticket Collector",
      "Ticket Seller",
      "Ticket Writer",
      "Tiler",
      "Timber Yard Worker",
      "Toolmaker",
      "Tour Bus Driver",
      "Tourist Adviser or Officer",
      "Tourist Guide",
      "Town Planner",
      "Track Rider",
      "Tractor Operator",
      "Trade Union Officer, Official Organiser or Representative",
      "Trade Union Secretary",
      "Trades Assistant",
      "Traffic Controller – Radio",
      "Traffic Controller – Road",
      "Traffic Controller – Television",
      "Traffic Inspector",
      "Train Conductor",
      "Train Controller",
      "Train Driver",
      "Train Examiner",
      "Tram Conductor",
      "Tram Driver",
      "Translator",
      "Transport Conductor",
      "Transport Dispatcher",
      "Transport Driver",
      "Transport Engineer",
      "Tree Faller",
      "Tree Worker",
      "Trekking Guide",
      "Tribunal Member",
      "Trolley Collector",
      "Trust Officer",
      "Tunneller",
      "Turf Grower",
      "Turner – Metal",
      "Turner – Porcelain",
      "Typesetter",
      "Typist",
      "Tyre Fitter",
      "Tyre Retreader",
      "Union Officer, Official Organiser or Representative",
      "Union Secretary",
      "University Registrar",
      "University Tutor",
      "Urban and Regional Planner",
      "Urologist",
      "Usability Architect",
      "Used Car Salesperson",
      "User Experience Designer (ICT)",
      "Usher",
      "Van Driver",
      "Vascular Surgeon",
      "Vegetable Picker",
      "Vehicle Body Builder",
      "Vehicle Trimmer",
      "Vending Machine Attendant",
      "Vending Machine Servicer",
      "Video Editor",
      "Video Technician – Repairs",
      "Vineyard Worker",
      "Vision Mixer – Television",
      "Vocalist",
      "Waiter",
      "Waitress",
      "Wall Tiler",
      "Ward Assistant",
      "Wardrobe Builder",
      "Wardrobe Coordinator or Assistant",
      "Waste Water Plant Operator",
      "Watch and Clock Maker and Repairer",
      "Water Inspector",
      "Water Plant Operator",
      "Waterside Worker",
      "Weaver",
      "Web Programmer",
      "Weighbridge Operator",
      "Welder",
      "Wharf Labourer",
      "Whitewater Rafting Guide",
      "Wholesaler",
      "Wholesaling Company Director",
      "Window Dresser",
      "Windscreen Fitter",
      "Wine Grape Grower",
      "Wine Maker",
      "Winery Cellar Hand",
      "Wool Buyer",
      "Wool Classer",
      "Wool Handler",
      "Word Processing Operator",
      "Workplace Relations Adviser",
      "Yarn Carding and Spinning Machine Operator",
      "Youth Worker",
      "Zookeeper",
      "Zookeeper",
      "Zoologist",
      "121399",
      "121316",
      "351411",
      "452316",
      "731111",
      "254424",
      "251513",
      "621411",
      "831311",
      "422111",
      "411511",
      "411511",
      "242111",
      "233999",
      "252211",
      "542112",
      "231111",
      "591212",
      "224913",
      "611112",
      "234115",
      "231199",
      "231112",
      "231199",
      "231199",
      "231199",
      "712311",
      "139999",
      "711999",
      "711999",
      "311211",
      "253211",
      "222299",
      "224712",
      "261111",
      "225112",
      "261311",
      "234599",
      "212113",
      "212114",
      "142112",
      "121311",
      "393211",
      "261312",
      "234116",
      "311114",
      "363111",
      "842111",
      "362511",
      "712311",
      "272414",
      "139999",
      "232111",
      "312111",
      "442212",
      "451511",
      "271299",
      "711999",
      "832211",
      "832211",
      "423312",
      "212412",
      "452450",
      "711999",
      "431111",
      "712911",
      "621111",
      "899912",
      "811111",
      "621111",
      "639411",
      "899921",
      "421111",
      "899913",
      "711411",
      "431912",
      "451411",
      "423311",
      "451411",
      "621611",
      "452414",
      "899711",
      "611111",
      "212399",
      "399516",
      "252711",
      "221213",
      "221213",
      "221214",
      "224712",
      "224712",
      "212211",
      "231199",
      "721212",
      "831111",
      "211213",
      "552111",
      "552111",
      "552111",
      "552111",
      "141911",
      "393311",
      "561199",
      "234513",
      "234511",
      "233913",
      "234599",
      "311313",
      "234514",
      "832199",
      "139999",
      "322111",
      "712213",
      "149911",
      "399111",
      "899211",
      "721216",
      "451814",
      "451814",
      "712911",
      "322311",
      "831211",
      "392111",
      "212212",
      "552311",
      "561112",
      "234515",
      "621111",
      "442213",
      "621711",
      "832199",
      "831112",
      "839913",
      "331111",
      "821111",
      "121599",
      "399511",
      "612111",
      "222111",
      "222212",
      "222213",
      "149999",
      "399111",
      "133112",
      "133112",
      "331213",
      "312111",
      "312113",
      "821411",
      "233512",
      "312112",
      "712912",
      "721213",
      "452211",
      "639412",
      "599518",
      "261111",
      "612111",
      "552111",
      "552211",
      "351211",
      "451899",
      "222111",
      "639211",
      "621911",
      "394112",
      "342412",
      "342411",
      "431211",
      "431211",
      "311499",
      "399512",
      "323314",
      "394299",
      "431211",
      "393111",
      "899411",
      "811111",
      "899912",
      "621311",
      "811111",
      "621311",
      "311212",
      "272111",
      "272111",
      "899111",
      "332111",
      "232213",
      "561999",
      "631112",
      "212399",
      "141111",
      "851311",
      "149911",
      "831118",
      "211412",
      "224712",
      "631111",
      "831114",
      "351311",
      "233111",
      "839912",
      "399211",
      "711911",
      "234513",
      "234211",
      "251513",
      "621411",
      "311411",
      "111111",
      "135111",
      "811699",
      "211112",
      "621111",
      "639411",
      "451811",
      "312211",
      "312212",
      "839312",
      "531111",
      "551111",
      "542112",
      "271299",
      "561112",
      "599999",
      "551112",
      "561311",
      "591211",
      "591212",
      "541211",
      "561411",
      "591117",
      "599999",
      "551311",
      "621111",
      "591115",
      "591112",
      "591113",
      "591211",
      "639411",
      "591117",
      "591112",
      "591211",
      "552314",
      "591115",
      "552313",
      "591115",
      "561111",
      "532113",
      "599211",
      "599915",
      "323316",
      "839914",
      "232311",
      "839914",
      "393212",
      "141411",
      "324211",
      "712212",
      "599999",
      "831199",
      "211113",
      "611399",
      "222111",
      "342412",
      "225311",
      "272611",
      "272399",
      "411711",
      "221211",
      "311313",
      "211211",
      "639412",
      "831113",
      "149311",
      "234311",
      "234911",
      "631111",
      "541111",
      "832112",
      "399599",
      "599111",
      "394299",
      "322211",
      "271299",
      "111211",
      "132111",
      "221212",
      "139999",
      "551112",
      "393213",
      "121511",
      "561211",
      "599212",
      "599213",
      "599211",
      "271299",
      "532112",
      "211499",
      "211499",
      "821911",
      "712111",
      "552211",
      "552111",
      "899913",
      "899913",
      "431311",
      "442213",
      "821412",
      "711611",
      "442111",
      "591212",
      "599511",
      "831114",
      "311399",
      "711411",
      "599311",
      "899211",
      "351112",
      "362111",
      "399912",
      "639511",
      "621111",
      "222211",
      "312111",
      "232311",
      "232312",
      "232411",
      "232312",
      "232511",
      "232313",
      "232413",
      "232414",
      "392211",
      "811699",
      "312199",
      "312199",
      "811111",
      "442214",
      "261312",
      "261316",
      "253917",
      "323412",
      "712311",
      "711514",
      "251111",
      "411712",
      "211199",
      "212113",
      "851311",
      "712999",
      "399911",
      "411311",
      "452311",
      "431912",
      "431912",
      "621712",
      "312111",
      "312211",
      "312311",
      "312411",
      "312511",
      "821112",
      "334113",
      "334113",
      "721999",
      "393213",
      "712211",
      "821912",
      "712211",
      "431511",
      "451211",
      "272112",
      "211213",
      "421111",
      "311412",
      "821113",
      "721211",
      "224311",
      "212412",
      "212212",
      "212314",
      "212412",
      "399516",
      "249111",
      "249112",
      "272312",
      "839312",
      "224999",
      "224911",
      "341111",
      "233311",
      "312311",
      "312312",
      "341111",
      "342211",
      "312312",
      "312411",
      "312412",
      "261211",
      "312312",
      "322112",
      "223112",
      "253315",
      "712911",
      "323311",
      "541211",
      "234521",
      "234312",
      "234312",
      "234312",
      "233915",
      "234312",
      "234313",
      "222299",
      "612114",
      "551112",
      "599999",
      "721214",
      "111111",
      "111111",
      "521111",
      "111111",
      "234915",
      "899413",
      "133311",
      "134411",
      "411713",
      "322113",
      "232311",
      "851111",
      "541211",
      "839917",
      "821311",
      "839111",
      "711515",
      "333211",
      "561311",
      "212312",
      "399918",
      "441212",
      "312611",
      "451899",
      "451815",
      "851111",
      "121111",
      "311311",
      "899212",
      "363112",
      "323212",
      "149411",
      "231199",
      "231112",
      "332111",
      "332111",
      "332111",
      "333411",
      "362111",
      "121611",
      "231113",
      "851311",
      "831199",
      "234212",
      "224999",
      "591211",
      "891111",
      "394211",
      "721216",
      "831115",
      "311399",
      "832113",
      "121612",
      "842213",
      "149311",
      "552313",
      "712311",
      "232312",
      "394211",
      "394113",
      "733113",
      "733113",
      "891112",
      "222212",
      "451411",
      "399311",
      "322112",
      "899711",
      "431311",
      "821113",
      "821511",
      "821611",
      "821511",
      "621611",
      "899611",
      "839912",
      "399212",
      "334114",
      "399411",
      "111211",
      "272499",
      "232214",
      "233212",
      "711113",
      "839916",
      "711113",
      "333111",
      "399411",
      "421113",
      "241111",
      "241213",
      "241411",
      "721215",
      "831116",
      "121512",
      "232411",
      "392211",
      "821113",
      "442212",
      "899917",
      "211213",
      "323312",
      "452111",
      "451812",
      "851111",
      "899311",
      "532112",
      "393299",
      "251311",
      "251911",
      "231114",
      "711712",
      "731111",
      "272411",
      "712111",
      "451511",
      "423111",
      "252212",
      "423311",
      "431999",
      "431511",
      "423412",
      "811412",
      "132311",
      "223111",
      "843911",
      "452213",
      "234413",
      "621711",
      "232412",
      "599512",
      "133311",
      "591212",
      "234211",
      "232312",
      "233511",
      "251512",
      "132311",
      "223113",
      "224712",
      "541211",
      "541211",
      "821411",
      "821412",
      "821412",
      "821412",
      "399912",
      "232511",
      "221214",
      "272412",
      "561511",
      "599999",
      "451511",
      "839111",
      "811513",
      "843912",
      "311115",
      "362712",
      "225212",
      "234611",
      "899111",
      "399411",
      "232313",
      "331213",
      "271299",
      "361115",
      "561199",
      "611399",
      "712311",
      "532111",
      "839913",
      "712311",
      "451511",
      "851311",
      "712311",
      "711713",
      "224999",
      "139913",
      "821913",
      "224511",
      "234311",
      "232112",
      "249299",
      "149999",
      "811511",
      "451816",
      "899915",
      "393112",
      "224912",
      "224611",
      "599711",
      "399312",
      "399312",
      "611211",
      "311413",
      "234511",
      "452414",
      "712111",
      "399513",
      "721912",
      "342211",
      "842314",
      "721911",
      "552211",
      "224999",
      "111311",
      "323313",
      "731311",
      "721112",
      "721112",
      "733111",
      "431912",
      "532112",
      "323214",
      "392311",
      "711611",
      "271212",
      "561411",
      "839999",
      "323211",
      "312911",
      "224713",
      "111111",
      "451111",
      "133411",
      "133512",
      "234516",
      "231299",
      "231212",
      "231214",
      "231299",
      "451799",
      "231215",
      "225112",
      "561511",
      "231211",
      "233112",
      "621911",
      "234999",
      "233512",
      "312511",
      "225311",
      "225111",
      "134211",
      "234611",
      "311213",
      "251212",
      "542114",
      "311211",
      "311212",
      "311213",
      "311214",
      "311299",
      "311215",
      "532113",
      "639112",
      "899211",
      "561211",
      "322311",
      "323214",
      "322115",
      "712311",
      "712311",
      "839111",
      "312912",
      "561912",
      "399599",
      "254111",
      "224913",
      "621711",
      "712913",
      "831116",
      "711313",
      "711516",
      "393299",
      "312913",
      "312913",
      "712212",
      "712213",
      "233611",
      "821914",
      "712212",
      "272211",
      "272211",
      "639111",
      "322114",
      "711514",
      "272211",
      "399512",
      "711912",
      "899411",
      "324211",
      "599513",
      "621311",
      "324212",
      "621911",
      "452214",
      "899413",
      "232413",
      "261211",
      "451411",
      "224999",
      "399311",
      "842215",
      "211212",
      "211299",
      "399515",
      "211299",
      "831313",
      "233916",
      "231199",
      "231214",
      "621311",
      "899915",
      "891211",
      "442217",
      "599514",
      "251213",
      "362411",
      "423312",
      "134212",
      "134212",
      "121613",
      "451899",
      "999000",
      "251312",
      "253999",
      "252411",
      "234412",
      "521211",
      "531111",
      "712211",
      "712111",
      "821912",
      "712212",
      "311214",
      "711999",
      "399211",
      "399212",
      "399212",
      "399213",
      "561611",
      "721111",
      "311299",
      "399913",
      "251411",
      "591117",
      "423311",
      "211213",
      "312914",
      "253515",
      "421114",
      "452215",
      "149413",
      "839912",
      "399211",
      "332211",
      "324111",
      "712916",
      "839411",
      "711311",
      "711311",
      "332211",
      "234314",
      "561913",
      "111312",
      "411714",
      "731213",
      "831199",
      "224914",
      "393212",
      "821511",
      "721913",
      "551311",
      "442212",
      "551311",
      "261317",
      "211113",
      "212412",
      "521111",
      "423313",
      "223111",
      "599514",
      "843411",
      "361113",
      "361115",
      "361115",
      "233612",
      "399212",
      "311216",
      "211213",
      "399515",
      "394212",
      "851111",
      "732111",
      "232611",
      "232611",
      "333211",
      "253517",
      "711511",
      "711512",
      "711513",
      "839211",
      "711514",
      "399916",
      "392211",
      "252299",
      "312115",
      "342313",
      "234999",
      "431912",
      "621111",
      "561212",
      "561412",
      "211412",
      "831312",
      "712213",
      "399213",
      "422115",
      "322312",
      "591115",
      "272211",
      "311314",
      "392111",
      "212413",
      "711411",
      "392112",
      "392312",
      "899511",
      "899511",
      "392311",
      "899512",
      "591113",
      "224999",
      "212112",
      "839311",
      "839312",
      "839313",
      "599912",
      "121614",
      "233513",
      "591112",
      "133112",
      "511112",
      "711912",
      "599913",
      "712212",
      "225311",
      "133512",
      "712916",
      "839411",
      "591113",
      "224712",
      "233213",
      "311313",
      "211499",
      "272211",
      "452318",
      "452452",
      "253918",
      "899414",
      "212113",
      "212312",
      "599914",
      "212414",
      "342313",
      "591112",
      "313211",
      "251211",
      "253917",
      "253918",
      "839999",
      "899917",
      "821611",
      "442217",
      "712917",
      "899917",
      "451799",
      "899921",
      "639411",
      "721914",
      "821611",
      "234314",
      "612114",
      "612115",
      "591211",
      "542111",
      "542111",
      "542114",
      "272612",
      "223112",
      "223111",
      "899611",
      "839918",
      "452322",
      "423413",
      "271299",
      "224999",
      "551211",
      "134499",
      "134499",
      "272114",
      "451816",
      "272211",
      "733113",
      "621912",
      "342412",
      "341111",
      "899413",
      "399515",
      "899414",
      "393114",
      "342313",
      "234211",
      "639411",
      "253112",
      "423411",
      "411715",
      "234612",
      "311217",
      "253323",
      "399111",
      "821511",
      "721915",
      "899923",
      "333311",
      "312199",
      "811411",
      "839212",
      "899611",
      "312611",
      "393113",
      "899211",
      "711913",
      "851311",
      "323315",
      "831211",
      "394213",
      "323315",
      "839412",
      "711313",
      "821712",
      "422116",
      "899913",
      "311414",
      "621911",
      "392112",
      "212212",
      "899211",
      "832115",
      "831313",
      "222211",
      "733111",
      "363211",
      "363214",
      "631112",
      "621611",
      "341111",
      "711611",
      "272199",
      "363311",
      "891211",
      "839999",
      "591211",
      "231213",
      "231214",
      "231299",
      "231215",
      "399112",
      "393114",
      "621111",
      "611311",
      "611312",
      "621311",
      "631112",
      "631111",
      "621411",
      "631111",
      "621111",
      "621111",
      "621111",
      "621211",
      "611313",
      "621311",
      "621999",
      "611314",
      "621411",
      "621111",
      "621999",
      "621912",
      "639112",
      "621111",
      "331211",
      "851111",
      "712213",
      "621111",
      "899918",
      "399611",
      "399411",
      "452314",
      "224712",
      "452299",
      "831212",
      "234999",
      "392312",
      "351211",
      "431211",
      "452411",
      "272499",
      "599515",
      "272511",
      "261313",
      "261312",
      "261313",
      "261314",
      "234399",
      "311412",
      "271311",
      "333212",
      "251214",
      "399516",
      "312116",
      "232214",
      "232214",
      "399599",
      "252712",
      "252712",
      "452453",
      "842318",
      "254211",
      "212312",
      "899999",
      "111399",
      "821714",
      "821713",
      "521211",
      "711914",
      "891113",
      "431511",
      "452318",
      "451799",
      "611112",
      "591115",
      "222213",
      "222213",
      "552313",
      "711114",
      "331112",
      "591115",
      "621713",
      "721916",
      "312211",
      "233214",
      "312199",
      "899999",
      "121513",
      "831117",
      "224714",
      "312116",
      "231199",
      "231199",
      "232212",
      "231215",
      "233213",
      "231215",
      "821915",
      "452459",
      "452315",
      "452414",
      "561611",
      "561111",
      "899511",
      "134499",
      "393213",
      "733114",
      "839917",
      "451814",
      "399311",
      "342212",
      "212415",
      "312112",
      "311499",
      "311411",
      "312212",
      "312312",
      "312412",
      "399918",
      "313111",
      "311412",
      "311413",
      "311414",
      "399312",
      "399513",
      "311211",
      "311212",
      "311214",
      "311299",
      "311215",
      "311213",
      "312912",
      "712212",
      "399311",
      "311299",
      "399916",
      "342313",
      "313211",
      "399516",
      "711914",
      "312116",
      "342313",
      "342411",
      "342412",
      "263311",
      "313212",
      "263312",
      "313213",
      "313214",
      "899914",
      "639311",
      "561611",
      "399517",
      "342313",
      "591112",
      "552111",
      "711714",
      "839914",
      "711611",
      "423311",
      "621111",
      "639411",
      "899921",
      "399599",
      "899921",
      "639411",
      "392211",
      "333411",
      "839412",
      "323412",
      "731212",
      "451611",
      "451412",
      "232611",
      "361116",
      "721111",
      "223113",
      "111211",
      "899999",
      "591112",
      "899923",
      "591112",
      "599518",
      "639412",
      "712918",
      "731311",
      "599517",
      "639412",
      "731312",
      "272413",
      "639412",
      "591211",
      "733111",
      "233215",
      "843113",
      "362512",
      "452216",
      "271213",
      "899922",
      "599215",
      "721999",
      "121615",
      "323214",
      "711111",
      "392211",
      "532113",
      "899415",
      "711516",
      "223113",
      "111211",
      "134499",
      "242112",
      "232611",
      "253518",
      "263299",
      "621311",
      "261113",
      "899921",
      "732111",
      "253521",
      "842221",
      "324211",
      "324212",
      "899711",
      "342313",
      "212314",
      "342313",
      "842222",
      "399517",
      "211214",
      "431511",
      "431511",
      "333411",
      "423311",
      "331213",
      "393213",
      "712921",
      "323316",
      "599521",
      "712921",
      "891113",
      "711715",
      "261212",
      "712922",
      "322313",
      "891113",
      "452217",
      "133312",
      "133312",
      "639511",
      "899412",
      "121617",
      "234213",
      "831118",
      "639212",
      "363312",
      "842321",
      "532113",
      "223113",
      "711716",
      "411716",
      "361114",
      "234522",
    ],
    items: [
      BLOCKS.bags.general,
      BLOCKS.clothing.general,
      BLOCKS.Eyewear.general,
      BLOCKS.firstAid.general,
      BLOCKS.motorVehicles.general,
      BLOCKS.overtimeMeals.general,
      BLOCKS.stationery.general,
      BLOCKS.ppe.general,
      BLOCKS.professionalassociation.general,
      BLOCKS.selfEducation.general,
      BLOCKS.subscriptions.general,
      BLOCKS.communication.general,
      BLOCKS.tools.general,
      BLOCKS.travel.general,
      BLOCKS.wfh.general,
    ],
  },
};

/* ----------------------------------------------------
         FUEL RATES DATA 
      ---------------------------------------------------- */

const fuelRates = {
  "2019 / 2020": {
    Petrol: {
      VIC: {
        statewide: 135.1,
        regional: 133.5,
        capital: "Melbourne",
        average: 135.7,
      },
      NSW: {
        statewide: 135.3,
        regional: 136.3,
        capital: "Sydney",
        average: 134.3,
      },
      QLD: {
        statewide: 136.1,
        regional: 135.1,
        capital: "Brisbane",
        average: 136.6,
      },
      WA: {
        statewide: 133.7,
        regional: 141.0,
        capital: "Perth",
        average: 131.6,
      },
      SA: {
        statewide: 135.8,
        regional: null,
        capital: "Adelaide",
        average: 135.7,
      },
      TAS: {
        statewide: 146.1,
        regional: 145.7,
        capital: "Hobart",
        average: 146.6,
      },
      NT: {
        statewide: 146.5,
        regional: 179.6,
        capital: "Darwin",
        average: 134.4,
      },
      ACT: {
        statewide: 135.3,
        regional: 136.3,
        capital: "Canberra",
        average: 137.3,
      },
    },
    Diesel: {
      VIC: {
        statewide: 140.1,
        regional: 140.4,
        capital: "Melbourne",
        average: 139.9,
      },
      NSW: {
        statewide: 141.2,
        regional: 142.7,
        capital: "Sydney",
        average: 138.2,
      },
      QLD: {
        statewide: 141.1,
        regional: 141.2,
        capital: "Brisbane",
        average: 140.9,
      },
      WA: {
        statewide: 142.3,
        regional: 145.0,
        capital: "Perth",
        average: 140.3,
      },
      SA: {
        statewide: 141.2,
        regional: 141.2,
        capital: "Adelaide",
        average: 135.9,
      },
      TAS: {
        statewide: 153.2,
        regional: 152.6,
        capital: "Hobart",
        average: 154.5,
      },
      NT: {
        statewide: null,
        regional: 180.8,
        capital: "Darwin",
        average: 139.2,
      },
      ACT: {
        statewide: 141.2,
        regional: 142.7,
        capital: "Canberra",
        average: 145.2,
      },
    },
  },

  "2020 / 2021": {
    Petrol: {
      VIC: {
        statewide: 130.2,
        regional: 123.5,
        capital: "Melbourne",
        average: 132.5,
      },
      NSW: {
        statewide: 128.9,
        regional: 127.5,
        capital: "Sydney",
        average: 129.9,
      },
      QLD: {
        statewide: 130.6,
        regional: 125.6,
        capital: "Brisbane",
        average: 133.3,
      },
      WA: {
        statewide: 126.5,
        regional: 128.1,
        capital: "Perth",
        average: 126.1,
      },
      SA: {
        statewide: 125.0,
        regional: null,
        capital: "Adelaide",
        average: 124.9,
      },
      TAS: {
        statewide: 130.5,
        regional: 130.5,
        capital: "Hobart",
        average: 130.6,
      },
      NT: {
        statewide: 136.7,
        regional: 168.6,
        capital: "Darwin",
        average: 125.0,
      },
      ACT: {
        statewide: 128.9,
        regional: 127.5,
        capital: "Canberra",
        average: 152.7,
      },
    },
    Diesel: {
      VIC: {
        statewide: 125.3,
        regional: 126.1,
        capital: "Melbourne",
        average: 124.6,
      },
      NSW: {
        statewide: 125.2,
        regional: 126.3,
        capital: "Sydney",
        average: 122.8,
      },
      QLD: {
        statewide: 124.0,
        regional: 123.8,
        capital: "Brisbane",
        average: 124.3,
      },
      WA: {
        statewide: 125.2,
        regional: 128.4,
        capital: "Perth",
        average: 122.9,
      },
      SA: {
        statewide: 124.9,
        regional: 124.9,
        capital: "Adelaide",
        average: 120.4,
      },
      TAS: {
        statewide: 134.7,
        regional: 134.0,
        capital: "Hobart",
        average: 134.0,
      },
      NT: {
        statewide: null,
        regional: 166.5,
        capital: "Darwin",
        average: 122.9,
      },
      ACT: {
        statewide: 125.2,
        regional: 126.3,
        capital: "Canberra",
        average: 128.6,
      },
    },
  },

  "2021 / 2022": {
    Petrol: {
      VIC: {
        statewide: 171.2,
        regional: 171.5,
        capital: "Melbourne",
        average: 170.4,
      },
      NSW: {
        statewide: 172.2,
        regional: 171.2,
        capital: "Sydney",
        average: 172.8,
      },
      QLD: {
        statewide: 172.0,
        regional: 170.0,
        capital: "Brisbane",
        average: 173.1,
      },
      WA: {
        statewide: 169.9,
        regional: 172.7,
        capital: "Perth",
        average: 169.1,
      },
      SA: {
        statewide: 166.6,
        regional: null,
        capital: "Adelaide",
        average: 165.8,
      },
      TAS: {
        statewide: 178.1,
        regional: 177.4,
        capital: "Hobart",
        average: 179.0,
      },
      NT: {
        statewide: 181.7,
        regional: 203.0,
        capital: "Darwin",
        average: 173.8,
      },
      ACT: {
        statewide: 172.2,
        regional: 171.2,
        capital: "Canberra",
        average: 173.9,
      },
    },
    Diesel: {
      VIC: {
        statewide: 173.7,
        regional: 172.7,
        capital: "Melbourne",
        average: 171.6,
      },
      NSW: {
        statewide: 173.5,
        regional: 174.5,
        capital: "Sydney",
        average: 171.4,
      },
      QLD: {
        statewide: 173.9,
        regional: 173.6,
        capital: "Brisbane",
        average: 174.3,
      },
      WA: {
        statewide: 172.0,
        regional: 174.7,
        capital: "Perth",
        average: 170.1,
      },
      SA: {
        statewide: 173.0,
        regional: 173.0,
        capital: "Adelaide",
        average: 170.0,
      },
      TAS: {
        statewide: 180.3,
        regional: 179.9,
        capital: "Hobart",
        average: 181.3,
      },
      NT: {
        statewide: null,
        regional: 201.1,
        capital: "Darwin",
        average: 177.0,
      },
      ACT: {
        statewide: 173.5,
        regional: 174.5,
        capital: "Canberra",
        average: 176.8,
      },
    },
  },

  "2022 / 2023": {
    Petrol: {
      VIC: {
        statewide: 184.1,
        regional: 180.8,
        capital: "Melbourne",
        average: 185.2,
      },
      NSW: {
        statewide: 184.2,
        regional: 185.1,
        capital: "Sydney",
        average: 183.1,
      },
      QLD: {
        statewide: 184.0,
        regional: 181.7,
        capital: "Brisbane",
        average: 185.2,
      },
      WA: {
        statewide: 179.3,
        regional: 186.7,
        capital: "Perth",
        average: 177.3,
      },
      SA: {
        statewide: 178.9,
        regional: 182.4,
        capital: "Adelaide",
        average: 177.7,
      },
      TAS: {
        statewide: 188.3,
        regional: 188.7,
        capital: "Hobart",
        average: 187.7,
      },
      NT: {
        statewide: 197.9,
        regional: 235.3,
        capital: "Darwin",
        average: 184.2,
      },
      ACT: {
        statewide: 184.2,
        regional: 185.1,
        capital: "Canberra",
        average: 187.3,
      },
    },
    Diesel: {
      VIC: {
        statewide: 208.3,
        regional: 211.3,
        capital: "Melbourne",
        average: 207.3,
      },
      NSW: {
        statewide: 209.0,
        regional: 210.6,
        capital: "Sydney",
        average: 205.6,
      },
      QLD: {
        statewide: 209.5,
        regional: 209.9,
        capital: "Brisbane",
        average: 209.1,
      },
      WA: {
        statewide: 202.4,
        regional: 207.8,
        capital: "Perth",
        average: 198.6,
      },
      SA: {
        statewide: 205.1,
        regional: 205.1,
        capital: "Adelaide",
        average: 199.8,
      },
      TAS: {
        statewide: 213.9,
        regional: 213.9,
        capital: "Hobart",
        average: 213.9,
      },
      NT: {
        statewide: 231.3,
        regional: 251.8,
        capital: "Darwin",
        average: 218.0,
      },
      ACT: {
        statewide: 209.0,
        regional: 210.6,
        capital: "Canberra",
        average: 214.4,
      },
    },
  },

  "2023 / 2024": {
    Petrol: {
      VIC: {
        statewide: 195.6,
        regional: 190.1,
        capital: "Melbourne",
        average: 197.5,
      },
      NSW: {
        statewide: 197.3,
        regional: 196.6,
        capital: "Sydney",
        average: 197.5,
      },
      QLD: {
        statewide: 198.0,
        regional: 193.0,
        capital: "Brisbane",
        average: 200.6,
      },
      WA: {
        statewide: 190.0,
        regional: 196.0,
        capital: "Perth",
        average: 188.4,
      },
      SA: {
        statewide: 191.1,
        regional: 191.2,
        capital: "Adelaide",
        average: 191.1,
      },
      TAS: {
        statewide: 198.0,
        regional: 198.9,
        capital: "Hobart",
        average: 196.7,
      },
      NT: {
        statewide: 205.6,
        regional: 241.1,
        capital: "Darwin",
        average: 192.6,
      },
      ACT: {
        statewide: 197.3,
        regional: 196.6,
        capital: "Canberra",
        average: 201.3,
      },
    },
    Diesel: {
      VIC: {
        statewide: 202.9,
        regional: 203.4,
        capital: "Melbourne",
        average: 202.3,
      },
      NSW: {
        statewide: 199.4,
        regional: 200.4,
        capital: "Sydney",
        average: 197.2,
      },
      QLD: {
        statewide: 203.7,
        regional: 203.8,
        capital: "Brisbane",
        average: 203.6,
      },
      WA: {
        statewide: 200.2,
        regional: 205.3,
        capital: "Perth",
        average: 196.5,
      },
      SA: {
        statewide: 200.0,
        regional: 200.0,
        capital: "Adelaide",
        average: 196.3,
      },
      TAS: {
        statewide: 208.1,
        regional: 208.7,
        capital: "Hobart",
        average: 206.8,
      },
      NT: {
        statewide: 221.0,
        regional: 248.4,
        capital: "Darwin",
        average: 203.2,
      },
      ACT: {
        statewide: 199.4,
        regional: 200.4,
        capital: "Canberra",
        average: 204.5,
      },
    },
  },

  "2024 / 2025": {
    Petrol: {
      VIC: {
        statewide: 181.0,
        regional: 176.3,
        capital: "Melbourne",
        average: 182.0,
      },
      NSW: {
        statewide: 182.1,
        regional: 180.8,
        capital: "Sydney",
        average: 182.7,
      },
      QLD: {
        statewide: 183.6,
        regional: 179.2,
        capital: "Brisbane",
        average: 185.9,
      },
      WA: {
        statewide: 176.3,
        regional: 180.6,
        capital: "Perth",
        average: 175.0,
      },
      SA: {
        statewide: 176.1,
        regional: 178.3,
        capital: "Adelaide",
        average: 175.3,
      },
      TAS: {
        statewide: 181.3,
        regional: 182.0,
        capital: "Hobart",
        average: 180.4,
      },
      NT: {
        statewide: 193.4,
        regional: 236.9,
        capital: "Darwin",
        average: 177.4,
      },
      ACT: {
        statewide: 182.1,
        regional: 180.8,
        capital: "Canberra",
        average: 186.5,
      },
    },
    Diesel: {
      VIC: {
        statewide: 185.7,
        regional: 187.3,
        capital: "Melbourne",
        average: 184.4,
      },
      NSW: {
        statewide: 184.8,
        regional: 186.0,
        capital: "Sydney",
        average: 181.7,
      },
      QLD: {
        statewide: 185.6,
        regional: 185.6,
        capital: "Brisbane",
        average: 185.6,
      },
      WA: {
        statewide: 181.3,
        regional: 185.8,
        capital: "Perth",
        average: 178.0,
      },
      SA: {
        statewide: 182.4,
        regional: 182.5,
        capital: "Adelaide",
        average: 179.0,
      },
      TAS: {
        statewide: 185.6,
        regional: 185.7,
        capital: "Hobart",
        average: 185.4,
      },
      NT: {
        statewide: 205.9,
        regional: 242.7,
        capital: "Darwin",
        average: 182.1,
      },
      ACT: {
        statewide: 184.8,
        regional: 186.0,
        capital: "Canberra",
        average: 194.0,
      },
    },
  },

  "2025 / 2026": {
    Petrol: {
      VIC: {
        statewide: 186.1,
        regional: 180.9,
        capital: "Melbourne",
        average: 187.9,
      },
      NSW: {
        statewide: 184.5,
        regional: 183.5,
        capital: "Sydney",
        average: 184.9,
      },
      QLD: {
        statewide: 188.1,
        regional: 184.3,
        capital: "Brisbane",
        average: 190.2,
      },
      WA: {
        statewide: 180.8,
        regional: 186.9,
        capital: "Perth",
        average: 179.1,
      },
      SA: {
        statewide: 179.5,
        regional: 186.3,
        capital: "Adelaide",
        average: 177.1,
      },
      TAS: {
        statewide: 184.5,
        regional: 185.8,
        capital: "Hobart",
        average: 182.8,
      },
      NT: {
        statewide: 204.6,
        regional: 242.4,
        capital: "Darwin",
        average: 190.2,
      },
      ACT: {
        statewide: 184.5,
        regional: 183.5,
        capital: "Canberra",
        average: 188.9,
      },
    },
    Diesel: {
      VIC: {
        statewide: 207.2,
        regional: 207.9,
        capital: "Melbourne",
        average: 205.1,
      },
      NSW: {
        statewide: 205.4,
        regional: 207.0,
        capital: "Sydney",
        average: 201.7,
      },
      QLD: {
        statewide: 207.2,
        regional: 207.8,
        capital: "Brisbane",
        average: 206.7,
      },
      WA: {
        statewide: 203.2,
        regional: 207.4,
        capital: "Perth",
        average: 200.2,
      },
      SA: {
        statewide: 206.3,
        regional: 206.3,
        capital: "Adelaide",
        average: 201.0,
      },
      TAS: {
        statewide: 207.3,
        regional: 207.4,
        capital: "Hobart",
        average: 207.3,
      },
      NT: {
        statewide: 227.3,
        regional: 257.6,
        capital: "Darwin",
        average: 207.5,
      },
      ACT: {
        statewide: 205.4,
        regional: 207.0,
        capital: "Canberra",
        average: 214.9,
      },
    },
  },
};


/* ----------------------------------------------------
         DATA STRUCTURE (RATES)
      ---------------------------------------------------- */

const rates = {
  "ATI & Family Tax Benefit": {
    aliases: ["ATI", "Family Tax Benefit", "FTB"],
    items: [
      `
                  <div>
                    <strong>2025-2026 - ATI Limit at which Family Tax Benefit Part A is no longer paid</strong>
                    <table style="width:70%; border-collapse:collapse; font-size:14px; text-align:center;">
                      <thead>
                        <tr style="background:#008427; color:#ffffff; font-size: 12px;">
                          <th rowspan="2" style="padding:12px 6px;">No. of children<br>0-12 years</th>
                          <th colspan="4" style="padding:12px 6px;">Number of children 13-15 years or secondary students 16-19 years</th>
                        </tr>

                        <tr style="background:#008427; color:#ffffff; font-size: 12px;">
                          <th style="padding:10px 6px; width:20%;">Nil</th>
                          <th class="food-col"style="padding:10px 6px; width:20%;">One</th>
                          <th style="padding:10px 6px; width:20%;">Two</th>
                          <th style="padding:10px 6px; width:20%;">Three</th>
                      </thead>

                      <tbody>
                        <tbody>
                        <tr><td style="padding:12px 6px;">Nil</td><td>-</td><td>$125,110</td><td>$135,488</td><td>$161,197</td></tr>
                        <tr><td style="padding:12px 6px;">One</td><td>$125,110</td><td>$131,449</td><td>$155,247</td><td>$180,955</td></tr>
                        <tr><td style="padding:12px 6px;">Two</td><td>$131,449</td><td>$149,298</td><td>$175,006</td><td>$200,714</td></tr>
                        <tr><td style="padding:12px 6px;">Three</td><td>$143,348</td><td>$169,056</td><td>$194,764</td><td>$220,473</td></tr>
                     </tbody>
                    </table>
                    <p style="font-size:12px; color: #262626; text-align: left;">Income limit is higher if eligible for Rent Assistance. Note: Supplement is not paid if families ATI is over $80,000 (from 1 July 2017).</p>
                  </div>
                    `,
    ],
  },

  "Employee Truck Drivers - Reasonable Meal Expenses": {
    aliases: [
      "TD 2025/4",
      "Truck Drivers",
      "Reasonable Meals",
      "Employee Truck Drivers - Reasonable Meal Expenses",
    ],
    items: [
      `
                <div>
                  <strong>2025/2026</strong>
                  <table style="width:100%; border-collapse:collapse; font-size:15px; text-align:center;">
                    <thead>
                      <tr style="background:#008427; color:#ffffff; font-size:12px;">
                        <th rowspan="2" style="border:1px solid #e0e0e0; padding:8px; width:25%;">
                        </th>

                        <th colspan="3" style="border:1px solid #e0e0e0; padding:8px;">
                          Food and Drink
                        </th>

                        <th rowspan="2" style="border:1px solid #e0e0e0; padding:8px; width:25%;">
                        </th>
                      </tr>

                      <tr style="background:#008427; color:#ffffff; font-size:12px;">
                        <th style="border:1px solid #e0e0e0; padding:8px;">Breakfast ($)</th>
                        <th style="border:1px solid #e0e0e0; padding:8px;">Lunch ($)</th>
                        <th style="border:1px solid #e0e0e0; padding:8px;">Dinner ($)</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr style="background:#ffffff;">
                        <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Employee truck driver with travel allowance<sub>1</sub></td>
                        <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;"><strong>31.15</strong></td>
                        <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;"><strong>35.55</strong></td>
                        <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;"><strong>61.30</strong></td>
                        <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">The amount for each meal is separate and cannot be combined into a single daily amount</td>
                      </tr>
                    </tbody>
                  </table>
                  <p style="font-size:12px;"><sub>1</sub>  Amounts not applicable for owner-driver or employee with no travel allowance at Item 2.</p>
                </div>
              `,
    ],
  },

  "Home Office": {
    aliases: ["rates", "home office", "fixed rate", "revised fixed rate"],
    items: [
      "Up to 28 February 2023, the record kept by the taxpayer must be representative of the total number of hours worked. From 1 March 2023, the record kept must be for the total number of actual hours worked.",
      `<ul>
                      <li>70 cents per work hour for 1 July 2024 to 30 June 2026</li>
                      <li>67 cents per work hour for 1 July 2022 to 30 June 2024</li>
                      <li>52 cents per hour for 1 July 2018 to 30 June 2022</li>
                      <li>45 cents per hour for 1 July 2014 to 30 June 2018</li>
                      <li>34 cents per hour for 1 July 2010 to 30 June 2014</li>
                      <li>26 cents per hour for 1 July 2004 to 30 June 2010</li>
                      <li>20 cents per hour for 1 July 2001 to 30 June 2004</li>
                  </ul>
                  `,
    ],
  },

  "Low Income Tax Offset": {
    aliases: ["Low Income Tax Offset", "LITO"],
    items: [
      `
                  <div>
                    <strong></strong>
                    <table style="width:60%; border-collapse:collapse; font-size:15px; text-align:center;">
                      <thead>
                        <tr style="background:#008427; color:#ffffff; font-size:12px;">
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">Taxable Income</th>
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">LITO</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Up to $37,500</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$700</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$37,501 to $45,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$700 less 5 cents for each dollar over $37,500</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$45,001 to $66,666</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$325 less 1.5 cents for each dollar over $45,000</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">From $66,667</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Nil</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                `,
    ],
  },

  "Medicare Levy": {
    aliases: [
      "Medicare",
      "Medicare Levy",
      "Medicare Levy Thresholds",
      "Medicare Table",
    ],
    items: [
      `
                    <div>
                      <strong>2025/2026</strong>
                <table style="width:100%; border-collapse:collapse; font-size:15px; text-align:center;">
                  <thead>
                    <tr style="background:#008427; color:#ffffff; font-size:12px;">
                      <th rowspan="2" style="border:1px solid #ccc; padding:6px; background:#008427;">Category of Taxpayer</th>
                      <th colspan="2" style="border:1px solid #ccc; padding:6px;">Taxpayers entitled to SAPTO</th>
                      <th colspan="2" style="border:1px solid #ccc; padding:6px;">Other Taxpayers</th>
                    </tr>
                    <tr style="background:#008427; color:#ffffff;font-size:12px;">
                      <th style="border:1px solid #ccc; padding:6px;">Income at or below which no levy payable</th>
                      <th style="border:1px solid #ccc; padding:6px;">Income above which full levy payable</th>
                      <th style="border:1px solid #ccc; padding:6px;">Income at or below which no levy payable</th>
                      <th style="border:1px solid #ccc; padding:6px;">Income above which full levy payable</th>
                    </tr>
                  </thead>
                        <tbody>
                          <tr><td style="border:1px solid #ccc; padding:6px;">Individual</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$44,268</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$55,335</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$28,011</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$35,014</td></tr>
                          <tr><td style="border:1px solid #ccc; padding:6px;">0 dependants</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$61,623</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$77,029</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$47,238</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$59,048</td></tr>
                          <tr><td style="border:1px solid #ccc; padding:6px;">1 dependant</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$65,961</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$82,452</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$51,576</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$64,471</td></tr>
                          <tr><td style="border:1px solid #ccc; padding:6px;">2 dependants</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$70,299</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$87,875</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$55,914</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$69,894</td></tr>
                          <tr><td style="border:1px solid #ccc; padding:6px;">3 dependants</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$74,637</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$93,298</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$60,252</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$75,317</td></tr>
                          <tr><td style="border:1px solid #ccc; padding:6px;">4 dependants</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$78,975</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$98,721</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$64,590</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$80,740</td></tr>
                          <tr><td style="border:1px solid #ccc; padding:6px;">Each additional child</td><td style="border:1px solid #ccc; padding:6px;">Add $4,338 per child</td><td style="border:1px solid #ccc; padding:6px;">Add $5,423 per child</td><td style="border:1px solid #ccc; padding:6px;">Add $4,338 per child</td><td style="border:1px solid #ccc; padding:6px;">Add $5,423 per child</td></tr>
                        </tbody>
                      </table>
                      <p style="font-size:12px; color:#262626;">1. The figures applicable to married taxpayers also apply to taxpayers entitled to sole parent (notional).</p>
                      <p style="font-size:12px; color:#262626;">2. Where the taxpayer’s Taxable Income falls within the shading in range, the Levy is calculated as 10% of the excess over the lower limit.</p>
                    </div>
                  `,
    ],
  },

  "Medicare Levy Surcharge": {
    aliases: [
      "Medicare",
      "Medicare Levy Surcharge",
      "Surcharge",
      "Medicare Table",
      "MLS",
    ],
    items: [
      `
                <div>
                    <strong>2025/2026 Medicare Levy Surcharge Thresholds</strong>
                    <table style="width:100%; border-collapse:collapse; font-size:15px; text-align:center;">
                      <thead>
                        <tr style="background:#008427; color:#ffffff; font-size:13px;">
                          <th rowspan="2" style="border:1px solid #e0e0e0; padding:8px; width:20%;">Category</th>
                          <th rowspan="2" style="border:1px solid #e0e0e0; padding:8px; width:20%;">No. Children</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Tier 0</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Tier 1</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Tier 2</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Tier 3</th>
                        </tr>
                        <tr style="background:#008427; color:#ffffff; font-size:12px;">
                          <th style="border:1px solid #e0e0e0; padding:8px;">Income at or below threshold</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Income within range</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Income within range</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Income above threshold</th>
                        </tr>
                      </thead>

                      <tbody>
                        <!-- Singles -->
                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; font-weight:bold;">SINGLES</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">N/A</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$101,000 or less</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$101,001 – $118,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$118,001 – $158,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$158,001+</td>
                        </tr>

                        <!-- Families -->
                        <tr style="background:#ffffff;">
                          <td rowspan="5" style="border:1px solid #e0e0e0; padding:8px; font-weight:bold;">
                            FAMILIES<br>(No. of Children)*<br>
                            <span style="font-size:13px; font-weight:normal;">
                              *The family thresholds increase by $1,500 for each additional child after the first.
                            </span>
                          </td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">0 - 1</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$202,000 or less</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$202,001 – $236,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$236,001 – $316,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$316,001+</td>
                        </tr>

                        <tr><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">2</td><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$203,500 or less</td><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$203,501 – $237,500</td><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$237,501 – $317,500</td><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$317,501+</td></tr>
                        <tr><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">3</td><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$205,000 or less</td><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$205,001 – $239,000</td><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$239,001 – $319,000</td><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$319,001+</td></tr>
                        <tr><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">4</td><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$206,500 or less</td><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$206,501 – $240,500</td><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$240,501 – $320,500</td><td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$320,501+</td></tr>

                        <!-- MLS Rate -->
                        <tr style="background:#f7f7f7; font-weight:bold;">
                          <td style="border:1px solid #e0e0e0; padding:8px;">MLS rate</td>
                          <td style="border:1px solid #e0e0e0; padding:8px;">0%</td>
                          <td style="border:1px solid #e0e0e0; padding:8px;">1%</td>
                          <td style="border:1px solid #e0e0e0; padding:8px;">1.25%</td>
                          <td style="border:1px solid #e0e0e0; padding:8px;">1.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  `,
    ],
  },

  "Motor Vehicles": {
    aliases: ["MV", "Electric", "cents per km", "motor vehicles"],
    items: [
      `
                  <div>
                    <strong>2025/2026</strong>
                    <table style="width:65%; border-collapse:collapse; font-size:15px; text-align:center;">
                      <thead>
                        <tr style="background:#008427; color:#ffffff; font-size:12px;">
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">Year</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Diesel / Petrol</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Electric</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">2017 - 2018</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">66 cents per kilometre</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">N/A</td>
                        </tr>
                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">2018 - 2019 & 2019 - 2020</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">68 cents per kilometre</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">N/A</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">2020 - 2021 & 2021 - 2022</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">72 cents per kilometre</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">N/A</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">2022 - 2023</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">78 cents per kilometre</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">N/A</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">2023 - 2024</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">85 cents per kilometre</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">N/A</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">2024 - 2025</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">88 cents per kilometre</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">N/A</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">2025 - 2026</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">88 cents per kilometre</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">4.2 cents per kilometre</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">2026 - 2027</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">91 cents per kilometre</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">5.47 cents per kilometre</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                `,
    ],
  },

  "Overtime Meal Rates": {
    aliases: ["overtime meals", "Meals"],
    items: [
      `
                  <div>
                    <strong></strong>
                    <table style="width:60%; border-collapse:collapse; font-size:15px; text-align:center;">
                      <thead>
                        <tr style="background:#008427; color:#ffffff; font-size:12px;">
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">FinancialYear</th>
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">ATO Reference</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Reasonable Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">2025 - 2026</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">TD 2025/4</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$38.65</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">2024 - 2025</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">TD 2024/3</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$37.65</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">2023 - 2024</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">TD 2023/3</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$35.65</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                `,
    ],
  },

  "Private health Insurance": {
    aliases: ["Private Health Insurance", "PHI"],
    items: [
      `
        <div>
            <strong>2025/2026 Medicare Levy Surcharge Thresholds</strong>
            <table style="width:100%; border-collapse:collapse; font-size:15px; text-align:center;">
              <thead>
                <tr style="background:#008427; color:#ffffff; font-size:12px;">
                  <th colspan="2" style="border:1px solid #e0e0e0; padding:8px; width:40%;"></th>
                  <th style="border:1px solid #e0e0e0; padding:8px;">Tier 1</th>
                  <th style="border:1px solid #e0e0e0; padding:8px;">Tier 2</th>
                  <th style="border:1px solid #e0e0e0; padding:8px;">Tier 3</th>
                </tr>

                <tr style="background:#ffffff; color:#262626; font-size:12px;">
                  <th style="border:1px solid #e0e0e0; padding:8px;">Single Income</th>
                  <td style="border:1px solid #e0e0e0; padding:8px;">$101,000 or less</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">$101,001 - $118,000</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">$118,001 - $158,000</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">$158,001 or more</td>
                </tr>

                <tr style="background:#ffffff; color:#262626; font-size:12px;">
                  <th style="border:1px solid #e0e0e0; padding:8px;">Family Income*</th>
                  <td style="border:1px solid #e0e0e0; padding:8px;">$202,000 or less</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">$202,001 - $236,000</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">$236,001 - $316,000</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">$316,001 or more</td>
                </tr>

                <tr style="background:#ffffff; color:#262626; font-size:12px; text-align:center;">
                  <th colspan="5" style="border:1px solid #e0e0e0; padding:8px; width:100%;">Rebate for premiums paid from 1 July 2025 - 31 March 2026</th>
                </tr>

                <tr style="background:#ffffff; color:#262626; font-size:12px;">
                  <th style="border:1px solid #e0e0e0; padding:8px;">Aged <65 years</th>
                  <td style="border:1px solid #e0e0e0; padding:8px;">24.288%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">16.192%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">8.095%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">0%</td>
                </tr>

                <tr style="background:#ffffff; color:#262626; font-size:12px;">
                  <th style="border:1px solid #e0e0e0; padding:8px;">Aged 65 - 69 years</th>
                  <td style="border:1px solid #e0e0e0; padding:8px;">28.337%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">20.240%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">12.143%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">0%</td>
                </tr>

                <tr style="background:#ffffff; color:#262626; font-size:12px;">
                  <th style="border:1px solid #e0e0e0; padding:8px;">Aged 70 or over</th>
                  <td style="border:1px solid #e0e0e0; padding:8px;">32.385%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">24.288%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">16.192%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">0%</td>
                </tr>

                <tr style="background:#ffffff; color:#262626; font-size:12px; text-align:center;">
                  <th colspan="5" style="border:1px solid #e0e0e0; padding:8px; width:100%;">Rebate for premiums paid from 1 April 2026 - 30 June 2026</th>
                </tr>

                <tr style="background:#ffffff; color:#262626; font-size:12px;">
                  <th style="border:1px solid #e0e0e0; padding:8px;">Aged <65 years</th>
                  <td style="border:1px solid #e0e0e0; padding:8px;">24.118%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">16.079%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">8.038%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">0%</td>
                </tr>

                <tr style="background:#ffffff; color:#262626; font-size:12px;">
                  <th style="border:1px solid #e0e0e0; padding:8px;">Aged 65 - 69 years</th>
                  <td style="border:1px solid #e0e0e0; padding:8px;">28.139%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">20.098%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">12.058%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">0%</td>
                </tr>

                <tr style="background:#ffffff; color:#262626; font-size:12px;">
                  <th style="border:1px solid #e0e0e0; padding:8px;">Aged 70 or over</th>
                  <td style="border:1px solid #e0e0e0; padding:8px;">32.158%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">24.118%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">16.079%</td>
                  <td style="border:1px solid #e0e0e0; padding:8px;">0%</td>
                </tr>
              </tbody>
            </table>

            <p style="font-size:12px; text-align:center;">
              *Family Income thresholds increase by $1,500 for each additional dependent child after the first.<br>
              Offset not claimed in tax return.<br>
              Once lodged the ATO will determine any amounts payable or refundable based on Income for year and any premium reductions already received.<br>
              Any liability or refund will be shown on Notice of Assessment.
            </p>
        </div>
      `,
    ],
  },

  "Reasonable Domestic Daily Travel Allowances": {
    aliases: [
      "Reasonable Daily Rates",
      "Travel Allowances",
      "TD 2025/4",
      "Daily Rates",
    ],
    items: [
      `
                  <div>
                    <strong>2025/2026</strong>
                    <table style="width:100%; border-collapse:collapse; font-size:14px; text-align:center;">
                      <thead>
                        <tr style="background:#008427; color:#ffffff; font-size: 12px;">
                          <th rowspan="2" style="padding:12px 6px;">Place</th>
                          <th colspan="4" style="padding:12px 6px;">TABLE 1: Employee’s Annual Salary Range<br>$148,250 and below</th>
                          <th colspan="4" style="padding:12px 6px;">TABLE 2: Employee’s Annual Salary Range<br>$148,251 – $263,850</th>
                          <th colspan="4" style="padding:12px 6px;">TABLE 3: Employee’s Annual Salary Range<br>$263,851 and above</th>
                        </tr>

                        <tr style="background:#008427; color:#ffffff; font-size: 10px;">
                          <th style="padding:10px 6px;">Accomm<br>($)</th>
                          <th class="food-col"  style="padding:10px 6px;">Food & drink<br><span style="color:#ffffff;">Breakfast, Lunch, Dinner $34.75 | $39.10 | $66.65</span></th>
                          <th  style="padding:10px 6px;">Incidentals<br>($)</th>
                          <th  style="padding:10px 6px;">Total<br>($)</th>

                          <th style="padding:10px 6px;">Accomm<br>($)</th>
                          <th class="food-col"  style="padding:10px 6px;">Food & drink<br><span style="color:#ffffff;">Breakfast, Lunch, Dinner $37.85 | $53.45 | $75</span></th>
                          <th style="padding:10px 6px;">Incidentals<br>($)</th>
                          <th style="padding:10px 6px;">Total<br>($)</th>

                          <th style="padding:10px 6px;">Accomm<br>($)</th>
                          <th class="food-col"  style="padding:10px 6px;">Food & drink<br><span style="color:#ffffff;">Breakfast, Lunch, Dinner $42.15 | $59.60 | $83.40</span></th>
                          <th style="padding:10px 6px;">Incidentals<br>($)</th>
                          <th style="padding:10px 6px;">Total<br>($)</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr><td>Adelaide</td><td>158</td><td>140.50</td><td>24.50</td><td>323.00</td><td>211</td><td>166.30</td><td>35.05</td><td>412.35</td><td>211</td><td>185.15</td><td>35.05</td><td>431.20</td></tr>
                        <tr><td>Brisbane</td><td>181</td><td>140.50</td><td>24.50</td><td>346.00</td><td>257</td><td>166.30</td><td>35.05</td><td>458.35</td><td>257</td><td>185.15</td><td>35.05</td><td>477.20</td></tr>
                        <tr><td>Canberra</td><td>178</td><td>140.50</td><td>24.50</td><td>343.00</td><td>246</td><td>166.30</td><td>35.05</td><td>447.35</td><td>246</td><td>185.15</td><td>35.05</td><td>466.20</td></tr>
                        <tr><td>Darwin</td><td>220</td><td>140.50</td><td>24.50</td><td>385.00</td><td>293</td><td>166.30</td><td>35.05</td><td>494.35</td><td>293</td><td>185.15</td><td>35.05</td><td>513.20</td></tr>
                        <tr><td>Hobart</td><td>176</td><td>140.50</td><td>24.50</td><td>341.00</td><td>235</td><td>166.30</td><td>35.05</td><td>436.35</td><td>235</td><td>185.15</td><td>35.05</td><td>455.20</td></tr>
                        <tr><td>Melbourne</td><td>173</td><td>140.50</td><td>24.50</td><td>338.00</td><td>231</td><td>166.30</td><td>35.05</td><td>432.35</td><td>265</td><td>185.15</td><td>35.05</td><td>485.20</td></tr>
                        <tr><td>Perth</td><td>180</td><td>140.50</td><td>24.50</td><td>345.00</td><td>245</td><td>166.30</td><td>35.05</td><td>446.35</td><td>265</td><td>185.15</td><td>35.05</td><td>485.20</td></tr>
                        <tr><td>Sydney</td><td>223</td><td>140.50</td><td>24.50</td><td>388.00</td><td>297</td><td>166.30</td><td>35.05</td><td>498.35</td><td>297</td><td>185.15</td><td>35.05</td><td>517.20</td></tr>
                        <tr><td>High Cost Country Centres</td><td style="font-size: 10px;">See TD 2025/4</td><td>140.50</td><td>24.50</td><td style="font-size: 10px;">Variable - See TD 2025/4</td><td style="font-size: 10px;">See TD 2025/4</td><td>166.30</td><td>35.05</td><td style="font-size: 10px;">Variable - See TD 2025/4</td><td style="font-size: 10px;">$207 or the relevant amount if TD 2025/4 is higher</td><td>185.15</td><td>35.05</td><td style="font-size: 10px;">Variable - See TD 2025/4</td></tr>
                        <tr><td>Other Country Centres</td><td>141</td><td>128</td><td>24.50</td><td>293.50</td><td>188</td><td>139.30</td><td>35.05</td><td>362.35</td><td style="font-size: 10px;">$207 or the relevant amount if TD 2025/4 is higher</td><td>185.15</td><td>35.05</td><td style="font-size: 10px;">Variable - See TD 2025/4</td></tr>
                      </tbody>
                    </table>
                  </div>
                    `,
    ],
  },

  "Reportable Fringe Benefits / Reportable Superannuation Contributions": {
    aliases: ["RFB", "RESC", "Super", "Fringe Benefits"],
    items: [
      `
        <div>
          <p style="font-size: 16px">Reportable Fringe Benefits and Reportable Superannuation Contributions impact on the following:</p>
          <ul>
              <li>Child Support Obligations</li>
              <li>Division 293 Tax</li>
              <li>Dependant Invalid and Invalid Carer Tax Offset</li>
              <li>Employee Share Scheme – Div. 83A</li>
              <li>Entitlement to Certain Income Tested Government Benefits</li>
              <li>Entitlement to Super Co-contribution</li>
              <li>Financial Supplement Scheme Repayments</li>
              <li>HELP Repayments</li>
              <li>Medicare Levy Surcharge</li>
              <li>Private Health Insurance Rebate</li>
              <li>Seniors and Pensioners Tax Offset</li>
              <li>Tax Offset for Contributions to Spouse's Superannuation</li>
          </ul>
        </div>
      `,
    ],
  },

  "Senior Australian and Pensioner Tax Offset (SAPTO)": {
    aliases: [
      "SAPTO",
      "Senior Australian and Pensioner Tax Offset",
      "Seniors",
      "Tax Offset",
    ],
    items: [
      `
                <div>
                  <strong>2025/2026</strong>
                    <table style="width:100%; border-collapse:collapse; font-size:15px; text-align:center;">
                      <thead>
                        <tr style="background:#008427; color:#ffffff;font-size:12px;">
                          <th style="border:1px solid #ccc; padding:6px;">Pensioner Code Letter</th>
                          <th style="border:1px solid #ccc; padding:6px;">Taxpayer may get up to the full Tax Offset<br> if their rebate income is equal to or less than this amount</th>
                          <th style="border:1px solid #ccc; padding:6px;">Taxpayer will not get a Tax Offset <br>if their rebate income is equal to or more than this amount</th>
                          <th style="border:1px solid #ccc; padding:6px;">Maximum Tax Offset</th>
                        </tr>
                      </thead>
                            <tbody>
                              <tr><td style="border:1px solid #ccc; padding:6px;">A</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$34,919</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$52,759</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$2,230</td></tr>
                              <tr><td style="border:1px solid #ccc; padding:6px;">B, C</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$30,994</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$43,810</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$1,602</td></tr>
                              <tr><td style="border:1px solid #ccc; padding:6px;">D, E</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$33,732</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$50,052</td><td style="border:1px solid #ccc; padding:6px; text-align:center;">$2,040</td></tr>
                          </tbody>
                          </table>
                </div>
                `,
    ],
  },

  "Student Loans": {
    aliases: ["HELP", "HECS", "SFSS", "Student Loans"],
    items: [
      `
                  <div>
                    <strong></strong>
                    <table style="width:60%; border-collapse:collapse; font-size:15px; text-align:center;">
                      <thead>
                        <tr style="background:#008427; color:#ffffff; font-size:12px;">
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">Repayment Income</th>
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">Rate </th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Repayment Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$0 - $67,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">0%</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Nil</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$67,001 - $125,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">15%</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">15c for each $1 over $67,000</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$125,001 – $179,285</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">17%</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$8,700 + 17c for each $1 over $125,000</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$179,286 and over</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">10%</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">10% of total repayment income</td>
                        </tr>
                      </tbody>
                    </table>
                    <p style="font-size: 12px">*No repayments required if Medicare Levy reduced because of low family income.</p>
                  </div>
                `,
    ],
  },

  "Summary of Vehicle Expenses Claim Methods": {
    aliases: ["MV", "Summary", "Summary of Vehicle Expense Claim Methods"],
    items: [
      `
                  <div>
                    <strong></strong>
                    <table style="width:60%; border-collapse:collapse; font-size:15px; text-align:center;">
                      <thead>
                        <tr style="background:#008427; color:#ffffff; font-size:12px;">
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">.</th>
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">Cents per km</th>
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">Logbook</th>
                        <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">Actual Expenses</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style="background:#ffffff;">
                          <td style="background:#008427; color: #ffffff; border:1px solid #e0e0e0; padding:8px;"><strong>Eligibility<strong></td>
                          <td colspan="2" style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Vehicle must be a 'car' owned or leased by the taxpayer</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Vehicles other than cars and cars not owned or leased by the taxpayer. May be used for certain cars used in particular ways.</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="background:#008427; color: #ffffff; border:1px solid #e0e0e0; padding:8px;"><strong>Restrictions<strong></td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Limited to 5,000 km business use</td>
                          <td colspan="2" style="border:1px solid #e0e0e0; padding:8px; color:#262626;">No upper or lower limit on business kms</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="background:#008427; color: #ffffff; border:1px solid #e0e0e0; padding:8px;"><strong>Basis of Calculation<strong></td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Estimate of business kms</td>
                          <td colspan="2" style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Operating expenses for the financial year</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="background:#008427; color: #ffffff; border:1px solid #e0e0e0; padding:8px;"><strong>Formula<strong></td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Multiply business kms by rate</td>
                          <td colspan="2" style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Multiply expenses by business use %</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="background:#008427; color: #ffffff; border:1px solid #e0e0e0; padding:8px;"><strong>Substantiation<strong></td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Reasonable estimate of kilometres</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Logbook (current) and receipts. Fuel can be calculated</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Establishment of business % and receipts for all expenses (including fuel)</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                `,
    ],
  },

  "Tax Rates - Minor's Unearned Income": {
    aliases: ["minors", "Tax Rates"],
    items: [
      `
                  <div>
                    <strong>2025/2026</strong>
                    <table style="width:65%; border-collapse:collapse; font-size:15px; text-align:center;">
                      <thead>
                        <tr style="background:#008427; color:#ffffff; font-size:12px;">
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">Elgible Income</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Tax Payable</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$0 – $416</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Nil</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$417 – $1,307</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">66% for the part over $416</td>
                        </tr>

                          <tr style="background:#ffffff;">
                            <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Excess over $1,307</td>
                            <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">45% on entire amount of eligible income</td>
                        </tr>
                      </tbody>
                    </table>
                    <p style="font-size: 12px">Earned Income taxed at (adult) marginal rates. Since 2013 the Low Income Tax Offset can only be applied to excepted net Income of minors.</p>
                  </div>
                `,
    ],
  },

  "Tax Rates - Non-Resident": {
    aliases: ["non resident", "Tax Rates"],
    items: [
      `
                  <div>
                    <strong>2025/2026</strong>
                    <table style="width:50%; border-collapse:collapse; font-size:15px; text-align:center;">
                      <thead>
                        <tr style="background:#008427; color:#ffffff; font-size:12px;">
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">Taxable Income</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Tax Payable</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$0 – $135,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">30.0%</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$135,001 – $190,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$40,500 + 37% of excess over $135,000</td>
                        </tr>

                          <tr style="background:#ffffff;">
                            <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$190,001 and over</td>
                            <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$60,850 + 45% of excess over $190,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                `,
    ],
  },

  "Tax Rates - Resident": {
    aliases: ["resident", "Tax Rates"],
    items: [
      `
                  <div>
                    <strong>2025/2026 (Reduction Method)</strong>
                    <table style="width:60%; border-collapse:collapse; font-size:15px; text-align:center;">
                      <thead>
                        <tr style="background:#008427; color:#ffffff; font-size:12px;">
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">Taxable Income</th>
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">Rate</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Reduction Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$0 – $18,200</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Nil</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">Nil</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$18,201 - $45,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">0.16</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$2,912</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$45,001 - $135,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">0.30</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$9,212</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$135,001 - $190,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">0.37</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$18,662</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$190,000 and over</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">0.45</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$33,862</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                `,
    ],
  },

  "Tax Rates - Working Holiday Makers": {
    aliases: ["WHM", "Tax Rates", "Working Holiday Makers"],
    items: [
      `
                  <div>
                    <strong>2025/2026</strong>
                    <table style="width:90%; border-collapse:collapse; font-size:15px; text-align:center;">
                      <thead>
                        <tr style="background:#008427; color:#ffffff; font-size:12px;">
                          <th colspan="1" style="border:1px solid #e0e0e0; padding:8px;">Taxable Income</th>
                          <th style="border:1px solid #e0e0e0; padding:8px;">Tax Payable</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$0 – $45,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">15c for each $1</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$45,001 – $135,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$6,750 plus 30c for each $1 over $45,000</td>
                        </tr>

                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$135,001 - $190,000</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$33,750 plus 37c for each $1 over $135,000</td>
                        </tr>
                        <tr style="background:#ffffff;">
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$190,001 and over</td>
                          <td style="border:1px solid #e0e0e0; padding:8px; color:#262626;">$54,100 plus 45c for each $1 over $190,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                `,
    ],
  },
};

// -------------------------------------------
// DATA STRUCTURE (Calculations aliases + items)
// -------------------------------------------
const calculations = {
  "Adjusted Tax Free Threshold": {
    aliases: [
      "tax free",
      "threshold",
      "adjusted threshold",
      "resident threshold",
      "partial year",
    ],
    items: [
      "To work out the <strong>Adjusted Tax-Free Threshold</strong>:<p>⭐Enter the number of months the taxpayer was in Australia</p><p>⭐Click <strong>Calculate</strong></p><p>The formula used is:<br><strong><br>  = $13,464 + ($4,736 × months in Australia / 12 months)</strong></p>",
    ],
    calculator: `
        <div class="calc-box">

            <label>Months in Australia (0–12):</label>
            <input id="tftMonths" type="number" min="0" max="12">

            <button onclick="calcAdjustedTFT()">Calculate</button>

            <div id="tftResult"></div>
        </div>
    `,
  },

  "Borrowing Costs - Rental Property": {
    aliases: [
      "borrowing",
      "loan fees",
      "mortgage fees",
      "lmi",
      "borrowing costs",
      "rental",
    ],
    items: [
      "Calculate the deductible amount of borrowing costs on a rental property. Allow for rounding differences.</p>⭐Enter each borrowing cost item</p><p>⭐Enter the loan start date</p><p>⭐Enter the loan term (years)</p><p>⭐Enter the work‑related use percentage</p><p>⭐Click <strong>Submit</strong> to calculate deductible amounts for each year</p></p>",
    ],
    calculator: `
    <div class="calc-box">

      <table class="bc-table">
        <tr style="color: #ffffff; background: #008427; height: 50px;"><th>Description</th><th>Amount ($)</th></tr>
        <tr><td>Solicitor’s fees</td><td><input id="bcSolicitor" type="number"></td></tr>
        <tr><td>Loan establishment fee</td><td><input id="bcEstablishment" type="number"></td></tr>
        <tr><td>Title search fees</td><td><input id="bcTitle" type="number"></td></tr>
        <tr><td>Stamp duty on mortgage</td><td><input id="bcStamp" type="number"></td></tr>
        <tr><td>Mortgage broker fees</td><td><input id="bcBroker" type="number"></td></tr>
        <tr><td>Valuation fees</td><td><input id="bcValuation" type="number"></td></tr>
        <tr><td>Lender’s mortgage insurance (LMI)</td><td><input id="bcLMI" type="number"></td></tr>
        <tr><td>Other</td><td><input id="other" type="number"></td></tr>
        <tr><td><strong>Total borrowing costs</strong></td><td><input id="bcTotal" type="number" readonly></td></tr>
      </table>

      <label>Loan Start Date:</label>
      <input id="bcStartDate" type="date">

      <label>Loan Term (years):</label>
      <input id="bcTerm" type="number" min="1" max="30">

      <label>Work Use Percentage (%):</label>
      <input id="bcUsePct" type="number" min="0" max="100" placeholder="e.g. 100 or 81.34">

      <button onclick="calcBorrowingCosts()">Submit</button>

      <div id="bcResult"></div>
      
    </div>
  `,
  },

  "Days Between Dates": {
    aliases: ["days", "date difference", "between dates"],
    items: [
      "Calculate the number of days between two dates. This calculator requires you to:<p>⭐Enter a start date</p><p>⭐Enter an end date</p><p>⭐Click <strong>Calculate</strong></p>   ",
    ],
    calculator: `
                  <div class="calc-box">

                      <label>Start Date:</label>
                      <input id="startDate" type="date">

                      <label>End Date:</label>
                      <input id="endDate" type="date">

                      <button onclick="calcDays()">Calculate</button>

                      <div id="dateResult"></div>
                  </div>
              `,
  },

  "Fuel Calculation Worksheet": {
    aliases: [
      "fuel",
      "petrol",
      "diesel",
      "fuel cost",
      "fuel consumption",
      "worksheet",
    ],
    items: [
      "Calculate fuel usage and cost based on kilometres travelled and regional fuel rates.<p>⭐ Select year of tax return, state and fuel type from dropdown menus</p><p>⭐ Enter the total kilometres travelled as well as the fuel consumption data (you must enter at least one)</p>⭐ Click <strong>Calculate</strong></p><p>⭐ You can then choose the amount based on the type of driving conditions</p>",
    ],
    calculator: `
  <div class="calc-box fuel-layout">

    <table class="fuel-table">

      <!-- Year + State -->
      <tr>
        <th>Year</th>
        <td>
          <select id="fuelYear">
            <option>2025 / 2026</option>
            <option>2024 / 2025</option>
            <option>2023 / 2024</option>
            <option>2022 / 2023</option>
            <option>2021 / 2022</option>
            <option>2020 / 2021</option>
            <option>2019 / 2020</option>
          </select>
        </td>

        <th>State</th>
        <td>
          <select id="fuelState">
            <option>VIC</option><option>NSW</option><option>QLD</option><option>SA</option>
            <option>WA</option><option>TAS</option><option>NT</option><option>ACT</option>
          </select>
        </td>
      </tr>

      <!-- Fuel Type + Model -->
      <tr>
        <th>Fuel Type</th>
        <td>
          <select id="fuelType">
            <option>Petrol</option><option>Diesel</option>
          </select>
        </td>

        <th>Make / Model</th>
        <td><input id="fuelModel" type="text" placeholder="e.g. Nissan X‑Trail"></td>
      </tr>

      <!-- Fuel Consumption -->
      <tr class="section-header">
        <th colspan="4">Fuel Consumption (L/100km)</th>
      </tr>

      <!-- Row 1: Total kilometres travelled -->
      <tr>
        <th>Enter Total Kilometres</th>
        <td style="text-align:center;">
          <input id="fuelKm" type="number" style="width:200px;">
        </td>
      </tr>

      <!-- Row 2: Combined, Urban, Extra all on one row -->
      <tr>
        <th>Fuel Consumption</th>
        <th>          
          <select id="consumptiondata">
            <option>Combined</option>
            <option>Urban</option>
            <option>Extra</option>
          </select></th>
        <th></th>
        <th></th>
      </tr>

      <tr>
        <td></td>
        <td><input id="fuelComb" type="number" step="0.1;"></td>
      </tr>

    </table>

    <!-- Calculate button directly under Fuel Consumption -->
    <button class="fuel-calc-btn" onclick="calcFuelWorksheet()">Calculate</button>

    <!-- Fuel Prices -->
    <table class="fuel-table" id="fuelPriceTable">
      <tr class="section-header">
        <th colspan="4">Fuel Prices</th>
      </tr>

      <tr class="fuel-price-headings">
        <th>Statewide</th>
        <th>Regional</th>
        <th id="capitalCityHeading">Capital City</th>
        <th>Average</th>
      </tr>

      <tr>
        <td><span id="fpStatewide">–</span></td>
        <td><span id="fpRegional">–</span></td>
        <td><span id="fpCapital">–</span></td>
        <td><span id="fpAverage">–</span></td>
      </tr>
    </table>

    <!-- Calculation Results -->
    <table class="fuel-table" id="fuelCalcResults" style="display:none;">
      <tr class="section-header">
        <th colspan="4">Calculation Results ($)</th>
      </tr>

      <tr class="fuel-price-headings">
        <th>Statewide</th>
        <th>Regional</th>
        <th id="capitalCityHeading2">Capital City</th>
        <th>Average</th>
      </tr>

      <tr>
        <td><span id="fcStatewide">–</span></td>
        <td><span id="fcRegional">–</span></td>
        <td><span id="fcCapital">–</span></td>
        <td><span id="fcAverage">–</span></td>
      </tr>
    </table>

  </div>
`,
  },

  Telephone: {
    aliases: ["telephone", "phone", "mobile"],
    items: [
      "You can claim the work-related portion of your phone bill. This calculator requires you to:<p>⭐Choose a phone bill over a 30 day representative period</p><p>⭐Enter total work calls or minutes</p><p>⭐Enter total calls or minutes</p><p>⭐Enter number of weeks not worked and where no work was performed</p><p>⭐Click <strong>Calculate</strong></p>   ",
    ],
    calculator: `
                  <div class="calc-box">

                      <label>Work Calls / Minutes:</label>
                      <input id="telWorkCalls" type="number">

                      <label>Total Calls / Minutes:</label>
                      <input id="telTotalCalls" type="number">

                      <label>Monthly bill ($):</label>
                      <input id="telBill" type="number">

                      <label>Number of weeks where no work was performed):</label>
                      <input id="telAnnualLeave" type="number">

                      <button onclick="calcTelephone()">Calculate</button>

                      <div id="telResult"></div>
                  </div>
              `,
  },

  "Tax on Taxable Income - 2024/2025": {
    aliases: ["tax", "tax on taxable income", "reduction method"],
    items: [
      "Calculate the tax on taxable income amount using the reduction method. <p><strong>= taxable income x rate - reduction amount</strong></p>",
    ],
    calculator: `
                  <div class="calc-box">

                      <label>Assessable Income:</label>
                      <input id="assessableIncome" type="number">

                      <label>Total Deductions:</label>
                      <input id="totalDeductions" type="number">

                      <button onclick="calcTax2025()">Calculate</button>

                      <div id="tax2025Result"></div>
                  </div>
              `,
  },

  "Tax on Taxable Income - 2025/2026": {
    aliases: ["tax", "tax on taxable income", "reduction method"],
    items: [
      "Calculate the tax on taxable income amount using the reduction method. <p><strong>= taxable income x rate - reduction amount</strong></p>",
    ],
    calculator: `
                  <div class="calc-box">

                      <label>Assessable Income:</label>
                      <input id="assessableIncome26" type="number">

                      <label>Total Deductions:</label>
                      <input id="totalDeductions26" type="number">

                      <button onclick="calcTax2026()">Calculate</button>

                      <div id="tax2026Result"></div>
                  </div>
              `,
  },

  "Tax on Taxable Income - 2026/2027": {
    aliases: ["tax", "tax on taxable income", "reduction method"],
    items: [
      "Calculate the tax on taxable income amount using the reduction method. <p><strong>= taxable income x rate - reduction amount</strong></p>",
    ],
    calculator: `
                  <div class="calc-box">

                      <label>Assessable Income:</label>
                      <input id="assessableIncome27" type="number">

                      <label>Total Deductions:</label>
                      <input id="totalDeductions27" type="number">

                      <button onclick="calcTax2027()">Calculate</button>

                      <div id="tax2027Result"></div>
                  </div>
              `,
  },
};

/* ============================================================
         REUSABLE SEARCH ENGINE
      ============================================================ */

function runSearch(term, dataset, resultsDivId) {
  const resultsDiv = document.getElementById(resultsDivId);
  resultsDiv.innerHTML = "";

  if (!term) return;

  term = term.toLowerCase();
  let matches = [];

  for (const key in dataset) {
    const aliases = dataset[key].aliases.map((a) => a.toLowerCase());
    if (aliases.some((alias) => alias.includes(term))) {
      matches.push(key);
    }
  }

  if (matches.length === 0) {
    resultsDiv.innerHTML = "<p>No matches found.</p>";
    return;
  }

  if (matches.length > 1) {
    resultsDiv.innerHTML = "<strong>Select an option:</strong><br><br>";
    matches.forEach((key) => {
      const div = document.createElement("div");
      div.className = "match-item";
      div.textContent = "📌 " + key;
      div.onclick = () => showDetails(key, dataset, resultsDivId);
      resultsDiv.appendChild(div);
    });
    return;
  }

  showDetails(matches[0], dataset, resultsDivId);
}

/* ============================================================
         SHOW DETAILS
      ============================================================ */

function showDetails(key, dataset, resultsDivId) {
  const resultsDiv = document.getElementById(resultsDivId);
  const entry = dataset[key];

  // If no match found
  if (!entry) {
    resultsDiv.innerHTML = "<p>No details found.</p>";
    return;
  }

  // Start building HTML
  let html = `<h3>${key}</h3>`;

  // Standard items (deductions, rates)
  entry.items.forEach((item) => {
    html += `<div class="result-item">${item}</div>`;
  });

  // ⭐ CALCULATOR SUPPORT (from v1)
  if (entry.calculator) {
    html += `
            <div class="result-item">
              ${entry.calculator}
            </div>
          `;
  }

  // Push to screen
  resultsDiv.innerHTML = html;
}

/* ============================================================
         TAB HANDLING
      ============================================================ */

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-tab");

    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById("tab-" + target).classList.add("active");
  });
});

/* ============================================================
         SEARCH FIELD EVENT LISTENERS
      ============================================================ */

document.getElementById("searchDeductions").addEventListener("keyup", (e) => {
  runSearch(e.target.value, deductions, "deductionResults");
});

document.getElementById("searchRates").addEventListener("keyup", (e) => {
  runSearch(e.target.value, rates, "rateResults");
});

document.getElementById("searchCalculations").addEventListener("keyup", (e) => {
  runSearch(e.target.value, calculations, "calculationResults");
});

/* ------------------------------
         WIRE UP SEARCH BOXES
      ------------------------------ */
document
  .getElementById("searchDeductions")
  .addEventListener("input", function () {
    runSearch(this.value, deductions, "deductionResults");
  });

document.getElementById("searchRates").addEventListener("input", function () {
  runSearch(this.value, rates, "rateResults");
});

document
  .getElementById("searchCalculations")
  .addEventListener("input", function () {
    runSearch(this.value, calculations, "calculationResults");
  });

/* ------------------------------
         CALCULATIONS
      ------------------------------ */
/* ------------------------------
         ADJUSTED TAX FREE THRESHOLD
      ------------------------------ */
function calcAdjustedTFT() {
  const months = Number(document.getElementById("tftMonths").value);

  if (isNaN(months) || months < 0 || months > 12) {
    document.getElementById("tftResult").innerHTML =
      "<p>Please enter a valid number between 0 and 12.</p>";
    return;
  }

  const adjusted = 13464 + 4736 * (months / 12);

  document.getElementById("tftResult").innerHTML = `
        <p style="font-size: 20px"><strong> $${adjusted.toFixed(2)}</strong></p>
        <p>Calculation: $13,464 + ($4,736 × ${months} months / 12 months)</p>
    `;
}

/* ------------------------------
         BORROWING COSTS CALCULATOR
      ------------------------------ */
function round2(value) {
  // Round half up: 0–49 down, 50–99 up
  return Math.round(value * 100) / 100;
}

function calcBorrowingCosts() {
  const fields = [
    "bcSolicitor",
    "bcEstablishment",
    "bcTitle",
    "bcStamp",
    "bcBroker",
    "bcValuation",
    "bcLMI",
    "other",
  ];

  let total = 0;
  fields.forEach((id) => {
    const val = Number(document.getElementById(id).value);
    if (!isNaN(val)) total += val;
  });

  document.getElementById("bcTotal").value = total.toFixed(2);

  const startDate = document.getElementById("bcStartDate").value;
  const termYears = Number(document.getElementById("bcTerm").value);
  const usePct = Number(document.getElementById("bcUsePct").value) / 100;

  if (!startDate || termYears <= 0 || isNaN(usePct)) {
    document.getElementById("bcResult").innerHTML =
      "<p>Please enter all required fields.</p>";
    return;
  }

  // If ≤ $100 → full deduction in year 1
  if (total <= 100) {
    document.getElementById("bcResult").innerHTML = `
      <p><strong>Total Deduction (Year 1):</strong> $${total.toFixed(2)}</p>
      <p>Borrowing costs are ≤ $100, so the full amount is deductible in the first year.</p>
    `;
    return;
  }

  const start = new Date(startDate);

  // Amortisation period = min(termYears, 5)
  const amortYears = Math.min(termYears, 5);

  // End date of amortisation period (5 years or loan term)
  const amortEnd = new Date(start);
  amortEnd.setFullYear(start.getFullYear() + amortYears);
  amortEnd.setDate(amortEnd.getDate() - 2); // FIX: end date is inclusive

  // Total amortisation days (include start date)
  const totalDays = Math.ceil((amortEnd - start) / (1000 * 60 * 60 * 24)) + 1;

  // Determine if we need a stub year (loan starts after 30 June)
  const needsStubYear = start.getMonth() > 5; // July = month 6
  const loopYears = needsStubYear ? amortYears + 1 : amortYears;

  let rowsHTML = "";
  let yearStart = new Date(start);

  for (let year = 1; year <= loopYears; year++) {
    let yearEnd;

    // Final displayed year ends at amortisation end date
    if (year === loopYears) {
      yearEnd = new Date(amortEnd);
    } else {
      // End of financial year (30 June)
      yearEnd = new Date(yearStart.getFullYear(), 5, 30);

      // If loan starts after 30 June, move to next FY
      if (yearStart > yearEnd) {
        yearEnd = new Date(yearStart.getFullYear() + 1, 5, 30);
      }
    }

    // Days in this year (include start date)
    const daysInYear =
      Math.ceil((yearEnd - yearStart) / (1000 * 60 * 60 * 24)) + 1;

    // Raw calculations
    const yearPortionRaw = total * (daysInYear / totalDays);
    const deductibleRaw = yearPortionRaw * usePct;

    // Rounded values (round half up)
    const yearPortion = round2(yearPortionRaw);
    const deductible = round2(deductibleRaw);

    rowsHTML += `
      <tr>
        <td>${year}</td>
        <td>${daysInYear}</td>
        <td>$${yearPortion.toFixed(0)}</td>
        <td>${(usePct * 100).toFixed(2)}%</td>
        <td>$${deductible.toFixed(0)}</td>
      </tr>
    `;

    // Next year starts the day after yearEnd
    yearStart = new Date(yearEnd);
    yearStart.setDate(yearStart.getDate() + 1);
  }

  document.getElementById("bcResult").innerHTML = `
    <h4>Borrowing Costs Calculation</h4>
    <table class="solution-table">
      <tr style="background:#008427;color:#fff;text-align:center;">
        <th>Year</th>
        <th>Days in Year</th>
        <th>Year Portion</th>
        <th>Work Use %</th>
        <th>Deductible Amount</th>
      </tr>
      ${rowsHTML}
    </table>
  `;
}

/* ------------------------------
         DAYS CALCULATION
      ------------------------------ */
function calcDays() {
  const start = new Date(document.getElementById("startDate").value);
  const end = new Date(document.getElementById("endDate").value);

  if (isNaN(start) || isNaN(end)) {
    document.getElementById("dateResult").innerHTML =
      "<strong>Please enter valid dates</strong>";
    return;
  }

  const diffMs = end - start;
  const diffDays = diffMs / (1000 * 60 * 60 * 24) + 1;

  document.getElementById("dateResult").innerHTML =
    "<strong>Number of days: " + diffDays + "</strong>";
}

/* ------------------------------
         FUEL CALCULATION
      ------------------------------ */

        function calcFuelWorksheet() {
          const year = document.getElementById("fuelYear").value;
          const state = document.getElementById("fuelState").value;
          const type = document.getElementById("fuelType").value;
          const comb = parseFloat(document.getElementById("fuelComb").value);
          const km = parseFloat(document.getElementById("fuelKm").value);

          const yearData = fuelRates[year]?.[type]?.[state];

          if (!yearData) {
            alert("No fuel rate data found for that selection.");
            return;
          }

          // Correct capital city names
          const capitalCities = {
            VIC: "Melbourne",
            NSW: "Sydney",
            QLD: "Brisbane",
            SA: "Adelaide",
            WA: "Perth",
            TAS: "Hobart",
            NT: "Darwin",
            ACT: "Canberra",
          };

//          document.getElementById("capitalCityHeading").innerText =
//            capitalCities[state];
          document.getElementById("capitalCityHeading2").innerText =
            capitalCities[state];

          // Fill fuel price table
          document.getElementById("fpStatewide").innerText = yearData.statewide ?? "–";
          document.getElementById("fpRegional").innerText = yearData.regional ?? "–";
          document.getElementById("fpCapital").innerText = yearData.capital ?? "–";
          document.getElementById("fpAverage").innerText = yearData.average ?? "–";

          if (isNaN(comb) || isNaN(km)) {
            alert("Please enter fuel consumption and kilometres.");
            return;
          }

          const calcCost = (rate) => ((comb * km) / 100) * (rate / 100);

          // Fill calculation results table
          document.getElementById("fcStatewide").innerText =
            "$" + calcCost(yearData.statewide).toFixed(2);
          document.getElementById("fcRegional").innerText =
            "$" + calcCost(yearData.regional).toFixed(2);
//          document.getElementById("fcCapital").innerText =
//            "$" + calcCost(yearData.capital).toFixed(2);
          document.getElementById("fcAverage").innerText =
            "$" + calcCost(yearData.average).toFixed(2);

          document.getElementById("fuelCalcResults").style.display = "table";
        }

/* ------------------------------
         TELEPHONE CALCULATION
      ------------------------------ */
function calcTelephone() {
  const workCalls =
    parseFloat(document.getElementById("telWorkCalls").value) || 0;
  const totalCalls =
    parseFloat(document.getElementById("telTotalCalls").value) || 0;

  const bill = parseFloat(document.getElementById("telBill").value) || 0;

  const annualLeave =
    parseFloat(document.getElementById("telAnnualLeave").value) || 0;

  const result =
    ((bill * 12) / 52) * (52 - annualLeave) * (workCalls / totalCalls);

  document.getElementById("telResult").innerHTML =
    "<strong>Deductible amount: $" + result.toFixed(2) + "</strong>";
}

/* -----------------------------------------
         TAX ON TAXABLE INCOME CALCULATION - 2025
      -------------------------------------------- */
function calcTax2025() {
  const assessable =
    parseFloat(document.getElementById("assessableIncome").value) || 0;
  const deductions =
    parseFloat(document.getElementById("totalDeductions").value) || 0;

  const taxable = assessable - deductions;
  let tax = 0;

  if (taxable <= 18200) {
    tax = 0;
  } else if (taxable <= 45000) {
    tax = taxable * 0.16 - 2912;
  } else if (taxable <= 135000) {
    tax = taxable * 0.3 - 9212;
  } else if (taxable <= 190000) {
    tax = taxable * 0.37 - 18662;
  } else {
    tax = taxable * 0.45 - 33862;
  }

  document.getElementById("tax2025Result").innerHTML =
    "<strong>Tax payable: $" + tax.toFixed(2) + "</strong>";
}

/* -----------------------------------------
         TAX ON TAXABLE INCOME CALCULATION - 2026
      -------------------------------------------- */
function calcTax2026() {
  const assessable =
    parseFloat(document.getElementById("assessableIncome26").value) || 0;
  const deductions =
    parseFloat(document.getElementById("totalDeductions26").value) || 0;

  const taxable = assessable - deductions;
  let tax = 0;

  if (taxable <= 18200) {
    tax = 0;
  } else if (taxable <= 45000) {
    tax = taxable * 0.16 - 2912;
  } else if (taxable <= 135000) {
    tax = taxable * 0.3 - 9212;
  } else if (taxable <= 190000) {
    tax = taxable * 0.37 - 18662;
  } else {
    tax = taxable * 0.45 - 33862;
  }

  document.getElementById("tax2026Result").innerHTML =
    "<strong>Tax payable: $" + tax.toFixed(2) + "</strong>";
}

/* -----------------------------------------
         TAX ON TAXABLE INCOME CALCULATION - 2027
      -------------------------------------------- */
function calcTax2027() {
  const assessable =
    parseFloat(document.getElementById("assessableIncome27").value) || 0;
  const deductions =
    parseFloat(document.getElementById("totalDeductions27").value) || 0;

  const taxable = assessable - deductions;
  let tax = 0;

  if (taxable <= 18200) {
    tax = 0;
  } else if (taxable <= 45000) {
    tax = taxable * 0.15 - 2730;
  } else if (taxable <= 135000) {
    tax = taxable * 0.3 - 9480;
  } else if (taxable <= 190000) {
    tax = taxable * 0.37 - 18930;
  } else {
    tax = taxable * 0.45 - 34130;
  }

  document.getElementById("tax2027Result").innerHTML =
    "<strong>Tax payable: $" + tax.toFixed(2) + "</strong>";
}

/* ============================================================
         PRINT BUTTON
      ============================================================ */

document.getElementById("printBtn").addEventListener("click", () => {
  window.print();
});

/* ============================================================
   1.1 to 1.5 relate to RATES
    1.1 PRE‑RENDER RATES LIST — CLICK TO EXPAND
   ============================================================ */
function renderRatesList() {
  const container = document.getElementById("rateResults");

  container.innerHTML = Object.keys(rates)
    .map((key) => {
      const rate = rates[key];
      return `
        <div class="rate-item" data-keywords="${rate.aliases.join(" ").toLowerCase()}">
            <h3 class="rate-title" style="cursor:pointer; color:#000000; font-weight: normal;">📌 ${key}</h3>

            <div class="rate-content" style="display:none; margin-top:10px;">
                ${rate.items.join("")}

                <button class="rate-back-btn" 
                        style="margin-top:15px; padding:8px 12px; background:#6c757d; color:white; border:none; border-radius:6px; cursor:pointer;">
                    ← Back
                </button>
            </div>
        </div>
      `;
    })
    .join("");
}


/* ============================================================
   1.2 FILTER WHEN TYPING
   ============================================================ */
document.getElementById("searchRates").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const items = document.querySelectorAll(".rate-item");

  items.forEach((item) => {
    const keywords = item.dataset.keywords;
    const text = item.textContent.toLowerCase();

    if (term === "" || keywords.includes(term) || text.includes(term)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

/* ============================================================
   1.3 INITIALISE ON LOAD
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderRatesList();
});

/* ============================================================
   1.4 CLICK TITLE → SHOW ONLY THAT ITEM
   ============================================================ */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("rate-title")) {

    // Get all rate items
    const allItems = document.querySelectorAll(".rate-item");

    // The clicked item
    const clickedItem = e.target.parentElement;

    // Hide all items
    allItems.forEach(item => {
      item.style.display = "none";
    });

    // Show only the clicked item
    clickedItem.style.display = "block";

    // Expand its content
    const content = clickedItem.querySelector(".rate-content");
    content.style.display = "block";

    // Scroll into view
    clickedItem.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

/* ============================================================
   1.5 BACK BUTTON — RETURN TO FULL LIST
   ============================================================ */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("rate-back-btn")) {

    // Show all rate items
    const allItems = document.querySelectorAll(".rate-item");
    allItems.forEach(item => {
      item.style.display = "block";
    });

    // Collapse all content blocks
    const allContent = document.querySelectorAll(".rate-content");
    allContent.forEach(content => {
      content.style.display = "none";
    });

    // Scroll back to top of Rates tab
    document.getElementById("tab-rates").scrollIntoView({ behavior: "smooth" });
  }
});

/* ============================================================
   2.1 to 2.5 relate to CALCUALTIONS
    2.1 PRE‑RENDER CALCULATIONS LIST
   ============================================================ */
function renderCalculationsList() {
  const container = document.getElementById("calculationResults");

  container.innerHTML = Object.keys(calculations)
    .map((key) => {
      const calc = calculations[key];
      return `
        <div class="calculation-item" data-keywords="${calc.aliases.join(" ").toLowerCase()}">

            <h3 class="calculation-title" style="cursor:pointer; color:#000; font-weight: normal;">🧮 ${key}</h3>

            <div class="calculation-content" style="display:none; margin-top:10px;">
                
                <div class="calc-description">
                    ${calc.items.join("")}
                </div>

                <div class="calc-ui">
                    ${calc.calculator}
                </div>

                <button class="calculation-back-btn"
                        style="margin-top:15px; padding:8px 12px; background:#6c757d; color:white; border:none; border-radius:6px; cursor:pointer;">
                    ← Back
                </button>

            </div>
        </div>
      `;
    })
    .join("");
}

/* ============================================================
   2.2 FILTER CALCULATIONS WHEN TYPING
   ============================================================ */
document.getElementById("searchCalculations").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const items = document.querySelectorAll(".calculation-item");

  items.forEach((item) => {
    const keywords = item.dataset.keywords;
    const text = item.textContent.toLowerCase();

    if (term === "" || keywords.includes(term) || text.includes(term)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

/* ============================================================
   2.3 CLICK TITLE → SHOW ONLY THAT CALCULATION
   ============================================================ */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("calculation-title")) {

    const allItems = document.querySelectorAll(".calculation-item");
    const clickedItem = e.target.parentElement;

    // Hide all
    allItems.forEach(item => item.style.display = "none");

    // Show clicked
    clickedItem.style.display = "block";

    // Expand content
    const content = clickedItem.querySelector(".calculation-content");
    content.style.display = "block";

    // Scroll into view
    clickedItem.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

/* ============================================================
   2.4 BACK BUTTON — RETURN TO FULL CALCULATIONS LIST
   ============================================================ */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("calculation-back-btn")) {

    const allItems = document.querySelectorAll(".calculation-item");
    const allContent = document.querySelectorAll(".calculation-content");

    // Show all items
    allItems.forEach(item => item.style.display = "block");

    // Collapse all content
    allContent.forEach(content => content.style.display = "none");

    // Scroll back to top of Calculations tab
    document.getElementById("tab-calculations").scrollIntoView({ behavior: "smooth" });
  }
});

/* ============================================================
   2.5 INITIALISE CALCULATIONS ON LOAD
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderCalculationsList();
});

