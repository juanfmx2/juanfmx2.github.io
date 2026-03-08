type CardProps = {
  title: string
  icon: string
  link: string
}

export default function Card({ title, icon, link }: CardProps) {

  const go = () => {
    window.location.href = link
  }

  return (

    <div className="card" onClick={go}>

      <h2>
        {icon} {title}
      </h2>

    </div>

  )
}