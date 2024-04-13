import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Container } from "semantic-ui-react";

export default function ProductCard() {
    const products = useSelector((state) => state.allProducts.products);

    return <Container >
        {products.map((product) => {
            const { id, title, image, price, category } = product;
            return <Container key={id}>
                <Link to={`/shop/${id}`}>
                    <Card>
                        <div className="image">
                            <div className="image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </Card>
                </Link>
            </Container>
        })}
    </Container>
}