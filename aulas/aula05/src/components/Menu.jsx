function Menu(props) {
    const options = [
        {route: "/home", text: "Home"},
        {route: "/profile", text: "Perfil"},  // Ajustei a rota de "/perfil" para "/profile" para consistência
        {route: "/login", text: "Sair"}
    ];

    const onClick = (route) => (e) => {
        e.preventDefault();
        props.navTo(route);
    };
    
    return (
        <nav>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <a href={option.route} onClick={onClick(option.route)}>
                            {option.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;
