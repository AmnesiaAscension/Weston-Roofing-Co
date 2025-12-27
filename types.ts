
// Shared TypeScript interfaces for data consistency
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  author: string;
  rating: number;
  snippet: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BusinessData {
  phone: string;
  address: string;
  city: string;
}
