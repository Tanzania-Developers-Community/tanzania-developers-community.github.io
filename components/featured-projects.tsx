import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const projects = [
  {
    title: "Project Savanna",
    description: "An open-source library for African language processing",
  },
  {
    title: "TechDar",
    description: "A platform connecting Tanzanian tech talent with global opportunities",
  },
  {
    title: "Karibu Pay",
    description: "A secure and efficient mobile payment solution for local businesses",
  }
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

