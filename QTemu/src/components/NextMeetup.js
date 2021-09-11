import {
    Card,
    CardTitle,
    CardSubtitle,
    CardText
} from 'reactstrap';

const App = () => {
    return (
        <section className="mt-3">
            <h2>Next Meetup</h2>
            <Card body className="d-flex flex-column">
                <CardTitle tag="h5"><b>Awesome meetup and event</b></CardTitle>
                <CardSubtitle className="mb-3 text-muted">25 January 2019</CardSubtitle>
                <CardText>
                    <p>Hello, Javascript & Node.js Ninjas !<br />
                        Get ready for mountly meetup JakartaJS! This will be our fifth meetup of 2018!
                        The Meetup format will contain some short stories and technical talks.
                        If you have a short announcement you'd like to share with the audiences, you may do so during open mic announcements
                    </p>
                    <p>Remember to bring a photo ID to get through building security</p>
                    <p>....</p>
                    <p>See you there !</p>
                    <p>Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJs Organizers</p>
                </CardText>
            </Card>
        </section>
    );
}

export default App;
