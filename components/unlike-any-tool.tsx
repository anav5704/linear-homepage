import React from 'react'
import { Zap } from '../public/zap'
import { Linear } from '../public/images/linear'

export const UnlikeAnyTool = () => {
    return (
        <div className='text-center'>
            <h2 className='text-[56px] tracking-tighter leading-[55px]'>
                Unlike any tool <br /> you’ve used before
            </h2>
            <p className='text-primary text-[21px] my-10'>
                Designed to the last pixel and engineered
                <br /> with unforgiving precision, Linear combines
                <br /> UI elegance with world-class performance.
            </p>
            <div className='grid grid-cols-6 gap-[24px]'>
                <div className='min-h-[480px] flex justify-end flex-col tracking-tighter p-10 rounded-[48px] border border-white/10 bg-glass-gradient col-span-4'>
                    <h4 className='text-[26px] mb-2'>Built for your keyboard</h4>
                    <p className='text-lg text-primary'>Fly through your tasks with rapid-fire keyboar <br /> shortcuts for everything. Literally everything.</p>
                </div>
                <div className='min-h-[480px] flex justify-end items-center flex-col relative tracking-tighter p-10 rounded-[48px] border border-white/10 bg-glass-gradient col-span-2'>
                    <div className='animate-zap mask-linear-faded absolute top-[-70px]'>
                        <Zap />
                    </div>
                    <h4 className='text-[26px] mb-2'>Breathtakingly fast</h4>
                    <p className='text-lg text-primary'>Built for speed with 50ms <br /> interactions and real-time sync.</p>
                </div>
                <div className='relative items-center min-h-[480px] flex justify-end flex-col tracking-tighter p-10 rounded-[48px] border border-white/10 bg-glass-gradient col-span-2'>
                    <div className='absolute top-[-80px] w-fit'>
                    <Linear />
                    </div>
                    <h4 className='text-[26px] mb-2'>Designed for modern software teams</h4>
                    <p className='text-lg text-primary'>Comes with built-in workflows <br /> that create focus and routine.</p>
                </div>
                <div className='min-h-[480px] flex justify-end flex-col tracking-tighter p-10 rounded-[48px] border border-white/10 bg-glass-gradient col-span-4'>
                    <h4 className='text-[26px] mb-2'>Meet your command line</h4>
                    <p className='text-lg text-primary'>Complete any action in seconds <br /> with the global command menu.</p>
                </div>
            </div>
        </div>
    )
}
