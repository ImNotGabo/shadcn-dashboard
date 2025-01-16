'use client';

import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export default function ProgressDemo() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					return 100;
				}
				return prev + 1;
			});
		}, 50);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className='flex justify-center'>
			<Progress
				value={progress}
				indicatorColor={cn({
					'bg-red-500': progress < 50,
					'bg-yellow-500': progress >= 50 && progress < 80,
					'bg-green-500': progress >= 80,
				})}
			/>
		</div>
	);
}
