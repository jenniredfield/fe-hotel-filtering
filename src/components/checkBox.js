import React, { Component } from 'react';

class CheckBox extends Component {
    state = {
        checked: false,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.filterOff) {
            this.setState({
                checked: false,
            })
            this.props.handleFilterOff();
        }
    }

    handleCheck = () => {
        this.setState({
            checked: !this.state.checked,
        })
        this.props.handleChange(this.props.fac);
    }

    render() {
        const { value, fac } = this.props;
        return (
            <div className="labelCheckBox" >
                <input
                    type="checkbox"
                    className="regular-checkbox"
                    value={value}
                    name="subtype"
                    onChange={this.handleCheck}
                    checked={this.state.checked}
                    id={value} />
                <label for={value}></label>
                <span onClick={this.handleCheck} > {fac[0].toUpperCase() + fac.slice(1)}</span>
            </div>
        )
    }
}

export default CheckBox;