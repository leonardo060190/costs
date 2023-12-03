import styles from './Select.module.css';

function Select({ text, name, options = [], handleOnChange, value }) {
    if (!Array.isArray(options)) {
        console.error('Options should be an array.');
        return null;
    }

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((options) => (
                    <option
                        value={options.id}
                        key={options.id}>{options.name}
                    </option>

                ))}
            </select>

        </div>
    )

}

export default Select
