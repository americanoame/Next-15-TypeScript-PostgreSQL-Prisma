import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



// convert prisma object into a regular JS object

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value, (key, value) => {
    // If the value is a Date object, convert it to a string
    if (value instanceof Date) {
      return value.toISOString(); // or any other date format you prefer
    }
    return value;
  }));
}

// export function convertToPlainObject<T>(value: T): T {
//   return JSON.parse(JSON.stringify(value));
// }


// Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
}
