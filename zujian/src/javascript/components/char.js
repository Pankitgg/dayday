import React, {Component} from 'react';
import { Liquid } from '@antv/g2plot';
class Char extends Component {
constructor(props){
    super(props)
    this.state={
        kkmax:500,
        kkmin:200
    }
}
    componentDidMount() {
        const liquidPlot = new Liquid(document.getElementById('container'), {
            title: {
                visible: true,
                text: 'dub',
            },
            min: 0,
            max:this.state.kkmax,
            value:this.state.kkmin,
        });
        liquidPlot.render();
    }

    render() {
        return (
            <div>
                <div id={"container"}></div>
            </div>
        );
    }
}

export default Char;