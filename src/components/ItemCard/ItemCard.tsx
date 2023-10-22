import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import * as classes from './ItemCard.module.scss';

function ItemCard() {
    const header = (
        <img
            alt="Card"
            src="https://primefaces.org/cdn/primereact/images/usercard.png"
        />
    );
    const footer = <Button label="Add to Cart" icon="pi pi-cart-plus" />;
    return (
        <Card
            className={classes.cardContainer}
            header={header}
            footer={footer}
            pt={{ footer: { className: classes.cardFooter } }}
        >
            <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
            </p>
        </Card>
    );
}

export default ItemCard;
