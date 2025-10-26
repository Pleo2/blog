import { GlassCard } from '@/components/ui/cards/glass-card';
import AnimatedListShow from '@/components/ui/magicui/animated-list-show';
import { BentoCard } from '@/components/ui/magicui/bento-grid';
import { CardContent } from '@/components/ui/card';
import { PcCase } from 'lucide-react';
import { cn } from '@/lib/utils';
import {ComponentPropsWithoutRef, ReactNode} from "react";
import type {IconName} from "lucide-react/dynamic";

const features = [
	{
		Icon: PcCase,
		name: 'WorkStation or Compu',
		description: 'Pc MasterRace & Laptop',
		href: null,
		cta: null,
		className: 'col-span-3 lg:col-span-2',
		background: (
			<AnimatedListShow />
		)
	}
];

interface ContainerSetupCardProps extends ComponentPropsWithoutRef<"div"> {
    name: string;
    className: string;
    background: ReactNode;
    icon: IconName;
    description: string;
    href: string;
    cta: string;
}


export const ContainerSetup = (props: ContainerSetupCardProps) => {
	return (
		<div
			className={cn(
				'hidden lg:flex lg:col-start-6 lg:col-span-2 lg:row-span-2',
			)}
			style={{ animationDelay: '0.5s' }}
		>
			<GlassCard className='p-0 w-full m-0'>
				<CardContent className='p-0 m-0 h-full w-full'>
						<BentoCard {...props} />
				</CardContent>
			</GlassCard>
		</div>
	);
};
