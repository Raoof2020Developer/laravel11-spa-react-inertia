import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'


export default function TableHeading({ name, sortable = true, sort_field = null, sort_direction = null, sortChanged = () => {} , children}) {
    return (
        <th onClick={e => sortChanged(name)} className='px-3 py-3'>
            <div className=' flex items-center justify-between gap-1 cursor-pointer'>
                {children}
                {sortable && (
                    <div>
                        <ChevronUpIcon className={'w-4 '
                            + (sort_field == name && sort_direction === 'asc' ? 'text-white' : '')
                        } />
                        <ChevronDownIcon className={'w-4 -mt-1 '
                            + (sort_field == name && sort_direction === 'desc' ? 'text-white' : '')
                        } />
                    </div>
                )}
            </div>
        </th>
    )
}