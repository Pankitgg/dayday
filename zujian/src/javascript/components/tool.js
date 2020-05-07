import React, {Component} from 'react';

class Tool extends Component {
    constructor(props){
        super(props);
        this.state={
            time:'201010'
        }

    }
    componentWillMount() {
        setInterval((function() {
            var dd=new Date().toLocaleTimeString()
            this.setState({
                time:dd
            })
        }).bind(this), 1000)
    }
    render() {
        return (
            <div>
                {this.state.time}
            </div>
        );
    }
}

export default Tool;