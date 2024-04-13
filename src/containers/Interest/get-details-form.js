import { useState } from "react";
import { Form } from "semantic-ui-react";

function GetDetailsForm() {
    const [formData, setFormData] = useState({ amount: 1000, rate: 2 });
    const [calculatedAmount, setCalculatedAmount] = useState(0);

    const handleChange = (e, { name, value }) => setFormData(prevState => ({ ...prevState, [name]: value }))

    const calculateAmountByMonth = () => {
        let final = 0;
        const { amount, rate, fromDate, toDate } = formData;
        const months = getMonthDifference(new Date(fromDate), new Date(toDate));
        const percentage = (parseFloat(amount) / 100) * parseFloat(rate);
        const years = months / 12;
        final = percentage * parseFloat(months + 1);
        console.log('Months', { months, years });
        console.log('Final Amnount', final);
        setCalculatedAmount(final)
    }

    function getMonthDifference(startDate, endDate) {
        return (
            endDate.getMonth() -
            startDate.getMonth() +
            12 * (endDate.getFullYear() - startDate.getFullYear())
        );
    }

    // const compoundInterest = (p, t, r, n) => {
    //     const amount = p * (Math.pow((1 + (r / n)), (n * t)));
    //     const interest = amount - p;
    //     return interest;
    // };


    return <div>
        <Form onSubmit={calculateAmountByMonth}>
            <Form.Group>
                <Form.Input
                    placeholder='amount'
                    name='amount'
                    type="number"
                    value={formData.amount}
                    onChange={handleChange}
                />

                <Form.Input
                    placeholder='Rate of Interest in %'
                    name='rate'
                    type="number"
                    value={formData.rate}
                    onChange={handleChange}
                />
                <Form.Input
                    placeholder='From Date'
                    name='fromDate'
                    type="date"
                    value={formData.fromDate}
                    onChange={handleChange}
                />
                <Form.Input
                    placeholder='Till Date'
                    name='toDate'
                    type="date"
                    value={formData.toDate}
                    onChange={handleChange}
                />
                <Form.Group inline>
                    <label>Monthly OR Yearly</label>
                    <Form.Radio
                        label='Monthly'
                        value='monthly'
                        name="isMonthly"
                        checked={formData.isMonthly === 'monthly'}
                        onChange={handleChange}
                    />
                    <Form.Radio
                        label='Yearly'
                        value='yearly'
                        name='isMonthly'
                        checked={formData.isMonthly === 'yearly'}
                        onChange={handleChange}
                    />

                </Form.Group>
                <Form.Button content='Submit' />
            </Form.Group>
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <div>{calculatedAmount}</div>
    </div>
}

export default GetDetailsForm;