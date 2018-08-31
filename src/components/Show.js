import React from 'react';
import PropTypes from 'prop-types';
import Time from '../lib/Time';

const Show = (props) => {

    const time = new Time();

    const onChange = (e) => {
        props.onSecondsChanged(e.target.value);
    };

    const runningDisplayStyle = {
        position: 'absolute',
        top: 100,
        color: props.time <= 10000 ? '#FE5C5C' : ''
    };

    return (
        <div className="display" style={{ position: 'relative' }}>
                <div className="d-flex flex-column">
            {
                props.status == 'started'
                && <div className="display-time h2 align-self-center">
                    {time.getTime(props.time)}
                </div>
            }
            {
                props.status != 'started' &&
                    <div className="text-info h2 align-self-center">
                        {time.getTime(props.time)}
                    </div>
            }
                    <h3>Enter time in seconds</h3>
                    <input className="align-self-center" style={{ position: 'absolute', top: 100 }}
                        maxLength="6" value={props.seconds}
                        onChange={onChange} /><br /><br /><br />
                </div>
            <div style={{ position: 'absolute', bottom: 0, left: '-10px' }}>
                {props.children}
            </div>
        </div>
    );
};

Show.defaultProps = {
    seconds: 0,
    status: null,
    time: 0,
    onSecondsChanged: (e) => console.log(e.target.value)
};

Show.propTypes = {
    children: PropTypes.element,
    seconds: PropTypes.number.isRequired,
    status: PropTypes.string,
    time: PropTypes.number,
    onSecondsChanged: PropTypes.func
};

export default Show;