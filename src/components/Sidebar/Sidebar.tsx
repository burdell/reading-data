import React from 'react';

import { Book, BookDataService, FilterOptions, Stats as IStats } from '../types';

import Stats from '../Stats';
import Filter from '../Filter';
import DataService from '../../data/data-service';
import './styles.css';

interface SidebarProps {
    onChange(books: Book[]);
}

interface SidebarState {
    stats: IStats;
}

export default class Sidebar extends React.Component<SidebarProps, SidebarState> {
    private dataService: BookDataService;
    private defaultFilter: FilterOptions;

    constructor(props: SidebarProps) {
        super(props);

        this.state = {
            stats: {
                bookCount: null,
                pageCount: null,
                ratingCount: null
            }
        };

        this.dataService = new DataService() as BookDataService;
        this.defaultFilter = {
            year: [2017],
            read: true,
            month: [],
            rating: []
        };

        this.filter = this.filter.bind(this);
    }

    componentDidMount() {
        this.filter(this.defaultFilter);
    }

    render() {
        return (
            <div className="FilterBar">
                <Stats stats={this.state.stats} />
                <Filter
                    defaultFilters={this.defaultFilter}
                    onFilter={this.filter}
                />
            </div>
        );
    }

    filter(filterOptions: FilterOptions) {
        const { books, stats } = this.dataService.filter(filterOptions);
        
        this.setState({ stats });
        this.props.onChange(books);
    }
}
