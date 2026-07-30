const products = [
  {
    "id": 1,
    "name": "Royal Kanchipuram Silk Saree",
    "brand": "Kanchipuram",
    "category": "Silk Saree",
    "price": 8999,
    "rating": 4.9,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 2,
    "name": "Bridal Banarasi Silk Saree",
    "brand": "Banarasi",
    "category": "Wedding Saree",
    "price": 10999,
    "rating": 4.8,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 3,
    "name": "Mysore Pure Silk Saree",
    "brand": "Mysore Silk",
    "category": "Silk Saree",
    "price": 7599,
    "rating": 4.7,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 4,
    "name": "Pochampally Ikat Saree",
    "brand": "Pochampally",
    "category": "Handloom",
    "price": 4999,
    "rating": 4.6,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 5,
    "name": "Cotton Daily Wear Saree",
    "brand": "Nalli",
    "category": "Cotton",
    "price": 1999,
    "rating": 4.5,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 6,
    "name": "Designer Party Wear Saree",
    "brand": "Kalanjali",
    "category": "Designer",
    "price": 6499,
    "rating": 4.8,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 7,
    "name": "Organza Floral Saree",
    "brand": "Suta",
    "category": "Organza",
    "price": 3599,
    "rating": 4.6,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 8,
    "name": "Linen Office Wear Saree",
    "brand": "FabIndia",
    "category": "Linen",
    "price": 2899,
    "rating": 4.5,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 9,
    "name": "Soft Silk Wedding Saree",
    "brand": "RMKV",
    "category": "Silk",
    "price": 9499,
    "rating": 4.9,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 10,
    "name": "Tussar Silk Saree",
    "brand": "Taneira",
    "category": "Silk",
    "price": 5599,
    "rating": 4.6,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 11,
    "name": "Chanderi Silk Saree",
    "brand": "Taneira",
    "category": "Chanderi",
    "price": 4299,
    "rating": 4.7,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 12,
    "name": "Kota Doria Saree",
    "brand": "FabIndia",
    "category": "Cotton",
    "price": 2499,
    "rating": 4.5,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 13,
    "name": "Bandhani Saree",
    "brand": "Biba",
    "category": "Traditional",
    "price": 3799,
    "rating": 4.4,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 14,
    "name": "Patola Silk Saree",
    "brand": "Patola",
    "category": "Silk",
    "price": 12999,
    "rating": 5.0,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 15,
    "name": "Paithani Silk Saree",
    "brand": "Paithani",
    "category": "Wedding",
    "price": 11999,
    "rating": 4.9,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 16,
    "name": "Georgette Saree",
    "brand": "W for Woman",
    "category": "Georgette",
    "price": 2599,
    "rating": 4.4,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 17,
    "name": "Crepe Saree",
    "brand": "Aurelia",
    "category": "Crepe",
    "price": 2199,
    "rating": 4.3,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 18,
    "name": "Designer Net Saree",
    "brand": "Kalanjali",
    "category": "Party Wear",
    "price": 5999,
    "rating": 4.7,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 19,
    "name": "Printed Cotton Saree",
    "brand": "Sangam",
    "category": "Cotton",
    "price": 1599,
    "rating": 4.2,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 20,
    "name": "Kalamkari Saree",
    "brand": "Kalamkari",
    "category": "Handloom",
    "price": 3399,
    "rating": 4.6,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 21,
    "name": "Bhagalpuri Silk Saree",
    "brand": "Bhagalpuri",
    "category": "Silk",
    "price": 4899,
    "rating": 4.5,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 22,
    "name": "Uppada Silk Saree",
    "brand": "Uppada",
    "category": "Wedding",
    "price": 9999,
    "rating": 4.9,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 23,
    "name": "Gadwal Silk Saree",
    "brand": "Gadwal",
    "category": "Traditional",
    "price": 7999,
    "rating": 4.8,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 24,
    "name": "Dharmavaram Silk Saree",
    "brand": "Dharmavaram",
    "category": "Bridal",
    "price": 13999,
    "rating": 5.0,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 25,
    "name": "Chettinad Cotton Saree",
    "brand": "Chettinad",
    "category": "Cotton",
    "price": 1899,
    "rating": 4.3,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 26,
    "name": "Fancy Party Saree",
    "brand": "Libas",
    "category": "Designer",
    "price": 3299,
    "rating": 4.4,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 27,
    "name": "Premium Linen Saree",
    "brand": "FabIndia",
    "category": "Linen",
    "price": 2799,
    "rating": 4.5,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 28,
    "name": "Designer Silk Saree",
    "brand": "Nalli",
    "category": "Designer",
    "price": 6899,
    "rating": 4.7,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 29,
    "name": "Wedding Collection Saree",
    "brand": "RMKV",
    "category": "Wedding",
    "price": 14999,
    "rating": 5.0,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  },
  {
    "id": 30,
    "name": "Luxury Bridal Silk Saree",
    "brand": "Kanchipuram",
    "category": "Bridal",
    "price": 17999,
    "rating": 5.0,
    "image": "https://images.openai.com/static-rsc-4/UmULa93FfDSPztH4rkQM7CmUkEdaF6f60G_wp6Tvf-TvHexdGIOwdeYG99SQbAmb3W1scrsbebEBOyzaeo2Ro9uVfiRjUOk1C_dJ2sGUtKxytHDMQKH_NNK6CYST-a6vUwuB3bZ3nGQuuJoDN-i23lWiIBWf9Bx_HS3r7WMWiY1WEBPDzecUKO3uc9Rg5GQR?purpose=fullsize"
  }
]
 

export default products;