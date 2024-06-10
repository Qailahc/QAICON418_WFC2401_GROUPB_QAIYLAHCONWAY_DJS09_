// Enums in TypeScript allow you to define a set of named constants.
// Permissions Enum: Defines two permissions (ADMIN and READ_ONLY) that can be used throughout the application to manage user permissions in a readable and type-safe manner.
// LoyaltyUser Enum: Defines three user loyalty levels (GOLD_USER, SILVER_USER, BRONZE_USER) to categorize users based on their loyalty status, providing clear and type-safe references to these levels.

export enum Permissions {
    ADMIN = 'ADMIN', 
    READ_ONLY = 'READ_ONLY'
}

export enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
}
