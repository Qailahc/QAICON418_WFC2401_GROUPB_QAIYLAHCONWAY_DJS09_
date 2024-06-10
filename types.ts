// Type Alias:
// A type alias is a way to give a type a name. This can simplify complex type definitions and make the code more readable.

// Price Type Alias:
// Price is a union type that can only take on one of the values 25, 30, 35, or 45. This restricts the Price type to these specific numeric values.

// Country Type Alias:
// Country is a union type that can only take on one of the string values 'Colombia', 'Poland', 'United Kingdom', or 'Malaysia'. This restricts the Country type to these specific string values.

export type Price = 25 | 30 | 35 | 45
export type Country = 'Colombia' | 'Poland' | 'United Kingdom' | 'Malaysia'
