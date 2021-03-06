import React, {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';

import style from './FaqContainer.module.scss';

const faqContext = createContext();

const FaqContainer = ({children}) => {
    const [expandedFaq, setExpandedFaq] = useState(null);
    const toggleExpandedFaq = (faq) => setExpandedFaq((expanded) => (faq !== expanded ? faq : null));

    return (
        <dl className={style.main}>
            <faqContext.Provider value={{expandedFaq, toggleExpandedFaq}}>
                {children}
            </faqContext.Provider>
        </dl>
    );
};

FaqContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useFaqContext = (faq) => {
    const {expandedFaq, toggleExpandedFaq} = useContext(faqContext);
    return [
        expandedFaq === faq,
        () => toggleExpandedFaq(faq),
    ];
};

export default FaqContainer;
