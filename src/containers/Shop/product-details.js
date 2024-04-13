import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Container, Grid, GridColumn, GridRow, Header, HeaderSubheader, Icon, Image } from "semantic-ui-react";
import { removeSelectedProduct, selectedProduct } from "../../redux/actions/actions";

export default function ProductDetails() {
    const { productId } = useParams();
    const product = useSelector((state) => state.product);
    const { title, image, category, description, price } = product;
    const dispatch = useDispatch();

    const fetchProductDetails = async (id) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(err => {
            console.log("err", err);
        })
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if (productId && productId !== '') fetchProductDetails(productId);

        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [])


    return <>
        <Container>
            {Object.keys(product).lenght === 0 ? (<div>...Loading</div>) : (<Container>
                <Grid columns={2} >
                    <GridRow>

                        <GridColumn>
                            <Image src={image} />
                        </GridColumn>
                        <GridColumn>

                            <h1>{title}</h1>
                            <h2>
                                <Header>$ {price}</Header>
                            </h2>
                            <HeaderSubheader> {category}</HeaderSubheader>
                            <p>{description}</p>
                            <Button >
                                <Icon aria-hidden="true" className="shop icon" />
                                <div>Add To Cart</div>
                            </Button>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Container>)}
        </Container>
    </>
}