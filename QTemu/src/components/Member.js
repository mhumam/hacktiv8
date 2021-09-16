import React from 'react';
import {
    Card,
    CardImg,
    CardTitle,
    CardText
} from 'reactstrap';

const Member = () => {
    return (
        <section>
            <div className="d-flex flex-row justify-content-between">
                <h2>Members</h2>
                <a href="/#">See All</a>
            </div>
            <Card body className="d-flex flex-row">
                <div>
                    <CardImg top style={{ width: "80px", height: "80px" }} className="rounded-circle" src="https://blog.hacktiv8.com/content/images/2017/03/avatar_riza_square.jpg" alt="Card image cap" />
                </div>
                <div className="flex-grow-1 px-4">
                    <CardTitle tag="h5">Organizers</CardTitle>
                    <CardText>
                        <span><b className="mr-2">Aditya Wiranata</b> and <b>4 others.</b></span>
                    </CardText>
                </div>
            </Card>
        </section>
    );
}

export default Member;