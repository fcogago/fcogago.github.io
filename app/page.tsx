import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Gago
      </h1>
      <p className="mb-4">
        {`Hello, I'm Francisco Gago and I'm a Software Engineer at `}
        <a target="_blank" href="https://www.knowmadmood.com/es">
          {"knowmad mood".split("").map((char, idx) => (
            <span key={idx} className="color-wave" style={{ animationDelay: `${idx * 0.1}s` }}>
              {char}
            </span>
          ))}
        </a>{`.`}
        <br /><br />
        {`Currently working remotely in an Agile Scrum environment as a lead developer 
        on a purpose built team. Recent projects include porting Magnolia projects to 
        version 6 as well as developing for a B2B with Commercetools. `}
        <br /><br />
        {`But that’s not all: If you want to know more about me you can enter my LinkedIn 
        profile or my GitHub. Also if you want to ask me anything do not hesitate to send 
        an email.`}
      </p>
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">
          Recent posts:
        </h2>
        <BlogPosts />
      </div>
    </section>
  )
}
