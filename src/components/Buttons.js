import React from 'react';
import PropTypes from 'prop-types';

const Buttons = (props) => (
    <div className="">
        <div className="d-flex flex-row">
            <div className="">
                <div className="controls btn-group">
                    {
                        props.status !== 'started' &&
                        <button type="button" className="btn btn-lg btn-primary"
                            disabled={!props.canStart}
                            onClick={props.startTimer}>
                            <div className="text-right">
                                <i className="fa fa-play fa-2x mr-2 mb-3" />
                            </div>
                        </button>
                    }

                    {
                        props.status === 'started' &&
                        <button type="button" className="btn btn-danger"
                            onClick={props.stopTimer}>
                            <div className="text-right">
                                <i className="fa fa-stop fa-2x mr-2 mb-3" />
                            </div>
                        </button>
                    }

                    <button className="btn btn-lg btn-warning"
                        onClick={props.resetTimer}>
                        <div className="text-left">
                            <i className="fa fa-refresh fa-2x ml-2 mb-3" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

Buttons.defaultProps = {
    startTimer: () => alert('startTimer'),
    stopTimer: () => alert('stopTimer'),
    resetTimer: () => alert('resetTimer'),
    status: null,
    canStart: false,
};

Buttons.propTypes = {
    startTimer: PropTypes.func,
    stopTimer: PropTypes.func,
    resetTimer: PropTypes.func,
    status: PropTypes.string,
    canStart: PropTypes.bool
};

export default Buttons;