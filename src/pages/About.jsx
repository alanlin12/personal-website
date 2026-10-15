import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="mt-16 max-w-prose">
      <p className="text-sm tracking-wide text-muted">he/him · 中国</p>

      {/* space-y-6 = 24px between paragraphs */}
      <div className="mt-6 space-y-6 font-medium">
        <p>
          i'm a computer science & applied statistics double major for wake forest university. i 
          love learning new things, coding, and trying to tackle hard problems.
        </p>
        <p>
          outside of work, you'll find me trying out different restaurants—i love takoyaki (たこ焼き), i also
          enjoy lounging in cafes, playing mahjong, and going on hikes or any outdoor excursions.
        </p>
        <p>
          i'm always open to new opportunities and learning as much as possible, ways to connect with me
          can be found{' '}
          <Link to="/contact" className="underline underline-offset-2 hover:text-accent">
            <b>here</b>
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
