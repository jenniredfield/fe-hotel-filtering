import React, {Component} from 'react';


class CheckBox extends Component {

        state = {
            checked: this.props.checked || false
        }
    
    render() {
        const { value, fac, handleFilterCheck } = this.props;
        const { checked } = this.state;
        return (
            <label className="">
                <input type="checkbox" value={value} name="subtype" onChange={handleFilterCheck} checked={checked} />
                <span>{fac}</span>
            </label>
        )
    }
}

export default CheckBox;