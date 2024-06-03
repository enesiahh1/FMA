function Messages() {

    const firstName = `Enes`;
    if (firstName)
        return <h2>Welcome {firstName}</h2>
    else
        return <h2>Welcome to react JS</h2>;
}

export default Messages;