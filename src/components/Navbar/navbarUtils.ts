import { MenuItem } from 'primereact/menuitem';

export const items: MenuItem[] = [
    {
        label: 'Grocery',
        items: [
            [
                {
                    label: 'Fruits',
                    items: [{ label: 'Mango' }, { label: 'Banana' }],
                },
                {
                    label: 'Vegetables',
                    items: [{ label: 'Carrot' }, { label: 'Potato' }],
                },
            ],
        ],
    },
    {
        label: 'Accessories',
        items: [
            [
                {
                    label: 'Electronics',
                    items: [{ label: 'TV' }, { label: 'Refrigerator' }],
                },
                {
                    label: 'Furniture',
                    items: [{ label: 'Table' }, { label: 'Wardrobe' }],
                },
            ],
        ],
    },
];
