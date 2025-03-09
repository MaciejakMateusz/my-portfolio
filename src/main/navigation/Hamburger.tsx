type HamburgerProps = {
    expandHandler: Function;
}

export const Hamburger = ({expandHandler}: HamburgerProps) => {
    return (
        <div className={'hamburger-bun'}>
            <button className="hamburger" onClick={() => expandHandler(true)}>
                <div className={'hamburger-slices'}>
                    <div className={'hamburger-slice'}/>
                    <div className={'hamburger-slice'}/>
                    <div className={'hamburger-slice'}/>
                </div>
            </button>
        </div>
    );
}