import React from "react";
import "../css/components/App.css";

export default class App extends React.Component {
	styles = {};
	state = {};

	render() {
		const handleElem = (e) => {
			const unit = e.target.id === "backgroundColor" ? "" : "px";
			this.styles[e.target.id] = e.target.value + unit;
			this.setState(Object.assign({}, this.styles));
		};
		return (
			<div className="wrapper">
				<div className="inputs">
					<input type="text" id="width" className="input" onChange={handleElem} placeholder="width" />
					<input type="text" id="height" className="input" onChange={handleElem} placeholder="height" />
					<input type="text" id="backgroundColor" className="input" onChange={handleElem} placeholder="background color" />
					<input type="text" id="borderRadius" className="input" onChange={handleElem} placeholder="border radius" />
				</div>
				<div className="element-container">
					<div className="element" style={this.state}></div>
				</div>
			</div>
		);
	}
}
