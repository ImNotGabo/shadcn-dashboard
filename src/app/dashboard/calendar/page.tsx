'use client';

import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

export default function Page() {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([]);

	const smallDate = date?.toLocaleDateString('en-EN', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	});

	return (
		<div className='flex-col gap-4 sm:flex-wrap sm:flex sm:flex-row'>
			<Calendar
				mode='single'
				selected={date}
				onSelect={setDate}
				className='rounded-md border shadow'
				disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
			/>
			<Calendar
				mode='single'
				selected={date}
				onSelect={setDate}
				className='rounded-md border shadow'
				disabled={(date) => date < new Date()}
			/>
			<Calendar
				mode='multiple'
				selected={multipleDate}
				onSelect={setMultipleDate}
				className='rounded-md border shadow'
			/>

			<div>
				<h1 className='text-3xl'>Info</h1>
				<div className='border-b'></div>
				<p>{smallDate}</p>
				<p>
					{multipleDate?.map((date) => date.toLocaleDateString()).join(', ')}
				</p>
			</div>
		</div>
	);
}
