import React from 'react';

import { FilterOptions } from '../../types';
import Checkbox, { CheckboxSelection } from '../../Elements/Checkbox';

interface CheckboxFilterProps {
    field: string;
    options: Array<string|number>;
    currentFilter: FilterOptions;
    onSelect(c: CheckboxSelection): void;
    renderOption?(o: string|number): string;
}

export default ({ options, field, currentFilter, onSelect, renderOption }: CheckboxFilterProps) => {
    return (
        <div>
            {options.map(option => (
                <div key={option}>
                    <Checkbox
                        name={field}
                        value={option}
                        label={renderOption ? renderOption(option) : option}
                        isChecked={currentFilter[field].indexOf(option) >= 0}
                        onSelect={onSelect}
                    />
                </div>
            ))}
        </div>
    );
};
