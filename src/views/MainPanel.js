import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			{/* <Header title="Rádios na TV"/> */}
			<Header marqueeOn>
				<title>Rádios na TV</title>
				<titleBelow>Ouça suas rádios favoritas na sua televisão!</titleBelow>
			</Header>
			<Button>Clique aqui</Button>
		</Panel>
	)
});

export default MainPanel;
