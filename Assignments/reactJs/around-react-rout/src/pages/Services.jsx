import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

export default function Services() {
    return (
        <div>
            <Nav activePage="active" />
            <Hero
                title="Here are our servecis"
                subtitle="Hope we can help you with your problem"
            />

            <Stats
                happyClients="540"
                projectsCompleted="1240"
                ftSpecialties="30"
                awardsWon="15"
            />
        </div>
    );
}