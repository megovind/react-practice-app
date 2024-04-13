import axios from "axios";
import { useDispatch } from "react-redux";
import { Grid } from "semantic-ui-react";
import ProductCard from "./product-card";
import { setProducts } from "../../redux/actions/actions";
import { useEffect } from "react";

export default function ProductsPage() {
    const dispatch = useDispatch();



    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("https://fakestoreapi.com/products").catch(err => {
                console.log(err);
            })
            dispatch(setProducts(response.data));
        }
        fetchData();

    })

    return <Grid columns={4} divided>
        <ProductCard />
    </Grid>
}