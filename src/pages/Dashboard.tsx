import Card from "../components/Card"
import Terminal from "../components/Terminal"

export default function Dashboard() {

  return (

    <div className="dashboard">
        <div className="background">
            <h1>JUAN F. MOSQUERA</h1>
            <p>Full-Stack Developer Control Panel</p>
            <img src="/juanino/juanino.png" alt="Juan F. Mosquera" style={{ width: '50px', height: 'auto' }}/>
        </div>

        <div className="grid">

            <Card title="Projects" icon="💻" link="/projects" />
            <Card title="3D Printing" icon="🖨️" link="/printing" />
            <Card title="Cycling" icon="🚴" link="/cycling" />
            <Card title="Running" icon="🏃" link="/running" />
            <Card title="Volleyball" icon="🏐" link="/volleyball" />
            <Card title="DIY Lab" icon="🛠" link="/diy" />

        </div>

        <Terminal />

    </div>

  )
}