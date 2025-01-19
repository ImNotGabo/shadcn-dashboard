'use client';

import { Payment } from '@/app/data/payment.data';
import { Badge } from '@/components/ui/badge';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: 'clientName',
		header: 'Client Name',
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => {
			const status = row.getValue('status') as string;
			const variant =
				(
					{
						pending: 'outline',
						processing: 'info',
						success: 'success',
						failed: 'destructive',
					} as Record<string, React.ComponentProps<typeof Badge>['variant']>
				)[status] ?? 'default';
			return <Badge variant={variant}>{status}</Badge>;
		},
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'amount',
		header: () => <div>Amount</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue('amount'));
			const formatted = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(amount);

			return <div className='font-medium'>{formatted}</div>;
		},
	},
];
