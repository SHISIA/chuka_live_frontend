// components/ToastNotification.tsx
import React, { useState } from 'react';

type ToastNotificationProps = {
    imageUrl: string;
    name: string;
    message: string;
    timestamp: string;
    onClose?: () => void;
};

const ToastNotification: React.FC<ToastNotificationProps> = ({
    imageUrl,
    name,
    message,
    timestamp,
    onClose,
}) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose?.(); // Trigger any optional onClose callback if provided
    };

    if (!isVisible) return null;

    return (
        <div
            id="toast-notification"
            className="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:text-gray-300"
            role="alert"
           >
            <div className="flex items-center mb-3">
                <button
                    type="button"
                    onClick={handleClose}
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
            <div className="flex items-center">
                <div className="relative inline-block shrink-0">
                    <img
                        className="w-12 h-12 rounded-full"
                        src={imageUrl}
                        alt={`${name} profile image`}
                    />
                </div>
                <div className="ms-2 text-sm font-normal text-start">
                    <div className="text-sm font-semibold text-gray-900">{name}</div>
                    <div className="text-sm font-normal text-gray-600"> {message.length > 100 ? `${message.slice(0, 100)}...` : message}</div>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                        {timestamp}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ToastNotification;
