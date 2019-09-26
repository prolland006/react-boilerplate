import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Cool from './cool.jsx'

ReactDOM.render(
    <div>
        <Cool firstname="Patrice" lastname = "Rolland" />
    </div>,
    document.getElementById('root')
)