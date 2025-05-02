import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className='w-screen px-2 max-w-3xl'>
      <h1 className="mb-8 text-2xl w-full font-semibold tracking-tighter">
        Pleo2
      </h1>
      <p className="mb-4">
        {`More than 3 years transforming ideas into digital solutions, software developer with a deep enthusiasm for the IT world. My experience covers full-stack web development in React, Node.js, creating high quality web applications, design and performance. allowing me to bring your ideas to the palm of my hand. In the last months I have been dedicated to to the implementation of AI related services such as Microsoft Azure AI, GoApi, Mid Journey, Clip Drop, ChatGpt, Elevenlabs, EdenAI, etc..`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
