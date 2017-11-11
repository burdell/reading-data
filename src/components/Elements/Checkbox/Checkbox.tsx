import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import { CheckboxSelection } from './';

interface CheckboxProps {
    isChecked: boolean;
    name: string;
    label: string | number;
    value?: string | number;
    onSelect(result: CheckboxSelection): void;
}

export default ({ label, isChecked, onSelect, name, value }: CheckboxProps) => {
    return(
        <Checkbox
            name={name}
            checked={isChecked}
            onClick={(e, data) => onSelect({
                field: data.name,
                selected: data.checked,
                value: data.value
            })}
            label={label}
            value={value || label}
        />
    );
};
