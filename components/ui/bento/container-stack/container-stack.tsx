import { GlassCard } from '@/components/ui/cards/glass-card';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { SlideFront } from './slide-front';
import { SlideBackend } from './slide-backend';
import { SlideAll } from './slide-all';

export const ContainerStack = () => {
	return (
		<div
			className={cn(
                'col-start-6 row-start-4 col-span-2 row-span-2 overflow-y-hidden rounded-2xl relative animate-fade-in-bounce',
				'sm:col-start-4 sm:row-start-3 sm:col-span-4 sm:row-span-4',
				'lg:col-start-6 lg:row-start-4 lg:col-span-2 lg:row-span-2',
				'md:col-start-3 md:row-start-6 md:col-span-3 md:row-span-2',
				'animate-fade-in-bounce'
			)}
			style={{ animationDelay: '0.5s' }}
		>
			<GlassCard className='flex flex-col gap-2 justify-center'>
				<CardHeader className='flex flex-col items-start lg:px-4 xl:px-6 '>
					{/* <div className="flex gap-2 justify-center items-center text-white">
                        <PocketKnife className="w-4" />
                        <CardTitle className="">My Stack</CardTitle>
                    </div> */}

					{/* <section className="flex gap-1 items-center ">
                        <span className=" text-white/70">
                            Technologies I specialize in
                        </span>
                    </section> */}
				</CardHeader>
				<CardContent className='lg:px-4 xl:px-6'>
					<div className='flex flex-col justify-between gap-4'>
						{/* full stack development */}
						{/* <p className="text-white/80 text-xs ">Frontend</p> */}
						<SlideFront />
						{/* Database and State Management */}
						{/* <p className="text-white/80 text-xs ">Backend</p> */}
						<SlideBackend />
						{/* DevOps and Deployment */}
						{/* <p className="text-white/80 text-xs ">Devops and Deployment</p> */}
						<SlideAll />
					</div>
				</CardContent>
			</GlassCard>
		</div>
	);
};
