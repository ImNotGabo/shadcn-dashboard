'use client';

import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';

export default function Page() {
	const { toast } = useToast();

	return (
		<div className='grid grid-cols-4 gap-3'>
			<Button
				onClick={() => {
					toast({
						duration: 2000,
						description: 'Your message has been sent.',
					});
				}}
			>
				Show Toast
			</Button>

			<Button
				variant='outline'
				onClick={() => {
					toast({
						title: 'Uh oh! Something went wrong.',
						duration: 2000,
						description: 'There was a problem with your request.',
						variant: 'success',
					});
				}}
			>
				Success
			</Button>
			<Button
				variant='outline'
				onClick={() => {
					toast({
						title: 'Uh oh! Something went wrong.',
						duration: 2000,
						description: 'There was a problem with your request.',
						action: <ToastAction altText='Try again'>Try again</ToastAction>,
					});
				}}
			>
				Show Toast
			</Button>

			<Button
				variant='outline'
				onClick={() => {
					toast({
						variant: 'destructive',
						title: 'Uh oh! Something went wrong.',
						duration: 2000,
						description: 'There was a problem with your request.',
						action: <ToastAction altText='Try again'>Try again</ToastAction>,
					});
				}}
			>
				Destructive
			</Button>
		</div>
	);
}
