import React from 'react';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/FloatingActionButton';

import { Book, BookDataService, FilterOptions, Stats } from '../types';
import { CloseAction } from './styles';

import Filter from './Filter';
import DataService from '../../data/data-service';

interface SidebarProps {
    open: boolean;
    onChange(books: Book[], stats: Stats, filterOptions: FilterOptions);
}

interface SidebarState {
    open: boolean;
}

export default class SidebarComponent extends React.Component<SidebarProps, SidebarState> {
    private dataService: BookDataService;
    private defaultFilter: FilterOptions;

    constructor(props: SidebarProps) {
        super(props);

        this.state = {
            open: props.open
        };

        this.dataService = new DataService() as BookDataService;
        this.defaultFilter = {
            year: [2017],
            read: true,
            month: [],
            rating: []
        };

        this.filter = this.filter.bind(this);
        this.close = this.close.bind(this);
    }

    componentWillReceiveProps(newProps: SidebarProps, oldProps: SidebarProps) {
        if (oldProps.open !== newProps.open) {
            this.setState({ open: newProps.open });
        }
    }

    componentDidMount() {
        this.filter(this.defaultFilter);
    }

    render() {
        return (
            <Drawer open={this.state.open}>
                <CloseAction>
                    <Button mini={true} onClick={this.close}>X</Button>
                </CloseAction>
                <div className="FilterBar">
                    <Filter
                        defaultFilters={this.defaultFilter}
                        onFilter={this.filter}
                    />
                </div>
            </Drawer>
        );
    }

    filter(filterOptions: FilterOptions) {
        const { books, stats } = this.dataService.filter(filterOptions);
        this.props.onChange(books, stats, filterOptions);
    }

    close() {
        this.setState({ open: false });
    }
}
