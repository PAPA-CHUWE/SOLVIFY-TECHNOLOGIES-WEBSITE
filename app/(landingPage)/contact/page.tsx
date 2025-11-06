'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MailIcon, PhoneCall, SendHorizonalIcon } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import React, { useState } from 'react'

const Contact = () => {
  const [industry, setIndustry] = useState('')

  // Update these with your actual industries
  const industries = [
    'Healthcare',
    'Finance',
    'Education',
    'Retail',
    'Manufacturing',
    'Logistics'
  ]

  return (
    <section
      id='contact'
      className='w-full min-h-screen bg-[#000066] text-white flex items-center justify-center py-20 px-6 md:px-0'
    >
      <div className='w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center'>
        {/* LEFT SIDE */}
        <div className='space-y-6'>
          <h5 className='text-[#e3c53c] tracking-widest font-semibold'>
            WE'RE HERE TO HELP YOU
          </h5>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
            Discuss <span className='text-[#e3c53c]'>Your Tech Solution</span>{' '}
            Needs
          </h2>
          <p className='text-slate-300 text-sm leading-relaxed'>
            Are you looking for cutting-edge digital solutions tailored to your
            business? Reach out and let’s transform your ideas into innovation
            together.
          </p>

          <div className='space-y-4 pt-6'>
            <div className='flex items-center gap-5'>
              <PhoneCall className='text-[#e3c53c]' size={36} />
              <div>
                <h4 className='font-semibold'>Phone</h4>
                <p className='text-slate-300 text-sm'>+263 77 123 4567</p>
              </div>
            </div>

            <div className='flex items-center gap-5'>
              <MailIcon className='text-[#e3c53c]' size={36} />
              <div>
                <h4 className='font-semibold'>Email</h4>
                <p className='text-slate-300 text-sm'>tchuwe***@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <Card className='relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_25px_#00ffff40] hover:shadow-[0_0_35px_#00ffff70] transition-all duration-500 rounded-2xl overflow-hidden'>
          {/* Decorative Circle Top Right */}
          <div
            className='absolute top-0 right-0 w-24 h-24 bg-[#e3c53c] rounded-full flex items-center justify-center
               -translate-y-7 translate-x-7 transition-all duration-500 ease-out
               hover:-translate-y-6 hover:translate-x-6'
          />
          <CardContent className='p-8 space-y-6'>
            <form className='space-y-4'>
              <div className='flex flex-col gap-2'>
                <Label className='text-[#e3c53c]'>Name</Label>
                <Input className='bg-white/5 border-white/20 text-white focus:ring-[#e3c53c]' />
              </div>

              <div className='flex flex-col gap-2'>
                <Label className='text-[#e3c53c]'>Email</Label>
                <Input className='bg-white/5 border-white/20 text-white focus:ring-[#e3c53c]' />
              </div>

              <div className='flex flex-col gap-2'>
                <Label className='text-[#e3c53c]'>Industry</Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger className='bg-white/5 border-white/20 text-white focus:ring-[#e3c53c]'>
                    <SelectValue placeholder='Select your industry' />
                  </SelectTrigger>
                  <SelectContent className='bg-[#000066] text-white border-white/20'>
                    {industries.map((ind, idx) => (
                      <SelectItem key={idx} value={ind}>
                        {ind}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className='flex flex-col gap-2'>
                <Label className='text-[#e3c53c]'>Message</Label>
                <Textarea
                  rows={6}
                  maxLength={6}
                  className='bg-white/5 border-white/20 text-white focus:ring-[#e3c53c]'
                />
              </div>

              <Button
                type='submit'
                className='w-full flex items-center justify-center gap-2 mt-4 rounded-lg bg-[#e3c53c] text-[#000066] font-semibold tracking-wider hover:bg-[#000066]/80 hover:text-white hover:ring-1 hover:ring-cyan-400 transition-all'
              >
                Send Message
                <SendHorizonalIcon className='w-5 h-5' />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Contact
