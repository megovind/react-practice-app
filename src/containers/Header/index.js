import { useState } from "react"
import { Link } from "react-router-dom"
import { Input, Menu } from "semantic-ui-react"

const Header = () => {
    const [activeItem, setActiveItem] = useState("home")
    const handleItemClick = (e, { name }) => setActiveItem(name)
    return <div>
        <Menu pointing>
            <Link to={"/"}> <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
            />
            </Link>
            <Link to={"/game"} > <Menu.Item
                name='tictoc'
                active={activeItem === 'tictok'}
                onClick={handleItemClick}
            />
            </Link>
            <Link to={"/counter"}>
                <Menu.Item
                    name='counter'
                    active={activeItem === 'counter'}
                    onClick={handleItemClick}
                /></Link>

            <Link to={"/shop"}>
                <Menu.Item
                    name='shop'
                    active={activeItem === 'shop'}
                    onClick={handleItemClick}

                />
            </Link>
            <Link to={"/editor"}>
                <Menu.Item
                    name='editor'
                    active={activeItem === 'editor'}
                    onClick={handleItemClick}

                />
            </Link>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    </div>
}

export default Header;