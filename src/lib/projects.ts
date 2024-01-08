import logoPlanetaria from "@/images/logos/planetaria.svg";

export interface ProjectType {
  name: string,
  description: string,
  link: { href: string, label: string },
  logo: any
}

[]

export const projects: ProjectType[] = [
  {
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: {href: 'http://planetaria.tech', label: 'planetaria.tech'},
    logo: logoPlanetaria,
  },

]
