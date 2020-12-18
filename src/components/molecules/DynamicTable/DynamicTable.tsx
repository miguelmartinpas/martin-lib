import React from 'react';
import './DynamicTable.styles.css';

export interface IItem {
    [key: string]: string;
}

export interface IDynamicTableProps {
    headers: string[];
    items: IItem[];
}

const DynamicTable = ({ headers, items }: IDynamicTableProps): React.ReactElement => {
    const rederCell = (name: string, className: string): React.ReactElement => <div className={className}>{name}</div>;

    const renderHeaders = (): React.ReactElement => (
        <div className="ml-header">{headers.map((value: string) => rederCell(value, 'ml-item-header'))}</div>
    );

    const renderRows = (): React.ReactElement[] =>
        items.map((item: IItem, index: number) => (
            <div key={`div-${String(index)}`} className={index % 2 === 0 ? 'ml-body ml-odd' : 'ml-body ml-even'}>
                {Object.keys(item).map((key: string) => rederCell(item[key], 'ml-item'))}
            </div>
        ));

    return (
        <div className="ml-table">
            {renderHeaders()}
            {renderRows()}
        </div>
    );
};

export default DynamicTable;
