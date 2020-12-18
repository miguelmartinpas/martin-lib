import React from 'react';
import './Dropdown.styles.css';

export interface IOption {
    value: string;
    label: string;
}

export interface IDropdownProps {
    options: IOption[];
    selected: string;
    disabled?: boolean;
    onChange: (value: string) => void;
}

const renderOption = (value: string, label: string, className: string) => (
    <option className={className} value={value}>
        {label}
    </option>
);

export const Dropdown = (props: IDropdownProps): React.ReactElement => {
    const { options, selected, disabled = false, onChange } = props;
    return (
        <select
            className="ml-select"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event.currentTarget.value)}
            defaultValue={selected}
            disabled={disabled}
        >
            {renderOption('', 'Select one', 'option')}
            {options.map((option: IOption) => {
                const { label, value } = option;
                return (
                    <option key={value} className="option" value={value}>
                        {label}
                    </option>
                );
            })}
        </select>
    );
};

export default Dropdown;
