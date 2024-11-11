// components/UserProfileItem.tsx
import React from 'react';

type UserProfileItemProps = {
    imageUrl: string;
    name: string;
    faculty: string;
    description: string;
    maxDescriptionLength?: number;
};

const BookmarkedPostItem: React.FC<UserProfileItemProps> = ({
    imageUrl,
    name,
    faculty,
    description,
    maxDescriptionLength = 60, // Default to 60 characters for truncation
}) => {
    // Truncate description if it exceeds maxDescriptionLength
    const truncatedDescription =
        description.length > maxDescriptionLength
            ? description.slice(0, maxDescriptionLength) + '...'
            : description;

    return (
        <li className="flex flex-col border rounded-lg p-4">
            <div className='flex items-center justify-between gap-16'>
                <img
                    className="w-8 h-8 rounded-full"
                    src={imageUrl}
                    alt={`${name}'s profile`}
                />
                <button
                    type="button"
                    // onClick={handleClose}
                    className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500"
                    aria-label="Close"
                >
                    <span className="sr-only">Close</span>
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col p-0">
                <p className="text-sm text-start font-medium text-gray-900 truncate ">
                    {name}
                </p>
                <div className='flex justify-start items-center'>
                    <span className="text-black">Faculty:</span>
                    <p className="text-sm text-start  truncate dark:text-gray-400">
                        {faculty}
                    </p>
                </div>
            </div>
            <p className="w-60 text-start text-gray-500">{truncatedDescription}</p>
        </li>
    );
};

export default BookmarkedPostItem;
