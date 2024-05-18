"use strict";
function getShippingCost(country){
    let info = "";
    switch(country){
        case 'China':
            info = 'Shipping to China will cost 100 credits';
            break;
        case 'Chile':
            info = 'Shipping to Chile will cost 100 credits';
            break;
        case 'Chile':
            info = 'Shipping to Chile will cost 100 credits';
            break;
        case 'Chile':
            info = 'Shipping to Chile will cost 100 credits';
            break;
        default:
            info = "Sorry, there is no delivery to your country";
    }
    return info;
}