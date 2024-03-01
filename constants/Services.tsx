import { v4 as uuid } from 'uuid'
import { PiggyBank, Wallet2, ReceiptText, LockKeyhole } from 'lucide-react';

export const Services = [
    {
        id: uuid(),
        icon: <PiggyBank size={60} className='text-pink-400' />,
        title: 'No Downpayment',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
        id: uuid(),
        icon: <Wallet2 size={60} className='text-pink-400' />,
        title: 'All Cash Offer',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
        id: uuid(),
        icon: <ReceiptText size={60} className='text-pink-400' />,
        title: 'Experts in Your Corner',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
        id: uuid(),
        icon: <LockKeyhole size={60} className='text-pink-400' />,
        title: 'Lokced in Pricing',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    }
]
