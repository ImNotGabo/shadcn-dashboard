'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const;
type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
	const [name, setName] = useState('');
	const [userName, setUserName] = useState('');
	return (
		<div className='grid grid-cols-2 gap-2'>
			{SHEET_SIDES.map((side) => (
				<Sheet key={side}>
					<SheetTrigger asChild>
						<Button variant='outline'>{side}</Button>
					</SheetTrigger>
					<SheetContent side={side}>
						<SheetHeader>
							<SheetTitle>Edit profile</SheetTitle>
							<SheetDescription>
								Make changes to your profile here. Click save when you&apos;re
								done.
							</SheetDescription>
						</SheetHeader>
						<div className='grid gap-4 py-4'>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='name'
									className='text-right'
								>
									Name
								</Label>
								<Input
									id='name'
									value={name}
									className='col-span-3'
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='username'
									className='text-right'
								>
									Username
								</Label>
								<Input
									id='username'
									value={userName}
									className='col-span-3'
									onChange={(e) => {
										setUserName(e.target.value);
									}}
								/>
							</div>
						</div>
						<SheetFooter>
							<SheetClose asChild>
								<Button type='submit'>Save changes</Button>
							</SheetClose>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			))}
		</div>
	);
}

export default function Page() {
	const [open, setOpen] = useState(false);
	return (
		<div className='grid grid-cols-3 gap-3'>
			<Button onClick={() => setOpen(true)}>Open</Button>
			<Sheet
				open={open}
				onOpenChange={setOpen}
			>
				<SheetTrigger>Open</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Are you absolutely sure?</SheetTitle>
						<SheetDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
			<SheetSide />
		</div>
	);
}
