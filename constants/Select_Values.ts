import { v4 as uuid } from 'uuid'

export const PurposeSelect = [
    {
        id: uuid(),
        name: 'For Rent',
        value: 'for-rent'
    },
    {
        id: uuid(),
        name: 'For Sale',
        value: 'for-sale'
    }
]

export const CategorySelect = [
    {
        id: uuid(),
        name: 'Apartment',
        value: 4
    },
    {
        id: uuid(),
        name: 'Villas',
        value: 3
    },
    {
        id: uuid(),
        name: 'Residential Building',
        value: 17
    },
    {
        id: uuid(),
        name: 'Office',
        value: 5
    },
    {
        id: uuid(),
        name: 'Factory',
        value: 8
    },
    {
        id: uuid(),
        name: 'Showroom',
        value: 24
    }
]

export const PriceSelect = [
    {
        id: uuid(),
        name: 'Lowest to highest)',
        value: "price-asc"
    },
    {
        id: uuid(),
        name: 'Highest to lowest',
        value: 'price-desc'
    },

]

export const FrequencySelect = [
    {
        id: uuid(),
        name: 'Daily',
        value: 'daily'
    },
    {
        id: uuid(),
        name: 'Weekly',
        value: 'weekly'
    },
    {
        id: uuid(),
        name: 'Monthly',
        value: 'monthly'
    },
    {
        id: uuid(),
        name: 'Yearly',
        value: 'yearly'
    }
]