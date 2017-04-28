import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TweenMax from 'gsap';

class Zipper extends Component {
    constructor(){
        super();
        this.state = {}
        this.animate = this.animate.bind(this)
    }
    componentDidMount() {
        this.animate()
    }

    renderLines() {
    let lines = [];
    for (let i = 0; i < 25; i++) {
        // Upper line
        lines.push(<line
            className="lineUpper"
            key={`${i}-upper`} ref={`${i}-upper`}
            x1={i * 10} x2={i * 10} y1={20} y2={150}
            strokeWidth="2" stroke="black"/>)

        // Lower Line
        lines.push(<line
            className="lineLower"
            key={`${i}-lower`} ref={`${i}-lower`}
            x1={i * 10} x2={i * 10} y1={320} y2={160}
            strokeWidth="2" stroke="black"/>)
    }
    return lines;
    }

    animate() {
        let pieces = {
            upper: [],
            lower: [],
        }
        pieces.ball = this.refs.ball;
        for (let i = 0; i < 25; i++) {
            pieces.upper.push(this.refs[`${i}-upper`])
            pieces.lower.push(this.refs[`${i}-lower`])
        }

        let tl = TweenMax;
        console.log(pieces.ball)
        tl.to(pieces.ball, 3, {x: -450})
        tl.staggerTo(".lineUpper", 1, {rotation: "60cw"}, -0.06)
        tl.staggerTo(".lineLower", 1, {rotation: "-60cw", transformOrigin: "bottom"}, -0.06)
        tl.staggerFrom(".lineUpper", 1, {rotation: "-60cw", delay: 2}, -0.06)
        tl.staggerFrom(".lineLower", 1, {rotation: "60cw", delay: 2, transformOrigin: "bottom"}, -0.06)
    }

    render() {
        return (
            <svg className="container" x="0" y="0"
                 width="500"
                 height="500"
                 viewBox="-200 0 700 700"
                 xmlns="http://www.w3.org/2000/svg">
                {this.renderLines()}
                <circle ref="ball" cx="350" cy="150" r="30"/>
            </svg>
        )
    }
}

const ZipperLine = props => {
    return (
        <line x1={props.x1} x2={props.x2} y1={props.y1} y2={props.y2} strokeWidth="2" stroke="black"/>
    )
}

export default Zipper