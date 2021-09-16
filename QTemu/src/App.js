import HeaderComponent from './components/Header';
import NextMeetupComponent from './components/NextMeetup';
import PastMeetupComponent from './components/PastMeetup';
import AboutMeetupComponent from './components/AboutMeetup';
import BannerComponent from './components/Banner';
import MemberComponent from './components/Member';
import ToDoList from './components/ToDoList';

function App() {
    return (
        <div>
            <HeaderComponent />
            <div className="container">
                <BannerComponent />
                <NextMeetupComponent />
                <AboutMeetupComponent />
                <MemberComponent />
                <PastMeetupComponent />
                <ToDoList />
            </div>
            <section className="mt-3 mb-2 text-center">
                <b>Copyright Hacktiv8 @2021</b>
            </section>
        </div>
    );
}

export default App;
