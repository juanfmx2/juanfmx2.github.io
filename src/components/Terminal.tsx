import { useEffect, useState } from "react"

export default function Terminal() {

  const message =
  "Booting developer dashboard..."

  const [text, setText] = useState<string>("")

  useEffect(() => {

    let i = 0

    const timer = setInterval(() => {

      setText(message.slice(0, i))
      i++

      if (i > message.length)
        clearInterval(timer)

    }, 40)

  }, [])

  return <pre className="terminal">{text}</pre>
}