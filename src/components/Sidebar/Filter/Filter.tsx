import React from 'react';

import { FilterOptions } from '../../types';
import FilterSection from './FilterSection';
import { possibleMonths, possibleRatings, possibleYears, emptyFilter, monthMap } from './filters';

import { CheckboxSelection } from '../../Elements/Checkbox';
import CheckboxFilter from './CheckboxFilter/CheckboxFilter';
import { ratingGenerator } from '../../Rating';

import { SidebarSection, SidebarHeader } from '../styles';

interface FilterProps {
    defaultFilters: FilterOptions;
    onFilter(f: FilterOptions);
}

interface FilterState {
    filterOptions: FilterOptions;
}

export default class Filter extends React.Component<FilterProps, FilterState> {
    constructor(props: FilterProps) {
        super(props);
        
        this.state = {
            filterOptions: props.defaultFilters || emptyFilter
        };
        this.checkboxSelected = this.checkboxSelected.bind(this);
    }

    public render() {
        return (
            <SidebarSection>
                <SidebarHeader>Filter</SidebarHeader>
                <FilterSection title="Year">                    
                    <CheckboxFilter
                        field="year"
                        currentFilter={this.state.filterOptions}
                        onSelect={this.checkboxSelected}
                        options={possibleYears}
                    />
                </FilterSection>

                <FilterSection title="Rating">                    
                    <CheckboxFilter
                        field="rating"
                        currentFilter={this.state.filterOptions}
                        onSelect={this.checkboxSelected}
                        options={possibleRatings}
                        renderOption={(rating: string) => ratingGenerator(Number(rating))}
                    />
                </FilterSection>

                <FilterSection title="Month">                    
                    <CheckboxFilter
                        field="month"
                        currentFilter={this.state.filterOptions}
                        onSelect={this.checkboxSelected}
                        options={possibleMonths}
                        renderOption={(month: string) => monthMap[month]}                        
                    />
                </FilterSection>
            </SidebarSection>
        );
    }

    private checkboxSelected({ field, value, selected }: CheckboxSelection) {
        const filterOptions = this.state.filterOptions;
        const filter = filterOptions[field];
        const valueIndex = filter.indexOf(value);

        if (valueIndex < 0) { filter.push(value); } else { filter.splice(valueIndex, 1); }
        this.props.onFilter(filterOptions);
    }
}
