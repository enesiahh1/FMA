import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

export default function About() {
    return (
        <div>
            <Nav activePage="active" />
            <Hero
                title="This is the About us page"
                subtitle="Yaaaaaaay you made it"
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