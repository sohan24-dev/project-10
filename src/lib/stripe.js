import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TgT0uRrNlfmyb0vVLnssPSL',
    'seeker_premium': 'price_1Tgc4YRrNlfmyb0vBsGN4hIa',
    'recruiter_growth': 'price_1Tgc7cRrNlfmyb0vo4XSvBf7',
    'recruiter_enterprise': 'price_1Tgc6FRrNlfmyb0vqqkTOXHm'
}