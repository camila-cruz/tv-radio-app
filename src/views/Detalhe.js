import {Panel, Header} from '@enact/moonstone/Panels';
import {VideoPlayer, MediaControls} from '@enact/moonstone/VideoPlayer';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

const DetalheBase = kind({
    name: 'Detalhe',

    propTypes: {
        ano: PropTypes.string,
        artista: PropTypes.string,
        musica: PropTypes.string,
        nome: PropTypes.string,
        stream: PropTypes.string
    },

    defaultProps: {
        ano: '1981',
        artista: 'Alceu Valença',
        musica: 'Fé na Perua',
        stream: 'https://antenaone.crossradio.com.br/stream/1'
    },

    render: ({ano, artista, musica, nome, stream, ...rest}) => (
        <Panel {...rest}>
            <Header title={nome}/>
            <div>
                <div>Artista: {artista}</div>
                <div>Música: {musica}</div>
                <div>Ano: ({ano})</div>
            </div>
            <div>
                <VideoPlayer title="Antena 1" autoCloseTimeout="10000">
                    <source src={stream}/>
                    <MediaControls jumpButtonsDisabled="true"/>
                </VideoPlayer>
            </div>
        </Panel>
    )
});

export default DetalheBase;
export {DetalheBase as Detalhe, DetalheBase};