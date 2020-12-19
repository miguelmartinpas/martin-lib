import React from 'react';
import './DynamicTable.styles.css';

const ID_KEY = 'id';

export interface IItem {
    id: string;
    [key: string]: string;
}

export interface IDynamicTableProps {
    headers: string[];
    items: IItem[];
    message?: string;
    hideId?: boolean;
}

const DynamicTable = ({ headers, items, message, hideId = false }: IDynamicTableProps): React.ReactElement => {
    const rederCell = (name: string, className: string): React.ReactElement => (
        <div key={name} className={className}>
            {name}
        </div>
    );

    const renderHeaders = (): React.ReactElement => (
        <div className="ml-header">{headers.map((value: string) => rederCell(value, 'ml-item-header'))}</div>
    );

    const renderRows = (): React.ReactElement[] =>
        items.map((item: IItem, index: number) => (
            <div key={item.id} className={index % 2 === 0 ? 'ml-row ml-odd' : 'ml-row ml-even'}>
                {Object.keys(item)
                    .filter((key) => (hideId ? key !== ID_KEY : true))
                    .map((key: string) => rederCell(item[key], 'ml-item'))}
            </div>
        ));

    const renderMessage = (): React.ReactElement => <div className="ml-item">{message}</div>;

    return (
        <div className="ml-table">
            {renderHeaders()}
            {renderRows()}
            {renderMessage()}
        </div>
    );
};

export default DynamicTable;
