// Affiliate program data
export interface AffiliateProgram {
  name: string;
  company: string;
  commission: string;
  cookieDuration: string;
  link: string;
  category: string[];
}

export const affiliatePrograms: AffiliateProgram[] = [
  {
    name: "HubSpot",
    company: "HubSpot",
    commission: "Up to $1,000 per sale",
    cookieDuration: "90 days",
    link: "https://www.hubspot.com/partnerships",
    category: ["CRM", "Marketing"]
  },
  {
    name: "Pipedrive",
    company: "Pipedrive",
    commission: "25% recurring",
    cookieDuration: "30 days",
    link: "https://www.pipedrive.com/en/affiliate-program",
    category: ["CRM"]
  },
  {
    name: "Monday.com",
    company: "Monday.com",
    commission: "Up to $150 per sale",
    cookieDuration: "30 days",
    link: "https://monday.com/affiliate-program",
    category: ["Project Management"]
  },
  {
    name: "Asana",
    company: "Asana",
    commission: "20% recurring",
    cookieDuration: "60 days",
    link: "https://asana.com/partners",
    category: ["Project Management"]
  },
  {
    name: "RingCentral",
    company: "RingCentral",
    commission: "Up to $200 per sale",
    cookieDuration: "45 days",
    link: "https://www.ringcentral.com/partners/affiliate",
    category: ["Business Phone"]
  },
  {
    name: "Grasshopper",
    company: "Grasshopper",
    commission: "30% recurring",
    cookieDuration: "60 days",
    link: "https://grasshopper.com/affiliates",
    category: ["Business Phone"]
  },
  {
    name: "FreshBooks",
    company: "FreshBooks",
    commission: "Recurring commissions",
    cookieDuration: "120 days",
    link: "https://www.freshbooks.com/partners",
    category: ["Invoicing", "Accounting"]
  },
  {
    name: "QuickBooks",
    company: "Intuit",
    commission: "Up to $100 per sale",
    cookieDuration: "30 days",
    link: "https://quickbooks.intuit.com/affiliate",
    category: ["Accounting"]
  },
  {
    name: "Xero",
    company: "Xero",
    commission: "Recurring revenue share",
    cookieDuration: "90 days",
    link: "https://www.xero.com/partners",
    category: ["Accounting"]
  },
  {
    name: "Zapier",
    company: "Zapier",
    commission: "20% recurring",
    cookieDuration: "60 days",
    link: "https://zapier.com/partners",
    category: ["Productivity"]
  }
];
