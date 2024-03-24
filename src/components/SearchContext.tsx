// GlobalStateContext.js
import React, { createContext, useContext, useState } from 'react';

export const defaultSearchContext = {
    "filterOptions": {
        "search": "",
        "isVerified": true,
        "minQuantity": [0, 50],
        "recommended": true
    },
    "sortOptions": {
        "sortByRating": true,
    }
}
export const SearchContext = createContext(defaultSearchContext);