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

export const mainSelect = {
    control: (provided: any, state: any) => ({
        ...provided,
        cursor: 'pointer',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: '#FFB000',
        color: '#090909',
        width: '80px',
        height: '32px',
        minHeight: '32px',
        textAlign: 'left',
        fontFamily: 'Inter, serif',
        fontSize: '0.85rem',
        display: 'flex',
        borderColor: state.isFocused ? 'transparent' : provided.borderColor,
        boxShadow: state.isFocused ? 'none' : provided.boxShadow,
        '&:hover': {
            borderColor: state.isFocused ? 'transparent' : provided['&:hover'].borderColor,
        }
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: '#090909',
        maxWidth: '90%'
    }),
    dropdownIndicator: (provided: any, state: any) => ({
        ...provided,
        display: state.isDisabled ? 'none' : provided.display,
        padding: '8px',
        position: 'absolute',
        right: '3px',
        color: '#090909',
        '& svg': {
            width: '15px',
            height: '15px'
        }
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: 'none'
    }),
    menu: (provided: any) => ({
        ...provided,
        borderRadius: '10px',
        minHeight: '32px',
        width: '80px',
        padding: '0px 2px',
        boxShadow: 'none',
        border: 'none',
        outline: 'none',
        backgroundColor: '#FFB000'
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
        color: '#090909',
        textAlign: 'left'
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        fontFamily: 'Inter, serif',
        fontSize: '0.85rem',
        background: state.isSelected ? '#FFB000' : '#FFB000',
        color: '#090909',
        '&:hover': {backgroundColor: '#FFB000'}
    }),
    placeholder: (provided: any, state: any) => ({
        ...provided,
        color: state.isDisabled ? '#888' : '#090909',
        fontSize: '1rem'
    })
}

export const secondarySelect = {
    control: (provided: any, state: any) => ({
        ...provided,
        cursor: 'pointer',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: '#141414',
        color: '#FAFAFA',
        width: '150px',
        height: '44px',
        minHeight: '32px',
        textAlign: 'left',
        fontFamily: 'Inter, serif',
        fontSize: '0.85rem',
        display: 'flex',
        borderColor: state.isFocused ? 'transparent' : provided.borderColor,
        boxShadow: state.isFocused ? 'none' : provided.boxShadow,
        '&:hover': {
            borderColor: state.isFocused ? 'transparent' : provided['&:hover'].borderColor,
        }
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: '#FAFAFA',
        maxWidth: '80%'
    }),
    dropdownIndicator: (provided: any, state: any) => ({
        ...provided,
        display: state.isDisabled ? 'none' : provided.display,
        padding: '8px',
        position: 'absolute',
        right: '3px',
        color: '#FAFAFA',
        '& svg': {
            width: '15px',
            height: '15px'
        }
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: 'none'
    }),
    menu: (provided: any) => ({
        ...provided,
        borderRadius: '10px',
        minHeight: '32px',
        width: '100%',
        maxHeight: '240px',
        padding: '0px 2px',
        boxShadow: 'none',
        border: 'none',
        outline: 'none',
        backgroundColor: '#141414'
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
        color: '#FAFAFA',
        textAlign: 'left'
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        fontFamily: 'Inter, serif',
        fontSize: '0.85rem',
        background: state.isSelected ? '#141414' : '#141414',
        color: '#828282',
        '&:hover': {
            color: '#FAFAFA',
            cursor: 'pointer'
        }
    }),
    placeholder: (provided: any, state: any) => ({
        ...provided,
        color: state.isDisabled ? '#828282' : '#FAFAFA',
        fontSize: '1rem'
    })
}

export const secondarySelectShort = {
    ...secondarySelect,
    control: (provided: any, state: any) => ({
        ...secondarySelect.control(provided, state),
        width: '100px'
    })
}

export const chipsStyles = {
    input: (provided: any) => ({
        ...provided,
        color: '#FAFAFA'
    }),
    control: (provided: any, state: any) => ({
        ...provided,
        cursor: 'pointer',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: '#141414',
        color: '#FAFAFA',
        width: '100%',
        minHeight: '44px',
        textAlign: 'left',
        fontFamily: 'Inter, serif',
        fontSize: '0.85rem',
        display: 'flex',
        borderColor: state.isFocused ? 'transparent' : provided.borderColor,
        boxShadow: state.isFocused ? 'none' : provided.boxShadow,
        '&:hover': {
            borderColor: state.isFocused ? 'transparent' : provided['&:hover'].borderColor,
        }
    }),
    multiValue: (provided: any) => ({
        ...provided,
        backgroundColor: '#383838',
        borderRadius: '8px',
        color: '#FAFAFA',
        padding: '2px 4px',
        margin: '3px'
    }),
    multiValueLabel: (provided: any) => ({
        ...provided,
        color: '#FAFAFA',
        fontSize: '0.85rem'
    }),
    multiValueRemove: (provided: any) => ({
        ...provided,
        color: '#FAFAFA',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#D60339',
            color: '#FFFFFF'
        }
    }),
    dropdownIndicator: (provided: any) => ({
        ...provided,
        display: 'none'
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: 'none'
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        fontFamily: 'Inter, serif',
        fontSize: '0.85rem',
        background: state.isSelected ? '#141414' : '#141414',
        color: '#FAFAFA',
        '&:hover': {
            color: '#FAFAFA',
            cursor: 'pointer'
        }
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: '#828282',
        fontSize: '0.85rem',
        fontStyle: 'italic'
    })
}