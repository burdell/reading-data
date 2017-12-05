import styled from 'react-emotion';

export const Sidebar = styled('div')`
    flex: 2;
    background-color: #fff;
    border-right: 1px solid #e1e1e1
`;

export const SidebarSection = styled('div')`
    padding: 1.5rem;
    line-height: 1.5;
    font-size: 1.2rem;
    font-weight: 100;
`;

export const SidebarHeader = styled('div')`
    font-size: 1.5rem;
    color: rgb(87, 87, 87);
`;

export const SidebarContent = styled('div')`
    padding-left: .5rem;
`;

export const SidebarType = styled('div')`
    color: rgb(136, 136, 136);s
`;

export const CloseAction = styled('div')`
    position: absolute;
    right: 10px;
    top: 5px;
`;
