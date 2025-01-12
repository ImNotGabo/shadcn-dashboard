import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Page() {
	return (
		<div className='h-[500px] flex justify-center items-center'>
			<Avatar>
				<AvatarImage
					src='https://avatars.githubusercontent.com/u/132179691?v=4'
					alt='@ImNotGabo'
				/>
				<AvatarFallback>GDR</AvatarFallback>
			</Avatar>

			<p className='m-2'>@ImNotGabo</p>
		</div>
	);
}
