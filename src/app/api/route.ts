/**
 * `GET /api`
 */
export function GET() {
    const mockSuppliers = [
        {
            "name": "Supplier A",
            "categories": ["Ring", "Bracelet", "Necklace"], // ring bracelet necklace
            "featuredCategories": ["Jewelry"], // subset of categories
            "coordinates": {
                "lat": 49.26031948406679, 
                "lng": -123.25084529057064,
            },
            "address": "string",
            "imageUrl": null,
            "isVerified": true,
            "rating": 4.3,
            "products": [
                {
                    "name": "string",
                    "minQuantity": 2,
                    "pricePerUnit": 0,
                }
            ]
        },
        {
            "name": "Supplier B",
            "categories": ["Nylon", "Fiber"], // ring bracelet necklace
            "featuredCategories": ["Textile"], // subset of categories
            "coordinates": {
                "lat": 49.26288713091504, 
                "lng": -123.24118022875784,
            },
            "address": "string",
            "imageUrl": null,
            "isVerified": true,
            "rating": 4.0,
            "products": [
                {
                    "name": "string",
                    "minQuantity": 1,
                    "pricePerUnit": 0,
                }
            ]
        },
        {
            "name": "Supplier C",
            "categories": ["Batteries", "Drugs"], // ring bracelet necklace
            "featuredCategories": ["Mixed"], // subset of categories
            "coordinates": {
                "lat": 49.26683137161232, 
                "lng": -123.25004699637962,
            },
            "address": "string",
            "imageUrl": null,
            "isVerified": false,
            "rating": 2.2,
            "products": [
                {
                    "name": "string",
                    "minQuantity": 3,
                    "pricePerUnit": 0,
                }
            ]
        },
        {
            "name": "Supplier D",
            "categories": ["LED Bulbs", "Transistors"], // ring bracelet necklace
            "featuredCategories": ["Hardware"], // subset of categories
            "coordinates": {
                "lat": 49.26420670182641,
                "lng": -123.23270596168304,
            },
            "address": "string",
            "imageUrl": null,
            "isVerified": false,
            "rating": 3.3,
            "products": [
                {
                    "name": "string",
                    "minQuantity": 2,
                    "pricePerUnit": 0,
                }
            ]
        },
        {
            "name": "Supplier E",
            "categories": ["T-Shirts", "Jeans"], // ring bracelet necklace
            "featuredCategories": ["Clothing"], // subset of categories
            "coordinates": {
                "lat": 49.26065843316529, 
                "lng": -123.24036872342563,
            },
            "address": "string",
            "imageUrl": null,
            "isVerified": true,
            "rating": 4.9,
            "products": [
                {
                    "name": "string",
                    "minQuantity": 2,
                    "pricePerUnit": 0,
                }
            ]
        },
    ];

    return Response.json(mockSuppliers);
}