import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

export default function Home() {
    return (
        <div>
            <Nav activePage="active" />
            <Hero
                title="The effective solutions for your business"
                subtitle="We are a team who creates marketing strategies for B2B and B2C companies"
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