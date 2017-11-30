import React from 'react';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/FloatingActionButton';

import { Book, BookDataService, FilterOptions, Stats as IStats } from '../types';

import Filter from './Filter';
import DataService from '../../data/data-service';

interface SidebarProps {
    onChange(books: Book[]);
}

interface SidebarState {
    stats: IStats;
    open: boolean;
}

export default class SidebarComponent extends React.Component<SidebarProps, SidebarState> {
    private dataService: BookDataService;
    private defaultFilter: FilterOptions;

    constructor(props: SidebarProps) {
        super(props);

        this.state = {
            stats: {
                bookCount: null,
                pageCount: null,
                ratingCount: null
            },
            open: false
        };

        this.dataService = new DataService() as BookDataService;
        this.defaultFilter = {
            year: [2017],
            read: true,
            month: [],
            rating: []
        };

        this.filter = this.filter.bind(this);
        this.toggleVisbility = this.toggleVisbility.bind(this);
    }

    componentDidMount() {
        this.filter(this.defaultFilter);
    }

    render() {
        return (
            <Drawer open={this.state.open}>
                <Button
                    onClick={this.toggleVisbility}
                >
                    {this.state.open ? '<' : '>'}
                </Button>
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
        
        this.setState({ stats });
        this.props.onChange(books);
    }

    toggleVisbility() {
        this.setState({ open: !this.state.open });
    }
}
