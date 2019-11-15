import {Panel, Header} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import Repeater from '@enact/ui/Repeater';

import Radio from '../components/Radio/Radio';

const ListaBase = kind({
    name: 'Lista',

    propTypes: {
        children: PropTypes.array,
        onSelectRadio: PropTypes.func
    },

    render: ({children, onSelectRadio, ...rest}) => (
        <Panel {...rest}>
            <Header title="Rádios na TV" titleBelow="Ouça suas rádios favoritas na sua televisão!"/>
            <Repeater childComponent={Radio} indexProp="index" itemProps={{onSelect: onSelectRadio}}>
                {children}
            </Repeater>
        </Panel>
    )
});

export default ListaBase;
export {ListaBase as Lista, ListaBase};