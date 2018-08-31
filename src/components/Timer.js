import React, { Component } from 'react';
import Show from './Show';
import Buttons from './Buttons';

class Timer extends Component {

    constructor() {
        super();

        this.state = {
            seconds: 0,
            time: 0,
            status: null
        };

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.pause = this.pause.bind(this);
        this.reset = this.reset.bind(this);
        this.onSecondsChanged = this.onSecondsChanged.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onSecondsChanged(seconds) {
        seconds = parseInt(seconds);

        if (seconds && typeof seconds === 'number') {
            if (seconds <= 359999) {
                this.setState(() => ({ seconds: seconds, time: seconds * 1000 }));
            }
        } else {
            this.setState(() => ({ seconds: 0, time: 0 }));
        }
    }

    start() {
        if (this.state.status !== 'started') {
            this.interval = setInterval(() => {
                if (this.state.time !== 0) {
                    this.setState(prevState => ({ time: prevState.time - 10 }));
                } else {
                    this.setState(() => ({ seconds: 0, status: null, time: 0 }));

                    clearInterval(this.interval);
                }
            }, 10);

            this.setState(() => ({ status: 'started' }));
        }
    }

    pause() {
        if (this.state.status && this.state.status === 'started') {

            clearInterval(this.interval);

            this.setState((prevState) => {
                return ({
                    status: 'paused',
                    seconds: Math.floor(prevState.time / 1000)
                });
            });
        }
    }

    stop() {
        if (this.state.status && this.state.status === 'started') {

            clearInterval(this.interval);

            this.setState((prevState) => {
                return ({
                    status: 'stopped',
                    seconds: Math.floor(prevState.time / 1000)
                });
            });
        }
    }

    reset() {
        clearInterval(this.interval);

        this.setState(() => ({ seconds: 0, status: null, time: 0 }));
    }

    render() {
        return (
            <div className="container">
                <div className="card text-center text-white bg-secondary mb-3">
                    <div class="card-header">Timer</div>
                    <div className="card-body">
                        <p className="card-text">
                            <Show seconds={this.state.seconds}
                                status={this.state.status}
                                time={this.state.time}
                                onSecondsChanged={this.onSecondsChanged}>
                            </Show>
                        </p>
                    </div>
                </div>
                        <Buttons start={this.start}
                            pause={this.pause}
                            stop={this.stop}
                            reset={this.reset}
                            status={this.state.status}
                            canStart={this.state.seconds > 0} />
            </div>
        );
    }
}

export default Timer;