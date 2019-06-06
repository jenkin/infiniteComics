import React from 'react';

class fumetto extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            id: 0,
            x: this.props.data[0].x,
            y: this.props.data[0].y
        }
    }

    movingx = () => {

        let oldId = this.state.id,
            newId = oldId + 1;

        if (newId < this.props.data.length) {

            let newCartoon = this.props.data[newId];

            this.setState({
                id: newId,
                x: newCartoon.x,
                y: newCartoon.y
            });

        } else {

            this.setState({
                id: 0,
                x: this.props.data[0].x,
                y: this.props.data[0].y
            });

        }

    };

    render() {
        return (
            <div>
                <p></p>
                <div onClick={this.movingx} className="cartoon" style={{
                    "backgroundImage": "url('" + this.props.src + "')",
                    "backgroundPositionX": -this.state.x + 'px',
                    "backgroundPositionY": -this.state.y + 'px',
                    "width": "210px",
                    "height": "180px"
                }}></div>
            </div>
        )
    }
}

export default fumetto;
