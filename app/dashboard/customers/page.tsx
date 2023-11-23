import { Suspense } from 'react'
import { lusitana } from '@/app/ui/fonts'

import Search from '@/app/ui/search'
import CustomersTable from '@/app/ui/customers/table'
import { CustomerTableSkeleton } from '@/app/ui/skeletons'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customers'
}

export default async function CustomerPage({ 
  searchParams
}: { 
  searchParams?: { 
    query?: string,
  }
}) {
  const query = searchParams?.query || ''

  return (
    <div className='w-full'>
      <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>

      <div className="mt-4 md:mt-8">
        <Search placeholder="Search customers..." />
      </div>

      <Suspense key={query} fallback={<CustomerTableSkeleton />}>
        <CustomersTable query={query}/>
      </Suspense>
    </div>
  )
}
