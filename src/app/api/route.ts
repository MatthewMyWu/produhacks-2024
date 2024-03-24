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
                "lat": 45,
                "lng": -120,
            },
            "address": "string",
            "imageUrl": null,
            "isVerified": true,
            "rating": 4.3,
            "products": [
                {
                    "name": "string",
                    "minQuantity": 0,
                    "pricePerUnit": 0,
                }
            ]
        },
        {
            "name": "Supplier B",
            "categories": ["Nylon", "Fiber"], // ring bracelet necklace
            "featuredCategories": ["Textile"], // subset of categories
            "coordinates": {
                "lat": 42,
                "lng": -118,
            },
            "address": "string",
            "imageUrl": null,
            "isVerified": true,
            "rating": 4.0,
            "products": [
                {
                    "name": "string",
                    "minQuantity": 0,
                    "pricePerUnit": 0,
                }
            ]
        },
        {
            "name": "Supplier C",
            "categories": ["Batteries", "Drugs"], // ring bracelet necklace
            "featuredCategories": ["Mixed"], // subset of categories
            "coordinates": {
                "lat": 40,
                "lng": -115,
            },
            "address": "string",
            "imageUrl": null,
            "isVerified": false,
            "rating": 2.2,
            "products": [
                {
                    "name": "string",
                    "minQuantity": 0,
                    "pricePerUnit": 0,
                }
            ]
        },
        {
            "name": "Supplier D",
            "categories": ["LED Bulbs", "Transistors"], // ring bracelet necklace
            "featuredCategories": ["Hardware"], // subset of categories
            "coordinates": {
                "lat": 0,
                "lng": 0,
            },
            "address": "string",
            "imageUrl": null,
            "isVerified": false,
            "rating": 3.3,
            "products": [
                {
                    "name": "string",
                    "minQuantity": 0,
                    "pricePerUnit": 0,
                }
            ]
        },
        {
            "name": "Supplier E",
            "categories": ["T-Shirts", "Jeans"], // ring bracelet necklace
            "featuredCategories": ["Clothing"], // subset of categories
            "coordinates": {
                "lat": 50,
                "lng": -50,
            },
            "address": "string",
            "imageUrl": null,
            "isVerified": true,
            "rating": 4.9,
            "products": [
                {
                    "name": "string",
                    "minQuantity": 0,
                    "pricePerUnit": 0,
                }
            ]
        },
    ];

    return Response.json(mockSuppliers);
}