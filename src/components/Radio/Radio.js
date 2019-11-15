import kind from '@enact/core/kind';
import Spottable from '@enact/spotlight/Spottable';
import css from './Radio.less'
import PropTypes from 'prop-types';
import React from 'react';

const RadioBase = kind({
    name: 'Radio',

    styles: {
        css,
        className: 'radio'
    },

    propTypes: {
        children: PropTypes.string,
        index: PropTypes.number,
        onSelect: PropTypes.func,
        size: PropTypes.number
    },

    defaultProps: {
        size: 200
    },

    handlers: {
        onSelect: (ev, {index, onSelect}) => {
            if (onSelect) {
                onSelect({index});
            }
        }
    },

    computed: {
        /* url: (props) => {
            return "//loremflickr.com/" + props.size + "/" + props.size + "/goat";
        } */
        url: ({index, size}) => {
            return `//loremflickr.com/${size}/${size}/song?random=${index}`;
        }
    },

    render: ({children, onSelect, url, ...rest}) => {
        delete rest.index;
        delete rest.size;

        return (
            <div {...rest} onClick={onSelect}>
                <img src={url} />
                <div>{children}</div>
            </div>
        );
    }
});

const Radio = Spottable(RadioBase);

export default Radio;
export {Radio, RadioBase}