import {
    Card,
    CardTitle,
    CardText,
    CardImg
} from 'reactstrap';
import Button from './Atoms/Button';

const App = () => {
    return (
        <section>
            <Card body className="d-flex flex-column flex-md-row text-md-left mt-3">
                <CardImg top style={{ width: "200px" }} src="https://www.hacktiv8.com/images/pages/professional-development/web-developer-program.jpg" className="rounded float-left" alt="..." />
                <div className="flex-grow-1 px-0 px-md-4 mt-3 mt-md-0">
                    <CardTitle tag="h5">Hacktiv8 Meetup</CardTitle>
                    <CardText>
                        <span className="mr-2">Location: </span><b>Jakarta</b>
                    </CardText>
                    <CardText>
                        <span className="mr-2">Members: </span><b>1,078</b>
                    </CardText>
                    <CardText>
                        <span className="mr-2">Organizers: </span><b>Adhy Wirananta</b>
                    </CardText>
                    <Button color="primary">Join Us</Button>
                </div>
            </Card>
        </section>
    );
}

export default App;
