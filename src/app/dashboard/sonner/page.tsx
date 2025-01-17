'use client';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

export default function Page() {
	return (
		<div className='grid grid-cols-4 gap-4'>
			<Button
				variant='outline'
				onClick={() =>
					toast('Event has been created', {
						duration: 5000,
						position: 'top-right',
						description: `Sunday, December ${new Date().getFullYear()} at 9:00 AM`,
						action: {
							label: 'Undo',
							onClick: () => console.log('Undo'),
						},
					})
				}
			>
				Show Toast
			</Button>
			<Button
				variant='success'
				onClick={() =>
					toast.success('Event has been created', {
						duration: 5000,
						richColors: true,
						position: 'top-right',
						description: `Sunday, December ${new Date().getFullYear()} at 9:00 AM`,
						action: {
							label: 'Undo',
							onClick: () => console.log('Undo'),
						},
					})
				}
			>
				Show Success
			</Button>
			<Button
				onClick={() =>
					toast.error('Event has not been created', {
						duration: 5000,
						richColors: true,
						position: 'top-right',
						description: `Sunday, December ${new Date().getFullYear()} at 9:00 AM`,
						action: {
							label: 'Undo',
							onClick: () => console.log('Undo'),
						},
					})
				}
			>
				Show Error
			</Button>
			<Button
				variant='ghost'
				onClick={() =>
					toast('Event has been created', {
						duration: 5000,
						position: 'top-right',
						description: `Sunday, December ${new Date().getFullYear()} at 9:00 AM`,
						action: {
							label: 'Undo',
							onClick: () => console.log('Undo'),
						},
					})
				}
			>
				Show Toast
			</Button>
		</div>
	);
}
