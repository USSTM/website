import Header from "@/app/_components/general/header";
import Committee from "@/app/about/_components/committee"

export default function PresidentsCommittee() {
    return (
        <section>
            <Header title={`Presidents Committee`} />
            <div className="main">
                <Committee fileName="pres" />
            </div>
        </section>
    )
}