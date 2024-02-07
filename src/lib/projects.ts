import logoPlanetaria from 'public/images/logos/planetaria.svg'
import logoMiniReact from 'public/images/logos/mini-react.svg'

export interface ProjectType {
  name: string
  description: string
  link: { href: string; label: string }
  logo: any
}

;[]

export const projects: ProjectType[] = [
  {
    name: 'delong-cli',
    description: '自定义脚手架工具，快速搭建react+ts+webpack项目',
    link: {
      href: 'https://www.npmjs.com/package/delong-cli',
      label: 'delong-cli',
    },
    logo: logoPlanetaria,
  },
  {
    name: 'mini-react',
    description: 'mini-react demo',
    link: {
      href: 'https://github.com/lidelong-0201/mini-react',
      label: 'mini-react',
    },
    logo: logoMiniReact,
  },
]
