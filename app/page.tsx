import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Gago
      </h1>
      <p className="mb-4">
        {`Hello, my name is Francisco Gago, and I am a Software Engineer at  `}
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
        {`I work remotely within Agile Scrum environments, leading cross-functional 
        teams in the delivery of scalable and high-impact digital solutions. 
        My recent experience includes driving enterprise CMS modernization 
        initiatives, such as upgrading to Magnolia CMS 6, implementing 
        headless architectures with Magnolia CMS 6.4, and leading the migration 
        from on-premise Adobe Experience Manager to Adobe Experience Manager as 
        a Cloud Service (AEMaaCS).`}
        <br /><br />
        {`I am particularly focused on delivering robust, future-ready platforms 
        that align technology strategy with business objectives, ensuring performance, 
        scalability, and long-term sustainability.`}
        <br /><br />
        {`For more information about my professional experience and background, 
        please feel free to visit my LinkedIn profile or GitHub. I would be 
        pleased to connect and explore potential collaboration opportunities.`}
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
