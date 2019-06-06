import React from 'react';
import './App.css';
import Fumetto from './Fumetto';
import DenseAppBar from './appBar.js'
import GasolineAlley from './gasoline-alley';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

class infiniteComics extends React.Component {
    render() {
        return (
            <div>
                <DenseAppBar />
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="sm">
                        <div><Fumetto src='alley.jpg' data={GasolineAlley} bx="0" by="0" zoom="1" /></div>
                    </Container>
                </React.Fragment>
            </div>
        );
    }
}

export default infiniteComics;
