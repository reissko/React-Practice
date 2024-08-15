
function Button() {

    const handleClick = () => console.log("HELLO");

    const handleClick2 = (name) => console.log("${name} stop clicking me");
    
    return (
        <>
            <Button onClick={() => handleClick}>Click Me!</Button>
        </>
    );

}

export default Button