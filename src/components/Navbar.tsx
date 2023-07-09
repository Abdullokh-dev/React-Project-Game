interface Props {
    cartItemsCount: number
}

function Navbar({cartItemsCount}: Props) {
    return(
        <>Navbar: {cartItemsCount}</>
    )
}
export default Navbar;
