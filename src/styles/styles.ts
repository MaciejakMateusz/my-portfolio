export const chartStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        cursor: 'pointer',
        borderRadius: '22px',
        border: 'none',
        backgroundColor: '#E0F3FF',
        fontStyle: '"Lexend", sans-serif',
        fontSize: '1rem',
        fontWeight: '300',
        color: state.isDisabled ? '#ccc' : '#016DFF',
        width: '150px',
        height: '32px',
        minHeight: '32px',
        textAlign: 'left',
        borderColor: state.isFocused ? 'transparent' : provided.borderColor,
        boxShadow: state.isFocused ? 'none' : provided.boxShadow,
        '&:hover': {
            borderColor: state.isFocused ? 'transparent' : provided['&:hover'].borderColor,
        }
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: '#016DFF',
        maxWidth: '90%'
    }),
    dropdownIndicator: (provided: any, state: any) => ({
        ...provided,
        display: state.isDisabled ? 'none' : provided.display,
        padding: '8px',
        position: 'absolute',
        right: '5px',
        color: '#016DFF',
        '& svg': {
            width: '15px',
            height: '15px',
            '&:hover': {
                color: '#016DFF',
            }
        }
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: 'none'
    }),
    menu: (provided: any) => ({
        ...provided,
        borderRadius: '20px',
        minHeight: '32px',
        width: '150px',
        padding: '12px 2px',
    }),
    menuList: (provided: any) => ({
        ...provided,
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
    }),
    noOptionsMessage: (provided: any) => ({
        ...provided,
        fontSize: '1rem',
        color: '#016DFF',
        fontWeight: '300',
        fontFamily: '"Lexend", sans-serif',
        textAlign: 'left'
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        fontSize: '1rem',
        fontWeight: '300',
        background: state.isSelected ? '#E0F3FF' : '#FFF',
        color: '#016DFF',
        '&:hover': {backgroundColor: '#E0F3FF'}
    }),
    placeholder: (provided: any, state: any) => ({
        ...provided,
        color: state.isDisabled ? '#888' : '#016DFF',
        fontSize: '1rem',
        fontFamily: '"Lexend", sans-serif',
        fontWeight: '300',
    })
}