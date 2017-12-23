import React from 'react';
import { Checkbox } from 'antd';
import 'antd/lib/checkbox/style/css';

import { CheckboxSelection } from './';
import { Label, LabelDisplay } from './styles';

interface CheckboxProps {
    isChecked: boolean;
    name: string;
    label: string | number;
    value?: string | number;
    onSelect(result: CheckboxSelection): void;
}

export default ({ label, isChecked, onSelect, name, value }: CheckboxProps) => {
    return(
        <Label>
            <Checkbox
                name={name}
                checked={isChecked}
                onChange={(e) => {
                    onSelect({
                        field: e.target.name,
                        selected: e.target.checked,
                        value: Number(e.target.value)
                    });
                }}
                value={value || label}
            />
            <LabelDisplay>{label}</LabelDisplay>
        </Label>
    );
};
