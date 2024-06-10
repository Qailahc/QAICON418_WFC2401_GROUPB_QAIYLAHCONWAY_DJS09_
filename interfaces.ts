// Imports: The LoyaltyUser enum, and the Price and Country types are imported from their respective files.
// Review Interface: Defines a structure for a review with properties for the reviewer's name, rating stars, loyalty status, and the date of the review.
// Property Interface: Defines a structure for a property listing with properties for the image URL, title, price, location details, contact information, and availability status.

// Imports
import { LoyaltyUser } from './enums'
import { Price, Country } from './types'

// Review Interface
export interface Review {
    name: string; 
    stars: number; 
    loyaltyUser: LoyaltyUser; 
    date: string;   
}

// Property Interface
export interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: Country
    }
    contact: [ number, string];
    isAvailable: boolean;
}
