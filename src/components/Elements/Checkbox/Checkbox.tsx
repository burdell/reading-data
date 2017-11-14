import React from 'react';
import { Checkbox } from 'material-ui';
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
            onCheck={(event: any, checked: boolean) => onSelect({
                field: event.target.name,
                selected: checked,
                value: Number(event.target.value)
            })}
            label={label}
            value={value || label}
        />
    );
};
