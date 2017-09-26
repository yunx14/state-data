var itemCodeLookupTable = {
  "A01":"Charges - Air Transportation",
  "A03":"Charges - Miscellaneous Commercial Activities",
  "A09":"Charges - Elementary & Secondary Education School Lunch",
  "A10":"Charges - Elementary & Secondary Education School Tuition",
  "A12":"Charges - Elementary & Secondary Education: Other",
  "A16":"Charges - Higher Education Auxiliary Enterprises",
  "A18":"Charges - Higher Education: Other",
  "A21":"Charges - Education - Other: NEC",
  "A36":"Charges - Public Hospital",
  "A44":"Charges - Regular Highways",
  "A45":"Charges - Toll Highways",
  "A50":"Charges - Housing & Community Development",
  "A54":"Charges - Natural Resources: Agriculture (Not used in 2005-2006)",
  "A56":"Charges - Natural Resources: Forestry",
  "A59":"Charges - Natural Resources: Other",
  "A60":"Charges – Parking Facilities (NEW for 2005)",
  "A61":"Charges - Parks & Recreation",
  "A80":"Charges - Sewerage",
  "A81":"Charges - Solid Waste Management",
  "A87":"Charges - Sea and Inland Port Facilities",
  "A89":"Charges - All Other",
  "A90":"Revenue - Liquor Stores",
  "A91":"Revenue - Water Utilities",
  "A92":"Revenue - Electric Utilities",
  "A93":"Revenue - Gas Utilities",
  "A94":"Revenue - Transit Utilities",
  "B01":"Intergovernmental Revenue from Federal - Air Transportation",
  "B21":"Intergovernmental Revenue from Federal - Education",
  "B22":"Intergovernmental Revenue from Federal- Employment Security Administration",
  "B30":"Intergovernmental Revenue from Federal - General Support",
  "B42":"Intergovernmental Revenue from Federal - Health & Hospitals",
  "B43":"Intergovernmental Revenue from Federal – Environmental Health (NEW for 2007)",
  "B46":"Intergovernmental Revenue from Federal - Highways",
  "B50":"Intergovernmental Revenue from Federal - Housing & Community Development",
  "B54":"Intergovernmental Revenue from Federal - Natural Resources: Agriculture (Not used in 2005-2006)",
  "B59":"Intergovernmental Revenue from Federal - Other Natural Resources",
  "B79":"Intergovernmental Revenue from Federal - Public Welfare",
  "B80":"Intergovernmental Revenue from Federal - Sewerage",
  "B89":"Intergovernmental Revenue from Federal - All Other",
  "B91":"Intergovernmental Revenue from Federal - Water Utilities",
  "B92":"Intergovernmental Revenue from Federal - Electric Utilities",
  "B93":"Intergovernmental Revenue from Federal - Gas Utilities",
  "B94":"Intergovernmental Revenue from Federal - Transit Utilities",
  "D21":"Intergovernmental Revenue from Local - Education",
  "D30":"Intergovernmental Revenue from Local - General Support",
  "D42":"Intergovernmental Revenue from Local - Health & Hospitals",
  "D46":"Intergovernmental Revenue from Local - Highways",
  "D50":"Intergovernmental Revenue from Local - Housing and Community Development (NEW in 2007)",
  "D79":"Intergovernmental Revenue from Local - Public Welfare",
  "D80":"Intergovernmental Revenue from Local - Sewerage",
  "D89":"Intergovernmental Revenue from Local - All Other",
  "D91":"Intergovernmental Revenue from Local - Water Utilities",
  "D92":"Intergovernmental Revenue from Local - Electric Utilities",
  "D93":"Intergovernmental Revenue from Local - Gas Utilities",
  "D94":"Intergovernmental Revenue from Local - Transit Utilities",
  "E01":"Current Operations - Air Transportation",
  "E03":"Current Operations - Miscellaneous Commercial Activities: NEC",
  "E04":"Current Operations - Correctional Institutions",
  "E05":"Current Operations - Corrections: Other",
  "E12":"Current Operations - Elementary & Secondary Education",
  "E16":"Current Operations - Higher Education Auxiliary Enterprises",
  "E18":"Current Operations - Other Higher Education",
  "E19":"DISCONTINUED as of 2005: see J19 (Formerly: Current Operations - Educational Scholarships: Assistance: & Subsidies)",
  "E21":"Current Operations - Other Education",
  "E22":"Current Operations - Social Insurance Administration",
  "E23":"Current Operations - Financial Administration",
  "E25":"Current Operations - Judicial and Legal Services",
  "E26":"Current Operations - Legislative Services",
  "E27":"Current Operations – Environmental Health (NEW for 2007)",
  "E29":"Current Operations - Central Staff Services",
  "E31":"Current Operations - General Public Buildings",
  "E32":"Current Operations - Health Services: Other",
  "E36":"Current Operations - Own Hospitals",
  "E38":"DISCONTINUED as of 2005 (Formerly: Current Operations - Other Hospitals)",
  "E44":"Current Operations - Regular Highways",
  "E45":"Current Operations - Toll Highways",
  "E47":"DISCONTINUED as of 2005 (Formerly: Current Operations - Private Transit Subsidies)",
  "E50":"Current Operations - Housing & Community Development",
  "E52":"Current Operations - Libraries",
  "E54":"Current Operations - Natural Resources: Agriculture: Other (Not used in 2005-2006)",
  "E55":"Current Operations - Natural Resources: Fish & Game",
  "E56":"Current Operations - Natural Resources: Forestry",
  "E59":"Current Operations - Natural Resources: Other",
  "E60":"Current Operations – Parking Facilities (NEW for 2005)",
  "E61":"Current Operations - Parks & Recreation",
  "E62":"Current Operations - Police Protection",
  "E66":"Current Operations - Protective Inspection and Regulation: NEC",
  "E67":"DISCONTINUED as of 2005; see J67 (Formerly: Current Operations - Welfare: Federal Categorical Assistance Programs)",
  "E68":"DISCONTINUED as of 2005; see J68 (Formerly: Current Operations - Welfare: Cash Assistance: Other)",
  "E73":"DISCONTINUED as of 2012; Current Operations – Welfare: Payments to Medicare Trust Fund (previously S74)",
  "E74":"Current Operations - Welfare: Vendor Payments for Medical Care",
  "E75":"Current Operations - Welfare: Vendor Payments for Other Purposes",
  "E77":"Current Operations - Welfare Institutions",
  "E79":"Current Operations - Welfare: Other",
  "E80":"Current Operations - Sewerage",
  "E81":"Current Operations - Solid Waste Management",
  "E84":"DISCONTINUED as of 2005 (Formerly: Current Operations - Veterans` Bonuses) - See J85",
  "E85":"Current Operations - Other Veterans Services",
  "E87":"Current Operations - Sea and Inland Port Facilities",
  "E89":"Current Operations - General: Other",
  "E90":"Current Operations - Liquor Stores",
  "E91":"Current Operations - Water Utilities",
  "E92":"Current Operations - Electric Utilities",
  "E93":"Current Operations - Gas Utilities",
  "E94":"Current Operations - Transit Utilities",
  "F01":"Construction - Air Transportation",
  "F03":"Construction - Miscellaneous Commercial Activities: NEC",
  "F04":"Construction - Correctional Institutions",
  "F05":"Construction - Corrections: Other",
  "F12":"Construction - Elementary & Secondary Education",
  "F16":"Construction - Higher Education: Auxiliary Enterprises",
  "F18":"Construction - Higher Education: Other",
  "F21":"Construction - Education: Other",
  "F22":"Construction - Social Insurance Administration",
  "F23":"Construction - Financial Administration",
  "F25":"Construction - Judicial & Legal",
  "F26":"Construction - Legislative",
  "F27":"Construction – Environmental Health (NEW for 2007)",
  "F29":"Construction - Central Staff Services",
  "F31":"Construction - General Public Buildings",
  "F32":"Construction - Health: Other",
  "F36":"Construction - Own Hospitals",
  "F38":"DISCONTINUED as of 2005 (Formerly: Construction - Hospitals: Other)",
  "F44":"Construction - Regular Highways",
  "F45":"Construction - Toll Highways",
  "F50":"Construction - Housing & Community Development",
  "F52":"Construction - Libraries",
  "F54":"Construction - Agriculture: Other  (Not used in 2005-2006)",
  "F55":"Construction - Fish & Game",
  "F56":"Construction - Forestry",
  "F59":"Construction - Natural Resources: Other",
  "F60":"Construction – Parking Facilities (NEW for 2005)",
  "F61":"Construction - Parks & Recreation",
  "F62":"Construction - Police Protection",
  "F66":"Construction - Protective Inspection & Regulation: NEC",
  "F77":"Construction - Welfare Institutions",
  "F79":"Construction - Welfare: Other",
  "F80":"Construction - Sewerage",
  "F81":"Construction - Solid Waste Management",
  "F85":"Construction - Other Veterans Services",
  "F87":"Construction - Sea and Inland Port Facilities",
  "F89":"Construction - General",
  "F90":"Construction - Liquor Stores",
  "F91":"Construction - Water Utilities",
  "F92":"Construction - Electric Utilities",
  "F93":"Construction - Gas Utilities",
  "F94":"Construction - Transit Utilities",
  "G01":"Other Capital Outlay - Air Transportation",
  "G03":"Other Capital Outlay - Miscellaneous Commercial Activities: NEC",
  "G04":"Other Capital Outlay - Correctional Institutions",
  "G05":"Other Capital Outlay - Corrections: Other",
  "G12":"Other Capital Outlay - Elementary and Secondary Education",
  "G16":"Other Capital Outlay - Higher Education: Auxiliary Enterprises",
  "G18":"Other Capital Outlay - Other Higher Education",
  "G21":"Other Capital Outlay - Education: Other",
  "G22":"Other Capital Outlay - Social Insurance Administration",
  "G23":"Other Capital Outlay - Financial Administration",
  "G25":"Other Capital Outlay - Judicial",
  "G26":"Other Capital Outlay - Legislative",
  "G27":"Other Capital Outlay – Environmental Health (NEW for 2007)",
  "G29":"Other Capital Outlay - Central Staff",
  "G31":"Other Capital Outlay - General Public Building",
  "G32":"Other Capital Outlay - Health - Other",
  "G36":"Other Capital Outlay - Own Hospitals",
  "G38":"DISCONTINUED as of 2005 (Formerly: Other Capital Outlay - Hospitals: Other)",
  "G44":"Other Capital Outlay - Regular Highways",
  "G45":"Other Capital Outlay - Toll Highways",
  "G50":"Other Capital Outlay - Housing & Community Development",
  "G52":"Other Capital Outlay - Libraries",
  "G54":"Other Capital Outlay - Agriculture: Other (Not used in 2005-2006)",
  "G55":"Other Capital Outlay - Fish & Game",
  "G56":"Other Capital Outlay - Forestry",
  "G59":"Other Capital Outlay - Natural Resource - Other",
  "G60":"Other Capital Outlay – Parking Facilities (NEW for 2005)",
  "G61":"Other Capital Outlay - Parks & Recreation",
  "G62":"Other Capital Outlay - Police Protection",
  "G66":"Other Capital Outlay - Protective Inspection & Regulation: NEC",
  "G77":"Other Capital Outlay - Welfare Institutions",
  "G79":"Other Capital Outlay - Welfare: Other",
  "G80":"Other Capital Outlay - Sewerage",
  "G81":"Other Capital Outlay - Solid Waste Management",
  "G85":"Other Capital Outlay - Other Veterans Services",
  "G87":"Other Capital Outlay - Sea and Inland Port Facilities",
  "G89":"Other Capital Outlay - General: Other",
  "G90":"Other Capital Outlay - Liquor Stores",
  "G91":"Other Capital Outlay - Water Utilities",
  "G92":"Other Capital Outlay - Electric Utilities",
  "G93":"Other Capital Outlay - Gas Utilities",
  "G94":"Other Capital Outlay - Transit Utilities",
  "I89":"Interest on General Debt",
  "I91":"Water Utilities - Interest on Debt",
  "I92":"Electric Utilities - Interest on Debt",
  "I93":"Gas Utilities - Interest on Debt",
  "I94":"Transit Utilities - Interest on Debt",
  "J19":"Assistance and Subsidies – Scholarships and Other Subsidies – Education (NEW for 2005; previously under E19)",
  "J67":"Assistance and Subsidies – Public Welfare: Federal Categorical Assistance Programs (NEW for 2005; previously under E67)",
  "J68":"Assistance and Subsidies – Public Welfare: Cash Assistance Programs: Other (NEW for 2005; previously under E68)",
  "J85":"Assistance and Subsidies - Veterans' Bonuses (NEW for 2005; previously under E84)",
  "K01":"Equipment Only - Air Transportation",
  "K03":"Equipment Only - Miscellaneous Commercial Activities: NEC",
  "K04":"Equipment Only - Correctional Institutions",
  "K05":"Equipment Only - Correction: Other",
  "K12":"Equipment Only - G12 Subcode",
  "K16":"Equipment Only - Higher Education: Auxiliary",
  "K18":"Equipment Only - Higher Education: Other",
  "K21":"Equipment Only - Education: Other",
  "K22":"Equipment Only - Social Insurance Administration",
  "K23":"Equipment Only - Financial Administration",
  "K25":"Equipment Only - Judicial and Legal",
  "K26":"Equipment Only - Legislative",
  "K27":"Equipment Only – Environmental Health (NEW for 2007)",
  "K29":"Equipment Only - Central Staff Services",
  "K31":"Equipment Only - General Public Building",
  "K32":"Equipment Only - Health: Other",
  "K36":"Equipment Only - Own Hospitals",
  "K38":"DISCONTINUED as of 2005 (Formerly: Equipment Only - Enterprise Hospitals: Other)",
  "K44":"Equipment Only - Regular Highways",
  "K45":"Equipment Only - Toll Highways",
  "K50":"Equipment Only - Housing & Community Development",
  "K52":"Equipment Only - Libraries",
  "K54":"Equipment Only - Agriculture: Other (Not used in 2005-2006)",
  "K55":"Equipment Only - Fish & Game",
  "K56":"Equipment Only - Forestry",
  "K59":"Equipment Only - Natural Resources: Other",
  "K60":"Equipment Only – Parking Facilities (NEW for 2005)",
  "K61":"Equipment Only - Parks & Recreation",
  "K62":"Equipment Only - Police Protection",
  "K66":"Equipment Only - Protective Inspection and Regulation: NEC",
  "K77":"Equipment Only - Welfare Institutions",
  "K79":"Equipment Only - Welfare: Other",
  "K80":"Equipment Only - Sewerage",
  "K81":"Equipment Only - Solid Waste Management",
  "K85":"Equipment Only - Other Veterans Services",
  "K87":"Equipment Only - Sea and Inland Port Facilities",
  "K89":"Equipment Only - General: Other",
  "K90":"Equipment Only - Liquor Stores",
  "K91":"Equipment Only - Water Utilities",
  "K92":"Equipment Only - Electric Utilities",
  "K93":"Equipment Only - Gas Utilities",
  "K94":"Equipment Only - Transit Utilities",
  "M01":"Intergovernmental to Local NEC - Air Transportation",
  "M04":"Intergovernmental to Local NEC – Correctional Institutions (NEW for 2005)",
  "M05":"Intergovernmental to Local NEC - Corrections: Other",
  "M12":"Intergovernmental to Local NEC - Elementary and Secondary Education",
  "M18":"Intergovernmental to Local NEC - Higher Education",
  "M21":"Intergovernmental to Local NEC - Education",
  "M23":"Intergovernmental to Local NEC - Financial Administration",
  "M25":"Intergovernmental to Local NEC - Judicial and Legal",
  "M27":"Intergovernmental to Local NEC – Environmental Health (NEW for 2007)",
  "M29":"Intergovernmental to Local NEC - Central Staff Services",
  "M30":"Intergovernmental to Local NEC - General Support",
  "M32":"Intergovernmental to Local NEC - Health",
  "M36":"Intergovernmental to Local NEC – Hospitals (NEW for 2005)",
  "M38":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Local NEC – Hospitals)",
  "M44":"Intergovernmental to Local NEC - Regular Highways",
  "M50":"Intergovernmental to Local NEC - Housing & Community Development",
  "M52":"Intergovernmental to Local NEC - Libraries",
  "M54":"Intergovernmental to Local NEC – Agriculture) (Not used in 2005-2006)",
  "M55":"Intergovernmental to Local NEC - Fish & Game",
  "M56":"Intergovernmental to Local NEC - Forestry",
  "M59":"Intergovernmental to Local NEC - Natural Resources",
  "M60":"Intergovernmental to Local NEC – Parking Facilities (NEW for 2005)",
  "M61":"Intergovernmental to Local NEC - Parks & Recreation",
  "M62":"Intergovernmental to Local NEC - Police Protection",
  "M66":"Intergovernmental to Local NEC - Protective Inspection & Regulations",
  "M67":"Intergovernmental to Local NEC - Welfare: Categorical Assistance Programs",
  "M68":"Intergovernmental to Local NEC - Welfare: Cash Assistance Programs",
  "M79":"Intergovernmental to Local NEC - Welfare",
  "M80":"Intergovernmental to Local NEC - Sewerage",
  "M81":"Intergovernmental to Local NEC - Solid Waste Management",
  "M87":"Intergovernmental to Local NEC - Sea and Inland Port Facilities",
  "M89":"Intergovernmental to Local NEC - General",
  "M91":"Intergovernmental to Local NEC - Water Utilities",
  "M92":"Intergovernmental to Local NEC - Electric Utilities",
  "M93":"Intergovernmental to Local NEC - Gas Utilities",
  "M94":"Intergovernmental to Local NEC - Transit Utilities",
  "N01":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Air Transportation)",
  "N05":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose – Corrections)",
  "N12":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Elementary and Secondary Education)",
  "N18":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Higher Education)",
  "N21":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Education: Other)",
  "N23":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Financial Administration)",
  "N25":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Judicial and Legal)",
  "N29":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Central Staff Services)",
  "N30":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - General Support)",
  "N32":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Health: Other)",
  "N38":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Hospitals: Other)",
  "N44":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Regular Highways)",
  "N50":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Housing & Community Development)",
  "N52":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose – Libraries)",
  "N54":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Agriculture: Other)",
  "N55":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Fish & Game)",
  "N56":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose – Forestry)",
  "N59":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Natural Resources: Other)",
  "N61":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Parks & Recreation)",
  "N62":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Police Protection)",
  "N66":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Protective Inspection and Regulation: NEC)",
  "N67":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Welfare: Categorical Assistance Programs)",
  "N68":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Welfare: Cash Assistance Programs)",
  "N79":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Welfare: Other)",
  "N80":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose – Sewerage)",
  "N81":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Solid Waste Management)",
  "N87":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Sea and Inland Port Facilities)",
  "N89":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - General: Other)",
  "N91":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Water Utilities)",
  "N92":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Electric Utilities)",
  "N93":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Gas Utilities)",
  "N94":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to General Purpose - Transit Utilities)",
  "Q12":"Intergovernmental to School District - Elementary and Secondary Education",
  "Q18":"Intergovernmental to School District - Higher Education: Other",
  "R01":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Air Transportation)",
  "R12":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Elementary and Secondary Education)",
  "R18":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Higher Education: Other)",
  "R30":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - General Support)",
  "R32":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Health: Other)",
  "R38":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Hospitals: Other)",
  "R44":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Regular Highways)",
  "R50":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Housing & Community Development)",
  "R52":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District – Libraries)",
  "R54":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Agriculture: Other)",
  "R55":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Fish & Game)",
  "R56":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District – Forestry)",
  "R59":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Natural Resources: Other)",
  "R61":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Parks & Recreation)",
  "R62":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Police Protection)",
  "R66":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Protective Inspection and Regulation: NEC)",
  "R79":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Welfare: Other)",
  "R80":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District – Sewerage)",
  "R81":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Solid Waste Management)",
  "R87":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Sea and Inland Port Facilities)",
  "R89":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - General: Other)",
  "R91":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Water Utilities)",
  "R92":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Electric Utilities)",
  "R93":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Gas Utilities)",
  "R94":"DISCONTINUED as of 2005 (Formerly: Intergovernmental to Special District - Transit Utilities)",
  "S67":"Intergovernmental to Federal - Welfare: Categorical Assistance Programs",
  "S74":"DISCONTINUED as of 2007; see E73 (Formerly: Intergovernmental to Federal – Welfare: Vendor Payments for Medical Care)",
  "S89":"Intergovernmental to Federal - General: Other",
  "T01":"Tax - Property",
  "T09":"Tax - General Sales",
  "T10":"Tax - Alcoholic Beverage Sales",
  "T11":"Tax - Amusement",
  "T12":"Tax - Insurance Premiums",
  "T13":"Tax - Motor Fuels Sales",
  "T14":"Tax - Pari-mutuels",
  "T15":"Tax - Public Utilities",
  "T16":"Tax - Tobacco Sales",
  "T19":"Tax - Other Selective Sales",
  "T20":"Tax - Alcoholic Beverage License",
  "T21":"Tax - Amusement License",
  "T22":"Tax - Corporation License",
  "T23":"Tax - Hunting & Fishing License",
  "T24":"Tax - Motor Vehicle License",
  "T25":"Tax - Motor Vehicle Operators License",
  "T27":"Tax - Public Utility License",
  "T28":"Tax - Occupation & Business License: NEC",
  "T29":"Tax - Other License",
  "T40":"Tax - Individual Income",
  "T41":"Tax - Corporation Net Income",
  "T50":"Tax - Death & Gift",
  "T51":"Tax - Documentary & Stock Transfer",
  "T53":"Tax - Severance",
  "T99":"Tax - NEC",
  "U01":"Miscellaneous - Special Assessments",
  "U11":"Miscellaneous - Property Sale Other",
  "U20":"Miscellaneous - Interest Earnings",
  "U21":"Miscellaneous – Other Dividends (New for 2005)",
  "U30":"Miscellaneous - Fines & Forfeits",
  "U40":"Miscellaneous - Rents",
  "U41":"Miscellaneous - Royalties",
  "U50":"Miscellaneous - Donations From Private Sources",
  "U95":"Miscellaneous - Net Lottery Revenue",
  "U99":"Miscellaneous - General Revenue: NEC",
  "W01":"Sinking Fund - Cash & Deposits",
  "W31":"Bond Fund - Cash & Deposits",
  "W61":"Other Funds - Cash & Deposits",
  "X01":"Employee Pensions Receipts - Local Employee Contribution",
  "X02":"Employee Pensions Receipts - State Employee Contribution",
  "X05":"Employee Pensions Receipts - Contributions from Local Government",
  "X06":"Employee Pensions Receipts - State Government Contributions to Own State System",
  "X08":"Employee Pensions Receipts - Total Earnings on Investments",
  "X11":"Employee Pensions Expenses - Benefit Payments",
  "X12":"Employee Pensions Expenses - Withdrawals",
  "X21":"Employee Pensions - Total Cash & Deposits",
  "X30":"DISCONTINUED as of 2012; Employee Pensions - Total Federal Securities",
  "X33":"Employee Pensions - Federal Agency Securities: Bonds and Mortgage-Backed Securities Issued by CCC: Export-Import Bank: FHA: GNMA: Postal Service: and TVA",
  "X35":"Employee Pensions - Other Investments: State and Local Government Securities",
  "X40":"DISCONTINUED as of 2002; see Z77 (Formerly: Employee Pensions - Securities - Corporate Bonds (Book Value))",
  "X41":"DISCONTINUED as of 2002; see Z78 (Formerly: Employee Pensions - Securities - Corporate Stocks (Book Value))",
  "X42":"Employee Pensions - Securities: Mortgages",
  "X44":"DISCONTINUED as of 2012; Employee Pensions - Total Other Securities",
  "X47":"Employee Pensions - Other Investments: Other",
  "Y01":"Unemployment Compensation - Contribution",
  "Y02":"Unemployment Compensation - Interest Revenue",
  "Y04":"Unemployment Compensation - Federal Advances",
  "Y05":"Unemployment Compensation - Benefit Payments",
  "Y06":"Unemployment Compensation - Extended & Special Payments",
  "Y07":"Unemployment Compensation - Balance In US Treasury",
  "Y08":"Unemployment Compensation - Other Balance (+ or-)",
  "Y10":"Workers Compensation - Own Contribution",
  "Y11":"Workers Compensation - Other Contributions",
  "Y12":"Workers Compensation - Interest Earnings",
  "Y13":"Workers Compensation - Other Investment Earnings (unused since 1994)",
  "Y14":"Workers Compensation - Benefit Payments",
  "Y15":"Workers Compensation - Other Payments",
  "Y21":"Workers Compensation - Cash & Assets",
  "Y50":"Other Insurance Trust - Own Contributions",
  "Y51":"Other Insurance Trust - Other Contributions",
  "Y52":"Other Insurance Trust - Interest Revenue",
  "Y53":"Other Insurance Trust - Benefit Payment",
  "Y54":"Other Insurance Trust - Other Payments",
  "Y55":"Other Insurance Trust - Other Investments (unused since 1977)",
  "Y61":"Other Insurance Trust - Cash & Deposits",
  "Z00":"Total Salaries & Wages",
  "Z41":"Liquor Stores - Net Sales",
  "Z42":"Liquor Stores Exhibit - Cost of Goods",
  "Z43":"Liquor Stores Exhibit - Operating Expenditures",
  "Z44":"Liquor Stores Exhibit - Other Income",
  "Z45":"Liquor Stores Exhibit - Nonoperating Expenditures",
  "Z46":"Liquor Stores Exhibit - Transfer to General Funds",
  "Z47":"Liquor Stores Exhibit - License & Enforcement",
  "Z48":"Liquor Stores Exhibit - Liquor Taxes",
  "Z51":"Lotteries Exhibit - Ticket Sales",
  "Z52":"Lotteries Exhibit - Prizes",
  "Z53":"Lotteries Exhibit - Administrative Expenditures",
  "Z54":"Lotteries Exhibit - Proceeds",
  "Z61":"DISCONTINUED AS OF 2005 (Formly: Transit Subsidy Contribution)",
  "Z62":"Employee Pensions - Federally Sponsored Agencies:  Bonds and Mortgage-Backed Securities Issued by FHLB: FHLMC: FNMA: and Farm Credit Banks",
  "Z63":"Employee Pensions - Corporate Bonds: Domestic",
  "Z70":"Employee Pensions - Foreign and International Stocks and Bonds",
  "Z77":"DISCONTINUED as of 2012; Employee Pensions - Corporate Bonds (market value) (NEW as of 2002)",
  "Z78":"Employee Pensions - Corporate Stocks (market value) (NEW as of 2002)",
  "Z83":"Employee Pensions - Other Securities",
  "Z84":"Employee Pensions - Invenstments Held in Trust by Other Agencies",
  "Z89":"Employee Pensions - Federal Treasury Securities:  Obligations of the U.S. Treasury and Federal Financing Bank",
  "19H":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Beginning Outstanding: Education: NEC)",
  "19X":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Beginning Outstanding: NEC)",
  "19U":"Long Term Debt Beginning – Unspecified Public Purposes (NEW as of 2005)",
  "21A":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue - Full Faith & Credit: Water Utilities)",
  "21B":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue - Full Faith & Credit: Electric Utilities)",
  "21C":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue - Full Faith & Credit: Gas Utilities)",
  "21D":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue - Full Faith & Credit: Transit Utilities)",
  "21F":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue - Full Faith & Credit: Elementary & Secondary Education)",
  "21G":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue - Full Faith & Credit: Higher Education)",
  "21X":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue - Full Faith & Credit: Other NEC)",
  "24A":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue: Nonguaranteed - Water Utilities)",
  "24B":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue: Nonguaranteed - Electric Utilities)",
  "24C":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue: Nonguaranteed - Gas Utilities)",
  "24D":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue: Nonguaranteed - Transit Utilities)",
  "24F":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue: Nonguaranteed - Elementary and Secondary Education)",
  "24G":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue: Nonguaranteed - Higher Education)",
  "24T":"Long Term Debt Issue: Nonguaranteed - Public Debt for Private Purpose",
  "24X":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Issue: Nonguaranteed - Other NEC)",
  "29U":"Long Term Debt Issue – Unspecified Public Purposes (NEW as of 2005)",
  "31A":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired - Full Faith & Credit: Water Utilities)",
  "31B":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired - Full Faith & Credit: Electric Utilities)",
  "31C":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired - Full Faith & Credit: Gas Utilities)",
  "31D":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired - Full Faith & Credit: Transit Utilities)",
  "31F":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired - Full Faith & Credit: Elementary & Secondary Education)",
  "31G":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired - Full Faith & Credit: Higher Education)",
  "31X":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired - Full Faith & Credit: Other NEC)",
  "34A":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired Nonguaranteed - Water Utilities)",
  "34B":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired Nonguaranteed - Electric Utilities)",
  "34C":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired Nonguaranteed - Gas Utilities)",
  "34D":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired Nonguaranteed - Transit Utilities)",
  "34F":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired Nonguaranteed - Elementary and Secondary Education)",
  "34G":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired Nonguaranteed - Higher Education)",
  "34T":"Long Term Debt Retired Nonguaranteed - Public Debt for Private Purpose",
  "34X":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Retired Nonguaranteed - Other: NEC)",
  "39U":"Long Term Debt Retired - Unspecified Public Purposes (NEW for 2005)",
  "41A":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding - Full Faith & Credit: Water Utilities)",
  "41B":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding - Full Faith & Credit: Electric Utilities)",
  "41C":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding - Full Faith & Credit: Gas Utilities)",
  "41D":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding - Full Faith & Credit: Transit Utilities)",
  "41F":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding - Full Faith & Credit: Elementary & Secondary Education)",
  "41G":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding - Full Faith & Credit: Higher Education)",
  "41X":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding - Full Faith & Credit: Other NEC)",
  "44A":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding Nonguaranteed - Water Utilities)",
  "44B":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding Nonguaranteed - Electric Utilities)",
  "44C":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding Nonguaranteed - Gas Utilities)",
  "44D":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding Nonguaranteed - Transit Utilities)",
  "44F":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding Nonguaranteed - Elementary and Secondary Education)",
  "44G":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding Nonguaranteed - Higher Education)",
  "44T":"Long Term Debt Outstanding Nonguaranteed - Public Debt for Private Purposes",
  "44X":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Outstanding Nonguaranteed - Other: NEC)",
  "49U":"Long Term Debt Outstanding – Unspecified Public Purposes (NEW for 2005)",
  "52T":"Long Term Debt Refunded - Issued",
  "53T":"Long Term Debt Refunded - Retired",
  "61V":"Short Term Debt Outstanding - Beginning",
  "64V":"Short Term Debt Outstanding - End of Fiscal Year",
  "71W":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Offsets - Full Faith & Credit)",
  "74W":"DISCONTINUED as of 2005 (Formerly: Long Term Debt Offsets – Nonguaranteed)"
};

module.exports = itemCodeLookupTable;