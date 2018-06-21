import React, { Component } from 'react';

class Hints extends Component {
    constructor(props) {
        super(props);
    }

    someHandler(event) {
        console.log('enter')
    }

    someOtherHandler(event) {
        console.log('exit')
    }

    render() {

        const styles = {
            hitsWapper: {
                top: '15px',
                left: '15px',
                position: 'absolute',
                padding: '20px',
                borderRadius: '50px',
                border: 'solid 2px green'
            }, 
            hint: {
                position: 'absolute',
                top: '8px',
                left: '14px',
                fontSize: '21px',
                fontWeight: 'bold',
                color: 'green',
                cursor: 'default'
            }
        }

        return (
            <div style={styles.hitsWapper} 
                className={this.props.hits > 0 ? '' : 'hidden'} 
                onMouseEnter={this.someHandler}
                onMouseLeave={this.someOtherHandler}>
                <div style={styles.hint} title={'test'}> ? </div>
            </div>
        )
    }
}

export default Hints;