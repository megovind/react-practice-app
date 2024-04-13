import React, { useState } from "react";
import { Button, Container } from "semantic-ui-react";
import GetDetailsForm from "./get-details-form";

function Home() {
    const [toggle, setToggle] = useState(false);
    return <>
        <Container style={{ margin: "20px" }}>
            {toggle ? <GetDetailsForm /> : <Button onClick={() => setToggle(!toggle)} > {toggle ? 'Cancel' : '+ Add Transaction'}</Button>}

        </Container>
    </>
}

export default Home;