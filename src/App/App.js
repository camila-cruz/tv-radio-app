import {ActivityPanels} from '@enact/moonstone/Panels';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Changeable from '@enact/ui/Changeable';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import Detalhe from '../views/Detalhe';
import Lista from '../views/Lista';

const radios = [
	// Chamar nomes do banco
	'Antena 1',
	'Alpha FM',
	'Millenium',
	'Saudade FM',
];

const AppBase = kind({
	name: 'App',

	styles: {
		className: 'app'
	},

	propTypes: {
		index: PropTypes.number,
		radio: PropTypes.number,
		onNavigate: PropTypes.func,
		onSelectCabra: PropTypes.func
	},

	defaultProps: {
		index: 0,	// index 0 é a lista, 1 é o de detalhes, isso é definido pela ordem no render
		radio: 0
	},

	handlers: {
		onSelectRadio: (ev, {onNavigate, onSelectRadio}) => {
			if (onSelectRadio) {
				onSelectRadio({
					radio: ev.index
				});
			}

			// Navega para o painel de detalhes
			if (onNavigate) {
				onNavigate({
					index: 1
				});
			}
		}
	},

	render: ({index, onNavigate, onSelectRadio, radio, ...rest}) => (
		<ActivityPanels {...rest} index={index} onSelectBreadcrumb={onNavigate}>
			<Lista onSelectRadio={onSelectRadio}>{radios}</Lista>
			<Detalhe nome={radios[radio]}/>
		</ActivityPanels>
	)
});

const App =
	Changeable({prop: 'index', change: 'onNavigate'},
		Changeable({prop: 'radio', change: 'onSelectRadio'},
			MoonstoneDecorator(AppBase)
		)
);

export default App;
export {App, AppBase};
