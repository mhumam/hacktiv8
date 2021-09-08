import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Button,
    CardHeader
} from 'reactstrap';

const PastMeetupCard = ({ title, date, total }) => {
    return (
        <Card className="mb-3 mb-md-0 mr-4" style={{ marginRight: '20px' }}>
            <CardHeader>
                {date}
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardText>
                    <b>{`${total} Went`} </b>
                </CardText>
                <Button color="primary">View</Button>
            </CardBody>
        </Card>
    );
}

const data = [
    { title: '#39 JakartaJS April Meetup with Kumparan', date: '27 November 2021', total: '139' },
    { title: '#39 JakartaJS April Meetup with Blibli', date: '28 Desember 2021', total: '113' },
    { title: '#37 JakartaJS April Meetup with Hacktiv8', date: '01 November 2021', total: '110' }
]

const App = () => {
    return (
        <section className="row mt-3">
            <div class="d-flex flex-row justify-content-between">
                <h2>Past Meetups</h2>
                <a href="/#">See All</a>
            </div>
            <div class="d-flex flex-sm-row flex-column">
                {
                    data?.map(obj => {
                        return <PastMeetupCard {...obj} />
                    })
                }
            </div>
        </section>
    )
}
export default App;
