import { MoreVertOutlined, TurnedInNotOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react';

interface PollBoxProps {
    question: string;
    answers: string[];
    selectedOptionId?: number; // Prop for pre-selecting an option if it was selected before
    timestamp: string;
    username: string;
    avatar: string;
    course:string;
}

const PollBox: React.FC<PollBoxProps> = ({username, question, answers = [], selectedOptionId, timestamp ,avatar,course}) => {
    const [options, setOptions] = useState(
        answers.map((answer, index) => ({
            id: index + 1,
            text: answer,
            votes: 0,
        }))
    );
    const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);
    const [selectedOption, setSelectedOption] = useState<number | null>(selectedOptionId || null);
    const maxChars = 30;
    const truncatedText = course.length > maxChars
        ? course.substring(0, maxChars) + "..."
        : course;
    

    const handleVote = (optionId: number) => {
        setOptions((prevOptions) =>
            prevOptions.map((option) =>
                option.id === optionId
                    ? { ...option, votes: option.votes + 1 }
                    : option
            )
        );
        setSelectedOption((prevSelected) => (prevSelected === optionId ? null : optionId)); // Toggle selection
    };

    return (
        <div className="p-4 h-auto bg-white rounded-lg w-full max-w-md mx-auto">
            {/* Top Avatar area */}
            <div className="post m-2 grid grid-cols-2 justify-between mx-4">
                <div>
                    <Avatar src={avatar}></Avatar>
                    <div className="grid grid-cols-1 place-items-start">
                        <p className="text-gray-700">{username}</p>
                        <p className="text-gray-500 text-sm ">{truncatedText}</p>
                    </div>
                </div>
                <div className="flex flex-col text-end justify-center items-end">
                    <IconButton>
                        <MoreVertOutlined />
                    </IconButton>

                </div>
            </div>
            <p className="text-md font-medium mb-4 text-start">
    <b>Question</b>: {question}
</p>
{options.map((option, index) => (
    <div key={option.id} className="mb-3">
        <button
            className={`w-full text-left p-2 rounded-md border transition ${selectedOption === option.id ? "bg-white border-slate-900 text-black" : "bg-white"
                }`}
            onClick={() => handleVote(option.id)}
            disabled={selectedOption !== null} // Disable other buttons once selected
        >
            {index + 1}. {option.text} {/* Display option number */}
        </button>
        {(
            <div className="bg-zinc-500 rounded-sm h-4 mt-1">
                <div
                    className={`${option.votes > 0 ? "bg-black h-4 rounded-sm text-xs text-white text-start pl-2" : "bg-zinc-300 h-4 rounded-sm text-xs text-white text-center pl-2"
                        }`}
                    style={{ width: `${(option.votes / totalVotes) * 100}%` }}
                >
                    {option.votes}
                </div>
            </div>
        )}
    </div>
))}

            <p className="text-gray-600 mt-3">Total votes: {totalVotes}</p>
            <div className='flex flex-row justify-between'>
                <p className="text-gray-500 text-sm italic text-start mx-4 mt-4">Posted {timestamp}</p>
                <IconButton>
                    <TurnedInNotOutlined />
                </IconButton>
            </div>
        </div>
    );
};

export default PollBox;