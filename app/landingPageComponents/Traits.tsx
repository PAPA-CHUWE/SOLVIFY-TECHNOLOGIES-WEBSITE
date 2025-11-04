'use client'

import '@/app/globals.css'
import { BrainCircuit, Rocket, Workflow } from 'lucide-react'


//     title: "",
//     icon: ,
//     description:
//       "We harness Artificial Intelligence to automate processes, optimize decisions, and unlock new growth opportunities for your business.",
//     rotation: "-15",
//   },
//   {
//     title: "",
//     icon: <Workflow classNameName="w-10 h-10 text-cyan-400" />,
//     description:
//       "",
//     rotation: "5",
//   },
//   {
//     title: "Impact-Driven Delivery",
//     icon: <Rocket classNameName="w-10 h-10 text-cyan-400" />,
//     description:
//       "",
//     rotation: "25",
//   },
// ];

export default function Traits () {
  return (
    <div className='container'>
      <div
        data-text='AI-Driven Innovation'
        style={{ '--r': '-15' } as React.CSSProperties}
        className='glass'
      >
        <BrainCircuit className='w-16 h-16 text-cyan-400' />
        <p className='justify-center w-full tracking-widest flex items-center px-2 md:text-sm text-xs'>
          We harness Artificial Intelligence to automate processes, optimize
          decisions, and unlock new growth opportunities for your business.
        </p>
      </div>
      <div
        data-text='Agile Engineering'
        style={{ '--r': '5' } as React.CSSProperties}
        className='glass'
      >
        <Workflow className='w-16 h-16 text-cyan-400' />
        <p className='justify-center w-full tracking-widest flex items-center px-2 md:text-sm text-xs'>
          Our agile teams build scalable and adaptive solutions that evolve with
          your business needs—fast, reliable, and future-proof.
        </p>
      </div>
      <div
        data-text='Impact-Driven Delivery'
        style={{ '--r': '25' } as React.CSSProperties}
        className='glass'
      >
        <Rocket className='w-16 h-16 text-cyan-400' />
        <p className='justify-center w-full tracking-widest flex items-center px-2 md:text-sm text-xs'>
          We go beyond software—delivering measurable outcomes, boosting
          efficiency, and transforming organizations for long-term success.
        </p>
      </div>
    </div>
  )
}
