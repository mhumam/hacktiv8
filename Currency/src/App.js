import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Card, Form, Input, Label } from 'reactstrap';
import RateCurrencyTable from 'components/RateCurrencyTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const formatAmount = (value) => value?.toLocaleString('id', { timeZone: 'UTC' });

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [dataList, setDataList] = useState(null)
    const [usdInput, setUsdInput] = useState(1);
    const [currency, setCurrency] = useState(null);
    const [rate, setRate] = useState(0);

    const callService = () => {
        setIsLoading(true);
        Axios.get('http://api.currencylayer.com/live?access_key=21c01a57d90c8967e6f72065bb32dad2')
            .then(function (response) {
                const { quotes } = response?.data;

                setDataList(quotes);
                setIsLoading(false);
            })
            .catch(function (error) {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        callService();
    }, []);

    const handleSelectCurrency = (e) => {
        const input = e.target.value;
        const currency = input?.slice(3, 6);

        setCurrency(currency);
        setRate(dataList[input]);
    }

    const handleUsdInput = (e) => {
        const input = e.target.value;
        setUsdInput(input);
    }

    return (
        <div className="container">
            <h1 className="mb-5 text-center"> USD Currency Rate</h1>
            <Card className="p-3 mb-4" style={{ boxShadow: 'rgba(35, 55, 80, 0.3) 0px 6px 12px' }}>
                <Form className='d-flex row'>
                    <div class="form-group col-md-4 ml-4 mr-5">
                        <Label for="amount" style={{ fontWeight: 600 }}>Amount</Label>
                        <Input type="number" name="amount" placeholder="0" value={usdInput} onChange={handleUsdInput} />
                    </div>
                    <div class="form-group col-md-4 mb-2">
                        <Label for="from" style={{ fontWeight: 600 }}>From</Label>
                        <Input type="select" name="currency" disabled>
                            <option>USD</option>
                        </Input>
                    </div>
                    <div class="form-group col-md-4 mb-2">
                        <Label for="to" style={{ fontWeight: 600 }}>To</Label>
                        <Input type="select" name="currency" onChange={handleSelectCurrency}>
                            <option>Please select currency</option>
                            {(dataList !== null && dataList !== undefined) &&
                                Object.keys(dataList)?.map((key) => {
                                    return (
                                        <option value={key}>{key.slice(3, 6)}</option>
                                    )
                                })}
                        </Input>
                    </div>
                </Form>
                <div className="text-center mt-5">
                    <h2>{formatAmount((usdInput * rate))} {currency}</h2>
                    <p>(1 USD = {formatAmount(rate)} {currency})</p>
                </div>
            </Card>
            <div style={{ padding: '0 10em' }}>
                <div style={{ textAlign: 'right' }}>
                    <button type="button" class="btn btn-primary" onClick={callService} disabled={isLoading}>Refresh</button>
                </div>
                <RateCurrencyTable isLoading={isLoading} data={dataList} />
            </div>
        </div>
    )
}

export default App;
