import { GlassCard } from '@/components/ui/cards/glass-card';
import AnimatedListShow from '@/components/ui/magicui/animated-list-show';
import { BentoCard } from '@/components/ui/magicui/bento-grid';
import { CardContent } from '@/components/ui/card';
import { BellIcon, PcCase } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
	{
		Icon: PcCase,
		name: 'WorkStation or Compu',
		description: 'Pc MasterRace & Laptop',
		href: '#',
		cta: null,
		className: 'col-span-3 lg:col-span-2',
		background: (
			<AnimatedListShow className='absolute flex top-1 h-[300px] w-full scale-90 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-95' />
		)
	}
];

export const Setup = () => {
	return (
		<div
			className={cn(
				'hidden lg:flex lg:col-start-6 lg:col-span-2 lg:row-span-2 animate-fade-in-bounce',
				'animate-fade-in-bounce'
			)}
			style={{ animationDelay: '0.4s' }}
		>
			<GlassCard className='p-0 w-full m-0'>
				<CardContent className='p-0 m-0 h-full w-full'>
					{features.map((feature, idx) => (
						<BentoCard key={idx} {...feature} />
					))}
				</CardContent>
			</GlassCard>
		</div>
	);
};
