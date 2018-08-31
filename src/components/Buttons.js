import React from 'react';
import PropTypes from 'prop-types';

const Buttons = (props) => (
            <div className="card">
                    <div class="card-header">Control buttons</div>
                <div className="card-body">
                    <div className="controls btn-group">
                            <span>
                                    <button type="button" className="btn btn-lg btn-success"
                                        disabled={!props.canStart}
                                        onClick={props.start}>
                                        <div className="text-right">
                                            <i className="fa fa-play fa-2x mr-2 mb-3" />
                                        </div>
                                    </button>
                            </span>

                            <span>
                                    <button type="button" className="btn btn-lg btn-primary"
                                        onClick={props.pause}>
                                        <div className="text-right">
                                            <i className="fa fa-pause fa-2x mr-2 mb-3" />
                                        </div>
                                    </button>
                            </span>

                            <span>
                                    <button type="button" className="btn btn-lg btn-danger"
                                        onClick={props.stop}>
                                        <div className="text-right">
                                            <i className="fa fa-stop fa-2x mr-2 mb-3" />
                                        </div>
                                    </button>
                            </span>

                            <span>
                            <button className="btn btn-lg btn-warning"
                                onClick={props.reset}>
                                <div className="text-left">
                                    <i className="fa fa-refresh fa-2x ml-2 mb-3" />
                                </div>
                            </button>
                            </span>
                        </div>
                    </div>
                </div>
);

Buttons.defaultProps = {
    start: () => alert('start'),
    stop: () => alert('stop'),
    pause: () => alert('pause'),
    reset: () => alert('reset'),
    status: null,
    canStart: false,
};

Buttons.propTypes = {
    start: PropTypes.func,
    stop: PropTypes.func,
    pause: PropTypes.func,
    reset: PropTypes.func,
    status: PropTypes.string,
    canStart: PropTypes.bool
};

export default Buttons;