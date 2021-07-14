import React from 'react';
import { string, number, shape, bool } from 'prop-types';
import { useAddToCartButton } from '@magento/peregrine/lib/talons/Gallery/useAddToCartButton';

import Button from '../Button';
import { mergeClasses } from '../../classify';

import defaultClasses from './addToCartButton.css';

const GalleryButton = props => {
    const talonProps = useAddToCartButton({
        item: props.item
    });
    const {
        handleAddToCart,
        isDisabled,
        isInStock
    } = talonProps;
    
    const classes = mergeClasses(defaultClasses, props.classes);

    const buttonText = isInStock ? "ADD TO CART" : "OUT OF STOCK"; 

    return (
        <Button
            className={classes.root}
            disabled ={isDisabled}
            onClick={handleAddToCart}
            priority="high"
            type="button"
        >
           {buttonText}
        </Button>
    );
};

export default GalleryButton;

GalleryButton.propTypes = {
    classes: shape({
        root: string,
        root_selected: string
    }),
    item: shape({
        id: number,
        name: string,
        small_image: shape({
            url: string
        }),
        stock_status: string.isRequired,
        type_id: string.isRequired, 
        url_key: string.isRequired,
        url_suffix: string,
        sku: string.isRequired, 
        price: shape({
            regularPrice: shape({
                amount: shape({
                    value: number,
                    currency: string,
                })
            })
        })
    })
};
