import React from 'react';

interface CommentProps {
  avatar: string;
  username: string;
  timestamp: string;
  commentText: string;
}

const CommentPreview: React.FC<CommentProps> = ({ avatar, username, timestamp, commentText }) => {
    const maxChars=100;
    const truncatedText = commentText.length > maxChars 
    ? commentText.substring(0, maxChars) + "..." 
    : commentText;
  return (
    <div className="max-w-sm border px-6 py-2 rounded-lg m-1 mt-0">
      <div className="flex items-center mb-1">
        <img src={avatar} alt="Avatar" className="w-8 rounded-full mr-2" />
        <div className='flex flex-col text-start'>
          <div className="text-sm font-medium text-gray-800">{username}</div>
          <div className="text-gray-500 text-sm">{timestamp}</div>
        </div>
      </div>
      <p className="text-sm leading-relaxed mb-0 text-justify">{truncatedText}</p>
      
    </div>
  );
};

export default CommentPreview;
