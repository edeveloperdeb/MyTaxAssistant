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
                          <li><strong>Restricted Electrical Worker's Licence: </strong>Required if mechanics need to discnnect and reconnect fixed electrical installations in hybrid/electric vehicles or machinery </li>
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
  "Accountant / Tax Agent": {
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

  "Administrative and Clerical": {
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

  // 👉 Add more occupations here in the same format
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
                          <th style="border:1px solid #e0e0e0; padding:8px;">Rate</th>
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
                      </thead>
                      </tbody>
                    </table>
                    <p style="font-size:12px; text-align:center;">*Family Income thresholds increase by $1,500 for each additional dependent child after the first. Offset not claimed in tax return.
                      <br>Once lodged the ATO will determine any amounts payable or refundable based on Income for year and any premium reductions already received.<br>Any liability or refund will be shown on Notice of Assessment.</p>
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
                          <li>Medicare Levy Surcharge </li>
                          <li>Private health Insurance Rebate</li>
                          <li>Seniors and Pensioners Tax Offset</li>
                          <li>Tax Offset for Contributions to Spouse's Superannuation</li>
                      </ul>
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
                      <input id="assessableIncome" type="number">

                      <label>Total Deductions:</label>
                      <input id="totalDeductions" type="number">

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
                      <input id="assessableIncome" type="number">

                      <label>Total Deductions:</label>
                      <input id="totalDeductions" type="number">

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

  document.getElementById("tax2026Result").innerHTML =
    "<strong>Tax payable: $" + tax.toFixed(2) + "</strong>";
}

/* -----------------------------------------
         TAX ON TAXABLE INCOME CALCULATION - 2027
      -------------------------------------------- */
function calcTax2027() {
  const assessable =
    parseFloat(document.getElementById("assessableIncome").value) || 0;
  const deductions =
    parseFloat(document.getElementById("totalDeductions").value) || 0;

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
