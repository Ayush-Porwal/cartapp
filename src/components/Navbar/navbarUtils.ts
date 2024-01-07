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

export const getUserItems = ({userLoggedIn, navigate}) => {
    return [
        {
            label: 'Seller Actions',
            items: [
                {
                    label: 'Add Product',
                    icon: 'pi pi-plus',
                    command: () => {navigate('/add-product')},
                }
            ]
        },
        {
            label: 'User Actions',
            items: [
                {
                    label: 'My Profile',
                    icon: 'pi pi-user'
                },
                {
                    label: 'Orders',
                    icon: 'pi pi-box'
                },
                {
                    label: 'Wishlist',
                    icon: 'pi pi-list'
                },
                {
                    label: userLoggedIn ? 'Logout' : 'Login',
                    icon: userLoggedIn ? 'pi pi-sign-out' : 'pi pi-sign-in',
                    command: () => {navigate('/signin')},
                },
            ]
        }
    ]
}
