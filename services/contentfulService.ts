import * as contentful from 'contentful';
import { BlogPost } from '../types';

// Initialize Contentful Client
// Note: In a real app, these would come from process.env
// For this demo, we will use a fallback mock mode if keys aren't present.
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

let client: any = null;

// Robustly get createClient regardless of ESM/CJS interop format from CDN
// Some CDNs wrap the CJS module.exports in a default export
const contentfulPkg = contentful as any;
const createClientFn = contentfulPkg.createClient || contentfulPkg.default?.createClient;

if (SPACE_ID && ACCESS_TOKEN && createClientFn) {
  client = createClientFn({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
  });
}

// Mock Data for "White Label SEO" Agency Blog
const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'scaling-agency-margins',
    title: 'The Math of Scaling: Why In-House SEOs Destroy Margins',
    excerpt: 'Analyzing the true cost of hiring full-time SEO specialists versus white-label fulfillment partners. The numbers might surprise you.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    date: 'Oct 12, 2023',
    readTime: '6 min read',
    category: 'Agency Growth',
    author: {
      name: 'Alex Rivera',
      role: 'Founder, Bright',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    content: `
# The Hidden Cost of "In-House"

Every agency owner dreams of a bustling office (or Slack channel) full of brilliant SEO strategists. It feels like control. It feels like growth.

But let's look at the P&L.

## The True Cost of an SEO Specialist

A mid-level SEO specialist commands a salary of $65,000 - $85,000. Add in:
- Payroll taxes (15%)
- Benefits & Healthcare (20%)
- Equipment & Software Seats ($500/mo)
- Training & Churn Risk

**Real Cost:** ~$110,000 per year.

## The Utilization Trap

The problem isn't the cost; it's the utilization. If you lose two big clients, that SEO specialist is still on payroll. Their cost is fixed, but your revenue is variable.

### The White Label Advantage

With a fulfillment partner like Bright, your costs are **strictly variable**.
- 10 Clients? You pay for 10.
- 5 Clients? You pay for 5.
- 0 Clients? You pay $0.

You effectively turn SEO fulfillment from a rigid overhead into a flexible utility, protecting your margins during lean months and allowing infinite scalability during boom months.
    `
  },
  {
    id: '2',
    slug: 'pricing-white-label-services',
    title: 'How to Price White Label SEO Services to Clients',
    excerpt: 'Stop undercharging. Here is the exact pricing model successful agencies use to mark up our services by 300%.',
    coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    date: 'Nov 04, 2023',
    readTime: '8 min read',
    category: 'Pricing Strategy',
    author: {
      name: 'Sarah Chen',
      role: 'Head of Strategy',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    content: `
# The 3x Rule

When reselling white-label services, the most common mistake agencies make is charging "Cost + 20%". This is a recipe for disaster. You are not a reseller; you are a strategic partner.

## The Value Ladder

Your client isn't buying "4 backlinks and 2 articles". They are buying **growth**.

If you pay us $1,000/mo for a fulfillment package, you should be charging the client minimally $3,000/mo.

### Why 3x?

1. **Account Management:** You still need to talk to the client.
2. **Strategy:** You need to translate our reports into their business goals.
3. **Buffer:** You need room for unexpected churn or additional requests.

## Packaging the Invisible

Don't line-item the deliverables.
*   **Bad:** "4 Blog Posts: $800"
*   **Good:** "Content Growth Engine: $2,500/mo"

By bundling the technical SEO, content, and reporting into a "Growth Engine" or "Dominance Package," you move the conversation away from commodity pricing and towards value-based pricing.
    `
  },
  {
    id: '3',
    slug: '2025-google-core-update',
    title: 'The 2025 Google Core Update: What Agencies Need to Know',
    excerpt: 'Google is shifting hard towards "Experience" (E-E-A-T). Here is how we adjusted our white label strategies to keep your clients safe.',
    coverImage: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    category: 'Technical SEO',
    author: {
      name: 'David Ross',
      role: 'Technical Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    content: `
# It's No Longer Just About Keywords

The latest core update has decimated "SEO-only" content sites. Google wants real brands, real experience, and real helpfulness.

## Our Shift in Strategy

At Bright, we've updated our SOPs across all partner accounts:

1.  **Authorship Verification:** We now require (or create) author bios for every client blog to satisfy E-E-A-T.
2.  **First-Person Perspectives:** Our ghostwriters are trained to use "I" and "We" and inject opinionated takes, rather than generic encyclopedic content.
3.  **Entity Association:** We are focusing heavily on schema markup that connects the brand to known entities in their niche.

### What This Means for Your Clients

If your clients have legacy "SEO spam" pages, they are at risk. We recommend running our **Technical Audit** immediately to identify low-quality content that needs pruning or upgrading.
    `
  }
];

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  if (client) {
    try {
      const response = await client.getEntries({ content_type: 'blogPost' });
      // In a real scenario, we would map the response.items here
      // return response.items.map(mapContentfulToPost);
      // For now, we return mock data even if connected to avoid breaking if content model doesn't match
      // console.log("Connected to Contentful!", response);
    } catch (e) {
      console.warn("Contentful connection failed, using mock data", e);
    }
  }
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 600));
  return MOCK_POSTS;
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  // Logic for fetching single post from Contentful would go here
  
  await new Promise(resolve => setTimeout(resolve, 400));
  return MOCK_POSTS.find(post => post.slug === slug);
};